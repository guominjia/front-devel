# GitHub Pages 部署指南

## 准备工作

1. 确保你有一个 GitHub 账号
2. 在 GitHub 上创建一个新仓库

### 仓库命名选项：

**选项 A：用户/组织站点（推荐）**
- 仓库名：`username.github.io`（将 username 替换为你的 GitHub 用户名）
- 访问地址：`https://username.github.io`
- 配置：`vite.config.js` 中 `base: '/'`

**选项 B：项目站点**
- 仓库名：任意名称（例如：`my-learning-hub`）
- 访问地址：`https://username.github.io/my-learning-hub`
- 配置：`vite.config.js` 中 `base: '/my-learning-hub/'`

## 部署步骤

### 方法 1：使用 gh-pages（推荐）

1. **安装依赖**
```bash
npm install
```

2. **修改 vite.config.js**
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // 如果是项目站点，改为 '/仓库名/'
})
```

3. **构建并部署**
```bash
npm run deploy
```

这个命令会自动：
- 构建项目
- 创建 gh-pages 分支
- 将 dist 文件夹推送到 gh-pages 分支

4. **在 GitHub 仓库设置中启用 GitHub Pages**
- 进入仓库的 Settings > Pages
- Source 选择 `gh-pages` 分支
- 点击 Save

### 方法 2：GitHub Actions 自动部署

1. **创建 `.github/workflows/deploy.yml`**
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

2. **推送代码**
```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/repo-name.git
git push -u origin main
```

3. **在 GitHub 仓库设置中**
- Settings > Pages
- Source 选择 `GitHub Actions`

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 在浏览器中打开 http://localhost:5173
```

## 自定义内容

### 修改学习路径

编辑 `src/App.jsx` 中的 `learningPaths` 数组：

```javascript
const learningPaths = [
  {
    id: 1,
    title: '你的学习主题',
    subtitle: 'Your Topic',
    progress: 50,
    topics: ['主题1', '主题2', '主题3'],
    color: '#FF6B6B',
    icon: '🎯'
  },
  // 添加更多路径...
]
```

### 修改知识卡片

编辑 `src/App.jsx` 中的 `knowledgeCards` 数组。

### 修改学习资源

编辑 `src/App.jsx` 中的 `resources` 数组。

### 更改颜色主题

编辑 `src/App.css` 中的 CSS 变量：

```css
:root {
  --color-bg: #0a0e27;
  --color-accent: #ff6b9d;
  /* 修改其他颜色... */
}
```

## 常见问题

### 1. 页面显示空白
- 检查 `vite.config.js` 中的 `base` 配置是否正确
- 确保 GitHub Pages 设置中选择了正确的分支

### 2. 样式没有加载
- 清除浏览器缓存
- 检查控制台是否有错误信息

### 3. 部署后更新没有生效
```bash
# 清除缓存并重新部署
npm run build
npm run deploy
```

### 4. 使用自定义域名
- 在 `public` 文件夹中创建 `CNAME` 文件
- 内容为你的域名，例如：`www.yourdomain.com`
- 在域名 DNS 设置中添加 CNAME 记录指向 `username.github.io`

## 优化建议

1. **性能优化**
   - 压缩图片
   - 使用 webp 格式
   - 启用代码分割

2. **SEO 优化**
   - 添加 meta 标签
   - 创建 sitemap.xml
   - 添加 robots.txt

3. **访问统计**
   - 添加 Google Analytics
   - 使用 GitHub 自带的 Insights

## 更多资源

- [Vite 官方文档](https://vitejs.dev/)
- [React 官方文档](https://react.dev/)
- [GitHub Pages 文档](https://docs.github.com/en/pages)

祝你部署顺利！🚀
