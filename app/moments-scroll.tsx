'use client';

import { useEffect, useRef } from 'react';

const scenes = [
  { number: '01', title: '客户电话后', copy: '需求、预算、异议和下一步，一次说清', label: '客户需求', items: ['预算范围需要再次确认', '周四前发送正式报价'], status: '已整理', symbol: '☎', tone: 'coral' },
  { number: '02', title: '会议结束后', copy: '不再多花半小时，把讨论变成纪要', label: '会议纪要', items: ['决定：下周启动第一版方案', '待办：同步项目负责人'], status: '6 项重点', symbol: '◎', tone: 'blue' },
  { number: '03', title: '拜访客户时', copy: '不必一直看电脑，也能留住关键原话', label: '移动记录', items: ['14:32 客户拜访', '回到电脑后自动同步'], status: '已同步', symbol: '◉', tone: 'violet' },
  { number: '04', title: '写邮件文档时', copy: '思路保持连贯，表达自动变得清楚', label: '邮件草稿', items: ['方案已经整理完成', '请您查收并反馈时间安排'], status: '标准润色', symbol: '↗', tone: 'cream' },
  { number: '05', title: '灵感出现时', copy: '先开口说，整理和结构交给 MosSec', label: '碎片灵感', items: ['把语音入口放进工作流', '减少想法到文字的摩擦'], status: '刚刚', symbol: '✦', tone: 'mint' },
  { number: '06', title: '对接工作时', copy: '不用边听边记，重要信息不遗漏', label: '工作交接', items: ['确认本周交付节点', '风险与负责人已经归位'], status: '2 项待办', symbol: '✓', tone: 'slate' },
];

export default function MomentsScroll() {
  const rootRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    if (!root || !track) return;

    let frame = 0;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const render = () => {
      frame = 0;
      const swipeMode = window.innerWidth <= 620 || reduceMotion.matches;
      root.dataset.mode = swipeMode ? 'swipe' : 'scroll';
      if (swipeMode) {
        track.style.transform = 'none';
        root.style.setProperty('--moments-progress', '0');
        return;
      }

      const rect = root.getBoundingClientRect();
      const distance = Math.max(1, root.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / distance));
      const maxShift = Math.max(0, track.scrollWidth - window.innerWidth);
      track.style.transform = `translate3d(${-progress * maxShift}px, 0, 0)`;
      root.style.setProperty('--moments-progress', progress.toFixed(4));
    };

    const requestRender = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };

    render();
    window.addEventListener('scroll', requestRender, { passive: true });
    window.addEventListener('resize', requestRender);
    reduceMotion.addEventListener('change', requestRender);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', requestRender);
      window.removeEventListener('resize', requestRender);
      reduceMotion.removeEventListener('change', requestRender);
    };
  }, []);

  return (
    <section className="moments-scroll" ref={rootRef} aria-labelledby="moments-title">
      <div className="moments-scroll-stage">
        <div className="moments-scroll-glow glow-a" /><div className="moments-scroll-glow glow-b" />
        <div className="moments-scroll-head">
          <div><span className="kicker">适合这些时刻</span><h2 id="moments-title">别让记忆<br />继续承担整理工作</h2></div>
          <p>从客户电话到灵感出现，把向下滚动变成一段工作场景之旅。每一次开口，都能留下清楚、可执行的记录。</p>
        </div>

        <div className="moments-scroll-viewport" aria-label="MosSec 使用场景，桌面端随页面滚动横向浏览，移动端可左右滑动">
          <div className="moments-scroll-track" ref={trackRef} role="list">
            {scenes.map((scene) => (
              <article className={`moment-story moment-${scene.tone}`} key={scene.number} role="listitem">
                <div className="moment-story-top"><span>{scene.number}</span><i>{scene.symbol}</i><small>{scene.status}</small></div>
                <div className="moment-story-copy"><span>{scene.label}</span><h3>{scene.title}</h3><p>{scene.copy}</p></div>
                <div className="moment-story-note">
                  {scene.items.map((item, index) => <div key={item}><i>{index === 0 ? '✓' : ''}</i><span>{item}</span></div>)}
                </div>
                <div className="moment-story-wave" aria-hidden="true"><span /><span /><span /><span /><span /><span /><span /><span /><span /></div>
              </article>
            ))}
          </div>
        </div>

        <div className="moments-scroll-progress" aria-hidden="true"><span>01</span><i><b /></i><span>06</span></div>
      </div>
    </section>
  );
}
