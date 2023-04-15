const submitRating = () => { 
    const ratingsArr = document.getElementsByName('rating'); 

    ratingsArr.forEach(rating => { 
        if(rating.checked){ 
            let userChoice = rating.dataset.number; 

            thankYou(userChoice); 
        }; 
    }); 
}

const thankYou = (userChoice) => { 
    //You selected Add rating here out of 5

    //Thank you
  
    //We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
  
    const wrapper = document.querySelector('.wrapper'); 

    wrapper.innerHTML = 
    `<img src='images/illustration-thank-you.svg' />
    <div class='rating_select'>
        <p>You selected ${userChoice} out of 5</p>
    </div>
    <div class='thankyou_container'>
        <h1>Thank you!</h1>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, dont hesitate to get in touch!</p>
    </div>`; 
    
}