import { IHelloWorld } from './types';


export function handler (helloWorld: IHelloWorld): string {
    const helloWorldString = `${helloWorld.greeting} ${helloWorld.phrase} This is a good number: ${helloWorld.number}`;
    for (const word of helloWorld.words) {
        helloWorldString.toLocaleUpperCase + ' ' + word;
    }
    return helloWorldString;
}


export function createHelloWorld(
    greeting: string, 
    phrase: string, 
    number: number, 
    words: Array<string>
    ): IHelloWorld {
    const helloWorld = {
        greeting: greeting,
        phrase: phrase,
        number: number,
        words: words
    }
    return helloWorld;
}
const helloWorld = {
    greeting: "Hello y'all, I'm just a piece of shit!",
    phrase: "I inveted magic among other things. Also I am basically god lol :>",
    number: 1337,
    words: ["I", "am", "really", "mediocre", "lawl."]
}
