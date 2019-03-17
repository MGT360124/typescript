// 类型 和 [] 组合表示
var nameList = ["韩梅梅", '李雷'];
// 数组泛型表示
var addressList = ["江西省", "南昌市"];
var ageList = [1, 2, 4];
// 任意类型的数组 any 
var arrList = ["hanmeimei", 18, { name: "lilei", sex: "M" }, [18]];
// 类数组 IArguments, NodeList, HTMLCollection
function sum() {
    var args = arguments;
}
