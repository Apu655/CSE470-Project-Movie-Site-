interface HeaderProps{
    Icon:any;
    title:string;
}

const HeaderItem= ({Icon,title}:HeaderProps)=>{
    return(
        <div className='group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text'>
            <Icon className='h-8 mb-1 group-hover:animate-bounce'></Icon>
            <p className='tracking-widest opacity-0 group-hover:opacity-100'>{title}</p>
        </div>
            )
}
export default HeaderItem;