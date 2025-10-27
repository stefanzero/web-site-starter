// When the DOM is fully loaded, add event listeners to the navbar links
document.addEventListener("DOMContentLoaded", () => {
  // Get the navbar collapse element
  const navbarCollapse = document.querySelector(".navbar-collapse");

  // Get all navbar links
  const navbarLinks = document.querySelectorAll(".navbar-collapse a");

  // Add an event listener to each navbar link
  navbarLinks.forEach((navbarLink) =>
    navbarLink.addEventListener("click", (event) => {
      // When a navbar link is clicked, remove the "show" class from the navbar collapse element
      navbarCollapse.classList.remove("show");
      // Remove the "active" class from all navbar links
      navbarLinks.forEach((navbarLink) => {
        navbarLink.classList.remove("active");
      });
      // Add the "active" class to the clicked navbar link
      event.target.classList.add("active");
    }),
  );
});
