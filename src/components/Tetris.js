import React, { useState } from "react"
import Stage from "./Stage.js"
import Display from "./Display.js"
import StartButton from "./StartButton.js"
import Header from "./Header.js"
import { useFigure } from '../hooks/FigureSettings';
import { useStage } from '../hooks/StageSettings'
import { createStage, checkCollision } from '../board';
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris.js"
import { useInterval } from '../hooks/useInterval';
import { useGameStatus } from '../hooks/useGameStatus';
import { Button, Container } from "reactstrap";
const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false)
    const [player, updateFigure, resetPlayer, figureRotate] = useFigure();
    const [stage, setStage, rowsCleared] = useStage(player, resetPlayer)
    const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
        rowsCleared
    );
    console.log('re-render');

    const moveLeftOrRight = direction => {
        if (!checkCollision(player, stage, { x: direction, y: 0 })) {
            updateFigure({ x: direction, y: 0 })
        };
    }
    useInterval(() => {
        drop();
    }, dropTime);

    const startGame = () => {
        setStage(createStage());
        setDropTime(1000);
        resetPlayer();
        setScore(0);
        setLevel(0);
        setRows(0);
        setGameOver(false);
    };

    const pauseGame = () => {
        setDropTime(1000000000)
    }
    const unpauseGame = () => {
        setDropTime(1000)
    }
    const drop = () => {
        // Increase level when player has cleared 10 rows
        if (rows > (level + 1) * 10) {
            setLevel(prev => prev + 1);
            // Also increase speed
            setDropTime(1000 / (level + 1) + 200);
        }

        if (!checkCollision(player, stage, { x: 0, y: 1 })) {
            updateFigure({ x: 0, y: 1, collided: false });
        } else {
            // Game over!
            if (player.pos.y < 1) {
                console.log('GAME OVER!!!');
                setGameOver(true);
                setDropTime(null);
            }
            updateFigure({ x: 0, y: 0, collided: true });
        }
    };

    const keyUp = ({ keyCode }) => {
        if (!gameOver) {
            // Activate the interval again when user releases down arrow.
            if (keyCode === 40) {
                setDropTime(1000 / (level + 1));
            }
        }
    };

    const dropPlayer = () => {
        console.log("interval off")
        setDropTime(null);
        drop();
    };

    const move = ({ keyCode }) => {
        if (!gameOver) {
            if (keyCode === 37) {
                moveLeftOrRight(-1);
            } else if (keyCode === 39) {
                moveLeftOrRight(1)
            } else if (keyCode === 40) {
                dropPlayer()
            } else if (keyCode === 38) {
                figureRotate(stage, 1)
            }
        }

    }
    return (
        <Container style={{marginTop:-36}}>
            <StyledTetrisWrapper
                role="button"
                tabIndex="0"
                onKeyDown={e => move(e)}
                onKeyUp={keyUp}
            >
                
                    
                    <StyledTetris >
                        <Stage stage={stage} />

                        <aside>
                            {gameOver ? (
                                <Display gameOver={gameOver} text="Game Over" />
                            ) :
                                <div>
                                    <Header />
                                    <Display text={`Score: ${score}`} />
                                    <Display text={`rows: ${rows}`} />
                                    <Display text={`Level: ${level}`} />
                                </div>
                            }
                            <StartButton callback={startGame} />
                            <br /><br />
                            <Button onClick={pauseGame}>Pause Game</Button>
                            <br /><br />
                            <Button onClick={unpauseGame}>Unpause Game</Button>
                        </aside>
                    </StyledTetris>
                
            </StyledTetrisWrapper>
        </Container>
    )
}
export default Tetris