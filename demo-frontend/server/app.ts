import * as express from 'express';
import * as compression from 'cors'; 
import * as bodyParser from 'body-parser';
import * as path from 'path';


// Create Express server
const app = express();
const cors = require('cors')

// Express configuration
app.set('port', process.env.PORT || 3000);
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  express.static(path.join(__dirname, '../client'), { maxAge: 31557600000 })
);

app.get('/env-config', (req: express.Request, res: express.Response): void => {
  res.status(200).send({apiHost:process.env.APIHOST});
});

/**
 * Primary app routes.
 */
app.get('*', (req: express.Request, res: express.Response) => {
  res.sendFile(path.join( __dirname, '../src/client', 'index.html'));
});


/**
 * Start Express server.
 */
const server = app.listen(app.get('port'), () => {
  console.log(
    ' App is running',
    app.get('port'),
    app.get('env')
  );
});

export default server;


