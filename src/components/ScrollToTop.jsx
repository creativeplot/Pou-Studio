

// This code is only needed if i'm dealing with a old code if i'm building something new from scratch i'm better off with import { ScrollRestoration} from "react-router-dom"; then i only need to use this component inside the the parent layout or whatever route i want it in

import { useEffect } from 'react'; // This is a React hook that lets you perform side effects in your function components. It's similar to lifecycle methods in class components like 
import { useLocation } from 'react-router-dom'; //   This hook from react-router-dom provides access to the current location object, which contains information about the URL (such as pathname).

const ScrollToTop = () => {

    const { pathname } = useLocation(); // i'm desctructuring useLocation to get the 'pathname'

    // Inside 'useEffect' i defined a function that gets called whenever the dependencies of the effect change. In this case, the effect is simply calling window.scrollTo(0, 0), which scrolls the window to the top-left corner
    useEffect(() => {

        window.scrollTo(0, 0)

    }, [pathname]); // The second argument to useEffect is an array of dependencies. Here, [pathname] means that the effect will run every time pathname changes. So, whenever the user navigates to a different route, the page will scroll to the top.

    return null; // The component doesn't need to render anything, so it returns null.
};

export default ScrollToTop;