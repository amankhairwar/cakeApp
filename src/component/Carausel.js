function Carousel(){
  return <>
  <div class="mt-4">
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
          <div class="carousel-item active">
          <img src="https://tse4.mm.bing.net/th/id/OIP.D65P2smLdGljNjeTSPyOPgHaHa?pid=ImgDet&rs=1" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
          <img src="https://farm2.staticflickr.com/1781/41608624050_5610e09f14.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
          <img src="https://preview.redd.it/2wa8en8iu5s21.jpg?auto=webp&s=6786b9dbfe8e827d0db40f8e028092904989d94e" class="d-block w-100" alt="..." />
          </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
      </button>
      </div> 
  </div> 

  </>
}

export default Carousel