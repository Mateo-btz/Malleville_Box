import { StatusBar } from 'expo-status-bar';
import React, { Component, useEffect, useState } from 'react';
import { ImageBackground,Image,  StyleSheet, Text, View, Button, TouchableOpacity, ScrollView} from 'react-native';
import { Audio } from 'expo-av';
import Icon from 'react-native-ionicons';
import { Ionicons } from '@expo/vector-icons';
import { downloadAsync} from 'expo-file-system';
import * as FileSystem from 'expo-file-system';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';



export default class Samples extends React.Component <any, any> {
  audioPlayer: Audio.Sound;
  constructor(props)
  {
    super(props);
    this.audioPlayer = new Audio.Sound();
    this.state = {
      SAMPLES: [
        {id: 1, name: "ce putain de vestiaire", uri: require('../assets/Sounds/ce_putain_de_vestiaire.wav'),isLiked: false},
        {id: 2, name: "ça me met les gallons", uri: require('../assets/Sounds/ca_me_met_les_gallons.wav'),isLiked: false},
        {id: 3, name: "bougez-vous le cul", uri: require('../assets/Sounds/bougez_vous_le_cul.wav'),isLiked: false},
        {id: 4, name: "battez-vous", uri: require('../assets/Sounds/battez_vous.wav'),isLiked: false},
        {id: 5, name: "ça va néné ?", uri: require('../assets/Sounds/ca_va_nene.wav'),isLiked: false},
        {id: 6, name: "ça va néné (2) ?", uri: require('../assets/Sounds/ca_va_nene_2.wav'),isLiked: false},
        {id: 7, name: "cassez pas les couilles", uri: require('../assets/Sounds/cassez_pas_les_couilles.wav'),isLiked: false},
        {id: 8, name: "ce putain de mitroglou", uri: require('../assets/Sounds/ce_putain_de_mitroglou.wav'),isLiked: false},
        {id: 9, name: "c'est honteux", uri: require('../assets/Sounds/cest_honteux.wav'),isLiked: false},
        {id: 10, name: "colère noire", uri: require('../assets/Sounds/colere_noire.wav'),isLiked: false},
        {id: 11, name: "combinaisons de merde", uri: require('../assets/Sounds/combinaisons_de_merde.wav'),isLiked: false},
        {id: 12, name: "cucul tout rouge", uri: require('../assets/Sounds/cul_rouge_comme_les_babouins.wav'),isLiked: false},
        {id: 13, name: "Dégun les a demandé", uri: require('../assets/Sounds/degun_les_a_demande_ailleurs.wav'),isLiked: false},
        {id: 14, name: "combinaison mes couilles", uri: require('../assets/Sounds/combinaisons_mes_couilles.wav'),isLiked: false},
        {id: 15, name: "dispute avec ma femme", uri: require('../assets/Sounds/dispute_avec_ma_femme.wav'),isLiked: false},
        {id: 16, name: "enervé à un point", uri: require('../assets/Sounds/enerve_a_un_point.wav'),isLiked: false},
        {id: 17, name: "équipe de perlimpimpim", uri: require('../assets/Sounds/equipe_de_perlimpimpin.wav'),isLiked: false},
        {id: 18, name: "impardonnables", uri: require('../assets/Sounds/impardonnable.wav'),isLiked: false},
        {id: 19, name: "inadmissible", uri: require('../assets/Sounds/inadmissible.wav'),isLiked: false},
        {id: 20, name: "j'ai pas passé une bonne nuit", uri: require('../assets/Sounds/jai_pas_passé_une_bonne_nuit.mp3'),isLiked: false},
        {id: 21, name: "j'ai regardé Zorro", uri: require('../assets/Sounds/jai_regarde_zorro.wav'),isLiked: false},
        {id: 22, name: "je me chie dessus", uri: require('../assets/Sounds/je_me_chie_dessus.wav'),isLiked: false},
        {id: 23, name: "joueurs de merde", uri: require('../assets/Sounds/joueurs_de_merde.wav'),isLiked: false},
        {id: 24, name: "les couilles à l'envers", uri: require('../assets/Sounds/les_couilles_a_lenvers.wav'),isLiked: false},
        {id: 25, name: "mais tu es fou", uri: require('../assets/Sounds/mais_ty_es_fou.wav'),isLiked: false},
        {id: 26, name: "mercato de merde", uri: require('../assets/Sounds/mercato_de_merde.wav'),isLiked: false},
        {id: 27, name: "on se fait chier", uri: require('../assets/Sounds/on_se_fait_chier.wav'),isLiked: false},
        {id: 28, name: "on s'en bat les couilles des critères", uri: require('../assets/Sounds/on_sen_bat_les_couilles_des_criteres.wav'),isLiked: false},
        {id: 29, name: "on s'est fait défoncer", uri: require('../assets/Sounds/on_sest_fait_defoncer.wav'),isLiked: false},
        {id: 30, name: "on va pas parler du match", uri: require('../assets/Sounds/on_va_pas_parler_du_match.wav'),isLiked: false},
        {id: 31, name: "pas dormi de la nuit", uri: require('../assets/Sounds/pas_dormi_de_la_nuit.wav'),isLiked: false},
        {id: 32, name: "le patin le couffin", uri: require('../assets/Sounds/patin_couffin.wav'),isLiked: false},
        {id: 33, name: "René bafouille", uri: require('../assets/Sounds/rené_baffouille.wav'),isLiked: false},
        {id: 34, name: "tu es nul", uri: require('../assets/Sounds/tu_es_nul.wav'),isLiked: false},
        {id: 35, name: "vous allez me faire crever", uri: require('../assets/Sounds/vous_allez_me_faire_crever.wav'),isLiked: false},
        {id: 36, name: "vous êtes des pitres", uri: require('../assets/Sounds/vous_etes_des_pitres.wav'),isLiked: false},
        {id: 37, name: "vous n'avez pas été bons", uri: require('../assets/Sounds/vous_navez_pas_ete_bons.wav'),isLiked: false},
        {id: 38, name: "vous nous prenez pour des cons", uri: require('../assets/Sounds/vous_nous_prenez_pour_des_cons.wav'),isLiked: false}
      ],
      likedSounds: [] 
    }
  }
  styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
      zIndex: 1,
    },
    row: {
      flexDirection: "row"
    },
    backgroundImg: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      zIndex: -1,
    },
    btn: {
      color: "black",
    },
    btncontainer: {
      flexDirection: 'column',
      flexWrap: "wrap",
      justifyContent: 'space-between',
      margin: 10,
      marginTop: 40,
    },
    box: {
      backgroundColor: "transparent",
      justifyContent: "center",
      alignItems: "center",
      flex: 1
    },
    button: {
      width: "100%",
      height: 75,
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 8,
      backgroundColor: "white",
      marginTop: 10
    },
    btnText: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    },
    scrollView: {
      marginHorizontal: 20,
    }
})
   loading = true;

