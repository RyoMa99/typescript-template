module.exports = {
  root: true, // eslintがこれ以上上の階層に行かないようにする
  env: {
    browser: true, // ブラウザ固有(DOM API)も解析する
    node: true, // node固有(requireなど)も解析する
    es2020: true // ESの指定バージョン
  },
  parser: "@typescript-eslint/parser", // typescriptを解析出来るようにする
  parserOptions: {
    sourceType: "module", // envのes*はes moduleは対象外なためこれが必要
    ecmaVersion: 2020, // envだけでなくこちらでも指定する必要がある
    tsconfigRootDir: __dirname, // tsconfigの場所
    project: ["./tsconfig.eslint.json"] // typescript-eslintの設定をカスタマイズする時に必要
  },
  plugins: [
    "@typescript-eslint" // ts固有ルールの追加
  ],
  extends: [
    "eslint:recommended", // eslintのrecommendedルールの適用
    "plugin:@typescript-eslint/recommended", // pluginの"@typescript-eslint"の設定を適用
    "prettier" // prettierとルールが被っているeslintのルールを無効にする
  ],
  rules: {
    "semi": "warn",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
     "@typescript-eslint/explicit-function-return-type": "warn"
  }
}