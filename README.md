# bitest_front

~~실시간~~ 파일 입력으로 들어오는 매수, 매도에 대해서 호가창을 보여주는 어플리케이션

## Requirement

- 프론트엔드는 SPA (Single Page Application)로 개발되어야 함
  - Vue.js 선택
- UI Template활용 자유 (HTML, CSS 한정)
  - 따로 템플릿을 사용하진 않았음
  - 구현된 기능에 맞는 값들을 최대한 직관적으로 볼 수 있게 구현
- 프론트엔드 로직(javascript)은 직접 구현
- 서버와 클라이언트는 JSON Object 통신으로 구현
  - WebSocket을 통한 Object 통신
- 클라이언트 구현을 위한 Javascript framework 제약은 없음

## Problem

처음에 클라이언트에서 입력받은 파일을 한줄한줄 잘라 거래단위 한개 씩을 1초마다
socket으로 emit하는 방식으로 구현하여클라이언트가 많아지면 서버가 1초마다 일을 하는게 아니라
요청마다 1초씩 텀을 두고 작업을 하게됨.

(해결) 입력받은 파일의 String만 그대로 서버로 옮겨서 임시 저장공간
([bitest_server](https://github.com/jicjjang/biteset_server) 에서는
변수에 저장하도록 하였음. 추후 디비로 확장 가능)에 저장해 놓고, 클라이언트들이 입력할 때 마다
저장 공간에 추가하는 방식으로 수정.

## Configuration

- Vue + socket.io
- [Server Repository](https://github.com/jicjjang/biteset_server)

## Usage

~~~shell
# github repository clone
$ git clone https://github.com/jicjjang/bitest_front

# install dependencies
$ npm i

# serve with hot reload at localhost:8080
$ npm run dev
~~~

## Build

~~~shell
# build for production with minification
$ npm run build   # Available after deployment.
~~~

## Test case

### test usage

~~~shell
# run all tests
$ npm run test
~~~
