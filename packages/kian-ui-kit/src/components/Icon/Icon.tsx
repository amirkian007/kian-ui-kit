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
import { useSize } from "../../composables/size";
import { useTextColors } from "../../composables/color";
import { KianComponentProps, FactoryResultType, KianComponent } from "../../composables/factory.type";

import "./Icon.sass";

type Props = {
  color?: string;
  disabled?: boolean;
  start?: boolean;
  end?: boolean;
  icon: string;
};

type IconProps = KianComponentProps<Props>

const defaultProps: IconProps = {
  disabled: false,
  start: false,
  end: false,
  icon: "default-icon",
};

const makeVIconProps = propsFactory(
  {
    ...makeSizeProps("default"),
    ...makeComponentProps(),
    ...makeTagProps({ tag: "i" }),
    ...makeThemeProps(),
  },
  defaultProps
);

type ResolvedIconProps =FactoryResultType<typeof makeVIconProps>

export const Icon = forwardRef<HTMLElement, ResolvedIconProps>(function VIcon(props, ref) {
  const { componentProps: IconProps, localProps } = makeVIconProps(props);

  const { sizeClasses } = useSize(IconProps, Icon.displayName!);
  const { textColorClasses, textColorStyles } = useTextColors(IconProps);
  const Tag = IconProps.tag as unknown as KianComponent<"i">;
  return (
    <Tag
      ref={ref}
      {...localProps}
      className={clsx(
        classFactory(
          "k-icon",
          IconProps.icon,
          sizeClasses,
          textColorClasses,
          IconProps.classList
        ),
        {
          "k-icon--disabled": IconProps.disabled,
          "k-icon--start": IconProps.start,
          "k-icon--end": IconProps.end,
        }
      )}
      style={{
        fontSize: (!sizeClasses && convertToUnit(IconProps.size)) || "",
        height: (!sizeClasses && convertToUnit(IconProps.size)) || "",
        width: (!sizeClasses && convertToUnit(IconProps.size)) || "",
        ...textColorStyles,
      }}
    ></Tag>
  );
});

Icon.displayName = "k-icon";
