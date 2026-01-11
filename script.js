function createResume() {
  document.getElementById("r-name").innerText =
    document.getElementById("name").value;

  document.getElementById("r-contact").innerText =
    document.getElementById("email").value + " | " +
    document.getElementById("phone").value;

  document.getElementById("r-skills").innerText =
    document.getElementById("skills").value;

  document.getElementById("r-education").innerText =
    document.getElementById("education").value;

  document.getElementById("r-experience").innerText =
    document.getElementById("experience").value;
}
