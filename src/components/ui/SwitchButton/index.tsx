"use client";
import styles from "./styles.module.scss";
import {
  ChangeEvent,
  ChangeEventHandler,
  InputHTMLAttributes,
  ReactNode,
  useEffect,
  useMemo,
  useState,
  KeyboardEvent,
} from "react";
import classNames from "classnames";

type Size = "small" | "medium" | "big";

interface SwitchButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  onSwitch?: (
    isActive: boolean
  ) => ChangeEventHandler<HTMLInputElement> | undefined;
  iconOn?: ReactNode;
  iconOff?: ReactNode;
  calibre?: Size;
  isActive?: boolean;
}

export default function SwitchButton(props: SwitchButtonProps) {
  const [isActive, setIsActive] = useState<boolean>(props.isActive ?? false);

  useEffect(() => {
    setIsActive(props.isActive ?? false);
  }, [props.isActive]);

  const getIcon = () => {
    if (props.iconOff && props.iconOn) {
      return isActive ? props.iconOn : props.iconOff;
    }

    return <span />;
  };

  const sizeClassesMap = useMemo(
    () => ({
      small: styles.small,
      medium: styles.medium,
      big: styles.big,
    }),
    []
  );

  const sizeClass = (size?: Size) => sizeClassesMap[size || "medium"];
  const switchClasses = classNames(
    styles.switchButton,
    sizeClass(props.calibre)
  );

  const onChangeHandler = (event: ChangeEvent | KeyboardEvent) => {
    const target = event.currentTarget as HTMLInputElement;
    setIsActive(target.checked);
    if (props.onSwitch) props?.onSwitch(target.checked);
  };

  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key.toLowerCase() === "enter") {
      const target = e.currentTarget as HTMLInputElement;
      target.click();
    }
  };

  return (
    <label className={switchClasses}>
      <input
        className={styles.switchButton_input}
        type="checkbox"
        checked={isActive ?? false}
        aria-checked={isActive ?? false}
        onChange={onChangeHandler}
        aria-label={props["aria-label"]}
        onKeyDown={onKeyDownHandler}
      />
      <span className={styles.switchButton_circle}>{getIcon()}</span>
      <span className={styles.switchButton_slider} />
    </label>
  );
}
