import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import React from 'react';

export default function ReturnBack(props) {
  return (
    <div className="flex align-items-center circle-btn" to={props.href || '/'}>
      <SettingsBackupRestoreIcon className="circle-btn__icon"/>
      <div className="circle-btn__text">Return Back</div>
    </div>
  );
}
