import { useState } from "react";
import { Button } from "./stories/Button";
import SwitchTheme from "./components/SwitchTheme";

import "./App.css";
import "./scss/bootstrap.scss";

import logoReact from "./assets/img/logo_react.svg";
import logoBootstrap from "./assets/img/logo_bootstrap.svg";
import logoVite from "./assets/img/logo_vite.svg";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="mb-4 fs-1">
        <a href="https://reactjs.org">
          <img alt="React logo" className="logo react spin" src={logoReact} />
        </a>
        {" + "}
        <a href="https://getbootstrap.com">
          <img alt="Bootstrap logo" className="logo bootstrap" src={logoBootstrap} />
        </a>
        {" + "}
        <a href="https://vitejs.dev">
          <img alt="Vite logo" className="logo vite" src={logoVite} />
        </a>
      </div>

      <h1>React:</h1>
      <SwitchTheme />

      <h1>Storybook:</h1>
      <Button
        label={`Count is ${count}`}
        backgroundColor={"white"}
        size={"large"}
        onClick={() => setCount((count) => count + 1)}
      />

      <h1>Bootstrap:</h1>
      <button class="btn btn-primary">Primary button</button>
    </div>
  );
}
