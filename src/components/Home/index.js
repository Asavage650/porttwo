import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatingLetters from '../AnimatingLetters';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = [
    'A',
    'l',
    'e',
    'x',
    'i',
    'u',
    's',
    'S',
    'a',
    'v',
    'a',
    'g',
    'e',
  ];
  const jobArray = ['w', 'e', 'b', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>e</span>
          <span className={`${letterClass} _13`}>l</span>
          <span className={`${letterClass} _14`}>l</span>
          <span className={`${letterClass} _15`}>o</span>
          <br />
          <span className={`${letterClass} _16`}>I</span>
          <span className={`${letterClass} _17`}>'m</span>
          <br />
          <AnimatingLetters
            letterClass={letterClass}
            stArray={nameArray}
            idx={15}
          />
          Alexius Savage
          <br />
          <AnimatingLetters
            letterClass={letterClass}
            stArray={jobArray}
            idx={22}
          />
          Web Developer
        </h1>
        <h2>Frontend Developer/ React/Node expert / Javascript Expert</h2>
        <Link to="/contact" className="flat-button">
          Contact Me!
        </Link>
      </div>
    </div>
  );
};
export default Home;
