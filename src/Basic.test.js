function rectangle_area(width, height) {
    if (width <= 0 || height <= 0) {
        return 0;
    }
    return width * height;
}

test('Normal rectangle area, width > 0 and height > 0', () => {
    const rect1 = rectangle_area(8, 6);
    expect(rect1).toBe(48);
});

test('Zero rectangle area, width <= 0 or height <= 0', () => {
    const rect1 = rectangle_area(-4, 6);
    expect(rect1).toBe(0);

    const rect2 = rectangle_area(4, -6);
    expect(rect2).toBe(0);

    const rect3 = rectangle_area(-4, -6);
    expect(rect3).toBe(0);
});