function Skills() {
  const isMobile = window.innerWidth < 768;
  
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth']
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'MySQL']
    },
    {
      title: 'Languages',
      skills: ['Java', 'C', 'JavaScript']
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'AWS', 'VS Code']
    },
    {
      title: 'Soft Skills',
      skills: ['Teamwork', 'Leadership', 'Problem Solving', 'Communication']
    },
  ];

  return (
    <section id="skills" style={{ 
      padding: isMobile ? '40px 16px' : '80px 60px', 
      backgroundColor: '#0a0a0a' 
    }}>
      <h2 style={{
        fontSize: isMobile ? '28px' : '36px',
        color: '#fff',
        borderLeft: '4px solid #00d4ff',
        paddingLeft: '16px',
        marginBottom: '30px',
      }}>Skills</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(3, 1fr)',
        gap: '16px',
      }}>
        {skillCategories.map((category, index) => (
          <div key={index} style={{
            background: '#111',
            border: '1px solid #222',
            borderRadius: '10px',
            padding: isMobile ? '14px' : '20px',
          }}>
            <h3 style={{
              color: '#00d4ff',
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '12px',
              paddingBottom: '8px',
              borderBottom: '1px solid #222',
            }}>{category.title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {category.skills.map((skill, i) => (
                <span key={i} style={{
                  padding: '4px 10px',
                  border: '1px solid #00d4ff',
                  borderRadius: '20px',
                  color: '#00d4ff',
                  fontSize: '11px',
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