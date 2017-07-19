
var apikey    = "6a73c78b3fe8f0100e07368a7123453dd8487a331a3b9f74f584c191ad1e764f";
var clientkey = "267ec4a933003ce35cdfc2e4e2e8ebf4787e8420b4c8b1ad90b03028c5414213";
var ncmb      = new NCMB(apikey, clientkey);

function sendResult() {
  var Message = ncmb.DataStore("Message");
  var message = new Message();

  message.set("result", "成功してるよ〜〜")
         .save()
         .then(function(){
          window.alert("送信完了！");
         })
         .catch(function(err){
          window.alert("送信失敗…");
         });
}

function recieveResult() {
  var Message = ncmb.DataStore("Message");

  Message.fetchAll()
         .then(function(result){
           result = result[result.length - 1].get("result");
           // contents[Math.floor(Math.random() * contents.length)].get("contents")
            window.alert("前回送ったのは「" + result + "」だよ！");
          })
         .catch(function(err){
            window.alert("取得できませんでした…");
          });
}