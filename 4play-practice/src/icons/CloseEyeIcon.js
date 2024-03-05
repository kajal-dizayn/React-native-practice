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
      d="M3.81818 6.98778L4.86545 6L18.5455 19.0044L17.5064 20L14.9864 17.6044C14.0455 17.9 13.0473 18.0556 12 18.0556C7.90909 18.0556 4.41545 15.6367 3 12.2222C3.56455 10.8533 4.46455 9.64778 5.61 8.69111L3.81818 6.98778ZM12 9.88889C12.651 9.88889 13.2753 10.1347 13.7356 10.5723C14.1959 11.0099 14.4545 11.6034 14.4545 12.2222C14.455 12.4871 14.4079 12.7501 14.3155 13L11.1818 10.0211C11.4447 9.93321 11.7214 9.8885 12 9.88889ZM12 6.38889C16.0909 6.38889 19.5845 8.80778 21 12.2222C20.3322 13.8347 19.1975 15.2343 17.7273 16.2589L16.5655 15.1467C17.6969 14.4026 18.6094 13.3959 19.2164 12.2222C18.5549 10.9388 17.528 9.8576 16.2523 9.10139C14.9766 8.34519 13.5034 7.94435 12 7.94444C11.1082 7.94444 10.2327 8.08444 9.41455 8.33333L8.15455 7.14333C9.33273 6.66111 10.6336 6.38889 12 6.38889ZM4.78364 12.2222C5.44509 13.5056 6.47201 14.5868 7.74769 15.3431C9.02336 16.0993 10.4966 16.5001 12 16.5C12.5645 16.5 13.1209 16.4456 13.6364 16.3367L11.7709 14.5556C11.2016 14.4975 10.6703 14.256 10.2654 13.8711C9.86056 13.4862 9.60648 12.9812 9.54545 12.44L6.76364 9.78778C5.95364 10.4489 5.27455 11.2733 4.78364 12.2222Z"
      fill="#9EA6B4"
    />
  </Svg>
);
export default SVGComponent;