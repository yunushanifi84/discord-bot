/**
 *
 * @param {String} sehirismi
 *
 */
function townConvert(sehirismi) {
  let KucukSehirIsm = sehirismi.toLowerCase();
  let sonucSehir = " ";
  if (KucukSehirIsm == "adana") sonucSehir = "Adana";
  else if (KucukSehirIsm == "adıyaman") sonucSehir = "Adıyaman";
  else if (KucukSehirIsm == "afyon") sonucSehir = "Afyon";
  else if (KucukSehirIsm == "ağrı") sonucSehir = "Ağrı";
  else if (KucukSehirIsm == "amasya") sonucSehir = "Amasya";
  else if (KucukSehirIsm == "ankara") sonucSehir = "Ankara";
  else if (KucukSehirIsm == "antalya") sonucSehir = "Antalya";
  else if (KucukSehirIsm == "artvin") sonucSehir = "Artvin";
  else if (KucukSehirIsm == "aydın") sonucSehir = "Aydın";
  else if (KucukSehirIsm == "balıkesir") sonucSehir = "Balıkesir";
  else if (KucukSehirIsm == "bilecik") sonucSehir = "Bilecik";
  else if (KucukSehirIsm == "bingöl") sonucSehir = "Bingöl";
  else if (KucukSehirIsm == "bitlis") sonucSehir = "Bitlis";
  else if (KucukSehirIsm == "bolu") sonucSehir = "Bolu";
  else if (KucukSehirIsm == "burdur") sonucSehir = "Burdur";
  else if (KucukSehirIsm == "bursa") sonucSehir = "Bursa";
  else if (KucukSehirIsm == "çanakkale") sonucSehir = "Çanakkale";
  else if (KucukSehirIsm == "çankırı") sonucSehir = "Çankırı";
  else if (KucukSehirIsm == "çorum") sonucSehir = "Çorum";
  else if (KucukSehirIsm == "denizli") sonucSehir = "Denizli";
  else if (KucukSehirIsm == "diyarbakır") sonucSehir = "Diyarbakır";
  else if (KucukSehirIsm == "edirne") sonucSehir = "Edirne";
  else if (KucukSehirIsm == "elazığ") sonucSehir = "Elazığ";
  else if (KucukSehirIsm == "erzincan") sonucSehir = "Erzincan";
  else if (KucukSehirIsm == "erzurum") sonucSehir = "Erzurum";
  else if (KucukSehirIsm == "eskişehir") sonucSehir = "Eskişehir";
  else if (KucukSehirIsm == "gaziantep") sonucSehir = "Gaziantep";
  else if (KucukSehirIsm == "giresun") sonucSehir = "Giresun";
  else if (KucukSehirIsm == "gümüşhane") sonucSehir = "Gümüşhane";
  else if (KucukSehirIsm == "hakkari") sonucSehir = "Hakkari";
  else if (KucukSehirIsm == "hatay") sonucSehir = "Hatay";
  else if (KucukSehirIsm == "ısparta") sonucSehir = "Isparta";
  else if (KucukSehirIsm == "mersin") sonucSehir = "Mersin";
  else if (KucukSehirIsm == "istanbul") sonucSehir = "İstanbul";
  else if (KucukSehirIsm == "izmir") sonucSehir = "İzmir";
  else if (KucukSehirIsm == "kars") sonucSehir = "Kars";
  else if (KucukSehirIsm == "kastamonu") sonucSehir = "Kastamonu";
  else if (KucukSehirIsm == "kayseri") sonucSehir = "Kayseri";
  else if (KucukSehirIsm == "kırkareli") sonucSehir = "Kırklareli";
  else if (KucukSehirIsm == "kırşehir") sonucSehir = "Kırşehir";
  else if (KucukSehirIsm == "kocaeli") sonucSehir = "Kocaeli";
  else if (KucukSehirIsm == "konya") sonucSehir = "Konya";
  else if (KucukSehirIsm == "kütahya") sonucSehir = "Kütahya";
  else if (KucukSehirIsm == "malatya") sonucSehir = "Malatya";
  else if (KucukSehirIsm == "manisa") sonucSehir = "Manisa";
  else if (KucukSehirIsm == "kahramanmaraş") sonucSehir = "Kahramanmaraş";
  else if (KucukSehirIsm == "mardin") sonucSehir = "Mardin";
  else if (KucukSehirIsm == "muğla") sonucSehir = "Muğla";
  else if (KucukSehirIsm == "muş") sonucSehir = "Muş";
  else if (KucukSehirIsm == "nevşehir") sonucSehir = "Nevşehir";
  else if (KucukSehirIsm == "niğde") sonucSehir = "Niğde";
  else if (KucukSehirIsm == "ordu") sonucSehir = "Ordu";
  else if (KucukSehirIsm == "rize") sonucSehir = "Rize";
  else if (KucukSehirIsm == "sakarya") sonucSehir = "Sakarya";
  else if (KucukSehirIsm == "samsun") sonucSehir = "Samsun";
  else if (KucukSehirIsm == "siirt") sonucSehir = "Siirt";
  else if (KucukSehirIsm == "sinop") sonucSehir = "Sinop";
  else if (KucukSehirIsm == "sivas") sonucSehir = "Sivas";
  else if (KucukSehirIsm == "tekirdağ") sonucSehir = "Tekirdağ";
  else if (KucukSehirIsm == "tokat") sonucSehir = "Tokat";
  else if (KucukSehirIsm == "trabzon") sonucSehir = "Trabzon";
  else if (KucukSehirIsm == "tunceli") sonucSehir = "Tunceli";
  else if (KucukSehirIsm == "şanlıurfa") sonucSehir = "Şanlıurfa";
  else if (KucukSehirIsm == "uşak") sonucSehir = "Uşak";
  else if (KucukSehirIsm == "van") sonucSehir = "Van";
  else if (KucukSehirIsm == "yozgat") sonucSehir = "Yozgat";
  else if (KucukSehirIsm == "zonguldak") sonucSehir = "Zonguldak";
  else if (KucukSehirIsm == "aksaray") sonucSehir = "Aksaray";
  else if (KucukSehirIsm == "bayburt") sonucSehir = "Bayburt";
  else if (KucukSehirIsm == "karaman") sonucSehir = "Karaman";
  else if (KucukSehirIsm == "kırıkkale") sonucSehir = "Kırıkkale";
  else if (KucukSehirIsm == "batman") sonucSehir = "Batman";
  else if (KucukSehirIsm == "şırnak") sonucSehir = "Şırnak";
  else if (KucukSehirIsm == "bartın") sonucSehir = "Bartın";
  else if (KucukSehirIsm == "ardahan") sonucSehir = "Ardahan";
  else if (KucukSehirIsm == "ığdır") sonucSehir = "Iğdır";
  else if (KucukSehirIsm == "yalova") sonucSehir = "Yalova";
  else if (KucukSehirIsm == "karabük") sonucSehir = "Karabük";
  else if (KucukSehirIsm == "kilis") sonucSehir = "Kilis";
  else if (KucukSehirIsm == "osmaniye") sonucSehir = "Osmaniye";
  else if (KucukSehirIsm == "düzce") sonucSehir = "Düzce";
  else sonucSehir = "Bos";
  return sonucSehir;
}

module.exports = { townConvert };
