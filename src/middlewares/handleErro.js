function mountError(error){
    if (error.errors){
        return error.erros.map(err => err.msg)
    }
    if(error.message){
        return [error.message]
    }
    return ['Algum erro ocorreu, tente mais tarde! ']
}