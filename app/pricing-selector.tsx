'use client';

import { useState, type KeyboardEvent } from 'react';

const plans = [
  {
    label: '基础使用',
    name: '个人版',
    price: '免费',
    suffix: '长期使用',
    features: ['桌面快捷键语音输入', '轻度与标准润色', '基础会议转写', '本地历史记录'],
    action: '免费开始',
    href: '#download',
    arrow: '→',
  },
  {
    label: '首月免费',
    name: '进阶版',
    price: '¥35',
    suffix: '/月 · $5',
    features: ['个人版全部能力', '高度润色与场景风格', '会议摘要、决策与待办', '热词辅助与业务模板'],
    action: '开始免费体验',
    href: '#download',
    arrow: '→',
  },
  {
    label: '即将开放',
    name: '团队版',
    price: '联系咨询',
    suffix: '按团队需要',
    features: ['个人版全部能力', '团队热词与业务模板', '统一规范与工作流适配', '团队支持与反馈通道'],
    action: '联系我们',
    href: 'mailto:hello@mossec.cn',
    arrow: '↗',
  },
];

export default function PricingSelector() {
  const [activePlan, setActivePlan] = useState(1);

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setActivePlan(index);
    }
  };

  return (
    <div className="pricing-grid" role="radiogroup" aria-label="选择 MosSec 方案">
      {plans.map((plan, index) => {
        const isActive = activePlan === index;
        return (
          <article
            className={`price-card${isActive ? ' active-price' : ''}`}
            key={plan.name}
            role="radio"
            aria-checked={isActive}
            tabIndex={0}
            onClick={() => setActivePlan(index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          >
            <span className="price-label">{plan.label}</span>
            <h3>{plan.name}</h3>
            <div className="price"><b>{plan.price}</b><span>{plan.suffix}</span></div>
            <ul>{plan.features.map((feature) => <li key={feature}>✓ {feature}</li>)}</ul>
            <a
              className={isActive ? '' : 'outline-link'}
              href={plan.href}
              onClick={(event) => event.stopPropagation()}
            >
              {plan.action} <span>{plan.arrow}</span>
            </a>
          </article>
        );
      })}
    </div>
  );
}
