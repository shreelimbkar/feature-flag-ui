import "./App.css";
import { SettingOpt } from "./components";

function App() {
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
          </div>
        </div>
      </div>
      <div className="setting-container">
        <h2 className="setting-title">Alerts</h2>
        <div className="setting-wrapper">
          <div className="setting-card">
            <SettingOpt title="Alert Manager" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
