export default{
        namespace:'tester',

        state:{
                num: 1
        },

        reducers:{
                add(state){
                        return{
                                ...state,
                                num: state.num + 1
                        }
                }
        }
}