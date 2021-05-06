// import logo from './logo.svg';
import './App.css';
// import Image2 from './components/Image'; // exemplo 1
// import Album from './components/Album'; // exemplo 2
import UserProfile from './components/UserProfile'; // exemplo 3
// import Order from './components/Order'; // exemplo 4


function App() {
  /* const album01 = { // exemplo 2
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Coldplay_-_Mylo_Xyloto.JPG/220px-Coldplay_-_Mylo_Xyloto.JPG',
    title: 'Mylo Xyloto',
    releaseDate: {
      year: '2011',
      month: '10',
      day: '24',
    },
    others: {
      recordCompany: 'Capitol, Parlophone',
      formats: 'CD, digital'
    }
  };

  const album02 = {
    image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
    title: 'Ghost Stories',
    releaseDate: {
      year: '2014',
      month: '05',
      day: '16',
    },
    others: {
      recordCompany: 'Parlophone',
      formats: 'CD, digital'
    }
  }; */

  /* const joao = { // exemplo 3
    id: 102,
    name: "João",
    email: "joao@gmail.com",
    avatar: "https:\/\/cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
  };

  const amelia = {
    id: 77,
    name: "Amélia",
    email: "amelia@gmail.com",
    avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
  }; */

  /* const headphone = { //exemplo 4
    id: 102,
    user: "cena@gmail.com",
    product: "Razer Headphone",
    price: {
      value: 99.99,
      currency: "dollars"
    }
  };

  const energyDrink = {
    id: 77,
    user: "cena@gmail.com",
    product: "Monster 500mL",
    price: {
      value: 9.99,
      currency: "dollars"
    }
  }; */

/*   const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne']; */ // exemplo 5

  // o console log foi adicionado para facilitar a compreensão
  /* const items = shoppingList.map((item, index) => (<li key={index}>{ item }</li>)); */ // exemplo 5

  const users = [
    {
      id: 102,
      name: "João",
      email: "joao@gmail.com",
      avatar: "https:\/\/cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
    },
    {
      id: 77,
      name: "Amélia",
      email: "amelia@gmail.com",
      avatar: "https:\/\/cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
    }
  ];

  return (
    <div>
      {/* <Image2 source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'alternativeText='Cute cat staring' /> */} {/* exemplo 1 */}

      {/* <Album album={ album01 } />
      <Album album={ album02 } /> */} {/* exemplo 2 */}

      {/* <UserProfile user={joao} />
      <UserProfile user={amelia} /> */} {/* exemplo 3 */}

     {/*  <h1> Orders recently created </h1>
      <Order order={headphone} />
      <Order order={energyDrink} /> */} {/* exemplo 4 */}

      {/* <h2>Lista de compras</h2>
        <ul>
          { items }
        </ul> */} {/* exemplo 5 */}

      {/* {users.map((user) => <UserProfile user={user} />)} */}
        
      {users.map((element, index) => {
        return (<UserProfile user={element} key={index}/>); {/* chave de um array no jsx é declarado com a propriedade key */}
      })}

    </div>
  );
}

export default App;
