module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "browser": true,
        "jasmine": true
    },
    "extends": "eslint:recommended",
    "installedESLint": true,
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-uses-react": 1,
        "react/jsx-uses-vars": 1,
        "quotes": [
            1,
            "single"
        ],
        "semi": [
            1,
            "always"
        ],
        "block-scoped-var": 1, // 强制把变量的使用限制在其定义的作用域范围内
        "eqeqeq": [2, "allow-null"], // 使用 === 替代 == allow-null允许null和undefined==
        "no-empty-function": 2, // 禁止出现空函数.如果一个函数包含了一条注释，它将不会被认为有问题。
        "no-eval": 2, // 禁用 eval()

        "no-extend-native": 2, // 禁止扩展原生类型
        // "no-magic-numbers": [1, {
        //     "ignore": [0, -1, 1]
        // }], // 禁用魔术数字(3.14什么的用常量代替)

        "no-native-reassign": 2, // 禁止对原生对象赋值
        "no-shadow": 1,
        "no-shadow-restricted-names": 2, // 禁止覆盖受限制的标识符
        "no-undef": 2, // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
        "no-undef-init": 2, // 禁止将变量初始化为 undefined
        "no-undefined": 1, // 禁止将 undefined 作为标识符
        "no-unused-vars": [2, { // 禁止出现未使用过的变量
            "vars": "all",
            "args": "none"
        }],
        "no-use-before-define": 1, // 不允许在变量定义之前使用它们
        "lines-around-comment": [1, { // 要求在注释周围有空行 ( 要求在块级注释之前有一空行)
            "beforeBlockComment": true
        }],
        "max-nested-callbacks": [1, 5], // 强制回调函数最大嵌套深度 5层
        "jsx-quotes": 1, // 强制在 JSX 属性中一致地使用双引号或单引号
        "max-len": [1, 200], // 强制一行的最大长度
        "max-params": [1, 7], // 强制 function 定义中最多允许的参数数量
        "new-parens": 2, // 要求调用无参构造函数时有圆括号
        "no-mixed-spaces-and-tabs": 2, // 不允许空格和 tab 混合缩进
        "no-nested-ternary": 1, // 不允许使用嵌套的三元表达式
        // "object-property-newline": 1,    // 强制将对象的属性放在不同的行上
        // "require-jsdoc": 1, // 要求使用 JSDoc 注释
        "semi-spacing": 1, // 强制分号之前和之后使用一致的空格
        "space-infix-ops": 2, // 要求操作符周围有空格
        "space-unary-ops": [2, {
            "words": true,
            "nonwords": false
        }], // 强制在一元操作符前后使用一致的空格

        // es6
        "arrow-body-style": 2, // 要求箭头函数体使用大括号
        "arrow-body-style": ["error", "always"],
        "no-class-assign": 2, // 禁止修改类声明的变量
        "no-const-assign": 2, // 禁止修改 const 声明的变量
        "no-dupe-class-members": 2, // 禁止类成员中出现重复的名称
        "no-duplicate-imports": 1, // 不允许复制模块的进口
        "no-this-before-super": 2, // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
        "no-var": 1, // 要求使用 let 或 const 而不是 var
        "prefer-template": 0, // 要求使用模板字面量而非字符串连接
        "no-console": 1,
        "no-debugger": 1,
    }
};