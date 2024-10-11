// 댓글수정버튼
function modifyCommentBtnClcik() {
  const commentBox1 = document.getElementById('review-comment-buttonBox'); //수정/삭제버튼 div
  const commentBox2 = document.getElementById('review-modifyInput');       //댓글수정하는div
  const commentBox3 = document.getElementById('review-comment');           //이미입력된댓글

  // 수정버튼 눌렀을시(수정/삭제 div와 이미 있는 댓글 none , 댓글입력창 block)
  commentBox1.style.display = 'none';
  commentBox3.style.display = 'none';
  commentBox2.style.display = 'block';
}

// 댓글등록버튼
function editCommentBtnClcik() {
  const commentBox1 = document.getElementById('review-comment-buttonBox'); //수정/삭제버튼 div
  const commentBox2 = document.getElementById('review-modifyInput');       //댓글수정하는div
  const commentBox3 = document.getElementById('review-comment');           //이미입력된댓글

  // 등록버튼 눌렀을시(수정/삭제 div와 이미 있는 댓글 block , 댓글입력창 none)
  commentBox1.style.display = 'block';
  commentBox3.style.display = 'block';
  commentBox2.style.display = 'none';
}

// 댓글등록 알터창
function Comment() {
  const comment = document.getElementById('commentInput').value.trim();
  
  if (comment === '') {
    alert('입력한 내용이 없습니다.');
    return false; // 제출을 막습니다.
  }
  return true; // 내용이 있을 경우 제출합니다.
}

//수정,삭제,신고 알터창
function modifyAlert() {
  alert("수정하시겠습니까?");
}

function deleteAlert() {
  alert("삭제하시겠습니까?");
}

function endAlert() {
  alert("신고가 완료되었습니다.");
}