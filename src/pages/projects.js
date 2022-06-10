import React from 'react'

import { Outlet, Route } from "react-router-dom";

const ProjectA = () => {
	return (
		<main>
			<div className="project-page">
				<div style={{ backgroundColor: 'red' }}>
					ProjectA
				</div>
			</div>
		</main>
	)
}

const ProjectB = () => {
	return (
		<main>
			<div className="project-page">
				<div style={{ backgroundColor: 'blue' }}>
					ProjectB
				</div>
			</div>
		</main>
	)
}

const projects = [
	{ name: 'mathemagic', category: 'mathemathics', element: <ProjectA /> },
	{ name: 'gausslib-c++', category: 'mathemathics', element: <ProjectB /> },
	{ name: 'gausslib-js-wasm', category: 'mathemathics', element: <ProjectA /> },
	{ name: 'kubernetes-custom-server', category: 'devops', element: <ProjectB /> },
	{ name: 'bootstraper', category: 'devops', element: <ProjectA /> },
	{ name: 'jobin', category: 'parallel-computng', element: <ProjectB /> },
	{ name: 'llvm-2-dot', category: 'compilers', element: <ProjectA /> },
	{ name: 'llvm-dead-code-elimination', category: 'compilers', element: <ProjectB /> },
	{ name: 'android-cpp-renderer', category: 'android', element: <ProjectA /> }
]

const createProjectsRoutes = (projects) => {
	return projects.map((proj) => {
		return <Route key={proj.name} path={proj.name} element={proj.element} />
	})
}

const Projects = () => {

	return (
		<main>
			<div>
				<Outlet />
				{/* <div className="ProjectGalery">
					<div style={{ position: 'fixed', right: '0', top: '50%', transform: 'translate(0, -50%)' }}>
						<button onClick={() => moveRight()} className="move-buttom"> <i className="fa-solid fa-angle-right"></i> </button>
					</div>
					<div style={{ position: 'fixed', left: '0', top: '50%', transform: 'translate(0, -50%)' }}>
						<button onClick={() => moveLeft()} className="move-buttom"> <i className="fa-solid fa-angle-left"></i> </button>
					</div>
				</div> */}
			</div>
		</main>
	)
}

export default Projects;

export {
	projects,
	createProjectsRoutes
};
