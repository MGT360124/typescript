// declare 关键字声明
// 当使用第三方库时，我们需要引用它的声明文件。但是在 TypeScript 中，我们并不知道 $ 或 jQuery 是什么东西：
declare var jQuery: (selector: string) => any
jQuery("#node");

// 声明文件
// 通常我们会将类型声明放到一个单独的文件中，这就是声明文件：
