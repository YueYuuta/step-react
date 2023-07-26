import React from 'react';
import './step-disney.scss';
import { ItemStepDisney } from '../../molecules/ItemStepDisney';

import { dataAcordeon } from '../../../mock/data';

export type StepDisneyProps = {};

const StepDisney: React.FC<StepDisneyProps> = ({}) => {
  return (
    <div className='benefits__multimediia__content'>
      <div className='benefits__multimediia__body' id='content-item-accordeon'>
        <ItemStepDisney dataStep={dataAcordeon}></ItemStepDisney>
      </div>
      <a
        className='linkQuestion'
        target='_blank'
        href='https://pichincha-app.onelink.me/Ugt0/3selu8ag
      '
      >
        ¿No tienes Banca Web? Regístrate
      </a>
    </div>
  );
};

export default StepDisney;
