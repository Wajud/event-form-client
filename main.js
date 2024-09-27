const form = document.getElementById("registrationform");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  console.log("Form submitted");
  console.log({ ...data });
});
