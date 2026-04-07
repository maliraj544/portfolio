function Achievements() {
  const achievements = [
    {
      icon: '🏆',
      title: 'LeetCode 200+ Problems',
      description: 'Solved 200+ DSA problems on LeetCode with 100 Days Badge',
    },
    {
      icon: '⭐',
      title: 'HackerRank 3 Star Java',
      description: 'Achieved 3 star rating in Java on HackerRank platform',
    },
    {
      icon: '💻',
      title: 'Full Stack Internship',
      description: 'Completed 3 months AWS Virtual Internship in Full Stack Development',
    },
    {
      icon: '📜',
      title: 'IBM Certified',
      description: 'Earned 2 IBM SkillsBuild certifications in Web Dev & Cybersecurity',
    },
  ];

  return (
    <section id="achievements" style={{ padding: '80px 60px', backgroundColor: '#0a0a0a' }}>
      <h2 style={{
        fontSize: '36px',
        color: '#fff',
        borderLeft: '4px solid #00d4ff',
        paddingLeft: '16px',
        marginBottom: '30px',
      }}>Achievements</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
      }}>
        {achievements.map((item, index) => (
          <div key={index} style={{
            background: '#111',
            border: '1px solid #222',
            borderRadius: '10px',
            padding: '24px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>{item.icon}</div>
            <h3 style={{ color: '#fff', fontSize: '16px', marginBottom: '8px' }}>{item.title}</h3>
            <p style={{ color: '#aaa', fontSize: '14px', lineHeight: '1.6' }}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;