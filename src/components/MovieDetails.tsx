import React from 'react'
import { View, Text, FlatList } from 'react-native';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import { ActorItem } from './ActorItem';

interface Props{
    movieFull: MovieFull,
    cast: Cast[]
}

export const MovieDetails = ({movieFull, cast}:Props) => {
    return (
        <View>
            <View style={{marginHorizontal: 20}}>
                <View style={{flexDirection: 'row'}}>
                    <Icon name="star-outline" color="grey" size={16} />
                    <Text> { movieFull.vote_average } </Text>
                    <Text style={{marginLeft: 5}}>
                         - { movieFull.genres.map(g => g.name ).join(', ') }
                    </Text>
                </View>
                {/* History */}
                <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>History</Text>
                <Text style={{fontSize: 16, marginTop: 10, textAlign:'justify'}}>{movieFull.overview} </Text>
                {/* Budget */}
                <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>Budget</Text>
                <Text style={{fontSize: 16, marginTop: 10, textAlign:'justify'}}>{currencyFormatter.format(movieFull.budget, {code:'USD'}) } </Text>
            </View>
            {/* Casting */}
            <View style={{marginTop:10, marginBottom: 100}}>
                <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold', marginHorizontal: 20}}>Actors</Text>

                <FlatList 
                    data={cast}
                    keyExtractor={(item)=> item.id.toString()}
                    renderItem={({item}) => <ActorItem actor={item} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{marginTop:10, height: 70}}
                />
            </View>
        </View>
    )
}
