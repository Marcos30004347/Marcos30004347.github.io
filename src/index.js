import "./main.css";

import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client';
import { HashRouter } from "react-router-dom";

import email_icon from './static/svg/email.svg'
import medium_icon from './static/svg/medium.svg'
import linkedin_icon from './static/svg/linkedin.svg'
import github_icon from './static/svg/github.svg'


const Post = ({ href, title, children }) => {
	return (
		<div className="post">
			<a className="post-title" href={href}>{title}</a>
			<div className="post-description">
				{ children }
			</div>
		</div>
	)
}

const Project = ({ href, title, children }) => {
	return (
		<div className="project">
			<a className="project-title" href={href}>{title}</a>
			<div className="project-description">
				{ children }
			</div>
		</div>
	)
}

const HelloColumn = () => {

	return (
		<div className="hello">
			<div className="about">
				Hi, my name is
				<div className="name">
					Marcos Vinicius.
				</div>
				Im a Software Engineer.
			</div>
			
			<div className="social">
				<div className="item"> 
					<img style={{width: '20px', height: '20px', marginRight: '10px'}} src={email_icon} alt="email" />
					marcos30004347@gmail.com
				</div>

				<div className="item"> 
					<img style={{width: '20px', height: '20px', marginRight: '10px'}} src={linkedin_icon} alt="email" />
					<a href="https://www.linkedin.com/in/marcos-vinicius-bb7812166/">linkedin</a>
				</div>
				<div className="item"> 
					<img style={{width: '20px', height: '20px', marginRight: '10px'}} src={github_icon} alt="email" />
					<a href="https://github.com/Marcos30004347">github</a>
				</div> 
				<div className="item"> 
					<img style={{width: '20px', height: '20px', marginRight: '10px', backgroundColor: 'white', borderRadius: '3px'}} src={medium_icon} alt="email" />
					<a href="https://medium.com/@marcos30004347">medium</a>
				</div>
				
			</div>
		</div>
	)
}

