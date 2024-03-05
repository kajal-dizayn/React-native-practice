import OpenEyeIcon from "./OpenEyeIcon";
import CloseEyeIcon from "./CloseEyeIcon";

import HomeIcon from "./HomeIcon";
import LikeIcon from "./LikeIcon";
import PlaylistIcon from "./MyPlalistIcon";
import ScheduleIcon from "./ScheduleIcon";
import BackIcon from "./BackIcon";
import LogoIcon from "./Logo";
import LogoSmallIcon from "./LogoSmallIcon";
import Profile from "./Profile";
import SearchIcon from "./SearchIcon";
import RefreshIcon from "./RefreshIcon";

export const ICON_TYPES = {
  OPEN_EYE: "OPEN_EYE",
  CLOSE_EYE: "CLOSE_EYE",

  HOME_ICON: "HOME_ICON",
  LIKE_ICON: "LIKE_ICON",
  MY_PLALIST_ICON: "MY_PLALIST_ICON",
  SCHEDULE_ICON: "SCHEDULE_ICON",
  BACK_ICON: "BACK_ICON",
  LOGO_ICON: "LOGO_ICON",
  LOGO_SMALL_ICON: "LOGO_SMALL_ICON",
  PROFILE_ICON: "PROFILE_ICON",
  SEARCH_ICON: "SEARCH_ICON",
  REFRESH_ICON: "REFRESH_ICON",
};

export const ICON_TYPES_VS_CMP = {
  [ICON_TYPES.OPEN_EYE]: OpenEyeIcon,
  [ICON_TYPES.CLOSE_EYE]: CloseEyeIcon,
  [ICON_TYPES.HOME_ICON]: HomeIcon,
  [ICON_TYPES.LIKE_ICON]: LikeIcon,
  [ICON_TYPES.MY_PLALIST_ICON]: PlaylistIcon,
  [ICON_TYPES.SCHEDULE_ICON]: ScheduleIcon,
  [ICON_TYPES.BACK_ICON]: BackIcon,
  [ICON_TYPES.LOGO_ICON]: LogoIcon,
  [ICON_TYPES.LOGO_SMALL_ICON]: LogoSmallIcon,
  [ICON_TYPES.PROFILE_ICON]: Profile,
  [ICON_TYPES.SEARCH_ICON]: SearchIcon,
  [ICON_TYPES.REFRESH_ICON]: RefreshIcon,
};
