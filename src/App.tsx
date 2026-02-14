import { useState, useEffect } from 'react'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 学习路径数据
  const learningPaths = [
    {
      id: 1,
      title: '前端开发',
      subtitle: 'Frontend Development',
      progress: 65,
      topics: ['HTML/CSS', 'JavaScript', 'React', 'Vue', 'TypeScript'],
      color: '#FF6B6B',
      icon: '🎨'
    },
    {
      id: 2,
      title: '后端开发',
      subtitle: 'Backend Development',
      progress: 45,
      topics: ['Node.js', 'Python', 'Database', 'API Design', 'Docker'],
      color: '#4ECDC4',
      icon: '⚙️'
    },
    {
      id: 3,
      title: '算法与数据结构',
      subtitle: 'Algorithms & DS',
      progress: 30,
      topics: ['Array', 'Tree', 'Graph', 'DP', 'Sorting'],
      color: '#FFE66D',
      icon: '🧩'
    },
    {
      id: 4,
      title: '系统设计',
      subtitle: 'System Design',
      progress: 20,
      topics: ['Scalability', 'Microservices', 'Cache', 'Load Balancing'],
      color: '#A8E6CF',
      icon: '🏗️'
    }
  ]

  // 知识卡片数据
  const knowledgeCards = [
    {
      category: '最近学习',
      items: [
        { title: 'React Hooks 进阶', date: '2024-02-01', tags: ['React', 'Frontend'] },
        { title: 'Docker 容器化部署', date: '2024-01-28', tags: ['DevOps', 'Docker'] },
        { title: 'RESTful API 设计原则', date: '2024-01-25', tags: ['API', 'Backend'] }
      ]
    },
    {
      category: '待学习',
      items: [
        { title: 'Kubernetes 入门', date: '计划中', tags: ['DevOps', 'K8s'] },
        { title: 'GraphQL 实践', date: '计划中', tags: ['API', 'Backend'] },
        { title: 'WebAssembly 探索', date: '计划中', tags: ['Performance'] }
      ]
    }
  ]

  // 学习资源
  const resources = [
    { name: 'MDN Web Docs', url: 'https://developer.mozilla.org', desc: '权威的 Web 开发文档' },
    { name: 'GitHub', url: 'https://github.com', desc: '代码托管与协作平台' },
    { name: 'Stack Overflow', url: 'https://stackoverflow.com', desc: '开发者问答社区' },
    { name: 'freeCodeCamp', url: 'https://www.freecodecamp.org', desc: '免费编程学习平台' }
  ]

  return (
    <div className="app">
      {/* 导航栏 */}
      <nav className="navbar" style={{ transform: `translateY(${Math.min(scrollY / 10, 10)}px)` }}>
        <div className="nav-container">
          <div className="logo">
            <span className="logo-icon">📚</span>
            <span className="logo-text">Learning Hub</span>
          </div>
          <div className="nav-links">
            <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => setActiveSection('home')}>首页</a>
            <a href="#paths" className={activeSection === 'paths' ? 'active' : ''} onClick={() => setActiveSection('paths')}>学习路径</a>
            <a href="#notes" className={activeSection === 'notes' ? 'active' : ''} onClick={() => setActiveSection('notes')}>笔记</a>
            <a href="#resources" className={activeSection === 'resources' ? 'active' : ''} onClick={() => setActiveSection('resources')}>资源</a>
          </div>
        </div>
      </nav>

      {/* Hero 区域 */}
      <section className="hero" id="home">
        <div className="hero-background">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line">持续学习</span>
            <span className="title-line accent">不断进步</span>
          </h1>
          <p className="hero-subtitle">记录技术成长的每一步，构建知识体系</p>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">128</div>
              <div className="stat-label">学习天数</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">42</div>
              <div className="stat-label">项目实践</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">256</div>
              <div className="stat-label">笔记数量</div>
            </div>
          </div>
        </div>
      </section>

      {/* 学习路径 */}
      <section className="learning-paths" id="paths">
        <div className="section-header">
          <h2 className="section-title">学习路径</h2>
          <p className="section-subtitle">系统化的知识体系构建</p>
        </div>
        <div className="paths-grid">
          {learningPaths.map((path, index) => (
            <div 
              className="path-card" 
              key={path.id}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                '--card-color': path.color 
              }}
            >
              <div className="path-header">
                <span className="path-icon">{path.icon}</span>
                <div className="path-title-group">
                  <h3 className="path-title">{path.title}</h3>
                  <p className="path-subtitle">{path.subtitle}</p>
                </div>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ 
                    width: `${path.progress}%`,
                    backgroundColor: path.color 
                  }}
                ></div>
                <span className="progress-text">{path.progress}%</span>
              </div>
              <div className="path-topics">
                {path.topics.map((topic, i) => (
                  <span className="topic-tag" key={i}>{topic}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 知识卡片 */}
      <section className="knowledge-section" id="notes">
        <div className="section-header">
          <h2 className="section-title">学习笔记</h2>
          <p className="section-subtitle">知识积累与总结</p>
        </div>
        <div className="knowledge-grid">
          {knowledgeCards.map((category, catIndex) => (
            <div className="knowledge-category" key={catIndex}>
              <h3 className="category-title">{category.category}</h3>
              <div className="cards-list">
                {category.items.map((item, itemIndex) => (
                  <div 
                    className="knowledge-card" 
                    key={itemIndex}
                    style={{ animationDelay: `${(catIndex * 3 + itemIndex) * 0.05}s` }}
                  >
                    <div className="card-main">
                      <h4 className="card-title">{item.title}</h4>
                      <p className="card-date">{item.date}</p>
                    </div>
                    <div className="card-tags">
                      {item.tags.map((tag, tagIndex) => (
                        <span className="mini-tag" key={tagIndex}>{tag}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 学习资源 */}
      <section className="resources-section" id="resources">
        <div className="section-header">
          <h2 className="section-title">学习资源</h2>
          <p className="section-subtitle">精选的开发者资源</p>
        </div>
        <div className="resources-grid">
          {resources.map((resource, index) => (
            <a 
              href={resource.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="resource-card"
              key={index}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="resource-icon">🔗</div>
              <div className="resource-content">
                <h4 className="resource-name">{resource.name}</h4>
                <p className="resource-desc">{resource.desc}</p>
              </div>
              <div className="resource-arrow">→</div>
            </a>
          ))}
        </div>
      </section>

      {/* 页脚 */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2024 Learning Hub. 持续学习，永不止步。</p>
          <div className="footer-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span>·</span>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <span>·</span>
            <a href="mailto:your@email.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
