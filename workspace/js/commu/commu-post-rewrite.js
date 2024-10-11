 // 썸머노트 크기 및 튜닝
$(function () {
  $("#contents").summernote({
      width: 780,                   // 가로값 설정
      minHeight: 500,                  // 높이값 설정
      maxHeight: 500,
      placeholder: "내용을 입력해주세요", // 안내 문구 설정
      disableDrageAndDrop: true,      //드래그
      focus: true,                  // 초기화 후 커서가 편집 가능한 영역에 포커스를 맞춤
      lang: 'ko-KR',                // 한글 설정, 기본값은 'en-US'
      toolbar: [
          // [groupName, [list of button]],
          ['insert', ['picture']],
          ['fontSize', ['fontsize']],
          ['fontName', ['fontname']],
          ['style', ['bold', 'italic', 'underline', 'strikethrough', 'clear']],
          ['color', ['forecolor', 'backcolor']],
          ['para', ['ul', 'ol', 'paragraph']],
          ['height', ['height']],
          ['table', ['table']],
          ['insert', ['link', 'video']],
          ['view', ['fullscreen', 'codeview', 'help']]
      ]
  });
});
 
 //등록
 function registration() {
  const subject = document.getElementById('subject').value.trim();
  const contents = document.getElementById('contents').value.trim();

  if (subject === '' || contents === '') {
    alert('작성한 내용이 없습니다. 제목과 내용을 입력해 주세요.');
    return false; // 내용 없을 때 알터창
  }
  return true; // 내용 작성되었을 때 등록 되게
}

//취소
function Cancel() {
  const subject = document.getElementById('subject').value.trim();
  const contents = document.getElementById('contents').value.trim();

  if (subject === '' && contents === '') {
    // 아무 내용도 입력되지 않은 경우
    location.href = '../../html/commu/commu-main-member.html'; // 바로 이동
  } else {
    // 내용이 입력된 경우 알림창
    const confirmResult = confirm('작성된 내용이 저장되지 않습니다. 취소하시겠습니까?');
    if (confirmResult) {
      location.href = '../../html/commu/commu-main-member.html'; // 확인 시 이동
    }
    // 아니요 버튼을 누르면 페이지 그대로 유지
  }
}