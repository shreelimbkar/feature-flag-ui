import React from "react";
import { Switch } from "../switch";

const SettingOpt = (props) => {
  const { title } = props;
  return (
    <div className="card">
      <div className="setting-icon"></div>
      <h4>{title}</h4>
      <Switch />
    </div>
  );
};

export default SettingOpt;
