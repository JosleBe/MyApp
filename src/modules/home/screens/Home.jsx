import { StyleSheet, Text, View, FlatList } from "react-native";
import React, {useEffect, useState} from "react";
import CardListHouses from "../../../kernel/components/CardListHouses";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../kernel/utils/FirebaseConnection";

export default function Home(){
    const [houses, setHouses] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        (async()=>{
            const arrayHouses = [];
            const querySnapshot = await getDocs(collection(db, "Houses"));
            querySnapshot.forEach((doc) => { 
            const data = doc.data();
            data.id = doc.id;
            arrayHouses.push(data);
            });
            setHouses();
            setLoading(false);
        })();arrayHouses
    },[]);
    return(
        <View style={styles.container}>
            <FlatList
            data={houses}
            renderItem={({item})=>(
                <CardListHouses
                images={item.images}
                title={item.title}
                description={item.description}
                price={item.price}
                rating={item.rating}
                count={item.count}
                />
            )}
            keyExtractor={(item)=>item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
    }
})