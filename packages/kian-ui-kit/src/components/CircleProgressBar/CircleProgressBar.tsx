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

type Props = {

};

type CircleProgressProps = KianComponentProps<Props>;

const defaultProps: CircleProgressProps = {};

const makeCircleProgressProps = propsFactory(
  {
    ...makeSizeProps("default"),
    ...makeComponentProps(),
  },
  defaultProps
);

type ResolvedIconProps = FactoryResultType<typeof makeCircleProgressProps>;

export const CircleProgressBar = forwardRef<SVGElement, ResolvedIconProps>(
  function KCircleProgressaBar(props, red) {
    const CircleProgressBarss = makeCircleProgressProps(props);
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
