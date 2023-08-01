import SwitchTheme from "./SwitchTheme";

export default {
  component: SwitchTheme,
  title: "SwitchTheme 01",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {},
};

export const Light = {
  args: {
    isChecked: false,
  },
};

export const Dark = {
  args: {
    isChecked: true,
  },
};

export const onClickLogger = {
  args: {
    isChecked: true,
    onClick: (...args) => console.log("onClick, checked:", args[0]),
  },
};
