
/*
	El conjunto de datos contiene cuatro calificaciones de n
	estudiantes. Confirma que se importó correctamente la 
	colección con los siguientes comandos en la terminal de 
	mongo
*/
use students;
db.grades.count();
//	800


/*
	Encuenta todas la calificaciones del estudiante con el id
	número 4
*/
db.grades.find({"student_id":4});
/*
	{ "_id" : ObjectId("50906d7fa3c412bb040eb589"), "student_id" : 4, "type" : "homework", "score" : 5.244452510818443 }
	{ "_id" : ObjectId("50906d7fa3c412bb040eb588"), "student_id" : 4, "type" : "quiz", "score" : 27.29006335059361 }
	{ "_id" : ObjectId("50906d7fa3c412bb040eb58a"), "student_id" : 4, "type" : "homework", "score" : 28.656451042441 }
	{ "_id" : ObjectId("50906d7fa3c412bb040eb587"), "student_id" : 4, "type" : "exam", "score" : 87.89071881934647 }
*/

/*
	¿Cuántos registros hay de tipo "exam"?
*/
db.grades.count({"type":"exam"});
//	200


/*
	¿Cuántos registros hay de tipo homework?
*/
db.grades.count({"type":"homework"});
//	400

/*
	¿Cuántos registros hay def tipo quiz?
*/
db.grades.count({"type":"quiz"});
//	200

/*
	Elimna todas la calificaciones del estudiantes con id número 3
*/
db.grades.remove({"student_id":3})
//	WriteResult({ "nRemoved" : 4 })

/*
	¿Qué estudiantes obtuvieron 75.29561445722392 en una tarea?
*/
db.grades.find({$and:[{"type":"homework"},{"score":75.29561445722392}, {"student_id":1}]});
//	{ "_id" : ObjectId("50906d7fa3c412bb040eb59e"), "student_id" : 9 }

/*
	Actualiza las calificaciones del registro con el uuid 50906d7fa3c412bb040eb591 por 100
*/
db.grades.update({"_id":ObjectId("50906d7fa3c412bb040eb591")}, {$set:{"score":100} });
//	WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

/*
	¿A qué estudiante pertenece esta calificación?
*/
db.grades.find({"_id":ObjectId("50906d7fa3c412bb040eb591")}, {"student_id":1});