/* Creating and Nesting Components */

import './comp.css'

// How to display data in React:

function Lybafunc(first) {
    let std_data = 123456;
    return(
        <>
        <h1>Hey, I am Lyba</h1>
        <h3>This is my first React App Component</h3>

        <p>Here is the students data : {std_data}</p>
        </>
    )
}
export default Lybafunc;