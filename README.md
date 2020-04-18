# 環境構築

```
$ cd program-puzzle-ts
$ npm install
```

# テスト実行方法

```bash
$ cd program-puzzle-ts
$ npx jest --watch # 勝手に見張ってくれる
```

# typescript実行

(上述のテストを実施するので、今後作成分は不要)

- 個別にビルド&実行する方法

> # ビルド
> Cmd + Shift + B
> tsc: build - tsconfig.json を選択
> # 実行
> node dist/test.js

- ビルドを自動化する方法

> # ビルドwatch
> Cmd + Shift + B
> tsc: watch - tsconfig.json を選択
> # 実行(terminalがwatch使っているので別のterminalを開く。terminal欄の+ボタンを押す)
> node dist/test.js