const Content = () => {
	return (
		<div className="content">
			<div className="section">
				<div className="title">About</div>
				<div className="text">
					I'm a 23 years old Software Engineer. My jorney as a programmer start when my family bought our first computer, at the time I was about 10~11 years old and I tried to recreate some of the games that I was interested.
				</div>
				<div className="text">
					Today I'm finishing my Bachelor degree in Computer Science at the Federal University of Minas Gerais(UFMG) in Brazil. My current interests are in high performance computing using SIMD and parallel methods as well as Programming Languages and Compilers.
				</div>	
			</div>
			<div className="section">
				<div className="title">Skills</div>
				Programming Languages:
				<ul>
					<li>C/C++</li>
					<li>Go</li>
					<li>JavaScript</li>
					<li>Python</li>
					<li>WebAssembly</li>
				</ul>
				DevOps:
				<ul>
					<li>Kubernetes</li>
					<li>Vagrant</li>
					<li>MongoDB</li>
					<li>SQL</li>
					<li>Docker</li>
					<li>Kafka</li>
					<li>Zookeeper</li>
					<li>Ansible</li>
				</ul>
				Others:
				<ul>
					<li>ReactJS</li>
					<li>CMake</li>
					<li>GraphQL</li>
					<li>Emscripten</li>
				</ul>
			</div>

			<div className="section">
				<div className="title">Areas of Interest</div>
				<ul>
					<li>Data Oriented Design</li>
					<li>Distributed Systems</li>
					<li>Compilers</li>
					<li>Programming Languages</li>
					<li>Computer Graphics</li>
					<li>GPU Programming</li>
					<li>Web Development</li>
				</ul>

			</div>
			
			<div className="section">
				<div className="title">Blog Posts</div>
				<Post href="https://medium.com/@marcos30004347/programming-a-kubernetes-extension-api-server-part-1-60526e141a10" title="Programming a Kubernetes Extension API Server - part 1"
				>
					In this post I explain how to bootstrap your own custom K8s extension API Server from scratch in Go. Back in the days when I was trying to develop my own native sidecar injection for K8s I didn't find any good documentation or tutorials about Custom Extensions servers, so I deep dive in some books and create the kind of tutorial that I wish existed when I started my jorney. 
				</Post>
				<Post href="https://medium.com/@marcos30004347/programming-a-kubernetes-extension-api-server-part-2-ab3b2123ad78" title="Programming a Kubernetes Extension API Server - part 2"
				>
					The continuation of the first post. Here we go deeper and explain some more complex stuff about the server and add some basic functionalities.
				</Post>
				<Post href="https://medium.com/@marcos30004347/programming-a-kubernetes-extension-api-server-part-3-f7edddc974f4" title="Programming a Kubernetes Extension API Server - part 3"
				>
					The final part of the series. In this part all the manifest files for the deployment of the server is explained and the server is finally deployed on a k8s cluster.  
				</Post>
			</div>

			<div className="section">
				<div className="title">Project Highlights</div>
				<Project title="mathemagic" href="https://github.com/Marcos30004347/mathemagic">
					<div style={{marginBottom: '10px', marginTop: '10px'}}>
						<span style={{ fontWeight: 'bold' }}>Tech:</span> ReactJS, WebAssembly. 
					</div>
					<div>
						Mathemagic is an online app for Mathematics accelerated with WebAssembly. This application is the culmination of my studies in mathematics and two of my other projects, it uses Gauss, a low level symbolic math libraries that I wrote in C++ compiled to WebAssembly. The project aims to be a multicultural math application aimed to teenagers and childs from all arround the world, including those that are not english speakers yet. Infortunatelly my time to work on the app is limited and there still lots of work to be done, I may add those in the near future when a have more free time.
						<div>
							You test the the app at 
							<a style={{color: 'black', margin: '4px', fontWeight: 'bold'}} href="https://marcos30004347.github.io/mathemagic/#/query">mathemagic</a> or access the 	<a style={{color: 'black', margin: '4px', fontWeight: 'bold'}} href="https://github.com/Marcos30004347/mathemagic">github</a> repository. 
						</div>
						
					</div>
				</Project>

				<Project title="gauss" href="https://github.com/Marcos30004347/gauss">
					<div style={{marginBottom: '10px', marginTop: '10px'}}>
						<b>Tech:</b> C++, CMake, Emscripten, WebAssembly, NodeJS, JavaScript. 
					</div>
					<div>
						Gauss is a symbolic math library, in the same style as <a href="https://www.sympy.org/en/index.html">Sympy</a> but written in pure C++. The fact that the library have no external dependencies and is written in pure C++ make possible for the library to be compatible with a lot of different targets, including WebAssembly. The library is available for C++, Javascript and NodeJS(throught WebAssembly) at npm.
					</div>
					<div>
						The library have a lot of complex and state of the art algorithms for symbolic computing, between them are:
						<ul>
							<li>Multivariate Polynomial Factorization</li>
							<li>Big Integer Arithmethic (implementation follows the <a href="https://github.com/python/cpython/blob/main/Objects/longobject.c">python</a> implementation)</li>
							<li>Heuristic Methods for fast polynomial Greatest Commom Divisor computation</li>
							<li>Univariate Polynomial Root Finding fot complex and real roots</li>
							<li>Derivative Computations</li>
							<li>Singular Value Decomposition for Matrices with precision similar to LAPACK and numpy</li>
						</ul>
					</div>
					<div>
						You can access the 	<a style={{color: 'black',fontWeight: 'bold'}} href="https://github.com/Marcos30004347/gauss">github</a> repository of the project. 
					</div>
				</Project>

				<Project title="Android App in C++" href="https://github.com/Marcos30004347/android-cpp-triangle">
					<div style={{marginBottom: '10px', marginTop: '10px'}}>
						<b>Tech:</b> C++, Android. 
					</div>

					This is a simple project where I implemented from scratch and android application
					whitout java and any google toolchain, the application is a simple triangle renreder
					build intirelly in C++, the app is compiled using the Android SDK and NDK and the final .apk file is
					create using bash scripts also written from scratch.
					<div>
						You can access the <a style={{color: 'black', fontWeight: 'bold'}} href="https://github.com/Marcos30004347/android-cpp-triangle">github</a> repository of the project. 
					</div>

				</Project>

				<Project title="LLVM IR dead code elimination" href="https://github.com/Marcos30004347/llvm-dead-code-elimination">
					<div style={{marginBottom: '10px', marginTop: '10px'}}>
						<b>Tech:</b> C++, LLVM Compiler Infrastructure. 
					</div>

					This is a <a href="https://llvm.org/">LLVM</a> pass that uses Range Analysis to statically decide if a branch will never be taken, if it does the pass can remove the unecessary computation from the final code making it smaller and faster.
									<div>
						You can access the <a style={{color: 'black', fontWeight: 'bold'}} href="https://github.com/Marcos30004347/llvm-dead-code-elimination">github</a> repository of the project.
					</div>

				</Project>

				<Project title="Bootstraper" href="https://github.com/Marcos30004347/bootstraper">

					<div style={{marginBottom: '10px', marginTop: '10px'}}>
					<b>Tech:</b> Go, Kubernetes, Kafka, MongoDB, Ansible, Docker, Kafka, Zookeeper, Consul, Vagrant. 
					</div>

					This is a local project bootstraper for distributed applications, it have a local
					kubernetes cluter using Vagrant virtual machines and a lot of infrastructure
					services configured out of the box with <b>Dockefiles</b> and <b>Ansible</b> playbooks, including:
					<ul>
						<li>MongoDB</li>
						<li>Kafka</li>
						<li>Consul</li>
						<li>Zookeeper</li>
					</ul>
					
					<div>
						You can access the <a style={{color: 'black', fontWeight: 'bold'}} href="https://github.com/Marcos30004347/bootstraper">github</a> repository of the project.
					</div>
				</Project>
				
				<Project title="Jobin" href="https://github.com/Marcos30004347/Jobin">
					<div style={{marginBottom: '10px', marginTop: '10px'}}>
						<span style={{ fontWeight: 'bold' }}>Tech:</span> C++, Assembly. 
					</div>
					Jobin is a Job System implemented using fiber/coroutine for job execution. It imitates the
					JavaScript Async and Await API for dispatching and waiting for jobs that will be executed
					in parallel by the system threads. It allows faster and easy development of parallel aplications.
					It uses a lot assembly code taken from the debootsted version of the boost context API to accelerate
					context switches within jobs.

					<div>
						The project is inpired by the <a style={{color: 'black', fontWeight: 'bold'}} href="https://www.gdcvault.com/play/1022186/Parallelizing-the-Naughty-Dog-Engine">Paralleizing e Naughty Dog engine using fibers</a> talk by Christian Gyrling.
					</div>
					<div>
						You can access the <a style={{color: 'black', fontWeight: 'bold'}} href="https://github.com/Marcos30004347/Jobin">github</a> repository of the project. 
					</div>
				</Project>


			</div>
		</div>)
}

const App = () => {
	return(
		<div className="container">
			<HelloColumn/>
			<Content/>
		</div>
	)
}

// Placed the context provider here so that <App/> can call useLocation()
const Root = () => <HashRouter><App /></HashRouter>; // prettier-ignore

const container = document.getElementById('root');

const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(<Root/>);
