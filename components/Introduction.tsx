
import React from 'react';
import Section from './Section.tsx';

const Introduction: React.FC = () => {
  return (
    <Section title="O que são dados pessoais?">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="bg-yellow-100/50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
          <p className="text-lg leading-relaxed text-gray-700">
            São informações que permitem <strong>identificar uma pessoa</strong>. Podem ser informações como o nome, a morada, a data de nascimento, as informações de contacto, e até dados mais sensíveis, como os dados financeiros ou de saúde.
          </p>
        </div>
        <div className="hidden md:flex justify-center items-center">
            <img src="https://via.placeholder.com/400x300.png/10b981/ffffff?text=Segurança+Digital" alt="Ilustração de segurança de dados" className="rounded-lg shadow-xl" />
        </div>
      </div>
    </Section>
  );
};

export default Introduction;