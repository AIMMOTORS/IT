import React, { useState, useMemo } from "react";
import { Text, View, Image, ScrollView, KeyboardAvoidingView, TouchableOpacity, } from "react-native";
import { HelpScreenStyles } from '../../styles';
import images from '../../index';
import { Spacing } from '../../components';
import { SH } from '../../utils';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const NotificationScreen = () => {
  const { t } = useTranslation();

  const { Colors } = useTheme();
  const HelpScreenStyless = useMemo(() => HelpScreenStyles(Colors), [Colors]);

  return (
    <View style={HelpScreenStyless.MinViewScreen}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={HelpScreenStyless.ContentContainerStyle}>
        <KeyboardAvoidingView enabled>
          <View style={HelpScreenStyless.MinFlexView}>
            <View style={HelpScreenStyless.MinContentView}>
              <Spacing space={SH(20)} />
              <TouchableOpacity style={HelpScreenStyless.FlexDiractionRow}>
                <View>
                  <Image style={HelpScreenStyless.ImageSet} resizeMode='cover' source={images.notification_1} />
                </View>
                <View style={HelpScreenStyless.ParegraphWidth}>
                  <Text style={HelpScreenStyless.TextParegraph}>{t("Notification_Paregraph")}</Text>
                  <Text style={HelpScreenStyless.TwoNavemBerScreen}>{t("Notification_date")}</Text>
                </View>
              </TouchableOpacity>
              <Spacing space={SH(20)} />
              <TouchableOpacity style={HelpScreenStyless.FlexDiractionRow}>
                <View>
                  <Image style={HelpScreenStyless.ImageSet} resizeMode='cover' source={images.notification_2} />
                </View>
                <View style={HelpScreenStyless.ParegraphWidthTwo}>
                  <Text style={HelpScreenStyless.TextParegraph}>{t("Notification_Paregraph_Two")}</Text>
                  <Text style={HelpScreenStyless.TwoNavemBerScreen}>{t("Notification_Date_Two")}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default NotificationScreen;
