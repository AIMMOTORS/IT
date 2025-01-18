import { StyleSheet } from 'react-native';
import { SF, Fonts, SW,SH } from '../../utils';


export default CardStyle = (Colors) => StyleSheet.create({
  BackgroundWhite: {
    backgroundColor:Colors.white_text_color,
  },
  whilistminbody: {
    width: '100%',
    marginTop: '5%',
    height: '100%'
  },
  ImagCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  ImageStyles: {
    width:SW(100),
    height:SH(105),
    borderRadius:SH(200)
  },
  UserName: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    textAlign: 'center',
    fontSize: SF(20),
  },
  ProfileDetailesMinview: {
    width: '90%',
    marginHorizontal: '5%',
  },
  PhoneNumberAndIcon: {
    marginTop: '0%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: SH(13),
  },
  BgWhiteShadow: {
    backgroundColor: Colors.white_text_color,
    width: '100%',
    textAlign: 'center',
    height: SH(80),
    borderRadius: 7,
    paddingHorizontal:SH(10),
    // justifyContent: 'center',
    shadowColor: "#000",
    // flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  BgWhiteShadowInputModal: { 
    width: '100%',
    height: SH(50),
    borderRadius: 7,
    paddingLeft: SH(10),
    fontSize:SF(17),
    fontFamily:Fonts.Poppins_Medium,
    paddingRight: SH(10),
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    shadowColor:Colors.gray_text_color,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 5,
      minHeight: '100%',
    },
    shadowOpacity: 1,
    shadowRadius: Platform.OS === 'ios' ? 2 : 50,
    elevation: Platform.OS === 'ios' ? 1 : 6,
    overflow: 'hidden',   
    borderRadius: 7,
    textAlignVertical: 'bottom'
  },
  EditProFile: {
    marginTop: '8%',
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.black_text_color,
    fontSize: SF(19),
    paddingBottom: SH(13),
  },
  PhoneNumberText: {
    marginTop: SH(13),
    color: Colors.black_text_color,
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Medium,
  },
  DigitNumberText: {
    color: Colors.gray_text_color,
    fontSize: SF(14),
    fontFamily: Fonts.Poppins_Medium,

  },
  LogOutView: {
    textAlign: 'center',
    color: Colors.black_text_color,
    borderBottomColor: Colors.red_color,
    fontSize: SF(20),
    fontFamily: Fonts.Poppins_Medium,
    paddingBottom: SH(15),
  },
  CenteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.gray_text_color,
  },
  IconClose: {
    position: 'relative',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    top: -15,
  },
  ModalView: { 
    backgroundColor: Colors.white_text_color,
    borderRadius: 10,
    width: '90%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  ShadowStyleModalTwo: {
    padding:SH(2),
    width: '100%',
  },
  AllPaddingModal: {
    paddingTop: SH(30),
    paddingBottom: SH(15),
    paddingHorizontal:SH(15),
    borderRadius: 100,
  },
  ModalText: {
    textAlign: 'center',
    color: Colors.black_text_color,
    fontSize: SF(22),
    fontFamily: Fonts.Poppins_Medium,
  },
    ModalText2: {
    textAlign: 'center',
    color: Colors.gray_text_color,
    fontSize: SF(12),
    fontFamily: Fonts.Poppins_Medium,
  },
  CardText: {
    textAlign: 'center',
    color: Colors.gray_text_color,
    fontSize: SF(16),
    fontFamily: Fonts.Poppins_Medium,
  },

  imageStyle: {
    // marginLeft: SH(20),
    // marginTop: SH(5),
    // marginBottom: SH(5),
    width: SW(100),
    height: SH(100),
    flex:1,

  },


  MarginRightView: {
    width:'48%'
  },
  Marginright: {
    width:'48%'
  },
  input: {
    fontFamily: Fonts.Poppins_Medium,
    width: '100%',
    fontSize: SF(17),
    shadowColor: 'transparent'
  },
  ButtonsetModleTwoButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop:SH(10),
  },
  spaceview: {
    paddingTop: SH(12),
  },
  InputUnderLine: {
    backgroundColor: Colors.white_text_color,
    width: Platform.OS === 'ios' ? '95%' : '90%',
    height: SH(50),
    borderRadius: 7, 
    flexDirection: 'row',
    fontFamily: Fonts.Poppins_Medium,
    paddingLeft: SH(15),
    width:'100%',
    paddingRight: SH(45),   
    backgroundColor: '#fff',
    shadowColor: Colors.gray_text_color,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 5,
      minHeight: '100%',
    },
    shadowOpacity: 1,
    shadowRadius: Platform.OS === 'ios' ? 2 : 50,
    elevation: Platform.OS === 'ios' ? 1 : 6,
    overflow: 'hidden',   
    borderRadius: 7,
  },
  InputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  TextPasswored: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    width: '100%',
    fontSize:SF(16),
    shadowColor: 'transparent'
  },
  SingleButtonStyles: {
    borderColor: Colors.theme_background_brink_pink,
     backgroundColor: Colors.white_text_color,
     borderWidth:1,
  },
  IconAndTextFlex: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  SingleButtonText: {
    color:Colors.theme_background_brink_pink
  },
  CardContainer: {
    marginBottom: 10,
    height: SH(80),
    padding: 20,
    borderRadius: 18,
    backgroundColor: 'white',
    elevation: 2, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    margin: "5%",
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontWeight: 'bold'
  },
  ErrorMessage: {
    color: 'red', // or any other color you prefer for error messages
    fontSize: 12,  // or adjust the font size as needed
    marginTop: 5,  // add some top margin to separate from the input field
    marginLeft:18
  },

  pencil:{
    // flex:1,
    // justifyContent:'flex-end'
    marginLeft:SW(50)

  }
});