import React from 'react';
import './step-disney.scss';
import { ItemStepDisney } from '../../molecules/ItemStepDisney';

import { dataAcordeon } from '../../../mock/data';
import { ItemStepDisneyMobile } from '../../molecules/ItemStepDisneyMobile';

export type StepDisneyProps = {};

const StepDisney: React.FC<StepDisneyProps> = ({}) => {
  // return <ItemStepDisney dataStep={dataAcordeon}></ItemStepDisney>;
 return <ItemStepDisneyMobile dataStep={dataAcordeon}></ItemStepDisneyMobile>
};

export default StepDisney;
