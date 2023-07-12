import styles from './CreateItem.module.scss'



export default function CreateItem ({
  createItem,
  item,
  handleChange
}
) {
  return (
    <div className={styles.CreateItem}>
      <h2 className={styles.NewItem}>Create A Item</h2>
      <div className={styles.container}>
        <form 
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault()
            createItem()
          }}
        >
          
          <label>Title
            <input 
            className={styles.title}
            type='text' 
            value={item.title} 
            name='title' 
            onChange={handleChange} 
            placeholder='Title' 
            />
          </label>

          <label>Url
            <input className={styles.url}
            type='text' 
            value={item.url} 
            name='url' 
            onChange={handleChange} 
            placeholder='URL' />
          </label>

          <label>Pick a category:
            <select 
            
            options={item.category} 
            value={item.category} 
            onChange={handleChange} 
            placeholder='Category'
            name="category">
              <option value="Family">Family</option>
              <option  value="Friends">Friends</option>
              <option  value="Work">Work</option>
              <option  value="Code">Code</option>
              <option  value="Misc">Misc</option>
            </select>
            </label>

          <input className={styles.button} 
          type='submit' 
          value='Create Item' />

        </form>
      </div>
     
    </div>
  )
}
