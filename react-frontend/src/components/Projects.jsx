function Projects() {
  const projects = [
    {
      title: 'Feedback Collection Tool',
      status: 'Completed ✅',
      description: 'Full-stack app with React, Node.js, MongoDB. Features JWT auth, real-time charts, feedback filtering and sorting.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'JWT'],
      github: 'https://github.com/maliraj544',
      live: null,
    },
    {
      title: 'Portfolio Website',
      status: 'Live 🚀',
      description: 'Personal portfolio website built with HTML, CSS and JavaScript. Features dark theme, typing animation, mobile responsive design.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/maliraj544/portfolio',
      live: 'https://portfolio-pi-seven-0qlxm1mwjr.vercel.app/',
    },
  ];

  return (
    <section id="projects" style={{ padding: '80px 60px', backgroundColor: '#0a0a0a' }}>
      <h2 style={{
        fontSize: '36px',
        color: '#fff',
        borderLeft: '4px solid #00d4ff',
        paddingLeft: '16px',
        marginBottom: '30px',
      }}>Projects</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '24px',
      }}>
        {projects.map((project, index) => (
          <div key={index} style={{
            background: '#111',
            border: '1px solid #222',
            borderRadius: '10px',
            padding: '24px',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <h3 style={{ color: '#fff', fontSize: '18px' }}>{project.title}</h3>
              <span style={{
  color: '#00d4ff',
  border: '1px solid #00d4ff',
  padding: '4px 10px',
  borderRadius: '20px',
  fontSize: '12px',
  whiteSpace: 'nowrap',
  height: 'fit-content',
}}>{project.status}</span>
            </div>
            <p style={{ color: '#aaa', lineHeight: '1.6', marginBottom: '16px' }}>
              {project.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
              {project.tech.map((t, i) => (
                <span key={i} style={{
                  background: '#1a1a1a',
                  color: '#00d4ff',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  border: '1px solid #333',
                }}>{t}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href={project.github} target="_blank" rel="noreferrer"
                style={{ color: '#00d4ff', textDecoration: 'none', fontWeight: '600' }}>
                GitHub →
              </a>
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer"
                  style={{ color: '#00d4ff', textDecoration: 'none', fontWeight: '600' }}>
                  Live →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;