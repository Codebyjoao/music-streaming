import './styles.scss'
export function Search(){
  return(
    <div className='searchContainer'>
      <form method='get' action="/">
        <input type="text" size="50" placeholder="Search" id='search'/>
      </form>
    </div>
  )
}