


// to see import and export 

// we are making function to just export and import 
export function add2Nos(a: number, b: number): number {
    return a + b;
}


// to export to other files 
export const PI = 3.14;


// to export this function 
export class Calculator {
    
    add(a: number, b: number): number {
        return a + b;
    }

    divide(a: number, b: number): number {
        return a / b;
    }
}


// importing singlee function bhai 
export default function log(message: string): void {
    console.log(message);
}