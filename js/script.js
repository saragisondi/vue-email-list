const {createApp} = Vue;

createApp({
  data(){
    return{
      email:null
    }
  },

  methods:{
    getApi(){
      axios
      .get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then( (result) =>{
      this.email = result.data.response
      })
    },
    
  },
  
      mounted(){
        this.getApi();
      }
}).mount('#app')