
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('I LOVE U meyyyyy 🫶🏻♥️🫰🏻').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    
    function mulai() {
    // Play musik
    document.getElementById("musik").play();

    // Hilangkan layar hitam
    document.getElementById("overlay").style.display = "none";

    // Jalankan skrip lain (misalnya animasi, lirik, dll)
    if (typeof jalankanLainnya === "function") {
      jalankanLainnya();
    }
  }


    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
