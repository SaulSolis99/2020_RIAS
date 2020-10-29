INSERT INTO USUARIO (sCveUsuario, sContrasenia, sNombre, sApePat, sApeMat) VALUES (	'admin'	,'123'	,	'Clark', 'kent', 'DC');
INSERT INTO USUARIO (sCveUsuario, sContrasenia, sNombre, sApePat, sApeMat) VALUES (	'2'	,	'124'	,	'Barry', 'Allen', 'DC');
INSERT INTO USUARIO (sCveUsuario, sContrasenia, sNombre, sApePat, sApeMat) VALUES (	'3'	,	'125'	,	'Oliver', 'Queen', 'DC');
INSERT INTO USUARIO (sCveUsuario, sContrasenia, sNombre, sApePat, sApeMat) VALUES (	'4'	,	'126'	,	'Bruce', 'Wayne', 'DC');
INSERT INTO USUARIO (sCveUsuario, sContrasenia, sNombre, sApePat, sApeMat) VALUES (	'5'	,	'127'	,	'kara', 'Grant', 'DC');
INSERT INTO USUARIO (sCveUsuario, sContrasenia, sNombre, sApePat, sApeMat) VALUES (	'6'	,	'128'	,	'Diana', 'W', 'DC');

INSERT INTO Carrera ( nCveCarrera, sNombre, sAcronimo) VALUES (1, 'Ing. en Sist. Comp.', 'ISC');
INSERT INTO Carrera ( nCveCarrera, sNombre, sAcronimo) VALUES (2, 'Lic. en Informática', 'LI');
INSERT INTO Carrera ( nCveCarrera, sNombre, sAcronimo) VALUES (3, 'Ing. Electrónica', 'IE');
INSERT INTO Carrera ( nCveCarrera, sNombre, sAcronimo) VALUES (4, 'Ing. Mecánica', 'IME');

INSERT INTO Alumno ( nNumControl,  nCveCarrera, sCveUsuario, nSemestre) VALUES (102010, 1, '2', 1);
INSERT INTO Alumno ( nNumControl,  nCveCarrera, sCveUsuario, nSemestre) VALUES (102011, 1, '3', 1);
INSERT INTO Alumno ( nNumControl,  nCveCarrera, sCveUsuario, nSemestre) VALUES (102012, 2, '4', 2);
INSERT INTO Alumno ( nNumControl,  nCveCarrera, sCveUsuario, nSemestre) VALUES (102110, 2, '5', 3);
INSERT INTO Alumno ( nNumControl,  nCveCarrera, sCveUsuario, nSemestre) VALUES (102111, 3, '6', 1);

INSERT INTO Materia ( nCveMateria, sNombreMateria, nCreditos, nHT, nHP) VALUES (	1	,	'Prog. en Web'	,	8	,	2	,	3	);
INSERT INTO Materia ( nCveMateria, sNombreMateria, nCreditos, nHT, nHP) VALUES (	2	,	'Prog. Básica Web'	,	8	,	3	,	3	);
INSERT INTO Materia ( nCveMateria, sNombreMateria, nCreditos, nHT, nHP) VALUES (	3	,	'Prog. Avanzada Web'	,	10	,	3	,	2	);
INSERT INTO Materia ( nCveMateria, sNombreMateria, nCreditos, nHT, nHP) VALUES (	4	,	'Frameworks'	,	8	,	3	,	2	);
INSERT INTO Materia ( nCveMateria, sNombreMateria, nCreditos, nHT, nHP) VALUES (	5	,	'Matemáticas I'	,	8	,	3	,	2	);
INSERT INTO Materia ( nCveMateria, sNombreMateria, nCreditos, nHT, nHP) VALUES (	6	,	'Intro a sist. info.'	,	6	,	4	,	0	);
INSERT INTO Materia ( nCveMateria, sNombreMateria, nCreditos, nHT, nHP) VALUES (	7	,	'Instrumentación'	,	8	,	3	,	2	);
INSERT INTO Materia ( nCveMateria, sNombreMateria, nCreditos, nHT, nHP) VALUES (	8	,	'Optoelectrónica'	,	10	,	3	,	2	);
INSERT INTO Materia ( nCveMateria, sNombreMateria, nCreditos, nHT, nHP) VALUES (	9	,	'Termodinámica'	,	7	,	2	,	3	);

INSERT INTO Reticula ( nCveCarrera, nCveMateria, nSemestre) VALUES (	1	,	1	,1);
INSERT INTO Reticula ( nCveCarrera, nCveMateria, nSemestre) VALUES (	2	,	2	,1);
INSERT INTO Reticula ( nCveCarrera, nCveMateria, nSemestre) VALUES (	1	,	3	,1);
INSERT INTO Reticula ( nCveCarrera, nCveMateria, nSemestre) VALUES (	2	,	3	,2);
INSERT INTO Reticula ( nCveCarrera, nCveMateria, nSemestre) VALUES (	1	,	4	,2);
INSERT INTO Reticula ( nCveCarrera, nCveMateria, nSemestre) VALUES (	2	,	4	,2);
INSERT INTO Reticula ( nCveCarrera, nCveMateria, nSemestre) VALUES (	1	,	5	,3);
INSERT INTO Reticula ( nCveCarrera, nCveMateria, nSemestre) VALUES (	3	,	5	,3);
INSERT INTO Reticula ( nCveCarrera, nCveMateria, nSemestre) VALUES (	4	,	5	,3);
INSERT INTO Reticula ( nCveCarrera, nCveMateria, nSemestre) VALUES (	2	,	6	,4);
INSERT INTO Reticula ( nCveCarrera, nCveMateria, nSemestre) VALUES (	3	,	7	,5);
INSERT INTO Reticula ( nCveCarrera, nCveMateria, nSemestre) VALUES (	3	,	8	,6);
INSERT INTO Reticula ( nCveCarrera, nCveMateria, nSemestre) VALUES (	4	,	9	,7);

