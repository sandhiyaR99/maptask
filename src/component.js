function Component(props) {
    return (
        <div style={{ padding: "10px", width: "90%", margin: "8px", display: "flex", justifyContent:"space-between"}}>
            <div style={{display:"flex", gap:"10px"}}>
                <img src={props.img} alt="img"></img>
                <div>
                <h3>{props.name}</h3>
                <p>{props.desc}</p>
                </div>
            </div>
            <div>
                <p>{props.rate}</p>
                <p><i class="fa-solid fa-star" style={{color:"green"}}></i></p>
            </div>
        </div>
    )
}

export default Component