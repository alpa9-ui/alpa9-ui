@NgModule({
  imports: [
    ...,
    Alapa9UIModule.forRoot({
      svgPath: '/my/path', // Override this specific property
      ...
    })
  ],
})
export class AppModule {}
