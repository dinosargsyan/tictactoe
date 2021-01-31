import React from 'react';
import '../container/play';
import Button from './button/button';
import Board from '../container/play';
import '../container/play';

import './grid.scss';

const Grid = () =>{
   
    return(
        <div class="grid-container">
            <Button onClick={this.handleClick}>1</Button>
            <Button>1</Button>
            <Button>1</Button>
            <Button>1</Button>
            <Button>1</Button>
            <Button>1</Button>
            <Button>1</Button>
            <Button>1</Button>
            <Button>1</Button>
  
        </div>
    )
    
}
export default Grid;