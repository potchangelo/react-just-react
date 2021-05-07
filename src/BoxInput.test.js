import { fireEvent, render, screen } from '@testing-library/react';
import BoxInput from './BoxInput';

test('Box input first appearance is correct', () => {
    render(<BoxInput />);

    const weightInput = screen.getByPlaceholderText(/น้ำหนัก/i);
    expect(weightInput).toBeInTheDocument();

    const heightInput = screen.getByPlaceholderText(/ส่วนสูง/i);
    expect(heightInput).toBeInTheDocument();

    const calculateButton = screen.getByText(/คำนวณ BMI/i);
    expect(calculateButton).toBeInTheDocument();
});

test('Box input show error if calculate empty values', () => {
    render(<BoxInput onCalculateBmi={() => {}} />);

    const calculateButton = screen.getByText(/คำนวณ BMI/i);
    fireEvent.click(calculateButton);

    const errorP = screen.getByText(/กรุณาใส่ข้อมูลให้ครบถ้วน/i);
    expect(errorP).toBeInTheDocument();
});

test('Box input not show error if calculate valid values', () => {
    render(<BoxInput onCalculateBmi={() => {}} />);

    const weightInput = screen.getByPlaceholderText(/น้ำหนัก/i);
    fireEvent.change(weightInput, { target: { value: '70' } });
    expect(weightInput.value).toBe('70');

    const heightInput = screen.getByPlaceholderText(/ส่วนสูง/i);
    fireEvent.change(heightInput, { target: { value: '180' } });
    expect(heightInput.value).toBe('180');

    const calculateButton = screen.getByText(/คำนวณ BMI/i);
    fireEvent.click(calculateButton);

    const errorP = screen.queryByText(/กรุณาใส่ข้อมูลให้ครบถ้วน/i);
    expect(errorP).not.toBeInTheDocument();
});