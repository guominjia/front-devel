import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('intro')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section')
      let current = 'intro'

      sections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (window.scrollY >= (sectionTop - 200)) {
          current = section.getAttribute('id')
        }
      })

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="app">
      {/* Decorative Background */}
      <div className="decoration decoration-1"></div>
      <div className="decoration decoration-2"></div>

      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <a href="#" className="logo">Documentation</a>
          <nav className="nav">
            <a href="#" className="active">文档</a>
            <a href="#">指南</a>
            <a href="#">API</a>
            <a href="#">示例</a>
            <a href="#">GitHub</a>
          </nav>
        </div>
      </header>

      {/* Main Container */}
      <div className="container">
        {/* Sidebar */}
        <aside className="sidebar">
          <SidebarSection title="快速开始">
            <SidebarLink 
              href="#intro" 
              active={activeSection === 'intro'}
              onClick={(e) => scrollToSection(e, 'intro')}
            >
              简介
            </SidebarLink>
            <SidebarLink 
              href="#installation" 
              active={activeSection === 'installation'}
              onClick={(e) => scrollToSection(e, 'installation')}
            >
              安装
            </SidebarLink>
            <SidebarLink 
              href="#usage" 
              active={activeSection === 'usage'}
              onClick={(e) => scrollToSection(e, 'usage')}
            >
              使用方法
            </SidebarLink>
            <SidebarLink 
              href="#config" 
              active={activeSection === 'config'}
              onClick={(e) => scrollToSection(e, 'config')}
            >
              配置
            </SidebarLink>
          </SidebarSection>

          <SidebarSection title="核心概念">
            <SidebarLink href="#components">组件</SidebarLink>
            <SidebarLink href="#routing">路由</SidebarLink>
            <SidebarLink href="#state">状态管理</SidebarLink>
            <SidebarLink href="#hooks">Hooks</SidebarLink>
          </SidebarSection>

          <SidebarSection title="进阶指南">
            <SidebarLink href="#optimization">性能优化</SidebarLink>
            <SidebarLink 
              href="#deployment" 
              active={activeSection === 'deployment'}
              onClick={(e) => scrollToSection(e, 'deployment')}
            >
              部署
            </SidebarLink>
            <SidebarLink href="#best-practices">最佳实践</SidebarLink>
          </SidebarSection>
        </aside>

        {/* Main Content */}
        <main className="content">
          <div className="hero">
            <h1>构建现代化的 Web 应用</h1>
            <p>使用 Vite 和 React 快速构建高性能、可扩展的用户界面。体验极速的开发环境和优雅的开发体验。</p>
          </div>

          <section id="intro" className="section">
            <h2>简介</h2>
            <p>Vite 是新一代前端构建工具，它利用浏览器原生 ES 模块支持和编译到原生的语言开发的工具（如 esbuild）来提供快速且现代的开发体验。</p>
            
            <div className="cards">
              <FeatureCard 
                icon="⚡️" 
                title="极速启动"
                description="即时的服务器启动，无论项目大小如何都能保持快速。"
              />
              <FeatureCard 
                icon="🔥" 
                title="热更新"
                description="闪电般的 HMR，始终保持应用状态。"
              />
              <FeatureCard 
                icon="🛠️" 
                title="丰富功能"
                description="开箱即用支持 TypeScript、JSX、CSS 等。"
              />
            </div>
          </section>

          <section id="installation" className="section">
            <h2>安装</h2>
            <p>使用你喜欢的包管理器快速创建一个新的 Vite 项目：</p>

            <CodeBlock language="bash">
{`# npm
npm create vite@latest my-react-app -- --template react

# yarn
yarn create vite my-react-app --template react

# pnpm
pnpm create vite my-react-app --template react`}
            </CodeBlock>

            <p>然后进入项目目录并安装依赖：</p>

            <CodeBlock language="bash">
{`cd my-react-app
npm install
npm run dev`}
            </CodeBlock>

            <Callout title="提示">
              你也可以使用 <code>--template react-ts</code> 来创建一个 TypeScript 项目。
            </Callout>
          </section>

          <section id="usage" className="section">
            <h2>基本使用</h2>
            
            <h3>创建组件</h3>
            <p>在 React 中创建组件非常简单。以下是一个函数式组件的示例：</p>

            <CodeBlock language="jsx">
{`import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>计数器: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        增加
      </button>
    </div>
  )
}

export default Counter`}
            </CodeBlock>

            <h3>样式处理</h3>
            <p>Vite 支持多种样式解决方案，包括 CSS、CSS Modules、Sass、Less 等：</p>

            <CodeBlock language="javascript">
{`// 引入 CSS 文件
import './App.css'

// 使用 CSS Modules
import styles from './App.module.css'

// 使用 Sass
import './styles.scss'`}
            </CodeBlock>
          </section>

          <section id="config" className="section">
            <h2>配置</h2>
            <p>Vite 的配置文件 <code>vite.config.js</code> 非常简洁且强大：</p>

            <CodeBlock language="javascript">
{`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // GitHub Pages 路径
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  server: {
    port: 3000,
    open: true
  }
})`}
            </CodeBlock>
          </section>

          <section id="deployment" className="section">
            <h2>部署到 GitHub Pages</h2>
            <p>将你的 Vite 应用部署到 GitHub Pages 非常简单。首先，确保在 <code>vite.config.js</code> 中设置了正确的 <code>base</code> 路径。</p>

            <h3>步骤 1: 构建项目</h3>
            <CodeBlock language="bash">
{`npm run build`}
            </CodeBlock>

            <h3>步骤 2: 部署</h3>
            <p>你可以使用 <code>gh-pages</code> 包来简化部署流程：</p>

            <CodeBlock language="bash">
{`# 安装 gh-pages
npm install -D gh-pages

# 在 package.json 中添加部署脚本
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}

# 执行部署
npm run deploy`}
            </CodeBlock>

            <Callout title="重要提示">
              确保在仓库设置中启用 GitHub Pages，并将源设置为 <code>gh-pages</code> 分支。
            </Callout>

            <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem' }}>
              <button className="btn">开始使用</button>
              <button className="btn btn-secondary">查看示例</button>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Documentation. 使用 Vite + React 构建，托管于 GitHub Pages.</p>
      </footer>
    </div>
  )
}

// Sidebar Components
function SidebarSection({ title, children }) {
  return (
    <div className="sidebar-section">
      <h3 className="sidebar-title">{title}</h3>
      <ul className="sidebar-links">
        {children}
      </ul>
    </div>
  )
}

function SidebarLink({ href, active, onClick, children }) {
  return (
    <li>
      <a 
        href={href} 
        className={active ? 'active' : ''} 
        onClick={onClick}
      >
        {children}
      </a>
    </li>
  )
}

// Feature Card Component
function FeatureCard({ icon, title, description }) {
  return (
    <div className="card">
      <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

// Code Block Component
function CodeBlock({ language, children }) {
  return (
    <div className="code-block">
      <pre>
        <code>{children}</code>
      </pre>
    </div>
  )
}

// Callout Component
function Callout({ title, children }) {
  return (
    <div className="callout">
      <div className="callout-title">{title}</div>
      <p>{children}</p>
    </div>
  )
}

export default App
