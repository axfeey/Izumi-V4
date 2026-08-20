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
	downloadContentFromMessage
} = require("@whiskeysockets/baileys");
const { color, bgcolor } = require('../lib/color');
const { getBuffer, fetchJson, fetchText, getRandom, getGroupAdmins, runtime, sleep, makeid } = require("../lib/myfunc");
const { webp2mp4File } = require("../lib/convert");
const { y2mateA, y2mateV } = require('../lib/y2mate');
const { pinterest } = require("../lib/pinterest");
const { darkjokes } = require("../lib/darkjokes");
const { igstalk } = require("../lib/igstalk");
const { lirikLagu } = require("../lib/lirik.js");
const { igstory } = require("../lib/igstory");
const { mediafire } = require("../lib/mediafire");
const { ephoto } = require("../lib/ephoto");
const { igDownloader } = require("../lib/igdown");
const { wikiSearch } = require("../lib/wiki");
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("../lib/limit");
const { isTicTacToe, getPosTic } = require("../lib/tictactoe");
const { addPlayGame, getJawabanGame, isPlayGame, cekWaktuGame, getGamePosi } = require("../lib/game");
const tictac = require("../lib/tictac");
const _prem = require("../lib/premium");

const fs = require("fs");
const moment = require("moment-timezone");
const util = require("util");
const { exec, spawn } = require("child_process");
const ffmpeg = require("fluent-ffmpeg");
const xfar = require('xfarr-api');
const axios = require("axios");
const hxz = require("hxz-api");
const ig = require("insta-fetcher");
const ra = require("ra-api");
const kotz = require("kotz-api");
const yts = require("yt-search");
const speed = require("performance-now");
const request = require("request");
const ms = require("parse-ms");

//Apikey melcanz, Search aja melcanz.com
//Apikey Anto = hardianto
//Apikey Jojo = Syaa
const apikey = "melcantik";
const keyanto = "hardianto";
const jojoapi = "Syaa";
const ikiapi = "FuckBitch";
const chrisapi = "IzumiBot";

// SETTING BOT AND OWNER //
const nobot = "37259886749"; // Ganti No Bot Kalian
const namabot = "Izumi MD"; // Ganti Nama Bot Kalian
const nameown = "Christian ID"; // Ganti Nama Kalian
const numown = "0859-2116-5857"; // Ganti Nomor Kalian
const nameowner = "Christian"; // Ganti Nama Kalian
const footer = "Izumi MD 2022"; // Ganti Nama Bot Kalian
const capt = "*By Izumi Bot MD*"; // Ganti Nama Bot Kalian
const grup = "https://chat.whatsapp.com/LsNzi7PDERyB9xIlW0F8Eq"; // Ganti Link Group Kalian
const nomorown = "https://wa.me/6285921165857"; // Ganti Nomor Kalian
const note = "*_Bot Ini Masih Dalam Pengembangan Jika Ada Fitur Yang Eror Silakan Hubungi Owner!!!_*"; // Kalau Mau Ganti Aja
const namagrup = "Group Izumi MD"; // Ubah Nama Group Mu

// Setting Donasi
const gopay = "0813-2850-7885"; // Ganti Nomor Gopay Mu
const pulsa = "0813-2850-7885"; // Ganti No Pulsa Mu
const insta = "chris.tianid"; // Ganti Nama IG Mu
const github = "TianBot1"; // Ganti Nama Github Mu
const linkdonasi = "https://telegra.ph/file/b7f1243d43509983f3230.jpg"; // Ganti Link Qris Mu

// Setting SewaBot Ubah Harga Sesuai Harga Mu//
const qris = "https://telegra.ph/file/b7f1243d43509983f3230.jpg";
const nomor = "wa.me/6285921165857";
const tujuhhari = "5.000";
const tigapuluhhari = "10.000";
const setahun = "20.000";
const permanen = "30.000";

