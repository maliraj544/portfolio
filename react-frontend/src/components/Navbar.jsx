function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 60px',
      backgroundColor: '#0a0a0a',
      borderBottom: '1px solid #222',
      position: 'sticky',
      top: 0,
    }}>
      <div style={{ color: '#00d4ff', fontSize: '24px', fontWeight: 'bold' }}>
        Aliraj.
      </div>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '30px' }}>
        <li><a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About</a></li>
        <li><a href="#skills" style={{ color: '#fff', textDecoration: 'none' }}>Skills</a></li>
        <li><a href="#experience" style={{ color: '#fff', textDecoration: 'none' }}>Experience</a></li>
        <li><a href="#certifications" style={{ color: '#fff', textDecoration: 'none' }}>Certifications</a></li>
        <li><a href="#projects" style={{ color: '#fff', textDecoration: 'none' }}>Projects</a></li>
        <li><a href="#achievements" style={{ color: '#fff', textDecoration: 'none' }}>Achievements</a></li>
        <li><a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;