import Image from 'next/image';
import SpeedComparison from './speed-comparison';
import MomentsScroll from './moments-scroll';
import PolishSelector from './polish-selector';
import PricingSelector from './pricing-selector';
import HeroSpotlight from './hero-spotlight';

const faqs = [
  ['MosSec 是什么？', 'MosSec 是一款桌面端语音工作记录工具。它把自然说话整理成清楚的文字，并进一步生成会议纪要、决策、待办和工作记录。'],
  ['它和普通录音或语音转文字有什么不同？', '普通工具停在“转写”，MosSec 更关注“可直接使用”。它会清理口语、补全结构，并根据邮件、任务、会议或 CRM 等场景整理表达。'],
  ['可以在哪些应用里使用？', '你可以在飞书、邮件、文档、CRM、ChatGPT 等当前页面中使用快捷键语音输入，不必切换工作环境。'],
  ['会议结束后会生成什么？', 'MosSec 可输出多说话人转录、会议摘要、关键决策、待办事项、风险提示和重点原话，方便会后直接推进。'],
  ['我的记录存在哪里？', 'MosSec 提供本地 History，并明确展示录音状态。你可以取消误触记录，也可以通过热词词表和业务模板控制整理方式。'],
  ['现在支持哪些平台？', '桌面版目前支持 macOS。Windows 与更多端侧版本正在规划中，留下联系方式可优先获得更新。'],
];

