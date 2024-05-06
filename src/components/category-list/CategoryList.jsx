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
                    <NavLink className={({isActive}) => isActive ? 'link__active' : '' } to={"/rogue"}> Rogue </NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'link__active' : '' } to={"/guerrero"}> Guerrero </NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'link__active' : '' } to={"/barbaro"}> Bárbaro </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default CategoryList;