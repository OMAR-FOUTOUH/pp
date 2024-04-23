// Create an IntersectionObserver
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('showing');
        } else {
            entry.target.classList.remove('showing');
        }
    });
  });
  
  // Select all elements with the class 'hidden' using document.querySelectorAll
  const hiddenElements = document.querySelectorAll('.hide');
  const hiddenElements2 = document.querySelectorAll('.hide2');
  // Observe each element in the NodeList
hiddenElements.forEach((el) => observer.observe(el));
hiddenElements2.forEach((el) => observer.observe(el));