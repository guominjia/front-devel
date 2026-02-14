function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-badges">
            <span className="badge">⚛️ React</span>
            <span className="badge">⚡ Vite</span>
          </div>
          
          <h1 className="hero-title">
            分享技术，探索未知
          </h1>
          
          <p className="hero-subtitle">
            记录学习旅程，传播开发经验
          </p>
          
          <div className="hero-actions">
            <a href="#articles" className="btn btn-primary">
              开始阅读
            </a>
            <a href="#projects" className="btn btn-secondary">
              查看项目
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