//Setting Diamond FF | Ubah Harga Diamond Sesuai Kemauan mu//
const diamondsatu = "50 💎 = 8.000";
const diamonddua = "70 💎 = 10.000";
const diamondtiga = "100 💎 = 15.000";
const diamondempat = "140 💎 = 20.000";
const diamondlima = "355 💎 = 50.000";
const diamondenam = "720 💎 = 100.000";

//Setting Rekber // Lu Ubah Aja Soalnya Gw Bukan Anak JB:v //
const rekbera = "0-49K : 5K";
const rekberb = "50-110K : 10K";
const rekberc = "111-199K : 15K";
const rekberd = "200-299K : 20K";
const rekbere = "300-399K : 25K";
const rekberf = "400-499K : 30K";
const rekberg = "500-699K : 40K";
const rekberh = "700-1JT : 50K";

// Setting Payment 
const via = "ShoopePay, Qris, Gopay"; // Terserah Mau Payment Apa Aja

// Exif
const Exif = require("../lib/exif");
const exif = new Exif();

// DB Game
let tictactoe = [];
let tebakgambar = [];
let kuiscuy = [];
let tebaktebakan = [];
let tekateki = [];
let tebakkimia = [];

// Database
let pendaftar = [];
try { pendaftar = JSON.parse(fs.readFileSync('./database/user.json')); } catch(e) {}
let mess = {};
try { mess = JSON.parse(fs.readFileSync('./message/response.json')); } catch(e) {}
let premium = [];
try { premium = JSON.parse(fs.readFileSync('./database/premium.json')); } catch(e) {}
let balance = [];
try { balance = JSON.parse(fs.readFileSync('./database/balance.json')); } catch(e) {}
let limit = [];
try { limit = JSON.parse(fs.readFileSync('./database/limit.json')); } catch(e) {}
let glimit = [];
try { glimit = JSON.parse(fs.readFileSync('./database/glimit.json')); } catch(e) {}
let antilink = [];
try { antilink = JSON.parse(fs.readFileSync('./database/antilink.json')); } catch(e) {}
let antiwame = [];
try { antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json')); } catch(e) {}

moment.tz.setDefault("Asia/Jakarta").locale("id");

module.exports = async(conn, msg, m, setting, store) => {
	try {
		let { ownerNumber, ownerName, botName, gamewaktu, limitCount } = setting || {};
		const { type, quotedMsg, mentioned, now, fromMe } = msg;
		const jam = moment.tz('asia/jakarta').format('HH:mm:ss');
		let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a');
		const ucapanWaktu = "Selamat " + dt.charAt(0).toUpperCase() + dt.slice(1);
		const content = JSON.stringify(msg.message);
		const from = msg.key.remoteJid;
		const chats = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage' && msg.message.buttonsResponseMessage.selectedButtonId) ? msg.message.buttonsResponseMessage.selectedButtonId : (type == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : '';
		const toJSON = j => JSON.stringify(j, null, '\t');
		
		var prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(chats) ? chats.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi)[0] : '.';
		
		const more = String.fromCharCode(8206);
		const readmore = more.repeat(4001);
		const args = chats.trim().split(/ +/).slice(1);
		const command = chats.toLowerCase().split(' ')[0] || '';
		const isCmd = prefix ? chats.startsWith(prefix) : true;
		const isGroup = msg.key.remoteJid.endsWith('@g.us');
		const sender = isGroup ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid;
		const isOwner = ownerNumber == sender ? true : [`${ownerNumber}@s.whatsapp.net`, "6285921165857@s.whatsapp.net"].includes(sender) ? true : false;
		const pushname = msg.pushName;
		const q = chats.slice(command.length + 1, chats.length);
		const body = chats.startsWith(prefix) ? chats : '';
		const botNumber = conn.user.id.split(':')[0] + '@s.whatsapp.net';
		const groupMetadata = isGroup ? await conn.groupMetadata(from) : '';
		const groupName = isGroup ? groupMetadata.subject : '';
		const groupId = isGroup ? groupMetadata.id : '';
		const groupMembers = isGroup ? groupMetadata.participants : '';
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : '';
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
		const isGroupAdmins = groupAdmins.includes(sender);
		const isUser = pendaftar.includes(sender);
		const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium);
		const isAntiLink = isGroup ? antilink.includes(from) : false;
		const isAntiWame = isGroup ? antiwame.includes(from) : false;

		const reply = (teks) => {
			conn.sendMessage(from, { text: teks }, { quoted: msg });
		};

		// Anti link
		if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
			if (chats.match(`://chat.whatsapp.com`)) {
				reply(`*[ GROUP LINK DETECTOR ]*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`);
				conn.groupParticipantsUpdate(from, [sender], "remove");
			}
		}

		// Anti wame
		if (isGroup && isAntiWame && !isOwner && !isGroupAdmins && isBotGroupAdmins){
			if (chats.match(/(wa.me\/)/gi)) {
				reply(`*[ NOMOR LINK DETECTOR ]*\n\nSepertinya kamu mengirimkan link nomor, maaf kamu akan di kick`);
				conn.groupParticipantsUpdate(from, [sender], "remove");
			}
		}

		// Auto Registrasi
		if (isCmd && !isUser) {
			pendaftar.push(sender);
			try { fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2)); } catch(e) {}
		}

		// Logs
		if (isCmd) {
			console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command}`), 'from', color(pushname || sender));
		}

		// Ping
		if (command === prefix + 'ping' || command === 'ping') {
			const timestamp = speed();
			const latensi = speed() - timestamp;
			return reply(`Pong! 🏓\nSpeed: ${latensi.toFixed(4)} _Second_`);
		}

		switch(command) {
			case prefix+'allmenu':
			case prefix+'help':
			case prefix+'list':
				var fullMenuText = `── 「 *${namabot} ALL MENU* 」 ──

