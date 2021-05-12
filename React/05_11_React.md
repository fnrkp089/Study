# Day_02 자바스크립트, 리엑트

https://poiemaweb.com/js-regexp

자바스크립트를 사용하는데 있어서 정규표현식은 종종 멋진 능력을 발휘 하게 해 줄수 있다.

![](https://images.velog.io/images/fnrkp089/post/2f384683-04cb-4517-98be-6a06136795a5/image.png)

| Flag  | 뜻 | 상세내용  |
| :------------: | :-----------: | :-------------------: |
| i  |ignore case         | 대소문자 구분없이 찾아내기 |
| g   | globe      | 문자열 내 모든 패턴 검색               |
|m| multi-line| 문자열의 행이 바뀌더라도 계속 검색|

플래그는 옵션이긴 하지만 왠만하면 자주 쓰지 않을까?
***
```javascript
function alpha_string46(s){
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( alpha_string46("a234") );
```
이런식으로 간단하게 정규표현식을 활용하여 문자열을 찾아내고 조건문을 걸어버릴수도 있다.
***

***

## 리엑트

### Component?:
모듈친구들. 재사용성을 향상하기위해 리엑트는 컴포넌트를 사용하여 쉽고 빠르게 제작이 가능하도록 만들었다.
복사의 개념이 아니라 **원본 컴포넌트에서 원본과 컴포넌트를 연결하여 원본이 통제를 하도록 하는 개념**으로 쉽게 다가가자.

또한 페이지도 어떻게 본다면 하나의 커다란 컴포넌트라 볼 수 있다.
***
![](https://images.velog.io/images/fnrkp089/post/6a2eac9a-9fb6-43bf-a541-c4f0215e1f0a/image.png)

최근은 함수형으로 추세가 바뀌고 있지만 이미 클래스 형으로 제작된 곳도 있기 때문에 클래스형도 소홀히 하면 안된다.
***
```javascript
const New = () => {
  <div> This is FUnctional Component </div>
}
esport default New
```
*함수형을 화살표 함수로도 표현이 가능하다.* 
***

### 왜 함수형은 되지 않았는가?
함수형에는 State와 같은 기능이 없었으나 버전이 올라가면서 추가가 되었는데
이는 **React Hook**이라 칭한다. 이를 통해 코드는 더 간결해질 수 있었기에 함수형으로의 전환이 점점 빨라지고 있다.

***

### State?
**컴포넌트의 변수**
자바스크립트, Html을 연결했듯, 이 작업을 하나로 합쳐줄 수 있다.
즉 let aaa + document.getElementById === State라는 느낌

```javascript
State{
title : 게시물제목
name: Kenneth
value : Speed
}
```
**동적인 값을 더해버리자 : useState**
컴포넌트가 동적인 값을 State라 하는데 리액트엔 useState라는 함수가 존재한다.
이를 통해 컴포넌트의 상태를 관리할  수 있다.

***
```javascript 
import {useState} from 'react';

function CounterPage(){
  //This is for Js
  //let count = 0
  const [count, setCount] = useState(0)//상태의 기본값을 useState 파라미터에 넣어준다

  function counter(){
    setCount(count+1)//하나의 함수가 된다.
    //let은 콘솔에서 밖에 증가가 안됫다. html에 값을 다시 뿌려줘야 하는데 이는 setcount안에 존재한다.
    //count를 ++하고 올려준것을 바탕으로 html을 재 랜더링한다.
  }
  //This is for HTML
  return (
    <>
      <div>{count}</div>
      <button onClick={counter}>Count Plus</button>
    </>
  )
}

export default CounterPage;

```
***
```javascript
const [count, setCount] = useState(0)
```
**첫번째 원소 count : 현재상태, 두번째 원소 : Setter**
이를 통해 두번째 원소인 Setter함수를 통해 파라미터로 전달 받은 값을 최신의 상태로 설정한다.

```javascript
const [state, setState] = useState();
setAuth(prev => prev = authPass);
콜백함수...
```

### useState는 왜 let이 아니라 const인데?
>It does not mean the value it holds is immutable, just that the variable identifier cannot be reassigned.
-for ReRendering

>When the component is rerendered, the function is executed again, creating a new scope, creating a new count variable, which has nothing to do with the previous variable.

리렌더링이 되면 함수가 다시 한번 실행되며 새로운 스코프를 만든다. 그 스코프안에 새로운 count가 담기게 해야하기에 const로 넣어주는것이다.


***
### Yarn Dev 
package.json이 있는 위치까지 들어온 다음 yarn dev를 터미널 상에서 입력하자.
