import { useRef } from 'react';
import './App.css';
import SelectTextarea from './SelectTextarea';
import SendFile from './SendFile';

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
        <SelectTextarea onSelectTextClick={onSelectTextClick} ref={textareaRef} />
        <SendFile onSendClick={onSendClick} ref={fileRef} />
      </div>
    </section>
  );
}

export default App;
