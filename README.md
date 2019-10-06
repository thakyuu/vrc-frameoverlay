# vrc-frameoverlay

## これはなに

* OSCで受け取ったパスに存在する画像ファイルに対して、configのoverlayに指定した画像をオーバーレイ処理します

## 使い方
* `node.js`を導入して、本プロジェクトをDL、`npm install`を実行し、`node osc-rotate.js`で実行する
  * ex.
  ```
  git clone https://github.com/thakyuu/vrc-frameoverlay.git
  cd vrc-frameoverlay
  npm install
  node vrc-frameoverlay.js
  ```
* config.jsonで待受ポートは変更出来ます。
* overlay.pngは1920x1080の透過pngを推奨します

## 注意事項
* エラー処理とかロクに書いてないので、ファイルが破損する可能性などがあります。

## 備考
* VaNiiMenuのImageViewer内にあるOSC連携機能で動作確認しています。
