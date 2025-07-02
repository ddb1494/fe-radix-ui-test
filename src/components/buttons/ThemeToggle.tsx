import { useEffect } from "react";
import { IconButton } from "@radix-ui/themes";
import { SunIcon, MoonIcon, DesktopIcon } from "@radix-ui/react-icons";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  setTheme,
  updateSystemTheme,
  type ThemeMode,
} from "../../store/themeSlice";

export default function ThemeToggle() {
  const dispatch = useAppDispatch();
  const { mode } = useAppSelector((state) => state.theme);

  // 시스템 테마 변경 감지
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      dispatch(updateSystemTheme());
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [dispatch]);

  const cycleTheme = () => {
    const themeOrder: ThemeMode[] = ["light", "dark", "system"];
    const currentIndex = themeOrder.indexOf(mode);
    const nextIndex = (currentIndex + 1) % themeOrder.length;
    dispatch(setTheme(themeOrder[nextIndex]));
  };

  const getIcon = () => {
    switch (mode) {
      case "light":
        return <SunIcon />;
      case "dark":
        return <MoonIcon />;
      case "system":
        return <DesktopIcon />;
      default:
        return <SunIcon />;
    }
  };

  const getTooltip = () => {
    switch (mode) {
      case "light":
        return "라이트 모드 (다크 모드로 전환)";
      case "dark":
        return "다크 모드 (시스템 모드로 전환)";
      case "system":
        return "시스템 모드 (라이트 모드로 전환)";
      default:
        return "테마 전환";
    }
  };

  return (
    <IconButton
      variant="ghost"
      size="2"
      onClick={cycleTheme}
      title={getTooltip()}
      aria-label={getTooltip()}
    >
      {getIcon()}
    </IconButton>
  );
}
