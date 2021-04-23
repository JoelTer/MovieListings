import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Image, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Movie } from '../interfaces/movieInterface';
import { styles } from '../theme/main';
interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}
export const CardMovie = ({movie, height = 450, width=300 }: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

    const navigation = useNavigation();
    return (
        <TouchableOpacity 
            onPress={() => navigation.navigate('DetailsScreen', movie)}
            activeOpacity={0.8}
            style={{
                width,
                height,
                marginHorizontal: 2,
                paddingBottom:20,
                paddingHorizontal:7
            }}
        >
            <View style={styles.boxImage}>
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    )
}
