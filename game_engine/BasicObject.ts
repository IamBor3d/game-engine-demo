/**
 * BasicObject class
 * Basis for all things represented in the game
 * Specific game object classes must extend this 
 */
import { entity, Game } from "./Game";

export abstract class BasicObject implements entity {
    protected x: number;
    protected y: number;
    protected width: number;
    protected height: number;
    protected destroyFlag: boolean = false;
    protected speed = 0;

    /**
     * BasicObject constructor
     * @param x 
     * @param y 
     * @param width 
     * @param height 
     */
    constructor(x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    getX(): number {
        return this.x;
    }
    getY(): number {
        return this.y;
    }
    getWidth(): number {
        return this.width;
    }
    getHeight(): number {
        return this.height;
    }

    getDestroyFlag(): boolean {
        return this.destroyFlag;
    }

    setDestroyFlag(flag: boolean): void {
        this.destroyFlag = flag;
    }

    /**
     * Updates the state of the obejct
     * @param game 
     * @param dt 
     */
    abstract update(game: Game, dt: number): void;

    /**
     * Renders the object
     * @param ctx 
     */
    abstract draw(ctx: CanvasRenderingContext2D): void;
}
