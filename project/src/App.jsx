

const App=()=> {
    return(
      <>
      <div style={{   display: "flex",   justifyContent: "center",   alignItems: "center",   height: "100vh", }}>
            <div style={{   width: "280px",   backgroundColor: "#5E8EE8",   padding: "200px",   border: "2px solid black",   borderRadius: "30px",   position: "relative"  }} >
                <div style={{  position: "absolute", top: "50%",  left: "50%",  transform: "translate(-50%, -50%)", width: "280px",  backgroundColor: "yellow",  padding: "160px", border: "2px solid black", borderRadius: "30px" }}>
                    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "290px", backgroundColor: "red", padding: "100px", border: "2px solid black", borderRadius: "30px", fontSize:"40px", textAlign:"center" }}>CYBROM</div>
                </div>
            </div>
        </div>
      </>
    )
}

export default App
