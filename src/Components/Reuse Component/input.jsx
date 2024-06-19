import React,{useId} from 'react'

const Input = React.forwardRef( function Input ({
        label,
        labelclass,
        type = 'text',
        className = '',
        onChange,
       ...props
    }, ref){

        const id = useId

        return(

            <div className="w-full">
                {label && <label 
                className={`inline-block mb-1 pl-1 ${labelclass}`} 
                // htmlFor={id}
                >
                    {label}
                </label>}

                <input
                type={type}
                className={` ${className} `}
                ref={ref}
                {...props}



                />

            </div>
        )
})

export default Input