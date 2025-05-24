const { Logger } = require('../config');

class CrudRepository{
    constructor(model){
        this.model = model;
    }

    async create(data){
        try{
            const response = await this.model.create(data);
            return response;

        }catch(error){
             Logger.error('something went wrong in repository layer : create');
             throw error;
        }
    }

    async destroy(data){
        try{
            const response = await this.model.destroy({where : {id : data}});
            return response;

        }catch(error){
             Logger.error('something went wrong in repository layer : create');
             throw error;
        }
    }

    async get(data){
        try{
            const response = await this.model.findbyPk(data);
            return response;

        }catch(error){
             Logger.error('something went wrong in repository layer : create');
             throw error;
        }
    }

    async getall(){
        try{
            const response = await this.model.getall();
            return response;

        }catch(error){
             Logger.error('something went wrong in repository layer : create');
             throw error;
        }
    }
}