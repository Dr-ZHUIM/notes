import Pipeline from "./pipeline.js";

const pipeline = Pipeline(
    (ctx, next) => {
        console.log(ctx);
        next()
    }
)

pipeline.push(
    (ctx, next) => {
      ctx.value = ctx.value + 21;
      console.log(ctx.value);
      next()
    },
    (ctx, next) => {
      ctx.value = ctx.value * 2;
      console.log(ctx.value);
      next()
    }
  )

  pipeline.push((ctx, next) => {
    console.log(ctx)
    // not calling `next()`
  })

  pipeline.push((ctx, next) => {
    console.log('this will not be logged')
  })
  
  // execute the pipeline with initial value of `ctx`
  pipeline.execute({ value: 0 });

console.log(' 123', 123)