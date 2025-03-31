/* Working JavaScript for Accordian */
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");

        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


/* Example JavaScript */
function validateEmail(email) {
    return email.includes("@") && email.includes(".com");
  }
  console.log(validateEmail("test@example.com")); // true

