export function propsFactory<T, D>(props: T, defaults: D) {
  return (providedProps: Partial<D>): T & D => {
    const mergedProps = { ...defaults, ...props, ...providedProps } as T & D;
    return mergedProps;
  };
}

type IconValue = string; // Assuming IconValue is a string for this example
interface Teme {
  theme: string | undefined;
}
interface Size {
  size: string | number;
}
interface Tag {
  tag: string;
}
interface Component {
  classList: string[];
}
// Define helper functions for other prop sets
export function makeComponentProps(): Component {
  return {
    classList: [],
  };
}
type Sizes = "x-small"| "small"| "default"| "large"| "x-large"
const predefinedSizes:Sizes[] = ["x-small", "small", "default", "large", "x-large"] ;

export function makeSizeProps(size?: Sizes): Size {
  return {
    size: size ?? "default",
  };
}

export function makeTagProps(options: { tag: string }): Tag {
  return {
    tag: "div",
  };
}

export function makeThemeProps(): Teme {
  return {
    theme: undefined,
  };
}