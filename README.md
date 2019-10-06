# vrc-frameoverlay

## これはなに

* OSCで受け取ったパスに存在する画像ファイルに対して、configのoverlayに指定した画像をオーバーレイ処理します

## 使い方()
* vrc-frameoverlay.exeを実行して、オーバーレイ処理を行うツールを立ち上げます。
* VaNiiMenuなどのOSCで画像ファイルのパスを投げられるツールから、本ツールに対してOSCでパスを投げると処理を実行します。
    * ex. VaNiiMenuの場合は、ImageViewerの左上のOSC Sendボタン
* 画像ファイルと同じディレクトリに、元ファイル名_overlay.pngという名称で、オーバーレイ処理を行った画像が保存されます。

* overlay.pngは1920x1080の透過pngを推奨します

## 注意事項
* エラー処理とかロクに書いてないので、ファイルが破損する可能性などがあります。

## 備考
* VaNiiMenuのImageViewer内にあるOSC連携機能で動作確認しています。
