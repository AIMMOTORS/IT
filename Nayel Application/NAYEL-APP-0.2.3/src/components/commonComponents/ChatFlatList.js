import React, { useState, useMemo } from "react";
import { View, Text, Image, } from 'react-native';
import { ChatStyles } from '../../styles';
import images from '../../index';
import IconL from 'react-native-vector-icons/AntDesign';
import { SH, SF } from "../../utils";
import { Spacing } from '../../components';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

function ChatFlatList(props) {
    const { item, index } = props;
    const { Colors } = useTheme();
    const { t } = useTranslation();
    const ChatStyless = useMemo(() => ChatStyles(Colors), [Colors]);

    return (
        <View>
            <View style={ChatStyless.MarginBottomSpace}>
                <View style={ChatStyless.FlexRowJustyCenter}>
                    <View style={ChatStyless.ChatViewBgColor}>
                        <Text style={ChatStyless.TextColorMessage}>{t(item.msgSend)}</Text>
                        <Text style={ChatStyless.TextColorMessageTwo}>{t(item.sendTime)}</Text>
                    </View>
                </View>
                <Text style={ChatStyless.DataSandTimeColor}>12 Feb,2023</Text>
                <Spacing space={SH(10)} />
            </View>
            <View style={ChatStyless.MarginBottomSpace}>
                <View style={ChatStyless.FlexRowJustyCentertwo}>
                    <View style={ChatStyless.LeftImageView}>
                        <Image source={images.UXdEsigner_one} style={ChatStyless.ImagStyleandCall} resizeMode={'cover'} />
                    </View>
                    <View style={ChatStyless.MessageMinviewOwner}>
                        <Text style={ChatStyless.TextColorMessage}>{t(item.reciveMassage)}</Text>
                        <View style={ChatStyless.FlexCheckSet}>
                            <View>
                                <Text style={ChatStyless.TextColorMessageTwotwo}>{t(item.resTime)}</Text>
                            </View>
                            <View style={ChatStyless.SetRightIconViewStyle}>
                                <IconL color={Colors.white_text_color} name="check" />
                                <IconL color={Colors.white_text_color} style={ChatStyless.SetIconPotion} name="check" />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <Spacing space={SH(20)} />
        </View>
    );
};
export default ChatFlatList;