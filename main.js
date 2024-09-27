const form = document.getElementById("registrationform");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  console.log("sentData: ", data);
  fetch("https://event-form-server-1.onrender.com/api/v1/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => console.log("Returned data: ", data))
    .catch((err) => console.log("Something went wrong", err));
});
