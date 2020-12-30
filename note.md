# 2.12

Model : data
View : 화면 단 (PUG)
Controller : 데이터를 다루는 함수, 라우팅 함수에서 실행하는 함수.

# 2.13

- app.set("view engine", "pug") => view engine 설정

- PUG

<h1>Hello</h1> => h1 Hello

- res.render("home");
  /views 폴더 안에 있는 home.pug를 렌더링해줌
  따라서 pug를 사용할 땐, /views 폴더를 만들고 사용해야함.

- extends ~
  Layout 전체를 복사
  block ~ 식으로 원하는대로 바꿔서 씀


//2.16 차례