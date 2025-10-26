# ガールズバンドクライプチオンリー　新大阪（仮）告知サイト

2026/01/18(日)にインテックス大阪で開催される、「ガールズバンドクライ」のプチオンリーイベントの告知サイトです。

## プロジェクト構成

```
test-next/
├── app/
│   ├── layout.tsx       # アプリケーションレイアウト
│   ├── page.tsx         # メインページ
│   └── globals.css      # グローバルスタイル
├── components/          # コンポーネントディレクトリ（コンポーネント単位でディレクトリ分け）
│   ├── Header/
│   │   ├── Header.tsx
│   │   └── Header.module.css
│   ├── AboutPetitOnly/
│   │   ├── AboutPetitOnly.tsx
│   │   └── AboutPetitOnly.module.css
│   ├── CircleParticipation/
│   │   ├── CircleParticipation.tsx
│   │   └── CircleParticipation.module.css
│   ├── GeneralParticipation/
│   │   ├── GeneralParticipation.tsx
│   │   └── GeneralParticipation.module.css
│   ├── CosplayInfo/
│   │   ├── CosplayInfo.tsx
│   │   └── CosplayInfo.module.css
│   ├── CircleList/
│   │   ├── CircleList.tsx
│   │   └── CircleList.module.css
│   ├── EventPurpose/
│   │   ├── EventPurpose.tsx
│   │   └── EventPurpose.module.css
│   ├── Contact/
│   │   ├── Contact.tsx
│   │   └── Contact.module.css
│   └── Footer/
│       ├── Footer.tsx
│       └── Footer.module.css
├── public/              # 静的ファイル
│   └── .nojekyll       # GitHub Pages用設定
├── out/                 # ビルド済み静的ファイル（SSG）
├── next.config.ts       # Next.js設定（SSGエクスポート設定済み）
├── tsconfig.json        # TypeScript設定
└── package.json         # パッケージ管理
```

## 技術スタック

- **フレームワーク**: Next.js 15.x (App Router)
- **言語**: TypeScript
- **スタイリング**: CSS Modules
- **ランタイム**: Node.js v22.x
- **パッケージマネージャー**: pnpm
- **デプロイ**: Static Site Generation (SSG)

## セットアップ

### 必要な環境

- Node.js v22.x 以上
- pnpm v10.x 以上

### インストール

```bash
# 依存関係をインストール
pnpm install
```

## 開発コマンド

```bash
# 開発サーバー起動（ホットリロード対応）
pnpm dev
```

開発サーバーが起動したら、ブラウザで http://localhost:3000 を開いてください。

```bash
# 本番ビルド（静的エクスポート）
pnpm build
```

ビルドされた静的ファイルは `out/` ディレクトリに生成されます。

```bash
# 本番ビルドのプレビュー
pnpm start
```

## GitHub Pagesへのデプロイ方法

### 方法1: GitHub Actions を使用（推奨）

1. GitHubリポジトリを作成

2. プロジェクトをリポジトリにpush
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repository-url>
   git push -u origin main
   ```

3. `.github/workflows/deploy.yml` を作成
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: pnpm/action-setup@v2
           with:
             version: 10
         - uses: actions/setup-node@v4
           with:
             node-version: 22
             cache: 'pnpm'
         - run: pnpm install
         - run: pnpm build
         - uses: actions/upload-pages-artifact@v3
           with:
             path: ./out

     deploy:
       needs: build
       runs-on: ubuntu-latest
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       steps:
         - id: deployment
           uses: actions/deploy-pages@v4
   ```

4. GitHub リポジトリの Settings > Pages で、Source を "GitHub Actions" に設定

### 方法2: 手動デプロイ

1. ローカルでビルド
   ```bash
   pnpm build
   ```

2. `out/` ディレクトリの内容を `gh-pages` ブランチにpush
   ```bash
   git subtree push --prefix out origin gh-pages
   ```

3. GitHub リポジトリの Settings > Pages で、Source を "gh-pages branch" に設定

## プロジェクトの特徴

- **SSG（Static Site Generation）**: バックエンド不要の完全静的サイト
- **CSS Modules**: スコープ化されたスタイリングで名前衝突を防止
- **コンポーネント分割**: 保守性の高いコンポーネント構成
- **TypeScript**: 型安全性を担保
- **レスポンシブデザイン**: モバイル・タブレット・デスクトップに対応

## ライセンス

このプロジェクトは、ガールズバンドクライプチオンリー　新大阪（仮）イベントの告知サイトです。
