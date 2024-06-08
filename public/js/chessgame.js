const { Chess } = require("chess.js");

const socket = io();
const chess = new Chess()
const boardElement = document.querySelector(".chessboard")

let draggedPiece = null;
let sourceSquare = null;
let playerRole = null;

const renderBoard = () => {
    const
}

const handleMove = () => {}

const getPieceUnicode = () => {}
