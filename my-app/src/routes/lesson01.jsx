// コンポーネント間でた～を共有する
import { useState } from "react";

const MyButton = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <button　onClick={handleClick}>
        {count}回クリックした
    </button>
  )
}

const MyButtonVer01 = () => {
  return (
    <div className="c-wrap">
      <div>
        <h2>同じコンポーネントをレンダーした場合、<br />それぞれが独自のstateを持つパターン</h2>
        <MyButton />
        <MyButton />
      </div>
    </div>
  )
}
const MyButton02 = ({ count, onClick }) => {
  return (
    <button onClick={onClick}>
      {count}回クリックした
    </button>
  );
}

const MyButtonVer02 = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <div className="c-wrap">
      <div>
        <h2>同じコンポーネントをレンダーした場合、<br />連動してステートが更新されるパターン</h2>
        <MyButton02 count={count} onClick={handleClick} />
        <MyButton02 count={count} onClick={handleClick} />
      </div>
    </div>
  )
}



const Lesson01 = () => {
  return (
    <>
      <MyButtonVer01 />
      <MyButtonVer02 />
    </>
  )
}

export default Lesson01;