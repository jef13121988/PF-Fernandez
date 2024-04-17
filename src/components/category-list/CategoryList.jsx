import './CategoryList.css';

function CategoryList() {
    return (
        <nav>
            <ul>
                <li className='list--item--style'>
                    <a className='list--item--link--style' href='/#'> Inicio </a>
                </li>
                <li className='list--item--style'>
                    <a className='list--item--link--style' href='/#'> Raza </a>
                </li>
                <li className='list--item--style'>
                    <a className='list--item--link--style' href='/#'> Clase </a>
                </li>
                <li className='list--item--style'>
                    <a className='list--item--link--style' href='/#'> Género </a>
                </li>
            </ul>
        </nav>
    )
}

export default CategoryList;