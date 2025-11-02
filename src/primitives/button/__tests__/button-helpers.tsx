import { Button } from '../Button';
import { render, screen } from '@testing-library/react';

export function renderButton(
  props?: Partial<React.ComponentProps<typeof Button>>,
) {
  const title = props?.title || '';
  const merged = { ...props, title };
  render(<Button {...merged} />);
  const btn = screen.getByRole('button');
  return btn;
}
