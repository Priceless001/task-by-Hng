import img1 from "../image/myimage.jpg";
import img2 from "../image/slack.jpg";
import img3 from "../image/Icon.jpg";
import img4 from "../image/Vector.jpg";
import img5 from "../image/I4G.jpg";
import "../style/task.css";
function Task(){
    return(
    <div className="container">
      <div className="profile">
         <img src={img1} className="image" alt="img1" /> 
         <p className="name"> <b> Priceless Pee</b></p>
       </div>        
        <button>
          <a href="https://twitter.com/home" className="btn"> Twitter Link</a>
          
        </button>
        <button>
          <a href="https://training.zuri.team/" target="blank" className="btn" id="btn_zuri"> Zuri Team</a>
        </button>
        <button>
          <a href="http://books.zuri.team/" target="blank" className="btn" id="books">Zuri books</a>
        </button>
        <button>
          <a href="https://books.zuri.team/" target="blank" className="btn" id="book_python"> Python Books</a>
        </button>
        
        <button>
          <a href="https://background.zuri.team/" target="blank" className="btn" id="pitch" > Background check for coders</a>
        </button>
        
    <button>
          <a href="https://books.zuri.team/design-rules" target="blank" className="btn" id="design_books"> Design books </a>
        </button>
       <div className="images">
<img src={img2} className="slack" alt="img2" />
<img src={img3} className="icon" alt="img3" />
       </div>
       <footer className="last">
<img src={img4} className="vector" alt="img4" />
<p className="word"> HNG internship 9 Frontend Task</p>
<img src={img5} className="lasts" alt="img5" />
       </footer>
    </div>
    
  
    );
}

export default Task;      
