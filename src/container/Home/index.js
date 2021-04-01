import React, { useState } from 'react'
import { SafeAreaView, Text, View, FlatList, TextInput, Button, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
// import  {cartAction, removeCartAction} from '../../redux/action'

import cartAction from '../../redux/action/cartAction'
import removeCartAction from '../../redux/action/removeAction'

//Styling
import styles from './style'

const Home = props => {

    const [item, setItem] = useState('')

    const dispatch = useDispatch()
    const globalState = useSelector(state =>state.cartReducer)

    const addItem = () => {
        dispatch(cartAction(item))
        setItem('')
    }

    const handleDeleteItem = val => {
        dispatch(removeCartAction(val))
    } 

    
    return (
        <SafeAreaView style={styles.mainContainer} >
            <Text> TODO APP </Text>
            <View style={styles.inputContainer} >
                <TextInput placeholder='Enter your item' style={styles.input} value={item} onChangeText={text => setItem(text)} />
                <Button title='Submit' style={styles.btn} onPress={addItem} />
            </View>

            <View style={{flex: 1, width: '100%' }} >
                <FlatList data={globalState.cart}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.listContainer} key={index} >
                                <Text>{item}</Text>
                                <TouchableOpacity style={styles.deleteContainer} onPress={ () =>  handleDeleteItem(item) } >
                                    <Text style={styles.text} > Delete </Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }} />
            </View>
        </SafeAreaView>
    )
}

export default Home