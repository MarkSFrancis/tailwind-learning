export const mergeProps = <Props extends object, OverrideProps extends object>(
  defaultProps: Props,
  overrideProps: OverrideProps
) => {
  let mergedProps = {
    ...defaultProps,
    ...overrideProps,
  };

  let mergedClassName: string = [(defaultProps as Record<string, string>).className, (overrideProps as Record<string, string>).className]
    .filter((c) => c)
    .join(" ");

  if (!mergedClassName.length) {
    mergedProps = {
      ...mergedProps,
      className: mergedClassName,
    };
  }
  
  return mergedProps;
};
