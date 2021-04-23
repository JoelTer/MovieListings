import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';

interface Props{
    actor: Cast
}

export const ActorItem = ({actor}: Props) => {
    
    const uri = `https://image.tmdb.org/t/p/w500${ actor.profile_path }`;
    return (
        <View style={styles.container}>
            {
                actor.profile_path && <Image source={ {uri} } style={styles.img} />
            }
            <View style={styles.actorInfo}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}> { actor.name } </Text>
                <Text style={{fontSize: 16, opacity: 0.7}}> { actor.character } </Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 50,
        shadowColor: "grey",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,

        elevation: 10,

        borderRadius: 10,
        paddingRight: 15,
        marginLeft: 20
    },
    img:{width: 50, height: 50, borderRadius: 10},
    actorInfo:{marginLeft: 10, marginTop: 3}
});