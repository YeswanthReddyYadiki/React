import ReactDOM from 'react-dom/client' 
import person,{students,yeswanth} from './data'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <>
 <h1>{person.name}</h1>
 <h1>{students[1]}</h1>
 <h1>{yeswanth[0].fname}</h1>
 <h1>{yeswanth[1].fname}</h1>
 <h1>{yeswanth[2].fname}</h1>
    </>
);







