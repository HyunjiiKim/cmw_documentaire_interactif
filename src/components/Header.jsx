const Logo = ({ withText }) => {
    return(
        <div id="Logo" className="flex items-center h-fit cursor-pointer" onClick={()=>window.location.href="/"}>
            <div className="bg-primary-1 text-white h2 pt-2 pb-2 pr-4 pl-4 border-2 border-white -rotate-270">기억</div>
            { withText 
            ?   <div className="flex flex-col">
                    <div className="flex gap-2">
                        <p className="text-white">Mémoire</p>
                        <p className="text-primary-1">Captive</p>
                    </div>
                        <p className="text-white font-body">L’héritage du camp de prisonniers de Geoje</p>
                </div> 
            : <></>
            }

        </div>
    )
}

const Header = ({ withText }) => {
    return(
        <div id="header" className="w-full mr-20 ml-20 flex justify-between">
            <Logo withText={withText}/>
        </div>
    )
};

export default Header;