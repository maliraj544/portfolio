import { useState, useEffect } from 'react';

function Hero() {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = ['Software Developer', 'Full Stack Developer', 'Problem Solver', 'Open to Work 🚀'];

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, isDeleting ? 60 : 100);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <section id="hero" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '80px 60px',
      backgroundColor: '#0a0a0a',
    }}>
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: '52px', color: '#fff', marginBottom: '10px' }}>
          Hi, I'm <span style={{ color: '#00d4ff' }}>Aliraj Mansuri</span>
        </h1>
        <h2 style={{ fontSize: '26px', color: '#aaa', marginBottom: '16px', minHeight: '40px' }}>
          {text}<span style={{ color: '#00d4ff' }}>|</span>
        </h2>
        <p style={{ color: '#888', marginBottom: '30px' }}>
          B.Tech CSE Student | Aspiring Software Engineer | Open to Work 🚀
        </p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <a href="#projects" style={{
            padding: '12px 28px',
            backgroundColor: '#00d4ff',
            color: '#000',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}>See My Work</a>
          <a href="Aliraj_Resume.pdf" download style={{
            padding: '12px 28px',
            border: '2px solid #00d4ff',
            color: '#00d4ff',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}>Download Resume</a>
        </div>
      </div>
      <div>
        <img src="Photo.jpg" alt="Aliraj Mansuri" style={{
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          objectFit: 'cover',
          objectPosition: 'top',
          border: '4px solid #00d4ff',
        }}/>
      </div>
    </section>
  );
}

export default Hero;