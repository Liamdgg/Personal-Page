
const toggleBtn = document.getElementById('toggleVideo');
const video = document.getElementById('bgVideo');
let visible = true;

toggleBtn.addEventListener('click', () => {
  visible = !visible;
  if (visible) {
    video.classList.remove('video-hidden');
    toggleBtn.textContent = "Turn Video Off";
  } else {
    video.classList.add('video-hidden');
    toggleBtn.textContent = "Turn Video On";
  }
});


const modal = document.getElementById('gameModal');
const modalVideo = document.getElementById('gameTrailer');
const closeModal = document.querySelector('.close');

const gameVideos = {
  "game1.jpg": "https://www.youtube.com/embed/5xy4n73WOMM?si=BBXqRfLHIhHtZrmt", 
  "game2.jpeg": "https://www.youtube.com/embed/fbbqlvuovQ0?si=k0u5GKDK53aQd5NZ", 
  "game3.jpg": "https://www.youtube.com/embed/BZTfi1jv-EE?si=Po8wQyFjmWcwbU18",  
  "game4.jpg": "https://www.youtube.com/embed/x993FRC4rXA?si=asdgTL8iZIUKbg7c", 
  "game5.jpg": "https://www.youtube.com/embed/Ro6r15wzp2o?si=OgWtaQLeO0bFQFD_", 
  "game6.jpg": "https://www.youtube.com/embed/H2Y8XCe7F9E?si=DPDl1mfUWnkrqT8K", 
  "game7.png": "https://www.youtube.com/embed/bTWTFX8qzPI?si=iOzj_PH3Cx-8wGlH", 
  "game8.jpg": "https://www.youtube.com/embed/ktw2k3m7Qko?si=bcGFFADymob48eOW", 
  "game9.jpg": "https://www.youtube.com/embed/MmB9b5njVbA?si=MPRVim4ceqKVr_eR", 
  "game10.jpg": "https://www.youtube.com/embed/Vs2piSWfofQ?si=AuyVq_RoP72R1R5Q", 

};

document.querySelectorAll('.article').forEach(article => {
  article.addEventListener('click', () => {
    const bg = article.style.getPropertyValue('--bg');
    // Clean the url(...) syntax and extract just the filename
    const cleanBg = bg.replace(/url\(['"]?(?:\.\.\/)*images\/([^'")]+)['"]?\)/, '$1');
    const fileName = cleanBg.trim();

    if (fileName && gameVideos[fileName]) {
      modalVideo.src = gameVideos[fileName];
      modal.style.display = 'flex';
    } else {
      console.warn("No trailer found for:", fileName, "from", bg);
    }
  });
});


closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  modalVideo.src = ''; 
});

