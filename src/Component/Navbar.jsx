function Navbar(){
    return <div style = {{width : "800px",height : "100%"}}>
        <div syle = {{width : "300px",height : "100px",margin : "0px",padding  :"0px"}}>
            <h2 style = {{marginLeft  :"30px",padding  :"0px"}}>Flex Bussiness Pro</h2>
             <p style = {{marginLeft  :"30px",padding  :"0px",marginTop : "-20px"}}>Clean and Mountain Business Theme</p>
        </div>
        <div style = {{marginTop : "-80px",marginLeft : "370px",padding  :"0px",width  : "400px",heigth : "100px",display : "flex",flexDirection : "row",justifyContent  :"space-between",alignItems  :"center"}}>
            <p style = {{color : "blue"}}>Home</p>
            <p>About Us</p>
            <p>Styleguide</p>
            <p>Blog</p>
            <p>Contact Us</p>

        </div>

    </div>
}
export default Navbar;