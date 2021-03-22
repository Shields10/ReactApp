
import PropTypes from 'prop-types'
import Button from './Button'
 
const Header = ({title}) => {
    const fnOnClick = ()=>{

        
    }
    return (
        <div>
            <header className="header">
                <h1>{title}</h1>
               <Button color="green" text="Add" onClick={fnOnClick} />
            </header>
        </div>
    )
}

Header.defaultProps= {
    title: 'Task Tracker',
}

Header.propTypes ={
    title: PropTypes.string.isRequired,
}


//CSS in Js 


// const headingStyle ={

//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header
