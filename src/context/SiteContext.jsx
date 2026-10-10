import { createContext } from "react";

export const SiteContext = createContext();

// Unused, at the moment
const SiteContextProvider = (props) => {
    const value = {
        back: import.meta.env.VITE_BACKEND_URL, 
        username: ""
    };

    return (
        <SiteContext.Provider value={value}>
            {props.children}
        </SiteContext.Provider>
    );
};

export default SiteContextProvider;