*👤 USER INFO*
➤ *Name:* ${pushname || 'User'}
➤ *Status:* ${isPremium ? 'Premium' : 'Free User'}
➤ *Prefix:* [ ${prefix} ]

*🛠️ MAIN MENU*
➤ ${prefix}ping
➤ ${prefix}menu
➤ ${prefix}allmenu
➤ ${prefix}rules
➤ ${prefix}donasi
➤ ${prefix}sewabot
➤ ${prefix}daftarprem
➤ ${prefix}owner
➤ ${prefix}sc

*👥 GROUP MENU*
➤ ${prefix}antilink [enable/disable]
➤ ${prefix}antiwame [enable/disable]
➤ ${prefix}group [open/close]
➤ ${prefix}promote [@tag]
➤ ${prefix}demote [@tag]
➤ ${prefix}kick [@tag]
➤ ${prefix}add [number]
➤ ${prefix}linkgroup
➤ ${prefix}tagall [teks]
➤ ${prefix}hidetag [teks]

*🎨 STICKER & MEDIA*
➤ ${prefix}sticker / .s (Reply image/video)
➤ ${prefix}toimg (Reply sticker)
➤ ${prefix}tomp4 (Reply sticker gif)
➤ ${prefix}tourl (Reply media)

*📥 DOWNLOAD MENU*
➤ ${prefix}tiktok [link]
➤ ${prefix}ig / .igdl [link]
➤ ${prefix}ytmp3 [link]
➤ ${prefix}ytmp4 [link]
➤ ${prefix}play [query]
➤ ${prefix}mediafire [link]

*🎮 GAME MENU*
➤ ${prefix}tictactoe
➤ ${prefix}tebakgambar
➤ ${prefix}tebakkata
➤ ${prefix}tekateki
➤ ${prefix}tebakkimia
➤ ${prefix}kuis

*🛒 STORE & TOPUP*
➤ ${prefix}listff
➤ ${prefix}rekber
➤ ${prefix}formatid

