// import Accordion from 'accordion-js';

// new Accordion('.faq-list', {
//   duration: 400,
//   showOne: true,
//   showMultiple: true,
//   onToggle: function (event) {
//     const button = event.target.closest('.questions');
//     if (button) {
//       button.classList.toggle('is-active');
//     }
//   },
// });


  import Accordion from 'accordion-js';

  const faqList = document.querySelector('.faq-list');
  const faqItems = faqList.querySelectorAll('.faq-item');

  new Accordion(faqList, {
    duration: 400,
    showOne: true, // Adjust to control behavior (single or multiple open)
    showMultiple: false, // Adjust to control behavior (single or multiple open)
    onToggle: function (event) {
      const clickedButton = event.target.closest('.questions');
      const clickedItem = clickedButton.parentNode; // Get the clicked LI element

      faqItems.forEach(item => item.classList.remove('is-active')); // Remove is-active from all items
      clickedItem.classList.toggle('is-active'); // Toggle is-active on the clicked item

      // Handle border-bottom for the previous item efficiently:
      const previousItem = clickedItem.previousElementSibling;
      if (previousItem) {
        console.log(previousItem);
        previousItem.style.borderBottom = clickedItem.classList.contains('is-active') ? 'none' : '';
      }

    },
  });

  document.querySelectorAll('.faq-item.btn-answear').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var listItem = btn.closest('.faq-item');
    listItem.classList.toggle('is-active');
  });
});




