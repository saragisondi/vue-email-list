const {createApp} = Vue;

createApp({
  data(){
    return{
      title: 'Email list',
      apiUrl:'https://flynn.boolean.careers/exercises/api/random/mail',
      emails:[],
      limit:10
    }
  },

  methods:{
    getApi(){
      axios
      .get(this.apiUrl)
      .then( (result) =>{
        // console.log(result.data.response)
        console.log(this.emails)
        this.emails.push(result.data.response);
      })
    },
    
  },
  
      mounted(){
        for(let i = 0 ; i < this.limit; i++)
        this.getApi();
      }
}).mount('#app')