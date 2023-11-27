import styled from '@emotion/styled';
import { SpacingStyledProps } from './Spacing.types';
import { SerializedStyles, css } from '@emotion/react';

export const StyledSpacing = styled.div<SpacingStyledProps>`
	flex: none;
	width: ${({ size, direction }) => (direction === 'horizontal' ? `${size}px` : undefined)};
	height: ${({ size, direction }) => (direction === 'vertical' ? `${size}px` : undefined)};
`;
