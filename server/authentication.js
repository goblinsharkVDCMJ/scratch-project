const bcrypt = require ('bcryptjs')

//function that hashes the input pw
userSchema.pre('save', function(next){
    const user = this
    if(this.isModified('password') || this.isNew){
        bcrypt.genSalt(10, function (saltError, salt){
            if(saltError){
                throw salt
            }else {
                bcrypt.hash(user.password, salt, function(hashError, hash){
                    if(hashError){
                        return next(hashError)
                    }
                    user.password = hash
                    return next()
                }
            )}
        })
    }else{
        return next()
    }
})


