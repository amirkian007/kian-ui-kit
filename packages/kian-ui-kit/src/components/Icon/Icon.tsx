import { ElementType, FunctionComponent, HtmlHTMLAttributes } from "react";
import { forwardRef } from "react";
import { classFactory } from "../../utils/combineNames";

import { clsx } from "clsx";
import {
  propsFactory,
  makeComponentProps,
  makeSizeProps,
  makeTagProps,
  makeThemeProps,
 
} from "../../composables/propsFactory";
import { convertToUnit } from "../../utils/Unit";
import "./Vicon.sass";
import { useSize } from "../../composables/size";
import { useColor } from "../../composables/color";

interface IconProps {
  color?: string;
  disabled?: boolean;
  start?: boolean;
  end?: boolean;
  icon: IconValue;
}

type IconValue = string;

const defaultProps: IconProps = {
  color: "black",
  disabled: false,
  start: false,
  end: false,
  icon: "default-icon",
};

const makeVIconProps = propsFactory(
  {
    ...makeSizeProps("x-large"),
    ...makeComponentProps(),
    ...makeTagProps({ tag: "i" }),
    ...makeThemeProps(),
  },
  defaultProps
);
 
export type KianComponent<
  T extends ElementType,
> = FunctionComponent<HtmlHTMLAttributes<T> & { ref?: any }>

export const Icon = forwardRef<HTMLElement, IconProps>(function VIcon(props, ref) {

  const IconProps = makeVIconProps(props);
  const { sizeClasses } = useSize(IconProps,Icon.displayName!);
  const { colorClasses, colorStyles } = useColor(IconProps);
 
  const Tag = 'i' as unknown as KianComponent<'i'>
  return (
    <Tag
      ref={ref}
      className={clsx(
        classFactory(
          "k-icon text-success",
          IconProps.icon,
          sizeClasses,
          colorClasses,
          IconProps.classList
        ),
        {
          "k-icon--disabled": IconProps.disabled,
          "k-icon--start": IconProps.start,
          "k-icon--end": IconProps.end,
        }
      )}
      style={
         {
          fontSize: !sizeClasses && convertToUnit(IconProps.size) || '',
          height: !sizeClasses && convertToUnit(IconProps.size) || '',
          width: !sizeClasses && convertToUnit(IconProps.size) || '',
          ...colorStyles
        }
      }
      
    ></Tag>
  );
});

Icon.displayName = "k-icon"