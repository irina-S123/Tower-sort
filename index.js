    function towelSort(matrix) {
    // Используем метод map для обхода каждой строки
    return matrix.flatMap((row, index) => {
        // Если индекс чётный, оставляем строку как есть
        // Если нечётный — разворачиваем строку
        return index % 2 === 0 ? row : row.slice().reverse();
    });
}
console.log(towelSort(matrix));