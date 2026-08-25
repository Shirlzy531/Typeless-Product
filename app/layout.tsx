import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mossec.cn';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'MosSec｜把声音，变成能直接用的工作记录',
  description:
    '开口记录，秒转文字，纪要待办自动结构化。MosSec 帮你把会议、电话和灵感整理成清楚、能直接使用的文字。',
  icons: { icon: '/assets/mossec-icon.png', apple: '/assets/mossec-icon.png' },
  openGraph: {
    title: 'MosSec｜听到的话，变成好用的文字',
    description: '开口记录，秒转文字，纪要待办自动结构化。',
    url: siteUrl,
    siteName: 'MosSec',
    locale: 'zh_CN',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'MosSec｜听到的话，变成好用的文字' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MosSec｜听到的话，变成好用的文字',
    description: '开口记录，秒转文字，纪要待办自动结构化。',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
