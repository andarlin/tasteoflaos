
      //emailjs function
      window.onload = function() {
        document.getElementById('subscribeForm').addEventListener('submit', function(event) {
            event.preventDefault();
      
            this.contact_number.value = Math.random() * 100000 | 0;
    
            emailjs.sendForm("service_1nen55o","template_mmt54kb", '#subscribeForm')
                .then(function() {
                    console.log('SUCCESS!');
                }, function(error) {
                    console.log('FAILED...', error);
                });
        });
        
    }


