export interface DensityProps {
  density?: Density;
}
export type Density = null | "default" | "comfortable" | "compact";

export function makeDensityProps(density?: Density): { density: Density } {
  return {
    density: "default",
  };
}

export function useDensity(props: DensityProps, name: string) {
  const densityClasses = `${name}--density-${props.density}`;
  return { densityClasses };
}
