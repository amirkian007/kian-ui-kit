import { forwardRef } from "react";
import "./CircleProgressBar.sass";
import { useSize } from "../../composables/size";
import {
  FactoryResultType,
  KianComponentProps,
} from "../../composables/factory.type";
import {
  makeComponentProps,
  makeSizeProps,
  propsFactory,
} from "../../composables/propsFactory";
import { classFactory } from "../../utils/combineNames";
import clsx from "clsx";
import { useTextColors } from "../../composables/color";

interface ProgressProps {
  size: number;
}

type Props = {
  color?: string;
  disabled?: boolean;
  start?: boolean;
  end?: boolean;
  icon: string;
};

type IconProps = KianComponentProps<Props>;

const defaultProps: IconProps = {
  disabled: false,
  start: false,
  end: false,
  icon: "default-icon",
};
makeComponentProps;
const makeVIconProps = propsFactory(
  {
    ...makeSizeProps("default"),
    ...makeComponentProps(),
  },
  defaultProps
);

type ResolvedIconProps = FactoryResultType<typeof makeVIconProps>;

export const CircleProgressBar = forwardRef<SVGElement, ResolvedIconProps>(
  function KCircleProgressaBar(props, red) {
    const CircleProgressBarss = makeVIconProps(props);
    const { textColorClasses, textColorStyles } =
      useTextColors(CircleProgressBarss);

    const { sizeClasses, sizeStyles } = useSize(
      CircleProgressBarss.componentProps,
      CircleProgressBar.displayName!
    );
    return (
      <div
        className={clsx(
          classFactory("v-circle-progress", sizeClasses, textColorClasses)
        )}
        style={{ ...textColorStyles, ...sizeStyles }}
      >
        <div
          className={clsx(
            classFactory("v-circle-progress-spinner ", sizeClasses)
          )}
          style={sizeStyles}
        ></div>
      </div>
    );
  }
);
CircleProgressBar.displayName = "v-circle-progress";
