import styled from 'styled-components';
import { twMerge } from 'tailwind-merge';

import { Button as ShadButton } from '@/components/ui/button';

export const Button = styled(ShadButton).attrs({
  className: twMerge('text-orange-800'),
})``;
