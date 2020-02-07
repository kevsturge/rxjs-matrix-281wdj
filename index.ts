console.clear();
import { interval } from 'rxjs';
import { scan } from 'rxjs/operators';
import { render } from './html-renderer';
import { markForRemoval, updateDrops, updateMatrix } from './matrix';

interval(300)
  .pipe(
    scan<number, any[]>(matrix => (
      markForRemoval(matrix),
      updateDrops(matrix),
      updateMatrix(matrix)
    ), [])
  ).subscribe(render);