/**
 * Class to keep track of user inputs
 */
export class InputManager
{
    pressedKeys = new Set<string>(); //Store pressed keys

    constructor()
    {
        window.addEventListener("keydown", e => this.pressedKeys.add(e.key));
        window.addEventListener("keyup", e => this.pressedKeys.delete(e.key));
    }


    isKeyDown(key : string)
    {
        return this.pressedKeys.has(key);
    }
}