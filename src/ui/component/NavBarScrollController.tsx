import React, { useEffect, useState } from "react";


interface ScrollHandlerProps {
    children: React.ReactElement;
}

const ScrollHandler:React.FC<ScrollHandlerProps> = props => {
    // const trigger = useScrollTrigger({
    //     disableHysteresis: true,
    //     threshold: 0
    // });
    

    // const tenPercentThreshold = window.innerHeight * 0.1;

    // const trigger = useScrollTrigger({
    //     disableHysteresis: true,
    //     threshold: tenPercentThreshold, // Set threshold to 10% of window height
    // });


//     return React.cloneElement(props.children, {
//         style: {
//             background: trigger ? "linear-gradient(to top, #accbee 0%, #e7f0fd 100%)" : "transparent",
//             transition: "background-color 0.3s, height 0.5s",
//             height: trigger ? 130 :null,
//             boxShadow: trigger ? "5px 10px 18px #000000" : "none",
//         },
//         logoSize:trigger ? 100 : 200,
//     });
// };

// const NavBarScrollController:React.FC<ScrollHandlerProps> = props => {
//     return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
// };
const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        // const aimHeight = (document.documentElement.scrollHeight - window.innerHeight);
        const aimHeight = 50;
        const currentScroll = window.scrollY;
        const progress = Math.min(currentScroll / aimHeight, 1); // Clamp between 0 and 1
        setScrollProgress(progress);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Interpolate styles based on scroll progress
    // const backgroundColor = `rgba(172, 203, 238, ${scrollProgress*0.9})`; // Fades in
    const height = 200 - 70 * scrollProgress; // Changes height gradually
    const boxShadow = scrollProgress > 0 ? "5px 10px 18px #000000" : "none";

    return React.cloneElement(props.children, {
        style: {
            // background: backgroundColor,
            transition: "background-color 0.3s",
            height: height || null,
            boxShadow: boxShadow,
        },
        logoSize: scrollProgress > 0 ? 100 : 200,
    });
};

const NavBarScrollController: React.FC<ScrollHandlerProps> = (props) => {
    return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export default NavBarScrollController;