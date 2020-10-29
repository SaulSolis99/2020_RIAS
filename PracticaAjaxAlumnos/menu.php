
        <div id="menu">
			<nav>
				<h3>Secciones</h3>
				<ul>
				<li><div id="nuevo"></div></li>
				<?php
					if (isset($_SESSION["tipo"])){
						if ($_SESSION["tipo"]=="Administrador"){
				?>
				  <li><a href="tabAlumnos.php">ABC Alumnos</a></li>
				<?php
						} 
				?>
				  <li><a href="logout.php">Salir</a></li>
				  <br/>
				<?php
					} else {
				?>
				  <li><a href="#" id="ligaSalir">Blablabla</a></li>
				  <li><a href="tabMaterias.php">Materias</a></li>
				<?php
					}
				?>
				</ul>
			</nav>
        </div>