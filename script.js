// ════════════════════════════════════════════════════════
// 1. CONSTANTS & STATIC DATA
// ════════════════════════════════════════════════════════

const USER_COLORS = [
  '#FF6B6B','#A78BFA','#34D399','#FF9F0A',
  '#60A5FA','#F472B6','#FBBF24','#38BDF8',
  '#A3E635','#FB923C'
];

// All users in the universe
const ALL_USERS = [
  { id:1,  name:'Sophie Martin',  handle:'sophiem',   initials:'SM', color:'#FF6B6B', streak:45, status:'online',  _photo:null },
  { id:2,  name:'Lucas Bernard',  handle:'lucasb',    initials:'LB', color:'#A78BFA', streak:12, status:'online',  _photo:null },
  { id:3,  name:'Emma Dubois',    handle:'emmad',     initials:'ED', color:'#34D399', streak:7,  status:'away',    _photo:null },
  { id:4,  name:'Thomas Petit',   handle:'thomasp',   initials:'TP', color:'#FF9F0A', streak:30, status:'online',  _photo:null },
  { id:5,  name:'Léa Rousseau',   handle:'lear',      initials:'LR', color:'#60A5FA', streak:3,  status:'away',    _photo:null },
  { id:6,  name:'Hugo Moreau',    handle:'hugom',     initials:'HM', color:'#F472B6', streak:22, status:'online',  _photo:null },
  { id:7,  name:'Camille Truc',   handle:'camilletr', initials:'CT', color:'#FBBF24', streak:8,  status:'away',    _photo:null },
  { id:8,  name:'Rayan Benali',   handle:'rayanb',    initials:'RB', color:'#38BDF8', streak:0,  status:'away',    _photo:null },
  { id:9,  name:'Jade Fontaine',  handle:'jadef',     initials:'JF', color:'#A3E635', streak:0,  status:'online',  _photo:null },
  { id:10, name:'Mathis Garnier', handle:'mathisg',   initials:'MG', color:'#FB923C', streak:0,  status:'away',    _photo:null },
];

// Dynamic chat list — starts with first 7 users as friends
const chatList = [
  { id:1, userId:1, preview:"Yo ! 45 jours de streak 🔥",  time:'Maintenant', unread:true  },
  { id:2, userId:2, preview:"Trop marrant 😂",              time:'2min',       unread:true  },
  { id:3, userId:3, preview:"C'est vraiment beau !",        time:'5min',       unread:false },
  { id:4, userId:4, preview:"Ce soir, t'es là ?",           time:'12min',      unread:false },
  { id:5, userId:5, preview:"Coucou 👋",                    time:'1h',         unread:true  },
  { id:6, userId:6, preview:"Ok c'est good 👍",             time:'2h',         unread:false },
  { id:7, userId:7, preview:"Salut toi !",                  time:'3h',         unread:false },
];

// Message history per chat (keyed by chat id)
const messageHistory = {
  1: [
    { from:'them', text:"Yo ! 45 jours de streak 🔥🔥",           time:'14:20' },
    { from:'me',   text:"Ouais ça déchire !!",                      time:'14:22' },
    { from:'them', text:"T'envoie un snap ce soir ?",               time:'14:23' },
  ],
  2: [
    { from:'them', text:"T'as vu ce meme ?? 💀",                   time:'13:40' },
    { from:'me',   text:"Hahaha non, montre !",                     time:'13:41' },
    { from:'them', text:"Trop marrant 😂",                          time:'13:45' },
  ],
  3: [
    { from:'them', text:"Trop belle ta dernière photo !",            time:'09:15' },
    { from:'me',   text:"Merci 😊",                                  time:'09:18' },
    { from:'them', text:"C'est vraiment beau !",                     time:'09:20' },
  ],
  4: [
    { from:'them', text:"Yo ! Ce soir, t'es là ?",                  time:'12:00' },
    { from:'me',   text:"Ouais je pense, c'est quoi le plan ?",     time:'12:04' },
    { from:'them', text:"Soirée chez Jules, ambiance chill 🎶",     time:'12:06' },
    { from:'me',   text:"Parfait, j'arrive vers 21h 🙌",            time:'12:08' },
  ],
  5: [
    { from:'them', text:"Coucou 👋",                                time:'11:00' },
    { from:'me',   text:"Coucou ! Ça va ?",                         time:'11:05' },
  ],
  6: [
    { from:'me',   text:"Ça marche pour demain ?",                  time:'10:00' },
    { from:'them', text:"Ok c'est good 👍",                         time:'10:30' },
  ],
  7: [
    { from:'them', text:"Hello !",                                  time:'08:00' },
    { from:'me',   text:"Salut 👋 Quoi de neuf ?",                  time:'08:15' },
    { from:'them', text:"Salut toi !",                              time:'08:18' },
  ],
};

// Stories data
const storiesData = [
  { userId:1, slideCount:3, timeAgo:'10min', watched:false, emoji:'🌅', bg:'linear-gradient(135deg,#1a1a2e,#e94057)', text:'Matin parfait ☀️' },
  { userId:2, slideCount:1, timeAgo:'25min', watched:false, emoji:'🎮', bg:'linear-gradient(135deg,#0f0c29,#302b63)', text:'Gaming night 🎮' },
  { userId:4, slideCount:5, timeAgo:'1h',    watched:true,  emoji:'🏔️', bg:'linear-gradient(135deg,#2c3e50,#4ca1af)', text:'Randonnée épique !' },
  { userId:6, slideCount:2, timeAgo:'2h',    watched:false, emoji:'🎵', bg:'linear-gradient(135deg,#1a1a2e,#c94b4b)', text:'Ce son est 🔥' },
  { userId:3, slideCount:4, timeAgo:'3h',    watched:true,  emoji:'🌿', bg:'linear-gradient(135deg,#134e5e,#71b280)', text:'Nature & calme 📷' },
  { userId:5, slideCount:1, timeAgo:'4h',    watched:true,  emoji:'🌮', bg:'linear-gradient(135deg,#f7971e,#ffd200)', text:'Trop bon 😍' },
];

