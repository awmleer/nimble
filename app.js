const shell = require('electron').shell;
const os = require('os');

// setTimeout('shell.showItemInFolder(os.homedir());',1000);

let vm = new Vue({
  el: '#app',
  data:{
    keyword:'',
    a:1
  },
  methods:{
    doSomething: function () {
      $('#keyword')[0].focus();
    }
  }
});



