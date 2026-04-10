/**
 * Base Template for the game engine
 * Specific Game implementations should extend this 
 */
import { BasicObject } from "./BasicObject";
import { Game } from "./Game";


export abstract class BaseGame implements Game {
    protected canvasHeight : number;
    protected canvasWidth : number;
    protected ctx : CanvasRenderingContext2D;
    protected running : boolean = false;
    protected objects : BasicObject[] = []; //List of all game objects
    protected lastTime : number = 0;

    /**
     * BaseGame constructor
     * @param canvasHeight 
     * @param canvasWidth 
     * @param canvas 
     */
    constructor(canvasHeight : number , canvasWidth : number, canvas : HTMLCanvasElement )
    {
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("No context");
        this.ctx = ctx;

        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
    }

    /**
     * Pre-game initialisation 
     * Sets variables required for all games
     */
    start() : void {
        this.running = true;
        this.lastTime = performance.now();
    }


    getCanvasHeight() : number {
        return this.canvasHeight;
    }

    getCanvasWidth() : number {
        return this.canvasWidth;
    }

    getObjects() : BasicObject[]
    {
        return this.objects;
    }
    
    abstract update(dt: number): void;

    abstract render(): void;

    abstract destroy(): void;

}