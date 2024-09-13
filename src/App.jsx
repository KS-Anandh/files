import React from 'react';

const App = () => {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"500px"}}>
    <a
      href="https://drive.google.com/file/d/1034sdh4r9WWvda37rq5GxkUKf2N_KsGu/view?usp=drivesdk" // Replace with the actual path to your .ppt file
      download="presentation.ppt"    // Specifies the file name for the download
      style={linkStyle}
    >
      <button style={buttonStyle}>
        Business Plan By Anandh
      </button>
    </a>
    </div>
  );
};

// Optional: Style the link and button
const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const linkStyle = {
  textDecoration: 'none',
};

export default App;
