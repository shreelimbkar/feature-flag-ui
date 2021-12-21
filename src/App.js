import React, { useState } from "react";
import "./App.css";
import { SettingOpt } from "./components";

function App() {
  const [isChild, setIsChild] = useState(false);
  const [isSelect, setIsSelect] = useState(false);
  return (
    <div className="container">
      <div className="setting-container">
        <h2 className="setting-title">General</h2>
        <div className="setting-wrapper">
          <div className="setting-card">
            <SettingOpt title="Case Management" />
          </div>
          <div className="setting-card">
            <SettingOpt title="Map timeline" />
          </div>
          <div className="setting-card">
            <SettingOpt title="Views briefings" />
          </div>
          <div className="setting-card">
            <SettingOpt title="Notifications" />
          </div>
          <div className="setting-card">
            <SettingOpt title="Mass communications" />
          </div>
          <div className="setting-card">
            <SettingOpt title="Traffic cameras" />
          </div>
        </div>
      </div>
      <div className="setting-container">
        <h2 className="setting-title">Settings</h2>
        <div className="setting-wrapper">
          <div className="setting-card">
            <SettingOpt title="Audit Logs" />
            <div className="setting-card child">
              <SettingOpt title="Users" isChild={true} />
              <div className="children">
                <SettingOpt title="User Add" />
              </div>
              <div className="children">
                <SettingOpt title="User Delete" />
              </div>
              <div className="children">
                <SettingOpt title="User Edit" />
              </div>
              <div className="children">
                <SettingOpt title="Max Users" isSelect={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="setting-container">
        <h2 className="setting-title">Alerts</h2>
        <div className="setting-wrapper">
          <div className="setting-card">
            <SettingOpt title="Alert Manager" />
            <div className="children">
              <SettingOpt title="Alert Rules" isSelect={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
