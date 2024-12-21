import { useState } from "react"
import './XO.css'
// import './index.css'
export function Display({value,onSquareClick}){

    return(
        <button onClick={onSquareClick}>{value}</button>
    )
}

function XO(){
    const [ move, setMove] = useState(" ")
    const [turn ,setTurn] = useState(true)
    const [count, setCount] = useState(1)
    const [squares, setSquares] = useState(Array(9).fill(null));
    function change(i){
        if(!squares[i]){
            if(turn){
                setTurn(!turn);
                setMove("X");
                squares[i] = "X";
            }
            else{
                setTurn(!turn);
                setMove("O");
                squares[i] = "O";
            }
            setCount(count+1)
            console.log(count);
        }
    }
    let R
    if(count>=5){
         R =decide(squares)
        if(R=='X' || R=='O')
            document.getElementById("result").textContent = `${R} win`
}
        if(count === 10){
            if(R!=='X' || R!=='O'){
                document.getElementById("result").textContent = `DRAW`
            }
        }
    
    return(
        <div className="board">
            <h2>TickTackTO</h2>
        <div>
        <Display value ={squares[0]} onSquareClick={() => change(0)}></Display>
        <Display value ={squares[1]} onSquareClick={() => change(1)}></Display>
        <Display value ={squares[2]} onSquareClick={() => change(2)}></Display>
        </div>
        <div>
        <Display value ={squares[3]} onSquareClick={() => change(3)}></Display>
        <Display value ={squares[4]} onSquareClick={() => change(4)}></Display>
        <Display value ={squares[5]} onSquareClick={() => change(5)}></Display>
        </div>
        <div>
        <Display value ={squares[6]} onSquareClick={() => change(6)}></Display>
        <Display value ={squares[7]} onSquareClick={() => change(7)}></Display>
        <Display value ={squares[8]} onSquareClick={() => change(8)}></Display>
        </div>
        <p id="result"></p>
        </div>
    )
}

export default XO;

function decide(squares){
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
}