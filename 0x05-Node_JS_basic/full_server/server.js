import express from 'express';
import controllerRouting from './routes/index';

const app = express();
const port = 1245;

controllerRouting(app);

app.listen(port, () => {
  // test
});

export default app;

 // test =  console.log(`Example app listening at http://localhost:${port}`);