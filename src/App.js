import { useState } from 'react';
import './App.css';

const emptyNote = {
    content: '', author: ''
};

function App() {
    // - States
    const [note, setNote] = useState(emptyNote);
    const [allNotes, setAllNotes] = useState([]);

    // - Functions
    function onNoteValueChange(event) {
        const { name, value } = event.target;
        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function onNoteSubmit(event) {
        event.preventDefault();

        // Add note
        setAllNotes((prevAllNotes) => {
            const newNote = { ...note };
            newNote.id = Date.now().toString();
            return [newNote, ...prevAllNotes];
        });

        // Clear form
        setNote(emptyNote);
    }

    // - Elements
    const allNotesElements = allNotes.map((theNote) => {
        return (
            <div key={theNote.id} className="app-note">
                <p>{theNote.content}</p>
                <h5>{theNote.author}</h5>
            </div>
        );
    });

    return (
        <section className="app-section">
            <div className="app-container">
                <h3>สักหน่อยมั้ยหละ</h3>
                <form onSubmit={onNoteSubmit}>
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
                    <p>
                        <button type="submit">เพิ่มลงไป</button>
                    </p>
                </form>
                <div className="app-notes">
                    {allNotesElements}
                </div>
            </div>
        </section>
    );
}

export default App;
