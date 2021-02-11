describe('Address Book', function(){
    var addressBook,
        thisContact;
    
    beforeEach(function(){
        addressBook = new AddressBook();
        thisContact = new Contact();
    });
    
    it('Should be able to add a contact',function(){
        addressBook.addContact(thisContact);
        
        expect(addressBook.getContact(0)).toBe(thisContact);
    });

    it('Should be able to delete a contact',function(){
        addressBook.addContact(thisContact);
        addressBook.deleteContact(0);

        expect(addressBook.getContact(0)).not.toBeDefined();
    });
});

describe('Async Address Book' , function(){
    var addressBook = new AddressBook();
    beforeEach(function(done){
        addressBook.getInitialContacts(function(){
            done();
        });
    });
    it('should grab inital contacts',function(done){
            expect(addressBook.initialComplete).toBe(true);
            done();      
    });
});