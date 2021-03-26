var prenom = document.querySelector("#prenom");
var nom = document.querySelector("#nom");
var group = document.querySelector("#group");
var bio = document.querySelector("#bio");
var btnCreate = document.querySelector("#btnCreer")
var btnReint = document.querySelector("#btnReint") 
var contacts = [];
var content_contact= document.querySelector("#content_contact");
content_contact.classList.add("scroll")
/**********************Reinitialisation**********************/

btnReint.addEventListener('click',function (e) {
    e.preventDefault();
    prenom.value = "" ;
    nom.value = "";
    group.value = "";
    bio.value = "";
})

/************** Enregistrement du conctat*******************/
btnCreate.addEventListener('click',function(e)  {
    e.preventDefault();    
    var personne = {
        fname : prenom.value,
        lname : nom.value,
        groupe : group.value,
        biographie : bio.value
    }
    contacts.push(personne);    
    afficher();
})

/**************Fonction affichager des contacts***************/

function afficher(){

    let contactSauve = contacts[contacts.length-1];
   var p = document.createElement("p");
   p.setAttribute("id", "cont_bio");
   p.textContent = contactSauve.biographie

   var h5 = document.createElement("h5");
   h5.setAttribute("id", "cont_group");
   h5.textContent = contactSauve.groupe;

   var h4 = document.createElement("h4");
   h4.setAttribute("id", "cont_nom");
   h4.textContent = contactSauve.fname +" "+contactSauve.lname;

   var cont_btnClose= document.createElement("div");
   cont_btnClose.classList.add("cont_btnClose")

   var i_close = document.createElement("i")
   i_close.classList.add("window")
   i_close.classList.add("close")
   i_close.classList.add("icon")

   cont_btnClose.appendChild(i_close)

   cont_btnClose.addEventListener('click', function (e) {
       e.preventDefault();
       cont_list.remove()
       
   });

   var i_avatar= document.createElement('i')
   i_avatar.classList.add('user')
   i_avatar.classList.add('massive')
   i_avatar.classList.add('circle')
   i_avatar.classList.add('icon')

   var texte_cont = document.createElement('div');
   texte_cont.classList.add('texte_cont')

   var flex= document.createElement('div');
   flex.classList.add('flex');



   var cont_list = document.createElement("div");
   cont_list.classList.add('ui')
   cont_list.classList.add('text')
   cont_list.classList.add('overflow')

   
   texte_cont.appendChild(h4)
   texte_cont.appendChild(h5)
   texte_cont.appendChild(p)

   flex.appendChild(i_avatar);
   flex.appendChild(texte_cont);

   cont_list.appendChild(cont_btnClose);
   cont_list.appendChild(flex);

   content_contact.appendChild(cont_list);
   
}