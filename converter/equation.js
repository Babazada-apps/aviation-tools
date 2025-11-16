function calc() {
  let V = document.getElementById("V").value;
  let U = document.getElementById("U").value;
  let psy = document.getElementById("psy").value;
  let maxPsy = document.getElementById("psy").max;
  let minPsy = document.getElementById("psy").min;
  let MK = document.getElementById("MK").value;
  let maxMKK = document.getElementById("MK").max;
  let minMKK = document.getElementById("MK").min;
  let KB = document.getElementById("KB");
  let AB = document.getElementById("AB");
  let V1 = document.getElementById("V1");
  let run = document.getElementById("run");
  let clear = document.getElementById("clear");

  const VV = Number(V);
  const UU = eval(Number(U) * 3.6);
  const psyNum = Number(psy);
  const MKK = Number(MK);

  if (psyNum > maxPsy) {
    alert("Dərəcə 360-dan çox ola bilməz");
    document.getElementById("psy").value = "360";
  }
  if (MKK > maxMKK) {
    alert("Dərəcə 360-dan çox ola bilməz");
    document.getElementById("MK").value = "360";
  }

  let toRad = function toRad(angle) {
    return angle * (Math.PI / 180);
  };

  //Evaluation of wind angle
  if (psyNum < 180) {
    let KB1 = eval(psyNum + 180 - MKK);
    document.getElementById("KB").value = KB1;
  } else if (psyNum >= 180) {
    let KB2 = eval(psyNum - 180 - MKK);
    document.getElementById("KB").value = KB2;
  }

  //Evaluation of wind correction angle
  let us = (document.getElementById("AB").value = eval(
    Math.round(
      ((UU * 60) / VV) * Math.sin(toRad(document.getElementById("KB").value))
    )
  ));
  let mkHesab = MKK - us;
  document.getElementById("mkHesab").value = mkHesab;
  let fmyb = MKK + us;

  document.getElementById("fmyb").value = fmyb;
  console.log(us);
  console.log(document.getElementById("fmyb").value);
  //evaluation of speed correction
  let VV1 = Math.round(
    eval(VV + Math.cos(toRad(document.getElementById("KB").value)) * UU)
  );
  document.getElementById("V1").value = VV1;
}

run.addEventListener("click", (e) => {
  calc();
});
let clear = document.getElementById("clear");
clear.addEventListener("click", (event) => {
  console.log("clicked");
  document.getElementById("form1").reset();
  console.clear();
});

let convertation = () => {
  let mm = Number(document.getElementById("mm").value);
  let mb = Number(document.getElementById("mb").value);
  let run2 = document.getElementById("run2");
  mm1 = Math.round(eval(mm * 1.33322));
  mb1 = Math.round(eval(mb / 1.33322));
  document.getElementById("mm").value = mb1;
  document.getElementById("mb").value = mm1;
};
run2.addEventListener("click", (event) => {
  convertation();
});
clear2.addEventListener("click", (event) => {
  document.getElementById("form2").reset();
  console.clear();
});

