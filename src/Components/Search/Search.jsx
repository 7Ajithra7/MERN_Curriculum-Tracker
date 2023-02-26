import React from 'react'
import { useSelect } from 'react-select-search'


const Search = () => {

// const searchSelect = ({ options, value, multiple, disabled }) => {
//     const [snapshot,valueProps,optionProps] = useSelect({
//         options, value, multiple, disabled
//     })
// }

  return (
    <div>
        {/* <button {...valueProps}>{snapshot.displayValue}</button>
            {snapshot.focus && (
                <ul>
                    {snapshot.options.map((option) => (
                        <li key={option.value}>
                            <button {...optionProps} value={option.value}>{option.name}</button>
                        </li>
                    ))}
                </ul>
            )} */}
    </div>
  )
}

export default Search