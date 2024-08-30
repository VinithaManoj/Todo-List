import './CSS/Todoitems.css'
import tick from './Assests.jsx/tick.png'
import not_tick from './Assests.jsx/not_tick.png'
import round from './Assests.jsx/round.png'


const ToDoitems = ({ no, display, text, setTodos, }) => {


    // const deleteTodo = ()=>{
    //     let data = JSON.parse(localStorage.getItem("todos"));
    //     data=data.display.filter((todo)=>todo.no!==no)
    //     setTodos(data);

    // }
    const deleteTodo = () => {
        let data = JSON.parse(localStorage.getItem("todos")) || [];
    
        if (Array.isArray(data)) {
            data = data.filter((todo) => todo.no !== no);
            localStorage.setItem("todos", JSON.stringify(data));
            setTodos(data);
        } else {
            console.error("Invalid data structure in localStorage for 'todos'");
        }
    };

    const toggle = () => {
        let data = JSON.parse(localStorage.getItem("todos")) || [];
    
        if (Array.isArray(data)) {
            data = data.map(todo => {
                if (todo.no === no) {
                    todo.display = todo.display === "" ? "line-through" : "";
                }
                return todo;
            });
            localStorage.setItem("todos", JSON.stringify(data));
            setTodos(data);
        } else {
            console.error("Invalid data structure in localStorage for 'todos'");
        }
    };
    
    

    // const toggle =() => {
    //     let data = JSON.parse(localStorage.getItem("todos"));
    //     for (let i = 0; i < data.length; i++) {
    //         if (data[i].no === no) {
    //             if (data[i].display === "") {
    //                 data[i].display = "line-through";
    //             }
    //             else {
    //                 data[i].display = "";
    //             }
    //             break;
    //         }
    //     }
    //     setTodos(data);
    // }

    return (
        <div className='todoitems'>
            <div className={`todoitems-container ${display}`} onClick={() => { toggle(no) }}>
                <div className='col-1'>
                {display === "" ? <img  src={round} alt='' /> : <img src={tick} alt="" />}
                </div>
                <div className="todoitems-text col-10">{text}</div>
                <div className='col-1'>
                <img className="todoitems-cross-icon"  onClick={() => { deleteTodo(no) }}src={not_tick} alt="" />
                </div>
            </div>

        </div>



    )
}

export default ToDoitems