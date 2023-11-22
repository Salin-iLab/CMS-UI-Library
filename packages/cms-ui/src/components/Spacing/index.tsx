import { Ref, forwardRef, memo } from 'react';
import { StyledSpacing } from './Spacing.styled';
import { SpacingProps } from './Spacing.types';

export const Spacing = memo(
	forwardRef(({ direction = 'vertical', size, ...props }: SpacingProps, ref: Ref<HTMLDivElement>) => {
		return <StyledSpacing ref={ref} size={size} direction={direction} {...props} />;
	})
);
