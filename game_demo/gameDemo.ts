import { BaseGame } from "@/game_engine/BaseGame";
import { InputManager } from "@/game_engine/InputManager";
import { Player } from "./player";
export class GameDemo extends BaseGame
{   
    private input = new InputManager()
    constructor(canvasHeight: number , canvasWidth: number, canvas : HTMLCanvasElement){
        super(canvasHeight, canvasWidth, canvas);
    }

    start()
    {
        super.start();
        this.objects.push(new Player(50,50,this.input));
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