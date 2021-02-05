import "./styles.css";

const onClickAdd = () => {
  // TODOを入力欄のテキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // divタグの生成
  const div = document.createElement("div");
  // divタグの中にlist-rowクラスを差し込む
  div.className = "list-row";

  // liタグの生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // button(完了)タグの生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  // button(削除)タグの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（divｆ）を未完了リストから削除
    const deleteTaret = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTaret);
  });

  // divタグの子要素に、各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
