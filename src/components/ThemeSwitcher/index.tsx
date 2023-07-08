"use client";
import SwitchButton from "../ui/SwitchButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import { useCallback, useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function ThemSwitcher() {
  const [isLightMode, seIsLightMode] = useState(false);
  const onDesktop = useMediaQuery("(min-width:992px)", { noSsr: true });

  useEffect(() => {
    seIsLightMode(document.querySelector("body")!.className === "light");
  }, []);

  useEffect(() => {
    if (onDesktop)
      seIsLightMode(document.querySelector("body")!.className === "light");
  }, [onDesktop]);

  const changeTheme = (classTheme: "light" | "dark") => {
    document.querySelector("body")!.className = classTheme;
  };

  return (
    <SwitchButton
      size="small"
      iconOn={<LightModeIcon fontSize="small" />}
      iconOff={<ModeNightIcon fontSize="small" />}
      onSwitch={(isActive: boolean) => {
        changeTheme(isActive ? "light" : "dark");
        return undefined;
      }}
      isActive={isLightMode}
    />
  );
}
