
module.exports.FileChange = e => {
    if(e.length < 1){
      return;
    }
    const file = e[0];
    switch(file.type){
      case 'image/png':
        return true
        
      case 'image/jpg':
        return true
        
       
      case 'image/jpeg':
        return true
        
    
      default:
       return false
    }
}