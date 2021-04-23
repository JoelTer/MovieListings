import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { RootStackParams } from '../navigation/Navigation';
import Icon from "react-native-vector-icons/Ionicons";
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams,'DetailsScreen'> {}

export const DetailScreen = ({route, navigation}: Props) => {

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;
    const { isLoading, movieFull, cast } = useMovieDetails(movie.id)

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <View style={styles.imageBorder}>
                    <Image
                        source={{ uri }}
                        style={styles.posterImage}
                    />
                </View>
            </View>
            <View style={styles.marginContainer}>
                <Text style={styles.title}>{movie.original_title}</Text>
                <Text style={styles.subtitle}>{movie.title}</Text>
            </View>
            {
                isLoading
                    ?<ActivityIndicator size={30} color="grey" style={{marginTop:20}} />
                    :<MovieDetails movieFull={movieFull!} cast={cast} />
            }

            <View style={styles.backButton}>
                <TouchableOpacity
                    onPress={()=> navigation.pop()}
                >
                    <Icon
                        name="arrow-back-outline"
                        size={50}
                        color="white"
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    imageContainer:{
        width: '100%',
        height: screenHeight * 0.7,
        shadowColor: "grey",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
        elevation: 9,
    },
    imageBorder:{
        flex:1,
        overflow: 'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25
    },
    posterImage:{
        flex: 1,
        // position:"absolute"
    },
    marginContainer:{
        marginHorizontal: 20,
        marginTop: 20
    },
    title:{
        fontSize:20,
        fontWeight: 'bold'
    },
    subtitle:{
        fontSize: 16,
        opacity: 0.7
    },
    backButton:{
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top:20,
        left:20
    }
});