function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '30px',
      borderTop: '1px solid #222',
      backgroundColor: '#0a0a0a',
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '16px' }}>
        <a href="https://github.com/maliraj544" target="_blank" rel="noreferrer"
          style={{ color: '#555', textDecoration: 'none', fontSize: '14px' }}>GitHub</a>
        <a href="https://linkedin.com/in/maliraj544" target="_blank" rel="noreferrer"
          style={{ color: '#555', textDecoration: 'none', fontSize: '14px' }}>LinkedIn</a>
        <a href="mailto:maliraj544@gmail.com"
          style={{ color: '#555', textDecoration: 'none', fontSize: '14px' }}>Email</a>
        <a href="https://leetcode.com/u/maliraj544" target="_blank" rel="noreferrer"
          style={{ color: '#555', textDecoration: 'none', fontSize: '14px' }}>LeetCode</a>
      </div>
      <p style={{ color: '#555', fontSize: '14px', marginBottom: '8px' }}>
        Designed & Built by <span style={{ color: '#00d4ff' }}>Aliraj Mansuri</span>
      </p>
      <p style={{ color: '#555', fontSize: '14px' }}>© 2026 All Rights Reserved</p>
    </footer>
  );
}

export default Footer;