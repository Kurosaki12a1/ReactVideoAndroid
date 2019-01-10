import Video, { TextTrackType } from 'react-native-video';
import React, { Component } from 'react';
import { StyleSheet, Platform, Image, Text, View, FlatList, TouchableHighlight } from 'react-native';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';


export default class PlayVideo extends Component {

    videoPlayer;

    onSeek = seek => {
        this.videoPlayer.seek(seek);
    };

    onPaused = playerState => {
        this.setState({
            paused: !this.state.paused,
            playerState,
        });
    };

    onReplay = () => {
        this.setState({ playerState: PLAYER_STATES.PLAYING });
        this.videoPlayer.seek(0);
    };

    onProgress = data => {
        const { isLoading, playerState } = this.state;
        // Video Player will continue progress even if the video already ended
        if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
            this.setState({ currentTime: data.currentTime });
        }
    };

    onLoad = data => this.setState({ duration: data.duration, isLoading: false });

    onLoadStart = data => this.setState({ isLoading: true });

    onEnd = () => this.setState({ playerState: PLAYER_STATES.ENDED });

    onError = () => alert('Oh! ', error);

    exitFullScreen = () => { };

    enterFullScreen = () => { };

    onFullScreen = () => { };


    state = {
        src: 'http://42.116.82.124/vod/DATA/Stolen_2012/_/DASH/Stolen_2012.mpd',
        src1: 'http://d3959tuydafzg6.cloudfront.net/1/travelogue2015.mp4',
        src2: 'http://www.storiesinflight.com/js_videosub/jellies.mp4',
        vtt: '',
        srt: 'http://www.storiesinflight.com/js_videosub/jellies.srt',
        paused: false,

        currentTime: 0,
        duration: 0,
        isFullScreen: false,
        isLoading: true,
        playerState: PLAYER_STATES.PLAYING,
    }




    render() {


        return (
            <View style={{ width: '100%', height: '50%' }}>

                <Video
                    source={{ uri: this.state.src2, type: 'mp4' }}
                    ref={videoPlayer => {
                        this.videoPlayer = videoPlayer
                    }}
                    style={styles.backgroundVideo}
                    repeat={true}
                    resizeMode={"contain"}
                    volume={1.0}
                    onBuffer={this.onBuffer}
                    onError={this.videoError}
                    controls={true}
                    fullscreen={true}
                    onEnd={this.onEnd}
                    onLoad={this.onLoad}
                    onLoadStart={this.onLoadStart}
                    onProgress={this.onProgress}
                    paused={this.state.paused}
                    textTracks={[
                        {
                            title: "English CC",
                            language: "en",
                            type: TextTrackType.SRT,
                            uri: this.state.srt
                        }
                    ]}
                    selectedTextTrack={
                        {
                            type : 'language',
                            value : 'en'
                        }
                    }
                />

              
            </View>
        );
    }
}

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