import styles from "./styles.module.scss";
import {
  ChangeEvent,
  ChangeEventHandler,
  ReactNode,
  useMemo,
  useState,
} from "react";

type Size = "small" | "medium" | "big";

interface SwitchButtonProps {
  className?: string;
  onSwitch?: (
    isActive: boolean
  ) => ChangeEventHandler<HTMLInputElement> | undefined;
  iconOn?: ReactNode;
  iconOff?: ReactNode;
  size?: Size;
}

export default function SwitchButton(props: SwitchButtonProps) {
  const [isActive, setIsActive] = useState<boolean>(false);

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

  const onChangeHandler = (event: ChangeEvent) => {
    const target = event.currentTarget as HTMLInputElement;
    setIsActive(target.checked);
    if (props.onSwitch) props?.onSwitch(target.checked);
  };

  return (
    <label className={`${styles.switchButton} ${sizeClass(props.size)}`}>
      <input
        className={styles.switchButton_input}
        type="checkbox"
        onChange={onChangeHandler}
      />
      <span className={styles.switchButton_circle}>{getIcon()}</span>
      <span className={styles.switchButton_slider} />
    </label>
  );
}
