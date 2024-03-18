// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LineChartOutlinedSvg from '@ant-design/icons-svg/lib/asn/LineChartOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LineChartOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LineChartOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(LineChartOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LineChartOutlined';
}

export default RefIcon;