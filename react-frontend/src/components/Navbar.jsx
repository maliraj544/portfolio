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

      {/* Desktop Nav */}
      <ul style={{
        display: 'flex',
        listStyle: 'none',
        gap: '24px',
        margin: 0,
        padding: 0,
        flexWrap: 'wrap',
      }}>
        {navItems.map((item) => (
          <li key={item}>
            <a href={`#${item}`} style={{
              color: active === item ? '#00d4ff' : '#fff',
              textDecoration: 'none',
              fontSize: '14px',
              textTransform: 'capitalize',
              transition: 'color 0.3s',
            }}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;