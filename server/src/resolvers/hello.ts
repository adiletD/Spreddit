import { Query, Resolver } from 'type-graphql'

@Resolver()
export class HelloResolver {
  @Query(() => String) // muataions or queries and what it returns
  hello() {
    return 'hellowrold'
  }
}
