
var apikey    = "cdf9b2a1e5dc4a4d4bf13e3d9f2039543aafceb8908cbc392730203846bde5e8";
var clientkey = "90f9bcb20742e828910d551dd04284148f937523b4609e29f5e210f1046a51c6";
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
           result = result.length - 1;
            window.alert("前回送ったのは「" + result + "」だよ！");
          })
         .catch(function(err){
            window.alert("取得できませんでした…");
          });
}