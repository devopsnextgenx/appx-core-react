import { Outlet } from 'react-router-dom';
import Footer, { FooterProps } from '../pageComponents/footer/Footer';
import Header, { HeaderProps } from '../pageComponents/header/Header';
import './Layout.css';

const iconSrc = "https://picsum.photos/150";

const headerProps: HeaderProps = {
    title: "Appx UI",
    companyIconOptions: {
        src: iconSrc,
        options: {
            sizeOption: "small",
        },
    },
    profileIconOptions: {
        src: iconSrc,
        options: {
            sizeOption: "small",
        }
    },
};

const footerProps: FooterProps = {
    companyIconOptions: {
        src: iconSrc,
        options: {
            sizeOption: "small",
        },
    },
    links: [
        { name: "Home", url: "/" },
        { name: "About", url: "/about" },
        { name: "Contact", url: "/contact" },
    ],
};

const Layout = () => {
    return (
        <div>
            <Header {...headerProps}></Header>
            <div className='outlet'>
                <Outlet /> {/* Content specific to the route will be rendered here */}
            </div>
            <Footer {...footerProps}/>
        </div>
    );
};

export default Layout;