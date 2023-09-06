'use client';
import { useEffect, useState } from 'react';

const BlobFollowCursor = () => {
  const [blobPosition, setBlobPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const followCursor = (e: MouseEvent) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setBlobPosition({ top: e.clientY, left: e.clientX });
      }, 1500); 
    };

    window.addEventListener('mousemove', followCursor);

    return () => {
      window.removeEventListener('mousemove', followCursor);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="blob-container">
      <div
        id="blob"
        className="blob"
        style={{ top: blobPosition.top, left: blobPosition.left }}
      ></div>
    </div>
  );
};

export default BlobFollowCursor;
