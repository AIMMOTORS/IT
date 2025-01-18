import React, { useState, useMemo } from "react";
import { View, ScrollView, KeyboardAvoidingView, Text, FlatList, TouchableOpacity, TextInput, } from "react-native";
import { HelpScreenStyles } from '../../styles';
import Icon from 'react-native-vector-icons/AntDesign';
import { Input, Spacing, FAQScreenFlatList } from '../../components';
import { Colors, Faqdataset, SH, SF } from '../../utils';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const FAQScreen = () => {
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const HelpScreenStyless = useMemo(() => HelpScreenStyles(Colors), [Colors]);


    return (
        <View style={HelpScreenStyless.MinViewScreen}>
            <View>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={HelpScreenStyless.ContentContainerStyle}>
                    <KeyboardAvoidingView enabled>
                        <View style={HelpScreenStyless.MinFlexView}>
                            <View style={HelpScreenStyless.MinViewAllContent}>
                                <Spacing space={SH(100)} />
                                <FlatList
                                    data={Faqdataset}
                                    renderItem={({ item }) => (<FAQScreenFlatList item={item} />)}
                                    keyExtractor={item => item.id}
                                    showsHorizontalScrollIndicator={false}
                                    style={HelpScreenStyless.SetFlex}
                                />
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        </View>
    );
};
export default FAQScreen;
