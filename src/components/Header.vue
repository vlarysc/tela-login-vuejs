<template>
  <header>
    <div class="container2">
      <div>
        <div id="btn">
          <img
            class="imgTractor"
            src="../../public/img/icons/tr4ctor.png"
            alt=""
          />
          <div id="circle"></div>
        </div>
      </div>

      <div class="container3">
        <link
          href="https://fonts.googleapis.com/css2?family=Cookie&display=swap"
          rel="stylesheet"
        />

        <div id="btn">
          <span class="noselect">Home</span>
          <div id="circle"></div>
        </div>
        <link
          href="https://fonts.googleapis.com/css2?family=Cookie&display=swap"
          rel="stylesheet"
        />

        <div id="btn">
          <span class="noselect">About</span>
          <div id="circle"></div>
        </div>
        <link
          href="https://fonts.googleapis.com/css2?family=Cookie&display=swap"
          rel="stylesheet"
        />

        <div id="btn">
          <span class="noselect">Contact</span>
          <div id="circle"></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style  >
body {
  padding: 0%;
  margin: 0%;
  box-sizing: border-box;
}
header {
  border-top: 1px solid #313646;
  background-color: #181828 !important;
  color: #b0b0b0;
  font-family: rubik;
}
a {
  text-decoration: none;
}

.imgTractor {
  margin-right: 200px;
  object-fit: cover;
  width: 206px;
  height: 150px;
  margin-top: 50px;
}

.container2 {
  max-height: 110px;
  display: flex;
}
.container3 {
  padding-top: 45px;
  margin-left: 100px;
  display: flex;
  justify-content: space-around;
}

#btn {
  height: 50px;
  min-width: 150px;
  border: none;
  border-radius: 10px;
  color: #eee;
  font-size: 40px;
  font-family: "Cookie", cursive;
  position: relative;
  transition: 1s;
  -webkit-tap-highlight-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding-top: 5px;
}

#btn #circle {
  width: 5px;
  height: 5px;
  background: transparent;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 50%;
  overflow: hidden;
  transition: 500ms;
}

.noselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

#btn:hover {
  background: transparent;
}

#btn:hover #circle {
  height: 50px;
  width: 150px;
  left: 0;
  border-radius: 0;
  border-bottom: 2px solid #eee;
}
</style>