import "./main.css";
import "./time.css";

import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client';
import { HashRouter } from "react-router-dom";

import email_icon from './static/svg/email.svg'
import medium_icon from './static/svg/medium.svg'
import linkedin_icon from './static/svg/linkedin.svg'
import github_icon from './static/svg/github.svg'


const Timeline = () => {
const timelineSetup = () => {
  var items = document.querySelectorAll(".timeline li");

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
}

useEffect(() => timelineSetup(), [])
	
return (			
<section class="timeline">
  <ul>
    <li>
      <div>
        <time>2018 📚</time>
        In 2018, I was accepted into the Federal University of Minas Gerais (UFMG) for a bachelor's degree in Computer Science.
      </div>
    </li>

    <li>
      <div>
        <time>2018 👨‍💻</time>
        During the same year, I secured my first internship at Tamborine as a Full Stack Developer intern.
      </div>
    </li>

    <li>
      <div>
        <time>2019 👨‍💻</time>
        In 2019, I embarked on another internship at Nosebit where I gained valuable experience working with microservices applications.
      </div>
    </li>

    <li>
      <div>
        <time>2020 😷 🦠</time>
        The year 2020 brought the challenges of COVID-19. With the company I was employed at closing its doors, I utilized my free time to delve into more complex areas of computer science that aligned with my interests. I delved into topics such as math, compilers, and parallel programming.
      </div>
    </li>

    <li>
      <div>
        <time>2021 💻</time>
        The year 2021 was marked by exciting projects. I developed a C++ library that emulates the Async/Await feature of JavaScript and can use as many system threads as a programmer needs abstracting all the complexity. Additionally, I crafted simple distributed applications using cutting-edge technologies that had captured my interest.
      </div>
    </li>

    <li>
      <div>
        <time>2022 💻</time>
        In 2022, I dive deep into math-related applications, creating an algebraic system with C++ with state of the art algorithms. By August 2022, I got a position as an AWS Software Developer intern, marking a significant milestone.
      </div>
    </li>

    <li>
      <div>
        <time>2023 👨‍💻</time>
        Throughout 2023, I contributed to AWS, focusing on the development of educational applications that utilized gaming to teach cloud concepts using AWS services. Collaborating with a globally distributed team, I employed languages such as C#, JavaScript, and Python. This experience offered insights into various AWS services and their efficient utilization for optimal performance and cost-effectiveness. Notably, I also achieved my AWS Cloud Practitioner Certification during this year.
      </div>
    </li>
  </ul>
</section>


	)

} 

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
				Hi, I'm
				<div className="typing">
					Marcos!
				</div>
			</div>
			
			<div className="social">
				{/* <div className="item"> 
						<img style={{width: '20px', height: '20px', marginRight: '10px'}} src={email_icon} alt="email" />
						marcos30004347@gmail.com
						</div>
					*/}
				<div className="item"> 
					<a href="https://www.linkedin.com/in/marcos-vinicius-bb7812166/">
						<img style={{width: '30px', height: '30px', marginRight: '10px'}} src={linkedin_icon} alt="email" />
						
					</a>
				</div>
				<div className="item"> 
					<a href="https://github.com/Marcos30004347">
					<img style={{width: '30px', height: '30px', marginRight: '10px'}} src={github_icon} alt="email" />
						
					</a>
				</div> 
				<div className="item"> 
					<a href="https://medium.com/@marcos30004347">
					<img style={{width: '30px', height: '30px', marginRight: '10px'}} src={medium_icon} alt="email" />
						
					</a>
				</div>
				
			</div>
		</div>
	)
}

