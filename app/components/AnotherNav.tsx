const NavBar = ()=>{
    return (
        <header className="flex justify-between border-[10px] rounded-2xl overflow-x-hidden" style={{border: "0.1px #01119652 solid"}}> 
            <div className="flex justify-between items-center w-fit bg-mediumblue-200 p-4 py-2">
                <img src="/vector.svg" className="mr-2" alt="" />
                <img src="/mavride.svg" alt="" />
            </div>

            <div className="bg-mediumblue-100 flex justify-center items-center px-4 ">
                <img src="/grid.svg" alt="" />
            </div>
        </header>
    )
}

export default NavBar;