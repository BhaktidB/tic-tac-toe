import React, { useState, useEffect } from 'react'
import styles from '../styles/components/GameContainerLogic.module.css'
import Buttons from './Buttons';
import Scores from './Scores';

const GameContainerLogic = () => {

    const [boardData, setBoardData] = useState(Array(9).fill(null));
    const [player, setPlayer] = useState("X");

    let [tieFlag, setTieFlag] = useState(false);
    let [youScore, setYouScore] = useState(parseInt(window.localStorage.getItem('YOU_SCORE'), 10) ?? 0);
    let [compScore, setCompScore] = useState(parseInt(window.localStorage.getItem('COMP_SCORE'), 10) ?? 0);
    let [tieScore, setTieScore] = useState(parseInt(window.localStorage.getItem('TIE_SCORE'), 10) ?? 0);


    useEffect(() => {
        if (player === "O") {
            //computer move
            const emptyCells = boardData.reduce((acc, cell, index) => {
                if (!cell) {
                    acc.push(index);
                }
                return acc;
            }, []);

            const randomIndex = Math.floor(Math.random() * emptyCells.length);
            const computerMove = emptyCells[randomIndex];

            setTimeout(() => {
                updateBoard(computerMove);
            }, 500);

            if (emptyCells.length === 0) {
                setTieFlag(true)
            }

        }
    }, [player, boardData]);

    const checkForWinner = () => {
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (const combo of winningCombos) {
            const [a, b, c] = combo;
            if (
                boardData[a] &&
                boardData[a] === boardData[b] &&
                boardData[a] === boardData[c]
            ) {
                return boardData[a];
            }
        }

        return null;
    };
    const winner = checkForWinner()


    const switchPlayer = () => {
        setPlayer(player === "X" ? "O" : "X");

    };

    const updateBoard = (index) => {
        const newBoardData = [...boardData];
        if (newBoardData[index] === null && !checkForWinner()) {
            newBoardData[index] = player;
            setBoardData(newBoardData);
            switchPlayer();
        }
    };

    useEffect(() => {
        if (winner === 'X') {
            youScore = parseInt(window.localStorage.getItem('YOU_SCORE'), 10) || 0;
            youScore = youScore + 1;
            setYouScore(youScore);
            window.localStorage.setItem('YOU_SCORE', youScore.toString());
        } else if (winner === 'O') {
            compScore = parseInt(window.localStorage.getItem('COMP_SCORE'), 10) || 0;
            compScore = compScore + 1;
            setCompScore(compScore);
            window.localStorage.setItem('COMP_SCORE', compScore.toString());
        } else if (tieFlag) {
            tieScore = parseInt(window.localStorage.getItem('TIE_SCORE'), 10) || 0;
            tieScore = tieScore + 1;
            setTieScore(tieScore);
            window.localStorage.setItem('TIE_SCORE', tieScore.toString());

        }
    }, [winner]);



    return (
        <div className={styles.gameContainer} >
            {boardData.map((tile, index) => {
                return <Buttons key={index} index={index} tile={tile} onClickHandler={(index) => updateBoard(index)} />;
            })}

            <div className={styles.scoreContainer}>
                <Scores youScore={youScore} tieScore={tieScore} compScore={compScore} />
            </div>

        </div>
    )
}

export default GameContainerLogic