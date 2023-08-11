"use client";

import { KeyboardEvent, PropsWithChildren, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import classnames from "classnames";

export interface RadioIconValue {
  checked: boolean;
  value: string | number;
}

export interface RadioIconProps extends PropsWithChildren {
  onChange?: (value: RadioIconValue) => void;
  isChecked?: boolean;
  value: string | number;
}

export default function RadioIcon(props: RadioIconProps) {
  const [isChecked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(props.isChecked ?? false);
  }, [props.isChecked]);

  const checkIconHandler = () => {
    if (props.onChange)
      props.onChange({ checked: !isChecked, value: props.value });
    setChecked(!isChecked);
  };

  const onKeyDownHandler = (e: KeyboardEvent<HTMLLabelElement>) => {
    if (e.key.toLowerCase() === "enter") {
      const target = e.currentTarget as HTMLLabelElement;
      target.click();
    }
  };

  const classes = classnames(styles.radioIcon, { [styles.active]: isChecked });

  return (
    <label
      className={classes}
      onClick={checkIconHandler}
      tabIndex={0}
      onKeyDown={onKeyDownHandler}
    >
      {props.children}
    </label>
  );
}
