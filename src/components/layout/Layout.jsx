import Brand from '../../components/brand/Brand';
import NavBar from '../../components/navbar/NavBar';
import Footer from '../footer/Footer';
import './Layout.css';

function Layout({ children }) {
    return (
        <div>
            <header className='header__style'>
                <Brand />
                <NavBar />
            </header>
            <main className="main__style">{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;