// Spotlight data (Discover)
const spotlightData = [
  { emoji:'🏄', bg:'linear-gradient(135deg,#1a1a2e,#4a90d9)', author:'@surfdude',   caption:'Session de folie ce matin', views:'42k', likes:'8.2k' },
  { emoji:'🎨', bg:'linear-gradient(135deg,#2d1b69,#e94057)', author:'@artvibes',   caption:'Nouvelle œuvre terminée 🎨', views:'18k', likes:'3.1k' },
  { emoji:'🌆', bg:'linear-gradient(135deg,#0f0c29,#302b63)', author:'@citypics',   caption:'Paris de nuit, rien de tel',  views:'95k', likes:'21k'  },
  { emoji:'🎵', bg:'linear-gradient(135deg,#fc4a1a,#f7b733)', author:'@musiclover', caption:'Beat du jour 🎵',             views:'31k', likes:'6.8k' },
  { emoji:'🍜', bg:'linear-gradient(135deg,#134e5e,#71b280)', author:'@foodieparis',caption:'Ramen maison, 3h de travail', views:'12k', likes:'2.4k' },
  { emoji:'🚗', bg:'linear-gradient(135deg,#1c1c1c,#444444)', author:'@carspotr',   caption:'Rencontre du jour 🔥',        views:'55k', likes:'11k'  },
  { emoji:'💃', bg:'linear-gradient(135deg,#c94b4b,#4b134f)', author:'@dancer99',   caption:'Nouvelle chorée terminée !', views:'78k', likes:'15k'  },
];

// Auto-reply pool
const AUTO_REPLIES = [
  '😂','Hahaha oui !','Trop drôle 💀','Sérieux ?? 😭',
  'Ok je vois !','Lol c\'est trop 😂','🔥🔥🔥','Exactement !',
  'Wesh ouais !','💯 trop vrai','Oh non 😭','Trop bien ça !',
  'Je savais 😂','Allez 🙌','👀👀','Ptdr nan !',
  'C\'est chaud 🥶','T\'es sérieux là ?','Ahaha j\'y crois pas',
  'Trop fort 😂','Même pas étonnant 💀',
];

// ════════════════════════════════════════════════════════
// 2. APP STATE
// ════════════════════════════════════════════════════════

const appState = {
  // Auth
  currentUser:    null,       // { name, handle, initials }

  // Navigation
  currentScreen:  'chat',     // active screen id (without 'screen-' prefix)

  // Conversation
  activeConvoId:  null,       // id of open conversation

  // User stats
  snapCount:      0,
  flashScore:     8420,

  // Profile photo
  profilePhotoData: null,     // base64 data URL or null

  // Recent snaps (array of base64 URLs, max 9)
  recentSnaps:    [],

  // Add friend
  pendingFriendToAdd: null,   // found user object or null

  // Camera
  cameraStream:   null,       // MediaStream or null
  cameraFacing:   'environment',
  capturedPhotoData: null,    // base64 data URL of last snap

  // Story viewer
  activeStory:    null,       // story object
  activeSlideIdx: 0,
  storyTimer:     null,
};

// ════════════════════════════════════════════════════════
// 3. UTILITIES
// ════════════════════════════════════════════════════════

/** Get a user by id */
function getUserById(id) {
  return ALL_USERS.find(u => u.id === id) || null;
}

/** Current time as HH:MM string */
function currentTimeString() {
  const d = new Date();
  return `${d.getHours()}:${String(d.getMinutes()).padStart(2, '0')}`;
}

/** Escape HTML special chars to prevent XSS */
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Show a toast notification */
let toastTimer = null;
function showToast(message) {
  const el = document.getElementById('toast');
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
}

/** Build avatar HTML (with photo if available, initials fallback) */
function buildAvatarHTML(user, size = 50) {
  const s = size + 'px';
  if (user._photo) {
    return `<div style="width:${s};height:${s};border-radius:50%;overflow:hidden;flex-shrink:0;">
      <img src="${user._photo}" style="width:100%;height:100%;object-fit:cover;">
    </div>`;
  }
  return `<div style="
    width:${s}; height:${s}; border-radius:50%;
    background:${user.color}22; color:${user.color};
    display:flex; align-items:center; justify-content:center;
    font-weight:800; font-size:${Math.round(size * 0.34)}px; flex-shrink:0;
  ">${user.initials}</div>`;
}

/** Add a photo to recent snaps array (max 9) */
function pushRecentSnap(dataUrl) {
  appState.recentSnaps.unshift(dataUrl);
  if (appState.recentSnaps.length > 9) appState.recentSnaps.pop();
}

// ════════════════════════════════════════════════════════
// 4. AUTH
// ════════════════════════════════════════════════════════

let authMode = 'login'; // 'login' | 'register'

/** Switch between login and register tabs */
function switchAuthMode(mode) {
  authMode = mode;
  const tabs = document.querySelectorAll('.auth-tab');
  tabs[0].classList.toggle('active', mode === 'login');
  tabs[1].classList.toggle('active', mode === 'register');
  document.getElementById('auth-login-fields').style.display    = mode === 'login'    ? 'flex' : 'none';
  document.getElementById('auth-register-fields').style.display = mode === 'register' ? 'flex' : 'none';
  document.getElementById('auth-submit-btn').textContent        = mode === 'login'    ? 'Se connecter' : 'Créer mon compte';
}

