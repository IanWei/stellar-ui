import styled from 'styled-components';
import { Button as ShadButton } from '@/components/ui/button';
import { twMerge } from 'tailwind-merge';

export const Button = styled(ShadButton).attrs({
  className: twMerge('bg-primary hover:bg-primary/90 text-orange-800'),
})``;
