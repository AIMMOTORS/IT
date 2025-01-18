import { StyleSheet } from 'react-native';
import { width } from 'react-native-bottom-tab/src/AnimatedTabBar/utils';
import { Colors, SH, SW, SF, Fonts, widthPercent } from '../../utils';

// export default StyleSheet.create({
export default HomeTabStyles = (Colors) => StyleSheet.create({
  ContentContainerStyle: {
    width: '100%',
    height: '100%',
  },
  Container: {
    width: '100%',
    height: '100%'
  },
  MinViewScreen: {
    height: '100%',
    backgroundColor: Colors.theme_backgound_second,
    width: '100%',
  },
  MinViewAllContent: {
    paddingHorizontal: SH(15),
    
  },
  Textstyletitle: {
    color: Colors.black_text_color,
    opacity: 0.7,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(25),
    fontWeight: '700'
  },
  ChangeTheameBgColor: {
    height: SH(67),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: SH(200),
    backgroundColor: Colors.theme_backgound,
  },
  SetFileChnage: {
    paddingHorizontal: SH(12),
    width: '95%',
    height: SH(47),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: Colors.gray_text_color,
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Medium,
    borderRadius: 200,
    backgroundColor: Colors.white_text_color,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  InputWidth: {
    width: '90%'
  },
  InputStyles: {
    backgroundColor: 'transparent',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 0 : 0,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 0 : 0,
    elevation: Platform.OS === 'ios' ? 0 : 0,
  },
  SearchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.light_gray_text_color,
    width: '100%',
    borderWidth: SH(0.5),
    borderColor: Colors.gray_text_color,
    borderRadius: SH(7),
    marginTop: SH(15)
  },
  SearchIcon: {
    padding: SH(10),
  },
  SerchInput: {
    width: widthPercent(80),
    shadowColor: 'transparent',
    paddingTop: SH(10),
    paddingRight: SH(10),
    paddingBottom: SH(10),
    paddingLeft: 0,
    backgroundColor: Colors.light_gray_text_color,
    color: Colors.black_text_color,
  },
  SearchIconView: {
    width: widthPercent(10),
  },
  HeadingText: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(20),
    color: Colors.black_text_color
  },
  CarAvtar: {
    width: '100%',
    height: '100%'
  },
  CarAvtarWrap: {
    width: SW(120),
    height: SH(120)
  },
  CarModalName: {
    fontFamily: Fonts.NunitoSans_Bold,
    color: Colors.black_text_color,
    fontSize: SF(18)
  },
  FlexRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  LocationName: {
    fontFamily: Fonts.NunitoSans_Medium,
    color: Colors.dark_liver,
    fontSize: SF(16),
    paddingLeft: SH(5)
  },
  RatingNumber: {
    fontFamily: Fonts.NunitoSans_Regular,
    color: Colors.black_text_color,
    fontSize: SF(16),
    paddingLeft: SH(5)
  },
  ReviewsNumber: {
    fontFamily: Fonts.NunitoSans_Regular,
    color: Colors.reviewColor,
    fontSize: SF(16),
    paddingLeft: SH(5)
  },
  FlexRowAliCent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
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
  PriceView: {
    backgroundColor: Colors.star_color,
    paddingHorizontal: SH(15),
    paddingVertical: SH(2),
    borderRadius: SW(20)
  },
  AvtarIcon: {
    width: '100%',
    height: '100%',
    borderRadius: SW(200)
  },
  AvtarIconWrap: {
    width: SW(25),
    height: SW(25),
    marginLeft: SH(20)
  },
  LikeStyle: {
    marginLeft: SH(20),
    position: 'relative',
    zIndex: 1,
    backgroundColor: Colors.light_gray_text_color,
    borderRadius: SW(100),
    width: SW(30),
    height: SW(30),
    justifyContent: 'center',
    alignItems: 'center'
  },
  CarView: {
    paddingVertical: SH(10),
    backgroundColor: Colors.light_gray_text_color,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 5,
      minHeight: '100%',
    },
    shadowOpacity: 1,
    shadowRadius: Platform.OS === 'ios' ? 2 : 50,
    elevation: Platform.OS === 'ios' ? 1 : 6,
    overflow: 'hidden',
    borderRadius: SW(15),
    marginBottom: SH(20),
    marginHorizontal: SH(15)
  },
  Paddleft: {
    paddingLeft: SH(15)
  }



});