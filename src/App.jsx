import { AppRouter } from './AppRouter'
import { PokemonProvider } from './context/PokemonProvider'
import { SessionContextProvider } from './context/SessionContext'
function App() {
  return (
    <SessionContextProvider>
      <PokemonProvider>
      <AppRouter/>
      </PokemonProvider>
    </SessionContextProvider>
  )
}

export default App
