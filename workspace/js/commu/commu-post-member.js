// 댓글등록 알터창
function Comment() {
  const comment = document.getElementById('commentInput').value.trim();

  if (comment === '') {
    alert('입력한 내용이 없습니다.');
    return false; // 제출을 막습니다.
  }
  return true; // 내용이 있을 경우 제출합니다.
}

// 수정,삭제,신고 알터창

function modifyAlert() {
  alert("수정하시겠습니까?");
}

function deleteAlert() {
  alert("삭제하시겠습니까?");
}

function endAlert() {
  alert("신고가 완료되었습니다.");
}