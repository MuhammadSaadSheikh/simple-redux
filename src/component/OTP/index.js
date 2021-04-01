import React, { useState, useRef, useEffect } from 'react'
import { View, TextInput } from 'react-native'

//Styling
import styles from './style'

const OTP = props => {

    const {
        container,
        nestedContainer,
        // firstValue
    } = props

    const [ firstValue, setFirstValue ] = useState('')
    console.log("🚀 ~ file: index.js ~ line 16 ~ firstValue", firstValue)
    let textInput = useRef(null)
    // console.log("🚀 ~ file: index.js ~ line 16 ~ textInput", textInput.current)

    useEffect(()=> {
        // textInput
    },[])

    return (
        <View style={[styles.mainContainer, container]} >
            <View style={[styles.nestedStyling, nestedContainer]} >
                <TextInput
                    ref = { ref => textInput = ref }
                    style={[styles.input]}
                    keyboardType='numeric'
                    placeholder=''
                    onChangeText={ text => setFirstValue(text)}
                    value={firstValue}
                    maxLength={1}
                    // onFocus={true}
                />
            </View>

            {/* <View style={[styles.nestedStyling, nestedContainer]} >
                <TextInput
                    // ref='second'
                    keyboardType='numeric'
                    style={[styles.input]}
                    placeholder=''
                    onChangeText={onChangeText}
                    value={secondValue}
                    onSubmitEditing={(event) => ref.third.focus()}
                />
            </View> */}

            {/* <View style={[styles.nestedStyling, nestedContainer]} >
                <TextInput
                    ref='third'
                    style={[styles.input]}
                    placeholder=''
                    keyboardType='numeric'
                    onChangeText={onChangeText}
                    value={thirdValue}
                    onSubmitEditing={(event) => ref.fourth.focus()}
                />
            </View>

            <View style={[styles.nestedStyling, nestedContainer]} >
                <TextInput
                    ref='fourth'
                    keyboardType='numeric'
                    style={[styles.input]}
                    placeholder=''
                    onChangeText={onChangeText}
                    value={firstValue}
                    onSubmitEditing={(event) => ref.second.focus()}
                />
            </View> */}
        </View>
    )
}

export default OTP