//CONTAİNER 3
function convertation3() {
  let h = document.getElementById("H").value;
  let t = document.getElementById("t").value;
  let m = document.getElementById("m").value;

  //7000
  if (t <= 20 && h <= 6000) {
    document.getElementById("m").value = 7000 + "kg";
  }

  if (t <= 21 && h <= 5800) {
    document.getElementById("m").value = 7100+ "kg";
  }

  //7200
  if (t <= 23 && h <= 5600) {
    document.getElementById("m").value = 7200+ "kg";
  }
  if (t <= 20 && h <= 5800) {
    document.getElementById("m").value = 7200+ "kg";
  }
  if (t <= 16 && h <= 6000) {
    document.getElementById("m").value = 7200+ "kg";
  }

  //7400
  //EXtra
  if (t <= 27 && h <= 5200) {
    document.getElementById("m").value = 7500+ "kg";
  }
  //Main
  if (t <= 25 && h <= 5400) {
    document.getElementById("m").value = 7400+ "kg";
  }
  if (t <= 20 && h <= 5600) {
    document.getElementById("m").value = 7400+ "kg";
  }
  if (t <= 17 && h <= 5800) {
    document.getElementById("m").value = 7400+ "kg";
  }
  if (t <= 13 && h <= 6000) {
    document.getElementById("m").value = 7400+ "kg";
  }

  //7600
  if (t <= 28 && h <= 5000) {
    document.getElementById("m").value = 7600+ "kg";
  }
  if (t <= 25 && h <= 5200) {
    document.getElementById("m").value = 7600+ "kg";
  }
  if (t <= 21 && h <= 5400) {
    document.getElementById("m").value = 7600+ "kg";
  }
  if (t <= 18 && h <= 5600) {
    document.getElementById("m").value = 7600+ "kg";
  }
  if (t <= 14 && h <= 5800) {
    document.getElementById("m").value = 7600+ "kg";
  }
  if (t <= 10 && h <= 6000) {
    document.getElementById("m").value = 7600+ "kg";
  }

  //7800
  if (t <= 29 && h <= 4800) {
    document.getElementById("m").value = 7800+ "kg";
  }
  if (t <= 25 && h <= 5000) {
    document.getElementById("m").value = 7800+ "kg";
  }
  if (t <= 21 && h <= 5200) {
    document.getElementById("m").value = 7800+ "kg";
  }
  if (t <= 18 && h <= 5400) {
    document.getElementById("m").value = 7800+ "kg";
  }
  if (t <= 15 && h <= 5600) {
    document.getElementById("m").value = 7800+ "kg";
  }
  if (t <= 10 && h <= 5800) {
    document.getElementById("m").value = 7800+ "kg";
  }
  if (t <= 6 && h <= 6000) {
    document.getElementById("m").value = 7800+ "kg";
  }

  //8000
  if (t <= 29 && h <= 4600) {
    document.getElementById("m").value = 8000+ "kg";
  }
  if (t <= 26 && h <= 4800) {
    document.getElementById("m").value = 8000+ "kg";
  }
  if (t <= 21 && h <= 5000) {
    document.getElementById("m").value = 8000+ "kg";
  }
  if (t <= 19 && h <= 5200) {
    document.getElementById("m").value = 8000+ "kg";
  }
  if (t <= 15 && h <= 5400) {
    document.getElementById("m").value = 8000+ "kg";
  }
  if (t <= 11 && h <= 5600) {
    document.getElementById("m").value = 8000+ "kg";
  }
  if (t <= 6 && h <= 5800) {
    document.getElementById("m").value = 8000+ "kg";
  }
  if (t <= 3 && h <= 6000) {
    document.getElementById("m").value = 8000+ "kg";
  }

  //Extra
  if (t <= 31 && h <= 4400) {
    document.getElementById("m").value = 8100+ "kg";
  }
  if (t <= 20 && h <= 4600) {
    document.getElementById("m").value = 7900+ "kg";
  }

  //8200kg
  if (t <= 32 && h <= 4200) {
    document.getElementById("m").value = 8200+ "kg";
  }
  if (t <= 30 && h <= 4400) {
    document.getElementById("m").value = 8200+ "kg";
  }
  if (t <= 25 && h <= 4600) {
    document.getElementById("m").value = 8200+ "kg";
  }
  if (t <= 22 && h <= 4800) {
    document.getElementById("m").value = 8200+ "kg";
  }
  if (t <= 19 && h <= 5000) {
    document.getElementById("m").value = 8200+ "kg";
  }
  if (t <= 15 && h <= 5200) {
    document.getElementById("m").value = 8200+ "kg";
  }
  if (t <= 11 && h <= 5400) {
    document.getElementById("m").value = 8200+ "kg";
  }
  if (t <= 18 && h <= 5600) {
    document.getElementById("m").value = 8200+ "kg";
  }
  if (t <= 13 && h <= 5800) {
    document.getElementById("m").value = 8200+ "kg";
  }
  if (t <= -1 && h <= 6000) {
    document.getElementById("m").value = 8200+ "kg";
  }

  //8400kg

  //Main
  if (t <= 34 && h <= 4000) {
    document.getElementById("m").value = 8400+ "kg";
  }
  if (t <= 31 && h <= 4200) {
    document.getElementById("m").value = 8400+ "kg";
  }
  if (t <= 26 && h <= 4400) {
    document.getElementById("m").value = 8400+ "kg";
  }
  if (t <= 23 && h <= 4600) {
    document.getElementById("m").value = 8400+ "kg";
  }
  if (t <= 19 && h <= 4800) {
    document.getElementById("m").value = 8400+ "kg";
  }
  if (t <= 16 && h <= 5000) {
    document.getElementById("m").value = 8400+ "kg";
  }
  if (t <= 12 && h <= 5200) {
    document.getElementById("m").value = 8400+ "kg";
  }
  if (t <= 9 && h <= 5400) {
    document.getElementById("m").value = 8400+ "kg";
  }
  if (t <= 5 && h <= 5600) {
    document.getElementById("m").value = 8400+ "kg";
  }
  if (t <= -1 && h <= 5800) {
    document.getElementById("m").value = 8400+ "kg";
  }
  if (t <= -4 && h <= 6000) {
    document.getElementById("m").value = 8400+ "kg";
  }
  //Extra settings
  if (t <= -7 && h <= 6000) {
    document.getElementById("m").value = 8500+ "kg";
  }
  if (t <= -21 && h <= 6000) {
    document.getElementById("m").value = 8400+ "kg";
  }
  if (t <= -34 && h <= 6000) {
    document.getElementById("m").value = 8300+ "kg";
  }
  if (t <= -51 && h <= 6000) {
    document.getElementById("m").value = 8200+ "kg";
  }
  //Extra
  if (t <= 35 && h <= 3800) {
    document.getElementById("m").value = 8500+ "kg";
  }

  //8600kg

  //Main
  if (t <= 38 && h <= 3600) {
    document.getElementById("m").value = 8600+ "kg";
  }
  if (t <= 34 && h <= 3800) {
    document.getElementById("m").value = 8600+ "kg";
  }
  if (t <= 30 && h <= 4000) {
    document.getElementById("m").value = 8600+ "kg";
  }
  if (t <= 27 && h <= 4200) {
    document.getElementById("m").value = 8600+ "kg";
  }
  if (t <= 24 && h <= 4400) {
    document.getElementById("m").value = 8600+ "kg";
  }
  if (t <= 20 && h <= 4600) {
    document.getElementById("m").value = 8600+ "kg";
  }
  if (t <= 17 && h <= 4800) {
    document.getElementById("m").value = 8600+ "kg";
  }
  if (t <= 13 && h <= 5000) {
    document.getElementById("m").value = 8600+ "kg";
  }
  if (t <= 9 && h <= 5200) {
    document.getElementById("m").value = 8600+ "kg";
  }
  if (t <= 5 && h <= 5400) {
    document.getElementById("m").value = 8600+ "kg";
  }
  if (t <= 1 && h <= 5600) {
    document.getElementById("m").value = 8600+ "kg";
  }
  if (t <= -4 && h <= 5800) {
    document.getElementById("m").value = 8600+ "kg";
  }
  //Extra
  if (t <= 39 && h <= 3400) {
    document.getElementById("m").value = 8700+ "kg";
  }
  //Extra settings
  if (t <= -4 && h <= 5800) {
    document.getElementById("m").value = 8600+ "kg";
  }
  if (t <= -4 && h <= 5800) {
    document.getElementById("m").value = 8600+ "kg";
  }
  if (t <= -4 && h <= 5800) {
    document.getElementById("m").value = 8600+ "kg";
  }
  if (t <= -4 && h <= 5800) {
    document.getElementById("m").value = 8600+ "kg";
  }
  if (t <= -4 && h <= 5800) {
    document.getElementById("m").value = 8600+ "kg";
  }

  //8800kg
  if (t <= 39 && h <= 3200) {
    document.getElementById("m").value = 8800+ "kg";
  }
  if (t <= 36 && h <= 3400) {
    document.getElementById("m").value = 8800+ "kg";
  }
  if (t <= 34 && h <= 3600) {
    document.getElementById("m").value = 8800+ "kg";
  }
  if (t <= 31 && h <= 3800) {
    document.getElementById("m").value = 8800+ "kg";
  }
  if (t <= 28 && h <= 4000) {
    document.getElementById("m").value = 8800+ "kg";
  }
  if (t <= 25 && h <= 4200) {
    document.getElementById("m").value = 8800+ "kg";
  }
  if (t <= 21 && h <= 4400) {
    document.getElementById("m").value = 8800+ "kg";
  }
  if (t <= 17 && h <= 4600) {
    document.getElementById("m").value = 8800+ "kg";
  }
  if (t <= 15 && h <= 4800) {
    document.getElementById("m").value = 8800+ "kg";
  }
  if (t <= 9 && h <= 5000) {
    document.getElementById("m").value = 8800+ "kg";
  }
  if (t <= 5 && h <= 5200) {
    document.getElementById("m").value = 8800+ "kg";
  }
  if (t <= 0 && h <= 5400) {
    document.getElementById("m").value = 8800+ "kg";
  }
  if (t <= -3 && h <= 5600) {
    document.getElementById("m").value = 8800+ "kg";
  }
  if (t <= -8 && h <= 5800) {
    document.getElementById("m").value = 8800+ "kg";
  }
  //Extra settings
  if (t <= -20 && h <= 5800) {
    document.getElementById("m").value = 8700+ "kg";
  }
  if (t <= -29 && h <= 5800) {
    document.getElementById("m").value = 8600+ "kg";
  }
  if (t <= -41 && h <= 5800) {
    document.getElementById("m").value = 8500+ "kg";
  }
  if (t <= -60 && h <= 5800) {
    document.getElementById("m").value = 8400+ "kg";
  }

  //9000kg
  if (t <= 40 && h <= 3000) {
    document.getElementById("m").value = 9000+ "kg";
  }
  if (t <= 37 && h <= 3200) {
    document.getElementById("m").value = 9000+ "kg";
  }
  if (t <= 34 && h <= 3400) {
    document.getElementById("m").value = 9000+ "kg";
  }
  if (t <= 31 && h <= 3600) {
    document.getElementById("m").value = 9000+ "kg";
  }
  if (t <= 28 && h <= 3800) {
    document.getElementById("m").value = 9000+ "kg";
  }
  if (t <= 25 && h <= 4000) {
    document.getElementById("m").value = 9000+ "kg";
  }
  if (t <= 22 && h <= 4200) {
    document.getElementById("m").value = 9000+"kg";
  }
  if (t <= 18 && h <= 4400) {
    document.getElementById("m").value = 9000+"kg";
  }
  if (t <= 15 && h <= 4800) {
    document.getElementById("m").value = 9000+"kg";
  }
  if (t <= 11 && h <= 5000) {
    document.getElementById("m").value = 9000+"kg";
  }
  if (t <= 6 && h <= 5200) {
    document.getElementById("m").value = 9000+"kg";
  }
  if (t <= 2 && h <= 5400) {
    document.getElementById("m").value = 9000+"kg";
  }
  if (t <= -2 && h <= 5600) {
    document.getElementById("m").value = 9000+"kg";
  }
  if (t <= -5 && h <= 5600) {
    document.getElementById("m").value = 9000+"kg";
  }
  //Extra settings
  if (t <= -8 && h <= 5600) {
    document.getElementById("m").value = 9100+ "kg";
  }
  if (t <= -11 && h <= 5600) {
    document.getElementById("m").value = 9000+"kg";
  }
  if (t <= -21 && h <= 5600) {
    document.getElementById("m").value = 8900+ "kg";
  }
  if (t <= -32 && h <= 5600) {
    document.getElementById("m").value = 8800+ "kg";
  }
  if (t <= -50 && h <= 5600) {
    document.getElementById("m").value = 8700+ "kg";
  }

  //9200kg
  if (t <= 44 && h <= 2600) {
    document.getElementById("m").value = 9200+"kg";
  }
  if (t <= 42 && h <= 2800) {
    document.getElementById("m").value = 9200+"kg";
  }
  if (t <= 37 && h <= 3000) {
    document.getElementById("m").value = 9200+"kg";
  }
  if (t <= 35 && h <= 3200) {
    document.getElementById("m").value = 9200+"kg";
  }
  if (t <= 31 && h <= 3400) {
    document.getElementById("m").value = 9200+"kg";
  }
  if (t <= 29 && h <= 3600) {
    document.getElementById("m").value = 9200+"kg";
  }
  if (t <= 26 && h <= 3800) {
    document.getElementById("m").value = 9200+"kg";
  }
  if (t <= 24 && h <= 4000) {
    document.getElementById("m").value = 9200+"kg";
  }
  if (t <= 19 && h <= 4200) {
    document.getElementById("m").value = 9200+"kg";
  }
  if (t <= 16 && h <= 4400) {
    document.getElementById("m").value = 9200+"kg";
  }
  if (t <= 10 && h <= 4600) {
    document.getElementById("m").value = 9200+"kg";
  }
  if (t <= 9 && h <= 4800) {
    document.getElementById("m").value = 9200+"kg";
  }
  if (t <= 3 && h <= 5000) {
    document.getElementById("m").value = 9200+"kg";
  }
  if (t <= -1 && h <= 5200) {
    document.getElementById("m").value = 9200+"kg";
  }
  if (t <= -5 && h <= 5400) {
    document.getElementById("m").value = 9200+"kg";
  }
  //Extra settings
  if (t <= -8 && h <= 5400) {
    document.getElementById("m").value = 9300+ "kg";
  }
  if (t <= -18 && h <= 5400) {
    document.getElementById("m").value = 9200+"kg";
  }
  if (t <= -29 && h <= 5400) {
    document.getElementById("m").value = 9100+ "kg";
  }
  if (t <= -40 && h <= 5400) {
    document.getElementById("m").value = 9000+ "kg";
  }
  if (t <= -60 && h <= 5400) {
    document.getElementById("m").value = 8900+ "kg";
  }

  //9400kg
  if (t <= 44 && h <= 2400) {
    document.getElementById("m").value = 9400+"kg";
  }
  if (t <= 41 && h <= 2600) {
    document.getElementById("m").value = 9400+"kg";
  }
  if (t <= 38 && h <= 2800) {
    document.getElementById("m").value = 9400+"kg";
  }
  if (t <= 35 && h <= 3000) {
    document.getElementById("m").value = 9400+"kg";
  }
  if (t <= 32 && h <= 3200) {
    document.getElementById("m").value = 9400+"kg";
  }
  if (t <= 29 && h <= 3400) {
    document.getElementById("m").value = 9400+"kg";
  }
  if (t <= 26 && h <= 3600) {
    document.getElementById("m").value = 9400+"kg";
  }
  if (t <= 23 && h <= 3800) {
    document.getElementById("m").value = 9400+"kg";
  }
  if (t <= 20 && h <= 4000) {
    document.getElementById("m").value = 9400+"kg";
  }
  if (t <= 17 && h <= 4200) {
    document.getElementById("m").value = 9400+"kg";
  }
  if (t <= 14 && h <= 4400) {
    document.getElementById("m").value = 9400+"kg";
  }
  if (t <= 8 && h <= 4600) {
    document.getElementById("m").value = 9400+"kg";
  }
  if (t <= 5 && h <= 4800) {
    document.getElementById("m").value = 9400+"kg";
  }
  if (t <= 0 && h <= 5000) {
    document.getElementById("m").value = 9400+"kg";
  }
  if (t <= -3 && h <= 5200) {
    document.getElementById("m").value = 9400+"kg";
  }
  //Extra settings
  if (t <= -6 && h <= 5200) {
    document.getElementById("m").value = 9500+ "kg";
  }
  if (t <= -20 && h <= 5200) {
    document.getElementById("m").value = 9400+ "kg";
  }
  if (t <= -32 && h <= 5200) {
    document.getElementById("m").value = 9300+ "kg";
  }
  if (t <= -49 && h <= 5200) {
    document.getElementById("m").value = 9200+ "kg";
  }

  //9600kg
  if (t <= 47 && h <= 2200) {
    document.getElementById("m").value = 9600+"kg";
  }
  if (t <= 42 && h <= 2400) {
    document.getElementById("m").value = 9600+"kg";
  }
  if (t <= 39 && h <= 2600) {
    document.getElementById("m").value = 9600+"kg";
  }
  if (t <= 36 && h <= 2800) {
    document.getElementById("m").value = 9600+"kg";
  }
  if (t <= 32 && h <= 3000) {
    document.getElementById("m").value = 9600+"kg";
  }
  if (t <= 30 && h <= 3200) {
    document.getElementById("m").value = 9600+"kg";
  }
  if (t <= 27 && h <= 3400) {
    document.getElementById("m").value = 9600+"kg";
  }
  if (t <= 24 && h <= 3600) {
    document.getElementById("m").value = 9600+"kg";
  }
  if (t <= 20 && h <= 3800) {
    document.getElementById("m").value = 9600+"kg";
  }
  if (t <= 18 && h <= 4000) {
    document.getElementById("m").value = 9600+"kg";
  }
  if (t <= 15 && h <= 4200) {
    document.getElementById("m").value = 9600+"kg";
  }
  if (t <= 10 && h <= 4400) {
    document.getElementById("m").value = 9600+"kg";
  }
  if (t <= 5 && h <= 4600) {
    document.getElementById("m").value = 9600+"kg";
  }
  if (t <= 0 && h <= 4800) {
    document.getElementById("m").value = 9600+"kg";
  }
  if (t <= -4 && h <= 5000) {
    document.getElementById("m").value = 9600+"kg";
  }

  //9800kg
  if (t <= 48 && h <= 2000) {
    document.getElementById("m").value = 9800+"kg";
  }
  if (t <= 43 && h <= 2200) {
    document.getElementById("m").value = 9800+"kg";
  }
  if (t <= 40 && h <= 2400) {
    document.getElementById("m").value = 9800+"kg";
  }
  if (t <= 37 && h <= 2600) {
    document.getElementById("m").value = 9800+"kg";
  }
  if (t <= 35 && h <= 2800) {
    document.getElementById("m").value = 9800+"kg";
  }
  if (t <= 30 && h <= 3000) {
    document.getElementById("m").value = 9800+"kg";
  }
  if (t <= 28 && h <= 3200) {
    document.getElementById("m").value = 9800+"kg";
  }
  if (t <= 25 && h <= 3400) {
    document.getElementById("m").value = 9800+"kg";
  }
  if (t <= 20 && h <= 3600) {
    document.getElementById("m").value = 9800+"kg";
  }
  if (t <= 17 && h <= 3800) {
    document.getElementById("m").value = 9800+"kg";
  }
  if (t <= 15 && h <= 4000) {
    document.getElementById("m").value = 9800+"kg";
  }
  if (t <= 10 && h <= 4200) {
    document.getElementById("m").value = 9800+"kg";
  }
  if (t <= 8 && h <= 4400) {
    document.getElementById("m").value = 9800+"kg";
  }
  if (t <= 3 && h <= 4600) {
    document.getElementById("m").value = 9800+"kg";
  }
  if (t <= -1 && h <= 4800) {
    document.getElementById("m").value = 9800+"kg";
  }
  if (t <= -6 && h <= 5000) {
    document.getElementById("m").value = 9800+"kg";
  }
  //Extra settings
  if (t <= -15 && h <= 5000) {
    document.getElementById("m").value = 9700+ "kg";
  }
  if (t <= -27 && h <= 5000) {
    document.getElementById("m").value = 9600+ "kg";
  }
  if (t <= -43 && h <= 5000) {
    document.getElementById("m").value = 9500+ "kg";
  }
  if (t <= -57 && h <= 5000) {
    document.getElementById("m").value = 9400+ "kg";
  }

  //10000kg
  if (t <= 50 && h <= 1500) {
    document.getElementById("m").value = 10000+"kg";
  }
  if (t <= 44 && h <= 2000) {
    document.getElementById("m").value = 10000+"kg";
  }
  if (t <= 40 && h <= 2200) {
    document.getElementById("m").value = 10000+"kg";
  }
  if (t <= 37 && h <= 2400) {
    document.getElementById("m").value = 10000+"kg";
  }
  if (t <= 35 && h <= 2600) {
    document.getElementById("m").value = 10000+"kg";
  }
  if (t <= 30 && h <= 2800) {
    document.getElementById("m").value = 10000+"kg";
  }
  if (t <= 28 && h <= 3000) {
    document.getElementById("m").value = 10000+"kg";
  }
  if (t <= 25 && h <= 3200) {
    document.getElementById("m").value = 10000+"kg";
  }
  if (t <= 21 && h <= 3400) {
    document.getElementById("m").value = 10000+"kg";
  }
  if (t <= 18 && h <= 3600) {
    document.getElementById("m").value = 10000+"kg";
  }
  if (t <= 15 && h <= 3800) {
    document.getElementById("m").value = 10000+"kg";
  }
  if (t <= 12 && h <= 4000) {
    document.getElementById("m").value = 10000+"kg";
  }
  if (t <= 8 && h <= 4200) {
    document.getElementById("m").value = 10000+"kg";
  }
  if (t <= 5 && h <= 4400) {
    document.getElementById("m").value = 10000+"kg";
  }
  if (t <= 0 && h <= 4600) {
    document.getElementById("m").value = 10000+"kg";
  }
  if (t <= -5 && h <= 4800) {
    document.getElementById("m").value = 10000+"kg";
  }
  //Extra settings
  if (t <= -20 && h <= 4800) {
    document.getElementById("m").value = 9900+ "kg";
  }
  if (t <= -30 && h <= 4800) {
    document.getElementById("m").value = 9800+ "kg";
  }
  if (t <= -45 && h <= 4800) {
    document.getElementById("m").value = 9700+ "kg";
  }

  //10200kg
  if (t <= 55 && h <= 1000) {
    document.getElementById("m").value = 10200+"kg";
  }
  if (t <= 48 && h <= 1500) {
    document.getElementById("m").value = 10200+"kg";
  }
  if (t <= 42 && h <= 2000) {
    document.getElementById("m").value = 10200+"kg";
  }
  if (t <= 39 && h <= 2200) {
    document.getElementById("m").value = 10200+"kg";
  }
  if (t <= 36 && h <= 2400) {
    document.getElementById("m").value = 10200+"kg";
  }
  if (t <= 32 && h <= 2600) {
    document.getElementById("m").value = 10200+"kg";
  }
  if (t <= 29 && h <= 2800) {
    document.getElementById("m").value = 10200+"kg";
  }
  if (t <= 25 && h <= 3000) {
    document.getElementById("m").value = 10200+"kg";
  }
  if (t <= 22 && h <= 3200) {
    document.getElementById("m").value = 10200+"kg";
  }
  if (t <= 19 && h <= 3400) {
    document.getElementById("m").value = 10200+"kg";
  }
  if (t <= 16 && h <= 3600) {
    document.getElementById("m").value = 10200+"kg";
  }
  if (t <= 12 && h <= 3800) {
    document.getElementById("m").value = 10200+"kg";
  }
  if (t <= 9 && h <= 4000) {
    document.getElementById("m").value = 10200+"kg";
  }
  if (t <= 5 && h <= 4200) {
    document.getElementById("m").value = 10200+"kg";
  }
  if (t <= 0 && h <= 4400) {
    document.getElementById("m").value = 10200+"kg";
  }
  if (t <= -4 && h <= 4600) {
    document.getElementById("m").value = 10200+"kg";
  }
  //Extra settings
  if (t <= -5 && h <= 4600) {
    document.getElementById("m").value = 10300+ "kg";
  }
  if (t <= -20 && h <= 4600) {
    document.getElementById("m").value = 10200+"kg";
  }
  if (t <= -30 && h <= 4600) {
    document.getElementById("m").value = 10100+ "kg";
  }
  if (t <= -40 && h <= 4600) {
    document.getElementById("m").value = 10000+ "kg";
  }
  if (t <= -57 && h <= 4600) {
    document.getElementById("m").value = 9900+ "kg";
  }

  //10400kg
  if (t <= 51 && h <= 1000) {
    document.getElementById("m").value = 10400+"kg";
  }
  if (t <= 46 && h <= 1500) {
    document.getElementById("m").value = 10400+"kg";
  }
  if (t <= 39 && h <= 2000) {
    document.getElementById("m").value = 10400+"kg";
  }
  if (t <= 36 && h <= 2200) {
    document.getElementById("m").value = 10400+"kg";
  }
  if (t <= 32 && h <= 2400) {
    document.getElementById("m").value = 10400+"kg";
  }
  if (t <= 30 && h <= 2600) {
    document.getElementById("m").value = 10400+"kg";
  }
  if (t <= 27 && h <= 2800) {
    document.getElementById("m").value = 10400+"kg";
  }
  if (t <= 22 && h <= 3000) {
    document.getElementById("m").value = 10400+"kg";
  }
  if (t <= 20 && h <= 3200) {
    document.getElementById("m").value = 10400+"kg";
  }
  if (t <= 17 && h <= 3400) {
    document.getElementById("m").value = 10400+"kg";
  }
  if (t <= 13 && h <= 3600) {
    document.getElementById("m").value = 10400+"kg";
  }
  if (t <= 9 && h <= 3800) {
    document.getElementById("m").value = 10400+"kg";
  }
  if (t <= 7 && h <= 4000) {
    document.getElementById("m").value = 10400+"kg";
  }
  if (t <= 2 && h <= 4200) {
    document.getElementById("m").value = 10400+"kg";
  }
  if (t <= -2 && h <= 4400) {
    document.getElementById("m").value = 10400+"kg";
  }
  //Extra settings
  if (t <= -5 && h <= 4400) {
    document.getElementById("m").value = 10500+"kg";
  }
  if (t <= -7 && h <= 4400) {
    document.getElementById("m").value = 10600+ "kg";
  }
  if (t <= -15 && h <= 4400) {
    document.getElementById("m").value = 10500+"kg";
  }
  if (t <= -25 && h <= 4400) {
    document.getElementById("m").value = 10400+ "kg";
  }
  if (t <= -35 && h <= 4400) {
    document.getElementById("m").value = 10300+ "kg";
  }
  if (t <= -43 && h <= 1000) {
    document.getElementById("m").value = 10200+ "kg";
  }
  //10600kg
  if (t <= 50 && h <= 1000) {
    document.getElementById("m").value = 10600+"kg";
  }
  if (t <= 44 && h <= 1500) {
    document.getElementById("m").value = 10600+"kg";
  }
  if (t <= 36 && h <= 2000) {
    document.getElementById("m").value = 10600+"kg";
  }
  if (t <= 34 && h <= 2200) {
    document.getElementById("m").value = 10600+"kg";
  }
  if (t <= 30 && h <= 2400) {
    document.getElementById("m").value = 10600+"kg";
  }
  if (t <= 27 && h <= 2600) {
    document.getElementById("m").value = 10600+"kg";
  }
  if (t <= 24 && h <= 2800) {
    document.getElementById("m").value = 10600+"kg";
  }
  if (t <= 20 && h <= 3000) {
    document.getElementById("m").value = 10600+"kg";
  }
  if (t <= 17 && h <= 3200) {
    document.getElementById("m").value = 10600+"kg";
  }
  if (t <= 14 && h <= 3400) {
    document.getElementById("m").value = 10600+"kg";
  }
  if (t <= 10 && h <= 3600) {
    document.getElementById("m").value = 10600+"kg";
  }
  if (t <= 6 && h <= 3800) {
    document.getElementById("m").value = 10600+"kg";
  }
  if (t <= 4 && h <= 4000) {
    document.getElementById("m").value = 10600+"kg";
  }
  if (t <= -1 && h <= 4200) {
    document.getElementById("m").value = 10600+"kg";
  }
  if (t <= -5 && h <= 4400) {
    document.getElementById("m").value = 10600+"kg";
  }
  //Extra settings
  if (t <= -15 && h <= 4400) {
    document.getElementById("m").value = 10500+ "kg";
  }
  if (t <= -25 && h <= 4400) {
    document.getElementById("m").value = 10400+ "kg";
  }
  if (t <= -35 && h <= 4400) {
    document.getElementById("m").value = 10300+ "kg";
  }
  if (t <= -50 && h <= 4400) {
    document.getElementById("m").value = 10200+ "kg";
  }
  //10800kg
  if (t <= 48 && h <= 1000) {
    document.getElementById("m").value = 10800+"kg";
  }
  if (t <= 42 && h <= 1500) {
    document.getElementById("m").value = 10800+"kg";
  }
  if (t <= 35 && h <= 2000) {
    document.getElementById("m").value = 10800+"kg";
  }
  if (t <= 31 && h <= 2200) {
    document.getElementById("m").value = 10800+"kg";
  }
  if (t <= 28 && h <= 2400) {
    document.getElementById("m").value = 10800+"kg";
  }
  if (t <= 25 && h <= 2600) {
    document.getElementById("m").value = 10800+"kg";
  }
  if (t <= 21 && h <= 2800) {
    document.getElementById("m").value = 10800+"kg";
  }
  if (t <= 18 && h <= 3000) {
    document.getElementById("m").value = 10800+"kg";
  }
  if (t <= 15 && h <= 3200) {
    document.getElementById("m").value = 10800+"kg";
  }
  if (t <= 11 && h <= 3400) {
    document.getElementById("m").value = 10800+"kg";
  }
  if (t <= 8 && h <= 3600) {
    document.getElementById("m").value = 10800+"kg";
  }
  if (t <= 4 && h <= 3800) {
    document.getElementById("m").value = 10800+"kg";
  }
  if (t <= 0 && h <= 4000) {
    document.getElementById("m").value = 10800+"kg";
  }
  if (t <= -4 && h <= 4200) {
    document.getElementById("m").value = 10800+"kg";
  }
  if (t <= -14 && h <= 4200) {
    document.getElementById("m").value = 10800+"kg";
  }

  //Extra settings
  if (t <= -5 && h <= 4200) {
    document.getElementById("m").value = 10900+ "kg";
  }
  if (t <= -21 && h <= 4200) {
    document.getElementById("m").value = 10700+ "kg";
  }
  if (t <= -30 && h <= 4200) {
    document.getElementById("m").value = 10600+ "kg";
  }
  if (t <= -40 && h <= 4200) {
    document.getElementById("m").value = 10500+ "kg";
  }
  if (t <= -50 && h <= 4200) {
    document.getElementById("m").value = 10450+ "kg";
  }
  if (t <= -60 && h <= 4200) {
    document.getElementById("m").value = 10400+ "kg";
  }

  //11000kg
  if (t <= 60 && h <= 0) {
    document.getElementById("m").value = 11000+"kg";
  }
  if (t <= 45 && h <= 1000) {
    document.getElementById("m").value = 11000+"kg";
  }
  if (t <= 40 && h <= 1500) {
    document.getElementById("m").value = 11000+"kg";
  }
  if (t <= 32 && h <= 2000) {
    document.getElementById("m").value = 11000+"kg";
  }
  if (t <= 29 && h <= 2200) {
    document.getElementById("m").value = 11000+"kg";
  }
  if (t <= 26 && h <= 2400) {
    document.getElementById("m").value = 11000+"kg";
  }
  if (t <= 22 && h <= 2600) {
    document.getElementById("m").value = 11000+"kg";
  }
  if (t <= 19 && h <= 2800) {
    document.getElementById("m").value = 11000+"kg";
  }
  if (t <= 15 && h <= 3000) {
    document.getElementById("m").value = 11000+"kg";
  }
  if (t <= 12 && h <= 3200) {
    document.getElementById("m").value = 11000+"kg";
  }
  if (t <= 9 && h <= 3400) {
    document.getElementById("m").value = 11000+"kg";
  }
  if (t <= 5 && h <= 3600) {
    document.getElementById("m").value = 11000+"kg";
  }
  if (t <= 0 && h <= 3800) {
    document.getElementById("m").value = 11000+"kg";
  }
  if (t <= -2 && h <= 4000) {
    document.getElementById("m").value = 11000+"kg";
  }

  //11200kg
  if (t <= 59 && h <= 0) {
    document.getElementById("m").value = 11200+ "kg";
  }
  if (t <= 44 && h <= 1000) {
    document.getElementById("m").value = 11200+"kg";
  }
  if (t <= 38 && h <= 1500) {
    document.getElementById("m").value = 11200+"kg";
  }
  if (t <= 30 && h <= 2000) {
    document.getElementById("m").value = 11200+"kg";
  }
  if (t <= 27 && h <= 2200) {
    document.getElementById("m").value = 11200+"kg";
  }
  if (t <= 23 && h <= 2400) {
    document.getElementById("m").value = 11200+"kg";
  }
  if (t <= 20 && h <= 2600) {
    document.getElementById("m").value = 11200+"kg";
  }
  if (t <= 17 && h <= 2800) {
    document.getElementById("m").value = 11200+"kg";
  }
  if (t <= 14 && h <= 3000) {
    document.getElementById("m").value = 11200+"kg";
  }
  if (t <= 10 && h <= 3200) {
    document.getElementById("m").value = 11200+"kg";
  }
  if (t <= 7 && h <= 3400) {
    document.getElementById("m").value = 11200+"kg";
  }
  if (t <= 4 && h <= 3600) {
    document.getElementById("m").value = 11200+"kg";
  }
  if (t <= -2 && h <= 3800) {
    document.getElementById("m").value = 11200+"kg";
  }
  if (t <= -5 && h <= 4000) {
    document.getElementById("m").value = 11200+"kg";
  }
  //Extra settings
  if (t <= -10 && h <= 4000) {
    document.getElementById("m").value = 11100+ "kg";
  }
  if (t <= -18 && h <= 4000) {
    document.getElementById("m").value = 11000+ "kg";
  }
  if (t <= -25 && h <= 4000) {
    document.getElementById("m").value = 10900+ "kg";
  }
  if (t <= -34 && h <= 4000) {
    document.getElementById("m").value = 10800+ "kg";
  }
  if (t <= -43 && h <= 4000) {
    document.getElementById("m").value = 10700+ "kg";
  }
  if (t <= -56 && h <= 4000) {
    document.getElementById("m").value = 10600+ "kg";
  }

  //11400kg
  if (t <= 57 && h <= 0) {
    document.getElementById("m").value = 11400+"kg";
  }
  if (t <= 42 && h <= 1000) {
    document.getElementById("m").value = 11400+"kg";
  }
  if (t <= 36 && h <= 1500) {
    document.getElementById("m").value = 11400+"kg";
  }
  if (t <= 28 && h <= 2000) {
    document.getElementById("m").value = 11400+"kg";
  }
  if (t <= 25 && h <= 2200) {
    document.getElementById("m").value = 11400+"kg";
  }
  if (t <= 21 && h <= 2400) {
    document.getElementById("m").value = 11400+"kg";
  }
  if (t <= 18 && h <= 2600) {
    document.getElementById("m").value = 11400+"kg";
  }
  if (t <= 15 && h <= 2800) {
    document.getElementById("m").value = 11400+"kg";
  }
  if (t <= 11 && h <= 3000) {
    document.getElementById("m").value = 11400+"kg";
  }
  if (t <= 7 && h <= 3200) {
    document.getElementById("m").value = 11400+"kg";
  }
  if (t <= 5 && h <= 3400) {
    document.getElementById("m").value = 11400+"kg";
  }
  if (t <= 0 && h <= 3600) {
    document.getElementById("m").value = 11400+"kg";
  }
  if (t <= -4 && h <= 3800) {
    document.getElementById("m").value = 11400+"kg";
  }
  //Extra settings
  if (t <= -20 && h <= 3800) {
    document.getElementById("m").value = 11300+ "kg";
  }
  if (t <= -27 && h <= 3800) {
    document.getElementById("m").value = 11200+ "kg";
  }
  if (t <= -35 && h <= 3800) {
    document.getElementById("m").value = 11100+ "kg";
  }
  if (t <= -42 && h <= 3800) {
    document.getElementById("m").value = 11000+ "kg";
  }
  //11600kg
  if (t <= 55 && h <= 0) {
    document.getElementById("m").value = 11600+"kg";
  }
  if (t <= 40 && h <= 1000) {
    document.getElementById("m").value = 11600+"kg";
  }
  if (t <= 34 && h <= 1500) {
    document.getElementById("m").value = 11600+"kg";
  }
  if (t <= 25 && h <= 2000) {
    document.getElementById("m").value = 11600+"kg";
  }
  if (t <= 22 && h <= 2200) {
    document.getElementById("m").value = 11600+"kg";
  }
  if (t <= 18 && h <= 2400) {
    document.getElementById("m").value = 11600+"kg";
  }
  if (t <= 16 && h <= 2600) {
    document.getElementById("m").value = 11600+"kg";
  }
  if (t <= 12 && h <= 2800) {
    document.getElementById("m").value = 11600+"kg";
  }
  if (t <= 8 && h <= 3000) {
    document.getElementById("m").value = 11600+"kg";
  }
  if (t <= 5 && h <= 3200) {
    document.getElementById("m").value = 11600+"kg";
  }
  if (t <= 0 && h <= 3400) {
    document.getElementById("m").value = 11600+"kg";
  }
  if (t <= -20 && h <= 3600) {
    document.getElementById("m").value = 11600+"kg";
  }

  //Extra settings
  if (t <= -30 && h <= 3600) {
    document.getElementById("m").value = 11500+ "kg";
  }
  if (t <= -35 && h <= 3600) {
    document.getElementById("m").value = 11400+ "kg";
  }
  if (t <= -45 && h <= 3600) {
    document.getElementById("m").value = 11300+ "kg";
  }
  if (t <= -60 && h <= 3600) {
    document.getElementById("m").value = 11200+ "kg";
  }

  //11800kg
  if (t <= 53 && h <= 0) {
    document.getElementById("m").value = 11800+"kg";
  }
  if (t <= 39 && h <= 1000) {
    document.getElementById("m").value = 11800+"kg";
  }
  if (t <= 32 && h <= 1500) {
    document.getElementById("m").value = 11800+"kg";
  }
  if (t <= 22 && h <= 2000) {
    document.getElementById("m").value = 11800+"kg";
  }
  if (t <= 20 && h <= 2200) {
    document.getElementById("m").value = 11800+"kg";
  }
  if (t <= 17 && h <= 2400) {
    document.getElementById("m").value = 11800+"kg";
  }
  if (t <= 13 && h <= 2600) {
    document.getElementById("m").value = 11800+"kg";
  }

  if (t <= 10 && h <= 2800) {
    document.getElementById("m").value = 11800+"kg";
  }
  if (t <= 6 && h <= 3000) {
    document.getElementById("m").value = 11800+"kg";
  }
  if (t <= 1 && h <= 3200) {
    document.getElementById("m").value = 11800+"kg";
  }
  if (t <= -20 && h <= 3400) {
    document.getElementById("m").value = 11800+"kg";
  }
  if (t <= -60 && h <= 3400) {
    document.getElementById("m").value = 11800+"kg";
  }
  //Extra settings
  if (t <= -31 && h <= 3200) {
    document.getElementById("m").value = 11700+ "kg";
  }
  if (t <= -45 && h <= 3200) {
    document.getElementById("m").value = 11600+ "kg";
  }
  if (t <= -50 && h <= 3200) {
    document.getElementById("m").value = 11520+ "kg";
  }
  if (t <= -30 && h <= 3400) {
    document.getElementById("m").value = 11500+ "kg";
  }
  if (t <= -36 && h <= 3400) {
    document.getElementById("m").value = 11400+ "kg";
  }
  if (t <= -45 && h <= 3400) {
    document.getElementById("m").value = 11300+ "kg";
  }
  if (t <= -60 && h <= 3400) {
    document.getElementById("m").value = 11200+ "kg";
  }

  //12000kg
  if (t <= 51 && h <= 0) {
    document.getElementById("m").value = 12000+"kg";
  }
  if (t <= 37 && h <= 1000) {
    document.getElementById("m").value = 12000+"kg";
  }
  if (t <= 30 && h <= 1500) {
    document.getElementById("m").value = 12000+"kg";
  }
  if (t <= 20 && h <= 2000) {
    document.getElementById("m").value = 12000+"kg";
  }
  if (t <= 18 && h <= 2200) {
    document.getElementById("m").value = 12000+"kg";
  }
  if (t <= 14 && h <= 2400) {
    document.getElementById("m").value = 12000+"kg";
  }
  if (t <= 10 && h <= 2600) {
    document.getElementById("m").value = 12000+"kg";
  }
  if (t <= 7 && h <= 2800) {
    document.getElementById("m").value = 12000+"kg";
  }
  if (t <= 3 && h <= 3000) {
    document.getElementById("m").value = 12000+"kg";
  }
  if (t <= -26 && h <= 3200) {
    document.getElementById("m").value = 12000+"kg";
  }
  if (t <= -36 && h <= 3200) {
    document.getElementById("m").value = 11900+ "kg";
  }
  if (t <= -60 && h <= 3200) {
    document.getElementById("m").value = 11800+ "kg";
  }

  //12200kg
  if (t <= 49 && h <= 0) {
    document.getElementById("m").value = 12200+ "kg";
  }
  if (t <= 35 && h <= 1000) {
    document.getElementById("m").value = 12200+ "kg";
  }
  if (t <= 28 && h <= 1500) {
    document.getElementById("m").value = 12200+ "kg";
  }
  if (t <= 18 && h <= 2000) {
    document.getElementById("m").value = 12200+ "kg";
  }
  if (t <= 15 && h <= 2200) {
    document.getElementById("m").value = 12200+ "kg";
  }
  if (t <= 12 && h <= 2400) {
    document.getElementById("m").value = 12200+ "kg";
  }
  if (t <= 8 && h <= 2600) {
    document.getElementById("m").value = 12200+ "kg";
  }
  if (t <= -9 && h <= 2800) {
    document.getElementById("m").value = 12200+ "kg";
  }
  if (t <= -30 && h <= 3000) {
    document.getElementById("m").value = 12200+ "kg";
  }
  if (t <= -30 && h <= 3000) {
    document.getElementById("m").value = 12200+ "kg";
  }
  if (t <= -50 && h <= 3000) {
    document.getElementById("m").value = 12100+ "kg";
  }

  //12400kg
  if (t <= 48 && h <= 0) {
    document.getElementById("m").value = 12400+ "kg";
  }
  if (t <= 33 && h <= 1000) {
    document.getElementById("m").value = 12400+ "kg";
  }
  if (t <= 26 && h <= 1500) {
    document.getElementById("m").value = 12400+ "kg";
  }
  if (t <= 16 && h <= 2000) {
    document.getElementById("m").value = 12400+ "kg";
  }
  if (t <= 13 && h <= 2200) {
    document.getElementById("m").value = 12400+ "kg";
  }
  if (t <= 10 && h <= 2400) {
    document.getElementById("m").value = 12400+ "kg";
  }
  if (t <= -17 && h <= 2600) {
    document.getElementById("m").value = 12400+ "kg";
  }
  if (t <= -40 && h <= 2800) {
    document.getElementById("m").value = 12400+ "kg";
  }

  //12600kg
  if (t <= 45 && h <= 0) {
    document.getElementById("m").value = 12600+ "kg";
  }
  if (t <= 31 && h <= 1000) {
    document.getElementById("m").value = 12600+ "kg";
  }
  if (t <= 23 && h <= 1500) {
    document.getElementById("m").value = 12600+ "kg";
  }
  if (t <= 14 && h <= 2000) {
    document.getElementById("m").value = 12600+ "kg";
  }
  if (t <= 10 && h <= 2200) {
    document.getElementById("m").value = 12600+ "kg";
  }
  if (t <= -22 && h <= 2400) {
    document.getElementById("m").value = 12600+ "kg";
  }
  if (t <= -45 && h <= 2600) {
    document.getElementById("m").value = 12600+ "kg";
  }

  //12800kg
  if (t <= 45 && h <= 0) {
    document.getElementById("m").value = 12800+ "kg";
  }
  if (t <= 29 && h <= 1000) {
    document.getElementById("m").value = 12800+ "kg";
  }
  if (t <= 30 && h <= 1000) {
    document.getElementById("m").value = 12800+ "kg";
  }
  if (t <= 22 && h <= 1500) {
    document.getElementById("m").value = 12800+ "kg";
  }
  if (t <= -10 && h <= 2000) {
    document.getElementById("m").value = 12800+ "kg";
  }
  if (t <= -38 && h <= 2200) {
    document.getElementById("m").value = 12800+ "kg";
  }
  if (t <= -50 && h <= 2400) {
    document.getElementById("m").value = 12800+ "kg";
  }

  //13kg and max
  if (t <= 42 && h == 0) {
    document.getElementById("m").value = 13000+ "kg";
  }
  if (t <= 27 && h <= 1000) {
    document.getElementById("m").value = 13000+ "kg";
  }
  if (t <= 20 && h <= 1500) {
    document.getElementById("m").value = 13000+ "kg";
  }
  if (t <= -45 && h <= 2000) {
    document.getElementById("m").value = 13000+ "kg";
  }
  if (t <= -55 && h <= 2200) {
    document.getElementById("m").value = 13000+ "kg";
  }
  if (t <= -60 || h > 6000) {
    document.getElementById("m").value = "Xəta";
  }

}




