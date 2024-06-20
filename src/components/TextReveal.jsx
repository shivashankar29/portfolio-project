import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const OnScrollTextReveal = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  if (inView && !isVisible) {
    setIsVisible(true);
  }

  return (
    <div ref={ref} className={`text-reveal ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export default OnScrollTextReveal;
