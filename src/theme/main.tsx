import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    loading:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer:{
        width: 300,
        height: 450
    },
    boxImage:{
        flex: 1,
        borderRadius: 20,
        shadowColor: "grey",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,

        elevation: 10,
    },
    image:{
        flex: 1,
        borderRadius: 20
    }
});