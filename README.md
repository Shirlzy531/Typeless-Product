# MosSec Landing Page

MosSec 桌面端语音工作记录工具的中文 Landing Page。项目使用 React、Next.js 兼容接口和 Vinext 构建。

## 本地运行

需要 Node.js 22.13 或更高版本，以及 pnpm。

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

浏览器打开终端输出的本地地址即可预览。正式构建：

```bash
pnpm build
pnpm start
```

## 常用修改位置

- 页面内容与板块顺序：`app/page.tsx`
- 全局视觉样式与响应式布局：`app/globals.css`
- 润色程度点击交互：`app/polish-selector.tsx`
- 定价卡片点击交互：`app/pricing-selector.tsx`
- “适合这些时刻”横向滚动：`app/moments-scroll.tsx`
- 打字与语音速度对比动画：`app/speed-comparison.tsx`
- 图标和产品素材：`public/assets/`
- 页面标题、分享信息和站点域名：`app/layout.tsx`

## 更换域名

网站内部导航和资源均使用相对路径，不依赖当前托管地址。更换域名时，在 `.env.local` 或托管平台环境变量中设置：

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

重新构建并发布后，Open Graph 分享地址和站点元信息会同步使用新域名。DNS 绑定由实际托管平台完成，不需要改页面组件。

## 交付说明

源码包不包含依赖目录、构建产物、Git 历史、本机配置或 Sites 项目标识。同事解压后可独立安装依赖、修改并部署到新的托管项目。
