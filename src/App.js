import { useRef } from 'react';
import './App.css';

function App() {
    const textareaRef = useRef(null);
    const fileRef = useRef(null);

    function onSendClick() {
        console.log(fileRef.current.files[0]);
    }

    function onSelectTextClick() {
        textareaRef.current.focus();
        textareaRef.current.select();
    }

    return (
        <section className="app-section">
            <div className="app-container">
                <p>
                    <textarea ref={textareaRef}></textarea>
                </p>
                <p>
                    <button onClick={onSelectTextClick}>เลือกข้อความทั้งหมด</button>
                </p>
                <p>
                    <input type="file" ref={fileRef} />
                </p>
                <p>
                    <button onClick={onSendClick}>ส่งไฟล์</button>
                </p>
            </div>
        </section>
    );
}

export default App;