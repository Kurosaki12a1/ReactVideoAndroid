import PlayVideo from './component/PlayVideo';
import { createStackNavigator } from 'react-navigation';

const VideoApp = createStackNavigator({
    Screen_PlayVideo: {
        screen: PlayVideo,
        navigationOptions: {
            header: null
        }
    }
})

export default VideoApp;