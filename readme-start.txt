0.  globally installed deps
    @eui/cli@17.3.3 to generate the skeleton and then not used anymore
0.  yarn
    1.22.5
1.  Install dependencies
    1.  execute: yarn
2.  Build
    1.  dev
        npm run build-prod-skip-test-skip-lint
    2.  prod
        npm run build-prod-skip-test-skip-lint

    Maven should copy the result of this build from the directory: result in dist/browser.

3.  Start mock server with proxy server
    1.  start-mock-server
    2.  start-proxy.cmd

4. The user rest api '/restapi/user-details'
    should have a 'userId' property.
    This user will be displayed in the avatar.
    Without this property the user will not be displayed at all.
5. execute tests
    test or
    ng test
