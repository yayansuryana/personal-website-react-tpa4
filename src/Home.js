import {useState} from 'react';


const Home = () => {

    const [blogs] = useState([
        { title: 'Stefhani Curriculum Vitae', body: 'lorem ipsum...', author: 'Stefhani', id:1}
    ]);    

    return(
       <div className="home">
            
       </div>
    );
}

export default Home;