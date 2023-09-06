# [React] Hooks

공부기간 23.09.05~06<br>
공부하면서 느낀점 <a href="https://github.com/bp4sp4/MovieWebService">영화 웹서비스</a>와 달리 리액트 버전이 달라서 그런지 많이 어렵다.

<h3>공부하면서 가장 중요하다고 생각한 두가지</h3>
<ul>
<li>useState</li>
<li>useEffect</li>
</ul>

<h3>useState</h3>
<ul>
<li>useState는 함수형 컴포넌트에서 상태값을 관리하게 해준다.</li>
<li>initialState를 파라미터로 받고, state와 stateㄹ를 변경한 setstate함수를 반환한다</li>
</ul>
<h3>예제코드</h3>

```
import { useState } from 'react';

const Example = () => {
const [count, setCount] = useState(0);

return (
div>
p>{`count: ${count}`}</p>
button onClick={() => setCount(count + 1)}>+</button>
/div>
)
};

export default Example;
```

<h3>useEffect</h3>
<ul>
<li>useEffect는 컴포넌트의 상태값 변화에 따라 컴포넌트 내부에서 변경이 이루엊야 되는것들을 처리할 수 있다.</li>
<li>React에서 제공하는 useEffect는 Side-Effect를 처리하기 위해 사용함</li>
</ul>
