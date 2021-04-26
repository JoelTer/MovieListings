import { useNavigation } from '@react-navigation/core';
import React, { useContext, useEffect } from 'react';
import { ActivityIndicator, useWindowDimensions, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { CardMovie } from '../components/CardMovie';
import { GradientBackground } from '../components/GradientBackground';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { useMovies } from '../hooks/useMovies';
import { styles } from '../theme/main';

import ImageColors from "react-native-image-colors";
import { getImageColors } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';

export const HomeScreen = () => {
    const navigation = useNavigation();
    const { top } = useSafeAreaInsets();
    const { width }  = useWindowDimensions();
    const { setMainColors } = useContext(GradientContext);

    
    const {nowPlaying, popular, topRated, upComing, isLoading} = useMovies();
    
    const getPosterColors = async(i:number) => {
        const movie = nowPlaying[i];
        const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;
        const [primary, secondary] = await getImageColors(uri)
        
        setMainColors({primary, secondary});
    }
    
    useEffect(() => {
        if(nowPlaying.length > 0){
            getPosterColors(0);
        }
    }, [nowPlaying])
    if(isLoading){
        return (
            <View style={styles.loading}>
                <ActivityIndicator color="grey" size={100} />
            </View>
        )
    }
    return (
        <GradientBackground>
            <ScrollView>
                <View style={{marginTop: top+20}}>
                    {/* Carrusel principal */}
                    <Carousel 
                        data= { nowPlaying }
                        renderItem={ ({item}:any) => <CardMovie movie= {item} />}
                        sliderWidth={width}
                        itemWidth={300}
                        inactiveSlideOpacity={0.9}
                        onSnapToItem={ index => getPosterColors(index) }
                    />

                    {/* Populares */}
                    <HorizontalSlider title='Populares' movies={popular} />
                    <HorizontalSlider title='Top Rated' movies={topRated} />
                    <HorizontalSlider title='Up Coming' movies={upComing} />
                </View>
            </ScrollView>
        </GradientBackground>
    )
}
