// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ImportOutlinedSvg from '@ant-design/icons-svg/lib/asn/ImportOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ImportOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ImportOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ImportOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ImportOutlined';
}

export default RefIcon;