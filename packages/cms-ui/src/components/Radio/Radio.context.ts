import { createContext } from 'react';

export const RadioGroupContext = createContext({
	value: 'test',
});

export const RadioGroupProvider = RadioGroupContext.Provider;
