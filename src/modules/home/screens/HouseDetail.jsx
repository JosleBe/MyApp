import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PagerView from 'react-native-pager-view';
import { map } from "lodash";
import { Image } from "@rneui/base";
import MapViewCustom from "../../../kernel/components/MapViewCustom";

export default function HouseDetail(props) {
    const { route: { params } } = props;
    const { image, title, description, price, rating } = route.params;

    //Cambiar nombre  de la cabecera 
    props.navigation.setOptions({ title });
    return (
        <View style={styles.container}>
            <PagerView>
                {map(image, (item) => (
                    <View key={item}>
                        <Image source={{ uri: item }}
                            style={{ width: '100%', height: 400 }} />
                    </View>
                ))}
            </PagerView>
            <MapViewCustom />
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});