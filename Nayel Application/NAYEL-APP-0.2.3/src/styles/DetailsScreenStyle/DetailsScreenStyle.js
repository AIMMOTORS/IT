
import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, Colors, widthPercent } from '../../utils';

// export default StyleSheet.create({
export default DetailsScreenStyle = (Colors) => StyleSheet.create({
  contentContainerStyle: {
    height: '100%',
    width: '100%',
  },
  Bgtheme: {
    backgroundColor: Colors.theme_background
  },
  MinViewScreen: {
    height: '100%',
    backgroundColor: Colors.theme_backgound_second,
    width: '100%',
    position: 'relative'
  },
  VehicleDetails: {
    width: '100%',
    height: SH(250),
    marginTop: SH(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  VehicleImage: {
    width: '100%',
    height: '100%'
  },
  BackView: {
    width: SW(35),
    height: SW(35),
    backgroundColor: Colors.bgWhite,
    borderRadius: SW(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: SW(0.5),
    borderColor: Colors.gray_text_color
  },
  HeadLabel: {
    fontFamily: Fonts.Poppins_Bold,
    fontSize: SF(18),
    color: Colors.black_text_color
  },
  BackViewWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SH(15),
    paddingTop: SH(10)
  },
  CarModalName: {
    fontFamily: Fonts.Poppins_Bold,
    fontSize: SF(20),
    color: Colors.black_text_color
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
  FlexRowAlcent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ContainerWrap: {
    paddingHorizontal: SH(15),
    paddingTop: SH(15)
  },
  DetailsData: {
    fontFamily: Fonts.NunitoSans_Regular,
    color: Colors.black_text_color,
    fontSize: SF(16),
    lineHeight: SH(25)
  },
  OverviewLabel: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(18),
    color: Colors.white_text_color,
    paddingLeft: SH(15),
    paddingRight: SH(15)
  },
  DetailsOverview: {
    backgroundColor: Colors.theme_background,
    width: '100%',
    borderTopLeftRadius: SW(15),
    borderTopRightRadius: SW(15),
    paddingVertical: SH(20),
    height: '100%'
  },
  DetailsOverviewBox: {
    borderWidth: SW(0.5),
    borderColor: Colors.white_text_color,
    borderRadius: SW(5),
    width: widthPercent(45),
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SH(10),
    marginHorizontal: SH(10),
    position: 'relative'
  },
  SpeedMeterwrap: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: SH(-23),
    backgroundColor: Colors.light_gray_text_color,
    width: SW(40),
    height: SW(40),
    borderRadius: SW(100)
  },
  SpeedMeter: {
    width: SW(30),
  },
  DriveIcon: {
    width: SW(25),
  },
  FuelIcon: {
    width: SW(20),
  },
  SpeedMeterText: {
    fontFamily: Fonts.NunitoSans_Medium,
    fontSize: SF(16),
    color: Colors.white_text_color,
    paddingTop: SH(5)
  },
  Price: {
    fontFamily: Fonts.Poppins_Bold,
    color: Colors.white_text_color,
    fontSize: SF(20),
    marginTop: SH(4),
    paddingLeft: SH(2)
  },
  DayTime: {
    fontFamily: Fonts.NunitoSans_Regular,
    color: Colors.white_text_color,
    paddingLeft: SH(2),
    fontSize: SF(16),
  },
  PriceView: {
    width: widthPercent(45),
    marginBottom: SH(10)
  },
  PaddHori: {
    paddingRight: SH(10),
    paddingLeft: SH(15),
    paddingTop: SH(10)
  },
  FlexRowAlcentSpBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
