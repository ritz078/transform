declare module "evergreen-ui" {
  import React from "react";
  import { EnhancerProps } from "ui-box/dist/types/enhancers";
  import App from "next/app";

  export interface PaneProps extends EnhancerProps {
    elevation?: number;
    className?: string;
    css?: any;
    is?: any;
  }

  export class Pane extends React.PureComponent<PaneProps> {}

  type Intent = "none" | "success" | "warning" | "danger";
  type Appearance = "minimal" | "primary" | "default";

  export interface ButtonProps extends EnhancerProps {
    intent?: Intent;
    appearance?: Appearance;
    isLoading?: boolean;
    isActive?: boolean;
    iconBefore?: string;
    iconAfter?: string;
    disabled?: boolean;
    theme?: any;
    className?: string;
    children: React.ReactChild;
    is?: string;
    href?: string;
    onClick?: () => void;
    css?: any;
  }
  export class Button extends React.PureComponent<ButtonProps> {}

  export interface SpinnerProps extends EnhancerProps {
    delay?: number;
    size?: number;
    theme?: any;
    css?: any;
  }

  export class Spinner extends React.PureComponent<SpinnerProps> {}

  export declare function extractStyles(): {
    hydrationScript: React.ReactChild;
    css: string;
  };

  export declare const toaster: {
    success: (
      text: string,
      options?: {
        id?: string | number;
        duration?: number;
        description?: string;
      }
    ) => void;
    danger: (
      text: string,
      options?: {
        id?: string | number;
        duration?: number;
        description?: string;
      }
    ) => void;
    closeAll: () => void;
  };

  export interface DialogProps extends EnhancerProps {
    children: React.ReactChild;
    intent?: Intent;
    isShown?: boolean;
    title?: React.ReactChild;
    hasHeader?: boolean;
    hasFooter?: boolean;
    hasCancel?: boolean;
    hasClose?: boolean;
    onCloseComplete?: () => void;
    onOpenComplete?: () => void;
    onConfirm?: (close: () => void) => void;
    confirmLabel?: string;
    isConfirmLoading?: boolean;
    isConfirmDisabled?: boolean;
    onCancel?: (close: () => void) => void;
    cancelLabel?: string;
    shouldCloseOnOverlayClick?: boolean;
    shouldCloseOnEscapePress?: boolean;
    width?: string | number;
    topOffset?: string | number;
    sideOffset?: string | number;
    minHeightContent?: string | number;
    containerProps?: any;
    contentContainerProps?: any;
    preventBodyScrolling?: boolean;
  }

  export class Dialog extends React.PureComponent<DialogProps> {}

  type TextSize = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

  export interface HeadingProps extends EnhancerProps {
    size?: TextSize;
    is?: string;
    onClick?: () => void;
  }

  export class Heading extends React.PureComponent<HeadingProps> {}

  export interface PopoverProps {
    position?: Position;
    isShown?: boolean;
    content: (args: { close: () => void }) => JSX.Element;
    children: JSX.Element;
    display?: string;
    minWidth?: number;
    minHeight?: number;
    statelessProps?: any;
    animationDuration?: number;
    onOpen?: () => void;
    onClose?: () => void;
    onOpenComplete?: () => void;
    onCloseComplete?: () => void;
    bringFocusInside?: boolean;
    shouldCloseOnExternalClick?: boolean;
  }

  export class Popover extends React.PureComponent<PopoverProps> {}

  export interface IconButtonProps extends EnhancerProps {
    icon: string;
    iconSize?: number;
    intent?: Intent;
    appearance?: Appearance;
    isActive?: boolean;
    disabled?: boolean;
    theme?: any;
    className?: string;
    height?: number;
    onClick?: () => void;
  }

  export class IconButton extends React.PureComponent<IconButtonProps> {}

  export interface FilePickerProps extends EnhancerProps {
    name: string;
    accept?: string | string[];
    required?: boolean;
    multiple?: boolean;
    disabled?: boolean;
    capture?: boolean;
    height?: number | string;
    onChange?: React.EventHandler;
    onBlur?: () => void;
  }

  export class FilePicker extends React.PureComponent<FilePickerProps> {}

  export interface TextProps extends EnhancerProps {
    size?: TextSize;
  }

  export interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
  }

  export interface TextInputProps extends TextProps {
    required?: boolean;
    disabled?: boolean;
    isInvalid?: boolean;
    spellCheck?: boolean;
    placeholder?: string;
    appearance?: Appearance;
    width?: string | number;
    theme?: any;
    className?: string;
    onChange: (e: HTMLInputEvent) => void;
    name?: string;
    value?: string;
  }

  export class TextInput extends React.PureComponent<TextInputProps> {}

  export interface TooltipProps {
    appearance?: Appearance;
    position?: Position;
    content: React.ReactChild;
    hideDelay?: number;
    isShown?: boolean;
    children: React.ReactChild;
    statelessProps?: any;
  }

  export class Tooltip extends React.PureComponent<TooltipProps> {}

  export interface SwitchProps extends EnhancerProps {
    checked?: boolean;
    onChange: (e: Event) => void;
    name?: string;
  }

  export class Switch extends React.PureComponent<SwitchProps> {}

  export interface IconProps extends EnhancerProps {
    icon: string;
    color?: string;
    size?: number;
    title?: string;
    style?: any;
    theme?: any;
    onClick?: () => void;
  }

  export class Icon extends React.PureComponent<IconProps> {}

  export interface SearchInputProps extends TextInputProps {
    height?: number;
    appearance?: Appearance;
  }

  export class SearchInput extends React.PureComponent<SearchInputProps> {}

  export interface TextProps extends HeadingProps {}

  export class Text extends React.PureComponent<TextProps> {}

  export class Autocomplete extends React.PureComponent<any> {}

  export interface AlertProps extends EnhancerProps {
    intent?: Intent;
    title?: React.ReactNode;
    hasTrim?: boolean;
    hasIcon?: boolean;
    isRemoveable?: boolean;
    onRemove?: () => void;
    appearance?: Appearance;
    theme?: any;
  }

  export class Alert extends React.PureComponent<AlertProps> {}

  export interface BadgeProps extends EnhancerProps {
    color?: string;
    isInteractive?: boolean;
    theme?: any;
    isSolid?: boolean;
  }

  export class Badge extends React.PureComponent<BadgeProps> {}

  export class Link extends React.PureComponent<
    HeadingProps & { href: string; target?: string }
  > {}

  export interface SelectProps extends EnhancerProps {
    value: string;
    onChange: (e) => void;
    name?: string;
    defaultValue?: string | number;
  }

  export class Select extends React.PureComponent<SelectProps> {}

  export interface TabProps extends TextProps {
    onSelect?(): void;
    isSelected?: boolean;
    disabled?: boolean;
    appearance?: DefaultAppearance;
  }

  export class Tab extends React.PureComponent<TabProps> {}

  export type TablistProps = React.ComponentPropsWithoutRef<typeof Box>;

  export class Tablist extends React.PureComponent<TablistProps> {}

  export type TabNavigationProps = BoxProps<"nav">;

  export class TabNavigation extends React.PureComponent<TabNavigationProps> {}

  export interface TagInputProps
    extends Omit<React.ComponentPropsWithoutRef<typeof Box>, "onChange"> {
    addOnBlur?: boolean;
    className?: string;
    disabled?: boolean;
    height?: number;
    inputProps?: TextProps;
    inputRef?: (input: HTMLInputElement | null) => void;
    onAdd?: (values: string[]) => void | false;
    onBlur?: (event: React.FocusEvent) => void;
    onChange?: (values: string[]) => void | false;
    onFocus?: (event: React.FocusEvent) => void;
    onInputChange?: (event: React.ChangeEvent) => void;
    onRemove?: (value: string | React.ReactNode, index: number) => void;
    separator?: string;
    tagSubmitKey?: "enter" | "space";
    tagProps?: any;
    values?: string[];
  }
}
