declare module "evergreen-ui" {
  import React from "react";
  import { EnhancerProps } from "ui-box/dist/types/enhancers";

  export interface PaneProps extends EnhancerProps {
    elevation?: number;
  }

  export class Pane extends React.PureComponent<PaneProps> {}

  type Intent = "none" | "success" | "warning" | "danger";

  export interface ButtonProps extends EnhancerProps {
    intent?: Intent;
    appearance?: "minimal" | "primary" | "default";
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
  }
  export class Button extends React.PureComponent<ButtonProps> {}

  export interface SpinnerProps extends EnhancerProps {
    delay?: number;
    size?: number;
    theme?: any;
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
    onCancel?: () => void;
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

  export interface HeadingProps extends EnhancerProps {
    size: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    is?: string;
  }

  export class Heading extends React.PureComponent<HeadingProps> {}
}
