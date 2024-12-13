import { useState, useEffect } from 'react';

function useHasScroll(): boolean {
  const [hasScroll, setHasScroll] = useState(false);

  useEffect(function handleScrollEffect() {
    function handleScroll() {
      setHasScroll(window.scrollY > 0);
    }

    window.addEventListener('scroll', handleScroll);

    return function cleanup() {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return hasScroll;
}

export default useHasScroll;
