const poga = document.getElementById("mainit-motivu");
const labpratTumsi = window.matchMedia("(prefers-color-scheme: dark)");
const motivsTagad = localStorage.getItem("motivs");
if (motivsTagad == "tumsi") {
    document.body.classList.toggle("tumsi");
    console.log("motivsTagad: tumsi")
} else {
    document.body.classList.toggle("gaisi");
    console.log("motivsTagad: gaisi")
}
poga.addEventListener("click", function (){
    if (labpratTumsi.matches) {
        document.body.classList.toggle("gaisi");
        var motivs = document.body.classList.contains("gaisi")
        ? "gaisi"
        : "tumsi";
    } else {
        document.body.classList.toggle("tumsi");
        var motivs = document.body.classList.contains("tumsi")
        ? "tumsi"
        : "gaisi";
    }
    localStorage.setItem("motivs", motivs);
});