import react, {useEffect, useState, useRef} from 'react';

const MouseEffect = () => {
  const [coords, setCoords] = useState({x: 0, y: 0});

  useEffect(() => {
    const handleWindowMouseMove = event => {
      setCoords({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleWindowMouseMove,
      );
    };
  }, []);

	return (
		<div className='mouse-container'>
			<div className="mouse-effect" style={{top: `${coords.y}px`, left: `${coords.x}px`}}></div>
		</div>


	);
}

export default MouseEffect;

// Thank you: https://bobbyhadz.com/blog/react-get-mouse-position