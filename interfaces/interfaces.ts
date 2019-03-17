interface Person {
    readonly name: string;
    age?: number;
    [propName: string]: any;
}

let joy: Person = {
     name: "kelay",
    // age: 12
    number: '141304011015',
    address: "李渡镇"
}

// joy.name = 'pson'