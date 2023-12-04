import { Ref, forwardRef, memo } from 'react';
import { StyledSpacing } from './Spacing.styled';
import { SpacingProps } from './Spacing.types';

export const Spacing = memo(
	forwardRef<HTMLDivElement, SpacingProps>(({ direction = 'vertical', size, ...props }, ref) => {
		return <StyledSpacing ref={ref} size={size} direction={direction} {...props} />;
	})
);
