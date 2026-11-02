import { BasicObject } from "@/game_engine/BasicObject";
import { ParamHTMLAttributes } from "react";

export type PathNode = Node | null

export class Node {

    private walkable :boolean;
    private parent : PathNode;
    private hCost : number;
    private gCost : number;

    constructor(walkable : boolean, parent : PathNode )
    {
        this.walkable = walkable;
        this.parent = parent;

        this.gCost = Number.MAX_SAFE_INTEGER;
        this.hCost = Number.MAX_SAFE_INTEGER;

    }

    fCost() : number {return this.hCost + this.gCost;}

    setParent(parent : PathNode){this.parent = parent;}

    getGCost() : number {return this.gCost;} //distanceFromStart
    getHCost() : number {return this.hCost;} //distanceToTarget
    setWalkable(walkable : boolean) : void {this.walkable = walkable;}
    getParent() : PathNode {return this.parent;}
    getWalkable() : boolean { return this.walkable;}
}

export class Grid {
    private grid: Node[][] = [];
    private gridSizeX: number;
    private gridSizeY: number;
    private nodeSize = 10;
    private worldSizeX: number;
    private worldSizeY: number;
    private entities : BasicObject[]

    constructor(worldSizeX: number, worldSizeY: number, entities: BasicObject[]) {
        this.worldSizeX = worldSizeX;
        this.worldSizeY = worldSizeY;
        this.entities = entities;
        // Calculate grid dimensions based on world size and node size
        this.gridSizeX = Math.round(worldSizeX / this.nodeSize);
        this.gridSizeY = Math.round(worldSizeY / this.nodeSize);


    }

    GridPositionFromWorld(x: number, y: number) {
        // Top-left origin: 0,0 is top-left, going positive right and down
        const percentX = x / this.worldSizeX;
        const percentY = y / this.worldSizeY;

        // Convert to integer indices using Math.floor
        const nodeX = Math.floor(percentX * this.gridSizeX);
        const nodeY = Math.floor(percentY * this.gridSizeY);

        // Ensure indices are within bounds before accessing
        if (nodeX >= 0 && nodeX < this.gridSizeX && nodeY >= 0 && nodeY < this.gridSizeY) {
            this.grid[nodeX][nodeY].setWalkable(false);
        }
    }

    update()
    {   
        for (let x = 0; x < this.gridSizeX; x++) {
            this.grid[x] = [];
            for (let y = 0; y < this.gridSizeY; y++) {
                this.grid[x][y]= new Node(true, null );
            }
        }
        
        // Mark nodes as unwalkable based on entity positions
        for (const entity of this.entities) {
            for(let i = entity.getX(); i < entity.getX() + entity.getWidth(); i +=10)
            {
                for(let j = entity.getY(); j < entity.getY() + entity.getHeight(); j += 10)
                {
                    this.GridPositionFromWorld(i, j);
                }
            }
            
        }
    }

    drawGrid(ctx: CanvasRenderingContext2D) {
        for (let x = 0; x < this.gridSizeX; x++) {
            for (let y = 0; y < this.gridSizeY; y++) {
                ctx.fillStyle = this.grid[x][y].getWalkable() ? "rgba(0,255,0,0.5" : "rgba(255, 0, 0, 0.5)";

                // Direct mapping since (0,0) is top-left
                let worldX = x * this.nodeSize;
                let worldY = y * this.nodeSize;

                ctx.fillRect(worldX, worldY, this.nodeSize, this.nodeSize);
                ctx.strokeStyle = "black"
                ctx.strokeRect(worldX,worldY,this.nodeSize,this.nodeSize)
            }
        }
    }
}