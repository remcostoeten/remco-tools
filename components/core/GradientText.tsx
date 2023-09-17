import React from 'react';
import useInView from '@/hooks/useInView'; 

interface TProps {
  t: string;
  italic?: boolean;
}

const T: React.FC<TProps> = ({ t, italic = false }) => {
  const [ref, inView] = useInView({
    threshold: 0.1, // adjust this value as you see fit
    freezeOnceVisible: true
  });

  return (
    <span ref={ref} className={`gradient-text ${inView ? 'animate' : ''} ${italic ? 'libre-italic' : ''}`}>
      {t}
    </span>
  );
}

export default T;