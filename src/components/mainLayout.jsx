import { Outlet, useLocation } from 'react-router-dom';
import { HorizontalNav } from './NavBar';
import { TopNav } from './NavBar';

const MainLayout = () => {
    const location = useLocation();
    const showNav = location.pathname !== '/';

    return (
        <>
            {showNav && <HorizontalNav />}
            {showNav && <TopNav />}
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default MainLayout;