import React from 'react'
import { Image, Text, View } from 'react-native'
import { Movie } from '../interfaces/movieInterface';
import { styles } from '../theme/main';
interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}
export const CardMovie = ({movie, height = 450, width=300 }: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`
    console.log(uri);
    return (
        <View style={{
            width,
            height,
            marginHorizontal: 7
        }}>
            <View style={styles.boxImage}>
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
            </View>
        </View>
    )
}
