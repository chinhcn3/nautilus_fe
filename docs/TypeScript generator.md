# OpenAPI Codegen

Just look at `codegen` command in the `package.json` file you will understand how it works.

Notices:

- Always use tree-shaking method to reduce bundle size. 
  - That means, when you want to use a service, you should implement like this:
  ```typescript 
    import {UsersService} from './UsersService'; // import separately 
    import {httpClient} from './http-client';  // import separately
  
    const usersService = new UsersService(httpClient)
    const userResp = await usersService.getUsers()
  ```

# Path codegen

It will generate `./src/common/path.tsx` for you.

Just look at `gen-paths` to see the detail

Purpose:
- Consistency between path in code and app structure, so when you refactoring a page, it will make sure that your code
must be refactoring as well
