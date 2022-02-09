<h1 align= "center">원티드 프리온보딩 프론트엔드 코스 선발과제</h1>


### :house: URL
https://hustlekang-pre-onboarding-course.netlify.app/

### :computer: demo
~~~
1. cd custom-component
2. npm install
3. npm start
~~~

## 구현한 컴포넌트

:black_small_square:  Toggle\
:black_small_square: Modal\
:black_small_square: Tab\
:black_small_square: Tag\
:black_small_square: AutoComplete\
:black_small_square: ClicktoText

### :white_check_mark: Toggle
~~~
on,off 를 state로 관리 (true,false)
on일 때 추가로 class를 부여 -> css 적용
background-color,토글의 동그라미 부분의 margin-left,transition을 통해 애니메이션 효과 적용
~~~
~~~
동그라미 부분을 수평으로 이동시키는 방법에 대해 고민하다
영역의 크기를 계산하여 좌우 반전된 배치를 갖는 margin값과 transition을 통해 해결
~~~

### :white_check_mark: Modal
~~~
modal의 화면 표시 유무를 위한 값을 state로 관리
translate,z-index를 통해 modal을 화면의 정중앙 맨 앞에 배치
alpha=.3인 화면 전체를 덮는 영역을 modal이 보일 때 같이 보이게 설정  
~~~

### :white_check_mark: Tab
~~~
props로 탭에 표시할 항목이 담긴 tabItem배열을 전달받음
탭을 누르면 해당 탭의 id를 show변수로 설정
show값과 같은 id를 갖는 항목만 화면에 표시됨
~~~
~~~
Tab 컴포넌트를 통해 App.js에 모든 컴포넌트를 표시
~~~

### :white_check_mark: Tag
~~~
미리 설정한 tag를 배열에 담아 state로 관리
배열 내장함수 map()으로 각각의 tag를 요소로 만듬 
Enter키가 눌리면 사용자의 입력을 기존 state에 추가
(x)클릭 시 배열 내장함수 filter()를 통해 현재 선택된 태그를 제외한 결과를 state에 반영 
~~~
~~~
컴포넌트를 최대한 나누기 위해
각각의 태그와, 태그를 삭제하는 (x)영역 2가지를 따로 컴포넌트로 분리
~~~

### :white_check_mark: AutoComplete
~~~
최근 검색목록을 배열로 만들어 state로 관리
<option>의 value로 최근 검색목록을 mapping
위 <option>들을 자식으로 갖는 <datalist>를 <input>과 연결
Enter키가 눌리면 사용자의 입력을 state에 추가
~~~

### :white_check_mark: ClicktoText
~~~
이름과 나이를 state로 관리하는 Controlled Component 
<input>에서 onBlur 이벤트 발생 시, handleBlur 함수 실행 
<input>의 id와 일치하는 state를 업데이트 
~~~

