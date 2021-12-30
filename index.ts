import './style.css';

import { of, map, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

of('World')
  .pipe(map((name) => `Hello, ${name}!`))
  .subscribe(console.log);

// Open the console in the bottom right to see results.

ajax.get
