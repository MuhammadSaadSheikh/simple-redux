import React, { useEffect, useState, useRef } from 'react'
import { View, Text, TextInput, PermissionsAndroid, TouchableOpacity, CameraRoll } from 'react-native'
import Geolocation from '@react-native-community/geolocation'
import MapView, { Marker, Polyline } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'

//styles 
import styles from './style'

const Location = props => {
    // const [randomPlace, setRandomPlace] = useState({})
    const [dragStart, onDragStart] = useState({})
    const [dragEnd, onDragEnd] = useState({})
    // const [locationChoose, setLocationChosse] = useState(false)
    const [seletedLocation, setSeletedLocation] = useState({});
    const mapRef = useRef(null);

    useEffect(() => {
        requestLocationPermisson()
        getCurrentLocation()
    }, [])

    const getCurrentLocation = () => {
        Geolocation.getCurrentPosition(success => {
            // console.log(success, 'success')
            if (mapRef.current) {
                mapRef.current.animateCamera(
                    {
                        center: {
                            latitude: success.coords.latitude,
                            longitude: success.coords.longitude
                        },
                        zoom: 15
                    },
                    5000
                );
            }
            setSeletedLocation({
                longitude: success.coords.longitude,
                latitude: success.coords.latitude
            })
            // setLocationChosse(true)
        }, error => {
            console.log(error, 'error')
        })
    }

    const requestLocationPermisson = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
                title: 'Location access requtred',
                message: 'This app need to access your location'
            }
            )
        } catch (error) {
            console.log("🚀 ~ file: index.js ~ line 39 ~ requestLocationPermisson ~ error", error)
        }
    }

    const tooglePalce = val => {
        // setRandomPlace(val)
        // console.log(mapRef, 'mapRef')
        // mapRef?.current?.animateToRegion({
        //     ...seletedLocation,
        //     longitude: val.longitude,
        //     latitude: val.latitude
        // })
        if (mapRef.current) {
            mapRef.current.animateCamera(
                {
                    center: {
                        latitude: val.latitude,
                        longitude: val.longitude
                    },
                    zoom: 15
                },
                5000
            );
        }
        setSeletedLocation({
            longitude: val.longitude,
            latitude: val.latitude
        })
        // setLocationChosse(true)
    }

    const handleDefaultLocation = () => {
        getCurrentLocation()
    }

    return (
        <View style={styles.mainContainer} >
            <View style={{ flex: 1, backgroundColor: 'green', borderWidth: 1 }} >
                {seletedLocation.latitude ? (
                    <MapView
                    // onKmlReady={e => console.log('onKmlReady' , e)}
                    loadingEnabled={true}
                    // camera={camera}
                    // userInterfaceStyle='dark'
                        // liteMode={true}
                        // mapPadding={{ paddingTop: 20 }}
                        ref={mapRef}
                        onPress={(e) => tooglePalce(e.nativeEvent.coordinate)}
                        style={{ flex: 1 }}
                        // region={}
                        // region={latLong}
                        // showsUserLocation={true}
                        initialRegion={{
                            latitude: seletedLocation.latitude,
                            longitude: seletedLocation.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        // onRegionChange={e => console.log('region change =>' , e) } 
                        maxZoomLevel={30}
                    // showsTraffic={true}
                    >
                        <Marker
                            draggable
                            // isPreselected={true} 
                            coordinate={seletedLocation}
                            onDragStart={e => onDragStart(e.nativeEvent.coordinate)}
                            onDragEnd={e => onDragEnd(e.nativeEvent.coordinate)}
                        />
                        {/* { dragStart && dragEnd && <Polyline
                        // geodesic={true}
                        coordinates={[
                            { latitude: dragStart.latitude, longitude: dragStart.longitude},
                            { latitude: dragEnd.latitude, longitude:dragEnd.longitude}
                        ]} 
                        />} */}
                    </MapView >
                ) : null}
                <TouchableOpacity style={styles.iconContainer} onPress={handleDefaultLocation} >

                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Location