# 886 Homepage Only

这是 886 学习 App 的第一版：只做手机端主页。

## 技术栈

- Vite
- Preact
- TypeScript
- 原生 CSS

暂时没有拼音库、笔顺库、手势库、Dexie、题库。  
先保证 Vercel 能部署，后续功能慢慢加。

## 本地运行

```bash
npm install
npm run dev
```

## Vercel 部署

- Framework Preset: Vite
- Build Command: npm run build
- Output Directory: dist
- Root Directory: 保持默认，不要选 src

## 下一步

1. 首页确认风格
2. 再加拼音模块
3. 再加笔顺模块
4. 再加背单词
5. 最后再加手势、题库、进度
