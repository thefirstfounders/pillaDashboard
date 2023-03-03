import Image from 'next/image'
import React, {useState, useEffect} from 'react'


const FallbackImage = (props,defaultImage) => {
  
  const [imgSrc, setImgSrc]  = useState(props.src)

  useEffect(() => {
      setImgSrc(props.src)
  }, [props.src])
  
  return (
   
    <Image 
      {...props}
      src={imgSrc} 
      alt=""
      style={{objectFit:props?.objectFit||'cover'}}
      onError={() => {setImgSrc(defaultImage||'https://res.cloudinary.com/dammymoses/image/upload/v1654672815/avatars/avatar_wv2acz.svg')}}
    />
   
  )
}

export default FallbackImage