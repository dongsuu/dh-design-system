import { describe, expect, it } from 'vitest';
import { buttonRecipe } from '../../../tokens/recipes';
import { renderButton } from './button-helpers';
import { fireEvent, screen } from '@testing-library/react';
import { userEvent } from 'storybook/internal/test';

describe('버튼 컴포넌트 렌더링 테스트', () => {
  it('버튼 컴포넌트가 렌더링되어야 합니다.', () => {
    const btn = renderButton();
    expect(btn).toBeInTheDocument();
  });

  it('variant가 solid인 경우, solid 클래스가 적용되어야 합니다.', () => {
    const btn = renderButton({ variant: 'solid' });
    expect(btn).toHaveClass(buttonRecipe({ variant: 'solid' }));
  });

  it('variant가 outline인 경우, outline 클래스가 적용되어야 합니다.', () => {
    const btn = renderButton({ variant: 'outline' });
    expect(btn).toHaveClass(buttonRecipe({ variant: 'outline' }));
  });

  it('variant가 ghost인 경우, ghost 클래스가 적용되어야 합니다.', () => {
    const btn = renderButton({ variant: 'ghost' });
    expect(btn).toHaveClass(buttonRecipe({ variant: 'ghost' }));
  });

  it('size가 small인 경우, small 클래스가 적용되어야 합니다.', () => {
    const btn = renderButton({ size: 'small' });
    expect(btn).toHaveClass(buttonRecipe({ size: 'small' }));
  });

  it('size가 medium인 경우, medium 클래스가 적용되어야 합니다.', () => {
    const btn = renderButton({ size: 'medium' });
    expect(btn).toHaveClass(buttonRecipe({ size: 'medium' }));
  });

  it('size가 large인 경우, large 클래스가 적용되어야 합니다.', () => {
    const btn = renderButton({ size: 'large' });
    expect(btn).toHaveClass(buttonRecipe({ size: 'large' }));
  });

  it('radius가 none인 경우, none 클래스가 적용되어야 합니다.', () => {
    const btn = renderButton({ radius: 'none' });
    expect(btn).toHaveClass(buttonRecipe({ radius: 'none' }));
  });

  it('radius가 small인 경우, small 클래스가 적용되어야 합니다.', () => {
    const btn = renderButton({ radius: 'small' });
    expect(btn).toHaveClass(buttonRecipe({ radius: 'small' }));
  });

  it('radius가 medium인 경우, medium 클래스가 적용되어야 합니다.', () => {
    const btn = renderButton({ radius: 'medium' });
    expect(btn).toHaveClass(buttonRecipe({ radius: 'medium' }));
  });

  it('radius가 large인 경우, large 클래스가 적용되어야 합니다.', () => {
    const btn = renderButton({ radius: 'large' });
    expect(btn).toHaveClass(buttonRecipe({ radius: 'large' }));
  });
});

describe('버튼 컴포넌트 동작 테스트', () => {
  it('버튼 컴포넌트가 클릭되면, onClick 함수가 호출되어야 합니다.', () => {
    const onClick = vi.fn();
    const btn = renderButton({ onClick });
    fireEvent.click(btn);
    expect(onClick).toHaveBeenCalled();
  });
});

describe('버튼 컴포넌트 웹 접근성 테스트', () => {
  it('title 미지정 버튼 컴포넌트가 렌더링되면, aria-label이 "버튼"으로 적용되어야 합니다.', () => {
    const btn = renderButton();
    expect(btn).toHaveAttribute('aria-label', '버튼');
  });
  it('title 지정 버튼 컴포넌트가 렌더링되면, aria-label이 title 값으로 적용되어야 합니다.', () => {
    const title = '테스트 버튼';
    const btn = renderButton({ title });
    expect(btn).toHaveAttribute('aria-label', title);
  });

  it('버튼 컴포넌트가 렌더링되면, disabled가 true인 경우, tabIndex가 -1이 되어야 합니다.', () => {
    const btn = renderButton({ disabled: true });
    expect(btn).toHaveAttribute('tabIndex', '-1');
  });

  it('버튼 컴포넌트가 렌더링되면, disabled가 false인 경우, tabIndex가 0이 되어야 합니다.', () => {
    const btn = renderButton({ disabled: false });
    expect(btn).toHaveAttribute('tabIndex', '0');
  });

  it('disabled 상태에서는 클릭/키보드로 onClick 함수가 호출되지 않아야 합니다.', async () => {
    const onClick = vi.fn();
    const btn = renderButton({ onClick, disabled: true });

    await userEvent.click(btn);
    await userEvent.keyboard('{Enter}');
    await userEvent.keyboard('{Tab}');

    expect(onClick).not.toHaveBeenCalled();
    expect(btn).not.toHaveFocus();
  });

  it('tab키를 이용하여 버튼 컴포넌트의 포커스를 이동할 수 있어야 합니다.', async () => {
    const btn = renderButton();
    await userEvent.keyboard('{Tab}');
    expect(btn).toHaveFocus();
  });

  it('tab키를 이용하여 버튼 컴포넌트의 포커스를 이동한 후, enter키를 이용하여 버튼 컴포넌트를 클릭할 수 있어야 합니다.', async () => {
    const onClick = vi.fn();
    renderButton({ onClick });
    await userEvent.keyboard('{Tab}');
    await userEvent.keyboard('{Enter}');
    expect(onClick).toHaveBeenCalled();
  });

  it('getByRole로 접근 가능한 이름으로 버튼을 찾을 수 있어야 한다.', () => {
    const title = '테스트';
    renderButton({ title });

    expect(screen.getByRole('button', { name: title })).toBeInTheDocument();
  });
});
