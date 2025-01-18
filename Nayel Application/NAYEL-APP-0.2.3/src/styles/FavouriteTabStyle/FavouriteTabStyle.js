
import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, Colors, widthPercent } from '../../utils';

// export default StyleSheet.create({
export default FavouriteTabStyle = (Colors) => StyleSheet.create({
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
    MinFlexView: {
        width: '100%',
        height: '100%',
    },
    RetingFlatBox: {
        shadowColor: '#b5b2b2',
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 5,
            minHeight: '100%',
        },
        shadowOpacity: 1,
        shadowRadius: Platform.OS === 'ios' ? 2 : 50,
        elevation: Platform.OS === 'ios' ? 1 : 6,
        overflow: 'hidden',
        borderRadius: SH(15),
        backgroundColor: Colors.bgWhite,
        padding: SH(15),
        marginHorizontal: SH(15),
        marginVertical: SH(5),
        position: 'relative'
    },
    VehicleImage: {
        width: '100%',
        height: '100%'
    },
    VehicleImageBox: {
        width: SW(200),
        height: SH(100),
    },
    VehicleImageBoxWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.light_gray_text_color,
        borderRadius: SH(15)
    },
    CarModalName: {
        fontFamily: Fonts.NunitoSans_Bold,
        color: Colors.black_text_color,
        fontSize: SF(18)
    },
    Price: {
        fontFamily: Fonts.Poppins_Bold,
        color: Colors.black_text_color,
        fontSize: SF(16),
        marginTop: SH(4),
        paddingLeft: SH(2)
    },
    DayTime: {
        fontFamily: Fonts.NunitoSans_Regular,
        color: Colors.dark_liver,
        paddingLeft: SH(2),
        fontSize: SF(14),
    },
    FlexAlCent: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    FlexAlCentJuSpBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    PaddHor10: {
        paddingHorizontal: SH(10)
    },
    leftIcon: {
        width: SW(20),
        height: SH(20),
        marginRight: SH(10)
    },
    DateAndTimeText: {
        fontFamily: Fonts.NunitoSans_Regular,
        color: Colors.dark_liver,
        fontSize: SF(14),
    },
    HoursText: {
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.black_text_color,
        fontSize: SF(15),
    },
    leftBox: {
        flexDirection: 'row',
        alignItems: 'center',
        width: widthPercent(45)
    },
    Button: {
        height: SH(43),
    },
    RentHeadingText: {
        fontFamily: Fonts.Poppins_Bold,
        color: Colors.black_text_color,
        fontSize: SF(20),
        paddingHorizontal: SH(15)
    },
    Buttontext: {
        fontFamily: Fonts.NunitoSans_Medium,
        color: Colors.white_text_color,
        fontSize: SF(16),
    },
    LikeStyle: {
        position: 'absolute',
        right: SH(20),
        top: SH(20),
        zIndex: 1
    }


});
