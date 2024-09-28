const container = document.getElementById("allAttendees");

fetch("https://event-form-server-1.onrender.com/api/v1/register")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
