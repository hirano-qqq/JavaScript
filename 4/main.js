var app = new Vue({
    el: '#app',
    data: {
        list: [],
        addText: '',
        searchText: ''
    },
    //watchでlistの変更を監視
    watch: {
        list: {
            handler: function() {
                //localStorageにデータを保存
                localStorage.setItem("list", JSON.stringify(this.list));
                                   
                }
            },
            deep: true
        


    },
    computed: {
        
        
        uncheckList: function () {
                var count = 0;
                var todos = this.list;
                var length = todos.length;
                for(var i = 0; i < length; i++) {
                    if(!todos[i].isChecked) {
                        count++;
                    }
                }
                return count;
                       
         },
         allList: function () {
            return this.list.length
          }
       },
    //マウントされた時にlocalStorageからデータを取得
    mounted: function() {
        this.list = JSON.parse(localStorage.getItem("list")) || [];
    },
    methods: {
        addToDo: function() {
            if (this.addText !== '') {
                this.list.push({
                    text: this.addText, 
                    isChecked: false,                    
                });
            }
            this.addText = '';
        },
        deleteBtn: function() {

            this.list = this.list.filter(function(todo) {
                return !todo.isChecked;
                
            });
        }
    }
});