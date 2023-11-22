import { HTMLAttributes } from 'react';

export interface SpacingProps extends HTMLAttributes<HTMLDivElement> {
	children?: never;
	direction?: 'horizontal' | 'vertical';
	size: number;
}

export type SpacingStyledProps = Pick<SpacingProps, 'direction' | 'size'>;
