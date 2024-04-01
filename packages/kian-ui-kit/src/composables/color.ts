export function useColor(props: ColorProps) {
    let colorClasses;
    let colorStyles;
    if ((typeof props.color === 'string')&& !props.color.includes('#')) {
      colorClasses = `text-${props.color}`;
    } else if (props.color) {
      colorStyles = {
        color: props.color
      };
    }
    return { colorClasses, colorStyles };
  }
  export interface ColorProps {
    color?: string;
  }