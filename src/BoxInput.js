import { useState } from 'react';
import styled from 'styled-components';

function BoxInput(props) {
    const [ values, setValues ] = useState({ weight: '', height: '' });
    const [ errorMessage, setErrorMessage ] = useState('');

    function onInputChange(event) {
        const { name, value } = event.target;
        setValues(prev => ({
            ...prev, 
            [name]: value
        }));
    }

    function onButtonClick() {
        const { weight, height } = values;

        // คำนวณไม่ได้
        if (weight === '' || height === '') {
            setErrorMessage('กรุณาใส่ข้อมูลให้ครบถ้วน');
            props.onCalculateBmi(null);
            return;
        }

        // คำนวณได้
        const weightNumber = +weight;
        const heightNumber = +height;
        const bmi = weightNumber / Math.pow(heightNumber / 100, 2);
        setErrorMessage('');
        props.onCalculateBmi(bmi);
    }

    let errorElement = null;
    if (errorMessage !== '') {
        errorElement = <p>{errorMessage}</p>;
    }

    return (
        <InputDiv>
            <p>
                <input 
                    type="number" 
                    name="weight"
                    placeholder="น้ำหนัก (กิโลกรัม)" 
                    value={values.weight}
                    onChange={onInputChange}
                />
            </p>
            <p>
                <input 
                    type="number" 
                    name="height"
                    placeholder="ส่วนสูง (เซ็นติเมตร)" 
                    value={values.height}
                    onChange={onInputChange}
                />
            </p>
            <p>
                <button type="button" onClick={onButtonClick}>คำนวณ BMI</button>
            </p>
            {errorElement}
        </InputDiv>
    );
}

const InputDiv = styled.div`
    border: 1px solid darkgray;
    margin-bottom: 16px;
    padding: 16px;
`;

export default BoxInput;