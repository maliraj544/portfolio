function Experience() {
  return (
    <section id="experience" style={{ padding: '80px 60px', backgroundColor: '#0a0a0a' }}>
      <h2 style={{
        fontSize: '36px',
        color: '#fff',
        borderLeft: '4px solid #00d4ff',
        paddingLeft: '16px',
        marginBottom: '30px',
      }}>Experience</h2>

      <div style={{
        background: '#111',
        border: '1px solid #222',
        borderRadius: '10px',
        padding: '28px',
        borderLeft: '4px solid #00d4ff',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
          <div>
            <h3 style={{ color: '#fff', fontSize: '18px', marginBottom: '6px' }}>
              Full Stack Web Development Intern
            </h3>
            <p style={{ color: '#00d4ff', fontSize: '14px' }}>
              Amazon Web Services (AWS) — Virtual Internship
            </p>
          </div>
          <span style={{
            background: '#1a1a1a',
            color: '#00d4ff',
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '12px',
            border: '1px solid #333',
            whiteSpace: 'nowrap',
          }}>3 Months</span>
        </div>

        <ul style={{ color: '#aaa', paddingLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
          <li>Developed a fully functional web application integrating frontend, backend and database.</li>
          <li>Gained hands-on experience deploying web applications to AWS cloud platform.</li>
          <li>Worked with React.js, Node.js and MongoDB in a real project environment.</li>
        </ul>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {['React.js', 'Node.js', 'MongoDB', 'AWS'].map((tech, i) => (
            <span key={i} style={{
              background: '#1a1a1a',
              color: '#00d4ff',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '12px',
              border: '1px solid #333',
            }}>{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;