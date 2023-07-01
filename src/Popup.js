import { useEffect } from 'react';
import './Popup.css';

function Popup(props) {
  useEffect(() => {
    console.log('Popup start');
    document.documentElement.style.overflowY = 'hidden';
    return () => {
      console.log('Popup end');
      document.documentElement.style.overflowY = 'auto';
    };
  }, []);

  return <div className="popup" onClick={props.onPopupClose} />;
}

export default Popup;
