import { useState } from 'react';
import './App.css';

function App() {
    const [note, setNote] = useState({
        content: '', author: ''
    });

    function onNoteValueChange(event) {
        setNote((prevNote) => {
            return {
                ...prevNote,
                [event.target.name]: event.target.value
            };
        });
    }

    return (
        <section className="app-section">
            <div className="app-container">
                <h3>สักหน่อยมั้ยหละ</h3>
                <p>
                    <textarea
                        rows="3"
                        placeholder="บันทึกความในใจ"
                        name="content"
                        value={note.content}
                        onChange={onNoteValueChange}
                    />
                </p>
                <p>
                    <input
                        type="text"
                        placeholder="ลงชื่อ"
                        name="author"
                        value={note.author}
                        onChange={onNoteValueChange}
                    />
                </p>
            </div>
        </section>
    );
}

export default App;
