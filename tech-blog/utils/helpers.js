module.exports={
    isDefined: (array)=>{
        if(array !== undefined){
            return true;
        }else{
            return false;
        }
    },

    compare: (one , two) =>{
      id = two.Posts.find(one.post_id);
            return id;
    }
};