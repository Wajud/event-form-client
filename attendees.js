const container = document.getElementById("allAttendees");

fetch("http://localhost:8080/api/v1/register")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
