const technologies = [
  { name: 'React', icon: '⚛️', color: '#61DAFB' },
  { name: 'Vite', icon: '⚡', color: '#646CFF' },
  { name: 'TypeScript', icon: '📘', color: '#3178C6' },
  { name: 'JavaScript', icon: '📜', color: '#F7DF1E' },
  { name: 'Node.js', icon: '🟢', color: '#339933' },
  { name: 'Git', icon: '🔀', color: '#F05032' },
  { name: 'VS Code', icon: '💻', color: '#007ACC' },
  { name: 'npm', icon: '📦', color: '#CB3837' }
]

function TechStack() {
  return (
    <section className="tech-stack">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">技术栈</h2>
          <p className="section-subtitle">日常使用的开发工具和技术</p>
        </div>
        
        <div className="tech-grid">
          {technologies.map((tech) => (
            <div key={tech.name} className="tech-item" style={{ '--tech-color': tech.color }}>
              <span className="tech-icon">{tech.icon}</span>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
