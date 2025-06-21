document.addEventListener("DOMContentLoaded", () => {
  const Video = document.getElementById('interviewVideo');
  const PlayPauseButton = document.getElementById('videoButton');

  if (Video && PlayPauseButton) 
  {
    PlayPauseButton.addEventListener('click', () => {
      if (Video.paused) 
	  {
        Video.play();
      } 
	  else 
	  {
        Video.pause();
      }
    });
	
  // Reset icon when audio ends
     Video.addEventListener('ended', () => 
	  {
        PlayPauseButton.src = './assets/PlayButton.png';
        PlayPauseButton.alt = 'Play Button';
      });
  }
});
