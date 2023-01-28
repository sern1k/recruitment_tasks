/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 === 1) return false;
    if (s[0] === ')' || s[0] === ']' || s[0] === '}') return false;
    if (s[s.length - 1] === '(' || s[s.length - 1] === '{' || s[s.length - 1] === '[') return false;

    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') stack.push(')');
        else if (s[i] === '[') stack.push(']');
        else if (s[i] === '{') stack.push('}');
        else if (stack.pop() !== s[i]) return false;
    }

    let roundOpened = 0;
    let roundClosed = 0;
    let squareOpened = 0;
    let squareClosed = 0;
    let moustacheOpened = 0;
    let moustacheClosed = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i + 1]) {
            if (s[i] === '(' && (s[i + 1] === ']' || s[i] === '}')) return false;
            if (s[i] === '[' && (s[i + 1] === ')' || s[i + 1] === '}')) return false;
            if (s[i] === '{' && (s[i + 1] === ')' || s[i + 1] === ']')) return false;
        }

        switch (s[i]) {
            case '(':
                roundOpened++;
                break;
            case ')':
                roundClosed++;
                break;
            case '[':
                squareOpened++;
                break;
            case ']':
                squareClosed++;
                break;
            case '{':
                moustacheOpened++;
                break;
            case '}':
                moustacheClosed++;
                break;
        }
    }

    if (roundOpened !== roundClosed || squareOpened !== squareClosed || moustacheOpened !== moustacheClosed) return false;

    return true;
};
