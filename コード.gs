function overwriteList() {

  var sheets = SpreadsheetApp.openById('1pAmfehZ55oke5khlKZnl8hbp40X-FyDKFTUMtr41BBs').getSheets();
  var sheet = sheets[0];
  var colA = sheet.getRange(2, 1, sheet.getLastRow() - 1).getValues();
  
  var form = FormApp.openById('17zpvzqE_65UpdqdHXHby5xO8vZm5kmUjP-HXayd00UM');
  var items = form.getItems(FormApp.ItemType.LIST);

  items.forEach(function(item1){
    if(item1.getTitle().match(/.*部署を選択してください$/)){
      var listItemQuestion = item1.asListItem();
      var choices = [];

      colA.forEach(function(name1){
        if(name1 != ""){
          choices.push(listItemQuestion.createChoice(name1));
        }
      });

      listItemQuestion.setChoices(choices);
    }
  });
  

  var colB = sheet.getRange(2, 2, sheet.getLastRow() - 1).getValues();
  
  items.forEach(function(item2){
    if(item2.getTitle().match(/.*上長を選択してください$/)){
      var listItemQuestion = item2.asListItem();
      var choices = [];

      colA.forEach(function(name2){
        if(name2 != ""){
          choices.push(listItemQuestion.createChoice(name2));
        }
      });
      
      listItemQuestion.setChoices(choices);
    }
  });


}