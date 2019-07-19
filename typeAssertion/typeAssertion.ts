// 类型断言type assertion
// <类型>值 或 值 as 类型

function getLength (something: string | number): number {
    if ((<string>something).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}