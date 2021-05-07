import styled from 'styled-components';

function BoxOutput(props) {
    const { bmi } = props;

    if (!bmi) {
        return <OutputDiv>---</OutputDiv>;
    }

    return (
        <OutputDiv>
            <h3>BMI = {bmi.toFixed(2)}</h3>
            <h2>ผลลัพธ์ = ปกติ</h2>
        </OutputDiv>
    );
}

const OutputDiv = styled.div`
    border: 8px double skyblue;
    text-align: center;
    padding: 16px;
`;

export default BoxOutput;

// ผอม ปกติ อ้วน