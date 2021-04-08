import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        // backgroundColor: 'red'
    },
    markerContainer: {
        width: 30,
        height: 30,
        backgroundColor: 'blue'
    },
    iconContainer: {
        width: 60,
        height: 60,
        position: 'absolute',
        backgroundColor: 'green',
        bottom: 15,
        right: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    }
})

export default styles