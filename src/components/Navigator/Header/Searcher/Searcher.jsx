// Material Ui
import { InputBase } from '@mui/material'

// Icons
import SearchIcon from '@mui/icons-material/Search'

/* Imports */

const Searcher = () => {
  return (
    <div className='search'>
      <div className='search-icon-wrapper'>
        <SearchIcon />
      </div>

      <InputBase
        placeholder='Search…'
        inputProps={{ 'aria-label': 'search' }}
        className='input-base'
      />
    </div>
  )
}

export default Searcher
