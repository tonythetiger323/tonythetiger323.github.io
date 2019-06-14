$(document).ready(() => {
  $("#send").submit(event => {
    event.preventDefault();

    const from = $("#email")
      .val()
      .trim();
    const body = $("#message")
      .val()
      .trim();

    Email.send({
      SecureToken: "65f84a85-c2c2-452c-9893-65f23caf0892",
      To: "tony@tonygreeley.com",
      From: from,
      Subject: "Message From Portfolio Site",
      Body: body
    }).then(message => alert(message));
  });
});
