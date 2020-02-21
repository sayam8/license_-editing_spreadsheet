function overwriteList() {

  /**
  // スプレッドシートの情報を取得する
  // 
  **/

  //スプレッドシートのID　→「https://docs.google.com/spreadsheets/d/△△△/edit#gid=0」の△△△を↓に記述
  var sheets = SpreadsheetApp.openById('1pAmfehZ55oke5khlKZnl8hbp40X-FyDKFTUMtr41BBs').getSheets();
  
    // GoogleフォームのIDを設定　→「https://docs.google.com/forms/d/〇〇〇/edit」の〇〇〇を↓に記述
  var form = FormApp.openById('17zpvzqE_65UpdqdHXHby5xO8vZm5kmUjP-HXayd00UM');


  // シート1の情報を取得
  //（デフォルトのスプレッドシートの場合、シート1）
  var sheet = sheets[0];

  // スプレッドシートのA1のセルが「部署」の場合
  if("部署" == sheet.getRange("A1").getValue()){

    // A行の2行目からコンテンツをもつ最後の行までの値を配列で取得する
    var colA = sheet.getRange(2, 1, sheet.getLastRow() - 1).getValues();
  }

  /**
  // Googleフォームのプルダウン内の値を上書きする
  // 
  **/


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
  
 //ここから下が部長プルダウン
 
  // スプレッドシートのA1のセルが「部署」の場合
  if("部長" == sheet.getRange("B1").getValue()){

    // B行の2行目からコンテンツをもつ最後の行までの値を配列で取得する
    var colB = sheet.getRange(2, 2, sheet.getLastRow() - 1).getValues();
  }


  // 質問項目がプルダウンのもののみ取得
  var items2 = form.getItems(FormApp.ItemType.LIST);

  items.forEach(function(item2){
   
    if(item2.getTitle().match(/.*部長を選択してください$/)){
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