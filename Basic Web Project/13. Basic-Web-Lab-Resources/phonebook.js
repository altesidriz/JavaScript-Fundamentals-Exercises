let Contact = require('./models/Contact');

let contacts = [
	{
		name: 'Peter',
		number: '+35988874452'
	},
	{
		name: 'John',
		number: '+35988554452'
	},
	{
		name: 'Mary',
		number: '+35988876642'
	}
];

function getAll() {
	return contacts.slice();
}

function addContact(name,number){
	let contact = new Contact(name, number);

	contacts.push(contact);
}

module.exports = {
	getAll,
	addContact
};