// reglages audio
componentDidMount = () => {
  Audio.setAudioModeAsync({
    allowsRecordingIOS: false,
    playsInSilentModeIOS: true,
    shouldDuckAndroid: true,
  })
}

// joue le sample
playSample = async (uri) => {
  try {
  await this.audioPlayer.unloadAsync()
  await this.audioPlayer.loadAsync(uri);
  await this.audioPlayer.playAsync();
  }  catch (err) {
    console.warn("Couldn't Play audio", err)
  }
}

componentDidUpdate(prevProps, prevState) {
  if (prevState.SAMPLES !== this.state.SAMPLES) {
    this.setState({ likedSounds: this.state.SAMPLES.filter(sample => sample.isLiked === true) });
  }
}

toggleLike = (id) => {
  this.setState(prevState => {
    const samples = prevState.SAMPLES.map(sample => {
      if(sample.id === id) {
        return {...sample, isLiked: !sample.isLiked};
      }
      return sample;
    });
    return { samples };
  });
}

downloadSample = async (uri, name) => {
  try {
    const downloadRes = await downloadAsync(uri, FileSystem.documentDirectory + name + ".wav");
    if (downloadRes.status === 200) {
      console.log("Téléchargement réussi !");
    } else {
      console.log("Échec du téléchargement");
    }
  } catch (error) {
    console.error("Erreur lors du téléchargement : ", error);
  }
}


// template boutons
renderSamples = () => this.state.SAMPLES.map((sample, i) => (
  <TouchableOpacity
    style={this.styles.button}
    key={i}
    onPress={() => this.playSample(sample.uri)} >
    <View style={this.styles.box}>
      <View style={this.styles.row}>
        <Text style={this.styles.btnText}>{sample.name}</Text> 
        <TouchableOpacity onPress={() => this.downloadSample(sample.uri, sample.name)}>
          <Ionicons name="download" size={30} /> 
        </TouchableOpacity>
      </View>
    </View>
  </TouchableOpacity>
))

  
render = () => (
<ImageBackground style={this.styles.backgroundImg} source={require('../assets/background.jpg')}> 
  <View style={this.styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={this.styles.btncontainer}>
            <StatusBar />
            { this.renderSamples() }
        </View>
    </ScrollView>   
  </View> 
</ImageBackground> 
)}
  