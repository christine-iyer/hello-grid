import { useState } from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './NewItem.module.scss'


export default function NewItem(props) {
    //State to hold the form data
    const [form, setForm] = useState({
        name: "",
        emoji: "",
        category: '',
        price: 1.99,
        barter: false,
        
    })

    const handleChange = event => {
        // dynamically update the state using the event object
        // this function always looks the same
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    const handleSubmit = event => {
        // prevent page refresh
        event.preventDefault()
        // do what you want with the form data
        console.log(form)
        setForm('')
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <Form.Group controlId='formBasicTitle'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            onChange={handleChange}
                            value={form.name || ''}
                            name='name'
                            type='text'
                            placeholder='Name'
                        />
                    </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId='formBasicTitle'>
                        <Form.Label>Emoji</Form.Label>
                        <Form.Control
                            onChange={handleChange}
                            value={form.emoji || ''}
                            name='emoji'
                            type='text'
                            placeholder='Emoji'
                        />
                        </Form.Group>

</Col>
<Col>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Pick a Category</Form.Label>
                        <Form.Select defaultValue="Misc"
                            options={form.category}

                            onChange={handleChange}
                            placeholder='Category'
                            name="category" >
                             <option  value="A2Z">A2Z</option>
              <option  value="AC Moore">AC Moore</option>
              <option  value="AllenSterling">AllenSterling</option>
              <option value="Allstar Health">CMP</option>
<option value="Broadway Gardens">Broadway Gardens</option>
              <option  value="Bulk Apothecary">Bulk Apothecary</option>
              <option value="ChemistryStore">ChemistryStore</option>
              <option  value="CMP">CMP</option>
              <option  value="CVS">CVS</option>
              <option  value="Diepietros">Diepietros</option>
              <option  value="Dishwaser-Uncle Andy">Dishwaser-Uncle Andy</option>
              <option value="Dollar Store">Dollar Store</option>
              <option value="Freeze Dryer">Freeze Dryer</option>
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
              <option  value="Lois'">Lois'</option>
              <option  value="Lorann Oils">Lorann Oils</option>
              <option  value="Mardens">Mardens</option>
              <option  value="Mountain Rose">Mountain Rose</option>
              <option  value="Multiple Vendors">Multiple Vendors</option>
              <option  value="Napa">Napa</option>
              <option value="Natural Happiness">Natural Happiness</option>
              <option  value="Nolts Greenhouse">Nolts Greenhouse</option>
              <option  value="Oakhill">Oakhill</option>
              <option  value="Pharmaca">Pharmaca</option>
              <option  value="Post Office">Post Office</option>
              <option value="Proverda Lab">Proverda Lab</option>
              <option  value="Renhui Metal">Renhui Metal</option>
              <option  value="Sams Club">Sams Club</option>
              <option  value="Shaws">Shaws</option>
              <option  value="SJR Labs">SJR Labs</option>
              <option value="Staples">Staples</option>
              <option  value="State of Maine">State of Maine</option>
              <option  value="State of Mind">State of Mind</option>
              <option  value="True Value">True Value</option>
              <option  value="Truffle Made">Truffle Made</option>
              <option value="Uline">Uline</option>
              <option  value="Urban Garden">Urban Garden</option>
              <option  value="Vessel Services">Vessel Services</option>
              <option  value="Walmart">Walmart</option>
              <option  value="zNatural">zNatural</option>
                        </Form.Select>
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId='formBasicAge'>
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            onChange={handleChange}
                            value={form.price || ''}
                            name='price'
                            type='number'
                            placeholder='1.99'
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                    <Form.Label>Barter</Form.Label>
                        <Form.Check
                            type='checkbox'
                            value={form.barter === false}
                            style={{ float: 'left', marginTop: '0px' }}
                            //checked={(form.checked && form.checked === true)}
                            onChange={(evt) => setForm({ ...form, barter: evt.target.checked })}
                        />
                    </Form.Group>
                </Col>
               



            </Row>
            <Col>
                <Button
                    variant="danger"
                    value="Submit Form"
                    placeholder='Ready?'
                    type="submit">
                    Danger</Button>{' '}
            </Col>
        </Form>
    )
}



// 
// export default function CreateItem ({
//   createItem,
//   item,
//   handleChange
// }
// ) {
//   return (
//     <div className="CreateItem">
//       <h2 className="NewItem">Create A Item</h2>
//       <div className="container">
//         <form 
//           className="form"
//           onSubmit={(e) => {
//             e.preventDefault()
//             createItem()
//           }}
//         >
          
//           <label>Title
//             <input 
//             className="name"
//             type='text' 
//             value={item.name} 
//             name='name' 
//             onChange={handleChange} 
//             placeholder='Name' 
//             />
//           </label>

//           <label>Url
//             <input className="emoji"
//             type='text' 
//             value={item.emoji}
//             name='emoji' 
//             onChange={handleChange} 
//             placeholder='emoji' />
//           </label>

//           <label>Pick a category:
//             <select 
            
//             options={item.category} 
//             value={item.category} 
//             onChange={handleChange} 
//             placeholder='Category'
//             name="category">
              
//               <option  value="A2Z">A2Z</option>
//               <option  value="AC Moore">AC Moore</option>
//               <option  value="AllenSterling">AllenSterling</option>
//               <option value="Allstar Health">CMP</option>
// <option value="Broadway Gardens">Broadway Gardens</option>
//               <option  value="Bulk Apothecary">Bulk Apothecary</option>
//               <option value="ChemistryStore">ChemistryStore</option>
//               <option  value="CMP">CMP</option>
//               <option  value="CVS">CVS</option>
//               <option  value="Diepietros">Diepietros</option>
//               <option  value="Dishwaser-Uncle Andy">Dishwaser-Uncle Andy</option>
//               <option value="Dollar Store">Dollar Store</option>
//               <option value="Freeze Dryer">Freeze Dryer</option>
//               <option  value="Griffen Greenhouse">Griffen Greenhouse</option>
//               <option  value="Handsink-rest equiment store">Handsink-rest equiment store</option>
//               <option  value="Heat system for grow room">Heat system for grow room</option>
//               <option  value="High Tech">High Tech</option>
//               <option value="Home Depot">Home Depot</option>
//               <option  value="Independent Power">Independent Power</option>
//               <option  value="Jordan Farm">Jordan Farm</option>
//               <option  value="Labor Cost-Rob Fogg">Labor Cost-Rob Fogg</option>
//               <option  value="Leapin Lizards">Leapin Lizards</option>
//               <option value="Leroux Kitchen">Leroux Kitchen</option>
//               <option  value="Lois'">Lois'</option>
//               <option  value="Lorann Oils">Lorann Oils</option>
//               <option  value="Mardens">Mardens</option>
//               <option  value="Mountain Rose">Mountain Rose</option>
//               <option  value="Multiple Vendors">Multiple Vendors</option>
//               <option  value="Napa">Napa</option>
//               <option value="Natural Happiness">Natural Happiness</option>
//               <option  value="Nolts Greenhouse">Nolts Greenhouse</option>
//               <option  value="Oakhill">Oakhill</option>
//               <option  value="Pharmaca">Pharmaca</option>
//               <option  value="Post Office">Post Office</option>
//               <option value="Proverda Lab">Proverda Lab</option>
//               <option  value="Renhui Metal">Renhui Metal</option>
//               <option  value="Sams Club">Sams Club</option>
//               <option  value="Shaws">Shaws</option>
//               <option  value="SJR Labs">SJR Labs</option>
//               <option value="Staples">Staples</option>
//               <option  value="State of Maine">State of Maine</option>
//               <option  value="State of Mind">State of Mind</option>
//               <option  value="True Value">True Value</option>
//               <option  value="Truffle Made">Truffle Made</option>
//               <option value="Uline">Uline</option>
//               <option  value="Urban Garden">Urban Garden</option>
//               <option  value="Vessel Services">Vessel Services</option>
//               <option  value="Walmart">Walmart</option>
//               <option  value="zNatural">zNatural</option>

//             </select>
//             </label>

//             <label>Price
//             <input className="price"
//             type='number' 
//             value={item.price}
//             name='price' 
//             onChange={handleChange} 
//             placeholder='Price' />
//           </label>

//           <input type="checkbox" checked={item.barter} onChange={(evt) => setNewItem({ ...newItem, barter: evt.target.checked })}></input><br />


//           <input className="button" 
//           type='submit' 
//           value='Create Item' />

//         </form>
//       </div>
     
//     </div>
//   )
// }
