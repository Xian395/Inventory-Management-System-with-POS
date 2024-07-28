import Header from "./components/header";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../components/firebaseConfig'; // Adjust the path to your firebaseConfig file

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f0f0f0;
  color: #333;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  width: 80%;
  max-width: 1200px;
  margin-top: 20px;
`;

const InventoryCard = styled.div`
  margin: 20px 0;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #333; /* Text color */
  background-color: #fff; /* Background color */
`;

const DecreaseInput = styled(Input)`
  color: #333;
  background-color: #fff;
  margin-top: 10px; /* Added to align with button */
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #3498db;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #2980b9;
  }
`;

const InventoryListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const InventoryItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #2ecc71; /* Green background color */
  color: white;
  border-radius: 4px;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  
  & > ${DecreaseInput} {
    margin-right: 10px;
  }

  & > ${Button} {
    margin-left: 10px;
  }
`;

interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
}

const Inventory: React.FC = () => {
  const [items, setItems] = useState<InventoryItem[]>([]);
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState<number | string>('');
  const [decreaseQuantity, setDecreaseQuantity] = useState<number | string>('');

  // Fetch items from Firestore
  const fetchItems = async () => {
    const querySnapshot = await getDocs(collection(db, "inventory"));
    const itemsList = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as InventoryItem[];
    setItems(itemsList);
  };

  // Fetch items when component mounts
  useEffect(() => {
    fetchItems();
  }, []);

  // Handle adding a new item
  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (itemName && quantity) {
      try {
        const docRef = await addDoc(collection(db, "inventory"), {
          name: itemName,
          quantity: Number(quantity)
        });
        setItems([...items, { id: docRef.id, name: itemName, quantity: Number(quantity) }]);
        setItemName('');
        setQuantity('');
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };

  // Handle deleting an item
  const handleDeleteItem = async (id: string) => {
    await deleteDoc(doc(db, "inventory", id));
    setItems(items.filter(item => item.id !== id));
  };

  // Handle decreasing the quantity of an item
  const handleDecreaseQuantity = async (id: string, currentQuantity: number, decreaseBy: number) => {
    if (currentQuantity >= decreaseBy && decreaseBy > 0) {
      const itemDoc = doc(db, "inventory", id);
      await updateDoc(itemDoc, {
        quantity: currentQuantity - decreaseBy
      });
      fetchItems(); // Refresh the items list after decreasing the quantity
    }
  };

  return (
    <Container>
      <Header />
      <ContentWrapper>
        <InventoryCard>
          <h2>Add New Item</h2>
          <Form onSubmit={handleAddItem}>
            <Input
              type="text"
              placeholder="Item Name"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            <Input
              type="number"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <Button type="submit">Add Item</Button>
          </Form>
        </InventoryCard>
        <InventoryCard>
          <h2>Inventory List</h2>
          <InventoryListContainer>
            {items.map(item => (
              <InventoryItem key={item.id}>
                <span>{item.name} - {item.quantity}</span>
                <ButtonGroup>
                  <DecreaseInput
                    type="number"
                    placeholder="Decrease By"
                    value={decreaseQuantity}
                    onChange={(e) => setDecreaseQuantity(e.target.value)}
                  />
                  <Button onClick={() => handleDecreaseQuantity(item.id, item.quantity, Number(decreaseQuantity))}>Decrease Quantity</Button>
                  <Button onClick={() => handleDeleteItem(item.id)}>Delete</Button>
                </ButtonGroup>
              </InventoryItem>
            ))}
          </InventoryListContainer>
        </InventoryCard>
      </ContentWrapper>
    </Container>
  );
};

export default Inventory;
