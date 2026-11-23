/* 🎀 PANEL DE PERSONALIZACIÓN: cambia los valores entre comillas y guarda. */
window.INVITACION = {
  evento: {
    nombre: 'Jaan',
    // Ecuador usa -05:00 todo el año. Formato: AAAA-MM-DDTHH:MM:SS-05:00
    fecha: '2026-12-05T11:00:00-05:00',
    lugar: 'Europa Bistró Cumbayá',
    direccion: '',
    googleMaps: 'https://maps.app.goo.gl/nzVBqiLS9NMxzr1p9'
  },
  sobre: {
    titulo: "You've got mail! 💌",
    subtitulo: 'Pssst… te llegó algo de mi parte ♡',
    carta: 'Para ti ♡',
    firma: 'Con cariño, Jaan',
    sello: '♥',
    lazo: '🎀',
    mensaje: '♡ toca el sobre para abrir ♡',
    mostrarInvitacionMs: 3500
  },
  colores: {
    fondo: '#ffe8ef',
    rosaClaro: '#fac3d4',
    rosaMedio: '#ef7c9f',
    rosaFuerte: '#ce3857',
    vino: '#8d2349',
    texto: '#4d2b3b',
    verde: '#9cdb2f',
    verdeClaro: '#e8f6c9'
  },
  decoracion: {
    stickers: ['🎀', '✳', '♡', '✦'],
    corazonesAlAbrir: true,
    cantidadCorazones: 47
  },
  musica: {
    // Agrega este archivo legalmente obtenido dentro de la carpeta assets.
    archivo: 'assets/young-and-beautiful.mp3',
    reproducirAlAbrir: true,
    volumen: 0.35
  },
  confirmacion: {
    googleSheetsId: '1-LeJhxz-hJlpsDtfXN8yoG8vN_VpfEfc_HleoDUHDqw',
    // Pega aquí la URL terminada en /exec que obtendrás al implementar CODIGO_GOOGLE_SHEETS.gs.
    googleAppsScriptUrl: 'https://script.google.com/macros/s/AKfycbww8MPFDgm900HIiNEWGv-TwBxGpmCYNeQYoOUiEoLNZBKAI5X2g6jK2HIfWX-mU2zk4g/exec',
    // Escribe el número con código de país, sin + ni espacios (ej.: 593999999999).
    // WhatsApp se usa solamente como respaldo si Google Sheets todavía no está conectado.
    whatsapp: '593982599109'
  }
};
