import React, { useState } from 'react'

import '../css/arrow-menu.css'

const ArrowMenu = ({ doLeftClick, doRightClick, should_render }) => {
	

	return (
		<div className={should_render ? 'arrow-menu-active' : 'arrow-menu-disabled' }>
			<div style={{ zIndex: '100', position: 'absolute', right: '0', top: '50%', transform: 'translate(0, -50%)' }}>
				<button onClick={() => doRightClick()} className="arrow-buttom"> <i className="fa-solid fa-angle-right"></i> </button>
			</div>

			<div style={{ zIndex: '100', position: 'absolute', left: '0', top: '50%', transform: 'translate(0, -50%)' }}>
				<button onClick={() => doLeftClick()} className="arrow-buttom"> <i className="fa-solid fa-angle-left"></i> </button>
			</div>
		</div>
	)
}

export default ArrowMenu;
