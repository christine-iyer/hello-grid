
export default function CreateItem ({
  createItem,
  item,
  handleChange
}
) {
  return (
    <div className="CreateItem">
      <h2 className="NewItem">Create A Item</h2>
      <div className="container">
        <form 
          className="form"
          onSubmit={(e) => {
            e.preventDefault()
            createItem()
          }}
        >
          
          <label>Title
            <input 
            className="name"
            type='text' 
            value={item.name} 
            name='name' 
            onChange={handleChange} 
            placeholder='Name' 
            />
          </label>

          <label>Url
            <input className="emoji"
            type='text' 
            value={item.emoji}
            name='emoji' 
            onChange={handleChange} 
            placeholder='emoji' />
          </label>

          <label>Pick a category:
            <select 
            
            options={item.category} 
            value={item.category} 
            onChange={handleChange} 
            placeholder='Category'
            name="category">
              <option value="CMP">CMP</option>
              <option  value="A2Z">A2Z</option>
              <option  value="AC Moore">AC Moore</option>
              <option  value="AllenSterling">AllenSterling</option>
              <option  value="Balance">Balance</option>
              <option value="Broadway Gardens">Broadway Gardens</option>
              <option  value="Bulk Apothecary">Bulk Apothecary</option>
              <option  value="CVS">CVS</option>
              <option  value="Diepietros">Diepietros</option>
              <option  value="Dishwaser-Uncle Andy">Dishwaser-Uncle Andy</option>
              <option value="Dollar Store">Dollar Store</option>
              <option  value="Griffen Greenhouse">Griffen Greenhouse</option>
              <option  value="Handsink-rest equiment store">Handsink-rest equiment store</option>
              <option  value="Heat system for grow room">Heat system for grow room</option>
              <option  value="High Tech">High Tech</option>
              <option value="Home Depot">Home Depot</option>
              <option  value="Independent Power">Independent Power</option>
              <option  value="Jordan Farm">Jordan Farm</option>
              <option  value="Labor Cost-Rob Fogg">Labor Cost-Rob Fogg</option>
              <option  value="Leapin Lizards">Leapin Lizards</option>
              <option value="Leroux Kitchen">Leroux Kitchen</option>
              <option  value="Friends">Friends</option>
              <option  value="Work">Work</option>
              <option  value="Code">Code</option>
              <option  value="Misc">Misc</option>
              <option value="Family">Family</option>
              <option  value="Friends">Friends</option>
              <option  value="Work">Work</option>
              <option  value="Code">Code</option>
              <option  value="Misc">Misc</option>
              <option value="Family">Family</option>
              <option  value="Friends">Friends</option>
              <option  value="Work">Work</option>
              <option  value="Code">Code</option>
              <option  value="Misc">Misc</option>
              <option value="Family">Family</option>
              <option  value="Friends">Friends</option>
              <option  value="Work">Work</option>
              <option  value="Code">Code</option>
              <option  value="Misc">Misc</option>
              <option value="Family">Family</option>
              <option  value="Friends">Friends</option>
              <option  value="Work">Work</option>
              <option  value="Code">Code</option>
              <option  value="Misc">Misc</option>
              <option value="Family">Family</option>
              <option  value="Friends">Friends</option>
              <option  value="Work">Work</option>
              <option  value="Code">Code</option>
              <option  value="Misc">Misc</option>
              
            </select>
            </label>

            <label>Url
            <input className="price"
            type='number' 
            value={item.price}
            name='price' 
            onChange={handleChange} 
            placeholder='Price' />
          </label>

          <input className="button" 
          type='submit' 
          value='Create Item' />

        </form>
      </div>
     
    </div>
  )
}
