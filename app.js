const shell = require('electron').shell;
const os = require('os');
const _ = require('lodash');

const Config = require('electron-config');
const config = new Config();


let vm = new Vue({
  el: '#app',
  data:{
    keyword:'',
    items:[],
    selectedIndex:0,
    adding:false,
    itemAdding:{
      keyword:'',
      path:''
    }
  },
  created: function () {
    // `this` 指向 vm 实例
    let items=config.get('items');
    if (!_.isUndefined(items)) {
      this.items=items;
    }
  },
  computed:{
    filteredItems:function () {
      let k=this.keyword;
      return _.filter(this.items, function (item) {
        return item.keyword.indexOf(k)!=-1;
      }).slice(0,9);
    },
    itemAddingValid:function () {
      return (this.itemAdding.keyword!='' && this.itemAdding.path!='');
    }
  },
  methods:{
    doSomething: function () {
      $('#keyword')[0].focus();
    },
    itemClick:function (index) {
      this.selectedIndex=index;
      this.onEnter();
    },
    onEnter:function () {
      if (this.keyword == 'add') {
        this.adding=true;
      }else{
        shell.openItem(this.filteredItems[this.selectedIndex].path);
      }
    },
    increaseSelectedIndex:function () {
      if (this.selectedIndex < this.filteredItems.length-1) {
        this.selectedIndex++;
      }
    },
    decreaseSelectedIndex:function () {
      if (this.selectedIndex > 0) {
        this.selectedIndex--;
      }
    },
    addItem:function () {
      if (_.isUndefined(_.find(this.items,this.itemAdding))) {//if doesn't exist
        this.items.push(this.itemAdding);
      }
      this.saveItems();
      this.exitAdding();
    },
    exitAdding:function () {
      this.keyword='';
      this.adding=false;
      this.itemAdding={
        keyword:'',
        path:''
      };
      setTimeout("$('#keyword')[0].focus();",50);
    },
    deleteItem:function (item) {
      this.items=_.reject(this.items,item);
      this.saveItems();
    },
    saveItems:function () {
      config.set('items',this.items);
    }
  }
});

vm.$watch('keyword', function () {
  this.selectedIndex=0;
});



