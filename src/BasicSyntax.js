export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    let romanSymb = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    for (let i = 0; i < str.length; i++) {
        if (romanSymb[str[i]] < romanSymb[str[i + 1]]) {
            result -= romanSymb[str[i]];
        } else {
            result += romanSymb[str[i]];
        }
    }
    return result;
}
