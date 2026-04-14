"use client"
import { GameDemo } from "@/game_demo/gameDemo";
import { useEffect, useRef, useState } from "react"

export default function Game(){
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [dimensions, setDimensions] = useState({width : 0, height : 0});
    
    useEffect(() => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight
        })},[]);

    useEffect(()=>{
        
        const canvas = canvasRef.current;
        if (!canvas || dimensions.width === 0) return;

        const game = new GameDemo(dimensions.height,dimensions.width, canvas);
        game.start();
        return ()=>game.destroy();
    },[dimensions]);
    return(
        <div>
            <div id="screen">
                <canvas ref={canvasRef} width={dimensions.width} height={dimensions.height}/>
            </div>
        </div>
    )
}