/** Handle auth form submission */
function submitAuth() {
  let name = 'Jean Dupont';
  let handle = 'jeandupont';

  if (authMode === 'register') {
    name   = (document.getElementById('reg-name').value   || '').trim();
    handle = (document.getElementById('reg-handle').value || '').trim().replace('@', '');
    if (!name || !handle) { showToast('❌ Remplis tous les champs !'); return; }
    if (handle.length < 3) { showToast('❌ Pseudo trop court (min. 3 car.)'); return; }
  }

  const initials = name.split(' ')
    .map(w => w[0] || '')
    .join('')
    .toUpperCase()
    .slice(0, 2) || 'ME';

  appState.currentUser = { name, handle, initials };

  // Hide auth, show app
  document.getElementById('screen-auth').classList.remove('active');
  document.getElementById('app-wrapper').style.display = 'block';

  // Initialize the app
  initApp();
  navigateTo('chat');
}

// ════════════════════════════════════════════════════════
// 5. NAVIGATION
// ════════════════════════════════════════════════════════

/** Navigate to a screen by name */
function navigateTo(screenName) {
  const previousScreen = appState.currentScreen;

  // Deactivate all screens & nav buttons
  document.querySelectorAll('#app-wrapper .screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

  // Activate target screen
  document.getElementById('screen-' + screenName).classList.add('active');
  const navBtn = document.getElementById('nb-' + screenName);
  if (navBtn) navBtn.classList.add('active');

  appState.currentScreen = screenName;

  // Camera management
  if (screenName === 'camera') {
    startCamera();
  } else if (previousScreen === 'camera') {
    stopCamera();
  }

  // Refresh profile stats when viewing profile
  if (screenName === 'profile') {
    updateProfileUI();
  }
}

// ════════════════════════════════════════════════════════
// 6. CHAT LIST
// ════════════════════════════════════════════════════════

/** Render the full chat list (with optional text filter) */
function renderChatList(filter = '') {
  const container = document.getElementById('chat-list-container');
  if (!container) return;

  const lowerFilter = filter.toLowerCase();
  const visibleChats = filter
    ? chatList.filter(c => {
        const u = getUserById(c.userId);
        if (!u) return false;
        return (
          u.name.toLowerCase().includes(lowerFilter) ||
          u.handle.toLowerCase().includes(lowerFilter)
        );
      })
    : chatList;

  if (!visibleChats.length) {
    container.innerHTML = `
      <div style="text-align:center;padding:48px 20px;color:var(--grey);">
        <div style="font-size:2.2rem;margin-bottom:10px">💬</div>
        <div style="font-weight:700">Aucun résultat</div>
      </div>`;
    return;
  }

  container.innerHTML = visibleChats.map(chat => {
    const user = getUserById(chat.userId);
    if (!user) return '';

    // Avatar HTML (with photo override)
    let avatarHTML;
    if (user._photo) {
      avatarHTML = `
        <div class="chat-avatar" style="background:${user.color}22">
          <img src="${user._photo}">
          <div class="status-dot ${user.status}"></div>
        </div>`;
    } else {
      avatarHTML = `
        <div class="chat-avatar" style="background:${user.color}22;color:${user.color}">
          ${user.initials}
          <div class="status-dot ${user.status}"></div>
        </div>`;
    }

    // Streak indicator
    const streakHTML = user.streak > 0
      ? ` <span style="font-size:.7rem;color:var(--grey)">🔥${user.streak}</span>`
      : '';

    // Snap badge color
    const badgeClass = chat.unread ? 'red' : 'grey';
    const badgeIcon  = chat.unread ? '▶' : '💬';

    return `
      <div class="chat-item" onclick="openConversation(${chat.id})">
        ${avatarHTML}
        <div class="chat-info">
          <div class="chat-name">${escHtml(user.name)}${streakHTML}</div>
          <div class="chat-preview${chat.unread ? ' unread' : ''}">${escHtml(chat.preview)}</div>
        </div>
        <div class="chat-meta">
          <div class="chat-time">${chat.time}</div>
          <div class="snap-badge ${badgeClass}">${badgeIcon}</div>
        </div>
      </div>`;
  }).join('');
}

/** Filter chat list by search input */
function filterChatList(value) {
  renderChatList(value);
}

// ════════════════════════════════════════════════════════
// 7. CONVERSATION
// ════════════════════════════════════════════════════════

/** Open a conversation by chat id */
function openConversation(chatId) {
  const chat = chatList.find(c => c.id === chatId);
  if (!chat) return;

  const user = getUserById(chat.userId);
  if (!user) return;

  // Set active conversation
  appState.activeConvoId = chatId;
  chat.unread = false;

  // Build header
  let avatarHTML;
  if (user._photo) {
    avatarHTML = `<div class="convo-av"><img src="${user._photo}"></div>`;
  } else {
    avatarHTML = `<div class="convo-av" style="background:${user.color}30;color:${user.color}">${user.initials}</div>`;
  }

  const streakText = user.streak > 0 ? ` 🔥${user.streak}` : '';
  const statusText = user.status === 'online' ? '● En ligne' : '● Absent';

  document.getElementById('convo-header-user').innerHTML = `
    ${avatarHTML}
    <div>
      <div class="convo-name">${escHtml(user.name)}${streakText}</div>
      <div class="convo-status">${statusText}</div>
    </div>`;

  // Render messages
  renderMessages(chatId);

  // Update chat list (clear unread badge)
  renderChatList();

  // Navigate to conversation screen
  navigateTo('convo');

  // Focus message input after transition
  setTimeout(() => {
    const inp = document.getElementById('message-input');
    if (inp) inp.focus();
  }, 280);
}

/** Render messages for a given chat id */
function renderMessages(chatId) {
  const container = document.getElementById('messages-container');
  if (!container) return;

  const chat = chatList.find(c => c.id === chatId);
  const user = chat ? getUserById(chat.userId) : null;
  const messages = messageHistory[chatId] || [];

  // Build avatar snippet for "them" bubbles
  let theirAvatarHTML = '';
  if (user) {
    if (user._photo) {
      theirAvatarHTML = `<div class="bubble-avatar"><img src="${user._photo}"></div>`;
    } else {
      theirAvatarHTML = `<div class="bubble-avatar" style="background:${user.color}30;color:${user.color}">${user.initials}</div>`;
    }
  }

  let html = '<div class="day-divider">Aujourd\'hui</div>';

  messages.forEach(msg => {
    if (msg.photo) {
      // Photo message
      html += `
        <div class="bubble-row ${msg.from}">
          ${msg.from === 'them' ? theirAvatarHTML : ''}
          <img
            class="bubble-photo"
            src="${msg.photo}"
            alt="Photo"
            onclick="openFullPhotoViewer('${msg.photo}')"
          >
        </div>
        <div class="bubble-time ${msg.from === 'me' ? 'me' : ''}">${msg.time}</div>`;
    } else {
      // Text message
      html += `
        <div class="bubble-row ${msg.from}">
          ${msg.from === 'them' ? theirAvatarHTML : ''}
          <div class="bubble ${msg.from}">${escHtml(msg.text)}</div>
        </div>
        <div class="bubble-time ${msg.from === 'me' ? 'me' : ''}">${msg.time}</div>`;
    }
  });

  container.innerHTML = html;

  // Scroll to bottom
  requestAnimationFrame(() => {
    container.scrollTop = container.scrollHeight;
  });
}

/** Send a text message in the active conversation */
function sendMessage() {
  const input = document.getElementById('message-input');
  if (!input) return;

  const text = input.value.trim();
  if (!text || !appState.activeConvoId) return;

  const chatId = appState.activeConvoId;
  const timeStr = currentTimeString();

  // Add message to history
  if (!messageHistory[chatId]) messageHistory[chatId] = [];
  messageHistory[chatId].push({ from:'me', text, time: timeStr });

  // Clear input
  input.value = '';

  // Update chat list preview
  const chat = chatList.find(c => c.id === chatId);
  if (chat) {
    chat.preview = text;
    chat.time    = 'Maintenant';
    chat.unread  = false;
  }

  // Re-render
  renderMessages(chatId);
  renderChatList();

  // Trigger auto-reply after random delay
  const replyDelay = 900 + Math.floor(Math.random() * 900);
  setTimeout(() => {
    triggerAutoReply(chatId);
  }, replyDelay);
}

/** Trigger an automatic reply from the other person */
function triggerAutoReply(chatId) {
  if (!messageHistory[chatId]) return;

  const replyText = AUTO_REPLIES[Math.floor(Math.random() * AUTO_REPLIES.length)];
  messageHistory[chatId].push({
    from: 'them',
    text: replyText,
    time: currentTimeString()
  });

  const chat = chatList.find(c => c.id === chatId);
  if (chat) {
    chat.preview = replyText;
    chat.time    = 'Maintenant';
  }

  // Only re-render messages if still in that conversation
  if (appState.activeConvoId === chatId) {
    renderMessages(chatId);
  }
  renderChatList();
}

/** Send a photo picked from a file input in the conversation */
function handleConvoFilePhoto(inputEl) {
  const file = inputEl.files[0];
  if (!file || !appState.activeConvoId) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const dataUrl = e.target.result;
    const chatId  = appState.activeConvoId;

    if (!messageHistory[chatId]) messageHistory[chatId] = [];
    messageHistory[chatId].push({ from:'me', photo: dataUrl, time: currentTimeString() });

    const chat = chatList.find(c => c.id === chatId);
    if (chat) { chat.preview = '📷 Photo envoyée'; chat.time = 'Maintenant'; }

    renderMessages(chatId);
    renderChatList();
    showToast('📷 Photo envoyée !');
  };
  reader.readAsDataURL(file);
  inputEl.value = ''; // reset so same file can be picked again
}

