//Note to self: work on understanding this code better for the contact
const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form submitted"); // ✅ check if this runs

  let isValid = true;

  const fields = [
    { id: "name", type: "text" },
    { id: "email", type: "email" },
    { id: "subject", type: "text" },
    { id: "message", type: "textarea" },
  ];

  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

  fields.forEach((field) => {
    const input = document.getElementById(field.id);
    const errorEl = document.getElementById(`error-${field.id}`);
    const value = input.value.trim();

    // Required check
    if (!value) {
      errorEl.textContent = "This field is required";
      isValid = false;
    }

    // Email format check
    if (field.type === "email" && value) {
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!emailPattern.test(value)) {
        errorEl.textContent = "Please enter a valid email";
        isValid = false;
      }
    }

    // Message length check
    if (field.id === "message" && value.length > 0 && value.length < 10) {
      errorEl.textContent = "Message must be at least 10 characters";
      isValid = false;
    }
  });

  if (isValid) {
    successMsg.hidden = false;
    successMsg.textContent = "Your message has been sent successfully!";
    console.log("✅ Valid submission");
    form.reset();
  } else {
    successMsg.hidden = true;
    console.log("❌ Invalid submission");
  }
});
