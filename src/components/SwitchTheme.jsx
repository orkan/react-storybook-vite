import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import "./SwitchTheme.css";

/*
 * ----------------------------------------------------------------------------
 * HOOKS:
 */
function useBSTheme(isDark) {
  const [dark, setDark] = useState(isDark);

  useEffect(() => {
    let theme = "light";
    if (null === dark) {
      theme = localStorage.getItem("theme") ?? theme;
    } else {
      theme = dark ? "dark" : theme;
    }
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
    setDark("dark" === theme);
  }, [dark]);

  return [dark, setDark];
}

/*
 * ----------------------------------------------------------------------------
 * COMPONENT:
 * @link https://codesandbox.io/s/bootstrap-dark-theme-in-react-forked-rjhyj3?file=/src/App.js
 */
const SwitchTheme = ({ isChecked = null, onClick }) => {
  const [checked, setChecked] = useBSTheme(isChecked);

  function handleChange(e) {
    setChecked(e.target.checked);
    onClick && onClick(e.target.checked);
  }

  return (
    <Form>
      <Form.Check // prettier-ignore
        className="justify-content-md-center"
        type="switch"
        id="theme-switch"
        label={checked ? "Dark mode" : "Light mode"}
        checked={checked}
        onChange={handleChange}
      />
    </Form>
  );
};

SwitchTheme.propTypes = {
  /**
   * Set dark theme? Use NULL to read last user choice.
   */
  isChecked: PropTypes.bool,
  /**
   * Optional click handler.
   */
  onClick: PropTypes.func,
};

SwitchTheme.defaultProps = {
  isChecked: undefined,
  onClick: undefined,
};

export default SwitchTheme;
