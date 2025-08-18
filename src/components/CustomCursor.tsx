import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Handle hover states
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        setCursorVariant('button');
      } else if (target.tagName === 'A' || target.closest('a')) {
        setCursorVariant('hover');
      } else if (
        target.tagName === 'H1' || 
        target.tagName === 'H2' || 
        target.tagName === 'H3' ||
        target.tagName === 'P' ||
        target.closest('h1') ||
        target.closest('h2') ||
        target.closest('h3') ||
        target.closest('p')
      ) {
        setCursorVariant('text');
      } else if (
        target.classList.contains('group') ||
        target.closest('.group') ||
        target.style.cursor === 'pointer' ||
        target.closest('[role="button"]')
      ) {
        setCursorVariant('hover');
      } else {
        setCursorVariant('default');
      }
    };

    const handleMouseDown = () => setCursorVariant('click');
    const handleMouseUp = () => setCursorVariant('default');

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const variants = {
    default: 'cursor',
    hover: 'cursor hover',
    text: 'cursor text',
    button: 'cursor button',
    click: 'cursor click'
  };

  const followerVariants = {
    default: 'cursor-follower',
    hover: 'cursor-follower hover',
    text: 'cursor-follower',
    button: 'cursor-follower hover',
    click: 'cursor-follower'
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Main Cursor */}
      <div
        className={variants[cursorVariant as keyof typeof variants]}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />
      
      {/* Cursor Follower */}
      <div
        className={followerVariants[cursorVariant as keyof typeof followerVariants]}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />
    </>
  );
};

export default CustomCursor;