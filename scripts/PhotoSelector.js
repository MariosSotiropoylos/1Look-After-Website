document.addEventListener("DOMContentLoaded", () => {
     const photos = document.querySelectorAll('.polaroid .photo');

     photos.forEach(photo => 
	 {
      photo.addEventListener('mouseenter', () => {
         photos.forEach(p => p.classList.remove('active'));
         photo.classList.add('active');
                                            });
     });
	});
	