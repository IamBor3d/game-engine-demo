import { BaseGame } from "@/game_engine/BaseGame";
import { BasicObject } from "@/game_engine/BasicObject";
import { InputManager } from "@/game_engine/InputManager";
import { KeyConsts } from "./KeyConstants";
export class Player extends BasicObject{

    private input : InputManager;
    constructor(x :number, y :number, input : InputManager)
    {
        super(x,y,100,100);
        this.input = input;
        this.speed = 500;

    }
    update(game: BaseGame , dt: number): void {
    
        if (this.input.isKeyDown(KeyConsts.D)
            && !(this.pos.x > game.getCanvasWidth() - this.width)) {
            this.pos.x += this.speed * dt;
        }

        if (this.input.isKeyDown(KeyConsts.A) &&
            !(this.pos.x <= 0)) {
            this.pos.x -= this.speed * dt;
        }

        if (this.input.isKeyDown(KeyConsts.W) &&
        !(this.pos.y <=0) ){
            this.pos.y -= this.speed * dt;
        }

        if(this.input.isKeyDown(KeyConsts.S) &&
        !(this.pos.y >= 1080)){
            this.pos.y += this.speed *dt;
        }
    }


    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "black";
        ctx.fillRect(this.pos.x,this.pos.y,this.width, this.height);
    }
    
}