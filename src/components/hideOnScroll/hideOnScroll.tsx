import {useScrollTrigger, Slide} from '@mui/material';
import React from "react";

export default function HideOnScroll(props: {children: React.ReactElement}) {
    const {children} = props;
    const trigger = useScrollTrigger({threshold: 40});
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  