import React from "react";
import { Switch } from "../switch";

const SettingOpt = ({ title, checked, isChild, isSelect }) => {
  return (
    <div className="card">
      <div className="setting-icon"></div>
      <h4>{title}</h4>
      {isSelect && (
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      )}
      <Switch checked={checked} />
      {isChild && (
        <span>
          <i className="arrow up"></i>
        </span>
      )}
    </div>
  );
};

export default SettingOpt;
