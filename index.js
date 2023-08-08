// Import module first
const { snapsave } = require('@bochilteam/scraper');

async function fetchInstagramMedia(url) {
  try {
    const data = await snapsave(url);
    const mediaUrls = data.map(item => item.url);

    console.log(mediaUrls);

   
  } catch (error) {
    console.error('Bir hata oluştu:', error);
  }
}

fetchInstagramMedia('https://www.instagram.com/p/CuJUudGMxYE/?hl=ms');


/*

// Import module first
const { snapsave } = require('@bochilteam/scraper');

async function fetchInstagramMedia(url) {
  try {
    const data = await snapsave(url);
    const mediaUrls = data.map(item => item.url);
    let hasSentMedia = false;

    // Buradan itibaren, medya URL'lerini mesaj olarak göndermek için uygun bir bot kütüphanesini kullanabilirsiniz.
    // Örnek olarak, mediaUrls içindeki URL'leri "conn.sendMessage" ile gönderme işlemi:
    for (let i = 0; i < mediaUrls.length; i++) {
      if (mediaUrls[i].includes('https://snapxcdn.com')) {
        // Eğer medya URL'si video ise
        conn.sendMessage(from, { video: { url: mediaUrls[i] } }, { quoted: mek });
        hasSentMedia = true;
      } else if (mediaUrls[i].includes('.jpg')) {
        // Eğer medya URL'si resim ise
        conn.sendMessage(from, { image: { url: mediaUrls[i] } }, { quoted: mek });
        hasSentMedia = true;
      }
    }

    if (!hasSentMedia) {
      // Eğer medya bulunamadı hatası verdiyse
      console.log('Medya bulunamadı veya desteklenmiyor.');
      conn.sendMessage(from, { text: 'Medya bulunamadı veya desteklenmiyor.' }, { quoted: mek });
    }

  } catch (error) {
    console.error('Bir hata oluştu:', error);
    conn.sendMessage(from, { text: 'Bir hata oluştu.' }, { quoted: mek });
  }
}

// Kullanıcıdan alınan Instagram gönderisi URL'sini fonksiyona göndererek işlemi gerçekleştirebilirsiniz.
// Örnek olarak, bir WhatsApp botunda kullanıcının girdiği URL'yi işlemek:
case 'ig':
  fetchInstagramMedia(q); // Kullanıcının girdiği Instagram gönderisi URL'sini fonksiyona gönderiyoruz.
  break;


*/
