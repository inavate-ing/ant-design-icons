// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BulbOutlinedSvg from '@ant-design/icons-svg/lib/asn/BulbOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BulbOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BulbOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(BulbOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BulbOutlined';
}

export default RefIcon;