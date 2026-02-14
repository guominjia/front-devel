# 📚 文档网站 - Vite + React

一个优雅、现代的文档网站模板，使用 Vite 和 React 构建，可轻松部署到 GitHub Pages。

## ✨ 特性

- ⚡️ **极速开发** - 基于 Vite 的闪电般快速开发体验
- 🎨 **精致设计** - 现代化的 UI 设计，优雅的排版和动画
- 📱 **响应式布局** - 完美适配桌面和移动设备
- 🚀 **一键部署** - 自动化部署到 GitHub Pages
- 🎯 **SEO 友好** - 优化的结构和语义化标签
- ♿️ **可访问性** - 遵循 WCAG 标准

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000 查看效果。

### 构建生产版本

```bash
npm run build
```

构建产物将生成在 `dist` 目录中。

## 📦 部署到 GitHub Pages

### 方法 1: 使用 gh-pages 包（手动部署）

1. 修改 `vite.config.js` 中的 `base` 配置：

```javascript
base: '/your-repo-name/', // 替换为你的仓库名
```

2. 运行部署命令：

```bash
npm run deploy
```

### 方法 2: 使用 GitHub Actions（自动部署）

1. 将 `.github-workflows-deploy.yml` 文件移动到 `.github/workflows/deploy.yml`

2. 修改 `vite.config.js` 中的 `base` 配置

3. 在 GitHub 仓库设置中：
   - 进入 `Settings` > `Pages`
   - 在 `Build and deployment` 部分
   - 将 `Source` 设置为 `GitHub Actions`

4. 推送代码到 `main` 分支：

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

GitHub Actions 将自动构建并部署你的网站。

## 📁 项目结构

```
docs-site/
├── public/              # 静态资源
├── src/                 # 源代码
│   ├── components/      # React 组件
│   ├── pages/          # 页面组件
│   ├── styles/         # 样式文件
│   ├── App.jsx         # 根组件
│   └── main.jsx        # 入口文件
├── .github/
│   └── workflows/      # GitHub Actions 工作流
├── index.html          # HTML 模板
├── package.json        # 项目配置
└── vite.config.js      # Vite 配置
```

## 🎨 自定义

### 修改主题颜色

在 CSS 中找到 `:root` 部分，修改 CSS 变量：

```css
:root {
  --color-bg: #fafaf9;
  --color-primary: #2c1810;
  --color-secondary: #8b6f47;
  --color-accent: #d4a574;
  /* ... 更多颜色变量 */
}
```

### 修改字体

在 HTML 的 `<head>` 中更改 Google Fonts 链接，然后更新 CSS 变量：

```css
:root {
  --font-display: 'Your Display Font', serif;
  --font-body: 'Your Body Font', sans-serif;
  --font-mono: 'Your Mono Font', monospace;
}
```

### 添加新页面

1. 在 `src/pages/` 创建新组件
2. 在侧边栏导航中添加链接
3. 使用 React Router 配置路由（可选）

## 🔧 配置说明

### vite.config.js

- `base`: GitHub Pages 的基础路径，格式为 `/仓库名/`
- `build.outDir`: 构建输出目录
- `server.port`: 开发服务器端口

### package.json

- `deploy`: 部署到 GitHub Pages 的脚本
- `build`: 构建生产版本

## 📝 内容编辑

文档内容可以直接在 HTML 或 React 组件中编辑。建议：

- 使用 Markdown 组件库（如 react-markdown）处理长文档
- 使用代码高亮库（如 Prism.js 或 highlight.js）
- 添加搜索功能（如 Algolia DocSearch）

## 🛠️ 技术栈

- **构建工具**: Vite 5.x
- **框架**: React 18.x
- **路由**: React Router 6.x（可选）
- **样式**: 纯 CSS + CSS 变量
- **字体**: Google Fonts (Crimson Pro, DM Sans, JetBrains Mono)
- **部署**: GitHub Pages + GitHub Actions

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 💡 提示

- 使用语义化的 HTML 标签提升 SEO
- 优化图片大小以提升加载速度
- 添加 sitemap.xml 和 robots.txt
- 考虑添加暗色模式支持
- 使用 Web Vitals 监控性能指标

## 📚 相关资源

- [Vite 官方文档](https://vitejs.dev/)
- [React 官方文档](https://react.dev/)
- [GitHub Pages 文档](https://docs.github.com/en/pages)
- [GitHub Actions 文档](https://docs.github.com/en/actions)

---

用 ❤️ 构建，使用 Vite + React
