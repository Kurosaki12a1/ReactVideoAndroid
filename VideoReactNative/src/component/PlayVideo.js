import Video from 'react-native-video';
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
        vtt: '',
        paused: false,
        src1: 'http://d3959tuydafzg6.cloudfront.net/1/travelogue2015.mp4',
        currentTime: 0,
        duration: 0,
        isFullScreen: false,
        isLoading: true,
        playerState: PLAYER_STATES.PLAYING,
    }


    _onPause() {
        if (this.state.paused) {
            this.setState({ paused: false })
        }
        else {
            this.setState({ paused: true })
        }

    }


    render() {


        return (
            <View style={{ width: '100%', height: '100%' }}>
                <Video
                    source={{ uri: this.state.src, type: 'mpd' }}
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
                />

                {Platform.OS !== 'ios' && (
                    <MediaControls
                        duration={this.state.duration}
                        isLoading={this.state.isLoading}
                        mainColor="orange"
                        onFullScreen={this.onFullScreen}
                        onPaused={this.onPaused}
                        onReplay={this.onReplay}
                        onSeek={this.onSeek}
                        onSeeking={this.onSeeking}
                        playerState={this.state.playerState}
                        progress={this.state.currentTime}
                    />
                )}
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