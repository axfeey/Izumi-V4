/*HELLO BRO TERIMA KASIH SUDAH AMBIL SCRIPT INI JANGAN LUPA IKUTI DAN SUBSCRIBE MEDIA SOSIAL OWNER DAN BOT

Sc Ori By Arasya
Sc Record By Christian ID
Note : Jangan Perjualkan Sc Ini!!!

Instagram Jojo : @arsrfi.jpg
Youtube : Jojo Channel

Instagram : @chris.tianid
Youtube : Christian ID
WhatsApp : 0859-2116-5857

THANKS TO
- Irfan Hardianto
- Amell
- Hardianto
- Affis Junianto
- Rafli Rusdiana
- Febri
- Jojo
- Christian ID

Terimakasih*/
"use strict";
const {
	default: makeWASocket,
	DisconnectReason,
	makeInMemoryStore,
	useMultiFileAuthState,
	fetchLatestBaileysVersion
} = require("@whiskeysockets/baileys");
const figlet = require("figlet");
const fs = require("fs");
const moment = require('moment');
const chalk = require('chalk');
const logg = require('pino');
const clui = require('clui');
const { Spinner } = clui;
const { serialize } = require("./lib/myfunc");
const { color, mylog, infolog } = require("./lib/color");
const time = moment(new Date()).format('HH:mm:ss DD/MM/YYYY');

let setting = { sessionName: 'session' };
try {
	if (fs.existsSync('./config.json')) {
		setting = JSON.parse(fs.readFileSync('./config.json'));
	}
} catch (e) {
	console.log(e);
}

function title() {
	console.log(chalk.bold.red(figlet.textSync('Izumi-Bot', {
		font: 'Standard',
		horizontalLayout: 'default',
		verticalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	})));
	console.log(chalk.yellow(`\n                        ${chalk.green('[ Powered By Christian ]')}\n\n${chalk.yellow('Izumi-Bot')} : ${chalk.white('WhatsApp Bot Multi Device')}\n${chalk.yellow('Follow Insta Christian')} : ${chalk.white('@chris.tianid')}\n${chalk.yellow('Message Me On WhatsApp')} : ${chalk.white('+62 859-2116-5857')}\n${chalk.yellow('Rest Api')} : ${chalk.white('https://christian-id-api.herokuapp.com/docs')}\n${chalk.yellow('Youtube')} : ${chalk.white('https://youtube.com/channel/UCbetUssizXWLgZdDVEFp8Sg')}\n`));
}

const status = new Spinner(chalk.cyan(` Booting WhatsApp Bot`));
const starting = new Spinner(chalk.cyan(` Preparing After Connect`));
const reconnect = new Spinner(chalk.redBright(` Reconnecting WhatsApp Bot`));

const store = makeInMemoryStore({ logger: logg().child({ level: 'fatal', stream: 'store' }) });

const connectToWhatsApp = async () => {
	const { state, saveCreds } = await useMultiFileAuthState('session');
	const { version } = await fetchLatestBaileysVersion();

	const conn = makeWASocket({
		version,
		printQRInTerminal: true,
		logger: logg({ level: 'fatal' }),
		auth: state,
		browser: ["Izumi-Multi-Device", "Safari", "3.0"]
	});
	
	title();
	store.bind(conn.ev);
	
	conn.multi = true;
	conn.nopref = true;
	conn.prefa = '';

	conn.ev.on('messages.upsert', async m => {
		if (!m.messages) return;
		var msg = m.messages[0];
		msg = serialize(conn, msg);
		msg.isBaileys = msg.key.id.startsWith('BAE5') || msg.key.id.startsWith('3EB0');
		require('./message/msg')(conn, msg, m, setting, store);
	});

	conn.ev.on('connection.update', (update) => {
		const { connection, lastDisconnect, qr } = update;
		if (qr) {
			console.log(chalk.cyan("Scan the QR code with WhatsApp Linked Devices!"));
		}
		if (connection === 'close') {
			status.stop();
			reconnect.stop();
			starting.stop();
			const statusCode = lastDisconnect?.error?.output?.statusCode;
			const shouldReconnect = statusCode !== DisconnectReason.loggedOut;
			
			console.log(mylog('Connection closed. Status: ' + statusCode));
			if (shouldReconnect) {
				connectToWhatsApp();
			} else {
				console.log(mylog('Wa web terlogout...'));
			}
		} else if (connection === 'open') {
			console.log(mylog('Server Ready ✓'));
		}
	});

	conn.ev.on('creds.update', saveCreds);
	
	conn.ev.on('group-participants.update', async (data) => {
		try {
			let metadata = await conn.groupMetadata(data.id);
			for (let i of data.participants) {
				let pp_user;
				try {
					pp_user = await conn.profilePictureUrl(i, 'image');
				} catch {
					pp_user = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';
				}
				if (data.action === "add") {
					conn.sendMessage(data.id, { 
						image: { url: pp_user }, 
						caption: `Hallo @${i.split("@")[0]}\nSelamat Datang Di Grup ${metadata.subject}\n\nIntro Dulu Yuk Kak\n\n\n📛 Nama : \n🔞 Umur :\n🏙️ Askot :\n👫 Gender :\n\nSemoga Kamu Senang Berada Disini Serta Jangan Lupa Untuk Membaca Dan Mematuhi Rules Yang Ada`, 
						mentions: [i] 
					});
				} else if (data.action === "remove") {
					conn.sendMessage(data.id, { 
						image: { url: pp_user }, 
						caption: `Goodbye @${i.split("@")[0]}\n\nTetap Putus Asa Jangan Semangat Dan Jadilah Beban Keluarga 🤙🗿`, 
						mentions: [i] 
					});
				}
			}
		} catch (e) {
			console.log(e);
		}
	});

	conn.reply = (from, content, msg) => conn.sendMessage(from, { text: content }, { quoted: msg });

	return conn;
};

connectToWhatsApp().catch(err => console.log(err));
