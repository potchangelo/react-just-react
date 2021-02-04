import { useState } from 'react';
import './App.css';
import Popup from './Popup';

function App() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    let popup = null;
    if (isPopupOpen) {
        popup = <Popup onPopupClose={() => setIsPopupOpen(false)} />;
    }

    return (
        <section className="app-section">
            <div className="app-container">
                <h1>เก็บโค้ดส่วนลดไม่ทัน</h1>
                <button onClick={() => setIsPopupOpen(true)}>เปิดป๊อปอัพ</button>
                <p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p><p>น่ารัก</p>
            </div>
            {popup}
        </section>
    );
}

export default App;
