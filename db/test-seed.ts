import db from './test-connection'
import format from 'pg-format'
import {testUsersData} from './testdata/testUsersData'
import {testPostersData} from './testdata/testPostersData'

const testSeed = async () => {
    try {
        console.log("Dropping existing test tables...")
        await db.query(`DROP TABLE IF EXISTS posters;`);
        await db.query(`DROP TABLE IF EXISTS users;`);

        console.log("Creating new tables...")
        
        //users table
        await db.query(`
            CREATE TABLE users(
            user_id SERIAL PRIMARY KEY,
            user_uid VARCHAR UNIQUE NOT NULL,
            username VARCHAR UNIQUE NOT NULL,
            email VARCHAR UNIQUE NOT NULL,
            created_at TIMESTAMP DEFAULT NOW()
            );
        `)

        //posters table
        await db.query(`
            CREATE TABLE posters(
            poster_id SERIAL PRIMARY KEY,
            uploadUserId INT REFERENCES users(user_id) ON DELETE CASCADE,
            uploadUserUID TEXT NOT NULL REFERENCES users(user_uid) ON DELETE CASCADE,
            uploadUsername TEXT NOT NULL REFERENCES users(username) ON DELETE CASCADE,
            createdAt TIMESTAMP DEFAULT NOW(),
            updatedAt TIMESTAMP NOT NULL,
            posterImageURL TEXT NOT NULL,
            slug TEXT NOT NULL,
            posterImageAltText TEXT NOT NULL,
            eventName TEXT NOT NULL,
            eventVenueName TEXT NOT NULL,
            eventLocationName TEXT NOT NULL,
            eventLocationAddress TEXT NOT NULL,
            eventLocationLatitude DOUBLE PRECISION NOT NULL,
            eventLocationLongitude DOUBLE PRECISION NOT NULL,
            eventTime TIMESTAMP NOT NULL,
            eventText TEXT NOT NULL,
            eventCategory TEXT NOT NULL,
            posterDeletionDate TIMESTAMP NOT NULL,
            isExpired BOOLEAN,
            posterX DOUBLE PRECISION,
            posterY DOUBLE PRECISION,
            isPublished BOOLEAN,
            tags TEXT[]
            );
        `)

        //inserts users data
        console.log('Inserting users data...')
        const insertUsersQuery = format(
            `INSERT INTO users (user_uid, username, email) VALUES %L RETURNING *;`,
            testUsersData.map(({userUID, 
                username, 
                email}) => [userUID, username, email])
        )
        const { rows: insertedUsers } = await db.query(insertUsersQuery)

        //inserts posters data
        console.log('Inserting posters data...')
        const insertPostersQuery = format(
            `INSERT INTO posters (uploadUserId, uploadUserUID, uploadUsername, updatedAt, posterImageURL, slug, posterImageAltText, eventName, eventVenueName, eventLocationName, eventLocationAddress, eventLocationLatitude, eventLocationLongitude, eventTime, eventText, eventCategory, posterDeletionDate, isExpired, posterX, posterY, isPublished, tags)
            VALUES %L RETURNING *;`,
            testPostersData.map(({
                uploadUserId,
                uploadUserUID,
                uploadUsername,
                updatedAt,
                posterImageURL,
                slug,
                posterImageAltText,
                eventName,
                eventVenueName,
                eventLocation: {
                  name: eventLocationName,
                  address: eventLocationAddress,
                  latitude: eventLocationLatitude,
                  longitude: eventLocationLongitude
                },
                eventTime,
                eventText,
                eventCategory,
                posterDeletionDate,
                isExpired,
                posterX,
                posterY,
                isPublished,
                tags
              }) => [
                uploadUserId,
                uploadUserUID,
                uploadUsername,
                updatedAt,
                posterImageURL,
                slug,
                posterImageAltText,
                eventName,
                eventVenueName,
                eventLocationName,
                eventLocationAddress,
                eventLocationLatitude,
                eventLocationLongitude,
                eventTime,
                eventText,
                eventCategory,
                posterDeletionDate,
                isExpired,
                posterX,
                posterY,
                isPublished,
                // tags
                `{${tags.join(',')}}`
              ])
        );
        
        const {rows: insertedPosters} = await db.query(insertPostersQuery)

        console.log('Seeding completed successfully!!!')
        
    } catch (error) {
        console.error('Seeeding error in test-seed:', error)
        throw error;
    }
}

export default testSeed