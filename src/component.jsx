/* Creating and Nesting Components */

import './comp.css'

// How to display data in React:

function Lybafunc(props) {
    // let std_data = 123456;
    // How to display data from a different component=>


        //Through Objects

        let user = {
            name : 'Lyba',
            degree : 'ComputerSciences',
            regno : 184
        }
    return(
        <>
        <h1>Hey, I am Lyba</h1>
        <h3>This is my first React App Component</h3>

        <p>Here is the Users Info : {user.degree}</p>
        </>
    )
}
export default Lybafunc;