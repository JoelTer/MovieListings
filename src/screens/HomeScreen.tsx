import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { ActivityIndicator, useWindowDimensions, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { CardMovie } from '../components/CardMovie';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { useMovies } from '../hooks/useMovies';
import { styles } from '../theme/main';

export const HomeScreen = () => {
    const navigation = useNavigation();
    const { top } = useSafeAreaInsets();
    const { width }  = useWindowDimensions();

    const {nowPlaying, popular, topRated, upComing, isLoading} = useMovies();

    if(isLoading){
        return (
            <View style={styles.loading}>
                <ActivityIndicator color="grey" size={100} />
            </View>
        )
    }
    return (
        <ScrollView>
            <View style={{marginTop: top+20}}>
                {/* Carrusel principal */}
                <Carousel 
                    data= { nowPlaying }
                    renderItem={ ({item}:any) => <CardMovie movie= {item} />}
                    sliderWidth={width}
                    itemWidth={300}
                    inactiveSlideOpacity={0.9}
                />

                {/* Populares */}
                <HorizontalSlider title='Populares' movies={popular} />
                <HorizontalSlider title='Top Rated' movies={topRated} />
                <HorizontalSlider title='Up Coming' movies={upComing} />
            </View>
        </ScrollView>
    )
}
