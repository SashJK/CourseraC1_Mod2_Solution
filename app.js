angular
// Create Module
.module('ShoppingListCheckOff', [])
// Create controller
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

 var tobuyList = [
   {
     name: "cookie",
     quantity : 10
   },
   {
     name: "chocolate",
     quantity : 5
   },
   {
     name: "snacks",
     quantity : 15
   },
   {
     name: "soft drinks",
     quantity : 2
   },
   {
     name: "biscuites",
     quantity : 10
   },
 ];


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list = this;
  list.EmptyMsg = false;
  list.items = ShoppingListCheckOffService.getItems();
  list.onBought = function (itemIndex) {
    ShoppingListCheckOffService.AddItemToBoughtList(itemIndex);
    ShoppingListCheckOffService.removeItem(itemIndex);
    if(list.items.length === 0){
      list.EmptyMsg = true;
    }
  };


};


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list2 = this;
  list2.name = "";
  list2.quantity= "";
  list2.items = ShoppingListCheckOffService.getItemlist2();
};


function ShoppingListCheckOffService() {
  var service = this;
  // List of shopping items
  var items = tobuyList;
  var itemList2 =[];

  service.getItems = function () {
    return items;
  };

  service.getItemlist2 = function(){
      return itemList2;
  };

  service.AddItemToBoughtList = function (itemIndex) {
      var itemList = {
        name : items[itemIndex].name,
        quantity: items[itemIndex].quantity
      };
      itemList2.push(itemList);
  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  }
};
