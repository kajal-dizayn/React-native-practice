import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SVGComponent = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M4 11.8182C4 11.8182 6.90909 6 12 6C17.0909 6 20 11.8182 20 11.8182C20 11.8182 17.0909 17.6364 12 17.6364C6.90909 17.6364 4 11.8182 4 11.8182Z"
      stroke="#9EA6B4"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.0002 14C13.2052 14 14.182 13.0232 14.182 11.8182C14.182 10.6132 13.2052 9.63635 12.0002 9.63635C10.7952 9.63635 9.81836 10.6132 9.81836 11.8182C9.81836 13.0232 10.7952 14 12.0002 14Z"
      stroke="#9EA6B4"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;
