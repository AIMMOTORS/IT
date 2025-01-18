
import { StyleSheet, Platform } from 'react-native';
import { Fonts, SH, SW, SF, Colors } from '../../utils';

// export default  StyleSheet.create({
export default ChatStyles = (Colors) => StyleSheet.create({
  ContentContainerStyle: {
    width: '100%',
    height: '100%',
  },
  MinViewScreen: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: Colors.white_text_color,
  },

  MinContentView: {
    width: '90%',
    height: '100%',
    // marginHorizontal: '5%',
  },
  MinFlexView: {
    width: '100%',
    height: '100%',
    paddingBottom: SH(70),
    paddingTop: SH(5),
  },
  FlexRowJustyCenter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  FlexRowJustyCentertwo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  TextColorMessage: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(16),
  },
  TextColorMessageTwo: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(12),
    paddingTop: SH(6),
    textAlign: 'right'
  },
  TextColorMessageTwotwo: {
    color: Colors.white_text_color,
    fontFamily: 'DMSans-Medium',
    fontSize: SF(12),
    paddingTop: SH(6),
  },
  DataSandTimeColor: {
    color: Colors.gray_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(14),
    textAlign: 'center',
    paddingTop: SH(5),
    paddingLeft: SH(80),
    fontWeight: '600'
  },
  ImagStyleandCall: {
    width: SW(50),
    height: SW(50),
    borderRadius: SW(100),
  },
  MessageMinviewOwner: {
    backgroundColor: Colors.theme_background,
    paddingTop: SH(6),
    paddingBottom: SH(4),
    paddingHorizontal: SH(10),
    marginLeft: SH(10),
    width: '70%',
    borderBottomRightRadius: SH(20),
    borderTopLeftRadius: SH(20),
    borderTopRightRadius: SH(20),
  },
  PostionAbsoluTeView: {
    position: 'absolute',
    backgroundColor: Colors.white_text_color,
    bottom: 0,
    width: '100%',
    borderTopLeftRadius: SH(30),
    borderTopRightRadius: SH(30),
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 10,
  },
  TextMessageView: {
    paddingHorizontal: SH(20)
  },
  messagetextcolor: {
    color: Colors.gray_text_color,
    fontSize: SF(18),
  },
  TextInputBorderBottom: {
    padding: SH(0),
    width: SW(200),
    fontSize: SF(16),
  },
  MarginRightlikeicon: {
    paddingLeft: SH(20),
  },
  FlexrowImagiNations: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  FlexCheckSet: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  SetIconPotion: {
    position: 'relative',
    top: SH(-8.5),
  },
  SetRightIconViewStyle: {
    position: 'relative',
    top: SH(9),
    paddingLeft: SH(5),
  },
  seticonrevirview: {
    marginTop: SH(-20),
  },
  ChatViewBgColor: {
    paddingVertical: SH(5),
    paddingHorizontal: SH(10),
    width: '70%',
    borderBottomLeftRadius: SH(20),
    borderTopLeftRadius: SH(20),
    borderTopRightRadius: SH(20),
    backgroundColor: Colors.argent_color,
    marginRight: SH(5)
  },
  FlexrowSendMesasage: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: SH(15)
  },
  setwhitebox: {
    backgroundColor: Colors.Forget_Password,
    padding: SH(10),
    borderRadius: 7,
    marginBottom: SH(10),
  },
  flexrowsetimage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imagecenterstyletop: {
    width: '25%',
  },
  imagsetstyle: {
    width: SW(60),
    height: SH(63),
    borderRadius: SW(100),
  },
  setlistdotviewstyle: {
    position: 'absolute',
    top: SH(-10),
    left: SH(43),
  },
  imagecenterstyle: {
    width: '72%',
  },
  textsetdoctore: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(19),
    color: Colors.theme_backgound,
  },
  SetFlextimeroe: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textsetdoctoretwo: {
    color: Colors.gray_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(15),
  },
  BgWhiteView: {
    backgroundColor: Colors.white_text_color,
    zIndex: 324,
    position: 'absolute',
    height: SH(200)
  }
});
