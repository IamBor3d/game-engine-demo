import { BasicObject} from "@/game_engine/BasicObject";
import { BaseGame } from "@/game_engine/BaseGame";
import { Game } from "@/game_engine/Game";

export class Enemy extends BasicObject{

    constructor(x :number, y :number) {
        super(x,y,50,50);
    }

    update(game: Game, dt: number): void {
        
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "green";
        ctx.fillRect(this.pos.x,this.pos.y,this.width,this.height);
    }
}