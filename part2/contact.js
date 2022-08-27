var contacts =[
    {name :"amira",
     phone :"01275027673"},
    {name : "linda",
     phone : "01211148079"}
    ];
    
var op = prompt("Do you want to add or search?")

while(1){
switch (op){

    case "add":
        var addContact = {};
        addContact.name = prompt("enter contact name");
        addContact.phone = prompt("enter contact phone");
        contacts.push(addContact);
        alert("Successfully added")
        console.log(contacts)
        break
        
        case "search" :
        var searchBy = prompt("enter the name or phone : ")
        for(var i =0;i<contacts.length;i++){
        var myContact = contacts[i];
        if(searchBy == myContact.name|| searchBy == myContact.phone){
           console.log(myContact);
           alert("name = "+myContact.name +"\nphone = "+myContact.phone);
                    break    
                }}
          if (searchBy != myContact.name && searchBy != myContact.phone ){
             alert("the contact not found")
            break}
            
}
console.log(contacts)

        var config = prompt('Do you want to do another operation?\n (yes/no)');
        if(config =="yes"){
            var op = prompt("Do you want to add or search?");
        }else{alert("thank you")
                break}
        
    
    }








    
       /* else if(searchBy == "phone"){
          var searchPhone = prompt("enter the phone :");

         for(var i =0;i<contacts.length;i++){
        var myContact = contacts[i];
        console.log(myContact);
        if(searchPhone == myContact.phone ){
            alert("name = "+myContact.name +"\nphone = "+myContact.phone);
            break
            
        }
}if(searchPhone!= myContact.phone){ alert("the contact not found")}}
*/




