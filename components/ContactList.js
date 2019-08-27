import * as Contacts from 'expo-contacts';

import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

export default function ContactList() {
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
    <ScrollView styles={styles.contactList}>
      {contacts.length > 0 ? contacts.map(contact => {
        return (
          <View style={styles.contact} key={contact.id}>
            <Text>{contact.name} ({contact.phoneNumbers[0].number})</Text>
          </View>
        );
      }) : <Text>No Contacts Yet</Text>}
    </ScrollView>
  );
}

function getContactsWithNumbers(contacts) {
  return contacts.filter(contact => {
    return contact.phoneNumbers && contact.phoneNumbers[0] && contact.phoneNumbers[0].number && contact.phoneNumbers[0].number.length > 0
  })
}

const styles = StyleSheet.create({
  contact: {
    margin: 5,
    //borderBottom: 1,
  },
  contactList: {
    padding: 10,
  }
});
