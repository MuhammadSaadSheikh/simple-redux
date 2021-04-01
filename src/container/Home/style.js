import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
        // backgroundColor: 'red'
    },
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20
    },
    input: {
        width: '70%',
        borderWidth: 1
    },
    listContainer: {
        // width: 200,
        width: '100%',
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderWidth: 1,
        // backgroundColor: 'red',
        paddingHorizontal: 10,
    },
    deleteContainer: {
        width: '25%',
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        backgroundColor: 'red'
    },
    text: {
        color: 'white'
    }
})

export default styles