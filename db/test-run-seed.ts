import testSeed from './test-seed'
import db from './test-connection'

const testRunSeed = async () => {
    try {
      await testSeed()
      console.log('Seeding successful in run-test-seed!')
    } catch (err) {
      console.error('Seeding error in run-test-seed:', err);
    } finally {
      await db.end()
      console.log('Database connection closed.');
    }
  };
  
  testRunSeed();