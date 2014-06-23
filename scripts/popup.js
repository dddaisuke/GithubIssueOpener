function getGithubIssueUrl(input_text) {
  return "https://github.com/manabo-inc/manabo/issues/"+input_text;
}

$(function(){
  $("#issue-id").keypress( function( event ) {
    console.log(event.which);
    if( event.which === 13 ){
      var input_text = $("#issue-id").val();
      chrome.tabs.create({url: getGithubIssueUrl(input_text)});
    }
  });
})