export default function Home() {
  return (
    <main>
      <nav className="nav-shell" aria-label="主导航">
        <a className="brand" href="#top" aria-label="MosSec 首页">
          <Image src="/assets/mossec-icon.png" alt="" width={40} height={40} priority />
          <span>MosSec</span>
        </a>
        <div className="nav-links">
          <a href="#workflow">开口记录</a>
          <a href="#features">功能</a>
          <a href="#pricing">定价</a>
          <a href="#faq">常见问题</a>
        </div>
        <a className="nav-cta" href="#download">下载 Mac 版 <span>↗</span></a>
      </nav>

      <section className="hero" id="top">
        <HeroSpotlight />
        <div className="hero-glow hero-glow-left" />
        <div className="hero-glow hero-glow-right" />
        <div className="eyebrow"><span className="live-dot" /> 你的第二个海马体</div>
        <h1>听到的话，<br /><span>变成好用的文字</span></h1>
        <p className="hero-copy">
          开口记录，秒转文字，纪要待办自动结构化。<br className="desktop-only" />
          从一闪而过的灵感，到马上能执行的工作记录。
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#download">免费开始</a>
          <a className="button button-secondary" href="#polish">试试润色效果</a>
        </div>
        <p className="hero-note"><span className="apple">●</span> macOS 版持续完善中</p>

        <div className="product-stage product-canvas" aria-label="MosSec 将语音拆解为转写、纪要和待办的产品能力示意">
          <div className="canvas-orb orb-one" /><div className="canvas-orb orb-two" />

          <article className="meeting-widget">
            <div className="widget-top"><span className="widget-mark">◎</span><span><b>客户方案沟通会</b><small>2 位发言人 · 正在记录</small></span><i>00:18:42</i></div>
            <div className="speaker-row"><span>S01</span><p>下周先确认项目排期，再把正式报价同步给客户。</p></div>
            <div className="speaker-row speaker-two"><span>S02</span><p>好的，我来整理需求和预算，周四前发出。</p></div>
            <div className="meeting-wave" aria-hidden="true">▂▆▃▇▄▅▂▇▃▆▄▇▂▅▃▇▅▂▆▃</div>
          </article>

          <article className="summary-widget">
            <span className="widget-kicker">✦ 自动总结</span>
            <h3>这次会议，下一步很清楚</h3>
            <div><span>决策</span><p>下周进入第一版方案确认</p></div>
            <div><span>风险</span><p>报价范围仍需客户确认</p></div>
          </article>

          <div className="todo-stack" aria-label="自动提取的待办">
            <div><span className="task-check checked">✓</span><p>整理客户需求和预算</p><i>今天</i></div>
            <div><span className="task-check" /><p>周四发送正式报价</p><i>待办</i></div>
            <div><span className="task-check" /><p>确认项目负责人</p><i>周五</i></div>
          </div>

          <div className="voice-dock" aria-label="语音输入控制条"><button aria-label="取消">×</button><span>▂▅▃▇▄▆▂▅▇▃▆▄▂</span><button className="dock-done" aria-label="完成">✓</button></div>
          <div className="floating-note"><span>Fn</span><p><b>随时开口</b><small>文字已进入当前页面</small></p><i>完成</i></div>
        </div>
      </section>

      <section className="compatibility" aria-label="适配工作场景">
        <span>在哪写，就在哪说</span>
        <div className="app-chips">
          {['飞书', '邮件', '文档', 'CRM', 'ChatGPT', '任务管理'].map((app, index) => (
            <span className="app-chip" key={app}><i>{['飞', '@', '文', 'C', 'AI', '✓'][index]}</i>{app}</span>
          ))}
        </div>
      </section>

      <section className="section speed-section" aria-labelledby="speed-title">
        <div className="section-heading centered speed-heading">
          <span className="kicker">说出来，比打出来更快</span>
          <h2 id="speed-title">让输入速度<br />跟上思考速度</h2>
          <p>同一段工作内容，键盘还在逐字输入，MosSec 已经完成转写、标点和结构整理。</p>
        </div>
        <SpeedComparison />
        <div className="speed-footnotes"><span><b>4.9×</b> 更快完成输入</span><span><b>自动</b> 清理口语与重复</span><span><b>即刻</b> 进入当前应用</span></div>
      </section>

      <section className="section workflow" id="workflow">
        <div className="section-heading centered">
          <span className="kicker">轻点即用</span>
          <h2>从开口，到可执行<br />只差一个快捷键</h2>
          <p>不用学习复杂流程。随时随地，不同场景自动识别。</p>
        </div>
        <div className="steps">
          <article className="step-card">
            <span className="step-num">01</span><span className="step-symbol fn-key">Fn</span>
            <h3>按下快捷键，开口说</h3><p>在任何桌面 App 中按 Fn，像平时说话一样自然表达。</p>
          </article>
          <article className="step-card featured-step">
            <span className="step-num">02</span><span className="step-symbol">✦</span>
            <h3>自动听懂与整理</h3><p>清理口语、补全标点，并按当前工作场景润色表达。</p>
          </article>
          <article className="step-card">
            <span className="step-num">03</span><span className="step-symbol">↗</span>
            <h3>文字直接拿去用</h3><p>进入当前输入框，或生成纪要、总结、邮件与待办。</p>
          </article>
        </div>
      </section>

      <section className="section feature-stack" id="features">
        <article className="feature-row">
          <div className="feature-copy">
            <span className="feature-index">01 · SPEAK ANYWHERE</span>
            <h2>在任何 Mac 应用里<br />直接开口输入</h2>
            <p>不必切换窗口，也不必先打开 MosSec。在飞书、邮件、文档、CRM、ChatGPT 或任务工具里按下 Fn，说完的文字直接进入当前输入框。</p>
            <ul className="check-list">
              <li><span>✓</span> 全局 Fn 快捷键，一按即说</li>
              <li><span>✓</span> 不打断正在进行的工作</li>
              <li><span>✓</span> 结束后自动粘贴到光标位置</li>
            </ul>
          </div>
          <div className="feature-visual anywhere-visual" aria-label="在任意 Mac 应用中按 Fn 直接语音输入的示意">
            <div className="visual-swash swash-blue" /><div className="visual-swash swash-warm" />
            <div className="anywhere-window">
              <div className="anywhere-window-top"><span /><span /><span /><b>飞书文档</b></div>
              <small>客户方案 · 下一步</small>
              <p>下周与客户确认项目时间，并在确认后发送正式报价。<i /></p>
            </div>
            <div className="anywhere-trigger"><kbd>Fn</kbd><div><b>正在听</b><span>▂▆▃▇▄▅▂▇▃▆</span></div><i>完成</i></div>
            <div className="anywhere-apps"><span>飞书</span><span>邮件</span><span>CRM</span><span>ChatGPT</span></div>
          </div>
        </article>

        <article className="feature-row reverse">
          <div className="feature-copy">
            <span className="feature-index">02 · KNOWS WHERE YOU’RE TYPING</span>
            <h2>知道你正在哪里输入<br />自动换成合适的表达</h2>
            <p>MosSec 会识别当前应用和输入场景。同一句自然表达，进入邮件时更完整，进入聊天时更轻松，进入任务工具时直接变成清楚的行动项。</p>
            <ul className="check-list">
              <li><span>✓</span> 自动识别当前桌面 App</li>
              <li><span>✓</span> 7 种内置风格随场景切换</li>
              <li><span>✓</span> 保留原意，减少重复整理</li>
            </ul>
          </div>
          <div className="feature-visual tone-visual attune-visual" aria-label="同一句语音进入不同应用后自动调整表达方式的示意">
            <div className="visual-swash swash-blue" /><div className="visual-swash swash-warm" />
            <div className="attune-input"><span>▂▆▃▇▄▅▂</span><b>下周把方案发给客户</b><i>正在识别当前应用</i></div>
            <div className="attune-network" aria-hidden="true"><span /><span /><span /></div>
            <div className="attune-outputs">
              <article className="attune-output attune-chat">
                <div><i>飞</i><b>飞书</b></div>
                <p>方案整理好了，下周发给客户，记得跟进反馈。</p>
                <small>自然简洁</small>
              </article>
              <article className="attune-output attune-mail">
                <div><i>＠</i><b>邮件</b></div>
                <span>主题：方案确认</span>
                <p>您好，我们计划于下周发送正式方案，届时请您查收。</p>
                <small>完整正式</small>
              </article>
              <article className="attune-output attune-task">
                <div><i>✓</i><b>任务</b></div>
                <p>下周发送客户方案<br />并跟进反馈</p>
                <small>行动清楚</small>
              </article>
            </div>
          </div>
        </article>

        <article className="feature-row">
          <div className="feature-copy">
            <span className="feature-index">03 · GETS YOUR WORDS RIGHT</span>
            <h2>你的专有词汇<br />也能一次听对</h2>
            <p>把人名、产品名、项目代号和行业缩写加入个人词库。MosSec 会结合热词上下文辅助判断，让高频专有词不再反复修改。</p>
            <ul className="check-list">
              <li><span>✓</span> 个人词库持续积累</li>
              <li><span>✓</span> 热词结合上下文辅助识别</li>
              <li><span>✓</span> 产品名与行业词保持一致</li>
            </ul>
          </div>
          <div className="feature-visual words-visual" aria-label="个人词库和热词修正专有词汇的示意">
            <div className="visual-swash swash-violet" /><div className="visual-swash swash-sky" />
            <div className="words-panel">
              <div className="words-panel-head"><span>个人词库</span><i>已启用</i></div>
              <div className="word-row"><b>MosSec</b><span>产品名</span><i>✓</i></div>
              <div className="word-row"><b>MosSec Card</b><span>硬件</span><i>✓</i></div>
              <div className="word-row"><b>API Gateway</b><span>技术词</span><i>✓</i></div>
              <div className="word-row"><b>星云计划</b><span>项目名</span><i>✓</i></div>
            </div>
            <div className="word-correction">
              <span>热词辅助</span><small>摩赛克卡的客户记录</small><i>→</i><b>MosSec Card 的客户记录</b>
            </div>
          </div>
        </article>

        <article className="feature-row reverse">
          <div className="feature-copy">
            <span className="feature-index">04 · TURNS MEETINGS INTO ACTION</span>
            <h2>会议结束<br />行动已经排好</h2>
            <p>自动区分发言人，并生成多人逐字稿、总结、关键决策和待办事项。散落在对话里的重点自动归位，会后可以马上进入执行。</p>
            <div className="mini-metrics">
              <span><b>多人</b><small>发言人识别</small></span>
              <span><b>7 种</b><small>内置风格</small></span>
              <span><b>即刻</b><small>会后可用</small></span>
            </div>
          </div>
          <div className="feature-visual meeting-visual" aria-label="MosSec 将会议拆分为多说话人转写、总结和待办的示意">
            <div className="visual-swash swash-violet" /><div className="visual-swash swash-sky" />
            <div className="paper-layer paper-back" /><div className="paper-layer paper-mid" />
            <article className="transcript-card">
              <div className="transcript-head"><span>◎</span><b>项目启动会</b><i>18:42</i></div>
              <p><span>S01</span>下周完成第一版方案，先确认需求优先级。</p>
              <p><span>S02</span>我来同步预算范围和项目负责人。</p>
            </article>
            <article className="decision-card"><span>✦ 会议总结</span><h3>信息已经自动归位</h3><div><b>决定</b><p>下周启动第一版方案</p></div><div><b>重点</b><p>优先确认需求与预算</p></div></article>
            <div className="action-pills"><div><i>✓</i><p>同步预算范围</p><span>今天</span></div><div><i /><p>确认项目负责人</p><span>周五</span></div></div>
          </div>
        </article>

      </section>

      <section className="polish-section" id="polish">
        <div className="section polish-inner">
          <div className="section-heading centered polish-heading">
            <span className="kicker">表达，按你的需要</span>
            <h2>选择合适的润色程度</h2>
            <p>MosSec 可以从保留原意，到高度优化表达。信息没变，文字能直接用。</p>
          </div>
          <PolishSelector />
        </div>
      </section>

      <MomentsScroll />

      <section className="trust-section">
        <div className="section trust-grid">
          <div className="trust-copy"><span className="kicker">信任与控制</span><h2>记录重要内容，<br />控制权也应该在你手里</h2><p>明确录音状态、本地 History、误触取消、热词词表与业务模板，让 AI 更贴近你的语境，也让每次记录更安心。</p></div>
          <div className="trust-cards">
            <article><span>◉</span><div><h3>录音状态清晰可见</h3><p>开始、进行和结束都有明确反馈。</p></div></article>
            <article><span>⌂</span><div><h3>本地历史记录</h3><p>重要内容留在你的个人工作区。</p></div></article>
            <article><span>↶</span><div><h3>误触随时取消</h3><p>不想记录的内容，不进入整理流程。</p></div></article>
            <article><span>⌘</span><div><h3>业务语境可定制</h3><p>热词与模板让输出贴近团队规范。</p></div></article>
          </div>
        </div>
      </section>

      <section className="section pricing" id="pricing">
        <div className="section-heading centered"><span className="kicker">简单定价</span><h2>先把时间还给自己</h2><p>基础能力免费使用。进阶版首月免费，之后每月 35 元；团队可按协作需求定制。</p></div>
        <PricingSelector />
      </section>

      <section className="section faq" id="faq">
        <div className="faq-title"><span className="kicker">FAQ</span><h2>常见问题</h2><p>还有想了解的？写信给 <a href="mailto:hello@mossec.cn">hello@mossec.cn</a></p></div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}><summary>{question}<span>＋</span></summary><p>{answer}</p></details>
          ))}
        </div>
      </section>

      <section className="section download" id="download">
        <div className="download-glow" />
        <Image src="/assets/mossec-icon.png" alt="MosSec 图标" width={84} height={84} />
        <span className="kicker">MOSSEC FOR MAC</span>
        <h2>解放脑力，<br />释放记忆空间</h2>
        <p>随时随地，一键即用。重要内容，不再靠记忆。</p>
        <div className="download-actions"><a className="button button-white" href="mailto:hello@mossec.cn">联系团队 <span>→</span></a></div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><Image src="/assets/mossec-icon.png" alt="" width={38} height={38} /><span>MosSec</span></a>
        <p>把声音，变成能直接用的工作记录。</p>
        <div className="footer-links"><a href="#features">产品功能</a><a href="#pricing">定价</a><a href="#faq">常见问题</a><a href="mailto:hello@mossec.cn">联系我们</a></div>
        <small>© 2026 MosSec · mossec.cn</small>
      </footer>
    </main>
  );
}
