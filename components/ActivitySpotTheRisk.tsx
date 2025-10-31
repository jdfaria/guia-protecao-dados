
import React from 'react';
import Section from './Section.tsx';
import { SpotTheRiskGame } from './InteractiveActivities.tsx';

interface ActivityProps {
  onActivityComplete?: (score: number, total: number) => void;
}

const ActivitySpotTheRisk: React.FC<ActivityProps> = ({ onActivityComplete }) => {
  return (
    <Section title="Atividade: Deteta o Risco">
      <SpotTheRiskGame onComplete={onActivityComplete} />
    </Section>
  );
};

export default ActivitySpotTheRisk;