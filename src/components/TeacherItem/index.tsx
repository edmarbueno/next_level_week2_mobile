import React, { useState } from "react";
import { View, Image, Text, Linking } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import heartOutilineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import api from "../../services/api";

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
  // Sempre que alguma coisa for manipulada pelo usuário ele deve estar em um 'Estado'
  const [isFavorited, setIsFavorited] = useState(favorited);
  function handleLinkToWhatsApp() {
    api.post("connections", {
      user_id: teacher.id,
    });

    // deepLink = uma aplicação abrir a outra
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  }

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem("favorites");

    let favoritesArray = [];

    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
        return teacherItem.id === teacher.id;
      });
      // remover dos favoritos

      favoritesArray.splice(favoriteIndex, 1);
      setIsFavorited(false);
    } else {
      // adicionar aos favoritos
      favoritesArray.push(teacher);
      setIsFavorited(true);

      await AsyncStorage.setItem("favorites", JSON.stringify(favoritesArray));
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri:
              //"https://avatars3.githubusercontent.com/u/14100622?s=400&u=efb6c9c4db19ebbbc7a6b2aa43bdd3ee0da4c742&v=4",
              teacher.avatar,
          }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name} </Text>
          <Text style={styles.subject}>{teacher.subject} </Text>
        </View>
      </View>

      <Text style={styles.bio}>
        {/* Programador, nerd, gamer desde 1999 conheceu este mundo e está nele até        
        hoje. */}
        {teacher.bio}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {"  "}
          <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={handleToggleFavorite}
            style={[styles.favoriteButton, isFavorited ? styles.favorited : {}]}
          >
            {isFavorited ? (
              <Image source={unfavoriteIcon} />
            ) : (
              <Image source={heartOutilineIcon} />
            )}
            {/* <Image source={heartOutilineIcon} /> */}
          </RectButton>

          <RectButton
            onPress={handleLinkToWhatsApp}
            style={styles.contactButton}
          >
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
