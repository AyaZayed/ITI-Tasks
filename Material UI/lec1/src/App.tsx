import "./App.css";
import FormContent from "./components/FormContent";
import FormFooter from "./components/FormFooter";
import FormHeader from "./components/FormHeader";

function App() {
   return (
      <main className="main">
         <div className="container">
            <FormHeader />
            <FormContent />
            <FormFooter />
         </div>
      </main>
   );
}

export default App;
