document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your inquiry! The PK School admissions team will contact you soon.');
    this.reset();
});