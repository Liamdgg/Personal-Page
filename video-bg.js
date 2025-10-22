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