// ════════════════════════════════════════════════════════
// 8. CAMERA
// ════════════════════════════════════════════════════════

/** Start the device camera */
async function startCamera() {
  stopCamera(); // stop any existing stream first

  const videoEl    = document.getElementById('cam-video');
  const fallbackEl = document.getElementById('cam-fallback');

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: appState.cameraFacing, width: { ideal: 1280 }, height: { ideal: 960 } },
      audio: false,
    });

    appState.cameraStream = stream;
    videoEl.srcObject     = stream;
    videoEl.style.display = 'block';
    fallbackEl.style.display = 'none';

  } catch (err) {
    // Camera not available (permission denied, no camera, etc.)
    videoEl.style.display    = 'none';
    fallbackEl.style.display = 'flex';
    console.warn('Camera unavailable:', err.message);
  }
}

/** Stop the active camera stream */
function stopCamera() {
  if (appState.cameraStream) {
    appState.cameraStream.getTracks().forEach(track => track.stop());
    appState.cameraStream = null;
  }
}

/** Flip between front and back camera */
function flipCamera() {
  appState.cameraFacing = appState.cameraFacing === 'environment' ? 'user' : 'environment';
  startCamera();
  showToast(appState.cameraFacing === 'user' ? '🤳 Caméra frontale' : '📷 Caméra arrière');
}

/** Toggle flash (browser limitation: not really controllable) */
function toggleCameraFlash() {
  showToast('⚡ Flash non disponible sur navigateur');
}

/** Capture a snap (photo) */
function captureSnap() {
  const videoEl  = document.getElementById('cam-video');
  const canvasEl = document.getElementById('cam-canvas');
  const flashEl  = document.getElementById('flash-overlay');

  // Flash animation
  flashEl.classList.add('flash');
  setTimeout(() => flashEl.classList.remove('flash'), 140);

  let photoDataUrl = null;

  if (videoEl.srcObject && videoEl.readyState >= 2) {
    // Capture from live video
    canvasEl.width  = videoEl.videoWidth  || 640;
    canvasEl.height = videoEl.videoHeight || 480;

    const ctx = canvasEl.getContext('2d');
    if (appState.cameraFacing === 'user') {
      // Mirror horizontally for selfie camera
      ctx.translate(canvasEl.width, 0);
      ctx.scale(-1, 1);
    }
    ctx.drawImage(videoEl, 0, 0, canvasEl.width, canvasEl.height);
    photoDataUrl = canvasEl.toDataURL('image/jpeg', 0.88);

  } else {
    // Fallback: generate a colorful placeholder snap
    photoDataUrl = generatePlaceholderSnap(canvasEl);
  }

  // Store and show preview
  appState.capturedPhotoData = photoDataUrl;
  appState.snapCount++;
  appState.flashScore += 10;
  pushRecentSnap(photoDataUrl);

  showPhotoPreview(photoDataUrl);
}

