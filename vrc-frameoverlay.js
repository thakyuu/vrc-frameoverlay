'use strict'

//Library
const fs = require('fs');
const osc = require('node-osc');
const log4js = require('log4js');
const sharp = require('sharp');

//Logging
log4js.configure({
	appenders : {
		logfile : {type : 'file', filename : 'vrc-frameoverlay.log'},
		stdout : {type : 'stdout'}
	},
	categories : {
		default : {appenders : ['logfile', 'stdout'], level : 'debug'}
	}
});
const logger = log4js.getLogger();
logger.level = 'info';

process.on('uncaughtException', err => {
	logger.fatal(err);
	process.exit(1);
})


//Config
const config = JSON.parse(fs.readFileSync(__dirname + '/config.json').toString());


//Initialize
logger.level = config.log.level;


//OverlayServer
const oscImageServer = new osc.Server(config.osc.image.listenPort);
oscImageServer.on('message', (msg, rinfo) => {
	imgOverlay(msg[1])
})
logger.info('オーバーレイ処理サーバを起動します。')
logger.info('ポート' + config.osc.image.listenPort + 'でOSCの待受を開始しました。')


function imgOverlay(imgPath){
	logger.info('オーバーレイ処理を開始しました: ' + imgPath);
	const img = sharp(imgPath);

	img.composite([{ input: config.overlay }]).toBuffer().then(_img => {
		fs.writeFileSync(imgPath.slice(0, -4) + '_overlay.png', _img);
		logger.info('オーバーレイ処理が完了しました: ' + imgPath);
	}).catch(err => {
		logger.error('オーバーレイ処理に失敗しました: ' + err);
	})

}

