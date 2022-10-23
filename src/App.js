import './reset.css';
import { QueryClient, QueryClientProvider } from 'react-query'
import { Api } from './components/Api'

function App() {

   const client = new QueryClient({
      defaultOptions: {
         queries: {
            refetchOnWindowFocus: false,
         }
      }
   });


   return (
      <div className="App">
         <QueryClientProvider client={client}>
            <Api />
         </QueryClientProvider>
      </div>
   );
}

export default App;
