import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView
} from "react-native";

import {
  CardItem,
  Card,
  Container,
  Header,
  Content,
  Body,
  Thumbnail,
  Left
} from "native-base";

import { StackNavigator } from "react-navigation";
import Youtube from "react-native-youtube";

import { Icon } from "react-native-vector-icons/MaterialIcons";
import { Icons } from "react-native-vector-icons/MaterialCommunityIcons";

import axios from "axios";

import { Actions } from "react-native-router-flux";
const profileImage = require("./thumbnail.png");

const apiKey = "AIzaSyACSmv66c7VnoRnY3L5OJxdi6tKN22SIH4";
const channelID = "UCiAq_SU0ED1C6vWFMnw8Ekg";
const results = 3;

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLocal: [],
      channelPicture: profileImage
    };
  }

  componentWillMount() {
    axios
      .get(
        "https://www.googleapis.com/youtube/v3/search/?key=" +
          apiKey +
          "&channelId=" +
          channelID +
          "&part=snippet,id&order=date&maxResults=" +
          results
      )
      .then(res => {
        // console.log(res.data.items[0]);
        const videoID = [];
        res.data.items.forEach(item => {
          videoID.push(item);
          console.log(videoID);
          console.log(videoID[0]);
          this.setState({
            dataLocal: videoID
          });
        });
      })
      .catch(err => {
        console.log("[Fetch Data] " + err);
      });

    axios
      .get(
        "https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails%2Fdefault&id=" +
          channelID +
          "&key=" +
          apiKey
      )
      .then(res => {
        const channelPicture = res.data.items[0].snippet.thumbnails.default.url;
        // console.log(res.data.items[0].snippet.thumbnails.default.url);
        this.setState({
          channelPicture: channelPicture
        });
      })
      .catch(err => {
        console.log("Error from Channel DP " + err);
      });
  }

  render() {
    return (
      <Container>
        <Content>
          {this.state.dataLocal.map(item => (
            <Card key={item.id.videoId}>
              {/* <CardItem button onPress = { () => Actions.VideoPage({youtubeId : item.id.videoId})} > */}
              <CardItem
                button
                onPress={() => {
                  Actions.YouTube({
                    youtubeId: item.id.videoId,
                    title: item.snippet.channelTitle
                  });
                }}
              >
                <Image
                  source={{ uri: item.snippet.thumbnails.medium.url }}
                  style={{ width: null, height: 200, flex: 1 }}
                />
              </CardItem>
              <CardItem>
                <Left>
                  <Thumbnail source={{ uri: this.state.channelPicture }} />
                  <Body>
                    <Text style={{ color: "#000" }}>{item.snippet.title}</Text>
                  </Body>
                </Left>
              </CardItem>
              {/* </CardItem> */}
            </Card>
          ))}
        </Content>
      </Container>
    );
  }
}
