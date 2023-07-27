import React from 'react';
import './step-disney.scss';
import { ItemStepDisney } from '../../molecules/ItemStepDisney';

import { dataAcordeon } from '../../../mock/data';

export type StepDisneyProps = {};

const StepDisney: React.FC<StepDisneyProps> = ({}) => {
  return (
    <section className='benefits hidde-lg pt-benedicios'>
      <div className='benefits__header'>
        <h5 className='benefits__title-small'>Beneficios</h5>
        <h1 className='benefits__title-big'>
          Maneja tu dinero desde cualquier parte
        </h1>
        <h5 className='benefits__title-midium'>
          Descubre todo lo que puedes hacer con Banca Web.
        </h5>
      </div>
      <ItemStepDisney dataStep={dataAcordeon}></ItemStepDisney>
    </section>
  );
};

export default StepDisney;
