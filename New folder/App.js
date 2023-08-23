import Navbar from './components/Navbar'
import data from './components/data'
import Body from "./components/Body"

export default function App() {
  const tusk = data.map(item => {
    return <>
            <Body
            key={item.id}
                {...item} />
            </>
  })

    return (
    <div>
      <Navbar />
      {tusk}
    </div>
  );
}

