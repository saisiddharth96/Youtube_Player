import React from "react";

import { View, Text, StyleSheet } from "react-native";

import Youtube from "react-native-youtube";
import { Actions } from "react-native-router-flux";

const apiKey = "AIzaSyACSmv66c7VnoRnY3L5OJxdi6tKN22SIH4";

class YouTube extends React.Component {
  state = {
    isReady: false,
    status: null,
    quality: null,
    error: null,
    isPlaying: true,
    isLooping: true,
    duration: 0,
    currentTime: 0,
    fullscreen: false,
    containerMounted: false,
    containerWidth: null
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <YouTube
        videoId = {this.props.youtubeId}
        play = {true}
        fullscreen = {true}
        loop = {false}
        apiKey = {apiKey}
        onReady = {e => this.state({isReady : true})}
        onChangeState = {e => this.setState({status : e.status})}
        onChangeQuality = {e => this.setState({quality : e.quality})}
        onError = {e => this.setState({error : e.error})}
        style = {{alignSelf : "stretch", height : 300}}
        /> */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  }
});

export default YouTube;
