const btn = document.getElementById("btn");
const addValue = document.getElementById("addValue");
const result = document.getElementById("result");

function deleteList(e) {
    const removeOne = e.target.parentElement;
    removeOne.remove();

}

function addTodo() {
    if(addValue.value==false) {
        alert('내용을 입력하세요');
    } else {
        let list = document.createElement("li");
        let del = document.createElement("button");

        list.innerHTML=addValue.value;
        result.appendChild(list);
        list.appendChild(del);
        del.innerText = "x";
        del.style.fontSize = "20";
        del.style.border = "none";
        del.style.float = "right";
        del.style.marginTop = "10px";
        del.style.cursor = "pointer";
        del.addEventListener("click", deleteList);
        del.style.position='relative';


        addValue.value="";
        addValue.focus();
        list.addEventListener("click", function() {
            list.style.textDecoration = "line-through";
            list.style.color ="tomato";

        })
       
    


    }

    
}

function allClearList() {
    if (confirm("정말 삭제하시겠습니까?")) {
      if (result.children.length === 0) {
        alert("삭제할 목록이 없습니다.");
      } else {
        // result 요소 내부의 모든 li 요소 삭제
        while (result.firstChild) {
          result.removeChild(result.firstChild);
        }
      }
    } else {
      return false;
    }
  }