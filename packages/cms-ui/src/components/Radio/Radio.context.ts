import { createContext } from 'react';
import { RadioContextProps } from './Radio.types';

export const RadioContext = createContext<RadioContextProps | null>(null);

export const RadioProvider = RadioContext.Provider;