/** Generate a colorful placeholder snap (when no camera available) */
function generatePlaceholderSnap(canvasEl) {
  const palettes = [
    ['#1a1a2e','#0f3460'], ['#0f0c29','#302b63'],
    ['#134e5e','#71b280'], ['#fc4a1a','#f7b733'],
    ['#2d1b69','#11998e'], ['#c94b4b','#4b134f'],
  ];
  const emojis = ['🌟','🔥','⚡','🎵','💫','🌈','❄️','🌙'];

  canvasEl.width  = 640;
  canvasEl.height = 480;
  const ctx    = canvasEl.getContext('2d');
  const pIdx   = appState.snapCount % palettes.length;
  const eIdx   = appState.snapCount % emojis.length;
  const [c1, c2] = palettes[pIdx];

  const gradient = ctx.createLinearGradient(0, 0, 640, 480);
  gradient.addColorStop(0, c1);
  gradient.addColorStop(1, c2);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 640, 480);

  ctx.font          = '140px serif';
  ctx.textAlign     = 'center';
  ctx.textBaseline  = 'middle';
  ctx.fillText(emojis[eIdx], 320, 240);

  return canvasEl.toDataURL('image/jpeg', 0.88);
}

/** Show the photo preview overlay */
function showPhotoPreview(dataUrl) {
  const previewEl = document.getElementById('photo-preview');
  const imgEl     = document.getElementById('preview-photo');
  imgEl.src       = dataUrl;
  previewEl.style.cssText = 'position:absolute;inset:0;z-index:50;display:flex;flex-direction:column;';
}

/** Discard the captured photo */
function discardCapturedPhoto() {
  document.getElementById('photo-preview').style.display = 'none';
  appState.capturedPhotoData = null;
}

/** Set the captured photo as profile photo */
function setCapturAsProfilePhoto() {
  if (!appState.capturedPhotoData) return;
  applyProfilePhoto(appState.capturedPhotoData);
  document.getElementById('photo-preview').style.display = 'none';
  appState.capturedPhotoData = null;
  showToast('📸 Photo de profil mise à jour !');
}

/** Open the send-snap modal */
function openSendSnapModal() {
  if (!appState.capturedPhotoData) return;
  document.getElementById('photo-preview').style.display = 'none';
  document.getElementById('send-snap-preview').src = appState.capturedPhotoData;

  // Build friend list
  document.getElementById('send-snap-friend-list').innerHTML = chatList.map(chat => {
    const user = getUserById(chat.userId);
    if (!user) return '';
    return `
      <div class="send-to-row" onclick="sendSnapToFriend(${chat.id})">
        ${buildAvatarHTML(user, 42)}
        <div>
          <div class="send-to-name">${escHtml(user.name)}</div>
          <div style="font-size:.76rem;color:var(--grey);">@${user.handle}</div>
        </div>
        <span class="send-icon">📤</span>
      </div>`;
  }).join('');

  document.getElementById('send-snap-modal').classList.add('open');
}

/** Actually send the snap to a friend */
function sendSnapToFriend(chatId) {
  const photo = appState.capturedPhotoData;
  if (!photo) return;

  if (!messageHistory[chatId]) messageHistory[chatId] = [];
  messageHistory[chatId].push({ from:'me', photo, time: currentTimeString() });

  const chat = chatList.find(c => c.id === chatId);
  if (chat) { chat.preview = '📷 Snap envoyé'; chat.time = 'Maintenant'; }

  closeSendSnapModal();
  renderChatList();

  const user = getUserById(chat && chat.userId);
  showToast(`⚡ Snap envoyé à ${user ? user.name.split(' ')[0] : 'ton ami'} !`);
}

/** Close the send-snap modal */
function closeSendSnapModal() {
  document.getElementById('send-snap-modal').classList.remove('open');
  appState.capturedPhotoData = null;
}

/** Load a photo from the device gallery (file input) */
function loadPhotoFromGallery(inputEl) {
  const file = inputEl.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const dataUrl = e.target.result;
    appState.capturedPhotoData = dataUrl;
    appState.snapCount++;
    appState.flashScore += 10;
    pushRecentSnap(dataUrl);
    showPhotoPreview(dataUrl);
  };
  reader.readAsDataURL(file);
  inputEl.value = '';
}

// ════════════════════════════════════════════════════════
// 9. PROFILE PHOTO
// ════════════════════════════════════════════════════════

/** Handle profile photo file input change */
function handleProfilePhotoChange(inputEl) {
  const file = inputEl.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    applyProfilePhoto(e.target.result);
    showToast('📸 Photo de profil mise à jour !');
  };
  reader.readAsDataURL(file);
  inputEl.value = '';
}

/** Apply a new profile photo (updates UI everywhere) */
function applyProfilePhoto(dataUrl) {
  appState.profilePhotoData = dataUrl;
  pushRecentSnap(dataUrl);
  updateProfileUI();
}

