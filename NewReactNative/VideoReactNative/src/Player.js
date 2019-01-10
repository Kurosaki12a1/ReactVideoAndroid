import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Video from 'react-native-video';

// link
// mp4 ok: https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_20mb.mp4
// hls ok: http://42.116.82.124/live/DATA/TimeCode/HLS/TimeCode.m3u8 
// dash not ok: http://42.116.82.124/live/DATA/TimeCode/DASH/TimeCode.mpd

export default class Player extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        var strURL = this.props.navigation.state.params.strURL;
        
        console.log("----------------- " + strURL.toLowerCase().indexOf('http'));
        if (strURL.indexOf('http') != 0) {
            strURL = 'http://' + strURL.toLowerCase();
        }
        console.log("-----------------------URL: ", strURL);
        
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.btnBack} onPress={() => {
                    this.props.navigation.goBack();
                }}>
                    <Text style={{ color: 'red', fontSize: 20 }}>Back</Text>
                </TouchableOpacity>

                <Video
                    source={{ uri: strURL }}   // Can be a URL or a local file.
                    ref={(ref) => {
                        this.player = ref
                    }}                                      // Store reference
                    onBuffer={this.onBuffer}                // Callback when remote video is buffering
                    onError={this.videoError}               // Callback when video cannot be loaded
                    style={styles.backgroundVideo}
                    controls={true}
                    fullscreen={true} />
            </View>
        );
    }

    videoError() {
        console.log("===================vao loi log");
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnBack: {
        position: 'absolute',
        top: 120,
        left: 10,
        zIndex: 100,
        backgroundColor: 'green'
    },

    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 10,
    },
});