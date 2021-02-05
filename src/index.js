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
    // 押された削除ボタンの親タグ（divｆ）を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);
    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // TODOの内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // liタグを生成
    const li = document.createElement("li");
    li.innerText = text;

    // buttonタグ(戻す)の生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    // divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button(削除)タグの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（divｆ）を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divタグの子要素に、各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
