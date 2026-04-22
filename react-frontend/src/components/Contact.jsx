import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('Message sent! ✅');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      setStatus('Something went wrong! ❌');
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#111',
    border: '1px solid #333',
    borderRadius: '6px',
    color: '#fff',
    fontSize: '15px',
    outline: 'none',
    marginBottom: '16px',
  };

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

      <div style={{ display: 'flex', gap: '60px' }}>
        <div style={{ flex: 1 }}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              style={{ ...inputStyle, resize: 'vertical' }}
            />
            <button type="submit" style={{
              padding: '12px 28px',
              backgroundColor: '#00d4ff',
              color: '#000',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              fontSize: '15px',
              cursor: 'pointer',
            }}>Send Message 🚀</button>
            {status && <p style={{ color: '#00d4ff', marginTop: '16px' }}>{status}</p>}
          </form>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center' }}>
          <a href="mailto:maliraj544@gmail.com" style={{
            color: '#00d4ff', textDecoration: 'none', fontSize: '18px' }}>
            📧 maliraj544@gmail.com
          </a>
          <a href="https://linkedin.com/in/maliraj544" target="_blank" rel="noreferrer" style={{
            color: '#00d4ff', textDecoration: 'none', fontSize: '18px' }}>
            💼 LinkedIn
          </a>
          <a href="https://github.com/maliraj544" target="_blank" rel="noreferrer" style={{
            color: '#00d4ff', textDecoration: 'none', fontSize: '18px' }}>
            🐙 GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;