run3.addEventListener("click", (event) => {
  convertation3();
});
clear3.addEventListener("click", (event) => {
  document.getElementById("form3").reset();
  console.clear();
});

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient.addColorStop(0, "green");
gradient.addColorStop(0.2, "green");
gradient.addColorStop(0.4, "green");
gradient.addColorStop(0.6, "green");
gradient.addColorStop(0.8, "green");
gradient.addColorStop(1, "green");

class Symbol {
  constructor(x, y, fontSize, canvasHeight) {
    this.characters = "0123456789";
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.text = "";
    this.canvasHeight = canvasHeight;
  }
  draw(context) {
    this.text = this.characters.charAt(
      Math.floor(Math.random() * this.characters.length)
    );
    context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
    if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.98) {
      this.y = 0;
    } else {
      this.y += 1;
    }
  }
}

class Effect {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.fontSize = 20;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.#initialize();
  }

  #initialize() {
    for (let i = 0; i < this.columns; i++) {
      this.symbols[i] = new Symbol(
        i,
        Math.random() * -50,
        this.fontSize,
        this.canvasHeight
      );
    }
  }
  resize(width, height) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.#initialize();
    console.log(this.symbols);
  }
}

const effect = new Effect(canvas.width, canvas.height);
let lastTime = 0;
const fps = 30;
const nextFrame = 1000 / fps;
let timer = 0;

function animate(timeStamp) {
  const deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;
  if (timer > nextFrame) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.textAlign = "center";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = gradient;
    ctx.font = effect.fontSize + "px monospace";
    effect.symbols.forEach((symbol) => symbol.draw(ctx));
    timer = 0;
  } else {
    timer += deltaTime;
  }
  requestAnimationFrame(animate);
}

animate(0);

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  effect.resize(canvas.width, canvas.height);
});
