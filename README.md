# IKS-org.github.io
Next.jsを用いたIKSのGitHub Pages

## 開発環境の構築
1. Install Node  
    [こちら](https://nodejs.org/ja/download/)を参照の上、OSに応じた方法でインストールする   
    ※Windowsの場合はWSL上にダウンロードしてください。cmd.exeの都合上、現在の設定ではLinterが動きません。
2. Install yarn
    ```bash
    # 管理者権限で実行
    npm -g install yarn
    ```
3. Clone Repository
    ```bash
    git clone git@github.com:IKS-org/IKS-org.github.io.git
    ```
4. Install packages
    ```bash
    yarn install && yarn prepare
    ```
5. Build  
    以下のコマンドで`./out`ディレクトリに静的HTMLがエクスポートされる
    ```bash
    yarn build && yarn export
    ```
    開発のためにサーバを立ち上げるだけの場合は、以下のように実行する  
    実行後、https://localhost:3000/ にアクセス
    ```bash
    yarn dev
    ```
