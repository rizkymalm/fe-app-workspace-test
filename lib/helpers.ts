export function checkValueExists(array: any[], key: string, value: String) {
    return array.some(item => item[key] === value);
}

export function moveUp(arr: any[], index: number) {
    // Check if the element is already at the top (index 0)
    if (index > 0) {
        const element = arr[index];
        arr[index] = arr[index - 1]; // Replace current element with the one above it
        arr[index - 1] = element; // Place the element into the position above it
    }
    return arr;
}

export function moveDown<T>(arr: T[], index: number): T[] {
    if (!Array.isArray(arr)) return [];
    if (index < 0 || index >= arr.length - 1) return [...arr];

    const newArr = [...arr];
    [newArr[index], newArr[index + 1]] = [newArr[index + 1], newArr[index]];

    return newArr;
}
