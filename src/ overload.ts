function concat(item1:string, item2: string): string;
function concat(item1:number, item2: number): string;
function concat(item1, item2) {
    
    return `${item1} ${item2}`
}

export default concat