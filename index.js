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
	BufferJSON,
	initInMemoryKeyStore,
	DisconnectReason,
	AnyMessageContent,
	makeInMemoryStore,
	useSingleFileAuthState,
	delay
} = require("@adiwajshing/baileys");
const figlet = require("figlet");
const fs = require("fs");
const moment = require('moment');
const chalk = require('chalk');
const logg = require('pino');
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

let session = `./${setting.sessionName || 'session'}.json`;
const { state, saveState } = useSingleFileAuthState(session);

const store = makeInMemoryStore({ logger: logg().child({ level: 'fatal', stream: 'store' }) });

const connectToWhatsApp = async () => {
	console.log(chalk.green("Connecting to WhatsApp... Please wait for QR Code!"));

	const conn = makeWASocket({
		printQRInTerminal: true,
		logger: logg({ level: 'silent' }),
		auth: state,
		browser: ["Izumi-Bot", "Safari", "3.0"]
	});
	
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
			console.log(chalk.yellow("QR Code Generated! Scan now with WhatsApp Linked Devices:"));
		}
		if (connection === 'open') {
			console.log(chalk.greenBright('Connected to WhatsApp successfully! ✓'));
		}
		if (connection === 'close') {
			const shouldReconnect = (lastDisconnect?.error)?.output?.statusCode !== DisconnectReason.loggedOut;
			console.log(mylog('Connection closed. Reconnecting: ' + shouldReconnect));
			if (shouldReconnect) {
				connectToWhatsApp();
			} else {
				console.log(mylog('Wa web terlogout... Scan QR again.'));
			}
		}
	});

	conn.ev.on('creds.update', saveState);
	
	conn.ev.on('group-participants.update', async (data) => {
		try {
			let metadata = await conn.groupMetadata(data.id);
			for (let i of data.participants) {
				try {
					var pp_user = await conn.profilePictureUrl(i, 'image');
				} catch {
					var pp_user = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';
				}
				if (data.action == "add") {
					conn.sendMessage(data.id, { image: { url: pp_user }, caption: `Hallo @${i.split("@")[0]}\nSelamat Datang Di Grup ${metadata.subject}\n\nIntro Dulu Yuk Kak\n\n\n📛 Nama : \n🔞 Umur :\n🏙️ Askot :\n👫 Gender :\n\nSemoga Kamu Senang Berada Disini Serta Jangan Lupa Untuk Membaca Dan Mematuhi Rules Yang Ada`, mentions: [i] });
				} else if (data.action == "remove") {
					conn.sendMessage(data.id, { image: { url: pp_user }, caption: `Goodbye @${i.split("@")[0]}\n\nTetap Putus Asa Jangan Semangat Dan Jadilah Beban Keluarga 🤙🗿`, mentions: [i] });
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
