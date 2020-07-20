import "isomorphic-fetch";

import { from } from "rxjs";
import { switchMap, mergeMap } from "rxjs/operators";

export const FETCH_REQUEST = "FETCH_REQUEST";

export default function fetchEpic(action$: any) {
  return action$.ofType(FETCH_REQUEST).pipe(
    mergeMap((action: any) => {
      const { method, resource, nextType, body }:any = action;
      return from(
        fetch(`http://localhost:8081${resource}`, {
          method,
          body: JSON.stringify(body),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
      ).pipe(
        switchMap(response => response.json()),
        switchMap((res: any) => {
          return from([
            {
              type: nextType,
              data: res.phones
            }
          ]);
        })
      );
    })
  );
}
