import { useState, useEffect } from 'react';

function Navbar() {
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 300) {
          setActive(section.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['about', 'skills', 'experience', 'certifications', 'projects', 'achievements', 'contact'];

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 20px',
      backgroundColor: '#0a0a0a',
      borderBottom: '1px solid #222',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div style={{ color: '#00d4ff', fontSize: '24px', fontWeight: 'bold' }}>
        Aliraj.
      </div>

      {/* Hamburger Icon - Mobile only */}
      <div
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none',
          flexDirection: 'column',
          gap: '5px',
          cursor: 'pointer',
        }}
        className="hamburger"
      >
        <span style={{ width: '25px', height: '3px', backgroundColor: '#00d4ff', borderRadius: '3px' }}></span>
        <span style={{ width: '25px', height: '3px', backgroundColor: '#00d4ff', borderRadius: '3px' }}></span>
        <span style={{ width: '25px', height: '3px', backgroundColor: '#00d4ff', borderRadius: '3px' }}></span>
      </div>

      {/* Desktop Nav */}
      <ul className="nav-links" style={{
        display: 'flex',
        listStyle: 'none',
        gap: '24px',
        margin: 0,
        padding: 0,
      }}>
        {navItems.map((item) => (
          <li key={item}>
            <a href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              style={{
                color: active === item ? '#00d4ff' : '#fff',
                textDecoration: 'none',
                fontSize: '14px',
                textTransform: 'capitalize',
              }}>{item}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul style={{
          position: 'absolute',
          top: '60px',
          left: 0,
          width: '100%',
          backgroundColor: '#0a0a0a',
          borderBottom: '1px solid #222',
          listStyle: 'none',
          padding: '20px',
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          zIndex: 99,
        }}>
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: active === item ? '#00d4ff' : '#fff',
                  textDecoration: 'none',
                  fontSize: '16px',
                  textTransform: 'capitalize',
                }}>{item}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;