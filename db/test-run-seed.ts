import testSeed from './test-seed'
import db from './test-connection'

const runTestSeed = async () => {
    try {
      await testSeed()
      console.log('Seeding complete in run-test-seed!')
    } catch (err) {
      console.error('Seeding error in run-test-seed:', err);
    } finally {
      await db.end()
      console.log('Database connection closed.');
    }
  };
  
  runTestSeed();