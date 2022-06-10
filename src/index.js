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
			<div className="topic small center">
				<div className="topic-title">About</div>
				<div className="topic-content large">
					<div className="text">
						I'm a 23 years old <b>Software Engineer</b>. My journey as a programmer started when my family bought our first computer and I tried to recreate some of the games that I was interested in.</div>
					<div className="text">
						Currently I'm finishing my Bachelor degree in Computer Science at the Federal University of Minas Gerais(UFMG) in Brazil.
					</div>	
				</div>
			</div>

			<div className="topic medium">
				<div className="topic-title">Skills</div>
				<div className="topic-content">
					<b>Programming Languages:</b>
					<ul>
						<li>C/C++</li>
						<li>Go</li>
						<li>JavaScript</li>
						<li>Python</li>
						<li>WebAssembly</li>
					</ul>
				</div>
				<div className="topic-content">
					<b>DevOps:</b>
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
				</div>
				<div className="topic-content">
					<b>Others:</b>
					<ul>
						<li>ReactJS</li>
						<li>CMake</li>
						<li>GraphQL</li>
						<li>Emscripten</li>
					</ul>
				</div>
				<div className="topic-content">
					<b>Languages:</b>
					<ul>
						<li>Portuguese</li>
						<li>English</li>
						<li>Spanish</li>
					</ul>
				</div>

			</div>
			<div className="topic">
				<div className="topic-title">Areas of Interest</div>
				<div className="topic-content">
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
			</div>
			
			<div className="topic medium">
				<div className="topic-title">Blog Posts</div>
				<div className="topic-content">
					<Post href="https://medium.com/@marcos30004347/programming-a-kubernetes-extension-api-server-part-1-60526e141a10" title="Programming a Kubernetes Extension API Server - part 1"
					>
						In this post I explain how to bootstrap your own custom K8s extension API Server from scratch in Go. Back in the days when I was trying to develop my own native sidecar injection for K8s I didn't find any good documentation or tutorials about Custom Extensions servers, so I deep dive in some books and create the kind of tutorial that I wish existed when I started my journey. 
					</Post>
					<Post href="https://medium.com/@marcos30004347/programming-a-kubernetes-extension-api-server-part-2-ab3b2123ad78" title="Programming a Kubernetes Extension API Server - part 2"
					>
						The continuation of the first post. Here we go deeper and explain some more complex stuff about the server and add some basic functionalities.
					</Post>
					<Post href="https://medium.com/@marcos30004347/programming-a-kubernetes-extension-api-server-part-3-f7edddc974f4" title="Programming a Kubernetes Extension API Server - part 3"
					>
						The final part of the series. In this part all the manifest files for the deployment of the server are explained and the server is finally deployed on a k8s cluster.  
					</Post>
				</div>
			</div>
			<div className="topic medium">
				<div className="topic-title">Project Highlights</div>
				<div className="topic-content horizontal">
					<Project title="mathemagic" href="https://github.com/Marcos30004347/mathemagic">
						<div style={{marginBottom: '10px', marginTop: '10px'}}>
							<b>Tech:</b> ReactJS, WebAssembly. 
						</div>
						<div>
							Mathemagic is an online app for Mathematics accelerated with WebAssembly. This application is the culmination of my studies in mathematics and two of my other projects. It uses Gauss, a low level symbolic math library that I wrote in C++ compiled to WebAssembly. The project aims to be a multicultural math application aimed at teenagers and childs from all around the world, including those that are not English speakers yet. Unfortunately my time to work on the app is limited and there is still lots of work to be done, I may add those in the near future when I have more free time.
							<div>
								You cant test the app at <a className="link" href="https://marcos30004347.github.io/mathemagic/#/query">mathemagic</a> or access the 	<a className="link" href="https://github.com/Marcos30004347/mathemagic">github</a> repository. 
							</div>
							
						</div>
					</Project>

					<Project title="gauss" href="https://github.com/Marcos30004347/gauss">
						<div style={{marginBottom: '10px', marginTop: '10px'}}>
							<b>Tech:</b> C++, CMake, Emscripten, WebAssembly, NodeJS, JavaScript. 
						</div>
						<div>
							Gauss is a symbolic math library, in the same style as Sympy but written in pure C++. The fact that the library has no external dependencies and is written in pure C++ makes it possible for the library to be compatible with a lot of different targets, including WebAssembly. The library is available for C++, Javascript and NodeJS(through WebAssembly) at npm.
						</div>
						<div>
							The library have a lot of complex and state of the art algorithms for symbolic computing, between them are:
							<ul>
								<li>Multivariate Polynomial Factorization</li>
								<li>Big Integer Arithmetic (implementation follows the <a className="link" href="https://github.com/python/cpython/blob/main/Objects/longobject.c">python</a> implementation)</li>
								<li>Heuristic Methods for fast polynomial Greatest Common Divisor calculator
								</li>
								<li>Univariate Polynomial Root Finding fot complex and real roots</li>
								<li>Derivative Computations</li>
								<li>Singular Value Decomposition for Matrices with precision similar to LAPACK and numpy</li>
							</ul>
						</div>
						<div>
							You can access the 	<a className="link" href="https://github.com/Marcos30004347/gauss">github</a> repository of the project. 
						</div>
					</Project>

					<Project title="Android App in C++" href="https://github.com/Marcos30004347/android-cpp-triangle">
						<div style={{marginBottom: '10px', marginTop: '10px'}}>
							<b>Tech:</b> C++, Android. 
						</div>
						This is a simple project where I implemented from scratch and android application
						whitout java and any google toolchain, the application is a simple triangle renreder
						build intirelly in C++, the app is compiled using the Android SDK and NDK and the final .apk file is create using bash scripts also written from scratch.

						<div>
							You can access the <a className="link" href="https://github.com/Marcos30004347/android-cpp-triangle">github</a> repository of the project. 
						</div>

					</Project>

					<Project title="LLVM IR dead code elimination" href="https://github.com/Marcos30004347/llvm-dead-code-elimination">
						<div style={{marginBottom: '10px', marginTop: '10px'}}>
							<b>Tech:</b> C++, LLVM Compiler Infrastructure. 
						</div>

						This is a <a className="link" href="https://llvm.org/">LLVM</a> pass that uses Range Analysis to statically decide if a branch will never be taken, if it does the pass can remove the unnecessary computation from the final code making it smaller and faster.
						<div>
							You can access the <a  className="link" href="https://github.com/Marcos30004347/llvm-dead-code-elimination">github</a> repository of the project.
						</div>

					</Project>

					<Project title="Bootstraper" href="https://github.com/Marcos30004347/bootstraper">

						<div style={{marginBottom: '10px', marginTop: '10px'}}>
							<b>Tech:</b> Go, Kubernetes, Kafka, MongoDB, Ansible, Docker, Kafka, Zookeeper, Consul, Vagrant. 
						</div>

						This is a local project bootstraper for distributed applications, it have a local
						kubernetes cluster using Vagrant virtual machines and a lot of infrastructure
						services configured out of the box with <b>Dockefiles</b> and <b>Ansible</b> playbooks, including:
						<ul>
							<li>MongoDB</li>
							<li>Kafka</li>
							<li>Consul</li>
							<li>Zookeeper</li>
						</ul>
						
						<div>
							You can access the <a className="link" href="https://github.com/Marcos30004347/bootstraper">github</a> repository of the project.
						</div>
					</Project>
					
					<Project title="Jobin" href="https://github.com/Marcos30004347/Jobin">
						<div style={{marginBottom: '10px', marginTop: '10px'}}>
							<b>Tech:</b> C++, Assembly. 
						</div>
						Jobin is a Job System implemented using fibers for job execution. It mimics the
						JavaScript Async and Await API for dispatching and wainting for jobs that will be executed in parallel by the system threads. It allows faster and easy development of parallel applications.
						It uses a lot of assembly code taken from the deboost version of the boost context API to accelerate context switches within jobs. It is compatible with pretty much any modern architecture.

						<div>
							The project is inspired by the <a className="link" href="https://www.gdcvault.com/play/1022186/Parallelizing-the-Naughty-Dog-Engine">Parallelizing e Naughty Dog engine using fibers</a> talk by Christian Gyrling.
						</div>
						<div>
							You can access the <a className="link" href="https://github.com/Marcos30004347/Jobin">github</a> repository of the project. 
						</div>
					</Project>
				</div>

			</div>
		</div>

	)
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
