function Certifications() {
  const certs = [
    {
      icon: '🏆',
      title: 'Web Development Fundamentals',
      issuer: 'IBM SkillsBuild',
      date: 'Dec 2023',
      link: 'https://www.credly.com/go/TH9Q8jEP',
    },
    {
      icon: '🔐',
      title: 'Cybersecurity Fundamentals',
      issuer: 'IBM SkillsBuild',
      date: 'Dec 2023',
      link: 'https://www.credly.com/go/Kl74J4iA',
    },
  ];

  return (
    <section id="certifications" style={{ padding: '80px 60px', backgroundColor: '#0a0a0a' }}>
      <h2 style={{
        fontSize: '36px',
        color: '#fff',
        borderLeft: '4px solid #00d4ff',
        paddingLeft: '16px',
        marginBottom: '30px',
      }}>Certifications</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
      }}>
        {certs.map((cert, index) => (
          <div key={index} style={{
            background: '#111',
            border: '1px solid #222',
            borderRadius: '10px',
            padding: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}>
            <div style={{ fontSize: '36px' }}>{cert.icon}</div>
            <div style={{ flex: 1 }}>
              <h3 style={{ color: '#fff', fontSize: '15px', marginBottom: '4px' }}>{cert.title}</h3>
              <p style={{ color: '#00d4ff', fontSize: '13px', marginBottom: '4px' }}>{cert.issuer}</p>
              <span style={{ color: '#555', fontSize: '12px' }}>{cert.date}</span>
            </div>
            <a href={cert.link} target="_blank" rel="noreferrer" style={{
              color: '#00d4ff',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: '600',
              whiteSpace: 'nowrap',
            }}>Verify →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;