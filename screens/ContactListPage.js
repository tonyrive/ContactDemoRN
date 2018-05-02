
import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, ScrollView, Text, View} from 'react-native';
import { Avatar, Card } from 'react-native-elements';

import contacts from '../data/Contacts.json';
import ContactDetailsPage from "./ContactDetailsPage";

export default class ContactListPage extends Component {
    onPress(contact){
        this.props.navigation.navigate(
            'ContactDetailsPage',
            {contact},
        );
    }

    render() {
        return (
            <ScrollView>
                {
                    contacts.map((contact, i) => (
                        <TouchableHighlight key={i} onPress={()=> this.onPress(contact)}>
                            <Card key={i} ontainerStyle={{padding:0, margin:0}}>
                                <View key={i} style={{flex:1, flexDirection:'row'}}>
                                    <View style={{width:90}}>
                                        <Avatar large rounded source={{uri: contact.Picture}} activeOpacity={0.7}/>
                                    </View>
                                    <View>
                                        <View style={{flex:1, flexDirection:'column', justifyContent:'center' }}>
                                            <View style={{height:20}}>
                                                <Text style={styles.name}>{contact.DisplayName}</Text>
                                                <Text style={styles.name}>{contact.Phone}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </Card>
                        </TouchableHighlight>
                    ))
                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 22
    }
});