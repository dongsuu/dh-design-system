import type { PropsWithChildren } from 'react';
import { cx } from '../../../styled-system/css';
import { buttonRecipe } from '../../tokens/recipes';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  radius?: 'none' | 'small' | 'medium' | 'large' | 'full';
  title?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  variant = 'solid',
  size = 'medium',
  radius = 'medium',
  title = '',
  className,
  children,
  disabled = false,
  type = 'button',
  onClick,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={cx(buttonRecipe({ variant, size, radius }), className)}
      type={type}
      title={title}
      tabIndex={disabled ? -1 : 0}
      disabled={disabled}
      aria-label={title || '버튼'}
      onClick={onClick}
      {...props}
    >
      {title}
      {children}
    </button>
  );
};
