
import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, Colors, widthPercent } from '../../utils';

// export default StyleSheet.create({
export default CategoryScreenStyle = (Colors) => StyleSheet.create({

    ContentContainerStyle: {
        width: '100%',
        height: '100%'
    },
    MinViewScreen: {
        height: '100%',
        backgroundColor: Colors.theme_backgound_second,
        width: '100%',
        position: 'relative'
    },
    FlexRowTab: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 1,
        paddingLeft: SH(15)
    },
    DetailsTabText: {
        fontFamily: Fonts.NunitoSans_Bold,
        fontSize: SF(20),
        color: Colors.black_text_color,
        textTransform: 'capitalize',
        paddingBottom: SH(2),
        borderBottomWidth: SH(3),
        borderBottomColor: 'transparent',
        marginHorizontal: SH(10)
    },
    ActiveBorder: {
        borderBottomWidth: SH(3),
        borderBottomColor: Colors.theme_background,
        paddingBottom: SH(2),
    },
    Seat: {
        fontFamily: Fonts.NunitoSans_Bold,
        fontSize: SF(16),
        color: Colors.black_text_color,
        paddingLeft: SH(5)
    },
    FlexAlJusBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    WithCaright: {
        width: widthPercent(57),
        backgroundColor: Colors.light_gray_text_color,
        borderRadius: SW(7),
        paddingRight: SH(10)
    }


});
