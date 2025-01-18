import React from "react";
import { Text, View, Image, ScrollView, TextInput, StatusBar } from "react-native";
import { Style } from '../../styles';
import { Button, Container, AppHeader, Input, Spacing } from '../../components';

import { useTranslation } from "react-i18next";
import { Colors } from "../../utils";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // You can replace this with the appropriate icon library

const NoTransactionScreen = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: "60%" }}>
        <Icon name="card-bulleted-off" size={150} color="grey" />
        <Text style={{ marginTop: 10, color: Colors.textSecondary, fontSize: 20 }}>
          {t("No_Transactions_made")}
        </Text>
      </View>
    </Container>
  );
};

export default NoTransactionScreen;
