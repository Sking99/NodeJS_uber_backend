const express = require('express');
const { serverConfig } = require('./configs/index');
const cors = require('cors');

const { connectToDatabase } = require('./configs/db.config');

const v1Router = require('./routers/v1/index.router');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1', v1Router);

app.use((req, res) => res.status(404).json({ error: 'Not found' }));

app.use((err, req, res, next) => {
  console.error(err);
  const status = err.status || (err.code === 'AUTH_INVALID_CREDENTIALS' ? 401 : 500);
  res.status(status).json({ error: err.message || 'Internal Server Error' });
});

app.listen(serverConfig.port, async () => {
  await connectToDatabase();
  console.log(`Server is running on port ${serverConfig.port}`);
});