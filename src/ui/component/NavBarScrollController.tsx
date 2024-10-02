import React from "react";
import { useScrollTrigger } from "@mui/material";

const ScrollHandler = props => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });


    return React.cloneElement(props.children, {
        style: {
            background: trigger ? "linear-gradient(to top, #accbee 0%, #e7f0fd 100%)" : "transparent",
            transition: "background-color 0.3s, height 0.5s",
            height: trigger ? 130 :null,
            boxShadow: trigger ? "5px 10px 18px #000000" : "none",
        },
        logoSize:trigger ? 100 : 200,
    });
};

const NavBarScrollController = props => {
    return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export default NavBarScrollController;