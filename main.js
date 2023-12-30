var sname = document.getElementById("sname");
var tname = document.getElementById("tname");
var cname = document.getElementById("cname");
var date = document.getElementById("date");
var title = document.getElementById("title");
var essay = document.getElementById("essay");
var submit = document.getElementById("submit");

var currentdate = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
date.value = monthNames[currentdate.getMonth()] + " " + currentdate.getDate() + ", " + currentdate.getFullYear();

function submitForm() {
    var data = {
        sname: sname.value,
        tname: tname.value,
        cname: cname.value,
        date: date.value,
        title: title.value,
        essay: essay.value
    };
    localStorage.setItem("data", JSON.stringify(data));
}
submitForm();

html2pdf(document.body);