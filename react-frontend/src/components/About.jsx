function About() {
  return (
    <section id="about" className="section-container" style={{ backgroundColor: '#0a0a0a' }}>
      <h2 style={{
        fontSize: '36px',
        color: '#fff',
        borderLeft: '4px solid #00d4ff',
        paddingLeft: '16px',
        marginBottom: '30px',
      }}>About Me</h2>

      <div>
        <p style={{ color: '#aaa', lineHeight: '1.8', marginBottom: '16px' }}>
          Hey! I'm <span style={{ color: '#00d4ff', fontWeight: '600' }}>Aliraj Mansuri</span>, 
          a final year B.Tech CSE student at <span style={{ color: '#00d4ff', fontWeight: '600' }}>
          Galgotias University</span>, Greater Noida.
        </p>
        <p style={{ color: '#aaa', lineHeight: '1.8', marginBottom: '16px' }}>
          I'm a passionate <span style={{ color: '#00d4ff', fontWeight: '600' }}>
          Full Stack Developer</span> who loves building complete web applications 
          from scratch — right from designing clean user interfaces to building 
          powerful backends and databases.
        </p>
        <p style={{ color: '#aaa', lineHeight: '1.8', marginBottom: '16px' }}>
          I work with <span style={{ color: '#00d4ff', fontWeight: '600' }}>React.js</span> on 
          the frontend, <span style={{ color: '#00d4ff', fontWeight: '600' }}>
          Node.js & Express</span> on the backend, and <span style={{ color: '#00d4ff', 
          fontWeight: '600' }}>MongoDB & MySQL</span> for databases.
        </p>

        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
          marginTop: '40px',
        }}>
          {[
            { value: '7.52', label: 'CGPA' },
            { value: '1+', label: 'Projects' },
            { value: '3+', label: 'Months Internship' },
            { value: '200+', label: 'LeetCode Problems' },
          ].map((stat, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '36px', color: '#00d4ff' }}>{stat.value}</h3>
              <p style={{ color: '#888', fontSize: '14px' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;