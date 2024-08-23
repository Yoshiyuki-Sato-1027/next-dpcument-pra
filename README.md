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

## RSC について

stage0 は SC のレンダリングなので、サーバー側でしか実行されない
stage1 は CC のレンダリングなので、クライアント側では必ず実行
SC は「従来のレンダリングプロセスの前に新たなステージが追加されたもの
・CC は SC をインポートできない

RSC のメリット
結局、RSC により何が嬉しくなるのか？をまとめると以下になります。

JS のバンドルサイズの削減
データフェッチスピードの高速化
初期表示の改善
セキュリティ
設計面のメリット

参考
https://zenn.dev/yuu104/articles/react-server-component
