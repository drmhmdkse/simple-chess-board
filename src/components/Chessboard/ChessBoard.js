import React from "react";
import "./chessboard.css";
import Tile from "../Tile/Tile";

const verticalAxis = ["1","2","3","4","5","6","7","8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

const pieces = [{image:"",x:undefined,y:undefined}]
for (let i = 0; i < verticalAxis.length; i++) {
    pieces.push({image:"assests/images/Chess_pdt45.svg",x:i,y:6})
    pieces.push({image:"assests/images/Chess_plt45.svg",x:i,y:1})
}
// white rook
pieces.push({image:"assests/images/Chess_rlt45.svg",x:0,y:0})
pieces.push({image:"assests/images/Chess_rlt45.svg",x:7,y:0})
// white knight
pieces.push({image:"assests/images/Chess_nlt45.svg",x:1,y:0})
pieces.push({image:"assests/images/Chess_nlt45.svg",x:6,y:0})
// white bishop
pieces.push({image:"assests/images/Chess_blt45.svg",x:2,y:0})
pieces.push({image:"assests/images/Chess_blt45.svg",x:5,y:0})
// white queen
pieces.push({image:"assests/images/Chess_qlt45.svg",x:3,y:0})
// white king
pieces.push({image:"assests/images/Chess_klt45.svg",x:4,y:0})
// black rook
pieces.push({image:"assests/images/Chess_rdt45.svg",x:0,y:7})
pieces.push({image:"assests/images/Chess_rdt45.svg",x:7,y:7})
// black knight
pieces.push({image:"assests/images/Chess_ndt45.svg",x:1,y:7})
pieces.push({image:"assests/images/Chess_ndt45.svg",x:6,y:7})
// black bishop
pieces.push({image:"assests/images/Chess_bdt45.svg",x:2,y:7})
pieces.push({image:"assests/images/Chess_bdt45.svg",x:5,y:7})
// black queen
pieces.push({image:"assests/images/Chess_qdt45.svg",x:3,y:7})
// black king
pieces.push({image:"assests/images/Chess_kdt45.svg",x:4,y:7})


export default function ChessBoard() {

    let chessBoard = [];
    
    for (let j = verticalAxis.length-1; j >=0  ; j--) {
        for (let i = 0; i < horizontalAxis.length; i++) {
            const number = j+i+2;

            let image = undefined;
            
            pieces.forEach(piece => {
                console.log(piece,"burası piece")
                if (piece.x === i && piece.y === j) {
                    image = piece.image; 
                }
            });

            chessBoard.push(<Tile image={image} key={verticalAxis[j]+horizontalAxis[i]} number={number} >  </Tile>)  
      }
    }

    return (
        <div id="chessboard">
            {chessBoard}
        </div>
    );
}