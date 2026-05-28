import { render } from 'preact'
import './style.css'

type IconName =
  | 'menu'
  | 'mic'
  | 'music'
  | 'layers'
  | 'doc'
  | 'globe'
  | 'book'
  | 'star'
  | 'volume'
  | 'bulb'
  | 'map'
  | 'chevron'
  | 'chat'
  | 'words'
  | 'course'

function Icon({ name }: { name: IconName }) {
  const props = {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2.2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const
  }

  if (name === 'menu') return <svg {...props}><path d="M4 6h16M4 12h16M4 18h16" /></svg>
  if (name === 'mic') return <svg {...props}><path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><path d="M12 19v3"/></svg>
  if (name === 'music') return <svg {...props}><path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/></svg>
  if (name === 'layers') return <svg {...props}><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 16 9 5 9-5"/></svg>
  if (name === 'doc') return <svg {...props}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h6"/></svg>
  if (name === 'globe') return <svg {...props}><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 0 20"/><path d="M12 2a15.3 15.3 0 0 0 0 20"/></svg>
  if (name === 'book') return <svg {...props}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5Z"/></svg>
  if (name === 'star') return <svg {...props}><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3L5.8 21 7 14.2 2 9.3l6.9-1L12 2Z"/></svg>
  if (name === 'volume') return <svg {...props}><path d="M11 5 6 9H2v6h4l5 4V5Z"/><path d="M16 9a5 5 0 0 1 0 6"/><path d="M19 6a9 9 0 0 1 0 12"/></svg>
  if (name === 'bulb') return <svg {...props}><path d="M9 18h6"/><path d="M10 22h4"/><path d="M8.2 15.2A6 6 0 1 1 15.8 15c-.7.5-.8 1.2-.8 2H9c0-.8-.1-1.4-.8-1.8Z"/></svg>
  if (name === 'map') return <svg {...props}><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z"/><path d="M9 3v15"/><path d="M15 6v15"/></svg>
  if (name === 'chevron') return <svg {...props}><path d="m9 18 6-6-6-6"/></svg>
  if (name === 'chat') return <svg {...props}><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/></svg>
  if (name === 'words') return <svg {...props}><path d="M5 4h14M5 8h14M5 12h9M5 16h12M5 20h7"/></svg>
  return <svg {...props}><path d="M4 19.5V5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 1-2-1.5Z"/></svg>
}

function SmallTile({ icon, title, sub, tone }: { icon: IconName; title: string; sub: string; tone: string }) {
  return (
    <button className="small-tile tap">
      <span className={`icon-pill ${tone}`}>
        <Icon name={icon} />
      </span>
      <strong>{title}</strong>
      <em>{sub}</em>
    </button>
  )
}

function WideTile({ icon, title, sub, tone }: { icon: IconName; title: string; sub: string; tone: string }) {
  return (
    <button className="wide-tile tap">
      <span className={`icon-pill ${tone}`}>
        <Icon name={icon} />
      </span>
      <span>
        <strong>{title}</strong>
        <em>{sub}</em>
      </span>
    </button>
  )
}

function App() {
  return (
    <main className="phone-page">
      <header className="topbar">
        <button className="menu-button tap" aria-label="菜单">
          <Icon name="menu" />
        </button>

        <div className="brand">
          <h1>中缅文学习中心</h1>
          <p>🧬 PREMIUM HUB</p>
        </div>

        <button className="login-button tap">登录</button>
      </header>

      <section className="quick-grid" aria-label="拼音入口">
        <SmallTile icon="mic" title="声母" sub="ဗျည်း" tone="blue" />
        <SmallTile icon="music" title="韵母" sub="သရ" tone="green" />
        <SmallTile icon="layers" title="整体" sub="အသံတွဲ" tone="purple" />
        <SmallTile icon="doc" title="声调" sub="အသံ" tone="orange" />
      </section>

      <section className="tool-grid" aria-label="工具入口">
        <WideTile icon="globe" title="AI 翻译" sub="AI ဘာသာပြန်" tone="indigo" />
        <WideTile icon="book" title="免费书籍" sub="စာကြည့်တိုက်" tone="cyan" />
        <WideTile icon="star" title="单词收藏" sub="မှတ်ထားသော စကားလုံး" tone="slate" />
        <WideTile icon="volume" title="口语收藏" sub="မှတ်ထားသော စကားပြော" tone="slate" />
      </section>

      <button className="tip-card tap">
        <span className="icon-pill orange">
          <Icon name="bulb" />
        </span>
        <span className="tip-text">
          <strong>发音技巧 (Tips)</strong>
          <em>အသံထွက်နည်းလမ်းများ</em>
        </span>
        <span className="arrow">
          <Icon name="chevron" />
        </span>
      </button>

      <section className="ai-card tap">
        <div className="ai-bg" />
        <div className="ai-content">
          <span>AI TUTOR ✨</span>
          <h2>AI 真人私教对练</h2>
          <p>沉浸式真实口语对话</p>
        </div>
      </section>

      <section className="map-card tap">
        <div className="map-line" />
        <span className="map-icon">
          <Icon name="map" />
        </span>

        <div className="map-body">
          <div className="map-title">
            <h2>主线闯关地图</h2>
            <b>NEW</b>
          </div>
          <p>စနစ်တကျ လေ့လာရန် လမ်းပြမြေပုံ</p>
          <div className="progress-row">
            <span className="progress-track">
              <i />
            </span>
            <strong>CONTINUE</strong>
          </div>
        </div>

        <span className="arrow">
          <Icon name="chevron" />
        </span>
      </section>

      <section className="courses">
        <div className="section-title">
          <Icon name="course" />
          <span>SYSTEM COURSES</span>
        </div>

        <button className="course-card words-course tap">
          <div className="course-overlay" />
          <div className="course-content">
            <span>WORDS</span>
            <h2>日常高频词汇</h2>
            <p>အခြေခံ စကားလုံးများကို လေ့လာပါ။</p>
          </div>
        </button>

        <div className="mini-course-grid">
          <button className="mini-course tap">
            <Icon name="chat" />
            <strong>口语练习</strong>
            <em>场景对话</em>
          </button>
          <button className="mini-course tap">
            <Icon name="words" />
            <strong>HSK 1</strong>
            <em>基础入门</em>
          </button>
        </div>
      </section>
    </main>
  )
}

render(<App />, document.getElementById('app')!)
