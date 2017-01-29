const shell = require('electron').shell;
const os = require('os');
const _ = require('lodash');

// setTimeout('shell.showItemInFolder(os.homedir());',1000);

let vm = new Vue({
  el: '#app',
  data:{
    keyword:'',
    items:[
      {keyword:'test',path:'/Users/Hao'},
      {keyword:'hahah',path:'/Users/Hao'},
      {keyword:'work',path:'/Users/Hao/Pictures/浙大校徽.jpg'}
    ],
    selectedIndex:0,
    adding:false,
    itemAdding:{
      keyword:'',
      path:''
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
      console.log(index);
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
      this.items.push(this.itemAdding);
      this.keyword='';
      this.adding=false;
      this.itemAdding={
        keyword:'',
        path:''
      };
    }
  }
});

vm.$watch('keyword', function () {
  this.selectedIndex=0;
});



