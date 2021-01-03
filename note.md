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

# 2.16, 17 - Local Varibles in Pug
app.use("middlewares")
미들웨어를 사용하여, 그 안에서 전역 변수를 담아서 사용
반드시 next()를 해줘야 다음 미들웨어로 넘어감 !

ex)
res.locals.siteName = "take-tube";
res.locals.routes = routes;

in /views
import routes from ./routes
..
#{siteName}
route.join

# 2.18 
const term = req.query.term  
=> const {query:{term}} = req; 

**queryString에 대하여..**

사용자가 입력 데이터를 전달하는 방법중의 하나로, url 주소에 미리 협의된 데이터를 파라미터를 통해 넘기는 것을 말한다.

1. HTML(PUG)에서 form + input 으로 정보를 보낸다. 여기서 form태그는 get방식이어야하며, input태그의 name값이 쿼리이름이 된다.
2. Controller에서, req.query << 로 input의 name값으로 보낸 데이터를 받는다.
3. 그리고 위 데이터를 다시 PUG로 전달해서 받아준다.

# 3.5
async : JS야 이 func의 어떤 부분(await)은 꼭 기다려야 해~
  await : 다음 과정이 끝날 때 까지 잠시만 기다려줘~

# 3.9까지함~ 아직 수정된거 update 불가