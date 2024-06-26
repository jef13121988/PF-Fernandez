function CartIcon({ size }) {
    
    let height;
    let width;
    
    if ( size === 'sm' ){
        height = 30;
        width = 30;
    }else if ( size === 'md' ){
        height = 40;
        width = 40;
    }else if ( size === 'lg' ){
        height = 50;
        width = 50;
    }

    return (

        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.2998 5H22L20 12H8.37675M21 16H9L7 3H4M4 8H2M5 11H2M6 14H2M10 20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20ZM21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z" stroke="#fafafa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    )
}

export default CartIcon;