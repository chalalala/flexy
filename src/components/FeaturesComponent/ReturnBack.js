import React from 'react';
import '../../styles/components/_featuresComponent.scss';
import NextPlanIcon from '@mui/icons-material/NextPlan';

export default function ReturnBack({ onClick }) {
  return (
    <div className="flex align-items-center circle-btn featuresComponent-returnBack" onClick={onClick}>
      <NextPlanIcon className="circle-btn__icon" sx={{ fontSize: 32 }} />
      <div className="circle-btn__text">Return Back</div>
    </div>
  );
}
