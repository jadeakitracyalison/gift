const CACHE_NAME = 'gift-for-bich-hien-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/images/PandaFox-static.jpg',
  '/images/PandaFox-animated.gif',
  '/images/memory2.png',
  '/images/memory3.png',
  '/images/memory4.png',
  '/images/envelope_closed.png',
  '/images/envelope_opened.png',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js'
];

// Cache audio files
const audioFiles = [
  'assets/audio/TinhYeuCuongNhietMuaHe.mp3',
  'assets/audio/GoDangYeuRoiNhanPhim5.mp3',
  'assets/audio/TinhLang.mp3',
  'assets/audio/ChiaCauMotNua.mp3',
  'assets/audio/TinhYeuCuaEmKhongCoKhucDaoDau.mp3',
  'assets/audio/VinhTrangKhuyet.mp3',
  'assets/audio/DanhDieuTotDepNhatChoEm.mp3',
  'assets/audio/MuaTinhYeu.mp3',
  'assets/audio/AnhRatHanhPhuc.mp3',
  'assets/audio/XungDoi.mp3',
  'assets/audio/CapDoiDepNhat.mp3',
  'assets/audio/KeoBongGon.mp3',
  'assets/audio/ChimDam.mp3',
  'assets/audio/PhepMauTinhYeu.mp3',
  'assets/audio/TuKhoa.mp3',
  'assets/audio/ThapRoiTuDo.mp3',
  'assets/audio/AnhMuonTroThanh.mp3',
  'assets/audio/GioDemGapEm.mp3',
  'assets/audio/DemVaNgay.mp3',
  'assets/audio/MinhChungCuaNhipDapTraiTim.mp3',
  'assets/audio/MuaHa.mp3',
  'assets/audio/CanMot.mp3',
  'assets/audio/SuatHaiNguoiTotDep.mp3',
  'assets/audio/AtChuBai.mp3',
  'assets/audio/VuiVe.mp3',
  'assets/audio/ChamCham.mp3',
  'assets/audio/CoChut.mp3',
  'assets/audio/CoGai.mp3',
  'assets/audio/RatCan.mp3',
  'assets/audio/RatThichEm.mp3',
  'assets/audio/SoThich.mp3',
  'assets/audio/BiMatCuaAnh.mp3',
  'assets/audio/GioThoiKhiNhoAnh.mp3',
  'assets/audio/LoiToTinhCuaGioDem.mp3',
  'assets/audio/NgonGioDemQuaAnhTrangDemNay.mp3',
  'assets/audio/YeuLaKhacLangManLenTungPhutGiay.mp3',
  'assets/audio/HoangTuongNoiTam.mp3',
  'assets/audio/DamChim.mp3',
  'assets/audio/Em.mp3',
  'assets/audio/NgangQuaNhanGian.mp3',
  'assets/audio/CoChutNgotNgao.mp3',
  'assets/audio/TroiHungNang.mp3',
  'assets/audio/ChiecHopThoiGian.mp3',
  'assets/audio/CungChieuCheCho.mp3',
  'assets/audio/NhietLuyenViKem.mp3',
  'assets/audio/TraDang.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache.concat(audioFiles));
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 