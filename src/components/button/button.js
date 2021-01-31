import Recat from 'react';

import './button.scss';

const Button = ({onClick,children,value}) =>{
    return(
        <button className="square" onClick={onClick} value={value}>{children}</button>
    )
}

export default Button;
