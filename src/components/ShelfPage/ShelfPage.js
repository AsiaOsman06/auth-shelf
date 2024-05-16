import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { useEffect, useState } from 'react';

function ShelfPage() {

  const dispatch = useDispatch();
  const [inputDescription, setInputDescription] = useState('');
  const [inputImageUrl, setInputImageUrl] = useState('');

  useEffect(() => {
    getShelfItems();
  }, [])

  const shelf_items = useSelector(store => store.shelf.shelf);

  const getShelfItems = () => {
    dispatch({
      type: 'GET_SHELF'
    })
  }

  const handleAddItem = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_SHELF_ITEM',
      payload: { description: inputDescription, 
                 image_url: inputImageUrl }
    })
  }

  return (
    <>
    <form onSubmit={handleAddItem}>
    <input type="text" 
           onChange={(e) => setInputDescription(e.target.value)}
           value={inputDescription}/>
    <input type="text" 
           onChange={(e) => setInputImageUrl(e.target.value)}
           value={inputImageUrl}/>
    <button type="submit">add item</button>
    </form>
    {/* <p>{JSON.stringify(shelf_items)}</p> */}
    <div className="container">
      <h2>Shelf</h2>
      <p>{shelf_items.map(item => {
          return (
            <span key={item.id}>{item.description}<br>
            </br> {item.url} <br>
            </br>{item.user_id}<br/></span>
          )
        })}
      </p>
    </div>
    </>
    )
}

export default ShelfPage;
