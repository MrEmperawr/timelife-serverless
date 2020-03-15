import { IHelloWorld } from './types';


export function handler (helloWorld: IHelloWorld): string {
    const helloWorldString = `${helloWorld.greeting} ${helloWorld.phrase} ${helloWorld.number}`;
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

