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
    props.color,
  });

  return { colorClasses, colorStyles, variantClasses };
}

export function genOverlays ( name: string) {
  return (
    <>
       <span key="overlay" className={ `${name}__overlay` } /> 
       <span key="underlay" className={ `${name}__underlay` } />
    </>
  )
}
