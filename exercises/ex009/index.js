function lookUp(name, property){
  for (const contact of contacts){
    if (contact.firstName === name){
      if (object.prototype.hasOwnProperty.call(contact, property)){
        return contact[property];
      }
      return "No such property"
    }
  }
  return "No such contact";
}
