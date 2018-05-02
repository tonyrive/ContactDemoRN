
import React from 'react';
import { StackNavigator } from 'react-navigation';
import ContactListPage from './screens/ContactListPage';
import ContactDetailsPage from './screens/ContactDetailsPage';

const App = StackNavigator({
    ContactListPage: { screen: ContactListPage},
    ContactDetailsPage: { screen: ContactDetailsPage}
});

export default App;
