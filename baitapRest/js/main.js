 averageScores = ((...number) => {
     let n = 0;
     return number.map(number => {
         n += parseFloat(number)
     }), (n / number.length).toFixed(2)
 }), document.getElementById("btnKhoi1").onclick = (() => {
     let t = document.getElementById("inpToan").value,
         l = document.getElementById("inpLy").value,
         h = document.getElementById("inpHoa").value;
     document.getElementById("tbKhoi1").innerHTML = averageScores(t, l, h)
 }), document.getElementById("btnKhoi2").onclick = (() => {
     let v = document.getElementById("inpVan").value,
         s = document.getElementById("inpSu").value,
         d = document.getElementById("inpDia").value,
         e = document.getElementById("inpEnglish").value;
     document.getElementById("tbKhoi2").innerHTML = averageScores(v, s, d, e)
 });