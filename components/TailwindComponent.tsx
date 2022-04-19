import { ComponentProps, forwardRef } from "react";
import { createElement } from "react";
import { As, ComponentWithAs } from "../lib/component-type-system";
import { mergeProps } from "../lib/mergeProps";

export const Box = SimpleTC("div", {});

/**
 * Create a forwarded tailwind component with some default props
 * @param as The type to create the component as by default
 * @param defaultProps The default props for the new element
 */
export function SimpleTC<AsComponent extends As>(
  as: AsComponent,
  defaultProps: ComponentProps<AsComponent>
): ComponentWithAs<AsComponent, ComponentProps<AsComponent>> {
  return forwardRef((props, ref) => {
    let mergedProps = mergeProps(defaultProps, props);
    delete mergedProps.as;

    const component = createElement(props.as ?? as, {
      ...mergedProps,
      ref,
    });

    return component;
  });
}
