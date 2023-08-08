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
