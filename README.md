<div align="center">

# deffa-baileys

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0a0a12,50:2b1a2e,100:0a0a12&height=220&section=header&text=DEFFA%20BAILEYS&fontSize=62&fontColor=e8b76a&fontAlign=50&fontAlignY=38&desc=WhatsApp%20%C2%B7%20Telegram%20%C2%B7%20Discord%20%E2%80%94%20Unified%20Engine&descAlign=50&descAlignY=62&descSize=18&animation=fadeIn" width="100%"/>

<br>


<img src="https://i.ibb.co/xq4NzXq0/deffa28760176.png" width="100%" style="border-radius:14px;box-shadow:0 8px 30px rgba(0,0,0,0.55);" />

<br><br>

<picture>
  <img alt="deffa-baileys" src="https://readme-typing-svg.demolab.com/?font=Georgia&size=30&duration=3200&pause=900&color=E8B76A&center=true&vCenter=true&width=820&height=55&lines=deffa-baileys;Satu+Library%2C+Tiga+Platform;WhatsApp+%C2%B7+Telegram+%C2%B7+Discord;Dibangun+untuk+yang+Serius+Membangun" />
</picture>

<br><br>

<sub>✦ &nbsp;ECMASCRIPT MODULES &nbsp;·&nbsp; NODE.JS 20+ &nbsp;·&nbsp; MIT LICENSE &nbsp;·&nbsp; MAINTAINED BY DEFFA &nbsp;✦</sub>

<br><br>

