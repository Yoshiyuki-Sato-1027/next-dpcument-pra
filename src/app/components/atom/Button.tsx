import { useRef, ReactNode } from "react";
import { useButton, AriaButtonProps } from "@react-aria/button";

interface ButtonProps extends AriaButtonProps {
  children: ReactNode;
}

export function Button(props: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, ref);

  return (
    <button {...buttonProps} ref={ref}>
      {props.children}
    </button>
  );
}
