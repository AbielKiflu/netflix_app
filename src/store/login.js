import { defineStore } from "pinia";


const  useLoginStore = defineStore("isLoggedIn", 
{
    state:()=>{
        return {
            isLoggedIn:false
        };
    },

    actions:{
        setIsLoggedIn(logged=false){
            this.isLoggedIn=logged;
        },
 
},

getters:{
    getLoginState(state){
        return state.isLoggedIn;
    }

}

}
);


export default useLoginStore;
