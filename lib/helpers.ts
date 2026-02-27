export function checkValueExists(array: any[], key: string, value: String) {
    return array.some(item => item[key] === value);
}