/** Update all profile UI elements from appState */
function updateProfileUI() {
  if (!appState.currentUser) return;
  const u = appState.currentUser;

  const initials = u.initials || u.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0,2);

  // Top username
  const topNameEl = document.getElementById('profile-top-username');
  if (topNameEl) topNameEl.textContent = u.handle;

  // Display name & handle
  const nameEl   = document.getElementById('profile-display-name');
  const handleEl = document.getElementById('profile-handle-text');
  if (nameEl)   nameEl.textContent   = u.name;
  if (handleEl) handleEl.textContent = '@' + u.handle;

  // Stats
  const snapCountEl   = document.getElementById('profile-snap-count');
  const friendCountEl = document.getElementById('profile-friend-count');
  const scoreEl       = document.getElementById('flash-score-display');
  if (snapCountEl)   snapCountEl.textContent   = appState.snapCount;
  if (friendCountEl) friendCountEl.textContent = chatList.length;
  if (scoreEl)       scoreEl.textContent       = appState.flashScore.toLocaleString('fr');

  // Avatar
  const avatarEl = document.getElementById('profile-avatar');
  if (avatarEl) {
    // Remove any old <img>
    const existingImg = avatarEl.querySelector('img');
    if (existingImg) existingImg.remove();

    const initialsEl = document.getElementById('profile-initials-text');

    if (appState.profilePhotoData) {
      if (initialsEl) initialsEl.style.display = 'none';
      const img = document.createElement('img');
      img.src = appState.profilePhotoData;
      avatarEl.insertBefore(img, avatarEl.firstChild);
    } else {
      if (initialsEl) {
        initialsEl.style.display = '';
        initialsEl.textContent   = initials;
      }
    }
  }

  // Snap grid
  renderSnapGrid();
}

/** Render the 3x3 snap grid on the profile screen */
function renderSnapGrid() {
  const container = document.getElementById('snap-grid-container');
  if (!container) return;

  const placeholderEmojis = ['🌅','🎮','🎵','🏃','🍕','🌊','🎨','🌙','⚡'];
  const placeholderBgs    = ['#1a1a2e','#0f0c29','#134e5e','#2d1b69','#1c1c1c','#0a0a0a','#2c3e50','#1a0a2e','#0f1a1c'];

  let html = '';
  for (let i = 0; i < 9; i++) {
    if (appState.recentSnaps[i]) {
      html += `<div class="snap-thumb" onclick="openFullPhotoViewer('${appState.recentSnaps[i]}')">
        <img src="${appState.recentSnaps[i]}" alt="Snap ${i+1}">
      </div>`;
    } else {
      html += `<div class="snap-thumb" style="background:${placeholderBgs[i]}">${placeholderEmojis[i]}</div>`;
    }
  }
  container.innerHTML = html;
}

/** Edit display name via prompt */
function editProfileName() {
  const current = appState.currentUser ? appState.currentUser.name : '';
  const newName = prompt('Ton nom :', current);
  if (newName && newName.trim()) {
    appState.currentUser.name     = newName.trim();
    appState.currentUser.initials = newName.trim()
      .split(' ').map(w => w[0]).join('').toUpperCase().slice(0,2);
    updateProfileUI();
    showToast('✅ Profil mis à jour !');
  }
}

// ════════════════════════════════════════════════════════
// 10. ADD FRIEND
// ════════════════════════════════════════════════════════

/** Open the add-friend modal */
function openAddFriendModal() {
  appState.pendingFriendToAdd = null;

  // Reset input & result
  const inputEl  = document.getElementById('add-friend-input');
  const resultEl = document.getElementById('add-friend-result');
  if (inputEl)  inputEl.value = '';
  if (resultEl) resultEl.innerHTML = `<p style="color:var(--grey);font-size:.82rem;font-weight:600;text-align:center;padding:10px 0">Tape un @pseudo pour rechercher</p>`;

  // Show available pseudos (non-friends only)
  const friendUserIds = new Set(chatList.map(c => c.userId));
  const availableUsers = ALL_USERS.filter(u => !friendUserIds.has(u.id));

  document.getElementById('available-pseudos-list').innerHTML = availableUsers.map(u => `
    <button
      class="quick-pill"
      style="background:${u.color}20;color:${u.color};"
      onclick="quickFillHandle('${u.handle}')"
    >@${u.handle}</button>
  `).join('');

  document.getElementById('add-friend-modal').classList.add('open');

  setTimeout(() => {
    const inp = document.getElementById('add-friend-input');
    if (inp) inp.focus();
  }, 200);
}

/** Close the add-friend modal */
function closeAddFriendModal() {
  document.getElementById('add-friend-modal').classList.remove('open');
  appState.pendingFriendToAdd = null;
}

/** Quick-fill the handle input and trigger search */
function quickFillHandle(handle) {
  const inputEl = document.getElementById('add-friend-input');
  if (inputEl) {
    inputEl.value = handle;
    handleAddFriendSearch(handle);
  }
}

/** Handle search input in add-friend modal */
function handleAddFriendSearch(value) {
  const query  = value.trim().replace('@','').toLowerCase();
  const result = document.getElementById('add-friend-result');
  appState.pendingFriendToAdd = null;

  if (!query) {
    result.innerHTML = `<p style="color:var(--grey);font-size:.82rem;font-weight:600;text-align:center;padding:10px 0">Tape un @pseudo pour rechercher</p>`;
    return;
  }

  // Check if already a friend
  const alreadyFriendChat = chatList.find(c => {
    const u = getUserById(c.userId);
    return u && u.handle.toLowerCase() === query;
  });

  // Find user in universe
  const foundUser = ALL_USERS.find(u =>
    u.handle.toLowerCase() === query ||
    u.handle.toLowerCase().startsWith(query)
  );

  if (!foundUser) {
    result.innerHTML = `
      <div style="text-align:center;padding:16px 0;">
        <div style="font-size:2rem;margin-bottom:8px">😕</div>
        <div style="font-weight:700;margin-bottom:4px">Aucun compte trouvé</div>
        <div style="color:var(--grey);font-size:.8rem">Vérifie l'orthographe du pseudo</div>
      </div>`;
    return;
  }

  if (alreadyFriendChat) {
    result.innerHTML = `
      <div class="user-result-card">
        ${buildAvatarHTML(foundUser, 46)}
        <div>
          <div class="result-name">${escHtml(foundUser.name)}</div>
          <div class="result-info">@${foundUser.handle}</div>
        </div>
        <div class="already-badge">Déjà ami ✓</div>
      </div>`;
    return;
  }

  // Found & not yet a friend — ready to add
  appState.pendingFriendToAdd = foundUser;
  const statusText = foundUser.status === 'online' ? '🟢 En ligne' : '🟡 Absent';
  result.innerHTML = `
    <div class="user-result-card found">
      ${buildAvatarHTML(foundUser, 46)}
      <div>
        <div class="result-name">${escHtml(foundUser.name)}</div>
        <div class="result-info">@${foundUser.handle} · ${statusText}</div>
      </div>
      <span class="found-check">✓</span>
    </div>`;
}

