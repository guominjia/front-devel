# 学习网站 - Learning Hub

一个现代、美观的个人学习网站，使用 Vite + React 构建，部署在 GitHub Pages。

## 特性

- 🎨 独特的视觉设计风格
- 📱 完全响应式布局
- ⚡ 快速的页面加载（Vite）
- 🎯 清晰的学习路径展示
- 📚 知识卡片系统
- 🌓 深色主题
- ✨ 流畅的动画效果

## 技术栈

- Vite
- React 18
- CSS3 (无需额外UI库)
- GitHub Pages

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 部署到 GitHub Pages

1. 在 GitHub 创建仓库（例如：`username.github.io`）
2. 修改 `vite.config.js` 中的 `base` 为你的仓库名
3. 运行部署命令：

```bash
npm run deploy
```

## 项目结构

```
learning-hub/
├── public/              # 静态资源
├── src/
│   ├── components/      # React 组件
│   ├── App.jsx          # 主应用组件
│   ├── App.css          # 全局样式
│   └── main.jsx         # 入口文件
├── index.html
├── package.json
└── vite.config.js
```

## 自定义内容

编辑 `src/App.jsx` 中的以下部分来自定义你的学习内容：

- `learningPaths` - 学习路径
- `knowledgeCards` - 知识卡片
- `resources` - 学习资源

## License

MIT
