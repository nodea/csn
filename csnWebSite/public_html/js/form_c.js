   $(document).ready(function(){
        $('#send_message').click(function(e){
										  
            e.preventDefault();

            var error = false;
            var nom = $('#nom').val();
			var prenom = $('#prenom').val();
            var email = $('#email').val();
			var societe = $('#societe').val();
			var fonction = $('#fonction').val();
			var tel = $('#tel').val();
            var message = $('#message').val();
            
            if(nom.length == 0){
                var error = true;
                $('#name_error').fadeIn(1000);
            }else{
                $('#name_error').fadeOut(1000);
            }
			if(prenom.length == 0){
                var error = true;
                $('#nam_error').fadeIn(1000);
            }else{
                $('#nam_error').fadeOut(1000);
            }
			
			if(societe.length == 0){
                var error = true;
                $('#societe_error').fadeIn(1000);
            }else{
                $('#societe_error').fadeOut(1000);
            }
			
			if(fonction.length == 0){
                var error = true;
                $('#fonction_error').fadeIn(1000);
            }else{
                $('#fonction_error').fadeOut(1000);
            }
			
			if(tel.length == 0){
                var error = true;
                $('#tel_error').fadeIn(1000);
            }else{
                $('#tel_error').fadeOut(1000);
            }
			
            if(email.length == 0 || email.indexOf('@') == '-1'){
                var error = true;
                $('#email_error').fadeIn(1000);
            }else{
                $('#email_error').fadeOut(1000);
            }
            
            if(error == false){

                $('#send_message').attr({'disabled' : 'true', 'value' : 'Envoi en cours...' });

                $.post("send.php", $("#contact_form").serialize(),function(result){

                    if(result == 'sent'){

                         $('#cf_submit_p').remove();

                        $('#mail_success').fadeIn(1000);
                    }else{
						
                        $('#mail_fail').fadeIn(1000);
                        
                        $('#send_message').removeAttr('disabled').attr('value', 'Message envoyé');
                    }
                });
            }
        });    
    });