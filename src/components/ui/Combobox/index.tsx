import { ChangeEvent, ChangeEventHandler } from "react";

export interface ComboboxItem {
  value: string | number;
  name: string | number;
}

interface ComboboxProps {
  items: ComboboxItem[];
  onChange?: (event: ChangeEvent) => void;
  defaultValue?: string | number | readonly string[];
  className?: string;
}

export function Combobox(props: ComboboxProps) {
  return (
    <select
      onChange={props.onChange}
      className={`px--2 text--highlight bg--lead shadow--xy round ${props.className}`}
      defaultValue={props.defaultValue}
    >
      {props.items.map((item) => (
        <option key={`combobox-${item.name}-${item.value}`} value={item.value}>
          {item.name}
        </option>
      ))}
    </select>
  );
}
