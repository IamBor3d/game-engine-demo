/**
 * Interfaces for games
 */
import { BasicObject } from "./BasicObject";


export enum GameState {
	Start,
	Running,
	End,
}

export interface Game {
    start() : void;     //Initial Game set up
    update(dt : number) : void;    //Game Logic changes
    render() : void;    //Render Changes on screen
    destroy() : void;   //Stop game loop
}

export interface entity {
    update(game : Game, dt : number) : void;
    draw(ctx:CanvasRenderingContext2D) : void;
}

export interface collidable {
    checkCollision( other : BasicObject) : boolean;
    OnCollision(game: Game) : void;
}

export type GameOptions = {
    onScoreChange:  (score: number) => void;
    onLivesChange: (lives: number) => void;
    onGameOver: (gameOver:GameState) => void;
    lives: number;
}

export type Position = {
    x : number,
    y : number,
};