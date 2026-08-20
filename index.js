"use strict";
const {
	default: makeWASocket,
	DisconnectReason,
	useMultiFileAuthState,
	fetchLatestBaileysVersion
} = require("@whiskeysockets/baileys");
const figlet = require("figlet");
const fs = require("fs");
const moment = require('moment');
const chalk = require('chalk');
const logg = require('pino');
const { serialize } = require("./lib/myfunc");

const connectToWhatsApp = async () => {
	const { state, saveCreds } = await useMultiFileAuthState('session');
	const { version } = await fetchLatestBaileysVersion();

	const conn = makeWASocket({
		version,
		printQRInTerminal: true,
		logger: logg({ level: 'fatal' }),
		auth: state,
		browser: ["Izumi-Bot", "Safari", "3.0"]
	});
	
	conn.ev.on('messages.upsert', async m => {
		if (!m.messages) return;
		var msg = m.messages[0];
		msg = serialize(conn, msg);
		msg.isBaileys = msg.key.id.startsWith('BAE5') || msg.key.id.startsWith('3EB0');
		// ഇവിടെ store നീക്കം ചെയ്തു
		require('./message/msg')(conn, msg, m, {}, {}); 
	});

	conn.ev.on('connection.update', (update) => {
		const { connection, lastDisconnect, qr } = update;
		if (qr) {
			console.log(chalk.cyan("Scan the QR code with WhatsApp Linked Devices!"));
		}
		if (connection === 'close') {
			const statusCode = lastDisconnect?.error?.output?.statusCode;
			const shouldReconnect = statusCode !== DisconnectReason.loggedOut;
			if (shouldReconnect) {
				connectToWhatsApp();
			} else {
				console.log('Wa web terlogout...');
			}
		} else if (connection === 'open') {
			console.log('Server Ready ✓');
		}
	});

	conn.ev.on('creds.update', saveCreds);

	conn.reply = (from, content, msg) => conn.sendMessage(from, { text: content }, { quoted: msg });

	return conn;
};

connectToWhatsApp().catch(err => console.log(err));
