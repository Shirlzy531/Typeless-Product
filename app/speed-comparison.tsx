'use client';

import { useEffect, useRef, useState } from 'react';

const FULL_TEXT = '今天下午和客户确认了需求，下周三前提交第一版方案。重点包括预算范围、交付节点和负责人安排，并在周五前同步正式报价。';
const KEY_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];
const KEY_SEQUENCE = 'JINTIANXIAWUKAIHUIQUERENKEHUXUQIU';

type Frame = {
  keyboard: string;
  mossec: string;
  key: string;
  speaking: boolean;
};

export default function SpeedComparison() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [frame, setFrame] = useState<Frame>({ keyboard: '', mossec: '', key: '', speaking: false });

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.28 });
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setFrame({ keyboard: FULL_TEXT, mossec: FULL_TEXT, key: '', speaking: false });
      return;
    }

    let animationFrame = 0;
    let start = performance.now();
    let previous = '';

    const draw = (now: number) => {
      const cycle = ((now - start) / 1000) % 7.2;
      const typingTime = Math.max(0, cycle - 0.65);
      const keyboardCount = Math.min(FULL_TEXT.length, Math.floor(typingTime * (45 * 5 / 60)));
      const mossecCount = Math.min(FULL_TEXT.length, Math.floor(typingTime * (220 * 5 / 60)));
      const next: Frame = {
        keyboard: FULL_TEXT.slice(0, keyboardCount),
        mossec: FULL_TEXT.slice(0, mossecCount),
        key: typingTime > 0 && keyboardCount < FULL_TEXT.length ? KEY_SEQUENCE[keyboardCount % KEY_SEQUENCE.length] : '',
        speaking: typingTime > 0 && mossecCount < FULL_TEXT.length,
      };
      const signature = `${keyboardCount}-${mossecCount}-${next.key}-${next.speaking}`;
      if (signature !== previous) {
        previous = signature;
        setFrame(next);
      }
      animationFrame = requestAnimationFrame(draw);
    };

    animationFrame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animationFrame);
  }, [visible]);

  return (
    <div className="speed-demo" ref={rootRef} data-running={visible ? 'true' : 'false'}>
      <div className="speed-fog speed-fog-one" /><div className="speed-fog speed-fog-two" />
      <aside className="keyboard-lane">
        <div className="speed-stat"><span>键盘输入</span><strong>45</strong><small>WPM</small></div>
        <div className="typing-sheet keyboard-sheet"><p>{frame.keyboard}<i /></p></div>
        <div className="mini-keyboard" aria-hidden="true">
          {KEY_ROWS.map((row, rowIndex) => (
            <div key={rowIndex}>{row.map((key) => <span className={frame.key === key ? 'active' : ''} key={key}>{key}</span>)}</div>
          ))}
        </div>
      </aside>

      <div className="voice-lane">
        <div className="speed-stat voice-stat"><span>MosSec 语音输入</span><strong>220</strong><small>WPM</small></div>
        <div className="saved-time"><span>每周节省</span><strong>1 天</strong></div>
        <div className="speed-stream speed-stream-one">开口记录 · 自动整理 · 直接可用</div>
        <div className="speed-stream speed-stream-two">语音跟上思考，重点自动归位</div>
        <div className="typing-sheet voice-sheet"><p>{frame.mossec}<i /></p></div>
        <div className={`comparison-voice ${frame.speaking ? 'is-speaking' : ''}`} aria-label={frame.speaking ? 'MosSec 正在听写' : 'MosSec 已完成听写'}>
          {Array.from({ length: 11 }).map((_, index) => <span key={index} style={{ animationDelay: `${-index * 0.075}s` }} />)}
        </div>
        <div className={`speed-ready ${frame.mossec.length === FULL_TEXT.length ? 'show' : ''}`}><span>✓</span><p><b>表达已整理</b><small>标点、结构和重点同步完成</small></p></div>
      </div>
      <p className="sr-only">键盘输入速度为每分钟 45 词，MosSec 语音输入速度为每分钟 220 词。</p>
    </div>
  );
}
