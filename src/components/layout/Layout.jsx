import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Layout.css';

function Layout({ children }) {
    return (
        <div>
            <Header />
            <main className="main--container">{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;