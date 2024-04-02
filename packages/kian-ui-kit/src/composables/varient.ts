import { useColor } from "./color";

export type Varients =
  | "flat"
  | "text"
  | "elevated"
  | "tonal"
  | "outlined"
  | "plain";

export const allowedVariants = [
  "elevated",
  "flat",
  "tonal",
  "outlined",
  "text",
  "plain",
] as const;

interface Varienta {
  variant: Varients;
  color: string;
}
export function useVarient(props: Varienta, name: string) {
  const variantClasses = `${name}--variant-${props.variant}`;
  const { colorClasses, colorStyles } = useColor({
    [["elevated", "flat"].includes(props.variant) ? "background" : "text"]:
      'hot',
  });

  return { colorClasses, colorStyles, variantClasses };
}
