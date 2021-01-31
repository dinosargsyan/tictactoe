import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Button from '../components/button/button';

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state={
            squares: Array(9).fill(null),
            playerX: true,
            winner: ' '
        }
    }
    
        winnerCheck = () =>{
            const winnerLines = [
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6],
            ];
            for (let i = 0; i < winnerLines.length; i++) {
                const [a, b, c] = winnerLines[i];
                if(this.state.squares[a]!=null){
                if (this.state.squares[a] === this.state.squares[b] && this.state.squares[a] === this.state.squares[c]) {
                    if(this.state.squares[a]===true){
                        alert("The Winner is X");
                       // toast("The Winner is X");
                       this.componentWillUnmount();
                       
                       
                    }else{
                        alert("The Winner is O");
                        //toast("The Winner is X");
                        this.componentWillUnmount();

                    }
                }
            }
        }
        }
        
        handleClick=(e)=>{
            
            const buttonInt =parseInt(e.target.value,10);
            if(this.state.squares[buttonInt] === null && this.state.playerX===true){
                this.state.squares[buttonInt] = this.state.playerX;
                this.setState({
                    playerX: !this.state.playerX,       
                })
                
            } 
        }
        
        computerTurn = () =>{

           const buttonInt1 =Math.floor(Math.random() * (8 - 0) + 0);
           if(this.state.squares[buttonInt1] === null && this.state.playerX===false){
                this.state.squares[buttonInt1] = this.state.playerX;
                        this.setState({
                            playerX: !this.state.playerX,       
                        })
                    }else if(this.state.squares[buttonInt1] != null && this.state.playerX===false){
                       const buttonInt2= this.state.squares.indexOf(null);
                       this.state.squares[buttonInt2] = this.state.playerX;
                        this.setState({
                            playerX: !this.state.playerX,       
                        })
                    }
                    }
                
                componentDidUpdate(){
                    this.winnerCheck();
                    setTimeout(this.computerTurn,1000);
                    //this.computerTurn();
                }
                    componentWillUnmount(){
                        this.setState({
                            squares: Array(9).fill(null),
                            playerX: true,
                        })
                    }
    
    
    render(){
       return(
        <div class="grid-container">
        <Button onClick={this.handleClick} value="0">{this.state.squares[0] ? "X" : this.state.squares[0]===false  ? "O" : " " }</Button>
        <Button onClick={this.handleClick} value="1">{this.state.squares[1] ? "X" : this.state.squares[1]===false  ? "O" : " " }</Button>
        <Button onClick={this.handleClick} value="2">{this.state.squares[2] ? "X" : this.state.squares[2]===false  ? "O" : " " }</Button>
        <Button onClick={this.handleClick} value="3">{this.state.squares[3] ? "X" : this.state.squares[3]===false  ? "O" : " " }</Button>
        <Button onClick={this.handleClick} value="4">{this.state.squares[4] ? "X" : this.state.squares[4]===false  ? "O" : " " }</Button>
        <Button onClick={this.handleClick} value="5">{this.state.squares[5] ? "X" : this.state.squares[5]===false  ? "O" : " " }</Button>
        <Button onClick={this.handleClick} value="6">{this.state.squares[6] ? "X" : this.state.squares[6]===false  ? "O" : " " }</Button>
        <Button onClick={this.handleClick} value="7">{this.state.squares[7] ? "X" : this.state.squares[7]===false  ? "O" : " " }</Button>
        <Button onClick={this.handleClick} value="8">{this.state.squares[8] ? "X" : this.state.squares[8]===false  ? "O" : " " }</Button>

    </div>
       )
        }
    }
export default Board;