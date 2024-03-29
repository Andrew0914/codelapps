import { Grow, Slide, useMediaQuery } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef, ReactElement, Ref } from "react";

const ModalTransition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement;
  },
  ref: Ref<unknown>
) {
  // FIXME: use breakpoint as variables from scss or even move this functionallity to utils.
  const isMobile = useMediaQuery("(max-width:992px)", { noSsr: true });

  return isMobile ? (
    <Slide direction="down" ref={ref} {...props} />
  ) : (
    <Grow ref={ref} {...props} />
  );
});

export default ModalTransition;
