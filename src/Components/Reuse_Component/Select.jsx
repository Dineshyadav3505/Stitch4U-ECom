import React,{useId} from 'react'

const Select = ({
    options,
    lable,
    className = '',
    onChange,
   ...props
},ref) => {

    const id = useId;
  return (

    <div className='w-full'>
        {lable && <label htmlFor={id} className=''></label>}
        <select
        className={`px-3 py-2 rounded-md bg-black text-white outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className} `}
        ref={ref}
        {...props}
        id={id}
        > 
        {options?.map((options) =>{
            <options key={options} value={options}>
                <option value={options.value}>{options.label}</option> 
            </options>
        })}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)