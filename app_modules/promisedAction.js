export default function(promiseFn, ...rest){

  const args = rest.slice(0, rest.length - 1);
  const constant = rest[rest.length - 1];

  const promise = promiseFn(...args);

  const initialPayload = args.length > 1?
                          args:
                          args[0];

  const meta = { payload: initialPayload };

  return function(dispatch){
    dispatch({
      type: constant + '_START',
      payload: initialPayload
    });

    return promise.then(function( data ){
      const payload = data;

      if (!payload && body.error){
        throw body.error;
      }

      setTimeout( () => {
        dispatch({
          type: constant,
          meta,
          payload
        });
      }, 0);

      return payload;
    })
    .catch(function(payload){
      const errorLocation = `SERVER ERROR at "${constant}"`;

      console.error(errorLocation, payload);

      dispatch({
        type: constant + '_FAILED',
        meta,
        payload
      });
    });
  };
}
