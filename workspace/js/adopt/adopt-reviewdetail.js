// 글삭제버튼
function deleteClick() {
  if (confirm('정말 삭제하시겠습니까?')) {
    console.log('삭제되었습니다.');
  } else {
    console.log('삭제하지 않았습니다.');
  }
}

// 글마감버튼
function endClick() {
  if (confirm('정말 마감하시겠습니까?')) {
    console.log('마감되었습니다.');
  } else {
    console.log('마감하지 않았습니다.');
  }
}