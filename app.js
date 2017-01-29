const shell = require('electron').shell;
const os = require('os');

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
  methods:{
    doSomething: function () {
      $('#keyword')[0].focus();
      this.a=22;
    }
  }
});



