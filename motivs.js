//atbild par tumšā/gaišā motīva maiņu
const mainitmotivu = document.getElementById("mainit-motivu");
const labpratTumsi = window.matchMedia("(prefers-color-scheme: dark)");
const motivsTagad = localStorage.getItem("motivs");
if (motivsTagad == "tumsi") {
    document.body.classList.toggle("tumsi");
} else {
    document.body.classList.toggle("gaisi");
}
mainitmotivu.addEventListener("click", function (){
    document.body.classList.toggle("gaisi");
    document.body.classList.toggle("tumsi");
    if (labpratTumsi.matches) {
        var motivs = document.body.classList.contains("gaisi")
        ? "gaisi"
        : "tumsi";
    } else {
        var motivs = document.body.classList.contains("tumsi")
        ? "tumsi"
        : "gaisi";
    }
    localStorage.setItem("motivs", motivs);
});
//atbild par raksta/grāmatas skata maiņu
const mainitskatu = document.getElementById("mainit-skatu");
const navgramata = document.querySelector('[notbook="true"]');
const skatsTagad = localStorage.getItem("skats");
if (navgramata == null) {
    console.log("ir grāmata");
    if (skatsTagad == "gramata") {
        document.body.classList.toggle("gramata");
    } else {
        document.body.classList.toggle("raksts");
    }
    mainitskatu.addEventListener("click", function (){
        document.body.classList.toggle("raksts");
        document.body.classList.toggle("gramata");
        if (document.body.classList.contains("raksts")) {
            var skats = document.body.classList.contains("raksts")
            ? "raksts"
            : "tumsi";
        } else {
            var skats = document.body.classList.contains("gramata")
            ? "gramata"
            : "raksts";
        }
        localStorage.setItem("skats", skats);
    });
}
else {console.log("nav grāmata");}