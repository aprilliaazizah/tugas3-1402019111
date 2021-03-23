if (sayHello) {
  const elementSayHello = document.getElementById("say-hello");
  var now = new Date();
  var hour = now.getHours();

  if (elementSayHello) {
    if (($(sayHello) != null) | (hour > 0)) {
      if (hour > 0 && hour < 11) {
        elementSayHello.textContent = `Hello ${sayHello}, Selamat Pagi.`;
      }
      if ((hour >= 11) | (hour < 14)) {
        elementSayHello.textContent = `Hello ${sayHello}, Selamat Siang.`;
      }

      if ((hour >= 15) | (hour >= 18)) {
        elementSayHello.textContent = `Hello ${sayHello}, Selamat Sore.`;
      }

      if (hour > 18) {
        elementSayHello.textContent = `Hello ${sayHello}, Selamat Malam.`;
      }
    }
  }
}

const formSilinder = document.getElementById("hitung-sil");
if (formSilinder) {
  formSilinder.addEventListener("submit", function (e) {
    e.preventDefault();
    const jariSilinder = document.getElementById("input-j-sil").value;
    const tinggiSilinder = document.getElementById("input-t-sil").value;

    const hasilLuasSilinder =
      2 * Math.PI * Math.pow(jariSilinder, 2) +
      2 * Math.PI * jariSilinder * tinggiSilinder;
    const hasilVolumeSilinder =
      Math.PI * Math.pow(jariSilinder, 2) * tinggiSilinder;
    const elHasilPrint = document.getElementById("hasil-sil");
    if (elHasilPrint) {
      if (jariSilinder == "" || tinggiSilinder == "") {
        alert("Input tidak boleh kosong!");
      } else if (jariSilinder < 0 || tinggiSilinder < 0) {
        alert("Input tidak boleh negatif!");
      } else if (isNaN(jariSilinder) || isNaN(tinggiSilinder)) {
        document.getElementById("input-j-sil").value = "";
        document.getElementById("input-t-sil").value = "";
        alert("Input harus angka!");
      } else {
        elHasilPrint.innerHTML = `Hasil Perhitungan <br/>
          Luas Permukaan:  ${hasilLuasSilinder.toFixed(2)} m<sup>2</sup> <br/>
          Volume :  ${hasilVolumeSilinder.toFixed(2)} m<sup>3</sup>`;
      }
    }
  });
}

const formKerucut = document.getElementById("hitung-ker");
if (formKerucut) {
  formKerucut.addEventListener("submit", function (e) {
    e.preventDefault();
    const jariKerucut = document.getElementById("input-j-k").value;
    const garisPelKer = document.getElementById("input-g-k").value;
    const tinggiKerucut = document.getElementById("input-t-k").value;

    const hasilLuasKerucut =
      Math.PI * Math.pow(jariKerucut, 2) + Math.PI * jariKerucut * garisPelKer;
    const hasilVolumeKerucut =
      (1 / 3) * Math.PI * Math.pow(jariKerucut, 2) * tinggiKerucut;
    const elHasilPrintKer = document.getElementById("hasil-ker");
    if (elHasilPrintKer) {
      if (jariKerucut == "" || tinggiKerucut == "" || garisPelKer == "") {
        alert("Input tidak boleh kosong!");
      } else if (jariKerucut < 0 || tinggiKerucut < 0 || garisPelKer < 0) {
        alert("Input tidak boleh negatif!");
      } else if (
        isNaN(jariKerucut) ||
        isNaN(tinggiKerucut) ||
        isNaN(garisPelKer)
      ) {
        document.getElementById("input-j-k").value = "";
        document.getElementById("input-t-k").value = "";
        document.getElementById("input-g-k").value = "";
        alert("Input harus angka!");
      } else {
        elHasilPrintKer.innerHTML = `Hasil Perhitungan <br/> 
          Luas Permukaan:  ${hasilLuasKerucut.toFixed(2)} m<sup>2</sup> <br/>
          Volume :  ${hasilVolumeKerucut.toFixed(2)} m<sup>3</sup>`;
      }
    }
  });
}

const formBola = document.getElementById("hitung-bola");
if (formBola) {
  formBola.addEventListener("submit", function (e) {
    e.preventDefault();
    const jariBola = document.getElementById("input-j-b").value;

    const hasilLuasBola = 4 * Math.PI * Math.pow(jariBola, 2);
    const hasilVolumeBola = (4 / 3) * Math.PI * Math.pow(jariBola, 3);

    const elHasilPrintBola = document.getElementById("hasil-bola");
    if (elHasilPrintBola) {
      if (jariBola == "") {
        alert("Input tidak boleh kosong!");
      } else if (jariBola < 0) {
        alert("Input tidak boleh negatif!");
      } else if (isNaN(jariBola)) {
        document.getElementById("input-j-b").value = "";
        alert("Input harus angka!");
      } else {
        elHasilPrintBola.innerHTML = `Hasil Perhitungan: <br/> 
          Luas Permukaan:  ${hasilLuasBola.toFixed(2)} m<sup>2</sup> <br/>
          Volume :  ${hasilVolumeBola.toFixed(2)} m<sup>3</sup>`;
      }
    }
  });
}
