/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    answer = 0;
    let i = 0;
    if (s.includes("M")) {
        while (s[i] === "M") {
            answer += 1000;
            i++;
        }
        if (s[i] === "C" && s[i+1] == "M") {
            answer += 900;
            i = i + 2;
        }
    }
    if (s.includes("D")) {
        while (s[i] === "D") {
            answer += 500;
            i++;
        }
        if (s[i] === "C" && s[i+1] == "D") {
            answer += 400;
            i = i + 2;
        }
    }
    if (s.includes("C")) {
        while (s[i] === "C") {
            answer += 100;
            i++;
        }
        if (s[i] === "X" && s[i+1] == "C") {
            answer += 90;
            i = i + 2;
        }
    }
    if (s.includes("L")) {
        while (s[i] === "L") {
            answer += 50;
            i++;
        }
        if (s[i] === "X" && s[i+1] == "L") {
            answer += 40;
            i = i + 2;
        }
    }
    if (s. includes("X")) {
        while (s[i] === "X") {
            answer += 10;
            i++;
        }
        if (s[i] === "I" && s[i+1] == "X") {
            answer += 9;
            i = i + 2;
        }
    }
    if (s.includes("V")) {
        while (s[i] === "V") {
            answer += 5;
            i++;
        }
        if (s[i] === "I" && s[i+1] == "V") {
            answer += 4;
            i = i + 2;
        }
    }
    if (s.includes("I")) {
        while (s[i] === "I") {
            answer += 1;
            i++;
        }
    }
    return answer;
};
