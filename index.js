const element = (
  <div class="container">
    <h1 class="greet">Congratulations</h1>
    <div class="card d-flex flex-column justify-content-center">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        class="profile"
      />
      <h1 class="name">Kiran V</h1>
      <p class="from">
        Vishnu Institute of Computer Education and Technology,
        <br />
        Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        class="watch"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
