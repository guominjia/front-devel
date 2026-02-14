const projects = [
  {
    id: 1,
    name: '个人博客系统',
    description: '基于 Vite + React 的静态站点生成器，支持 Markdown 写作、代码高亮和深色模式。',
    tags: ['React', 'Vite', 'SSG'],
    github: 'https://github.com/guominjia/blog',
    demo: 'https://blog.guominjia.com',
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    id: 2,
    name: 'React UI 组件库',
    description: '轻量级的 React 组件集合，包含常用的 Button、Modal、Form 等组件，支持主题定制。',
    tags: ['React', 'Component Library', 'UI'],
    github: 'https://github.com/guominjia/ui-kit',
    demo: 'https://ui.guominjia.com',
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    id: 3,
    name: 'Vite 插件开发',
    description: '自定义 Vite 插件，实现自动导入、路由生成和构建优化等功能。',
    tags: ['Vite', 'Plugin', 'Node.js'],
    github: 'https://github.com/guominjia/vite-plugin',
    demo: null,
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  }
]

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">近期项目</h2>
          <p className="section-subtitle">开源项目和实践案例</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image" style={{ background: project.image }}>
                <div className="project-overlay"></div>
              </div>
              
              <div className="project-content">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    <span>GitHub</span>
                    <span>→</span>
                  </a>
                  {project.demo && (
                    <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                      <span>Live Demo</span>
                      <span>→</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
