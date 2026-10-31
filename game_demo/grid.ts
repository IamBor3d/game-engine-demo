import { BasicObject } from "@/game_engine/BasicObject";

export type Node = {
    walkable: boolean;
};

export class Grid {
    private grid: Node[][] = [];
    private gridSizeX: number;
    private gridSizeY: number;
    private nodeSize = 10;
    private worldSizeX: number;
    private worldSizeY: number;

    constructor(worldSizeX: number, worldSizeY: number, entities: BasicObject[]) {
        this.worldSizeX = worldSizeX;
        this.worldSizeY = worldSizeY;

        // Calculate grid dimensions based on world size and node size
        this.gridSizeX = Math.round(worldSizeX / this.nodeSize);
        this.gridSizeY = Math.round(worldSizeY / this.nodeSize);

        for (let x = 0; x < this.gridSizeX; x++) {
            this.grid[x] = [];
            for (let y = 0; y < this.gridSizeY; y++) {
                this.grid[x][y] = { walkable: true };
            }
        }

        // Mark nodes as unwalkable based on entity positions
        for (const entity of entities) {
            for(let i = entity.getX(); i < entity.getX() + entity.getWidth(); i +=10)
            {
                for(let j = entity.getY(); j < entity.getY() + entity.getHeight(); j += 10)
                {
                    this.GridPositionFromWorld(i, j);
                }
            }
            
        }
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
            this.grid[nodeX][nodeY] = { walkable: false };
        }
    }

    drawGrid(ctx: CanvasRenderingContext2D) {
        for (let x = 0; x < this.gridSizeX; x++) {
            for (let y = 0; y < this.gridSizeY; y++) {
                ctx.fillStyle = this.grid[x][y].walkable ? "rgba(0,255,0,0.5" : "rgba(255, 0, 0, 0.5)";

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