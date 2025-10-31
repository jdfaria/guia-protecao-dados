
import React from 'react';
import Section from './Section.tsx';
import { PasswordStrengthQuiz } from './InteractiveActivities.tsx';

interface ActivityProps {
  onActivityComplete?: (score: number, total: number) => void;
}

const ActivityPasswordQuiz: React.FC<ActivityProps> = ({ onActivityComplete }) => {
  return (
    <Section title="Atividade: Qual é mais segura?">
      <PasswordStrengthQuiz onComplete={onActivityComplete} />
    </Section>
  );
};

export default ActivityPasswordQuiz;