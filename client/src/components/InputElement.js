import React from 'react'

const InputElement = (props) => {
    return(
        <div className={props.divClass}>
            <label className="grey">{props.label}</label>
            <input
                name={props.name}
                type={props.type}
                spellCheck={false}
                autoComplete="off"
                autoFocus={props.autoFocus}
                onKeyPress={props.onKeyPress}
                onChange={props.onChange}
                content={props.content}
             />
        </div>
    )
}

export default InputElement;
