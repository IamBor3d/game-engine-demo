"use client"
import { GameDemo } from "@/game_demo/gameDemo";
import { useEffect, useRef } from "react"

export default function Game(){
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const canvasWidth : number = 1000;
    const canvasHeight : number = 1000;

    useEffect(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;

        const game = new GameDemo(canvasHeight,canvasWidth, canvas);
        game.start();
        return ()=>game.destroy();
    },[]);
    return(
        <div>
            <div id="screen">
                <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight}/>
            </div>
        </div>
    )
}