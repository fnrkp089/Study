import {Wrapper, Wrapper_top, Wrapper_bottom, Top_img, Top_img_bottom, Bottom_input, Input, Resetbutton, Waring, Bottom_buttons, Loginbotton, Etc, Kakao, Kakaoimg} from '../../styles/ItsRode'
import{useState} from 'react';

 function ItsRode(){

  const[inputs, setInputs] = useState({
    user:'',
    password: '',
  })

  const handleLogin = (e) =>{
    setInputs({
      ...inputs,
      [e.target.id] : e.target.value
    })
    console.log(inputs.user)
    console.log(e.target.value);
  }

  function login() {
    if(!inputs.user.includes('@') || !inputs.user.includes('.'))
    {
     document.getElementById('warnUser').innerText = '이메일이 유효하지 않습니다';
    }
    else if(inputs.password.length < 7) {
      document.getElementById('warnPassword').innerText ='비밀번호가 유효하지 않습니다.';
    }
  }

    return(
  <Wrapper>
    <Wrapper_top>
      <Top_img><img src='/location.png'></img></Top_img>
      <Top_img_bottom>
        잇츠로드
      </Top_img_bottom>
    </Wrapper_top>

    <Wrapper_bottom>
      <Bottom_input>
        <Input id='user' type='text' onChange={handleLogin}></Input>
        <Waring id='warnUser'></Waring>
        <Input id='password' type='password' onChange={handleLogin}></Input>
        <Waring id='warnPassword'></Waring>
      </Bottom_input>
  
      <Bottom_buttons>
      <Loginbotton onClick={login}>로그인</Loginbotton>
      <Etc>이메일 찾기   |   비밀번호 찾기    |    회원가입</Etc>
      <Kakao><Kakaoimg src='/kakao.png'></Kakaoimg>카카오톡으로 로그인</Kakao>
      </Bottom_buttons>
    </Wrapper_bottom>
  </Wrapper>
  )
}

export default ItsRode;
