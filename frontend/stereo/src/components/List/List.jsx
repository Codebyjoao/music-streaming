import { useEffect, useState } from 'react'

export function List(){
  const [search, setSearch] = useState([]);

  useEffect(() => {
  fetch('http://localhost:3333/')
    .then(response => setSearch(response))
  }, [search])

  return(
    <div>
      <ul className="searchList">
        {search}
      </ul>
    </div>
  )
}
