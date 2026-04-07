function Contact() {
  return (
    <section id="contact" style={{ padding: '80px 60px', backgroundColor: '#0a0a0a' }}>
      <h2 style={{
        fontSize: '36px',
        color: '#fff',
        borderLeft: '4px solid #00d4ff',
        paddingLeft: '16px',
        marginBottom: '30px',
      }}>Contact Me</h2>

      <p style={{ color: '#aaa', marginBottom: '30px', fontSize: '18px' }}>
        I'm currently looking for <span style={{ color: '#00d4ff' }}>
        SDE / Full Stack Developer</span> opportunities. Let's connect! 🚀
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <a href="mailto:maliraj544@gmail.com" style={{
          color: '#00d4ff',
          textDecoration: 'none',
          fontSize: '18px',
        }}>📧 maliraj544@gmail.com</a>

        <a href="https://github.com/maliraj544" target="_blank" rel="noreferrer" style={{
  color: '#00d4ff',
  textDecoration: 'none',
  fontSize: '18px',
}}>🐙 GitHub</a>

        <a href="https://linkedin.com/in/maliraj544" target="_blank" rel="noreferrer" style={{
          color: '#00d4ff',
          textDecoration: 'none',
          fontSize: '18px',
        }}>💼 LinkedIn</a>

        
      </div>
    </section>
  );
}

export default Contact;