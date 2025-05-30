const { StatusCodes } = require('http-status-codes');
const { Logger } = require('../config');
const { AppError } = require('../utils/error');

class CrudRepository{
    constructor(model){
        this.model = model;
    }

    async create(data)
    {
            const response = await this.model.create(data);
            return response;
    }

    async destroy(data){
            const response = await this.model.destroy(
                {where :
                     {id : data}
                });
            if(!response){
                throw new AppError(['Invalid data sent'], StatusCodes.BAD_REQUEST);
            }
            return response;
    }

    async get(data){
            const response = await this.model.findByPk(data);
            // console.log("fetch response", response);
            // if(!response){
            //     throw new AppError(['Invalid data sent'], StatusCodes.BAD_REQUEST);
            // }
            return response;
    }

    async getAll(){
            const response = await this.model.findAll();
            return response;
    }

    async update(id){
        const response = await this.model.update(data, {
            where : {
                id : id
            }
        })
    }
}

module.exports = CrudRepository;