import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "../../store/theme/theme-slice";

import { toast } from "react-toastify";

import { selectTheme } from "../../store/theme/theme.selector";
import { checkUserSession } from "../../store/user/user.actions";

export const alertMessage = (type, msg) => {
  const theme =
    localStorage.theme !== null
      ? localStorage.theme
      : window.matchMedia("(prefers-color-scheme: dark)")
      ? "dark"
      : "light";

  const toastC =
    type === "error"
      ? toast.error
      : type === "info"
      ? toast.info
      : type === "success"
      ? toast.success
      : type === "warn"
      ? toast.warn
      : toast;
  toastC(msg, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: theme,
  });
};
const InitialState = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      dispatch(themeActions.changeMode("dark"));
    }
    if (theme === "dark") {
      document.querySelector("html").setAttribute("data-theme", "dark");
    } else {
      document.querySelector("html").setAttribute("data-theme", "light");
    }
  }, [theme]);
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);
};

export default InitialState;
