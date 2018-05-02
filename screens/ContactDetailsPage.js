
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Avatar } from 'react-native-elements';
import Communications from 'react-native-communications';

export default class ContactDetailsPage extends Component {
    static navigationOptions = ({navigation}) => {
        return {title:'Contact Details'}
    };

    onPress(number){
        Communications.phonecall(number, false);
    };

    render() {
        const contact = this.props.navigation.state.params.contact;
        return (
            <View style={styles.container}>
                <Avatar xlarge rounded source={{uri:contact.Picture}}
                        activeOpacity={0.7} containerStyle={styles.text} />
                <Text style={styles.text}>{contact.DisplayName}</Text>
                <Text style={styles.text}>{contact.Address}</Text>
                <Text style={styles.text}>{contact.Address2}</Text>
                <Text style={styles.text}>{contact.Phone}</Text>
                <Button disabled={!contact.Phone}
                        color="#a5a5a5" title="Call" onPress={()=> this.onPress(contact.Phone)} />
            </View>
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
    },
    text: {
        marginBottom: 10
    }
});