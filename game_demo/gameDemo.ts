import { BaseGame } from "@/game_engine/BaseGame";
import { InputManager } from "@/game_engine/InputManager";
import { Player } from "./player";
import { Enemy } from "./enemy";
import { Grid } from "./grid";
export class GameDemo extends BaseGame
{   
    private input = new InputManager()
    private grid : Grid | null = null
    constructor(canvasHeight: number , canvasWidth: number, canvas : HTMLCanvasElement){
        super(canvasHeight, canvasWidth, canvas);

    }

    start()
    {
        super.start();
        const player : Player = new Player(50,50,this.input);
        let enemy : Enemy = new Enemy(200,200,player)
        this.objects.push(player, enemy);

        this.grid = new Grid(this.canvasWidth, this.canvasHeight,this.objects);
        requestAnimationFrame(this.loop)
    }

    private loop = (time:number) => {
        if(!this.running) return;

        const dt = (time - this.lastTime) / 1000; 
        this.lastTime = time;
        this.update(dt);
        this.render();

        this.objects.forEach(e=> e.update(this,dt));
        this.objects.forEach(e => e.draw(this.ctx));
        this.grid?.drawGrid(this.ctx)
        requestAnimationFrame(this.loop);
    }

    update(dt: number): void {
        
    }
    render(): void {
        this.ctx.clearRect(0,0,this.canvasWidth,this.canvasHeight);
        this.ctx.fillStyle = "skyblue";
        this.ctx.fillRect(0,0,this.canvasWidth,this.canvasHeight);
    }
    destroy(): void {
        this.running = false;
    }
    
}