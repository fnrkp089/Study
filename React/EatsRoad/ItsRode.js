import styled from '@emotion/styled'

export const Wrapper = styled.div`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
display: flex;
flex-direction: column;
width: 640px;
height: 1138px;
background-image: url('/background.png');
background-size: cover;

`
export const Wrapper_top = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 400px;
`
export const Top_img = styled.div`
width:100%;
height:100%;
display: flex;
justify-content:center;
align-items: flex-end;
`
export const Top_img_bottom = styled.div`
  display: flex;
  justify-content: center;
  width: 218px;
  height: 62px;
  margin: auto;
  font-family: SpoqaHanSans;
  font-size: 60px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -2px;
  color: #ffffff;
`
export const Wrapper_bottom = styled.div`
  width: 100%;
  height: 550px;
  `
export const Bottom_input = styled.div`
  display:flex;
  flex-direction:column;
  width: 100%;
  height: 200px;
  margin-top: 100px;
  
`
export const Input = styled.input`
  width: 540px;
  height: 30px;
  margin: 0px 49px 20px 40px;
  border-left: 0px;
  border-top:0px;
  border-right:0px;
  border-bottom: 1px solid rgba(255, 255, 255, .5);
  background-color:transparent;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.88;
  color: #ffffff;
  opacity: 0.5;
`

export const Waring = styled.div`
width: 100%;
height: 20px;
margin:0px 50px;
font-size:20px;
color:red;
opacity: 0.5;
`

export const Bottom_buttons = styled.div`
display: flex;
flex-direction:column;
align-items: center;
width: 100%;
height: 50px;
`

export const Loginbotton = styled.button `
  width: 540px;
  height: 76px;
  margin: 20px 49px 44px 51px;
  padding: 25px 0;
  opacity: 0.6;
  border-radius: 38px;
  background-color: #ff1b6d;
  font-size: 26px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.81;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`
export const Etc = styled.div`
  width: 350px;
  height: 20px;
  margin: 20px 20px 61px 50px;
  font-family: SpoqaHanSans;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  color: #ffffff;
`
export const Kakao = styled.button`
  width: 540px;
  height: 76px;
  margin: 20px 49px 0 51px;
  padding: 18px 100px;
  opacity: 0.6;
  border-radius: 38px;
  border: solid 2px #fae100;
  background-color:transparent;
  font-stretch: normal;
  font-style: normal;
  font-size:26px;
  line-height: 0.81;
  letter-spacing: normal;
  text-align: center;
  color: #fae100;  
`
export const Kakaoimg = styled.img`
  position: relative;
`

export const Resetbutton = styled.button`
  width: 20px;
  height: 20px;
`