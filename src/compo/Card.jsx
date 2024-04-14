const Card = (props) => {
  return (
    <>
      <div className="card" style={{
        width: "50rem",
        height: "25rem",
        margin: "10px auto 30px auto",
      }}>
        <div className="card-body">
          {props.children}
        </div>
      </div>


    </>
  )
}




export default Card;