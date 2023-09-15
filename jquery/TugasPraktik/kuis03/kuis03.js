// Fungsi untuk mengecek apakah rumah memenuhi kriteria
function cekKelayakanRumah() {
    const kriteriaKawasan = {
      tidakRawanBanjir: !document.getElementById("rawanBanjir").checked,
      tidakRawanLongsor: !document.getElementById("rawanLongsor").checked,
      tidakAdaPabrik: !document.getElementById("adaPabrik").checked,
    };
    const kriteriaLuasan = {
      luasTanah: parseFloat(document.getElementById("luasTanah").value),
      luasBangunan: parseFloat(document.getElementById("luasBangunan").value),
    };
    const fasilitas = {
      kolamRenang: document.getElementById("kolamRenang").checked,
      parkirLuas: document.getElementById("parkirLuas").checked,
      kebunBelakang: document.getElementById("kebunBelakang").checked,
    };
  
    if (
      kriteriaKawasan.tidakRawanBanjir &&
      kriteriaKawasan.tidakRawanLongsor &&
      kriteriaKawasan.tidakAdaPabrik &&
      kriteriaLuasan.luasTanah >= 800 &&
      kriteriaLuasan.luasBangunan >= 400 &&
      fasilitas.kolamRenang &&
      fasilitas.parkirLuas &&
      fasilitas.kebunBelakang
    ) {
      return true;
    } else {
      return false;
    }
  }
  
  // Fungsi untuk menampilkan hasil seleksi
  function tampilkanHasilSeleksi() {
    const hasilSeleksi = document.getElementById("hasilSeleksi");
    const rumah = cekKelayakanRumah();
    hasilSeleksi.innerHTML = rumah
      ? "Rumah memenuhi kriteria, dapat dipertimbangkan."
      : "Rumah tidak memenuhi kriteria.";
  }
  
  // Mengaitkan tombol "Cek Kelayakan" dengan fungsi tampilkanHasilSeleksi
  document.getElementById("cekKelayakan").addEventListener("click", tampilkanHasilSeleksi);
  