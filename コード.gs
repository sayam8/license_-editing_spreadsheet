function overwriteList() {

  var sheets = SpreadsheetApp.openById('1pAmfehZ55oke5khlKZnl8hbp40X-FyDKFTUMtr41BBs').getSheets();
  var form = FormApp.openById('17zpvzqE_65UpdqdHXHby5xO8vZm5kmUjP-HXayd00UM');
  var sheet = sheets[0];

  // スプレッドシートのA列の情報を２行目から取得
  var colA = sheet.getRange(2, 1, sheet.getLastRow() - 1).getValues();

  // 質問項目がプルダウンのもののみ取得
  var items = form.getItems(FormApp.ItemType.LIST);

  items.forEach(function(item){
    // 質問項目が「部署を選択してください」を含むものに対して、スプレッドシートの内容を反映する
    if(item.getTitle().match(/.*部署を選択してください$/)){
      var listItemQuestion = item.asListItem();
      var choices = [];

      colA.forEach(function(name){
        if(name != ""){
          choices.push(listItemQuestion.createChoice(name));
        }
      });

      // プルダウンの選択肢を上書きする
      listItemQuestion.setChoices(choices);
    }
  });
  
  
 //ここから下が上長プルダウン
 var colB = sheet.getRange(2, 2, sheet.getLastRow() - 1).getValues();
 var items2 = form.getItems(FormApp.ItemType.LIST);

  items2.forEach(function(item2){
   
    if(item2.getTitle().match(/.*上長を選択してください$/)){
      var listItemQuestion = item2.asListItem();
      var choices = [];

      colB.forEach(function(name2){
        if(name2 != ""){
          choices.push(listItemQuestion.createChoice(name2));
        }
      });

      // プルダウンの選択肢を上書きする
      listItemQuestion.setChoices(choices);
    }
  });


}