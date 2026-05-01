function Skills() {
  const skillCategories = [
    { title: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript', 'React.js'] },
    { title: 'Backend', skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth'] },
    { title: 'Database', skills: ['MongoDB', 'MySQL'] },
    { title: 'Languages', skills: ['Java', 'C', 'JavaScript'] },
    { title: 'Tools', skills: ['Git', 'GitHub', 'AWS', 'VS Code'] },
    { title: 'Soft Skills', skills: ['Teamwork', 'Leadership', 'Problem Solving', 'Communication'] },
  ];

  return (
    <section id="skills" style={{
      padding: 'clamp(40px, 8vw, 80px) clamp(20px, 8vw, 60px)',
      backgroundColor: '#0a0a0a',
    }}>
      <h2 style={{
        fontSize: '36px',
        color: '#fff',
        borderLeft: '4px solid #00d4ff',
        paddingLeft: '16px',
        marginBottom: '30px',
      }}>Skills</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
      }}>
        {skillCategories.map((category, index) => (
          <div key={index} style={{
            background: '#111',
            border: '1px solid #222',
            borderRadius: '10px',
            padding: '20px',
          }}>
            <h3 style={{
              color: '#00d4ff',
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '12px',
              paddingBottom: '8px',
              borderBottom: '1px solid #222',
            }}>{category.title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {category.skills.map((skill, i) => (
                <span key={i} style={{
                  padding: '5px 12px',
                  border: '1px solid #00d4ff',
                  borderRadius: '20px',
                  color: '#00d4ff',
                  fontSize: '12px',
                }}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;