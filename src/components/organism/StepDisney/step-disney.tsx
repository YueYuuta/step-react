import React from 'react';
import './step-disney.scss';
import { ItemStepDisney } from '../../molecules/ItemStepDisney';

import { dataAcordeon } from '../../../mock/data';

export type StepDisneyProps = {};

const StepDisney: React.FC<StepDisneyProps> = ({}) => {
  return <ItemStepDisney dataStep={dataAcordeon}></ItemStepDisney>;
};

export default StepDisney;
