# Sora マッサージサービス - ウェブサイト

このリポジトリはSoraが提供する健全で法的に準拠したマッサージサービスの公式ウェブサイトです。

## 概要

- **セラピスト**: Sora（エンジニア出身）
- **サービス**: 高品質なマッサージサービス
- **理念**: 健全で法律・コンプライアンス順守

## ウェブサイトの特徴

- ✅ レスポンシブデザイン（モバイル・タブレット・デスクトップ対応）
- ✅ さわやかなイケメンをイメージした配色（爽やかな青系）
- ✅ 豊富な余白で清潔感のあるレイアウト
- ✅ スムーズなスクロールアニメーション
- ✅ 高速な読み込み（静的サイト）

## セクション

1. **セラピスト紹介** - Soraの紹介とポリシー
2. **店舗理念** - サービス内容と法的コンプライアンス
3. **サービス内容・料金** - 利用可能なマッサージコースと料金
4. **基本情報** - 営業日、提供エリア、利用方法、禁止事項

## ファイル構成

```
website/
├── index.html       # メインのHTMLファイル
├── styles.css       # スタイルシート（レスポンシブ対応）
├── script.js        # JavaScriptファイル（インタラクティブ機能）
└── README.md        # このファイル
```

## デプロイ方法（GitHub Pages）

### 1. GitHubにリポジトリを作成

```bash
# リポジトリのクローン（既に存在する場合）
cd website

# 初期化（新規の場合）
git init
git add .
git commit -m "Initial commit: Sora Massage Service website"
```

### 2. GitHub Pagesを有効化

1. GitHubのリポジトリ設定に移動
2. "Pages" セクションを開く
3. Source を "main branch" または "gh-pages branch" に設定
4. Save をクリック

### 3. デプロイ

```bash
git push origin main
```

## カスタマイズ

### 連絡先の更新

`index.html` の以下の部分を編集してください：

```html
<a href="https://line.me" class="contact-btn line-btn">LINEでお問い合わせ</a>
<a href="mailto:contact@example.com" class="contact-btn email-btn">メールでお問い合わせ</a>
```

- `https://line.me` を実際のLINE公式アカウントのURLに変更
- `contact@example.com` を実際のメールアドレスに変更

### 色の変更

`styles.css` のカラーパレットセクションを編集：

```css
:root {
    --primary-color: #2B7ED8;      /* 爽やかな青 */
    --primary-light: #5BA3E8;      /* ライトブルー */
    --primary-dark: #1A5BA8;       /* ダークブルー */
    /* ... */
}
```

## 要件

- 最新のWebブラウザ（Chrome、Firefox、Safari、Edge）
- インターネット接続

## ブラウザ互換性

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## コンプライアンス

このウェブサイトは以下を準拠しています：

- ✅ 日本の関連法律（あん摩マッサージ指圧師法など）
- ✅ 個人情報保護方針
- ✅ 健全で倫理的なサービス提供

## サービス利用時の注意事項

- 身体・服装の清潔さをお願いしています
- サービス前後の喫煙は禁止です
- 本サービスは医療行為ではありません

## ライセンス

© 2026 Sora Massage Service. All rights reserved.

---

**最終更新**: 2026年4月26日
