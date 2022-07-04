const ratingCard = document.querySelector('#rating');
const thankYouCard = document.querySelector('#on-submit');
const submitBtn = document.querySelector('.submit');
let ratingNumD = document.querySelector('#rating-num');
const ratingButton = document.querySelectorAll('.rate');
let rating = '';

// Button Click
ratingButton.forEach(function(btn) {
    btn.addEventListener('click', function (e) {
        rating = e.target.textContent;        
        
        ratingButton.forEach(btn => btn.removeAttribute('id', 'active'));
        e.target.setAttribute('id', 'active');
    });
    
})


// Submit Button
submitBtn.addEventListener('click', function() {
    if (rating === '') {
        alert('Please give us a rating!');
    } else {
        ratingNumD.textContent = rating;

        ratingCard.classList.add('d-none');
        thankYouCard.classList.remove('d-none');
    }
})