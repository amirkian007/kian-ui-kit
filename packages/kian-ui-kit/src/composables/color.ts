type ColorValue = string | null | undefined;
export function isCssColor(color?: string | null | false): boolean {
  return !!color && /^(#|var\(--|(rgb|hsl)a?\()/.test(color);
}

interface colorArgs {
  background?: ColorValue, text?: ColorValue
}
export function useColor(colors:colorArgs) {
  const classes: string[] = [];
  const styles: any = {}
  
  if (colors.text) {
    if (isCssColor(colors.text)) {
      styles.color = colors.text
    } else {
      classes.push(`text-${colors.text}`);
    }
  }
  if (colors.background) {
    if (isCssColor(colors.background)) {
      styles.backgroundColor = colors.background
     
    } else {
      classes.push(`bg-${colors.background}`);
    }
  }

  return { colorClasses: classes, colorStyles:styles };
}
export interface ColorProps {
  color: string;
}

export function useTextColors(props:any){
  {
    const colors = {
      text: props.color,
    }
  
    const {
      colorClasses: textColorClasses,
      colorStyles: textColorStyles,
    } = useColor(colors)
    return { textColorClasses, textColorStyles }
  }
}