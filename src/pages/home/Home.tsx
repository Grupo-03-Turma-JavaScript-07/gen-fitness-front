
function Home() {

  return (
    <>
      <div className="bg-black">
        <div className="container mx-auto p-6 ">
          {/* Flipcard */}
          <div className="group h-70 w-50 [perspective:1000px]">
            <div className="card-effect">
              {/* Front */}
              <div className="flipcard-front">
                <h2>Agilidade</h2>
              </div>
              {/* Back */}
              <div className="flipcard-back">
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, beatae?</h2>
              </div>  
            </div>
          </div>
          {/* Fim flipcard */}
        </div>
      </div>
    </>
  )
}

export default Home