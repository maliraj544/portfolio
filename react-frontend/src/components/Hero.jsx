function Hero() {
  return (
    <section style={{
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
        <h2 style={{ fontSize: '26px', color: '#aaa', marginBottom: '16px' }}>
          Aspiring Software Engineer
        </h2>
        <p style={{ color: '#888', marginBottom: '30px' }}>
          B.Tech CSE Student | Full Stack Developer | Open to Work 🚀
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