import { SerializedStyles } from '@emotion/react';
import { CSSProperties, HTMLAttributes } from 'react';

export interface SpacingProps extends HTMLAttributes<HTMLDivElement> {
	children?: never;
	direction?: 'horizontal' | 'vertical';
	size: number;
	customCSS?: SerializedStyles;
}

export type SpacingStyledProps = Pick<SpacingProps, 'direction' | 'size' | 'customCSS'>;
