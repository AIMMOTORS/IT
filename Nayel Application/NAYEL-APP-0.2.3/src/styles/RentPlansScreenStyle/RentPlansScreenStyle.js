import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, Colors, heightPercent, widthPercent } from '../../utils';

export default RentPlansScreenStyle = (Colors) => StyleSheet.create({
  Bgtheme: {
    backgroundColor: Colors.theme_background
  },
  contentContainerStyle: {
    width: '100%',
    height: '100%'
  },
  MinViewScreen: {
    height: '100%',
    backgroundColor: Colors.theme_backgound_second,
    width: '100%',
    position: 'relative'
  },
  FlexRowAlcentSpBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  CarModalName: {
    fontFamily: Fonts.Poppins_Bold,
    fontSize: SF(20),
    color: Colors.black_text_color
  },
  FlexRowAlcent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  Price: {
    fontFamily: Fonts.Poppins_Bold,
    color: Colors.black_text_color,
    fontSize: SF(20),
    marginTop: SH(4),
    paddingLeft: SH(2)
  },
  RentPrice: {
    fontFamily: Fonts.Poppins_Bold,
    color: Colors.white_text_color,
    fontSize: SF(20),
    marginTop: SH(4),
    paddingLeft: SH(2)
  },
  DayTime: {
    fontFamily: Fonts.NunitoSans_Regular,
    color: Colors.dark_liver,
    paddingLeft: SH(2),
    fontSize: SF(16),
  },
  RentDayTime: {
    fontFamily: Fonts.NunitoSans_Regular,
    color: Colors.dark_liver,
    paddingLeft: SH(2),
    fontSize: SF(16),
  },
  ContainerWrap: {
    paddingHorizontal: SH(15),
    paddingTop: SH(15)
  },
  IonStyle: {
    width: SW(20),
    height: SH(20)
  },
  VehicleFeatureWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: SW(0.5),
    // borderColor: Colors.white_text_color,
    borderRadius: SW(7),
    paddingHorizontal: SH(15),
    paddingVertical: SH(10),
    marginRight: SH(10),
    backgroundColor: Colors.dark_liver,

  },
  SpecifiLabel: {
    fontFamily: Fonts.NunitoSans_Regular,
    color: Colors.white_text_color,
    fontSize: SF(15),
    paddingLeft: SH(10)
  },
  VehicleOverviewFun: {
    paddingLeft: SH(15)
  },
  BackViewWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SH(15),
    paddingTop: SH(10)
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
  VehicleDetails: {
    width: '100%',
    height: SH(200),
    marginTop: SH(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  VehicleImage: {
    width: '100%',
    height: '100%'
  },
  DetailsOverview: {
    backgroundColor: Colors.theme_background,
    width: '100%',
    borderTopLeftRadius: SW(15),
    borderTopRightRadius: SW(15),
    paddingVertical: SH(20)
  },
  OverviewLabel: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(18),
    color: Colors.white_text_color,
    paddingLeft: SH(15)
  },
  FlexRowAlcentSpBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  PaddHori: {
    paddingRight: SH(10),
    paddingLeft: SH(15),
    paddingVertical: SH(10)
  },
  VehicleRentPlanBox: {
    width: SW(130),
    height: SH(200),
    backgroundColor: Colors.bgWhite,
    borderRadius: SW(10),
    borderWidth: SW(0.5),
    borderColor: Colors.gray_text_color,
    position: 'relative',
    overflow: 'hidden',
    marginRight: SH(10)
  },
  VehicleRentPlanTopView: {
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  IonStyleBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SW(30),
    height: SH(30),
    backgroundColor: Colors.light_gray_text_color,
    borderRadius: SW(7)
  },
  PlanTitleText: {
    fontFamily: Fonts.NunitoSans_Medium,
    fontSize: SF(16),
    color: Colors.black_text_color,
  },
  PlaneSubTitletText: {
    fontFamily: Fonts.NunitoSans_Regular,
    fontSize: SF(14),
    color: Colors.dark_liver,
  },
  VehicleRentPlanBottomView: {
    position: 'absolute',
    bottom: SH(0),
    width: '100%',
    backgroundColor: Colors.chinese_silver,
    paddingVertical: SH(20),
    borderTopLeftRadius: SW(30),
    borderTopRightRadius: SW(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  VehicleRentPlanBottomViewLike: {
    position: 'absolute',
    bottom: SH(0),
    width: '100%',
    backgroundColor: Colors.theme_background,
    paddingVertical: SH(20),
    borderTopLeftRadius: SW(30),
    borderTopRightRadius: SW(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});