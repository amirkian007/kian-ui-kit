import {  forwardRef } from "react";
import { FactoryResultType, KianComponent, KianComponentProps } from "../../composables/factory.type";
import {
  makeLoaderProps,
  makeVariantProps,
  propsFactory,
} from "../../composables/propsFactory";
import {
  makeComponentProps,
  makeSizeProps,
  makeTagProps,
  makeThemeProps,
} from "../../composables/propsFactory";
import { clsx } from "clsx";
import { classFactory } from "../../utils/combineNames";
import { useVarient } from "../../composables/varient";
import { makeDensityProps, useDensity } from "../../composables/density";
import './Btn.sass'
import { useSize } from "../../composables/size";

interface Props {
  active?: boolean;
  flat?: boolean;
  icon?: string;
  prependIcon?: string;
  appendIcon?: string;
  block?: boolean;
  elavated?: boolean;
}

type ButtonProps = KianComponentProps<Props>

const defaultProps: Props = {
  active: false,
  flat: false,
  icon: "",
  prependIcon: "",
  appendIcon: "",
  block: false,
  elavated: false,
};

const makeButtonProps = propsFactory(
  {
    ...makeSizeProps("x-large"),
    ...makeComponentProps(),
    ...makeTagProps({ tag: "button" }),
    ...makeThemeProps(),
    ...makeLoaderProps(),
    ...makeVariantProps("outlined"),
    ...makeDensityProps(),
  },
  defaultProps
);

type ResolvedIconProps =FactoryResultType<typeof makeButtonProps>

export const Button = forwardRef<HTMLElement, ResolvedIconProps>(function KButton(
  props,
  ref
) {
  // const { borderClasses } = useBorder(props)

  const { componentProps: buttonProps, localProps } = makeButtonProps(props);
   
  const { colorClasses, colorStyles, variantClasses } = useVarient(
    buttonProps,
    Button.displayName!
  );
  const {sizeClasses,sizeStyles} = useSize(buttonProps,Button.displayName!)
  const { densityClasses } = useDensity(buttonProps, Button.displayName!);
  const Tag = buttonProps.tag as unknown as KianComponent<"a" | "button">;
  return (
    <Tag
    ref={ref}
    className={clsx(classFactory("v-btn ",colorClasses,densityClasses,variantClasses ,sizeClasses,buttonProps.classList), {
        "v-btn--active": buttonProps.active,
        "v-btn--block": buttonProps.block,
        "v-btn--disabled": buttonProps.disabled,
        "v-btn--elevated": buttonProps.elavated,
        "v-btn--flat": buttonProps.flat,
        "v-btn--icon": !!buttonProps.icon,
        "v-btn--loading": buttonProps.loading,
        "v-btn--slim": true,
      })}
      style={{...colorStyles,...sizeStyles}}
      {...localProps}
    >
        {buttonProps.children}
    </Tag>
  );
});
Button.displayName = "v-btn";
