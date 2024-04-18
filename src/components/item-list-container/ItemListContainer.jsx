import './ItemListContainer.css';

function ItemListContainer({greeting}) {
    return (
        <div className='item--container--style'>
            <h1 className='greeting--style'>{greeting}</h1>
            <a href="https://jef13121988.github.io/ProyectoFinal-JavaScript/"> Clickee aquí para acceder a la web a la que hace referencia este proyecto </a>
        </div>
    )
}

export default ItemListContainer;