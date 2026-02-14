function About() {
  const socials = [
    { name: 'GitHub', icon: '🔗', url: 'https://github.com/guominjia' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/guominjia' },
    { name: 'Email', icon: '📧', url: 'mailto:hello@guominjia.com' }
  ]

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">关于我</h2>
            <p className="about-description">
              Hi, 我是 <strong>Guomin</strong>，一名热爱技术的开发者。
              目标是成为优秀的全栈工程师。
            </p>
            <p className="about-description">
              在这里分享我的学习笔记、项目经验和技术思考。
              希望能够帮助更多的开发者成长，也期待与你交流探讨。
            </p>
            
            <div className="social-links">
              {socials.map((social) => (
                <a key={social.name} href={social.url} className="social-link" target="_blank" rel="noopener noreferrer" title={social.name}>
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="about-avatar">
            <div className="avatar-wrapper">
              <div className="avatar-placeholder">
                <span className="avatar-emoji">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
