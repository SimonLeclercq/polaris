import React from 'react';
import type {ReactNode} from 'react';

import type {ActionTooltip} from '../../types';
import {isInterface} from '../../utilities/is-interface';

import {Tooltip, TooltipProps} from './Tooltip';

export function tooltipFrom(
  tooltip: NonNullable<ReactNode> | ActionTooltip,
  button: ReactNode,
) {
  const tooltipType = typeof tooltip;
  const tooltipProps: TooltipProps =
    tooltipType !== 'string' &&
    tooltipType !== 'function' &&
    isInterface(tooltip)
      ? tooltip
      : {content: tooltip};

  return <Tooltip {...tooltipProps}>{button}</Tooltip>;
}
