
import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Introduction from './components/Introduction.tsx';
import OnlineProtectionTips from './components/OnlineProtectionTips.tsx';
import PasswordGuide from './components/PasswordGuide.tsx';
import PasswordCreator from './components/PasswordCreator.tsx';
import PasswordChecker from './components/PasswordChecker.tsx';
import PasswordPitfalls from './components/PasswordPitfalls.tsx';
import Footer from './components/Footer.tsx';
import Navigation from './components/Navigation.tsx';
import ActivityPersonalData from './components/ActivityPersonalData.tsx';
import ActivitySpotTheRisk from './components/ActivitySpotTheRisk.tsx';
import ActivityPasswordMatcher from './components/ActivityPasswordMatcher.tsx';
import ActivityPasswordQuiz from './components/ActivityPasswordQuiz.tsx';
import Certificate from './components/Certificate.tsx';

const sectionComponents = [
  Introduction,
  ActivityPersonalData,
  OnlineProtectionTips,
  ActivitySpotTheRisk,
  PasswordGuide,
  PasswordCreator,
  PasswordChecker,
  PasswordPitfalls,
  ActivityPasswordMatcher,
  ActivityPasswordQuiz,
  Certificate,
];

const activityIndices = [1, 3, 8, 9];

type Scores = { [key: number]: { score: number; total: number } };

const App: React.FC = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [completedActivities, setCompletedActivities] = useState<Set<number>>(new Set());
  const [scores, setScores] = useState<Scores>({});

  const handleNext = () => {
    if (currentSectionIndex < sectionComponents.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
    }
  };

  const handleActivityComplete = (activityIndex: number, score: number, total: number) => {
    setCompletedActivities(prev => new Set(prev).add(activityIndex));
    setScores(prev => ({
      ...prev,
      [activityIndex]: { score, total }
    }));
  };

  // Scroll to top when section changes for better user experience
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [currentSectionIndex]);

  const CurrentSection = sectionComponents[currentSectionIndex];
  const isFinalPage = currentSectionIndex === sectionComponents.length - 1;

  const isCurrentSectionActivity = activityIndices.includes(currentSectionIndex);
  const isNextDisabled = isCurrentSectionActivity && !completedActivities.has(currentSectionIndex);
  
  const previousSectionIndex = currentSectionIndex - 1;
  const wasPreviousSectionACompletedActivity = 
    previousSectionIndex >= 0 &&
    activityIndices.includes(previousSectionIndex) &&
    completedActivities.has(previousSectionIndex);

  const isPrevDisabled = isCurrentSectionActivity || wasPreviousSectionACompletedActivity;

  const totalScore = Object.values(scores).reduce((acc, s) => acc + s.score, 0);
  const totalPossible = Object.values(scores).reduce((acc, s) => acc + s.total, 0);

  return (
    <div className="min-h-screen bg-amber-50 font-sans text-gray-800 pb-32">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-12">
        {isCurrentSectionActivity
          ? React.createElement(
              CurrentSection as React.FC<{ onActivityComplete: (score: number, total: number) => void }>,
              { onActivityComplete: (score: number, total: number) => handleActivityComplete(currentSectionIndex, score, total) }
            )
          : isFinalPage 
          ? <Certificate totalScore={totalScore} totalPossible={totalPossible} />
          : React.createElement(CurrentSection, null)}
      </main>
      {!isFinalPage && <Footer />}
      {!isFinalPage && (
        <Navigation
          currentSection={currentSectionIndex}
          totalSections={sectionComponents.length}
          onPrev={handlePrev}
          onNext={handleNext}
          isNextDisabled={isNextDisabled}
          isPrevDisabled={isPrevDisabled}
        />
      )}
    </div>
  );
};

export default App;