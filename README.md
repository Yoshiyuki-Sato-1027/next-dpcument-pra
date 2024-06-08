サーバー起動
yarn run dev

## AppRouter のディレクトリ構成

Next.js13 から導入

layout Segment とその子コンポーネントで共有する UI
page ルートのユニークな UI を作成し、ルートを公開する
loading Segment とその子コンポーネントのローディング UI
not-found Segment とその子コンポーネントが無かった場合の UI
error Segment とその子コンポーネントのエラー UI
global-error グローバルなエラー UI
route サーバーサイドの API エンドポイント
template 再レンダリングされる特殊なレイアウト UI
default Parallel Routes のフォールバック UI

・layout
layout.tsx をつくれば import せずとも適用される

参考になった
Next.js に TabstackQuery 導入
https://qiita.com/75ks/items/d5d5bfe21a3e8bb964ae

Intercepting Routes を使用してモーダルをつくっている公式のリポジトリ
https://github.com/vercel/nextgram
別リポジトリで確認