*⚙️ OWNER MENU*
➤ ${prefix}setppbot (Reply image)
➤ ${prefix}broadcast [teks]
➤ ${prefix}join [link group]
➤ ${prefix}leave
➤ ${prefix}block [@tag]
➤ ${prefix}unblock [@tag]
➤ > (Eval)
➤ $ (Exec)

${note}`;
				reply(fullMenuText);
				break;

			case prefix+'menu':
			case 'menu':
				var teks = `Hai kak ${pushname || 'User'} 👋
Saya ${namabot}, bot WhatsApp Multi-Device.

Ketik *${prefix}allmenu* atau *${prefix}list* untuk melihat semua menu dan fitur yang tersedia!

Note : ${note}`;
				reply(teks);
				break;

			case prefix+'owner':
				reply(`*Owner Number:* https://wa.me/${numown.replace(/[^0-9]/g, '')}`);
				break;

			case prefix+'delete':
			case prefix+'d':
			case prefix+'del':
				if (quotedMsg) {
					conn.sendMessage(from, { delete: { fromMe: true, id: quotedMsg.id, remoteJid: from }});
				}
				break;

			case prefix+'donasi':
			case prefix+'donate':
				var teks = `*[ DONASI ]*
├─ ❏ GOPAY : ${gopay}
├─ ❏ PULSA : ${pulsa}
├─ ❏ INSTAGRAM : https://www.instagram.com/${insta}

Donasi Untuk Perkembangan Bot
Note : Donasi Seikhlasnya`;
				reply(teks);
				break;

			case prefix+'daftarprem':
				var teks = `*[ LIST HARGA PREM ]*

_Yakin kamu mau daftar ke premium?_

*Keuntungan :*
- Limit Unlimited
- Akses Fitur Premium

*LIST DAFTAR PREMIUM*
- Rp. 2.000 - 7 Hari
- Rp. 5.000 - 1 Bulan
- Rp. 8.000 - 1 Tahun`;
				reply(teks);
				break;

			case prefix+'listff':
				var teks = `*[ LIST DIAMOND FREE FIRE ]*

💎 ${diamondsatu}
💎 ${diamonddua}
💎 ${diamondtiga}
💎 ${diamondempat}
💎 ${diamondlima}
💎 ${diamondenam}

*_Pembayaran Via : ${via}_*
*Ketik ${prefix}formatid untuk order*`;
				reply(teks);
				break;

			case prefix+'rekber':
				var teks = `*[ LIST HARGA REKBER ]*

${rekbera}
${rekberb}
${rekberc}
${rekberd}
${rekbere}
${rekberf}
${rekberg}
${rekberh}`;
				reply(teks);
				break;

			case prefix+'formatid':
				reply(`*[ FORMAT FF ]*\n\nID Game = \nNick Game = \nJumlah Diamond = \nPembayaran Via = \n\n*Kirim Formulir Ini Ke ${nomor}*`);
				break;

			case prefix+'sc':
				reply(`*── 「 SOURCE CODE 」 ──*\n\n*Script : https://youtube.com/channel/UCbetUssizXWLgZdDVEFp8Sg*`);
				break;

			case prefix+'rules':
				var teks = `*── 「 RULES AND FAQ 」 ──*

1. Jangan spam bot. 🙅
2. Jangan telepon bot. ☎️
3. Jangan mengeksploitasi bot. 😖

Prefix: Multi Prefix (${prefix})`;
				reply(teks);
				break;

			case prefix+'sewabot':
				var teks = `*── 「 SEWA BOT 」 ──*

*Harga Sewa*
7 Hari = ${tujuhhari}
30 Hari = ${tigapuluhhari}
1 Tahun = ${setahun}
Permanen = ${permanen}

*_Pembayaran Melalui Qris : ${qris}_*
*Hubungi Owner : ${nomor}*`;
				reply(teks);
				break;
		}

	} catch (err) {
		console.log(err);
	}
};
