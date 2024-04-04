// Types
import {
  FactoryResultType,
  KianComponent,
} from "../../composables/factory.type";
import {
  makeLoaderProps,
  makeVariantProps,
  propsFactory,
  makeComponentProps,
  makeSizeProps,
  makeTagProps,
  makeThemeProps,
} from "../../composables/propsFactory";
// React
import { forwardRef } from "react";
// utiles and hooks
import { clsx } from "clsx";
import { classFactory } from "../../utils/combineNames";
import { genOverlays, useVarient } from "../../composables/varient";
import { makeDensityProps, useDensity } from "../../composables/density";
import { useSize } from "../../composables/size";
// Components
import { Icon } from "..";
import { CircleProgressBar } from "../CircleProgressBar/CircleProgressBar";
// Styles
import "./Button.sass";

interface Props {
  active?: boolean;
  flat?: boolean;
  icon?: string;
  prependIcon?: string;
  appendIcon?: string;
  block?: boolean;
  elavated?: boolean;
  link?: boolean;
}

const defaultProps: Props = {
  active: false,
  flat: false,
  icon: "",
  prependIcon: "",
  appendIcon: "",
  block: false,
  elavated: false,
  link: false,
};

const makeButtonProps = propsFactory(
  {
    ...makeSizeProps("large"),
    ...makeComponentProps(),
    ...makeTagProps({ tag: "button" }),
    ...makeThemeProps(),
    ...makeLoaderProps(),
    ...makeVariantProps("flat"),
    ...makeDensityProps("default"),
  },
  defaultProps
);

type ResolvedIconProps = FactoryResultType<typeof makeButtonProps>;

export const Button = forwardRef<HTMLElement, ResolvedIconProps>(
  function KButton(props, ref) {

    const { componentProps: buttonProps, localProps } = makeButtonProps(props);
    const { colorClasses, colorStyles, variantClasses } = useVarient(
      buttonProps,
      Button.displayName!
    );
    const { sizeClasses, sizeStyles } = useSize(
      buttonProps,
      Button.displayName!
    );
    const { densityClasses } = useDensity(buttonProps, Button.displayName!);
    const Tag = (buttonProps.link  ? "a"  : buttonProps.tag) as unknown as KianComponent<"a" | "button">;

    return (
      <Tag
        ref={ref}
        className={clsx(
          classFactory(
            "v-btn ",
            colorClasses,
            densityClasses,
            variantClasses,
            sizeClasses,
            buttonProps.classList
          ),
          {
            "v-btn--active": buttonProps.active,
            "v-btn--block": !buttonProps.icon && buttonProps.block,
            "v-btn--disabled": buttonProps.disabled,
            "v-btn--elevated": buttonProps.elavated,
            "v-btn--flat": buttonProps.flat,
            "v-btn--icon": !!buttonProps.icon,
            "v-btn--loading": buttonProps.loading,
            "v-btn--slim": false,
          }
        )}
        style={{ ...colorStyles, ...sizeStyles }}
        {...localProps}
      >
        {/* overlays for background colors on tonal and opecity hover */}
        {genOverlays(Button.displayName!)}
        {!buttonProps.icon && buttonProps.prependIcon && (
          <span key="prepend" className="v-btn__prepend">
            <Icon
              color={buttonProps.color}
              icon={buttonProps.prependIcon}
            ></Icon>
          </span>
        )}
        {/* button main conent... */}
        <span className="v-btn__content" data-no-activator="">
          {!buttonProps.icon && buttonProps.children}
        </span>
        {/* append icon */}
        {!buttonProps.icon && buttonProps.appendIcon && (
          <span className="v-btn__append">
            <Icon
              color={buttonProps.color}
              icon={buttonProps.appendIcon}
            ></Icon>
          </span>
        )}
        {/* spinner loader */}
        <span key="loader" className="v-btn__loader">
          {buttonProps.loading && (
            <CircleProgressBar size={buttonProps.size}></CircleProgressBar>
          )}
        </span>
        {/* button icon */}
        {buttonProps.icon && (
          <Icon
            color={buttonProps.color}
            icon={buttonProps.icon}
            size={buttonProps.size}
          ></Icon>
        )}
      </Tag>
    );
  }
);
Button.displayName = "v-btn";
