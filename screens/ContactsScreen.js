import * as Contacts from 'expo-contacts';
import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import ContactList from '../components/ContactList';


export default function ContactsScreen() {
  const [contacts, setContacts] = React.useState([]);
  const getContacts = async () => {
    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
    });
    setContacts(getContactsWithNumbers(data))
  };

  React.useEffect(() => {
    getContacts()
  }, []);

  return (
      <View
        style={[
          styles.container,
        ]}>
        <ContactList />
      </View>
  );
}

function getContactsWithNumbers(contacts) {
  return contacts.filter(contact => {
    return contact.phoneNumbers && contact.phoneNumbers[0] && contact.phoneNumbers[0].number && contact.phoneNumbers[0].number.length > 0
  })
}

ContactsScreen.navigationOptions = {
  title: "Contacts",
};

const styles = StyleSheet.create({
  contact: {
    margin: 5,
  },
  contactList: {
    padding: 10,
  }
});
