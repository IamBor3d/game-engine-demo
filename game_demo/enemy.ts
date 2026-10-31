import { BasicObject} from "@/game_engine/BasicObject";
import { BaseGame } from "@/game_engine/BaseGame";

export class Enemy extends BasicObject{

    private target : BasicObject 
    constructor(x :number, y :number, target : BasicObject) {
        super(x,y,50,50);
        this.target = target;
    }

    update(game: BaseGame, dt: number): void {
        
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "green";
        ctx.fillRect(this.pos.x,this.pos.y,this.width,this.height);
    }
}