import { ReactNode } from "react";
import { Varients } from "./varient.tsx";
import { HtmlTagName, Sizes } from "./factory.type.ts";

// you might be wondering why the F am i doing props like this ? Well its just for fun.
export function propsFactory<T, D>(props: T, defaults: D) {
  type FactoryreturnValue = { componentProps : T & D &{children?:ReactNode} , localProps: Object }
  return (providedProps: Partial<D>): FactoryreturnValue => {
    const resolvedProps = { ...defaults, ...props, children:''}
    const mergedProps = { ...resolvedProps, ...providedProps}
    return splitProps(mergedProps,Object.keys(resolvedProps as Object)) as FactoryreturnValue;
  };
}

export type FactoryreturnValue = ReturnType<typeof propsFactory>
interface SplitProps{
   componentProps : Object
   localProps: Object 
}

export function splitProps(props: any, keys: any):SplitProps {
  const componentProps = {} as any
  const localProps = { ...props }
  for (const key of keys) {
    componentProps[key] = props[key]
    delete localProps[key]
  }
  return {componentProps, localProps}
}

interface Component {
  classList: string[];
  color:string
  disabled?:boolean
}

// Define helper functions for other prop sets
export function makeComponentProps(defautls?:Partial<Component>): Component {
  return {
    classList: defautls?.classList ?? [],
    color : defautls?.color ?? '',
    disabled: !!defautls?.disabled
  };
}

export function makeSizeProps(size?: Sizes): {size: string | number} {
  return {
    size: size ?? "default",
  };
}

export function makeTagProps(options: { tag: HtmlTagName }): {tag: HtmlTagName;} {
  return {
    tag: options.tag ?? "div",
  };
}

export function makeThemeProps(): {theme: string} {
  return {
    theme: 'light',
  };
}

export function makeLoaderProps(): {loading:boolean} {
  return {
    loading: false,
  };
}

export function makeVariantProps(variant?:Varients): {variant:Varients} {
  return {
    variant: variant ?? 'elevated',
  };  
}
