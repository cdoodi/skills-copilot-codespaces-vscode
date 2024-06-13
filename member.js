function skillsMember() {
  var member = document.getElementById("member").value;
  var member = member.toLowerCase();
  if (member == "member") {
    window.location.href = "member.html";
  } else {
    alert("Please enter the correct member name.");
  }
}