/** Confirm and add the pending friend */
function confirmAddFriend() {
  if (!appState.pendingFriendToAdd) {
    showToast("Cherche un @pseudo d'abord !");
    return;
  }

  const user = appState.pendingFriendToAdd;
  const newChatId = Math.max(...chatList.map(c => c.id), 0) + 1;

  // Add to chat list
  chatList.unshift({
    id:      newChatId,
    userId:  user.id,
    preview: 'Dites bonjour ! 👋',
    time:    'Maintenant',
    unread:  false,
  });

  // Create initial message
  messageHistory[newChatId] = [{
    from: 'them',
    text: `Hé ! Moi c'est ${user.name.split(' ')[0]} 👋 Super d'être connectés sur Flash !`,
    time: currentTimeString(),
  }];

  closeAddFriendModal();
  renderChatList();
  updateProfileUI();
  showToast(`🎉 ${user.name} ajouté(e) !`);

  // Open the new conversation after a short delay
  setTimeout(() => openConversation(newChatId), 350);

  appState.pendingFriendToAdd = null;
}

// ════════════════════════════════════════════════════════
// 11. STORIES
// ════════════════════════════════════════════════════════

/** Render the stories strip on the camera screen */
function renderCameraStoriesStrip() {
  const container = document.getElementById('cam-stories-strip');
  if (!container) return;

  container.innerHTML = storiesData.slice(0, 5).map(story => {
    const user = getUserById(story.userId);
    if (!user) return '';

    const ringClass = story.watched ? 'cam-story-ring seen' : 'cam-story-ring';
    const innerHTML = user._photo
      ? `<div class="cam-story-av"><img src="${user._photo}"></div>`
      : `<div class="cam-story-av" style="background:${user.color}30;color:${user.color}">${user.initials}</div>`;

    return `
      <div class="cam-story-thumb" onclick="openStory(${story.userId})">
        <div class="${ringClass}">${innerHTML}</div>
        <span class="cam-story-name">${user.name.split(' ')[0]}</span>
      </div>`;
  }).join('');
}

/** Render the stories list on the stories screen */
function renderStoriesList() {
  const container = document.getElementById('stories-list-container');
  if (!container) return;

  container.innerHTML = storiesData.map(story => {
    const user = getUserById(story.userId);
    if (!user) return '';

    const ringClass = story.watched ? 'story-ring seen' : 'story-ring';
    const innerHTML = user._photo
      ? `<div class="story-inner-av"><img src="${user._photo}"></div>`
      : `<div class="story-inner-av" style="background:${user.color}25;color:${user.color}">${user.initials}</div>`;

    return `
      <div class="story-row" onclick="openStory(${story.userId})">
        <div class="${ringClass}">${innerHTML}</div>
        <div class="story-info">
          <div class="story-name">${escHtml(user.name)}</div>
          <div class="story-time">Il y a ${story.timeAgo} · ${story.slideCount} snap${story.slideCount > 1 ? 's' : ''}</div>
        </div>
        <div class="story-preview-emoji">${story.emoji}</div>
      </div>`;
  }).join('');
}

/** Open the story viewer for a specific user */
function openStory(userId) {
  const story = storiesData.find(s => s.userId === userId);
  const user  = getUserById(userId);
  if (!story || !user) return;

  appState.activeStory    = story;
  appState.activeSlideIdx = 0;

  // Build progress segments
  document.getElementById('story-progress-bar').innerHTML =
    Array.from({ length: story.slideCount }, (_, i) =>
      `<div class="story-seg"><div class="story-fill" id="story-seg-${i}"></div></div>`
    ).join('');

  // Build top bar
  const avatarEl = user._photo
    ? `<img src="${user._photo}" style="width:34px;height:34px;border-radius:50%;object-fit:cover;">`
    : `<div style="width:34px;height:34px;border-radius:50%;background:${user.color}30;color:${user.color};display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.8rem">${user.initials}</div>`;

  document.getElementById('story-topbar-content').innerHTML = `
    ${avatarEl}
    <span style="font-weight:700;font-size:.88rem;flex:1;">${escHtml(user.name)}</span>
    <span style="font-size:.73rem;color:rgba(255,255,255,.55);">Il y a ${story.timeAgo}</span>
    <button class="close-btn" onclick="closeStory()">✕</button>`;

  // Show first slide
  showStorySlide(0, story);

  document.getElementById('story-viewer').classList.add('open');

  // Mark as watched
  story.watched = true;
  renderStoriesList();
  renderCameraStoriesStrip();
}

