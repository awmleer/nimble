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
    a:1
  },
  computed:{
    filteredItems:function () {
      let k=this.keyword;
      return _.filter(this.items, function (item) {
        return item.keyword.indexOf(k)!=-1;
      });
    }
  },
  methods:{
    doSomething: function () {
      $('#keyword')[0].focus();
      this.a=22;
    }
  }
});



