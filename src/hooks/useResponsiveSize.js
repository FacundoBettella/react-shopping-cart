import { useMediaQuery } from "@mui/material";

const useResponsiveSize = (deviceSize = "(max-width: 768px)") => {
  const deviceSizeState = useMediaQuery(deviceSize);

  return [deviceSizeState];
};

export default useResponsiveSize;
