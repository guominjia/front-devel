# 🚀 快速开始

## 第一步：安装依赖

```bash
npm install
```

## 第二步：启动开发服务器

```bash
npm run dev
```

然后在浏览器中打开 `http://localhost:5173`

## 第三步：自定义内容

### 修改学习路径

打开 `src/App.jsx`，找到 `learningPaths` 数组，修改为你自己的学习路径：

```javascript
const learningPaths = [
  {
    id: 1,
    title: '前端开发',      // 改成你的主题
    subtitle: 'Frontend',
    progress: 65,           // 你的进度
    topics: ['HTML', 'CSS', 'JS'],  // 你的学习主题
    color: '#FF6B6B',       // 主题颜色
    icon: '🎨'              // 图标 emoji
  },
  // 添加更多...
]
```

### 修改个人信息

在 `src/App.jsx` 中的 Hero 区域修改：

```javascript
.hero-stats {
  // 修改统计数字
  <div className="stat-number">128</div>  // 改成你的学习天数
  <div className="stat-number">42</div>   // 改成你的项目数量
  <div className="stat-number">256</div>  // 改成你的笔记数量
}
```

### 修改配色方案

打开 `src/App.css`，找到 `:root` 部分：

```css
:root {
  --color-bg: #0a0e27;           /* 背景色 */
  --color-accent: #ff6b9d;       /* 主题色 */
  --color-accent-secondary: #4a9fff;  /* 次要主题色 */
  /* 修改为你喜欢的颜色 */
}
```

## 第四步：部署到 GitHub Pages

### 方法 1：一键部署（推荐）

```bash
npm run deploy
```

然后在 GitHub 仓库设置中：
1. 进入 Settings > Pages
2. Source 选择 `gh-pages` 分支
3. 点击 Save

### 方法 2：使用 GitHub Actions

详见 `DEPLOY.md` 文件

## 🎨 设计特点

- **独特的视觉风格**：深色主题 + 渐变色彩
- **流畅的动画**：页面加载、hover 效果、进度条动画
- **响应式设计**：完美适配手机、平板、电脑
- **无需额外依赖**：纯 CSS 实现所有效果

## 📁 项目结构

```
learning-hub/
├── src/
│   ├── App.jsx       # 主组件（修改内容在这里）
│   ├── App.css       # 全局样式（修改颜色在这里）
│   └── main.jsx      # 入口文件
├── index.html        # HTML 模板
├── package.json      # 依赖配置
├── vite.config.js    # Vite 配置
├── README.md         # 项目说明
└── DEPLOY.md         # 详细部署指南
```

## 💡 提示

1. **修改 base 路径**：如果部署到项目站点（如 `username.github.io/repo-name`），需要在 `vite.config.js` 中修改 `base: '/repo-name/'`

2. **字体加载**：项目使用 Google Fonts，需要网络连接

3. **浏览器兼容性**：支持现代浏览器（Chrome, Firefox, Safari, Edge）

4. **性能优化**：Vite 会自动进行代码分割和优化

## 🐛 遇到问题？

- 检查 Node.js 版本（需要 16+）
- 清除缓存：`npm cache clean --force`
- 删除 `node_modules` 重新安装：`rm -rf node_modules && npm install`

## 📚 更多资源

- [完整部署指南](./DEPLOY.md)
- [Vite 文档](https://vitejs.dev/)
- [React 文档](https://react.dev/)

开始你的学习之旅吧！✨
