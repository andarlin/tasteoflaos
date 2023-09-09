
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


    window.onload = function() {
        
        document.getElementById('takeOutForm').addEventListener('submit', function(event) {
            event.preventDefault();
            // generate a five digit number for the contact_number variable
            this.contact_number.value = Math.random() * 100000 | 0;
            // these IDs from the previous steps
            emailjs.sendForm("service_1nen55o","template_3h3c89a", '#takeOutForm')
            .then(function() {
                console.log('SUCCESS!');
                }, function(error) {
                    console.log('FAILED...', error);
                });
        });
      }
