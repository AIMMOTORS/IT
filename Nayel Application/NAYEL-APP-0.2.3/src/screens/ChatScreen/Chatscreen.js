import React, { useState, useMemo } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, TextInput } from 'react-native';
import { ChatStyles } from '../../styles';
import images from '../../index';
import IconP from 'react-native-vector-icons/FontAwesome5';
import IconL from 'react-native-vector-icons/AntDesign';
import IconO from 'react-native-vector-icons/Ionicons';
import { SH, SF } from "../../utils";
import { Spacing, ChatFlatList } from '../../components';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import { FlatList } from "react-native-gesture-handler";

const Chatscreen = (props) => {
    const { Colors } = useTheme();
    const { t } = useTranslation();
    const ChatStyless = useMemo(() => ChatStyles(Colors), [Colors]);

    const chatData = [
        {
            id: 1,
            msgSend: "ChatText_Let_Me",
            reciveMassage: "Chattext_Actually_I_Have",
            sendTime: "03:16",
            resTime: "03:18"
        },
        {
            id: 2,
            msgSend: "Chat_Can_You_Just",
            reciveMassage: "Chat_Excellent",
            sendTime: "03:17",
            resTime: "03:19"
        },
        {
            id: 3,
            msgSend: "Chat_Excellent",
            reciveMassage: "Chat_Last_Paregraph",
            sendTime: "03:19",
            resTime: "03:20"
        },
    ]

    return (
        <View style={ChatStyless.MinViewScreen}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={ChatStyless.ContentContainerStyle}>
                <KeyboardAvoidingView enabled>
                    <View style={ChatStyless.MinFlexView}>
                        <FlatList
                            data={chatData}
                            numColumns={1}
                            renderItem={({ item }) => (<ChatFlatList
                                item={item}
                            />)}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
            <View style={ChatStyless.PostionAbsoluTeView}>
                <View style={ChatStyless.TextMessageView}>
                    <View style={ChatStyless.FlexrowSendMesasage}>
                        <View>
                            <TextInput
                                style={ChatStyless.TextInputBorderBottom}
                                placeholder={t("Write_A_Reply")}
                                placeholderTextColor={Colors.gray_text_color}
                            />
                        </View>
                        <View style={ChatStyless.FlexrowImagiNations}>
                            <TouchableOpacity>
                                <IconP name="grin" size={SF(25)} />
                            </TouchableOpacity>
                            <TouchableOpacity style={ChatStyless.MarginRightlikeicon}>
                                <IconO name="send" color={Colors.theme_backgound} size={30} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};
export default Chatscreen;
