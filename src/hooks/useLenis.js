import { useContext } from 'react';
import { LenisContext } from '../contexts/lenis-context';

export const useLenis = () => {
  const context = useContext(LenisContext);
  if (!context) {
    throw new Error('useLenis must be used within a LenisProvider');
  }
  return context;
};