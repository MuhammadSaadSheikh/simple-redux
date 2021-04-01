import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    mainContainer : {
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between'
        // borderWidth: 1
    },
    nestedStyling: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 10,
    },
    input: {
        // width: '20%',
        textAlign: 'center',
        borderBottomWidth: 1
    }
})

export default styles