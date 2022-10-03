import { Container ,SimpleGrid, List,Input,Group, Button,Drawer,Indicator,Badge,Image} from '@mantine/core';

import { useState } from 'react';
import Card from './Components/Card';
import './App.css';


const storeItems = [
  {
    productId:100,
    productName:"Ütü",
    productImg:"iron",
    price:800,
    count:1
    
  },
  {
    productId:101,
    productName:"Table",
    productImg:"table",
    price:1200,
    count:1
    
  },
  {
    productId:102,
    productName:"Çamaşır",
    productImg:"washer",
    price:7500,
    count:1
    
  },
  {
    productId:103,
    productName:"Tablet",
    productImg:"tablet",
    price:3599,
    count:1
   
  },
  {
    productId:104,
    productName:"Laptop",
    productImg:"pc",
    price:12399,
    count:1
    
  }
  ,
  {
    productId:105,
    productName:"Telefon",
    productImg:"phone",
    price:8259,
    count:1
   
  }
]

function App() {
  let addToBasket = ({productId,productName,count,productImg,price})=>{
      let basketIndex = basketItems.findIndex((item)=>item.productId === productId)
      if(basketIndex>=0){
        let copyBasketItems = [...basketItems];
        copyBasketItems[basketIndex].count++;
        setBasketItems(copyBasketItems);
        setBasketClearState(true);
      }
      else{
        setBasketItems([...basketItems,{productId,productName,count,productImg,price}])
        setBasketClearState(true);
      }
      
  }
  let [opened,setOpened] = useState(false);
  let [searchInput,setSearchInput]= useState("");
  let [basketItems,setBasketItems] = useState([]);
  let [basketClearState,setBasketClearState] = useState(true);
  let clearBasket = ()=>{
    if(basketClearState){
      setBasketItems([]);
      setBasketClearState(false);
    }
  }
  let filteredItems = storeItems.filter((item)=>item.productName.toLowerCase().indexOf(searchInput)>=0);
  return (
    <Container className='container'>
      <Group className='search-box' align="end" position='start'>
      <Input.Wrapper label="Search.." size='md'>
      <Input placeholder='Search..' value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} />
      </Input.Wrapper>
      <Indicator color="red" label={basketItems.length} size={22}>
      <Button onClick={()=>setOpened(true)}>Sepete Git</Button>
      </Indicator>
     
      
      </Group>
      <SimpleGrid cols={3}>
        {filteredItems.map(({productId,productName,productImg,count})=>{
          return <Card key={productName}
          name={productName}
          src={productImg}
          onAdd={()=>addToBasket({productId,productName,count,productImg},)}/>
        })}
      </SimpleGrid><br></br>
      <Drawer className="overflow"
        
        opened={opened}
        onClose={() => setOpened(false)}
        title="Sepetim"
        padding="xl"
        lockScroll="true"
        size="xl"
      >    
      <List
      className='basket-list '
      spacing="xs"
      size="sm"
      center
      >
      
      {basketItems.map(({productName,count,productImg},index)=>
     
      <List.Item key={index} >
      
      

      <Image
        width={150}
        height={120}
        fit="revert"
        radius="md"
        src={`/img/${productImg}.jpg`}
        
      />
    
      
        
        <Group ><p className='productName'><span className='productNameTitle'>Ürün Adı :</span> {productName}</p>
        <Badge className='group-count'>{"x".toLowerCase()+count}</Badge></Group> </List.Item>)}
        
      </List>
      <Button onClick={clearBasket}>Sepeti Temizle</Button>
      </Drawer>
      
    </Container>
  );
}

export default App;