const Content = () => {
	return (
		<div className="content">
			<div className="topic medium">
				<div className="topic-title">About</div>
				<div className="topic-content large">
				<div className="text">
  					Hey there, I'm a 23-year-old <b>Software Engineer</b>. My journey into programming started way back in my early days when my parents got our first family computer around the time I was 10 or 11. Now, that computer wasn't exactly a powerhouse and couldn't handle many games. So, what did I do? I dived into recreating games similar to the ones I wanted to play. I used popular programs of that time, like Flash and Blender, to bring my ideas to life.
				</div>
				<div className="text">
 					Fast forward to today—I've earned my bachelor's degree in computer science from the Federal University of Minas Gerais (UFMG). My interests run deep, spanning across various domains. I'm captivated by the realms of High-Performance Programming, Web Development, Compilers, and Type Theory.
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
						<li>C#</li>
						<li>Javascript</li>
						<li>Typescript</li>
						<li>Python</li>
						<li>WebAssembly</li>
					</ul>
				</div>
				<div className="topic-content">
					<b>DevOps:</b>
					<ul>
						<li>Kubernetes</li>
						<li>Vagrant</li>
						<li>Docker</li>
						<li>Kafka</li>
						<li>Zookeeper</li>
						<li>Consul</li>
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
						<li>MongoDB</li>
						<li>SQL</li>
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
			<div className="topic nomargin">
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
						<li>Type Theory</li>
					</ul>
				</div>
			</div>
			
			<Timeline/>

			<div className="topic medium">
			  <div className="topic-title">Blog Posts</div>
			  <div className="topic-content">
			    <Post href="https://medium.com/@marcos30004347/programming-a-kubernetes-extension-api-server-part-1-60526e141a10" title="Programming a Kubernetes Extension API Server - Part 1">
			      In this post, I dive into creating your own custom K8s extension API Server from scratch in Go. I remember struggling to find good documentation or tutorials about Custom Extensions servers back when I was working on my native sidecar injection for K8s. So, I went deep into books and put together the kind of tutorial I wished existed when I began my journey.
			    </Post>
			    <Post href="https://medium.com/@marcos30004347/programming-a-kubernetes-extension-api-server-part-2-ab3b2123ad78" title="Programming a Kubernetes Extension API Server - Part 2">
			      Building on the first post, this one takes you even deeper. We explore more complex aspects of the server and add some essential functionalities.
			    </Post>
			    <Post href="https://medium.com/@marcos30004347/programming-a-kubernetes-extension-api-server-part-3-f7edddc974f4" title="Programming a Kubernetes Extension API Server - Part 3">
			      Wrapping up the series, this part breaks down all the manifest files needed to deploy the server and finally get it running on a Kubernetes cluster.
			    </Post>
			  </div>
			</div>
			
			<div className="topic medium">
			  <div className="topic-title">Project Highlights</div>
			  <div className="topic-content horizontal">
			    <Project title="Android App in C++" href="https://github.com/Marcos30004347/android-cpp-triangle">
			      <div style={{marginBottom: '10px', marginTop: '10px'}}>
			        <b>Tech:</b> C++, Android.
			      </div>
			      This project is a simple showcase of my skills. I built an Android application from scratch without using Java or any Google toolchain. The app, a basic triangle renderer, was entirely coded in C++. I compiled it using the Android SDK and NDK and even crafted the final .apk file using self-written bash scripts.
			      <div>
			        You can access the <a className="link" href="https://github.com/Marcos30004347/android-cpp-triangle">GitHub</a> repository for the project.
			      </div>
			    </Project>
			
			    <Project title="LLVM IR Dead Code Elimination" href="https://github.com/Marcos30004347/llvm-dead-code-elimination">
			      <div style={{marginBottom: '10px', marginTop: '10px'}}>
			        <b>Tech:</b> C++, LLVM Compiler Infrastructure.
			      </div>
			      Here's a cool LLVM pass I developed. It uses Range Analysis to predict whether a branch will ever be taken. If it won't, the pass removes unnecessary computations from the final code, optimizing both size and speed.
			      <div>
			        You can access the <a className="link" href="https://github.com/Marcos30004347/llvm-dead-code-elimination">GitHub</a> repository for the project.
			      </div>
			    </Project>
			
			    <Project title="Bootstrapper" href="https://github.com/Marcos30004347/bootstrapper">
			      <div style={{marginBottom: '10px', marginTop: '10px'}}>
			        <b>Tech:</b> Go, Kubernetes, Kafka, MongoDB, Ansible, Docker, Kafka, Zookeeper, Consul, Vagrant.
			      </div>
			      Check out this handy local project bootstrapper for distributed applications. It sets up a local Kubernetes cluster using Vagrant VMs and comes with infrastructure services already configured. MongoDB, Kafka, Consul, and Zookeeper are all ready to go, thanks to the included Dockerfiles and Ansible playbooks.
			      <div>
			        You can access the <a className="link" href="https://github.com/Marcos30004347/bootstrapper">GitHub</a> repository for the project.
			      </div>
			    </Project>
			
			    <Project title="Gauss" href="https://github.com/Marcos30004347/gauss">
			      <div style={{marginBottom: '10px', marginTop: '10px'}}>
			        <b>Tech:</b> C++, CMake, Emscripten, WebAssembly, NodeJS, JavaScript.
			      </div>
			      Introducing Gauss, a symbolic math library crafted entirely in C++. Think of it like Sympy, but pure C++. What's cool is that it's compatible with various targets, including WebAssembly. It supports C++, JavaScript, and NodeJS (via WebAssembly) through npm.
			      <div>
			        The library boasts a range of complex algorithms for symbolic computing, like multivariate polynomial factorization, big integer arithmetic, polynomial greatest common divisor calculation, polynomial root finding, derivative computations, and matrix singular value decomposition with precision similar to LAPACK and numpy.
			      </div>
			      <div>
			        You can access the <a className="link" href="https://github.com/Marcos30004347/gauss">GitHub</a> repository for the project.
			      </div>
			    </Project>
			
			    <Project title="Jobin" href="https://github.com/Marcos30004347/Jobin">
			      <div style={{marginBottom: '10px', marginTop: '10px'}}>
			        <b>Tech:</b> C++, Assembly.
			      </div>
			      Introducing Jobin—a job system implemented using fibers for parallel job execution. It gives you that Async and Await feel from JavaScript, allowing easy dispatch and waiting for parallel jobs to be executed by system threads. The project also includes optimized assembly code for context switches, enhancing performance. Compatible with a variety of modern architectures.
			      <div>
			        This project was inspired by the <a className="link" href="https://www.gdcvault.com/play/1022186/Parallelizing-the-Naughty-Dog-Engine">Parallelizing the Naughty Dog Engine using fibers</a> talk by Christian Gyrling.
			      </div>
			      <div>
			        You can access the <a className="link" href="https://github.com/Marcos30004347/Jobin">GitHub</a> repository for the project.
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
