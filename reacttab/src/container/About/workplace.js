import React , { Component } from 'react'
class Foo {
	static classMethod() {
		return 'hello' ;
	}
}
class Bar extends Foo {
	static classMethod() {
		console.log(super.classMethod())
	}
}
class WorkPlace extends Component{
	componentWillMount (){
		console.log(Foo.classMethod())
		console.log(Bar.classMethod())
	}
	render(){
		return(
			<div>workPlace</div>
		)
	}
}
export default WorkPlace