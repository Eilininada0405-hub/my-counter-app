# Vite カウンターアプリ

## 課題チェック

- [x] Vanilla テンプレートで Vite プロジェクトを作成
- [x] `増やす`、`減らす`、`リセット` の3ボタンを実装
- [x] CSSを `src/style.css` に分け、`src/main.js` から import
- [x] `vite.config.js` に `base: './'` を設定
- [x] `pnpm run build` で `dist/` を生成
- [x] `.gitignore` で `node_modules/` と `dist/` を除外

## 実行したコマンドの順序

```text
pnpm create vite my-counter-app --template vanilla
pnpm install
pnpm run dev
pnpm run build
pnpm run preview
```

この環境では `pnpm` を Corepack 経由で実行したため、実際の確認では `corepack pnpm` を使用した。

## `base: './'` を設定した理由

GitHub Pages のプロジェクトサイトはリポジトリ名の下に公開される。`base` を設定しないと、ビルド後のCSS・JavaScriptが `/assets/...` というドメイン直下の絶対パスになり、プロジェクトサイトから正しく読み込めず画面が真っ白になる。`base: './'` により `./assets/...` の相対パスで読み込めるようにした。

## 詰まった場所と解決方法

`pnpm run build` をワークスペース直下で実行した際、`ERR_PNPM_NO_IMPORTER_MANIFEST_FOUND` が発生した。`package.json` のある `my-counter-app` に移動して実行する必要があったため、`Push-Location .\my-counter-app` の後に `corepack pnpm run build` を実行して解決した。また、`pnpm` 自体が直接見つからなかったため、Corepack 経由で実行した。

## 判断の記録

- 選択肢A: `dist/` の中身を手動で公開ブランチに配置する。
- 選択肢B: `gh-pages` ツールで `dist/` を公開ブランチへ送る。
- 採用した理由: 今回はまず必須課題の実装とビルド確認を優先し、公開方法に依存しない `dist/` を成果物として残す方式にした。
- 確認方法: `corepack pnpm run build` の成功と、`corepack pnpm run preview` の `http://localhost:4173/` で表示を確認した。

## 表示確認

- スマホ幅 375px: レイアウトが収まり、3つの操作ボタンを確認。
- PC幅 1280px: カウンターが中央に表示され、3つの操作ボタンを確認。

## AI利用と比較

- 使ったAIツール: GitHub Copilot
- 何を依頼したか: 課題要件の確認、カウンター実装、Viteの本番ビルド確認。
- 自分で修正した箇所: 3ボタンの操作仕様、配色とレスポンシブ配置、`base: './'` の確認、実行コマンドの選択。
- AIが正しく実装できていたこと: Vite構成、CSS import、ビルド手順の整理。
- AIが間違えた・足りなかったこと: 最初の実装は増加ボタンだけで、減少・リセットが不足していた。また、直接の `pnpm` がない環境では Corepack 経由に読み替える必要があった。
- 自分が修正・判断した箇所: 3つのボタンを要件どおりに追加し、相対パス設定と表示確認方法を判断した。

## 提出先

- GitHubリポジトリURL: `（自分のリポジトリURLを記入）`
- GitHub Pages URL: `（公開した場合にURLを記入）`