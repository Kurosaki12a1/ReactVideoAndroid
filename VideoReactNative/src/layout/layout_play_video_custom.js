import { TextTrackType } from 'react-native-video';
import React from 'react';
import { StyleSheet, Button, View, Text, Image } from 'react-native';
import VideoPlayer from 'react-native-video-player';
import Video from 'react-native-video';


const LayoutVideoCustom = ({ src, srt, width, height, formatVideo }) => {
    return (
        <View>
            <View style={{ height: 250  }} >
                <Video
                    source={{ uri: src }}
                    ref={(ref) => {
                        this.player = ref
                    }}
                />


            </View>
        </View>
    );
}

/*
  <View style={{ position: 'absolute', width: 50, height: 50, bottom: 0, left: 0, backgroundColor: 'red' , flexDirection:'row', zIndex: 99 }}>
                    <Image style={{ width: 50, height: 50}} source={require('../icon/icon_resize_video.png')} />
                    <Image style={{ width: 50, height: 50}} source={require('../icon/icon_resize_video.png')} />
                    <Image style={{ width: 50, height: 50}} source={require('../icon/icon_resize_video.png')} />

                </View>
*/
const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 10,
    }
})

export default LayoutVideoCustom;