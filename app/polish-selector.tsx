'use client';

import { CSSProperties, useState } from 'react';

const options = [
  { title: '轻度整理', badge: '原意优先', text: '我们下周和客户再确认一下时间，然后把报价发过去。', note: '去掉明显口语与重复' },
  { title: '标准润色', badge: '推荐', text: '下周与客户确认项目时间，并在确认后发送正式报价。', note: '表达更顺、更清楚' },
  { title: '高度润色', badge: '专业表达', text: '计划于下周完成项目排期确认，并同步向客户提交正式报价方案。', note: '结构完整，适合对外使用' },
];

export default function PolishSelector() {
  const [active, setActive] = useState(1);
  const style = { '--polish-index': active } as CSSProperties;

  return (
    <div className="polish-selector" style={style}>
      <div className="polish-scale" role="radiogroup" aria-label="选择润色程度">
        {options.map((option, index) => (
          <button className={active === index ? 'scale-active' : ''} type="button" role="radio" aria-checked={active === index} onClick={() => setActive(index)} key={option.title}>
            <div className="scale-head"><span>{option.title}</span><i>{option.badge}</i></div>
            <p>{option.text}</p><small>{option.note}</small>
          </button>
        ))}
      </div>
      <div className="scale-control" aria-label="润色程度滑块">
        <div className="scale-rail"><span /></div>
        {options.map((option, index) => (
          <button className={active === index ? 'active' : ''} type="button" aria-label={`选择${option.title}`} onClick={() => setActive(index)} key={option.title}><i /></button>
        ))}
      </div>
    </div>
  );
}
