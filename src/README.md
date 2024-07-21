This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.





## swagger
npm install openapi-typescript-codegen -g
### code generater
npx openapi-typescript-codegen --input ./openapi/openapi.yml --output ./client-api/generated-typescript-client --client axios

### mock
npm install -g @stoplight/prism-cli
prism mock ./openapi.yml -h 0.0.0.0


## Atomic design 

|グループ名 | 組合せ可 | 担保するもの | 特徴 |
|-|-|-|-|
|atoms|x|トンマナ、基本デザイン|・UIパーツの最小構成部品<br>・他のコンポーネントには依存しない<br>・配置パターンもatomsに含まれる|
|molecules|o|操作性|・atomsを組み合わせて作る部品・atomsの原始的行動に意味を付加す<br>・eg.文字を入れる+クリックする=検索する|
|organisms|o|機能、価値、サービス|・atoms,molecules,organismsを組み合わせて作る部品<br>・独立して機能し、他のページでも同じ意図で使える 更新や削除処理を記載 |

|pages |o|流し込むデータ, RSC|・templatesにデータを流し込みページを動かす|

## story book 

npx sb init

apk add xdg-utils


## Test

## UT

jest 

npm install --save-dev jest @testing-library/react @testing-library/jest-dom babel-jest @babel/preset-env @babel/preset-react @babel/preset-typescript

## E2E

page単位のテストページ遷移も含む

## story book

- 可視性テスト (Visual Testing)
- ユニットテスト (Unit Testing)
- 統合テスト (Integration Testing)

https://qiita.com/tasty_uni/items/94f463c6c7439f271739



## todo

- create openapi.yml for `API gateway`
- add test coding
    - jest
    - cypress
    - storybook test





## デプロイ方法

3. CloudFrontディストリビューションの作成
AWS CloudFrontを使用して、ブルーとグリーンの環境を切り替える設定を行います。

CloudFrontディストリビューションの作成:

AWS CloudFrontコンソールに移動し、「Create Distribution」をクリックします。
「Web」を選択し、「Origin Domain Name」に現在のブルーバケットのエンドポイントを入力します（例: my-app-blue.s3.amazonaws.com）。
他の設定を適宜設定し、「Create Distribution」をクリックします。
カスタムオリジンの追加:

ディストリビューションの設定画面で「Origins and Origin Groups」タブに移動し、「Create Origin」をクリックします。
新しいオリジンとしてグリーンバケットのエンドポイントを追加します（例: my-app-green.s3.amazonaws.com）。

- S3のバケットを用意
    - my-app-green
    - my-app-blue  

- Github Actions
    - ビルドをしてmy-app-greenにアップロード
- CodePipelineの設定
    - ソースステージ
        - ソースプロバイダーとして「Amazon S3」を選択します。
        - バケットとして「my-app-green」を選択します。
    - デプロイステージの設定:
        - デプロイプロバイダーとして「AWS Lambda」を選択します。
        - デプロイスクリプトを実行するためのLambda関数を作成します。
    - Lambda
        - CloudFrontのオリジンを更新します。