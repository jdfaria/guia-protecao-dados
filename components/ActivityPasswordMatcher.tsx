
import React from 'react';
import Section from './Section.tsx';
import { PasswordPitfallMatcher } from './InteractiveActivities.tsx';

interface ActivityProps {
  onActivityComplete?: (score: number, total: number) => void;
}

const ActivityPasswordMatcher: React.FC<ActivityProps> = ({ onActivityComplete }) => {
  return (
    <Section title="Atividade: Combina as Armadilhas">
      <PasswordPitfallMatcher onComplete={onActivityComplete} />
    </Section>
  );
};

export default ActivityPasswordMatcher;