# node_OSC-rotate

## これはなに

* OSCで受け取ったパスに存在する画像ファイルに対して、時計回り90度の回転を行います。

## 使い方
* `node.js`を導入して、本プロジェクトをDL、`npm install`を実行し、`node osc-rotate.js`で実行する
  * ex.
  ```
  git clone https://github.com/thakyuu/node_OSC-rotate.git
  cd node_OSC-rotate
  npm install
  node osc-rotate.js
  ```
* config.jsonで待受ポートは変更出来ます。

## 注意事項

* 受け取ったパスにあるファイルを上書きします。
* エラー処理とかロクに書いてないので、ファイルが破損する可能性などがあります。

## 備考
* VaNiiMenuのImageViewer内にあるOSC連携機能で動作確認しています。