INSERT INTO Maestro ( nCveMaestro, sNombre, sApePat, sApeMat, sTitulo, sMaestria) VALUES (	1	,	'Tim'	,	'Berners'	,	'Lee'	,	'Ingeniero'	,	'MCC'	);
INSERT INTO Maestro ( nCveMaestro, sNombre, sApePat, sApeMat, sTitulo, sMaestria) VALUES (	2	,	'Tom'	,	'DeMarco'	,	null	,	'Informático'	,	null	);
INSERT INTO Maestro ( nCveMaestro, sNombre, sApePat, sApeMat, sTitulo, sMaestria) VALUES (	3	,	'Edward'	,	'Yourdon'	,	null	,	'Ingeniero'	,	'MCC'	);
INSERT INTO Maestro ( nCveMaestro, sNombre, sApePat, sApeMat, sTitulo, sMaestria) VALUES (	4	,	'Isaac'	,	'Newton'	,	null	,	'Físico-matemático'	,	null	);
INSERT INTO Maestro ( nCveMaestro, sNombre, sApePat, sApeMat, sTitulo, sMaestria) VALUES (	5	,	'Alberto'	,	'Creus'	,	'Marcombo'	,	'Ing. Optoelectrónico'	,	'Electrónica'	);

INSERT INTO Grupo ( sCveGrupo, nHora, sSalon, nCveMateria, nCveMaestro, nSituacion) VALUES (	'79HA'	,	7	,	'15'	,	1	,	1	,	1	);
INSERT INTO Grupo ( sCveGrupo, nHora, sSalon, nCveMateria, nCveMaestro, nSituacion) VALUES (	'79HB'	,	12	,	'L7'	,	1	,	2	,	1	);
INSERT INTO Grupo ( sCveGrupo, nHora, sSalon, nCveMateria, nCveMaestro, nSituacion) VALUES (	'69BA'	,	8	,	'L5'	,	2	,	3	,	1	);
INSERT INTO Grupo ( sCveGrupo, nHora, sSalon, nCveMateria, nCveMaestro, nSituacion) VALUES (	'69BB'	,	14	,	'L4'	,	2	,	1	,	1	);
INSERT INTO Grupo ( sCveGrupo, nHora, sSalon, nCveMateria, nCveMaestro, nSituacion) VALUES (	'79DA'	,	9	,	'C1'	,	3	,	4	,	1	);
INSERT INTO Grupo ( sCveGrupo, nHora, sSalon, nCveMateria, nCveMaestro, nSituacion) VALUES (	'79DB'	,	15	,	'C2'	,	3	,	1	,	1	);
INSERT INTO Grupo ( sCveGrupo, nHora, sSalon, nCveMateria, nCveMaestro, nSituacion) VALUES (	'49CA'	,	10	,	'24'	,	4	,	1	,	1	);
INSERT INTO Grupo ( sCveGrupo, nHora, sSalon, nCveMateria, nCveMaestro, nSituacion) VALUES (	'49CB'	,	16	,	'58'	,	4	,	2	,	1	);
INSERT INTO Grupo ( sCveGrupo, nHora, sSalon, nCveMateria, nCveMaestro, nSituacion) VALUES (	'77BA'	,	11	,	'33'	,	5	,	4	,	1	);
INSERT INTO Grupo ( sCveGrupo, nHora, sSalon, nCveMateria, nCveMaestro, nSituacion) VALUES (	'77BB'	,	17	,	'L7'	,	5	,	5	,	1	);
INSERT INTO Grupo ( sCveGrupo, nHora, sSalon, nCveMateria, nCveMaestro, nSituacion) VALUES (	'71BA'	,	12	,	'L3'	,	6	,	3	,	1	);
INSERT INTO Grupo ( sCveGrupo, nHora, sSalon, nCveMateria, nCveMaestro, nSituacion) VALUES (	'71BB'	,	18	,	'15'	,	6	,	2	,	1	);
INSERT INTO Grupo ( sCveGrupo, nHora, sSalon, nCveMateria, nCveMaestro, nSituacion) VALUES (	'51BA'	,	13	,	'60'	,	7	,	5	,	1	);
INSERT INTO Grupo ( sCveGrupo, nHora, sSalon, nCveMateria, nCveMaestro, nSituacion) VALUES (	'51BB'	,	19	,	'45'	,	7	,	5	,	1	);
INSERT INTO Grupo ( sCveGrupo, nHora, sSalon, nCveMateria, nCveMaestro, nSituacion) VALUES (	'49BA'	,	14	,	'20'	,	8	,	5	,	1	);
INSERT INTO Grupo ( sCveGrupo, nHora, sSalon, nCveMateria, nCveMaestro, nSituacion) VALUES (	'49BB'	,	20	,	'26'	,	8	,	3	,	1	);
INSERT INTO Grupo ( sCveGrupo, nHora, sSalon, nCveMateria, nCveMaestro, nSituacion) VALUES (	'23BA'	,	7	,	'38'	,	9	,	4	,	1	);
INSERT INTO Grupo ( sCveGrupo, nHora, sSalon, nCveMateria, nCveMaestro, nSituacion) VALUES (	'23BB'	,	8	,	'37'	,	9	,	3	,	1	);
/*nSituacion = 0 (cerrado)
  nSituacion = 1 (abierto) */
