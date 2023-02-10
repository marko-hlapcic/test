import { useEffect, useState } from "react";
import { fetchData } from "../services/fetchData";
import Table from "../components/Table";
import Select from "../components/Select";

function AuthorBooks(){
    const [data, setData] = useState([]);
    const [author, setAuthor] = useState(0);
    const [error, setError] = useState(null);

    const handleAuthorChange = event => {
        setAuthor(event.target.value);
    }
      
    
    useEffect(() => {
        // fetchData("http://hlapcic-education.atwebpages.com/knjige-json.php", setData, setError, author);
        fetchData("https://frodo.ess.hr/api/knjige-autor.php", setData, setError, author);
        // console.log("AuthorBooks");
      }, [author]);
      
    
    return (<div className="sadrzaj">
        <h1>Pretraga knjiga po autoru</h1>
        <Select onAuthorChange={handleAuthorChange} />
        {error ? <div>Greška: {error}</div> : data.length > 0 ? <Table podaci={data} /> : ""}
    </div>);
}

export default AuthorBooks;