/** Display a specific slide in the open story */
function showStorySlide(slideIdx, story) {
  appState.activeSlideIdx = slideIdx;

  // Clear existing timer
  if (appState.storyTimer) clearTimeout(appState.storyTimer);

  // Update progress bars
  for (let i = 0; i < story.slideCount; i++) {
    const seg = document.getElementById('story-seg-' + i);
    if (seg) {
      seg.style.transition = 'none';
      seg.style.width      = i < slideIdx ? '100%' : '0%';
    }
  }
  // Animate current segment
  const currentSeg = document.getElementById('story-seg-' + slideIdx);
  if (currentSeg) {
    requestAnimationFrame(() => {
      currentSeg.style.transition = 'width 4s linear';
      currentSeg.style.width      = '100%';
    });
  }

  // Story content backgrounds & texts
  const bgOptions = [
    'linear-gradient(135deg,#1a1a2e,#e94057)',
    'linear-gradient(135deg,#0f0c29,#302b63)',
    'linear-gradient(135deg,#134e5e,#71b280)',
    'linear-gradient(135deg,#fc4a1a,#f7b733)',
    'linear-gradient(135deg,#2d1b69,#11998e)',
  ];
  const textOptions = [
    story.text,
    'La vie est belle 🌟',
    'Moment parfait ✨',
    'Partage l\'instant ⚡',
    'Flash forever 💛',
  ];

  const bgIdx   = slideIdx % bgOptions.length;
  const textIdx = slideIdx % textOptions.length;

  document.getElementById('story-content-area').innerHTML = `
    <div class="story-bg" style="background:${bgOptions[bgIdx]}"></div>
    <div class="story-text-layer">
      <div style="font-size:3.8rem;margin-bottom:16px;">${story.emoji}</div>
      <div class="story-big-text">${textOptions[textIdx]}</div>
    </div>`;

  // Auto-advance after 4 seconds
  appState.storyTimer = setTimeout(() => advanceStory(), 4000);
}

/** Advance to next story slide, or close if last */
function advanceStory() {
  if (!appState.activeStory) return;
  const nextIdx = appState.activeSlideIdx + 1;
  if (nextIdx < appState.activeStory.slideCount) {
    showStorySlide(nextIdx, appState.activeStory);
  } else {
    closeStory();
  }
}

/** Close the story viewer */
function closeStory() {
  if (appState.storyTimer) clearTimeout(appState.storyTimer);
  document.getElementById('story-viewer').classList.remove('open');
  appState.activeStory    = null;
  appState.activeSlideIdx = 0;
}

// ════════════════════════════════════════════════════════
// 12. DISCOVER
// ════════════════════════════════════════════════════════

/** Render categories and spotlight grid */
function renderDiscover() {
  const categoryNames = ['🔥 Trending','🎵 Musique','🏀 Sport','😂 Humour','🌍 Voyage','🍕 Food'];

  // Categories
  const catsContainer = document.getElementById('categories-container');
  if (catsContainer) {
    catsContainer.innerHTML = categoryNames.map((cat, i) =>
      `<button class="cat-pill${i === 0 ? ' active' : ''}" onclick="selectDiscoverCategory(this)">${cat}</button>`
    ).join('');
  }

  // Quick-add card + spotlight items
  const gridContainer = document.getElementById('spotlight-grid');
  if (!gridContainer) return;

  // Build quick-add friend pills (non-friends only)
  const friendUserIds  = new Set(chatList.map(c => c.userId));
  const nonFriendUsers = ALL_USERS.filter(u => !friendUserIds.has(u.id));

  const quickAddCard = `
    <div class="quick-add-card">
      <h4>👥 Ajouter des amis</h4>
      <div class="quick-add-pills">
        ${nonFriendUsers.map(u => `
          <button
            class="quick-pill"
            style="background:${u.color}20;color:${u.color};"
            onclick="quickAddFromDiscover('${u.handle}')"
          >@${u.handle}</button>
        `).join('')}
      </div>
      <div class="quick-add-hint">Appuie sur un pseudo pour l'ajouter</div>
    </div>`;

  const spotlightHTML = spotlightData.map(item => `
    <div class="spotlight-item" onclick="showToast('▶ ${escHtml(item.caption)}')">
      <div class="spot-bg" style="background:${item.bg}">${item.emoji}</div>
      <div class="spot-overlay"></div>
      <div class="spot-info">
        <div class="spot-author">${item.author}</div>
        <div class="spot-caption">${item.caption}</div>
        <div class="spot-stats">
          <span>👁 ${item.views}</span>
          <span>❤️ ${item.likes}</span>
        </div>
      </div>
    </div>`).join('');

  gridContainer.innerHTML = quickAddCard + spotlightHTML;
}

/** Handle category pill click in Discover */
function selectDiscoverCategory(btnEl) {
  document.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
  btnEl.classList.add('active');
  showToast(btnEl.textContent);
}

/** Quick-add from Discover screen (pre-fills add friend modal) */
function quickAddFromDiscover(handle) {
  openAddFriendModal();
  setTimeout(() => quickFillHandle(handle), 160);
}

// ════════════════════════════════════════════════════════
// 13. FULL PHOTO VIEWER
// ════════════════════════════════════════════════════════

/** Open the full-screen photo viewer */
function openFullPhotoViewer(src) {
  document.getElementById('full-photo-img').src = src;
  document.getElementById('full-photo-viewer').classList.add('open');
}

/** Close the full-screen photo viewer */
function closeFullPhotoViewer() {
  document.getElementById('full-photo-viewer').classList.remove('open');
}

// ════════════════════════════════════════════════════════
// 14. STATUS BAR CLOCK
// ════════════════════════════════════════════════════════

function updateClock() {
  const d  = new Date();
  const el = document.getElementById('clock-display');
  if (el) el.textContent = `${d.getHours()}:${String(d.getMinutes()).padStart(2,'0')}`;
}
updateClock();
setInterval(updateClock, 30_000);

// ════════════════════════════════════════════════════════
// 15. KEYBOARD SHORTCUTS
// ════════════════════════════════════════════════════════

document.addEventListener('keydown', function(e) {
  if (e.key !== 'Enter') return;

  // Send message on Enter (in conversation)
  const msgInput = document.getElementById('message-input');
  if (msgInput && document.activeElement === msgInput) {
    e.preventDefault();
    sendMessage();
    return;
  }

  // Add friend on Enter (in add-friend modal)
  const addInput = document.getElementById('add-friend-input');
  if (addInput && document.activeElement === addInput) {
    e.preventDefault();
    confirmAddFriend();
  }
});

// ════════════════════════════════════════════════════════
// 16. INITIALIZATION
// ════════════════════════════════════════════════════════

/** Called once after successful login — set up the entire app */
function initApp() {
  renderChatList();
  renderCameraStoriesStrip();
  renderStoriesList();
  renderDiscover();
  updateProfileUI();
}
