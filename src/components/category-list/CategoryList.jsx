import './CategoryList.css';
import { NavLink } from 'react-router-dom';

function CategoryList() {
    return (
        <nav>
            <ul className='list__item'>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'link__active' : '' } to={"/"}> Inicio </NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'link__active' : '' } to={"/category/armas"}> Armas </NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'link__active' : '' } to={"/category/varios"}> Varios </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default CategoryList;