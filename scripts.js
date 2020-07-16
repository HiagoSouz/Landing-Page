document.querySelector('#button-menu').addEventListener('click',function(){
  menuBox = document.querySelector("#navmenu");
  if(menuBox.style.display == "block") { 
    menuBox.style.display = "none";
  }
  else { 
    menuBox.style.display = "block";
  }

}) 
   
  

  /*
  document.querySelector('#button-forms').addEventListener('click', function(frm){

      var email = frm.email.value;
      var responsable = frm.responsable.value;
      var sname = frm.sname.value;
      var sbirth = frm.sbirth.value;
      var phone = frm.phone.value;
      
        if(email.indexOf("@") == -1 ||
          email.indexOf(".") == -1 ||
          email == "" ||
          email == null) {
            alert("Por favor, indique um e-mail válido.");
            frm.email.focus();
            return false;
        }
 
      if(responsable == "" || responsable == null || responsable.lenght < 3) {
         
          alert("Por favor, indique o nome do responsável.");  
          frm.responsable.focus();
          return false;
      }

      if(sname == "" || sname == null || sname.lenght < 3) {
         
        alert("Por favor, indique o nome do estudante.");  
        frm.sname.focus();
        return false;
    }
       
      if(frm.unities.value == "") {
          alert("Preencha a unidade mais próxima de você");
          frm.unities.focus();
          return false;
      }
      
      if(phone == "" || phone == null || phone.lenght < 9) {
          alert("Por favor, digite seu número de telefone");
          frm.phone.focus();
          return false;
      }

      if(sbirth == "" || sbirth == null) {
        alert("Por favor, digite a data de nascimento do aluno");
        frm.sbirth.focus();
        return false;
    }


  })*/