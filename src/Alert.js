import React from 'react'

export default function Alert(props) {
    const capitalize=(word)=>{
      const lower=word.toLowerCase();
      return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return ( <div style={{height:'60px'}}>
   { props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`}>
  { capitalize(props.alert.type)}:{props.alert.msg}
  </div>}
</div>
  )
}
