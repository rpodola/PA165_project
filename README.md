# System for recording of sports activities and calculation of calories burned.
[![Build Status](https://travis-ci.org/rpodola/PA165_project.svg?branch=develop)](https://travis-ci.org/rpodola/PA165_project)

### Installation
```
mvn clean install
```
### Run web application
```
mvn jetty:run
```
Website should be available at `http://localhost:8080/pa165/`

Default users:
```
Admin
username: admin
password: admin

Member
username: rnovak
password: 12345
```

#### REST
Rest service should be available at `http://localhost:8080/pa165/rest`

To see hints, how to test REST API, look at javadoc for certain REST controller method. Because of applied authorization on a REST layer, there is option to openly test just methods where @ApplyAuthorizeFilter annotation is not used.
