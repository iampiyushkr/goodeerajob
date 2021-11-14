
import "./frontpage.css"
import SearchIcon from '@mui/icons-material/Search';
import FlagIcon from '@mui/icons-material/Flag';
export function Front(){
        return <div className="mainDiv">
            <div className="navbar">
                <div className="navbar1stDiv">
                    
                        <button>JobHunt</button>
                        <button>findJob</button>
                        <button>Update Yourself</button>
                        <button style={{marginLeft:"300px"}}>Post a job</button>
                        <button style={{marginRight:"-200px"}}>Sign in</button>
                
                </div>
                <div className="navbar2ndDiv">
                    <h2>FIND A DREAM JOB</h2>
                    <h4>Browser your thousands of full-time or part time jobs near you</h4>

                </div>
                <div className="searchDiv">
                    <div>
                    <SearchIcon/>
                    <input className="titleInput" type="text" placeholder="search for title"/>
                    </div>
                    <div>
                        <FlagIcon/>
                        <input className="titleInput" type="text" placeholder="search with location"/>
                    </div>
                    
                    <button className="searchButton">Search</button>
                </div>
            </div>

        </div>
}