/**
 * Class to keep track of user inputs
 */
export class InputManager
{
    pressedKeys = new Set<string>(); //Store pressed keys

    constructor()
    {
        window.addEventListener("keydown", e => this.pressedKeys.add(e.code));
        window.addEventListener("keyup", e => this.pressedKeys.delete(e.code));
    }


    isKeyDown(key : string)
    {
    
        return this.pressedKeys.has(key);
    }
}