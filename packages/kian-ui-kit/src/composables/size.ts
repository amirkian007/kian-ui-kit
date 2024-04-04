import { convertToUnit } from "../utils/Unit";

type Sizes = "x-small" | "small" | "default" | "large" | "x-large";
const predefinedSizes: Sizes[] = [
  "x-small",
  "small",
  "default",
  "large",
  "x-large",
];

export interface SizeProps {
  size?: string | number | Sizes;
}
// move this to utils
export function includes(arr: readonly any[], val: any) {
  return arr.includes(val);
}

export function useSize(props: SizeProps, name: string) {
  let sizeClasses;
  let sizeStyles;
  if (includes(predefinedSizes, props.size)) {
    sizeClasses = `${name}--size-${props.size}`;
  } else if (props.size) {
    sizeStyles = {
      width: convertToUnit(props.size),
      height: convertToUnit(props.size),
    };
  }
  return { sizeClasses, sizeStyles };
}