[![npm version](https://img.shields.io/npm/v/deffa-baileys?style=for-the-badge&label=NPM&labelColor=0a0a12&color=7d3d6b)](https://www.npmjs.com/package/deffa-baileys)
[![npm downloads](https://img.shields.io/npm/dt/deffa-baileys?style=for-the-badge&label=DOWNLOADS&labelColor=0a0a12&color=7d3d6b)](https://www.npmjs.com/package/deffa-baileys)
[![node version](https://img.shields.io/badge/NODE-%E2%89%A518.0.0-0a0a12?style=for-the-badge&labelColor=0a0a12&color=c77b4f)](https://nodejs.org)
[![license](https://img.shields.io/badge/LICENSE-MIT-0a0a12?style=for-the-badge&labelColor=0a0a12&color=c77b4f)](#)
[![module type](https://img.shields.io/badge/MODULE-ESM-0a0a12?style=for-the-badge&labelColor=0a0a12&color=e8b76a)](#)
[![platforms](https://img.shields.io/badge/PLATFORMS-WA%20%7C%20TG%20%7C%20DC-0a0a12?style=for-the-badge&labelColor=0a0a12&color=e8b76a)](#)

</div>

<br>

> [!IMPORTANT]
> **Deffa Baileys** adalah library WhatsApp Web API yang kuat, stabil, dan ditingkatkan jauh dari basis aslinya — kini menyatu dengan engine Telegram Bot (`DeffaTelegraf`) **dan** Discord Client (`DeffaDiscord`) dalam satu package. Mendukung penuh protokol WhatsApp 2026 — *View-Once Text*, *View-Once Voice Note*, *Community Events*, *Group Message History*, *Channel Polling*, dan lainnya — dilengkapi plugin Brat/Bratvid bawaan serta fungsi eksklusif `testMessage` untuk menguji seluruh jenis pesan dalam satu panggilan. Dibangun khusus untuk Node.js dengan format ECMAScript Modules (ESM).

<br>

<div align="right">

<sub>◈ &nbsp;PETA NAVIGASI &nbsp;◈</sub>

</div>

<table width="100%">
<tr>
<td width="33%" valign="top" align="center">

### ⟡ WhatsApp

Engine inti, *enhanced* dari Baileys dengan dukungan protokol 2026 penuh — pesan interaktif, media, event komunitas, hingga sistem keamanan session.

`makeWASocket` · `useMultiFileAuthState` · `makeInMemoryStore`

</td>
<td width="33%" valign="top" align="center">

### ⟡ Telegram

`DeffaTelegraf` — engine bot Telegram lengkap dari long-polling dasar hingga Bot API 10.1: managed bots, guest mode, rich messages.

`DeffaTelegraf` · Scenes & Wizard · Inline Keyboard

</td>
<td width="34%" valign="top" align="center">

### ⟡ Discord

`DeffaDiscord` — client Discord dari nol, mendukung slash command, sharding, modals UI 2026, dan per-guild bot profile.

`DeffaDiscord` · Slash Commands · ShardManager

</td>
</tr>
</table>

<br>

<div align="center">

### ⟡ Mengapa deffa-baileys

</div>

| | |
|:---:|:---|
| **◆** | Satu dependency untuk **tiga platform messaging** sekaligus — tidak perlu lagi merangkai tiga library berbeda dengan API yang tidak konsisten |
| **◆** | Dukungan penuh **protokol WhatsApp 2026** — fitur-fitur terbaru yang belum tersedia di kebanyakan fork Baileys lain |
| **◆** | `testMessage` bawaan — **uji 16 jenis pesan** dalam satu panggilan fungsi, tanpa setup tambahan |
| **◆** | `sessionGuard` — kunci session ke IP server pertama, **proteksi nyata dari pencurian session** |
| **◆** | Plugin Brat/Bratvid **bawaan**, tidak perlu API key eksternal tambahan |
| **◆** | Tiga jenis Auth State (`multiFile`, `singleFile`, `sqlite`) — fleksibel untuk **semua skala deployment** |

<br>

<div align="center">

<hr>

### ✦ Daftar Isi

</div>

<table width="100%"><tr><td>


<code>01</code> &nbsp;<a href="#01-installation"><strong>Installation</strong></a><br>

<code>02</code> &nbsp;<a href="#02-quick-start"><strong>Quick Start</strong></a><br>

<code>03</code> &nbsp;<a href="#03-auth-state"><strong>Auth State</strong></a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-31-multi-file-auth-state">3.1 · Multi File Auth State</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-32-single-file-auth-state">3.2 · Single File Auth State</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-33-sqlite-auth-state">3.3 · SQLite Auth State</a><br>
<br>

<code>04</code> &nbsp;<a href="#04-makeinmemorystore"><strong>makeInMemoryStore</strong></a><br>

<details>
<summary><code>05</code> &nbsp;<a href="#05-sending-messages"><strong>Sending Messages</strong></a> &nbsp;<sub>(38 topik)</sub></summary>
<br>

&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-51-text-biasa">5.1 · Text Biasa</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-52-text-dengan-mention-user">5.2 · Text dengan Mention User</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-53-mention-all">5.3 · Mention All</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-54-reply-quote-message">5.4 · Reply / Quote Message</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-55-reaction">5.5 · Reaction</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-56-image">5.6 · Image</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-57-video">5.7 · Video</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-58-audio">5.8 · Audio</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-59-document">5.9 · Document</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-510-sticker">5.10 · Sticker</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-511-sticker-pack">5.11 · Sticker Pack</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-512-contact-vcard">5.12 · Contact / vCard</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-513-location">5.13 · Location</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-514-live-location">5.14 · Live Location</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-515-poll">5.15 · Poll</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-516-album">5.16 · Album</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-517-interactive-buttons-native-flow">5.17 · Interactive — Buttons (Native Flow)</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-518-interactive-list">5.18 · Interactive — List</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-519-interactive-image-header">5.19 · Interactive — Image Header</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-520-interactive-sebagai-template">5.20 · Interactive sebagai Template</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-521-hydrated-template-button">5.21 · Hydrated Template Button</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-522-view-once">5.22 · View Once</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-523-ephemeral">5.23 · Ephemeral</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-524-spoiler">5.24 · Spoiler</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-525-group-status">5.25 · Group Status</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-526-external-ad-reply">5.26 · External Ad Reply</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-527-forward-pesan">5.27 · Forward Pesan</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-528-pin-pesan">5.28 · Pin Pesan</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-529-raw-message">5.29 · Raw Message</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-530-group-invite-link">5.30 · Group Invite Link</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-531-event-dengan-reminder-fitur-wa-januari-2026">5.31 · Event dengan Reminder (fitur WA Januari 2026)</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-532-text-sticker-fitur-wa-januari-2026">5.32 · Text Sticker (fitur WA Januari 2026)</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-533-view-once-text-teks-sekali-lihat-wa-2026">5.33 · View-Once Text — Teks Sekali Lihat (WA 2026)</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-534-view-once-voice-note-audio-sekali-dengar-wa-2026">5.34 · View-Once Voice Note — Audio Sekali Dengar (WA 2026)</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-535-community-event-rsvp-virtual-meeting-call-wa-2026">5.35 · Community Event — RSVP & Virtual Meeting Call (WA 2026)</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-536-group-message-history-share-wa-2026">5.36 · Group Message History Share (WA 2026)</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-537-channel-poll-polling-di-saluranchannel-wa-2026">5.37 · Channel Poll — Polling di Saluran/Channel (WA 2026)</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-538-channel-voice-note-wa-2026">5.38 · Channel Voice Note (WA 2026)</a><br>

</details>
<br>

<code>06</code> &nbsp;<a href="#06-rich-response-messages"><strong>Rich Response Messages</strong></a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-61-text-rich">6.1 · Text Rich</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-62-code-block">6.2 · Code Block</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-63-table">6.3 · Table</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-64-inline-image">6.4 · Inline Image</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-65-inline-link-citation">6.5 · Inline Link / Citation</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-66-rich-response-kombinasi">6.6 · Rich Response Kombinasi</a><br>
<br>

<code>07</code> &nbsp;<a href="#07-group-management"><strong>Group Management</strong></a><br>

<code>08</code> &nbsp;<a href="#08-newsletter-channel"><strong>Newsletter / Channel</strong></a><br>

<code>09</code> &nbsp;<a href="#09-privacy-profile"><strong>Privacy & Profile</strong></a><br>

<code>10</code> &nbsp;<a href="#10-handling-events"><strong>Handling Events</strong></a><br>

<code>11</code> &nbsp;<a href="#11-deffa-plugins-brat-bratvid"><strong>Deffa Plugins : Brat & Bratvid</strong></a><br>

<code>12</code> &nbsp;<a href="#12-read-messages-presence"><strong>Read Messages & Presence</strong></a><br>

<code>13</code> &nbsp;<a href="#13-delete-edit-pesan"><strong>Delete / Edit Pesan</strong></a><br>

<code>14</code> &nbsp;<a href="#14-message-options-tambahan"><strong>Message Options Tambahan</strong></a><br>

<code>15</code> &nbsp;<a href="#15-browser-fingerprint-kiwi-uc-browser-dll"><strong>Browser Fingerprint (Kiwi, UC Browser, dll)</strong></a><br>

<details>
<summary><code>16</code> &nbsp;<a href="#16-telegram-bot-deffatelegraf"><strong>Telegram Bot (DeffaTelegraf)</strong></a> &nbsp;<sub>(17 topik)</sub></summary>
<br>

&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-161-setup-dasar-long-polling">16.1 · Setup Dasar & Long Polling</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-162-setup-via-webhook">16.2 · Setup via Webhook</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-163-inline-keyboard-reply-keyboard">16.3 · Inline Keyboard & Reply Keyboard</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-164-session-scenes-wizard">16.4 · Session, Scenes & Wizard</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-165-memanggil-deffa-plugins-bratbratvid-dari-bot-telegram">16.5 · Memanggil Deffa Plugins (Brat/Bratvid) dari Bot Telegram</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-166-cek-koneksi-bot-dengan-connecttelegram">16.6 · Cek Koneksi Bot dengan `connectTelegram`</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-167-bot-api-9394-sendmessagedraft-profile-photo-bot-button-style-icon">16.7 · Bot API 9.3–9.4 – sendMessageDraft, Profile Photo Bot, Button Style & Icon</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-168-bot-api-95-member-tags-date-time-entity">16.8 · Bot API 9.5 – Member Tags, Date-Time Entity</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-169-bot-api-96-managed-bots">16.9 · Bot API 9.6 – Managed Bots</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-1610-bot-api-100-guest-mode">16.10 · Bot API 10.0 – Guest Mode</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-1611-bot-api-100-bot-to-bot-communication">16.11 · Bot API 10.0 – Bot-to-Bot Communication</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-1612-bot-api-100-delete-reactions">16.12 · Bot API 10.0 – Delete Reactions</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-1613-bot-api-100-live-photo">16.13 · Bot API 10.0 – Live Photo</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-1614-bot-api-100-managed-bot-access-settings">16.14 · Bot API 10.0 – Managed Bot Access Settings</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-1615-bot-api-100-get-user-personal-chat-messages">16.15 · Bot API 10.0 – Get User Personal Chat Messages</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-1616-bot-api-101-join-request-queries">16.16 · Bot API 10.1 – Join Request Queries</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-1617-bot-api-101-rich-messages">16.17 · Bot API 10.1 – Rich Messages</a><br>

</details>
<br>

<code>17</code> &nbsp;<a href="#17-discord-bot-deffadiscord"><strong>Discord Bot (DeffaDiscord)</strong></a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-171-setup-dasar-login-bot">17.1 · Setup Dasar & Login Bot</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-172-menangani-event-pesan">17.2 · Menangani Event & Pesan</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-173-slash-commands-application-commands">17.3 · Slash Commands (Application Commands)</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-174-embed-file-upload">17.4 · Embed & File Upload</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-175-sharding-dengan-shardmanager">17.5 · Sharding dengan ShardManager</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-176-cek-koneksi-bot-dengan-connectdiscord">17.6 · Cek Koneksi Bot dengan `connectDiscord`</a><br>
<br>

<code>18</code> &nbsp;<a href="#18-testmessage-tes-semua-jenis-pesan"><strong>testMessage : Tes Semua Jenis Pesan</strong></a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-cara-import-penggunaan">Cara import & penggunaan</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-signature-lengkap">Signature lengkap</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-yang-diuji-16-jenis-pesan">Yang diuji (16 jenis pesan)</a><br>
<br>

<details>
<summary><code>19</code> &nbsp;<a href="#19-sessionguard-proteksi-session-dari-pencurian"><strong>sessionGuard : Proteksi Session dari Pencurian</strong></a> &nbsp;<sub>(7 topik)</sub></summary>
<br>

&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-cara-import">Cara Import</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-penggunaan-dasar">Penggunaan Dasar</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-opsi-lengkap">Opsi Lengkap</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-cara-kerja">Cara Kerja</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-cek-status-guard">Cek Status Guard</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-reset-guard-pindah-server">Reset Guard (Pindah Server)</a><br>
&nbsp;&nbsp;&nbsp;&nbsp;◦ <a href="#-contoh-output-log">Contoh Output Log</a><br>

</details>
<br>


</td></tr></table>


<br>

<br>

<div align="right"><sub>§ SECTION 01</sub></div>

## 01 — Installation

<hr>


Anda dapat menginstal package ini menggunakan manajer paket Node.js favorit Anda. Package ini membutuhkan Node.js versi 20 ke atas.
```bash
npm install deffa-baileys

```
```bash
yarn add deffa-baileys

```
```bash
pnpm add deffa-baileys

```
Untuk memaksimalkan semua fitur yang ada, terutama fitur manipulasi media, integrasi database, dan sistem preview, Anda disarankan untuk menginstal peer dependencies opsional berikut ini secara bersamaan.
```bash
npm install sharp jimp @napi-rs/image audio-decode better-sqlite3 link-preview-js

```


<br>

<div align="right"><sub>§ SECTION 02</sub></div>

## 02 — Quick Start

<hr>


Berikut adalah contoh lengkap cara melakukan inisialisasi koneksi ke WhatsApp. Kode ini menangani pembuatan socket, integrasi kredensial login, dan logika rekoneksi otomatis. Terdapat dua metode login: menggunakan Pairing Code atau QR Code.
```js
import pino from 'pino'
import { makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, Browsers } from 'deffa-baileys'

async function connectToWhatsApp() {
  const logger = pino({ level: 'silent' })
  
  const { state, saveCreds } = await useMultiFileAuthState('./session-auth')
  const { version, isLatest } = await fetchLatestBaileysVersion()
  
  const usePairingCode = true
  const phoneNumber = '6281234567890'

  const sock = makeWASocket({
    version: version,
    logger: logger,
    printQRInTerminal: !usePairingCode,
    auth: state,
    browser: Browsers.ubuntu('Chrome'), // bisa juga Browsers.kiwi(), Browsers.ucBrowser(), dll — lihat Bab 15
    markOnlineOnConnect: true,
    generateHighQualityLinkPreview: true,
    syncFullHistory: false
  })

  if (usePairingCode && !sock.authState.creds.registered) {
    const code = await sock.requestPairingCode(phoneNumber)
    console.log(`Pairing Code Anda: ${code}`)
  }

  sock.ev.on('creds.update', saveCreds)

  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update
    
    if (connection === 'close') {
      const shouldReconnect = lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut
      
      if (shouldReconnect) {
        connectToWhatsApp()
      } else {
        console.log('Koneksi terputus dan sesi telah dihapus.')
      }
    } else if (connection === 'open') {
      console.log('Koneksi berhasil dibuka dan WhatsApp siap digunakan.')
    }
  })

  return sock
}

connectToWhatsApp()

```


<br>

<div align="right"><sub>§ SECTION 03</sub></div>

## 03 — Auth State

<hr>


deffa-baileys menyediakan tiga jenis mekanisme penyimpanan status autentikasi yang dapat Anda pilih sesuai dengan infrastruktur aplikasi Anda.

#### ◈ 3.1 · Multi File Auth State

Menyimpan data kredensial dan keys dalam sebuah direktori yang berisi banyak file JSON. Sangat stabil dan direkomendasikan untuk penggunaan standar.
```js
import { useMultiFileAuthState } from 'deffa-baileys'

async function setupAuth() {
  const { state, saveCreds } = await useMultiFileAuthState('./auth_info_baileys')
  return { state, saveCreds }
}

```

#### ◈ 3.2 · Single File Auth State

Menyimpan seluruh data kredensial ke dalam satu file JSON tunggal. Mudah dipindahkan namun bisa menjadi sangat besar seiring waktu.
```js
import { useSingleFileAuthState } from 'deffa-baileys'

async function setupAuth() {
  const { state, saveCreds } = await useSingleFileAuthState('./creds.json')
  return { state, saveCreds }
}

```

#### ◈ 3.3 · SQLite Auth State

Menyimpan data autentikasi ke dalam database SQLite. Sangat cepat, hemat memori, dan sangat disarankan untuk produksi berskala besar.
```js
import { useSqliteAuthState } from 'deffa-baileys'

async function setupAuth() {
  // Membutuhkan peer dependency: npm install better-sqlite3
  const { state, saveCreds } = await useSqliteAuthState({ dbPath: './auth_database.db' })
  return { state, saveCreds }
}

```


<br>

<div align="right"><sub>§ SECTION 04</sub></div>

## 04 — makeInMemoryStore

<hr>


makeInMemoryStore adalah sistem penyimpanan data sesi dalam memori yang ditingkatkan. Menyediakan caching cerdas untuk pesan, kontak, dan metadata grup.
Konfigurasi dan implementasi lengkap:
```js
import { makeInMemoryStore } from 'deffa-baileys'
import pino from 'pino'

const logger = pino({ level: 'silent' })

const store = makeInMemoryStore({
  logger: logger,
  maxMessages: Infinity,
  presenceTTL: 300000
})

function setupStore(sock) {
  store.bind(sock.ev)

  store.on('onMessage', (message) => {
    console.log(message)
  })

  store.on('onPresence', (presence) => {
    console.log(presence)
  })

  store.on('onChat', (chat) => {
    console.log(chat)
  })

  setInterval(() => {
    store.writeToFile('./store_backup.json')
  }, 10000)
}

async function useStoreFeatures(sock, jid, messageId) {
  const stats = store.getStats()
  
  const searchResults = await store.searchMessages('halo dunia', jid)
  
  const allMessages = await store.loadAllMessages(jid)
  
  const lastMessages = await store.loadLastMessages(jid, 20)
  
  const allGroupMetadata = await store.fetchAllGroupMetadata(sock)
  
  const isRead = store.isMessageRead(jid, messageId)
  
  store.readFromFile('./store_backup.json')
  
  store.clear()
}

```


<br>

<div align="right"><sub>§ SECTION 05</sub></div>

## 05 — Sending Messages

<hr>


Seksi ini memuat seluruh metode dan struktur pengiriman pesan menggunakan library ini.

#### ◈ 5.1 · Text Biasa

```js
async function sendText(sock, jid) {
  await sock.sendMessage(jid, { 
    text: 'Halo, ini adalah pesan teks biasa.' 
  })
}

```

#### ◈ 5.2 · Text dengan Mention User

```js
async function sendMention(sock, jid) {
  await sock.sendMessage(jid, {
    text: 'Halo @6281234567890, selamat datang di grup!',
    mentions: ['6281234567890@s.whatsapp.net']
  })
}

```

#### ◈ 5.3 · Mention All

```js
async function sendMentionAll(sock, jid) {
  const meta = await sock.groupMetadata(jid)
  await sock.sendMessage(jid, {
    text: 'Pengumuman untuk seluruh anggota grup!',
    mentionAll: true,
    groupMetadata: meta
  })
}

```

#### ◈ 5.4 · Reply / Quote Message

```js
async function sendReply(sock, jid, quotedMessage) {
  await sock.sendMessage(jid, {
    text: 'Ini adalah balasan dari pesan sebelumnya.',
    quote: quotedMessage
  })
}

```

#### ◈ 5.5 · Reaction

```js
async function sendReaction(sock, jid, messageKey) {
  await sock.sendMessage(jid, {
    react: { 
      text: '🔥', 
      key: messageKey 
    }
  })
}

```

#### ◈ 5.6 · Image

```js
import fs from 'fs'

async function sendImages(sock, jid) {
  await sock.sendMessage(jid, {
    image: { url: 'https://domain.com/gambar-bagus.jpg' },
    caption: 'Ini adalah gambar yang dikirim dari URL'
  })

  const bufferImage = fs.readFileSync('./lokal_foto.jpg')
  await sock.sendMessage(jid, {
    image: bufferImage,
    caption: 'Ini adalah gambar yang dikirim dari buffer lokal'
  })
}

```

#### ◈ 5.7 · Video

```js
async function sendVideo(sock, jid) {
  await sock.sendMessage(jid, {
    video: { url: 'https://domain.com/video-keren.mp4' },
    caption: 'Deskripsi untuk video ini',
    gifPlayback: false
  })
}

```

#### ◈ 5.8 · Audio

```js
async function sendAudio(sock, jid) {
  await sock.sendMessage(jid, {
    audio: { url: 'https://domain.com/voice-note.ogg' },
    mimetype: 'audio/ogg; codecs=opus',
    ptt: true
  })

  await sock.sendMessage(jid, {
    audio: { url: 'https://domain.com/musik.mp3' },
    mimetype: 'audio/mp4'
  })
}

```

#### ◈ 5.9 · Document

```js
async function sendDocument(sock, jid) {
  await sock.sendMessage(jid, {
    document: { url: 'https://domain.com/laporan-tahunan.pdf' },
    mimetype: 'application/pdf',
    fileName: 'laporan-tahunan-2026.pdf',
    caption: 'Berikut adalah file dokumen yang diminta'
  })
}

```

#### ◈ 5.10 · Sticker

```js
import fs from 'fs'

async function sendSticker(sock, jid) {
  const stickerBuffer = fs.readFileSync('./animasi_sticker.webp')
  await sock.sendMessage(jid, {
    sticker: stickerBuffer
  })
}

```

#### ◈ 5.11 · Sticker Pack

```js
import fs from 'fs'

async function sendStickerPack(sock, jid) {
  const localSticker = fs.readFileSync('./sticker_dua.webp')
  await sock.sendMessage(jid, {
    stickerPack: {
      name: 'Koleksi Sticker Eksklusif',
      publisher: 'Deffa',
      cover: { url: 'https://domain.com/cover-pack.png' },
      stickers: [
        { data: { url: 'https://domain.com/sticker_satu.webp' }, emojis: ['😂', '🤣'] },
        { data: localSticker, emojis: ['🔥', '✨'] }
      ]
    }
  })
}

```

#### ◈ 5.12 · Contact / vCard

```js
async function sendContact(sock, jid) {
  const vcardString = 'BEGIN:VCARD\nVERSION:3.0\nFN:Deffa\nTEL;type=CELL;waid=6281234567890:+62 812 3456 7890\nEND:VCARD'
  
  await sock.sendMessage(jid, {
    contacts: {
      displayName: 'Deffa Contact',
      contacts: [{
        vcard: vcardString
      }]
    }
  })
}

```

#### ◈ 5.13 · Location

```js
async function sendLocation(sock, jid) {
  await sock.sendMessage(jid, {
    location: {
      degreesLatitude: -6.2087634,
      degreesLongitude: 106.845599,
      name: 'Monumen Nasional',
      address: 'Gambir, Jakarta Pusat, DKI Jakarta, Indonesia'
    }
  })
}

```

#### ◈ 5.14 · Live Location

```js
import { generateWAMessageFromContent } from 'deffa-baileys'

async function sendLiveLocation(sock, jid) {
  const messageContent = {
    locationMessage: {
      degreesLatitude: -6.2087634,
      degreesLongitude: 106.845599,
      name: 'Lokasi Terkini',
      address: 'Berbagi Lokasi Langsung',
      liveLocation: {
        degreesLatitude: -6.2087634,
        degreesLongitude: 106.845599,
        accuracyInMeters: 10,
        speedInMps: 0,
        degreesClockwiseFromMagneticNorth: 0,
        caption: 'Saya sedang membagikan lokasi langsung',
        sequenceNumber: 1,
        timeOffset: 3600
      },
      contextInfo: {
        forwardingScore: 1,
        isForwarded: false
      }
    }
  }

  const generatedMessage = await generateWAMessageFromContent(
    jid,
    messageContent,
    { userJid: sock.user.id }
  )

  await sock.relayMessage(jid, generatedMessage.message, {
    messageId: generatedMessage.key.id
  })
}

```

#### ◈ 5.15 · Poll

```js
async function sendPoll(sock, jid) {
  await sock.sendMessage(jid, {
    poll: {
      name: 'Apa bahasa pemrograman favorit Anda untuk backend?',
      values: ['Node.js', 'Python', 'Go', 'Rust'],
      selectableCount: 1
    }
  })
}

```

#### ◈ 5.16 · Album

```js
import fs from 'fs'

async function sendAlbum(sock, jid) {
  const localImage = fs.readFileSync('./foto_galeri.jpg')
  
  await sock.sendMessage(jid, {
    album: [
      { image: { url: 'https://domain.com/foto_satu.jpg' }, caption: 'Dokumentasi Bagian 1' },
      { image: localImage, caption: 'Dokumentasi Bagian 2' },
      { video: { url: 'https://domain.com/video_dokumentasi.mp4' }, caption: 'Video Rekaman' }
    ]
  })
}

```

#### ◈ 5.17 · Interactive — Buttons (Native Flow)

```js
import { generateWAMessageFromContent } from 'deffa-baileys'

async function sendInteractiveButtons(sock, jid) {
  const messageContent = {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: {
            hasMediaAttachment: false
          },
          body: {
            text: 'Silakan pilih salah satu opsi di bawah ini untuk melanjutkan:'
          },
          footer: {
            text: 'deffa-baileys'
          },
          nativeFlowMessage: {
            buttons: [
              {
                name: 'quick_reply',
                buttonParamsJson: JSON.stringify({
                  display_text: '✅ Konfirmasi Pesanan',
                  id: 'btn_confirm_order'
                })
              },
              {
                name: 'cta_url',
                buttonParamsJson: JSON.stringify({
                  display_text: '🌐 Kunjungi Website Resmi',
                  url: 'https://example.com',
                  merchant_url: 'https://example.com'
                })
              },
              {
                name: 'cta_copy',
                buttonParamsJson: JSON.stringify({
                  display_text: '📋 Salin Kode Promo',
                  copy_code: 'DEFFA2026PROMO'
                })
              },
              {
                name: 'cta_call',
                buttonParamsJson: JSON.stringify({
                  display_text: '📞 Hubungi Customer Service',
                  phone_number: '+6281234567890'
                })
              }
            ],
            messageVersion: 1
          }
        }
      }
    }
  }

  const generatedMessage = await generateWAMessageFromContent(
    jid,
    messageContent,
    { userJid: sock.user.id }
  )

  await sock.relayMessage(jid, generatedMessage.message, {
    messageId: generatedMessage.key.id
  })
}

```

#### ◈ 5.18 · Interactive — List

```js
import { generateWAMessageFromContent } from 'deffa-baileys'

async function sendInteractiveList(sock, jid) {
  const messageContent = {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: 'Berikut adalah katalog produk kami. Silakan pilih kategori yang Anda inginkan:'
          },
          footer: {
            text: 'deffa-baileys'
          },
          nativeFlowMessage: {
            buttons: [
              {
                name: 'single_select',
                buttonParamsJson: JSON.stringify({
                  title: '📋 Buka Katalog Menu',
                  sections: [
                    {
                      title: '🍔 Makanan Utama',
                      rows: [
                        {
                          id: 'menu_nasi_goreng',
                          title: 'Nasi Goreng Spesial',
                          description: 'Rp 25.000 - Ekstra Telur'
                        },
                        {
                          id: 'menu_mie_goreng',
                          title: 'Mie Goreng Seafood',
                          description: 'Rp 30.000 - Udang & Cumi'
                        }
                      ]
                    },
                    {
                      title: '🥤 Minuman Segar',
                      rows: [
                        {
                          id: 'menu_es_teh',
                          title: 'Es Teh Manis',
                          description: 'Rp 5.000 - Gula Asli'
                        },
                        {
                          id: 'menu_jus_jeruk',
                          title: 'Jus Jeruk Peras',
                          description: 'Rp 12.000 - Jeruk Murni'
                        }
                      ]
                    }
                  ]
                })
              }
            ],
            messageVersion: 1
          }
        }
      }
    }
  }

  const generatedMessage = await generateWAMessageFromContent(
    jid,
    messageContent,
    { userJid: sock.user.id }
  )

  await sock.relayMessage(jid, generatedMessage.message, {
    messageId: generatedMessage.key.id
  })
}

```

#### ◈ 5.19 · Interactive — Image Header

```js
async function sendInteractiveImageHeader(sock, jid) {
  const imagePreparation = await sock.prepareMessage(jid, {
    image: { url: 'https://domain.com/banner-promo.jpg' }
  })
  
  await sock.sendMessage(jid, {
    interactive: {
      type: 'native_flow',
      header: {
        hasMediaAttachment: true,
        imageMessage: imagePreparation.message.imageMessage
      },
      body: { text: 'Dapatkan diskon 50% untuk pembelian pertama Anda hari ini!' },
      footer: { text: 'deffa-baileys' },
      nativeFlowMessage: {
        buttons: [
          { 
            name: 'quick_reply', 
            buttonParamsJson: JSON.stringify({ 
              display_text: '🛒 Klaim Diskon & Beli Sekarang', 
              id: 'claim_discount_buy' 
            }) 
          }
        ]
      }
    }
  })
}

```

#### ◈ 5.20 · Interactive sebagai Template


> [!IMPORTANT]
> Opsi `interactiveAsTemplate` membungkus pesan jadi `templateMessage`, format legacy yang **tidak tampil di akun WhatsApp personal** (lihat catatan di 5.21). Hanya gunakan ini jika tujuan target adalah WhatsApp Business Cloud API resmi dengan template approved. Untuk bot/personal account biasa, kirim langsung tanpa flag `interactiveAsTemplate` (lihat 5.17).

```js
async function sendInteractiveAsTemplate(sock, jid) {
  await sock.sendMessage(jid, {
    interactive: {
      type: 'native_flow',
      body: { text: 'Pesan interaktif ini dikirim menggunakan format bungkus template.' },
      footer: { text: 'deffa-baileys' },
      nativeFlowMessage: {
        buttons: [
          {
            name: 'quick_reply',
            buttonParamsJson: JSON.stringify({
              display_text: 'Tampilkan Detail',
              id: 'show_details'
            })
          }
        ]
      }
    },
    interactiveAsTemplate: true
  })
}

```

#### ◈ 5.21 · Hydrated Template Button


> [!WARNING]
> **PENTING — `templateMessage`/`buttonsMessage` (legacy) SUDAH TIDAK WORK di akun WhatsApp personal.** Berdasarkan dokumentasi resmi WhatsApp (developers.facebook.com), button & template format lama ini hanya didukung lewat **WhatsApp Business Cloud API** dengan template yang sudah di-approve Meta — bukan lewat koneksi personal/MD seperti Baileys. Mengirim `templateMessage` mentah dari akun biasa akan terkirim tapi **buttonnya tidak muncul / pesan tidak tampil** di sisi penerima (silent fail). Gunakan **5.17 Native Flow** sebagai gantinya — itu yang dipakai WA app resmi sekarang untuk personal account.

Helper `templateButtons` di bawah ini tetap disediakan untuk kompatibilitas kode lama, tapi secara internal **otomatis di-convert** memakai struktur yang sama dengan native flow agar tetap bisa tampil:

```js
import { generateWAMessageFromContent, proto } from 'deffa-baileys'

// ✅ CARA YANG BENAR-BENAR WORK — pakai nativeFlow (lihat juga 5.17)
async function sendWorkingButtons(sock, jid) {
  await sock.sendMessage(jid, {
    text: 'Pilih salah satu opsi di bawah ini:',
    footer: 'deffa-baileys',
    nativeFlow: {
      buttons: [
        { url: 'https://example.com', text: '🌐 Buka Situs Web' },
        { call: '+6281234567890', text: '📞 Hubungi Kami' },
        { id: 'btn_agree_terms', text: '✅ Setuju' }
      ]
    }
  })
}

// ⚠️ Legacy hydratedTemplate — disediakan untuk backward-compat, TIDAK direkomendasikan untuk fitur baru
async function sendHydratedTemplate(sock, jid) {
  await sock.sendMessage(jid, {
    templateButtons: [
      { url: 'https://example.com', text: '🌐 Buka Situs Web' },
      { call: '+6281234567890', text: '📞 Hubungi Kami' },
      { id: 'btn_agree_terms', text: '✅ Setuju' }
    ],
    text: 'Ini adalah teks konten utama untuk pesan jenis hydrated template.',
    footer: 'Informasi Footer Tambahan'
  })
}

```

#### ◈ 5.22 · View Once

```js
async function sendViewOnce(sock, jid) {
  await sock.sendMessage(jid, {
    image: { url: 'https://domain.com/rahasia.jpg' },
    caption: 'Dokumen ini hanya dapat dilihat satu kali.',
    viewOnce: true
  })

  await sock.sendMessage(jid, {
    video: { url: 'https://domain.com/video-rahasia.mp4' },
    viewOnceV2: true
  })
}

```

#### ◈ 5.23 · Ephemeral

```js
async function sendEphemeral(sock, jid) {
  await sock.sendMessage(jid, {
    text: 'Pesan ini bersifat rahasia dan akan terhapus otomatis secara permanen dalam waktu 24 jam.',
    ephemeral: true
  }, { 
    ephemeralExpiration: 86400 
  })
}

```

#### ◈ 5.24 · Spoiler

```js
async function sendSpoiler(sock, jid) {
  await sock.sendMessage(jid, {
    image: { url: 'https://domain.com/kejutan.jpg' },
    caption: 'Ini adalah gambar kejutan yang disembunyikan di balik spoiler!',
    spoiler: true
  })
}

```

#### ◈ 5.25 · Group Status

```js
async function sendGroupStatus(sock, jid) {
  await sock.sendMessage(jid, {
    text: 'Pengumuman penting telah ditambahkan ke status grup.',
    groupStatus: true
  })
}

```

#### ◈ 5.26 · External Ad Reply


> [!IMPORTANT]
> **Catatan penting:** `externalAdReply` di shorthand `sock.sendMessage()` butuh field `url` (string, dipakai untuk `mediaUrl`/`sourceUrl`/`thumbnailUrl` sekaligus) dan `thumbnail` (Buffer JPEG, bukan `thumbnailUrl` string) — bukan `thumbnailUrl`/`sourceUrl` terpisah. Tanpa `thumbnail` (Buffer), preview card sering tidak muncul karena WA app butuh gambar sudah ter-embed, tidak bisa fetch dari URL eksternal saat render. Sertakan juga `forwardingScore` + `isForwarded: true` — pola ini paling konsisten membuat card-nya muncul.
>
> [!WARNING]
> **Limitasi yang tidak bisa diperbaiki dari sisi kode:** `externalAdReply` murni metadata dekorasi di `contextInfo`, bukan tipe pesan sendiri — apakah card-nya dirender atau tidak itu **keputusan WhatsApp app di sisi penerima**, tergantung platform (Android/iOS) dan versi app. Ini dikonfirmasi sebagai known issue di banyak fork Baileys (lihat issue [#51](https://github.com/WhiskeySockets/Baileys/issues/51) dan [#75](https://github.com/WhiskeySockets/Baileys/issues/75) di repo WhiskeySockets/Baileys). Gejala umum: pengirim/linked-device sendiri melihat card lengkap (karena disinkron via WA Web/Desktop yang versinya lebih baru), tapi penerima dengan WA app versi/platform berbeda **hanya melihat teks biasa tanpa card**. Tidak ada konfigurasi proto yang menjamin tampil 100% di semua device — anggap fitur ini sebagai *progressive enhancement*, bukan sesuatu yang reliable untuk dipakai sebagai fitur utama bot.

```js
import fs from 'fs'

async function sendExternalAdReply(sock, jid) {
  await sock.sendMessage(jid, {
    text: 'Silakan periksa tautan referensi berikut ini untuk informasi lebih lanjut!',
    contextInfo: {
      forwardingScore: 100,
      isForwarded: true
    },
    externalAdReply: {
      title: 'Artikel Referensi Lengkap',
      body: 'Membahas teknologi terbaru dan perkembangannya di masa depan',
      thumbnail: fs.readFileSync('./thumbnail-artikel.jpg'), // wajib Buffer, bukan URL
      url: 'https://example.com/artikel-lengkap', // dipakai untuk mediaUrl & sourceUrl
      mediaType: 1, // 1 = tanpa media spesifik, 2 = image, 3 = video
      renderLargerThumbnail: true,
      showAdAttribution: true // default sudah true di lib, eksplisit di sini untuk kejelasan
    }
  })
}

// Alternatif: raw style sesuai proto asli, kalau butuh kontrol penuh tanpa shorthand
async function sendExternalAdReplyRaw(sock, jid) {
  await sock.sendMessage(jid, {
    text: 'Versi raw, langsung isi contextInfo.externalAdReply.',
    contextInfo: {
      forwardingScore: 100,
      isForwarded: true,
      externalAdReply: {
        title: 'Artikel Referensi Lengkap',
        body: 'Membahas teknologi terbaru',
        thumbnail: fs.readFileSync('./thumbnail-artikel.jpg'),
        thumbnailUrl: 'https://example.com/thumbnail-artikel.jpg',
        sourceUrl: 'https://example.com/artikel-lengkap',
        mediaType: 1,
        showAdAttribution: true
      }
    }
  })
}

```

#### ◈ 5.27 · Forward Pesan

```js
async function sendForwardMessage(sock, jid, messageToForward) {
  await sock.sendMessage(jid, {
    forward: messageToForward
  })
}

```

#### ◈ 5.28 · Pin Pesan

```js
async function pinMessageInChat(sock, jid, messageKey) {
  await sock.sendMessage(jid, {
    pin: { 
      messageKey: messageKey, 
      type: 1 
    }
  })
}

```

#### ◈ 5.29 · Raw Message

```js
async function sendRawProtoMessage(sock, jid) {
  await sock.sendMessage(jid, {
    text: 'Pengujian pengiriman struktur raw protocol buffer langsung.',
    raw: true
  })
}

```

#### ◈ 5.30 · Group Invite Link

```js
async function sendGroupInvite(sock, jid) {
  const currentTime = Math.round(new Date().getTime() / 1000)
  const expirationTime = currentTime + 86400

  await sock.sendMessage(jid, {
    groupInviteMessage: {
      inviteCode: 'AbCdEfGhIjKlMnOp',
      inviteExpiration: expirationTime,
      groupJid: '1234567890-0987654321@g.us',
      groupName: 'Komunitas Pengembang Nusantara',
      caption: 'Mari bergabung dengan grup diskusi kami untuk bertukar wawasan dan pengalaman!'
    }
  })
}

```

#### ◈ 5.31 · Event dengan Reminder (fitur WA Januari 2026)

WhatsApp resmi menambahkan "Event Reminders" pada update grup chat 7 Januari 2026 — pembuat event kini bisa menyetel pengingat otomatis untuk semua undangan sebelum acara dimulai. Cukup tambahkan `reminderOffsetSec` (dalam detik) ke object `event` yang sudah ada di deffa-baileys.
```js
async function sendEventWithReminder(sock, jid) {
  await sock.sendMessage(jid, {
    event: {
      name: 'Nonton Bareng Final Liga',
      description: 'Kumpul bareng nonton final di basecamp ya, jangan telat!',
      startDate: new Date('2026-08-01T20:00:00+07:00'),
      endDate: new Date('2026-08-01T23:00:00+07:00'),
      location: {
        degreesLatitude: -7.983908,
        degreesLongitude: 112.621391,
        name: 'Basecamp Komunitas, Jl. Mawar No. 5'
      },
      extraGuestsAllowed: true,
      reminderOffsetSec: 3600
    }
  })
}

```
> [!NOTE]
> Catatan: jika `reminderOffsetSec` diisi, deffa-baileys otomatis menyetel `hasReminder: true` pada `eventMessage`. Tanpa parameter ini, event tetap terkirim normal tanpa pengingat — perilaku ini sepenuhnya backward-compatible dengan kode event lama Anda.

#### ◈ 5.32 · Text Sticker (fitur WA Januari 2026)

WhatsApp juga merilis "Text Stickers" pada update yang sama — mengubah kata apa pun menjadi stiker hanya dengan mengetik di Sticker Search. Karena fitur aslinya murni rendering sisi klien (tanpa endpoint protokol khusus), deffa-baileys menyediakan generator `renderTextSticker()` bawaan yang merender teks menjadi stiker WebP secara lokal (memakai `canvas` + `sharp`/`@napi-rs/image`, tanpa API pihak ketiga) lalu langsung bisa dikirim seperti stiker biasa.
```js
import { renderTextSticker } from 'deffa-baileys'

async function sendTextSticker(sock, jid) {
  const stickerBuffer = await renderTextSticker('MANTAP', {
    backgroundColor: '#FFD60A',
    textColor: '#1A1A1A',
    fontWeight: 'bold'
  })

  await sock.sendMessage(jid, {
    sticker: stickerBuffer
  })
}

```
> [!NOTE]
> Beda dengan plugin `attp`/`ttp` (Bab 11) yang memanggil API eksternal untuk efek teks bergerak/glow, `renderTextSticker` murni lokal — tidak butuh koneksi internet maupun API key, cocok untuk stiker teks polos yang cepat dan privat.

---


#### ◈ 5.33 · View-Once Text — Teks Sekali Lihat (WA 2026)


Pertengahan 2026, WhatsApp merilis kemampuan mengirim **teks murni** sebagai view-once: pesan hanya bisa dibaca satu kali, setelah itu otomatis dihapus. Penerima tidak bisa menyalin, meneruskan, atau merekam layarnya. Di Baileys, ini bekerja dengan membungkus `extendedTextMessage` ke dalam `viewOnceMessageV2` via `generateWAMessageFromContent`.

```js
import { generateWAMessageFromContent, proto } from 'deffa-baileys'

async function sendViewOnceText(sock, jid) {
  // Cara 1 — shorthand flag (dicoba dulu, support tergantung versi WA penerima)
  await sock.sendMessage(jid, {
    text: 'Pesan rahasia ini hanya bisa dibaca satu kali. 🔒',
    viewOnce: true,
  })

  // Cara 2 — raw proto wrap (lebih kompatibel dengan WA build terbaru)
  const innerMsg = generateWAMessageFromContent(jid, {
    extendedTextMessage: {
      text: 'Isi pesan rahasia yang hanya bisa dilihat sekali.',
    },
  }, {})

  const viewOnceMsg = generateWAMessageFromContent(jid, {
    viewOnceMessageV2: {
      message: innerMsg.message,
    },
  }, { userJid: sock.user.id })

  await sock.relayMessage(jid, viewOnceMsg.message, { messageId: viewOnceMsg.key.id })
}
```

> [!NOTE]
> **Catatan:** Pastikan WA penerima sudah versi yang mendukung view-once teks (2025.8+). Pada versi lebih lama pesan akan tampil sebagai teks biasa.

---


#### ◈ 5.34 · View-Once Voice Note — Audio Sekali Dengar (WA 2026)


Voice note (PTT) kini resmi bisa dikirim sebagai view-once: audio hanya bisa diputar satu kali lalu hilang. Cocok untuk kirim kode OTP audio atau pesan suara rahasia.

```js
async function sendViewOnceVoice(sock, jid) {
  // View-Once Voice Note (PTT sekali dengar)
  await sock.sendMessage(jid, {
    audio: { url: './voice-rahasia.ogg' },
    mimetype: 'audio/ogg; codecs=opus',
    ptt: true,          // wajib true agar muncul sebagai voice note
    viewOnce: true,     // sekali dengar, lalu terhapus otomatis
  })

  // Dengan waveform custom (opsional, memperindah tampilan)
  await sock.sendMessage(jid, {
    audio: { url: './voice-rahasia.ogg' },
    mimetype: 'audio/ogg; codecs=opus',
    ptt: true,
    viewOnce: true,
    waveform: [0, 15, 42, 80, 110, 95, 70, 50, 30, 10], // array amplitudo 0-100
  })
}
```

> [!NOTE]
> **Catatan:** `ptt: true` wajib ada — tanpa itu audio dikirim sebagai musik biasa dan flag `viewOnce` tidak akan aktif dengan benar.

---


#### ◈ 5.35 · Community Event — RSVP & Virtual Meeting Call (WA 2026)


WhatsApp 2026 memperluas fitur event di **Community** dengan dukungan RSVP tracking dan link virtual meeting langsung di dalam pesan event. Berbeda dari 5.31 (event grup biasa dengan reminder), fitur ini spesifik untuk:

| Kapabilitas | Penjelasan |
|:---|:---|
| **Virtual call** | Audio/video link tertanam langsung di pesan event |
| **RSVP** | Bot mendeteksi siapa yang menerima/menolak via `messages.upsert` bertipe `eventResponseMessage` |
| **extraGuestsAllowed** | Anggota grup bisa mengajak tamu di luar grup ke event |


```js
// Kirim event virtual meeting di community/grup
async function sendVirtualMeetingEvent(sock, groupJid) {
  await sock.sendMessage(groupJid, {
    event: {
      isCancelled:        false,
      name:               'Deffa Dev — Sprint Review Q4',
      description:        'Review sprint bulanan + demo fitur baru. Join via WA Call.',
      location: {
        // Untuk virtual meeting: isi name dengan link meeting, lat/long bisa 0
        degreesLatitude:  0,
        degreesLongitude: 0,
        name:             'Google Meet — meet.google.com/abc-defg-hij',
      },
      call:               'video',  // 'audio' = voice call, 'video' = video call -- butuh options.getCallLink saat dipanggil dari generateWAMessageFromContent agar joinLink terisi
      startDate:          new Date('2026-10-10T15:00:00+07:00'), // wajib objek Date, bukan unix timestamp
      endDate:            new Date('2026-10-10T16:30:00+07:00'),
      extraGuestsAllowed: false,    // false = hanya member grup yang bisa join
    },
  })
}

// Handle respons RSVP dari peserta
sock.ev.on('messages.upsert', ({ messages }) => {
  for (const msg of messages) {
    const rsvp = msg.message?.eventResponseMessage
    if (!rsvp) continue

    // rsvp.response: 1 = GOING, 2 = NOT GOING
    const status  = rsvp.response === 1 ? 'HADIR ✅' : 'TIDAK HADIR ❌'
    const eventId = rsvp.eventCreationMessageKey?.id
    const voter   = msg.key.participant || msg.key.remoteJid

    console.log(`RSVP dari ${voter}: ${status} (event ID: ${eventId})`)
  }
})
```

> [!NOTE]
> **Perbedaan dari 5.31:** Section 5.31 fokus pada event grup biasa dengan `reminderOffsetSec` (pengingat waktu). Section ini fokus pada **virtual meeting** + **RSVP response handling** — dua kemampuan berbeda yang hadir bersamaan di WA 2026.

---


#### ◈ 5.36 · Group Message History Share (WA 2026)


WhatsApp merilis fitur ini Februari 2026: saat member baru ditambahkan, admin/member bisa membagikan 25–100 pesan terakhir ke member tersebut lewat prompt di UI client resmi. Fitur ini murni **client-side** (ditangani oleh aplikasi WA, bukan dikirim sebagai pesan protokol terpisah) dan field internalnya (`GroupHistoryBundleInfo`) ditandai `deprecated` di proto WA sendiri — sehingga **belum ada endpoint resmi** untuk men-trigger ini lewat Baileys/deffa-baileys.

Yang **sudah bisa** dilakukan lewat lib ini sekarang:
```js
// Cek setting grup yang berkaitan (member add mode, announce, dst)
async function checkGroupSettings(sock, groupJid) {
  const meta = await sock.groupMetadata(groupJid)
  console.log('Group metadata:', {
    name:          meta.subject,
    memberAddMode: meta.memberAddMode, // 'all_member_add' | 'admin_add'
    announce:      meta.announce,      // true = hanya admin bisa kirim pesan
    participants:  meta.participants.length,
  })
  return meta
}

// Alternatif manual: forward N pesan terakhir ke member baru via DM/bot logic sendiri
async function shareRecentMessagesManually(sock, groupJid, newMemberJid, messages) {
  for (const msg of messages.slice(-25)) { // ambil 25 pesan terakhir
    await sock.relayMessage(newMemberJid, msg.message, { messageId: msg.key.id })
  }
}
```

> [!NOTE]
> **Catatan:** Belum ada method native (`groupToggleMessageHistory` dkk **tidak exist**) karena WA belum membuka protokol publik untuk fitur ini. Jangan gunakan nama method yang belum ada di lib — cek dulu dengan `console.log(Object.keys(sock))` untuk daftar method yang benar-benar tersedia.

---


#### ◈ 5.37 · Channel Poll — Polling di Saluran/Channel (WA 2026)


WhatsApp Channels kini mendukung pembuatan polling — fitur interaksi satu arah berskala besar langsung di saluran. Gunakan `toAnnouncementGroup: true` agar poll terkirim ke channel/saluran (newsletter JID).

```js
async function sendChannelPoll(sock, channelJid) {
  // Kirim poll ke Channel / Saluran WhatsApp
  // channelJid format: 'xxxxxxxxxxxxxxxxxx@newsletter'
  await sock.sendMessage(channelJid, {
    poll: {
      name:              'Bahasa pemrograman favorit kamu?',
      values:            ['JavaScript', 'Python', 'Go', 'Rust', 'TypeScript'],
      selectableCount:   1,           // 1 = single choice, >1 = multi choice
      toAnnouncementGroup: true,      // WAJIB true untuk Channel/saluran
    },
  })
}

// Poll biasa di grup (bukan channel)
async function sendGroupPoll(sock, groupJid) {
  await sock.sendMessage(groupJid, {
    poll: {
      name:              'Kapan kita meet offline?',
      values:            ['Minggu ini', 'Minggu depan', 'Bulan depan', 'Belum bisa'],
      selectableCount:   1,
      toAnnouncementGroup: false,
    },
  })
}

// Handling respons poll di event handler
sock.ev.on('messages.upsert', ({ messages }) => {
  for (const msg of messages) {
    if (msg.message?.pollUpdateMessage) {
      const update = msg.message.pollUpdateMessage
      console.log('Vote masuk:', {
        voter:       msg.key.participant,
        pollMsgId:   update.pollCreationMessageKey?.id,
        selectedOpt: update.vote?.selectedOptions,
      })
    }
  }
})
```

---


#### ◈ 5.38 · Channel Voice Note (WA 2026)


WhatsApp Channels kini mendukung pengiriman voice note — memungkinkan kreator saluran berinteraksi lebih personal dengan subscriber via audio langsung di channel.

```js
async function sendChannelVoiceNote(sock, channelJid) {
  // channelJid format: 'xxxxxxxxxxxxxxxxxx@newsletter'
  await sock.sendMessage(channelJid, {
    audio: { url: './pengumuman.ogg' },
    mimetype: 'audio/ogg; codecs=opus',
    ptt: true,    // wajib true agar tampil sebagai voice note di channel
  })

  // Dengan caption/deskripsi (support tergantung WA build)
  await sock.sendMessage(channelJid, {
    audio: { url: './rekaman-siaran.mp3' },
    mimetype: 'audio/mp4',
    ptt: false,   // false = audio biasa (musik/rekaman), bukan PTT
    caption: 'Rekaman siaran terbaru — dengarkan sekarang! 🎙️',
  })
}
```

> [!NOTE]
> **Catatan:** Newsletter JID bisa didapat dari `sock.newsletterSubscribers(channelJid)`, `sock.newsletterFetchMessages(...)`, atau dari metadata channel yang sudah kamu follow saat event `messaging-history.set`.

---


<br>

<div align="right"><sub>§ SECTION 06</sub></div>

## 06 — Rich Response Messages

<hr>


Fitur ini secara eksklusif memungkinkan Anda mengirim struktur data yang lebih kompleks menyerupai antarmuka dari bot AI resmi WhatsApp.

#### ◈ 6.1 · Text Rich

```js
import { prepareRichResponseMessage } from 'deffa-baileys'

async function sendRichText(sock, jid) {
  const messageData = prepareRichResponseMessage({
    contentText: 'Ini adalah paragraf teks biasa yang dirender dalam kontainer rich response yang memiliki margin dan padding khusus.'
  })
  
  await sock.sendMessage(jid, messageData)
}

```

#### ◈ 6.2 · Code Block

```js
import { prepareRichResponseMessage } from 'deffa-baileys'

async function sendRichCode(sock, jid) {
  const kodeProgram = 'const status = "success";\nconsole.log(`Operasi selesai dengan status: ${status}`);'
  
  const messageData = prepareRichResponseMessage({
    headerText: 'Berikut adalah implementasi kode dalam JavaScript:',
    code: kodeProgram,
    language: 'javascript'
  })
  
  await sock.sendMessage(jid, messageData)
}

```

#### ◈ 6.3 · Table

```js
import { prepareRichResponseMessage } from 'deffa-baileys'

async function sendRichTable(sock, jid) {
  const tabelData = [
    ['Nama Menu', 'Harga', 'Ketersediaan'],
    ['Nasi Goreng Spesial', 'Rp 25.000', '✅ Tersedia'],
    ['Mie Goreng Seafood', 'Rp 30.000', '✅ Tersedia'],
    ['Es Teh Manis', 'Rp 5.000', '✅ Tersedia'],
    ['Ayam Bakar Madu', 'Rp 35.000', '❌ Habis']
  ]

  const messageData = prepareRichResponseMessage({
    headerText: 'Daftar Harga Lengkap:',
    title: 'Katalog Menu Restoran',
    table: tabelData,
    noHeading: false
  })
  
  await sock.sendMessage(jid, messageData)
}

```

#### ◈ 6.4 · Inline Image

```js
import { prepareRichResponseMessage } from 'deffa-baileys'

async function sendRichInlineImage(sock, jid) {
  const messageData = prepareRichResponseMessage({
    contentText: 'Gambar di bawah ini disisipkan langsung di dalam kotak pesan:',
    inlineImage: 'https://domain.com/gambar-inline.jpg',
    imageText: 'Ilustrasi pemandangan alam',
    tapLinkUrl: 'https://example.com/galeri'
  })
  
  await sock.sendMessage(jid, messageData)
}

```

#### ◈ 6.5 · Inline Link / Citation

```js
import { prepareRichResponseMessage } from 'deffa-baileys'

async function sendRichCitation(sock, jid) {
  const messageData = prepareRichResponseMessage({
    links: [{
      text: 'Silakan merujuk ke dokumentasi resmi untuk rincian lebih lanjut',
      title: 'Dokumentasi API',
      url: 'https://example.com/docs',
      displayName: 'Portal Edukasi',
      sources: [{ 
        displayName: 'Portal Edukasi', 
        subtitle: 'Situs Referensi', 
        url: 'https://example.com/docs' 
      }]
    }]
  })
  
  await sock.sendMessage(jid, messageData)
}

```

#### ◈ 6.6 · Rich Response Kombinasi

```js
import { prepareRichResponseMessage } from 'deffa-baileys'

async function sendComplexRichResponse(sock, jid) {
  const tabelKombinasi = [
    { isHeading: true, items: ['Kolom Identitas', 'Kolom Status'] },
    { isHeading: false, items: ['Server Utama', 'Online'] },
    { isHeading: false, items: ['Server Cadangan', 'Maintenance'] }
  ]

  const messageData = prepareRichResponseMessage({
    richResponse: [
      { text: 'Sistem telah menyelesaikan analisis keseluruhan. Berikut adalah laporan terperinci:' },
      { code: [{ codeContent: 'function checkStatus() { return true; }', highlightType: 0 }], language: 'javascript' },
      { text: 'Kode di atas memvalidasi integritas data. Status server saat ini adalah:' },
      { table: tabelKombinasi, title: 'Status Infrastruktur Jaringan' },
      { inlineImage: 'https://domain.com/grafik-server.png', imageText: 'Grafik Beban Server' }
    ]
  })
  
  await sock.sendMessage(jid, messageData)
}

```


<br>

<div align="right"><sub>§ SECTION 07</sub></div>

## 07 — Group Management

<hr>


API yang ekstensif untuk memanipulasi dan mengelola data serta operasional grup secara menyeluruh.
```js
async function manageGroup(sock, jid) {
  const daftarAnggotaAwal = ['6281234567890@s.whatsapp.net', '6289876543210@s.whatsapp.net']
  const grupBaru = await sock.groupCreate('Grup Diskusi Internal', daftarAnggotaAwal)
  const idGrup = grupBaru.id

  const metadataGrup = await sock.groupMetadata(idGrup)

  const targetUser = ['628111222333@s.whatsapp.net']
  await sock.groupParticipantsUpdate(idGrup, targetUser, 'add')
  await sock.groupParticipantsUpdate(idGrup, targetUser, 'promote')
  await sock.groupParticipantsUpdate(idGrup, targetUser, 'demote')
  await sock.groupParticipantsUpdate(idGrup, targetUser, 'remove')

  await sock.groupUpdateSubject(idGrup, 'Grup Diskusi Internal v2')
  await sock.groupUpdateDescription(idGrup, 'Ini adalah deskripsi grup yang baru saja diperbarui melalui sistem bot otomatis.')
  await sock.updateProfilePicture(idGrup, { url: 'https://domain.com/ikon-grup.png' })

  const kodeUndangan = await sock.groupInviteCode(idGrup)
  await sock.groupRevokeInvite(idGrup)
  const infoUndangan = await sock.groupGetInviteInfo(kodeUndangan)
  await sock.groupAcceptInvite(kodeUndangan)

  await sock.groupSettingUpdate(idGrup, 'announcement')
  await sock.groupSettingUpdate(idGrup, 'not_announcement')
  await sock.groupSettingUpdate(idGrup, 'locked')
  await sock.groupSettingUpdate(idGrup, 'unlocked')

  await sock.groupToggleEphemeral(idGrup, 86400)
  await sock.groupJoinApprovalMode(idGrup, 'on')
  await sock.groupMemberAddMode(idGrup, 'admin_add')

  await sock.groupLeave(idGrup)

  const daftarGrupAktif = await sock.groupFetchAllParticipating()
}

```


<br>

<div align="right"><sub>§ SECTION 08</sub></div>

## 08 — Newsletter / Channel

<hr>


Fungsionalitas penuh untuk memoderasi saluran informasi siaran satu arah (Channel WhatsApp).
```js
async function manageNewsletter(sock) {
  const metadataChannelBaru = await sock.newsletterCreate('Saluran Berita Utama', 'Pusat informasi dan pembaruan sistem secara langsung dan cepat.')
  const idChannel = metadataChannelBaru.id

  await sock.newsletterFollow(idChannel)
  await sock.newsletterUnfollow(idChannel)

  await sock.newsletterMute(idChannel)
  await sock.newsletterUnmute(idChannel)

  await sock.newsletterUpdateName(idChannel, 'Berita Utama Revisi')
  await sock.newsletterUpdateDescription(idChannel, 'Pembaruan deskripsi untuk memperjelas tujuan dari saluran komunikasi ini.')
  await sock.newsletterUpdatePicture(idChannel, { url: 'https://domain.com/logo-channel.jpg' })
  await sock.newsletterRemovePicture(idChannel)

  const kodeInviteChannel = 'KODE_INVITE_YANG_VALID'
  const detailMetadataChannel = await sock.newsletterMetadata('invite', kodeInviteChannel)

  const idPesanServer = '1234567890'
  await sock.newsletterReactMessage(idChannel, idPesanServer, '🔥')

  const daftarSaluranDiikuti = await sock.newsletterSubscribed()

  const batasPesan = 10
  const daftarPesanChannel = await sock.newsletterFetchMessages('invite', kodeInviteChannel, batasPesan, null, null)

  await sock.newsletterDelete(idChannel)
}

```


<br>

<div align="right"><sub>§ SECTION 09</sub></div>

## 09 — Privacy & Profile

<hr>


Pengaturan terkait profil pribadi pengguna dan konfigurasi privasi keamanan akun.
```js
async function updateProfileAndPrivacy(sock) {
  const targetJid = '6281234567890@s.whatsapp.net'

  await sock.updateProfileName('Deffa Bot System')
  await sock.updateProfileStatus('Sistem berjalan dengan optimal dan sedang memonitor antrean tugas.')
  await sock.updateProfilePicture(targetJid, { url: 'https://domain.com/foto-profil-baru.jpg' })
  await sock.removeProfilePicture(targetJid)

  const tautanFotoProfil = await sock.profilePictureUrl(targetJid, 'image')
  const informasiBio = await sock.fetchStatus(targetJid)

  await sock.updateLastSeenPrivacy('all')
  await sock.updateOnlinePrivacy('all')
  await sock.updateProfilePicturePrivacy('all')
  await sock.updateStatusPrivacy('all')
  await sock.updateReadReceiptsPrivacy('all')
  await sock.updateGroupsAddPrivacy('all')
  await sock.updateCallPrivacy('all')
  await sock.updateMessagesPrivacy('all')
  await sock.updateDefaultDisappearingMode(86400)

  await sock.updateBlockStatus(targetJid, 'block')
  await sock.updateBlockStatus(targetJid, 'unblock')
  const daftarBlokir = await sock.fetchBlocklist()

  const nomorTelepon = '6281234567890'
  const hasilPengecekanWA = await sock.onWhatsApp(nomorTelepon)

  await sock.sendPresenceUpdate('composing', targetJid)
  await sock.sendPresenceUpdate('recording', targetJid)
  await sock.sendPresenceUpdate('paused', targetJid)
  await sock.presenceSubscribe(targetJid)
}

```


<br>

<div align="right"><sub>§ SECTION 10</sub></div>

## 10 — Handling Events

<hr>


Cara komprehensif untuk mendaftarkan pendengar acara ke seluruh aktivitas yang terjadi di jaringan.
```js
function setupEventHandlers(sock, saveCreds) {
  sock.ev.on('connection.update', (updatePayload) => {
    const koneksi = updatePayload.connection
    const pemutusanTerakhir = updatePayload.lastDisconnect
    const kodeQr = updatePayload.qr
    const loginBaru = updatePayload.isNewLogin
  })

  sock.ev.on('messages.upsert', (dataUpsert) => {
    const daftarPesan = dataUpsert.messages
    const tipeData = dataUpsert.type

    for (const dataPesan of daftarPesan) {
      const pengirimJid = dataPesan.key.remoteJid
      const dikirimOlehSaya = dataPesan.key.fromMe
      const apakahGrup = pengirimJid.endsWith('@g.us')
      
      const teksPesan = dataPesan.message?.conversation
                     || dataPesan.message?.extendedTextMessage?.text
                     || dataPesan.message?.imageMessage?.caption
                     || ''
                     
      console.log({ pengirimJid, dikirimOlehSaya, apakahGrup, teksPesan })
    }
  })

  sock.ev.on('messages.update', (dataPembaruanPesan) => {
  })

  sock.ev.on('messages.reaction', (dataReaksi) => {
  })

  sock.ev.on('message-receipt.update', (dataTandaTerima) => {
  })

  sock.ev.on('presence.update', (dataKehadiran) => {
    const identitasUser = dataKehadiran.id
    const statusKehadiran = dataKehadiran.presences
  })

  sock.ev.on('chats.update', (dataPembaruanChat) => {
  })

  sock.ev.on('chats.upsert', (dataChatBaru) => {
  })

  sock.ev.on('chats.delete', (dataPenghapusanChat) => {
  })

  sock.ev.on('contacts.upsert', (dataKontakBaru) => {
  })

  sock.ev.on('contacts.update', (dataPembaruanKontak) => {
  })

  sock.ev.on('groups.update', (dataPembaruanGrup) => {
  })

  sock.ev.on('group-participants.update', (dataAksiPesertaGrup) => {
    const idGrup = dataAksiPesertaGrup.id
    const daftarPeserta = dataAksiPesertaGrup.participants
    const jenisTindakan = dataAksiPesertaGrup.action
  })

  sock.ev.on('call', (dataPanggilanMasuk) => {
    for (const panggilan of dataPanggilanMasuk) {
      const idPanggilan = panggilan.id
      const pemanggil = panggilan.from
      
      sock.rejectCall(idPanggilan, pemanggil)
    }
  })

  sock.ev.on('labels.edit', (dataLabelDiedit) => {
  })

  sock.ev.on('labels.association', (dataAsosiasiLabel) => {
    const tipeAsosiasi = dataAsosiasiLabel.type
    const detailAsosiasi = dataAsosiasiLabel.association
  })

  sock.ev.on('creds.update', saveCreds)
}

```


<br>

<div align="right"><sub>§ SECTION 11</sub></div>

## 11 — Deffa Plugins : Brat & Bratvid

<hr>


deffa-baileys menyertakan **30+ plugin bawaan** siap pakai mencakup AI, berita, downloader, search, stalk, info, dan maker. Plugin dapat diimport langsung atau diakses via objek `plugins`. Output tiap plugin mengikuti format `{ ok, type, result }` — langsung bisa dipakai di `sendMessage`.

| Key | Method | Endpoint | Output | Parameter |
|:---|:---:|:---|:---:|:---|
| `brat` | `GET` | `/api/maker/brat` | Sticker · img | `text` `string` |
| `bratvid` | `GET` | `/api/maker/bratvid` | Sticker · vid | `text` `string` |

```js
import { plugins, listPlugins } from 'deffa-baileys'

// Cek plugin yang tersedia
console.log(listPlugins()) // ['ai', 'deepseek', 'qwq', 'glm', 'gpt', 'gita', 'cnbc', 'cnn', ..., 'brat', 'bratvid'] (30+ plugins)

// Kirim Brat image sebagai stiker
async function kirimBrat(sock, jid) {
  const hasil = await plugins.brat({ text: 'gabut nih' })
  if (!hasil.ok) return console.error(hasil.message)

  // hasil.type === 'sticker' — kirim langsung sebagai stiker
  await sock.sendMessage(jid, {
    sticker: { url: hasil.result },
  })
}

// Kirim Bratvid (video) sebagai stiker animasi
async function kirimBratvid(sock, jid) {
  const hasil = await plugins.bratvid({ text: 'literally me every monday' })
  if (!hasil.ok) return console.error(hasil.message)

  await sock.sendMessage(jid, {
    sticker: { url: hasil.result },
    isAnimated: true, // opsional — indikator untuk stiker bergerak
  })
}

// Contoh di dalam handler pesan bot
sock.ev.on('messages.upsert', async ({ messages }) => {
  for (const msg of messages) {
    const text  = msg.message?.conversation || msg.message?.extendedTextMessage?.text || ''
    const jid   = msg.key.remoteJid
    const isBot = msg.key.fromMe

    if (isBot || !text) continue

    if (text.startsWith('.brat ')) {
      const input = text.slice(6).trim()
      const res   = await plugins.brat({ text: input })
      if (res.ok) {
        await sock.sendMessage(jid, { sticker: { url: res.result } }, { quoted: msg })
      }
    }

    if (text.startsWith('.bratvid ')) {
      const input = text.slice(9).trim()
      const res   = await plugins.bratvid({ text: input })
      if (res.ok) {
        await sock.sendMessage(jid, { sticker: { url: res.result } }, { quoted: msg })
      }
    }
  }
})
```

> [!NOTE]
> Plugin Brat & Bratvid selalu mengembalikan `{ ok: boolean, type: 'sticker', result: string }` di mana `result` adalah URL gambar/video yang bisa langsung dipakai di `sendMessage`. Tidak ada API key tambahan yang diperlukan — sudah ter-bundle di dalam library.


<br>

<div align="right"><sub>§ SECTION 12</sub></div>

## 12 — Read Messages & Presence

<hr>


Kendali mutlak atas indikator pesan dibaca dan pelaporan presensi sesi secara waktu nyata.
```js
async function markMessagesAsRead(sock, kunciPesanTunggal, arrayKunciPesan) {
  await sock.readMessages([kunciPesanTunggal])
  
  const kunciPesanSatu = arrayKunciPesan[0]
  const kunciPesanDua = arrayKunciPesan[1]
  const kunciPesanTiga = arrayKunciPesan[2]
  
  await sock.readMessages([kunciPesanSatu, kunciPesanDua, kunciPesanTiga])
}

```


<br>

<div align="right"><sub>§ SECTION 13</sub></div>

## 13 — Delete / Edit Pesan

<hr>


Mekanisme pasca-pengiriman yang memungkinkan Anda menarik kembali atau merevisi pesan yang telah telanjur terkirim ke server tujuan.
```js
async function modifySentMessages(sock, jid, kunciPesanTerkirim) {
  await sock.sendMessage(jid, {
    delete: kunciPesanTerkirim
  })

  await sock.sendMessage(jid, {
    edit: kunciPesanTerkirim,
    text: 'Ini adalah teks yang telah direvisi dan menggantikan konten pesan sebelumnya yang salah.'
  })
}

```


<br>

<div align="right"><sub>§ SECTION 14</sub></div>

## 14 — Message Options Tambahan

<hr>


Modifikasi perilaku tambahan untuk pesan agar sesuai dengan spesifikasi kasus penggunaan tingkat lanjut.
```js
import { prepareDisappearingMessageSettingContent } from 'deffa-baileys'

async function applyAdvancedMessageOptions(sock, jid, dataPesanKutipan) {
  const durasiMenghilangDariPenyimpanan = sock.store?.chats.get(jid)?.ephemeralExpiration

  await sock.sendMessage(jid, { 
    text: 'Pesan ini dikirim dengan konfigurasi menghilang mengikuti pengaturan chat lokal.' 
  }, {
    ephemeralExpiration: durasiMenghilangDariPenyimpanan
  })

  const pengaturanWaktuSatuHari = 86400
  const konfigurasiTimerBawaan = prepareDisappearingMessageSettingContent(pengaturanWaktuSatuHari)
  await sock.sendMessage(jid, konfigurasiTimerBawaan)

  await sock.sendMessage(jid, {
    text: 'Balasan ini mencakup elemen antarmuka tombol interaktif yang diikatkan ke pesan historis.',
    interactive: {
      type: 'native_flow',
      body: { text: 'Klik tombol di bawah ini' },
      nativeFlowMessage: {
        buttons: [
          { name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: 'Tombol Aksi', id: 'aksi' }) }
        ]
      }
    },
    quote: dataPesanKutipan
  })
}

```


<br>

<div align="right"><sub>§ SECTION 15</sub></div>

## 15 — Browser Fingerprint (Kiwi, UC Browser, dll)

<hr>


Saat membuka koneksi dengan `makeWASocket`, properti `browser` menentukan perangkat & browser apa yang "terlihat" oleh WhatsApp sebagai linked device Anda. deffa-baileys menyediakan helper `Browsers` berisi preset fingerprint siap pakai — termasuk Kiwi Browser dan UC Browser — supaya Anda tidak perlu menulis array `[OS, Browser, Version]` secara manual.
```js
import { Browsers } from 'deffa-baileys'

Browsers.ubuntu('Chrome')      // ['Ubuntu', 'Chrome', '22.04.4']
Browsers.macOS('Safari')       // ['Mac OS', 'Safari', '14.4.1']
Browsers.windows('Edge')       // ['Windows', 'Edge', '10.0.22631']
Browsers.android('Chrome')     // ['Android', 'Chrome', '14.0']
Browsers.baileys('Custom')     // ['Baileys', 'Custom', '6.5.0']
Browsers.kiwi()                // ['Android', 'Chrome', '130.0.6723.58']  — fingerprint Kiwi Browser
Browsers.ucBrowser()           // ['Android', 'Chrome', '16.4.0.1']      — fingerprint UC Browser
Browsers.brave()               // ['Windows', 'Chrome', '130.0.0.0']
Browsers.vivaldi()             // ['Windows', 'Chrome', '6.9.3447.48']
Browsers.arc()                 // ['Mac OS', 'Chrome', '1.60.0']
Browsers.appropriate('Chrome') // otomatis menyesuaikan OS tempat proses Node.js Anda berjalan

```
Gunakan langsung di opsi koneksi:
```js
import { makeWASocket, Browsers } from 'deffa-baileys'

const sock = makeWASocket({
  auth: state,
  browser: Browsers.kiwi(), // linked device akan tampil sebagai "Kiwi Browser" di WhatsApp
})

```
> [!NOTE]
> Catatan: fingerprint browser ini hanya memengaruhi bagaimana sesi tampil di daftar "Linked Devices" pada WhatsApp pengguna, dan tidak mengubah perilaku jaringan atau protokol koneksi itu sendiri.


<br>

<div align="right"><sub>§ SECTION 16</sub></div>

## 16 — Telegram Bot (DeffaTelegraf)

<hr>


Selain WhatsApp, deffa-baileys juga membungkus engine Telegraf secara penuh dengan nama `DeffaTelegraf`. Artinya Anda bisa membangun bot Telegram lengkap — command, inline keyboard, scenes/wizard, session, hingga webhook — tanpa perlu menginstal package `telegraf` terpisah.

#### ◈ 16.1 · Setup Dasar & Long Polling

```js
import { DeffaTelegraf } from 'deffa-baileys'

const bot = new DeffaTelegraf(process.env.TELEGRAM_BOT_TOKEN)

bot.start((ctx) => ctx.reply('Halo! Bot Deffa siap digunakan 🚀'))
bot.help((ctx) => ctx.reply('Kirim /menu untuk melihat daftar fitur.'))

bot.command('ping', (ctx) => ctx.reply('Pong!'))

bot.on('text', (ctx) => {
  ctx.reply(`Kamu mengirim: ${ctx.message.text}`)
})

bot.catch((err, ctx) => {
  console.error(`Error untuk ${ctx.updateType}`, err)
})

bot.launch()
console.log('Bot Telegram berjalan dengan mode long polling...')

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

```

#### ◈ 16.2 · Setup via Webhook

Cocok untuk deployment di platform serverless seperti Vercel atau VPS dengan domain HTTPS aktif.
```js
import { DeffaTelegraf } from 'deffa-baileys'

const bot = new DeffaTelegraf(process.env.TELEGRAM_BOT_TOKEN)

bot.command('start', (ctx) => ctx.reply('Bot aktif via webhook!'))

await bot.launch({
  webhook: {
    domain: 'https://domain-anda.com',
    port: process.env.PORT || 3000,
    path: '/telegram-webhook'
  }
})

```

#### ◈ 16.3 · Inline Keyboard & Reply Keyboard

```js
import { DeffaTelegraf, TelegramMarkup as Markup } from 'deffa-baileys'

const bot = new DeffaTelegraf(process.env.TELEGRAM_BOT_TOKEN)

bot.command('menu', (ctx) => {
  ctx.reply('Pilih salah satu fitur:', Markup.inlineKeyboard([
    [Markup.button.callback('🤖 AI Chat', 'menu_ai'), Markup.button.callback('⬇️ Downloader', 'menu_dl')],
    [Markup.button.url('📂 GitHub', 'https://github.com/deffacntip/deffa-baileys')]
  ]))
})

bot.action('menu_ai', (ctx) => {
  ctx.answerCbQuery()
  ctx.editMessageText('Silakan ketik pertanyaan untuk AI.')
})

bot.action('menu_dl', (ctx) => {
  ctx.answerCbQuery()
  ctx.editMessageText('Kirim link TikTok/Instagram/YouTube yang ingin diunduh.')
})

```

#### ◈ 16.4 · Session, Scenes & Wizard

Untuk membangun percakapan bertahap (misalnya alur registrasi atau form multi-langkah), gunakan `telegramSession` bersama `TelegramScenes`.
```js
import { DeffaTelegraf, telegramSession, TelegramScenes } from 'deffa-baileys'

const registerScene = new TelegramScenes.WizardScene(
  'register-wizard',
  (ctx) => {
    ctx.reply('Siapa nama Anda?')
    return ctx.wizard.next()
  },
  (ctx) => {
    ctx.wizard.state.nama = ctx.message.text
    ctx.reply('Berapa umur Anda?')
    return ctx.wizard.next()
  },
  (ctx) => {
    ctx.reply(`Terdaftar sebagai ${ctx.wizard.state.nama}, umur ${ctx.message.text} tahun.`)
    return ctx.scene.leave()
  }
)

const stage = new TelegramScenes.Stage([registerScene])
const bot = new DeffaTelegraf(process.env.TELEGRAM_BOT_TOKEN)

bot.use(telegramSession())
bot.use(stage.middleware())

bot.command('daftar', (ctx) => ctx.scene.enter('register-wizard'))

bot.launch()

```

#### ◈ 16.5 · Memanggil Deffa Plugins (Brat/Bratvid) dari Bot Telegram

Karena `plugins` adalah objek universal yang sama dipakai di sisi WhatsApp, Anda bisa memanggil fungsi AI/downloader/tools yang identik di dalam bot Telegram.
```js
import { DeffaTelegraf, plugins } from 'deffa-baileys'

const bot = new DeffaTelegraf(process.env.TELEGRAM_BOT_TOKEN)

bot.command('ai', async (ctx) => {
  const pertanyaan = ctx.message.text.split(' ').slice(1).join(' ')
  if (!pertanyaan) return ctx.reply('Gunakan format: /ai <pertanyaan>')

  const respon = await plugins.gpt({ q: pertanyaan })
  ctx.reply(respon?.result?.message || respon?.message || 'Gagal mendapatkan respon AI.')
})

bot.command('tiktok', async (ctx) => {
  const url = ctx.message.text.split(' ')[1]
  if (!url) return ctx.reply('Gunakan format: /tiktok <url>')

  const hasil = await plugins.tiktok({ url })
  if (hasil?.ok === false) return ctx.reply(hasil.message)
  ctx.reply('Video berhasil diproses.')
})

bot.launch()

```

#### ◈ 16.6 · Cek Koneksi Bot dengan `connectTelegram`

Helper bawaan untuk memvalidasi token bot secara cepat tanpa harus memulai polling/webhook penuh — cocok dipakai saat startup aplikasi untuk logging status.
```js
import { connectTelegram } from 'deffa-baileys'

const botInfo = await connectTelegram(process.env.TELEGRAM_BOT_TOKEN)
if (botInfo) {
  console.log(`Terhubung sebagai @${botInfo.username}`)
}

```


#### ◈ 16.7 · Bot API 9.3–9.4 – sendMessageDraft, Profile Photo Bot, Button Style & Icon


**sendMessageDraft** — Pre-isi input box user dengan draft pesan. User bisa edit dan kirim sendiri.

```js
bot.on('message', async (ctx) => {
  await ctx.sendMessageDraft('Halo, nama saya adalah...')
})

// Atau via telegram instance
await bot.telegram.sendMessageDraft(chatId, 'Draft pesan ini')
```

**setMyProfilePhoto / removeMyProfilePhoto** — Bot bisa ganti/hapus foto profilnya sendiri.

```js
await bot.telegram.setMyProfilePhoto({ source: './avatar.jpg' })
await bot.telegram.removeMyProfilePhoto()
```

**Button Style & Custom Emoji Icon (Bot API 9.4)** — Tombol inline/reply keyboard bisa punya warna (`primary`=biru, `success`=hijau, `danger`=merah) dan emoji icon custom.

```js
import { DeffaTelegraf, TelegramMarkup as Markup } from 'deffa-baileys'

// Helper Button dari Markup
const Button = Markup.button

bot.on('message', async (ctx) => {
  await ctx.reply('Pilih aksi:', Markup.inlineKeyboard([
    // Tombol biasa dengan style warna
    [Button.styledCallback('✅ Setuju',  'approve', 'success')],
    [Button.styledCallback('❌ Tolak',   'reject',  'danger')],
    [Button.styledCallback('ℹ️ Info',    'info',    'primary')],

    // Tombol dengan custom emoji icon (butuh Telegram Premium owner)
    [Button.iconCallback('Lihat Detail', 'detail', '5373141891321699086')],

    // Tombol style + icon sekaligus
    [Button.styledIconCallback('Konfirmasi', 'confirm', 'success', '5368324170671202286')],
  ]))
})
```


#### ◈ 16.8 · Bot API 9.5 – Member Tags, Date-Time Entity


**setChatMemberTag** — Set tag custom untuk member grup (butuh hak `can_manage_tags`).

```js
// Beri tag ke member
bot.command('tag', async (ctx) => {
  const userId = ctx.message.reply_to_message?.from?.id
  if (!userId) return ctx.reply('Reply ke pesan seseorang dulu')
  await ctx.setChatMemberTag(userId, 'VIP')
  await ctx.reply('Tag VIP berhasil dipasang!')
})

// Hapus tag (kirim string kosong)
await ctx.telegram.setChatMemberTag(chatId, userId, '')
```

**getUserProfileAudios** — Ambil daftar audio profil user.

```js
const audios = await bot.telegram.getUserProfileAudios(userId, { limit: 5 })
```


#### ◈ 16.9 · Bot API 9.6 – Managed Bots

Bot kini bisa membuat, mengonfigurasi, dan mengelola bot lain secara programatik tanpa perlu ke @BotFather.

```js
// Dapatkan token bot yang dikelola
const result = await bot.telegram.getManagedBotToken(botUserId)

// Ganti token bot yang dikelola
await bot.telegram.replaceManagedBotToken(botUserId)

// Simpan prepared keyboard button untuk dipakai di Mini Apps
await bot.telegram.savePreparedKeyboardButton(button, userId)
```


#### ◈ 16.10 · Bot API 10.0 – Guest Mode

Bot bisa menerima pesan dan membalas di chat yang **bukan** anggotanya — tanpa perlu join grup.

```js
// Tangkap guest message
bot.on('guest_message', async (ctx) => {
  // ctx.guestMessage — update berisi pesan tamu
  await ctx.answerGuestQuery(
    { type: 'text', text: 'Halo dari bot! 👋' }
  )
})
```


#### ◈ 16.11 · Bot API 10.0 – Bot-to-Bot Communication

Bot bisa kirim pesan ke bot lain via @username (keduanya harus opt-in via @BotFather).

```js
// Aktifkan dulu di @BotFather: Bot-to-Bot Communication Mode
await bot.telegram.sendMessage('@other_bot_username', 'Halo bot lain!')
```


#### ◈ 16.12 · Bot API 10.0 – Delete Reactions

```js
// Hapus satu reaction spesifik pada pesan
bot.on('message', async (ctx) => {
  await ctx.deleteMessageReaction({ type: 'emoji', emoji: '👍' })
})

// Hapus semua reaction sekaligus
bot.on('message', async (ctx) => {
  await ctx.deleteAllMessageReactions()
})

// Atau langsung via telegram instance
await bot.telegram.deleteMessageReaction(chatId, messageId, { type: 'emoji', emoji: '🔥' })
await bot.telegram.deleteAllMessageReactions(chatId, messageId)
```


#### ◈ 16.13 · Bot API 10.0 – Live Photo

Bot bisa mengirim foto dengan video pendek (seperti iPhone Live Photos).

```js
// Kirim live photo
bot.on('message', async (ctx) => {
  await ctx.sendLivePhoto({ source: './photo.heic' }, { caption: 'Live photo!' })
})

// Atau via telegram instance
await bot.telegram.sendLivePhoto(chatId, { source: './photo.heic' }, { caption: 'Keren!' })
```


#### ◈ 16.14 · Bot API 10.0 – Managed Bot Access Settings

```js
// Cek siapa yang bisa kirim pesan ke managed bot
const settings = await bot.telegram.getManagedBotAccessSettings(botUserId)
console.log(settings)

// Set whitelist akses
await bot.telegram.setManagedBotAccessSettings(botUserId, {
  is_public: false,
  allowed_user_ids: [123456, 789012],
})
```


#### ◈ 16.15 · Bot API 10.0 – Get User Personal Chat Messages

```js
// Ambil pesan dari personal chat user (yang di-pin di profil mereka)
const messages = await bot.telegram.getUserPersonalChatMessages(userId, {
  offset: 0,
  limit: 10,
})
```


#### ◈ 16.16 · Bot API 10.1 – Join Request Queries

Bot bisa merespons join request secara interaktif, termasuk membuka Mini App.

```js
// Jawab join request query langsung
bot.on('chat_join_request', async (ctx) => {
  await ctx.answerChatJoinRequestQuery({ action: 'approve' })
})

// Buka Web App saat user minta join
bot.on('chat_join_request', async (ctx) => {
  await ctx.sendChatJoinRequestWebApp('https://myapp.example.com/verify')
})
```


#### ◈ 16.17 · Bot API 10.1 – Rich Messages

Fitur paling besar: bot bisa mengirim pesan super terstruktur — heading, tabel, list, blockquote, slideshow, math, dan lain-lain. Cocok untuk bot AI yang perlu format output kaya.

```js
// Kirim rich message lengkap
bot.on('message', async (ctx) => {
  await ctx.sendRichMessage({
    blocks: [
      { type: 'section_heading', text: { type: 'plain', plain_text: '📊 Laporan Harian' } },
      { type: 'divider' },
      { type: 'paragraph', text: { type: 'rich_text', elements: [
        { type: 'bold', elements: [{ type: 'text', text: 'Status: ' }] },
        { type: 'text', text: 'Semua sistem berjalan normal.' }
      ]}},
      { type: 'list', style: 'bullet', items: [
        { label: { type: 'plain', plain_text: 'Server UP' } },
        { label: { type: 'plain', plain_text: 'DB OK' } },
        { label: { type: 'plain', plain_text: 'Cache OK' } },
      ]}
    ]
  })
})

// Streaming AI reply secara real-time (sendRichMessageDraft)
bot.on('message', async (ctx) => {
  let draft = await ctx.sendRichMessageDraft({
    blocks: [{ type: 'paragraph', text: { type: 'plain', plain_text: 'Memproses...' } }]
  })

  // Update bertahap saat AI menghasilkan teks
  for (const chunk of aiStream) {
    await bot.telegram.sendRichMessageDraft(ctx.chat.id, {
      message_id: draft.message_id,
      blocks: [{ type: 'paragraph', text: { type: 'plain', plain_text: chunk } }]
    })
  }
})
```

---


<br>

<div align="right"><sub>§ SECTION 17</sub></div>

## 17 — Discord Bot (DeffaDiscord)

<hr>


Selain WhatsApp dan Telegram, deffa-baileys kini juga membungkus **Oceanic.js** secara penuh dengan nama `DeffaDiscord`. Artinya Anda bisa membangun bot Discord lengkap — menangani pesan, slash commands, embeds, file upload, hingga sharding — tanpa perlu menginstal package `oceanic.js` terpisah.


#### ◈ 17.1 · Setup Dasar & Login Bot

```js
import { DeffaDiscord } from 'deffa-baileys'

const client = new DeffaDiscord({
  auth: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
  gateway: {
    intents: ['GUILDS', 'GUILD_MESSAGES', 'MESSAGE_CONTENT']
  }
})

client.on('ready', () => {
  console.log(`Bot Discord siap sebagai ${client.user.tag}`)
})

client.connect()
```

> [!NOTE]
> **Catatan:** `MESSAGE_CONTENT` adalah *privileged intent*. Aktifkan di [Discord Developer Portal](https://discord.com/developers/applications) → Bot → Privileged Gateway Intents.


#### ◈ 17.2 · Menangani Event & Pesan

```js
import { DeffaDiscord } from 'deffa-baileys'

const client = new DeffaDiscord({
  auth: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
  gateway: {
    intents: ['GUILDS', 'GUILD_MESSAGES', 'MESSAGE_CONTENT']
  }
})

client.on('ready', () => {
  console.log(`Online sebagai ${client.user.tag} (ID: ${client.user.id})`)
})

client.on('messageCreate', async (msg) => {
  // Abaikan pesan dari bot lain
  if (msg.author.bot) return

  const text = msg.content.trim()

  if (text === '!ping') {
    await msg.channel.createMessage({ content: 'Pong! 🏓' })
  }

  if (text === '!info') {
    await msg.channel.createMessage({
      content: `Kamu ada di guild: **${msg.channel.guild.name}**`
    })
  }

  if (text.startsWith('!echo ')) {
    const kata = text.slice(6)
    await msg.channel.createMessage({ content: kata })
  }
})

client.on('error', (err) => {
  console.error('Discord error:', err)
})

client.connect()
```


#### ◈ 17.3 · Slash Commands (Application Commands)

Oceanic mendukung pendaftaran dan penanganan Application Commands (Slash Commands) secara native.
```js
import { DeffaDiscord } from 'deffa-baileys'

const client = new DeffaDiscord({
  auth: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
  gateway: { intents: ['GUILDS'] }
})

client.on('ready', async () => {
  console.log(`Online sebagai ${client.user.tag}`)

  // Daftarkan slash command secara global
  await client.application.bulkEditGlobalCommands([
    { name: 'ping', description: 'Cek latensi bot' },
    { name: 'info', description: 'Tampilkan info server' },
    {
      name: 'say',
      description: 'Bot mengulang pesan Anda',
      options: [{
        type: 3, // STRING
        name: 'pesan',
        description: 'Pesan yang akan diulang',
        required: true
      }]
    }
  ])

  console.log('Slash commands berhasil didaftarkan!')
})

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommandInteraction()) return

  if (interaction.data.name === 'ping') {
    await interaction.createMessage({
      content: `🏓 Pong! Latensi: **${client.shards.get(0)?.latency ?? '?'}ms**`
    })
  }

  if (interaction.data.name === 'info') {
    const guild = interaction.guild
    await interaction.createMessage({
      content: `📊 Guild: **${guild?.name}** | Member: **${guild?.memberCount}**`
    })
  }

  if (interaction.data.name === 'say') {
    const pesan = interaction.data.options.getString('pesan', true)
    await interaction.createMessage({ content: pesan })
  }
})

client.connect()
```


#### ◈ 17.4 · Embed & File Upload

```js
import { DeffaDiscord } from 'deffa-baileys'
import { readFileSync } from 'fs'

const client = new DeffaDiscord({
  auth: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
  gateway: { intents: ['GUILDS', 'GUILD_MESSAGES', 'MESSAGE_CONTENT'] }
})

client.on('messageCreate', async (msg) => {
  if (msg.author.bot) return

  // Kirim Embed
  if (msg.content === '!embed') {
    await msg.channel.createMessage({
      embeds: [{
        title: '🚀 Deffa Discord Bot',
        description: 'Bot Discord bertenaga **deffa-baileys** + Oceanic.js',
        color: 0x5865F2,
        fields: [
          { name: '📦 Library', value: 'deffa-baileys', inline: true },
          { name: '⚡ Engine',  value: 'Oceanic.js',    inline: true },
          { name: '🔖 Node',   value: 'v20+',           inline: true }
        ],
        footer: { text: 'Made with ⚡ by Deffa' },
        timestamp: new Date().toISOString()
      }]
    })
  }

  // Upload file/gambar
  if (msg.content === '!upload') {
    const fileBuffer = readFileSync('./gambar.png')
    await msg.channel.createMessage({
      content: 'Ini file dari bot:',
      files: [{ name: 'gambar.png', contents: fileBuffer }]
    })
  }

  // Embed + file sekaligus
  if (msg.content === '!report') {
    const reportBuffer = readFileSync('./report.pdf')
    await msg.channel.createMessage({
      embeds: [{
        title: '📄 Laporan Bulanan',
        description: 'File PDF terlampir di bawah.',
        color: 0x57F287
      }],
      files: [{ name: 'laporan-juni-2026.pdf', contents: reportBuffer }]
    })
  }
})

client.connect()
```


#### ◈ 17.5 · Sharding dengan ShardManager

Untuk bot berskala besar (1000+ guild), gunakan `ShardManager` bawaan Oceanic untuk mendistribusikan koneksi gateway.
```js
import { DeffaDiscord } from 'deffa-baileys'

const client = new DeffaDiscord({
  auth: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
  gateway: {
    intents: ['GUILDS', 'GUILD_MESSAGES', 'MESSAGE_CONTENT'],
    maxShards: 'auto'   // Oceanic auto-hitung jumlah shard optimal
  }
})

client.on('ready', () => {
  console.log(`${client.user.tag} online dengan ${client.shards.size} shard`)
})

client.on('shardReady', (shardID) => {
  console.log(`Shard #${shardID} siap`)
})

client.on('shardDisconnect', (err, shardID) => {
  console.warn(`Shard #${shardID} disconnect:`, err?.message)
})

client.on('messageCreate', async (msg) => {
  if (msg.author.bot) return
  if (msg.content === '!shards') {
    const info = [...client.shards.values()]
      .map(s => `Shard #${s.id}: ${s.status} (${s.latency}ms)`)
      .join('\n')
    await msg.channel.createMessage({ content: `\`\`\`\n${info}\n\`\`\`` })
  }
})

client.connect()
```


#### ◈ 17.6 · Cek Koneksi Bot dengan `connectDiscord`

Helper bawaan untuk memvalidasi token bot Discord secara cepat tanpa harus memulai koneksi gateway penuh — cocok dipakai saat startup aplikasi untuk logging status atau health-check deployment.
```js
import { connectDiscord } from 'deffa-baileys'

const botInfo = await connectDiscord(process.env.DISCORD_BOT_TOKEN)
if (botInfo) {
  console.log(`✔ Discord terhubung sebagai ${botInfo.tag} (ID: ${botInfo.id})`)
} else {
  console.log('✘ Token Discord tidak valid atau koneksi gagal.')
}
```

Anda juga bisa mengecek ketersediaan token di environment sebelum mencoba konek:
```js
import { isDiscordAvailable, connectDiscord } from 'deffa-baileys'

if (isDiscordAvailable()) {
  const info = await connectDiscord(process.env.DISCORD_BOT_TOKEN)
  if (info) console.log(`[ ✦ ] DC: ${info.tag} (${info.id})`)
} else {
  console.log('[ ✦ ] DC: DISCORD_BOT_TOKEN belum di-set, skip.')
}
```

```markdown
### 17.7 [NEW 2026] Granular Access Control (Invite API)
Discord API (`POST /channels/{channel.id}/invites`) telah diperluas untuk mendukung *Granular Access Control* level arsitektur. Hal ini menihilkan kebutuhan terhadap event listener `guildMemberAdd` yang memiliki tendensi *delay* latensi saat bot membaca rotasi pengguna yang masuk.

* **`target_users_file`**: Parameter *array* untuk membatasi eksekusi *link* undangan secara spesifik. *Link* undangan otomatis tertolak apabila *request* masuk berasal dari entitas pengguna yang tidak terdaftar di dalam parameter ini.
* **`role_ids`**: Parameter *array* (contoh: `"role_ids": ["ROLE_ID_1"]`) yang memerintahkan *backend* server Discord untuk menyematkan *role* kepada pengguna secara instan tepat pada hitungan milidetik setelah *request* bergabung melalui *link* tersebut divalidasi.

### 17.8 [NEW 2026] Modals UI Components (Select Menus, Label, TextDisplay)
Interaction Response dengan tipe `9` (Modal Submit) menerima pembaruan form sehingga tidak lagi membatasi *developer* hanya pada input tipe teks (Text Input).

* **Penerapan Komponen**: Di dalam objek *Action Rows*, kamu dapat merender langsung tipe `3` (*String Select*, *User Select*, *Role Select*, atau *Channel Select*).
* **Penerapan Statis**: Untuk teks dengan panduan panjang tanpa harus menggunakan *readonly text field*, komponen `Label` dan `TextDisplay` dapat disematkan di parameter `components` tepat di atas struktur form. Pengumpulan *value* tetap berjalan seperti biasa dan ditangkap melalui *Interaction Create* event.

### 17.9 [NEW 2026] Server-Specific Bot Profiles (Per-Guild Profiles)
Infrastruktur *Per-Guild Profiles* memungkinkan klien Deffa Discord untuk merender aset visual secara dinamis bergantung pada spesifikasi server tempat *request* dilontarkan. Ini memisahkan identitas bot global dengan identitas lokal.

* **Integrasi Endpoint**: Melalui *request* ke `PATCH /guilds/{guild.id}/members/@me`.
* **Format *Payload***: Konstruksi JSON mengizinkan penyuntikan string *base64 encoded* di atribut `"avatar"`, modifikasi `"nick"` untuk menimpa panggilan lokal, serta metadata bio spesifik untuk profil server lokal. Skema ini mengizinkan token aplikasi bot tunggal mereplikasi ribuan konfigurasi visual independen.

### 17.10 [NEW 2026] Threshold Intents (10k Users) & Moderation Metadata
Infrastruktur *Privileged Gateway Intents* diatur ulang untuk sinkronisasi metadata secara lintas *platform* (terutama melalui Social SDK 1.8+).

* **Moderation Metadata**: Deffa Discord kini dapat mengatur transfer struktur *key-value* khusus kepada *server backend* eksternal. Informasi hukuman, limitasi akses, dan metadata pembatasan akun disinkronkan secara *real-time* menghindari latensi eskalasi konflik di Discord.
* **Peninjauan Ambang Batas Pengguna**: Kalkulasi kepemilikan *Privileged Intents* (`MESSAGE_CONTENT`, `GUILD_MEMBERS`, dll) tidak lagi dihitung berdasarkan agregasi server. Discord mengunci ambang batas pada jangkauan kumulatif 10.000 pengguna individu. Seluruh *platform* aplikasi diwajibkan untuk memvalidasi alur izin *intent* tersebut secara manual per putaran verifikasi tahunan di dalam dasbor Developer Portal.
```
---


<br>

<div align="right"><sub>§ SECTION 18</sub></div>

## 18 — testMessage : Tes Semua Jenis Pesan

<hr>


`testMessage` adalah fungsi utilitas eksklusif deffa-baileys untuk **menguji pengiriman semua jenis pesan Baileys** secara cepat — bisa dipakai di grup maupun private chat, tanpa perlu set target/total kirim. Cukup reply atau panggil di handler bot mana pun.


#### ◈ Cara import & penggunaan


```js
import { testMessage } from 'deffa-baileys'

// Di handler pesan:
sock.ev.on('messages.upsert', async ({ messages }) => {
  for (const msg of messages) {
    const text = msg.message?.conversation || msg.message?.extendedTextMessage?.text || ''
    const jid  = msg.key.remoteJid

    if (text === '.testmsg' || text === '.test') {
      // Jalankan test — akan kirim 16 jenis pesan secara berurutan
      await testMessage(sock, jid)
    }

    // Dengan quoted (reply ke pesan tertentu, termasuk tes reaction + edit)
    if (text === '.testquoted') {
      await testMessage(sock, jid, { quoted: msg })
    }
  }
})
```


#### ◈ Signature lengkap


```js
/**
 * @param {WASocket}  sock     - instance dari makeWASocket()
 * @param {string}    jid      - target JID: grup (@g.us) atau private (@s.whatsapp.net)
 * @param {object}    [opts]
 * @param {object}    [opts.quoted]   - pesan yang di-quote (untuk tes reaction, edit, dll)
 * @param {number}    [opts.delay]    - jeda antar pesan dalam ms (default: 500)
 */
await testMessage(sock, jid, { quoted: msg, delay: 700 })
```


#### ◈ Yang diuji (16 jenis pesan)


| # | Jenis Pesan | Keterangan |
|:---:|:---|:---|
| `01` | Text biasa | Plain text message |
| `02` | Text + Mention | Mention member — group: semua, private: self |
| `03` | Image | Gambar dari URL + caption |
| `04` | Video | Video dari URL + caption |
| `05` | Audio | Audio musik, bukan PTT |
| `06` | PTT Voice Note | Voice note dengan codec opus |
| `07` | Document | File PDF dengan filename |
| `08` | Sticker | Stiker dari URL gambar |
| `09` | Location | Koordinat lokasi |
| `10` | Contact / vCard | Kartu kontak WA |
| `11` | Reaction | Emoji reaction, jika `quoted` disediakan |
| `12` | Edit Message | Kirim pesan → tunggu → edit isinya |
| `13` | Delete Message | Kirim pesan → tunggu → hapus |
| `14` | Forward Simulation | Simulasi forward tanpa pesan asli |
| `15` | Buttons (Legacy) | Tombol interaktif legacy |
| `16` | List Message | Pesan daftar pilihan (list) |

> [!NOTE]
> Semua tes berjalan **async berurutan** dengan jeda antar pesan. Bekerja di grup maupun private chat tanpa konfigurasi tambahan.

---


<br>

<div align="right"><sub>§ SECTION 19</sub></div>

## 19 — sessionGuard : Proteksi Session dari Pencurian

<hr>


`sessionGuard` adalah fitur keamanan opsional yang **mengunci session WhatsApp ke IP server pertama kali bot dijalankan**. Jika session dicuri dan dicoba dijalankan di server lain, bot akan otomatis diblokir dan dihentikan paksa.

> [!NOTE]
> **Tidak dipanggil = tidak ada proteksi** (default behaviour tetap normal)


#### ◈ Cara Import


```js
import { sessionGuard, isGuardActive, resetGuard } from 'deffa-baileys'
```


#### ◈ Penggunaan Dasar


Panggil `sessionGuard()` **sebelum** `makeWASocket`:

```js
import { makeWASocket, useMultiFileAuthState } from 'deffa-baileys'
import { sessionGuard } from 'deffa-baileys'

const { state, saveCreds } = await useMultiFileAuthState('./auth_state')

// Aktifkan guard — wajib dipanggil sebelum makeWASocket
await sessionGuard()

const sock = makeWASocket({ auth: state })
sock.ev.on('creds.update', saveCreds)
```


#### ◈ Opsi Lengkap


```js
await sessionGuard({
  sessionFile: './auth_state/creds.json',  // path ke file session (default: './auth_state.json')
  silent: false,                            // true = sembunyikan log guard (default: false)
  onBlock: async ({ currentIP, guardPath }) => {
    // Callback dipanggil saat session diblokir karena IP beda
    console.log('Session diblokir! IP saat ini:', currentIP)
    // Bisa kirim notif ke owner di sini
  }
})
```

| Opsi | Type | Default | Keterangan |
|:---|:---:|:---|:---|
| `sessionFile` | `string` | `'./auth_state.json'` | Path ke file session WA |
| `silent` | `boolean` | `false` | Sembunyikan log info guard |
| `onBlock` | `function` | `null` | Callback dipanggil sebelum `process.exit(1)` saat IP mismatch |


#### ◈ Cara Kerja


1. **Pertama kali dijalankan** → Guard ambil IP publik server, hash dengan SHA-256, simpan ke file `.deffa_guard` di folder yang sama dengan session.
2. **Jalankan berikutnya** → Guard bandingkan IP server sekarang dengan hash yang tersimpan.
3. **IP cocok** → Bot lanjut normal ✅
4. **IP beda** → Bot cetak pesan error dan `process.exit(1)` ❌

> [!NOTE]
> IP disimpan dalam bentuk **hash SHA-256**, bukan plaintext — aman meski file `.deffa_guard` bocor.


#### ◈ Cek Status Guard


```js
import { isGuardActive } from 'deffa-baileys'

if (isGuardActive()) {
  console.log('Session guard aktif')
}
```


#### ◈ Reset Guard (Pindah Server)


Jika lo pindah server secara sah, hapus guard lama dulu sebelum jalankan bot:

```js
import { resetGuard } from 'deffa-baileys'

await resetGuard('./auth_state/creds.json')
// Output: [ ✦ ] DEFFA GUARD: Guard direset, silakan jalankan ulang bot.
```

Atau hapus manual file `.deffa_guard` dari folder session lo, lalu jalankan bot kembali.


#### ◈ Contoh Output Log


**Pertama kali (registrasi):**
```
[ ✦ ] DEFFA GUARD: Mengaktifkan proteksi session...
[ ✦ ] DEFFA GUARD: IP Server: 103.xx.xx.xx
[ ✦ ] DEFFA GUARD: Session terdaftar di server ini ✓
```

**Jalankan normal (IP cocok):**
```
[ ✦ ] DEFFA GUARD: Mengaktifkan proteksi session...
[ ✦ ] DEFFA GUARD: IP Server: 103.xx.xx.xx
[ ✦ ] DEFFA GUARD: IP cocok, session aman ✓
```

**Session dicuri (IP beda):**
```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃   [ ! ]  DEFFA GUARD — SESSION BLOCK
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
  Session ini tidak bisa digunakan
  di server ini karena IP berbeda.

  Session hanya bisa berjalan di
  server tempat session dibuat.

  Jika ini server kamu sendiri,
  hapus file: .deffa_guard
  lalu jalankan ulang bot.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

> [!NOTE]
> **Catatan:** Fitur ini tidak 100% foolproof jika server menggunakan IP dinamis (berubah setiap restart). Untuk VPS dengan IP statis, perlindungan ini sangat efektif.

---

<br>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0a0a12,50:2b1a2e,100:0a0a12&height=130&section=footer" width="100%"/>

<div align="center">

<hr>

### ✦ Credits &amp; License

</div>

Deffa Baileys dibangun di atas pondasi [Baileys](https://github.com/WhiskeySockets/Baileys) oleh Rajeh Taher/WhiskeySockets, dan diperluas oleh **Deffa** dengan integrasi Telegram Bot, plugin Brat/Bratvid bawaan, dukungan protokol WhatsApp 2026, serta berbagai peningkatan stabilitas.

<table width="100%">
<tr>
<td align="center" width="50%">

**Lisensi**

Dirilis di bawah lisensi `MIT`
Bebas dipakai, dimodifikasi, didistribusikan ulang

</td>
<td align="center" width="50%">

**Copyright**

© 2025 Rajeh Taher / WhiskeySockets
© 2026 **Deffa**

</td>
</tr>
</table>

<br>

<div align="center">

<sub>✦ &nbsp;Dibuat dengan presisi oleh **Deffa** &nbsp;✦</sub>

<br><br>

<a href="#deffa-baileys"><img src="https://img.shields.io/badge/↑_KEMBALI_KE_ATAS-0a0a12?style=for-the-badge&labelColor=0a0a12&color=e8b76a" /></a>

</div>
