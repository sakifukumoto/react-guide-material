const Example = () => {
  const clickHandler = () => {
    alert('ボタンがクリックされました。');
  }
  const clickHandler2 = () => {
    console.log('ボタンがクリックされました。')
  }
  return (
    <>
      {/* onClickに渡すのは関数自体なので関数のうしろに()はつけない→ × onClick={clickHandler()} */}
      <button onClick={clickHandler}>クリックしてね</button>
      <button onClick={clickHandler2}>クリックしてね</button>
    </>
  );
};

export default Example;
