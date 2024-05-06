import './Brand.css';
import { Link } from 'react-router-dom';

function Brand() {
    return (
        <div className='brand__style'>
            <Link to={"/"} className='brand__title'> Burando </Link>
            <p className='brand__subtitle'>ブランド</p>
        </div>
    )
}

export default Brand;