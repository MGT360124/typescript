function add(x: number, y: number): number {
    return x + y
}
console.log(add(1, 2))


let addSum: (x: number, y: number) => number = (x: number, y: number): number => x + y;

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}