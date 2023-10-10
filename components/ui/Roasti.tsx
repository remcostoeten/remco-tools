'use client'
import React, { useEffect, useState } from 'react';

const Roasti: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(
    () => JSON.parse(localStorage.getItem('toastClosed') || 'false')
  );

  useEffect(() => {
    if (!isClosed) {
      setTimeout(() => {
        setIsVisible(true);
      }, 3000);

      setTimeout(() => {
        setIsVisible(false);
      }, 8000);
    }
  }, [isClosed]);

  useEffect(() => {
    if (isClosed) {
      localStorage.setItem('toastClosed', JSON.stringify(true));
    }
  }, [isClosed]);

  const handleClose = () => {
    setIsVisible(false);
    setIsClosed(true);
  };

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 1s cubic-bezier(0.25, 1, 0.5, 1)',
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: 'black',
        border: '2px solid grey',
        borderRadius: '15px',
        width: '250px',
        color: 'white',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <span>This is not a production environment</span>
      <button onClick={handleClose} style={{ background: 'grey', border: 'none', borderRadius: '50%' }}>X</button>
    </div>
  );
};

export default Roasti;
