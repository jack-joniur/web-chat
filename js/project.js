// function for onblur image :)
function Click() {
  let find, oper;
  find = document.getElementsByClassName("image-Ms")[0];
  oper = document.getElementsByClassName("icon")[0];
  oper.style.zIndex = 0;
  find.style.filter = "blur(0px)";
}
// function for type message :)
function message() {
  let create, inp, timeline, span, date;
  create = document.createElement("p");
  inp = document.getElementsByClassName("inp-type")[0];
  document.getElementsByClassName("chat-box")[0].appendChild(create);
  create.innerHTML = inp.value;
  create.classList.add("Ms-me");

  timeline = document.createElement("p");
  span = document.createElement("span");
  document.getElementsByClassName("chat-box")[0].appendChild(timeline);
  timeline.classList.add("caption-me");
  timeline.innerHTML = "you ";
  let test = document.getElementsByClassName("caption-me");
  // am and pm fotmatter
  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }
  // end am and pm fotmatter
  for (let i = 2; i < test.length; i++) {
   test[i].appendChild(span);
   span.innerHTML =  formatAMPM(new Date);
  }
  inp.value = null;
}
