import React from 'react'
import { Schema, model, models } from 'mongoose'

const CreateObjShema = new Schema({
    titleName:{type: String},
    Note: {type: String},
        QnA: {type: String},
        Journal: {type: String},
        imagePrompt: {type: String},
        colorOpt: {type: String},
        descripfield: {type: String},
        imageName: {type: String}
})

const CreateObj = models.CreateObj || model('CreateObj', CreateObjShema)
export default CreateObj 