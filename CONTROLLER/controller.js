import bill from "../MODULE/module.js";
export const allcustomers = async(req, res) => {
    try{
      const nepa = await bill.findAll();
      if(nepa.length === 0){
          res.status(404).json({
              message: "no table found"
          });
          console.log("table not successful")
      } else {
          res.status(200).json({
              message: "table is created successfully",
              data: nepa
          })
      }
  
    } catch(err){
      console.log(err)
    }
  }

  // get a single customer
  export const singlecustomer = async(req, res) => {
    try{
        const id = req.params.id;
        const nepa = await bill.findAll({
            where: {id:id}
        });
        if(nepa.length === 0) {
            res.status(404).json({
                message: `no such id: ${id}`
            });
            console.log(nepaTable [0].id)
        } else{
            res.status(200).json({
                data: nepa [0]
            });
        }
    } catch (err) {
        res.status(404).json({
            message: err.message
        });
    }
}

// update a single customer
export const updatecustomer = async(req, res) => {
    try{
        let id = req.params.id;
        const updatedcustomer = await bill.update(req.body, {where:{id:id}})
        if(updatedcustomer [0]=== 0){ 
            res.status(200).json({
                message: "Successfully updated",
            });
            console.log(updatedcustomer[0])
        }else{
            res.status(404).json({
                message: "Sorry ",
                data: updatedcustomer
            });
        }
    } catch (err) {
        res.status(404).json({
            message: err.message
        });
        console.log(err.message)
    }
}

// create a new customer
export const newcustomer = async (req, res) => {
    try{
        const nepa = await bill.create(req.body);
        res.status( 201 ).json({
            data: nepa
        });
    } catch (err) {
        res.status( 404 ).json( {
            message: err.message
        });
    }
}

