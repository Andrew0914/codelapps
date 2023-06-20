"use client";
import React, {
  PropsWithChildren,
  ReactElement,
  useEffect,
  useState,
} from "react";
import { RadioIconValue } from "./RadioIcon";

export interface RadioIconGroupProps extends PropsWithChildren {
  onSelect?: (value: string | number) => void;
  initialValue?: string | number;
  className?: string;
}

export default function RadioIconGroup({
  children,
  onSelect,
  initialValue,
  className,
}: RadioIconGroupProps) {
  const [selectedValue, setSelectedValue] = useState<string | number>("");

  useEffect(() => {
    if (initialValue) setSelectedValue(initialValue);
  }, [initialValue]);

  const handleChange = (values: RadioIconValue) => {
    const newValue = values.value;
    if (newValue !== selectedValue) setSelectedValue(newValue);
    if (onSelect) onSelect(newValue);
  };

  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        const radio = child as ReactElement;

        return React.cloneElement(radio, {
          isChecked: selectedValue === radio.props.value,
          onChange: handleChange,
        });
      })}
    </div>
  );
}
