import styled from 'styled-components';

function BoxOutput(props) {
    const { bmi } = props;

    if (!bmi) {
        return <OutputDiv>---</OutputDiv>;
    }

    let result = '';
    if (bmi < 18.5) {
        result = 'ผอม';
    }
    else if (bmi >= 18.5 && bmi <=25) {
        result = 'ปกติ';
    }
    else {
        result = 'อ้วน';
    }

    return (
        <OutputDiv>
            <h3>BMI = {bmi.toFixed(2)}</h3>
            <h2>ผลลัพธ์ = {result}</h2>
        </OutputDiv>
    );
}

const OutputDiv = styled.div`
    border: 8px double skyblue;
    text-align: center;
    padding: 16px;
`;

export default BoxOutput;

// น้อยกว่า 18.5 => ผอม
// 18.5 - 25   => ปกติ
// มากกว่า 25   => อ้วน