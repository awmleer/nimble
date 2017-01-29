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
      {keyword:'work',path:'/Users/Hao'}
    ],
    a:1,
    selectedIndex:0
  },
  computed:{
    filteredItems:function () {
      let k=this.keyword;
      return _.filter(this.items, function (item) {
        return item.keyword.indexOf(k)!=-1;
      }).slice(0,9);
    }
  },
  methods:{
    doSomething: function () {
      $('#keyword')[0].focus();
      this.a=22;
    },
    itemClick:function (index) {
      console.log(index);
      this.selectedIndex=index;
      this.onEnter();
    },
    onEnter:function () {
      shell.showItemInFolder(this.filteredItems[this.selectedIndex].path);
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
    }
  }
});

vm.$watch('keyword', function () {
  this.selectedIndex=0;
});



