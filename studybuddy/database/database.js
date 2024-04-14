import {
  enablePromise,
  openDatabase,
} from "react-native-sqlite-storage"

// Enable promise for SQLite
enablePromise(true)

export const initDB = async () => {
  const db = openDatabase(
    { name: "studybuddy.db", location: "default" },
    () => {},
    (error) => {
      console.error(error)
      throw Error("Could not connect to database")
    }
  )
  return db;
}

export const createTables = async (db) => {

  const assignmentsQuery = 'CREATE TABLE IF NOT EXISTS assignments (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, subject TEXT, dueDate TEXT)';
  try {
    await db.executeSql(assignmentsQuery);
  } catch (error) {
    console.error(error);
    throw Error('failed to create tables')
    
  }
}

export const getTableNames = async (db) => {
  try {
    const tableNames = [];
    const results = await db.executeSql(
      "SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'"
    );
    results.forEach((result) => {
      for (let index = 0; index < result.rows.length; index++) {
        tableNames.push(result.rows.item(index).name);
      }
    });
    return tableNames;
  } catch (error) {
    console.error(error);
    throw Error("Failed to get table names from database");
  }
};

export const removeTable = async (db, tableName) => {
  const query = `DROP TABLE IF EXISTS ${tableName}`;
  try {
    await db.executeSql(query);
  } catch (error) {
    console.error(error);
    throw Error(`Failed to drop table ${tableName}`);
  }
};

export const addAssignment = async (db, assignment) => {
  const insertQuery = `
    INSERT INTO assignments (title, subject, dueDate)
    VALUES (?, ?, ?)
 `;
  const values = [
    assignment.title,
    assignment.subject,
    assignment.dueDate,
  ];
  try {
    return db.executeSql(insertQuery, values);
  } catch (error) {
    console.error(error);
    throw Error("Failed to add assignment");
  }
};

export const editAssignment = async (db, assignment) => {
  const updateQuery = `
    UPDATE assignments
    SET title = ?, subject = ?, dueDate = ?
    WHERE id = ?
  `;
  const values = [assignment.title, assignment.subject, assignment.dueDate, assignment.id];
  try {
    return db.executeSql(updateQuery, values);
  } catch (error) {
    console.error(error);
    throw Error("Failed to edit assignment");
  }
};

export const deleteAssignment = async (db, assignment) => {
  const deleteQuery = `
    DELETE FROM assignments
    WHERE id = ?
  `;
  try {
    const result = await db.executeSql(deleteQuery, [assignment.id]);
    console.log('assignment successfully deleted');
    return result;
  } catch (error) {
    console.error(error);
    throw Error("Failed to delete assignment");
  }
};



export const getAssignments = async (db) => {
  try {
    const assignments = [];
    const results = await db.executeSql("SELECT * FROM assignments");
    results.forEach((result) => {
      for (let index = 0; index < result.rows.length; index++) {
        assignments.push(result.rows.item(index));
      }
    });
    return assignments;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get assignments from the database");
  }
};




      