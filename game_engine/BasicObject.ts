/**
 * BasicObject class
 * Basis for all things represented in the game
 * Specific game object classes must extend this 
 */
import { entity, Game, Position } from "./Game";

export abstract class BasicObject implements entity {
    protected pos : Position;
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
        this.pos = { x:x, y:y};
        this.width = width;
        this.height = height;
    }

    getX(): number {
        return this.pos.x;
    }
    getY(): number {
        return this.pos.y;
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
     * Updates the state of the object
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
