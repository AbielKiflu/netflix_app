import { defineStore } from "pinia";
 


 const  useCounterStore = defineStore("counter",
{
    state:()=>{
        return {
            count:0
        };
    },

    actions:{
        increment(){
            this.count++;
        },
        decrement(){
            this.count--;
    }
},

getters:{
    getCount(state){
        return state.count;
    }

}

}
);


export default useCounterStore;
