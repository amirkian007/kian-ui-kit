import { ElementType, FunctionComponent, HtmlHTMLAttributes } from "react";
import { FactoryreturnValue } from "./propsFactory";

export type KianComponent<T extends ElementType> = FunctionComponent<
  HtmlHTMLAttributes<T> & { ref?: any }
>;

export type KianComponentProps<T> = T & HtmlHTMLAttributes<""> & { ref?: any }
 
export type FactoryResultType<T extends FactoryreturnValue> = Partial<ReturnType<T>['componentProps']>
