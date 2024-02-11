import { createContext, useState } from "react"

export const DashboardResponsiveContext = createContext(null);

const ResponsiveContext = ({ children }) => {

    const [click, setClick] = useState(false);

    const viewSideMenu = () => {
        setClick(!click);
    }

    const element = {
        viewSideMenu,
        click,
    }

    return (
        <DashboardResponsiveContext.Provider value={element}>
            {children}
        </DashboardResponsiveContext.Provider>
    )
}

export default ResponsiveContext