import React from 'react';

const SelectTextarea = React.forwardRef((props, ref) => {
  return (
    <div>
      <p>
        <textarea ref={ref}></textarea>
      </p>
      <p>
        <button onClick={props.onSelectTextClick}>เลือกข้อความทั้งหมด</button>
      </p>
    </div>
  );
});

export default SelectTextarea;
