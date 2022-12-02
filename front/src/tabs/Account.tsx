import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  Appearance,
  Modal, 
  Pressable,
} from "react-native";

const colorScheme = Appearance.getColorScheme();
const username = "ExampleUserName";

//I can't get navigation going on this page.

export default function Account({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={colorScheme == 'light' ? styles.container : styles.container_dark}>
      <Image style={styles.logo} source={require("../../assets/images/short.png")} />

{/* [16:58, 01/12/2022] Kimberly Ruohio: The account page, off the top of my head, should include a link to the about, like in your screenshot, ability to change email address and change password, which would borrow elements from @Stephane's original code for registering, and he's not implemented changing password just yet.
Worry less about implementing it, more putting the inputs there. If you want to do it in more than one page, like refer back to the change password screen, Or maybe just nothing works there, and it's just the inputs and general look of it.
[16:58, 01/12/2022] Kimberly Ruohio: But of course the ability to logout.
[16:59, 01/12/2022] Kimberly Ruohio: Even if it's not really logging out just yet. */}
      <Text style={colorScheme == 'light' ? styles.text_light : styles.text_dark}>Username: {username}</Text>
      <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style={styles.modalText}>TMDB clone application{"\n"}LAUREA UAS{"\n"}</Text>
          <Text style={styles.modalText}>Students:{"\n"}Joel Isotalo{"\n"}Thomas Meurice{"\n"}Igor Rautiainen{"\n"}Stéphane Riveaux{"\n"}Kimberly Ruohio{"\n"}</Text>
          <Text style={styles.modalText}>Teacher:{"\n"}Paresh Rathod{"\n"}{"\n"}2022{"\n"}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>About</Text>
      </Pressable>
    </View>

    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  container_dark: {
    backgroundColor: "#0d253f",
    flex: 1,
    alignItems: "center",
    fontStyle: "normal",
    color: "#fff",
  },

  logo: {
    marginTop: 100,
    marginBottom: 60,
  },

  text_light: {
    marginBottom: 20,
    color: '#000'
  },

  text_dark: {
    marginBottom: 20,
    color: "#fff"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    width: "50%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
		marginBottom: 20,
    backgroundColor: "#0d253f",
    shadowColor: "rgba(13,37,63,0.74)",
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 25,
    shadowOpacity: .50,
  },
  buttonClose: {
    width: 100,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
		marginBottom: 20,
    backgroundColor: "#0d253f",
    shadowColor: "rgba(13,37,63,0.74)",
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 25,
    shadowOpacity: .50,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }

});