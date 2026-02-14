const articles = [
  {
    id: 1,
    title: '从零搭建 Vite + React 项目最佳实践',
    excerpt: '详细介绍如何使用 Vite 快速搭建现代化的 React 项目，包括路由配置、状态管理、样式方案等核心内容。',
    tags: ['React', 'Vite', '工程化'],
    date: '2026-02-10',
    readTime: '8 分钟',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    id: 2,
    title: 'React Hooks 深度解析：useEffect 的正确使用',
    excerpt: '深入理解 useEffect 的执行时机、依赖项管理和清理机制，避免常见的性能陷阱和内存泄漏问题。',
    tags: ['React', 'Hooks', '性能优化'],
    date: '2026-02-08',
    readTime: '12 分钟',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    id: 3,
    title: '前端性能优化：Vite 构建速度提升 10 倍的秘密',
    excerpt: '探索 Vite 的核心原理，了解 ESBuild、预构建、HMR 等技术如何实现极速的开发体验。',
    tags: ['Vite', '性能优化', '构建工具'],
    date: '2026-02-05',
    readTime: '10 分钟',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  {
    id: 4,
    title: 'TypeScript 类型体操：高级类型技巧',
    excerpt: '掌握 TypeScript 的高级类型系统，包括泛型约束、条件类型、映射类型等实用技巧。',
    tags: ['TypeScript', '类型系统', '进阶'],
    date: '2026-02-01',
    readTime: '15 分钟',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  }
]

function FeaturedArticles() {
  return (
    <section className="featured-articles" id="articles">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">精选文章</h2>
          <p className="section-subtitle">最新的技术分享和开发经验</p>
        </div>
        
        <div className="articles-grid">
          {articles.map((article) => (
            <article key={article.id} className="article-card">
              <div className="article-cover" style={{ background: article.gradient }}>
                <div className="article-overlay"></div>
              </div>
              
              <div className="article-content">
                <div className="article-meta">
                  <span className="article-date">{article.date}</span>
                  <span className="article-divider">•</span>
                  <span className="article-read-time">{article.readTime}</span>
                </div>
                
                <h3 className="article-title">{article.title}</h3>
                <p className="article-excerpt">{article.excerpt}</p>
                
                <div className="article-tags">
                  {article.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                
                <a href="#" className="article-link">
                  阅读全文 →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedArticles
