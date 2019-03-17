// 类型 和 [] 组合表示

let nameList : string [] = ["韩梅梅",'李雷'];

// 数组泛型表示

let addressList : Array <string> = ["江西省","南昌市"];

// 用接口表示数组

interface AgeList {
    [index : number]: number;
}

let ageList : AgeList = [1,2,4]

// 任意类型的数组 any 

let arrList : any[] = ["hanmeimei",18,{name:"lilei",sex:"M"},[18]];

// 类数组 IArguments, NodeList, HTMLCollection
function sum() {
    let args: IArguments = arguments;
}
