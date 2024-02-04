function resizeAndDownload() {
  const input = document.getElementById("input");
  const files = input.files;
  const downloadDelay = 1500; // Yarım saniye bekleme süresi (milisaniye cinsinden)

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();
    const delay = i * downloadDelay; // Her resim için artan bekleme süresi

    reader.onload = function (event) {
      const img = new Image();
      img.onload = function () {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        // Ölçeklendirme işlemleri
        const dpi = 96; // Hedeflenen DPI değeri
        const scale = dpi / 72; // Ölçek faktörü hesaplanıyor

        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const MAX_WIDTH = 400;
        const MAX_HEIGHT = 400;
        let width = canvas.width;
        let height = canvas.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx2 = canvas.getContext("2d");
        ctx2.drawImage(img, 0, 0, canvas.width, canvas.height);

        setTimeout(function () {
          canvas.toBlob(function (blob) {
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = file.name.replace(/\.[^/.]+$/, ".webp");
            a.click();
            URL.revokeObjectURL(url);
          }, "image/webp", 0.8);
        }, delay);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
}
