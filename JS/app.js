let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let group = document.querySelector("#group");
let biography = document.querySelector("#biography");
let btnCreate = document.querySelector("#btnCreer")
let btnReint = document.querySelector("#btnReint") 
let listContacts = [];
let listContactContainer= document.querySelector("#listContactContainer");
listContactContainer.classList.add("scroll")
/**********************Reinitialisation**********************/

btnReint.addEventListener('click',function (e) {
    e.preventDefault();
    firstName.value = "" ;
    lastName.value = "";
    group.value = "";
    biography.value = "";
    listContactContainer.remove()
})

/************** Enregistrement du conctat*******************/
btnCreate.addEventListener('click',function(e)  {
    e.preventDefault();    
    let person = {
        fname : firstName.value,
        lname : lastName.value,
        groupe : group.value,
        biographie : biography.value
    }
    listContacts.push(person);    
    afficher();
})

/**************Fonction affichager des listContacts***************/

function afficher(){

    let listContactsauve = listContacts[listContacts.length-1];
   let paragBiography = document.createElement("p");
   paragBiography.setAttribute("id", "cont_biography");
   paragBiography.textContent = listContactsauve.biographie

   let secondTitle = document.createElement("h5");
   secondTitle.setAttribute("id", "cont_group");
   secondTitle.textContent = listContactsauve.groupe;

   let title = document.createElement("h4");
   title.setAttribute("id", "cont_lastName");
   title.textContent = listContactsauve.fname +" "+listContactsauve.lname;

   let btnDeleteContact= document.createElement("div");
   btnDeleteContact.classList.add("cont_btnClose")

   let iconDelete = document.createElement("i")
   iconDelete.classList.add("window")
   iconDelete.classList.add("close")
   iconDelete.classList.add("icon")

   btnDeleteContact.appendChild(iconDelete)

   btnDeleteContact.addEventListener('click', function (e) {
       e.preventDefault();    
       containerContact.remove()
       
   });

   let iconAvatar= document.createElement('i')
   iconAvatar.classList.add('user')
   iconAvatar.classList.add('massive')
   iconAvatar.classList.add('circle')
   iconAvatar.classList.add('icon')

   let texte_cont = document.createElement('div');
   texte_cont.classList.add('texte_cont')

   let flex= document.createElement('div');
   flex.classList.add('flex');



   let containerContact = document.createElement("div");
   containerContact.classList.add('ui')
   containerContact.classList.add('text')
   containerContact.classList.add('overflow')

   
   texte_cont.appendChild(title)
   texte_cont.appendChild(secondTitle)
   texte_cont.appendChild(paragBiography)

   flex.appendChild(iconAvatar);
   flex.appendChild(texte_cont);

   containerContact.appendChild(btnDeleteContact);
   containerContact.appendChild(flex);

   listContactContainer.appendChild(containerContact);
   
}