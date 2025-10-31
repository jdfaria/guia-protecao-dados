
import React from 'react';
import Section from './Section.tsx';
import { PersonalDataQuiz } from './InteractiveActivities.tsx';

interface ActivityProps {
  onActivityComplete?: (score: number, total: number) => void;
}

const ActivityPersonalData: React.FC<ActivityProps> = ({ onActivityComplete }) => {
  return (
    <Section title="Atividade: O que são Dados Pessoais?">
      <PersonalDataQuiz onComplete={onActivityComplete} />
    </Section>
  );
};

export default ActivityPersonalData;