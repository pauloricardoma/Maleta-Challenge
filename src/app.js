const app = require('connect')();
const serveStatic = require('serve-static');
const cors = require('cors');

app.use(cors());
// Serve up mock-api folder
app.use('/api', serveStatic('mock', {
  index: false,
  setHeaders: setJsonHeaders,
}));

// Set header to force download
function setJsonHeaders(res, path) {
  res.setHeader('Content-type', 'application/json');
}

app.listen(8888, () => {
  console.log('Acesse: http://localhost:8888');
});
