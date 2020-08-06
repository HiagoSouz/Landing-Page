

var actionMenu = document.querySelector('#button-menu')
var menuBox = document.querySelector("#navmenu");

actionMenu.addEventListener('click', event => {
  
  if(menuBox.style.display == "block") { 
    menuBox.style.display = "none";
  }
  else { 
    menuBox.style.display = "block";
  }

}) 



function validar(){
  var responsable = formuser.responsable.value;
  var email = formuser.email.value;
  var phone = formuser.phone.value;
  var sname = formuser.sname.value;
  var sbirth = formuser.sbirth.value;

  if(email == "" || email.indexOf('@') == -1 ){
    alert('Preencha o campo E-mail.');
    formuser.email.focus();
    return false;
}
  
  if(responsable == ""){
      alert('Preencha o nome do responsável.');
      formuser.responsable.focus();
      return false;
  }

  if(phone == "" || phone.length <= 8 || isNaN(phone)){
    alert('O número de telefone é inválido (utilize apenas números)');
    formuser.phone.focus();
    return false;
}

  if(sname == ""){
    alert('Preencha o campo nome do estudante.');
    formuser.sname.focus();
    return false;
  }

  if(sbirth == "" || sbirth[2]!='/' || sbirth[5]!='/' ){
    alert('Preencha a data de nascimento do aluno (Foramato: 00/00/0000).');
    formuser.sbirth.focus();
    return false;
  }

  
 
  

}


$('.carousel-phases').slick({
  prevArrow: '.arrow',
  nextArrow: '.arrow',
  responsive: [
    {
      breakpoint: 1023
    }
    ,
    {
      breakpoint: 3000,
    }
  ]
  
});

$('.carousel-reasons').slick({


  responsive: [
    {
      breakpoint: 1023
    }
    ,
    {
      breakpoint: 3000,
      settings: "unslick"
    }
  ]

});








  

  
  /*document.querySelector('#button-forms').addEventListener('click', function(frm){

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
 
