/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // 定义一个栈
    const stack = [];
    // 遍历字符串
    for (let i = 0; i < s.length; i += 1) {
        // 若长度为奇数直接返回 false
        if (s.length % 2 === 1) { return false; }
        const c = s[i];
        // 如果碰到左括号，就入栈
        if (c === '(' || c === '{' || c === '[') {
            stack.push(c);
        } else {
            // 碰到右括号，判断栈顶元素是否类型匹配
            const t = stack[stack.length - 1];
            // 枚举可能情况
            if (
                (t === '(' && c === ')') ||
                (t === '{' && c === '}') ||
                (t === '[' && c === ']')
            ) {
                // 弹出栈顶元素，注意 c 并未入栈
                stack.pop();
            } else {
                // 不匹配 直接返回 false
                return false;
            }
        }
    }
    // 最终栈内须没有元素
    return stack.length === 0;
};