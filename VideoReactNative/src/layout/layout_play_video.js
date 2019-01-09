import { TextTrackType } from 'react-native-video';
import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import VideoPlayer from 'react-native-video-player';


const LayoutVideo = ({ src, srt, width, height, formatVideo }) => {
    return (
        <View>
            <VideoPlayer
                video={{ uri: src  }}
                videoWidth={width}
                videoHeight={height}
                ref={
                    r => this.player = r
                }
                textTracks={[
                    {
                        title: "English CC",
                        language: "en",
                        type: TextTrackType.SRT,
                        uri: srt
                    }
                ]}
                selectedTextTrack={
                    {
                        type: 'language',
                        value: 'en'
                    }
                }



            />

            <Button
                onPress={() => this.player.stop()}
                title="Stop"
            />
            <Button
                onPress={() => this.player.pause()}
                title="Pause"
            />
            <Button
                onPress={() => this.player.resume()}
                title="Resume"
            />
            <Button
                onPress={() => this.player.onToggleFullScreen()}
                title="Full Screen Video"
            />

        </View>
    );
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

export default LayoutVideo;