import { ClientFunction } from 'testcafe';
import url from 'url';
import { config, sharedFunctions } from '../../helpers/config-import';
import { AboutUsPage } from '../../poms/pages/about.po';

const aboutUsPage = new AboutUsPage();

const fix = fixture`Check 'Partners' page content`
  .page`${url.resolve(config.www_base_host, '/about')}`;

sharedFunctions.windowResolution(fix);

test('Check "Advanced Technology Partner" link redirects user to valid path', async t => {
  await t.click(aboutUsPage.advTechPartnerBtn);
  const getLocation = ClientFunction(() => document.location.href);
  await t.expect(getLocation()).contains('mitoc-group-inc-granted-aws-advanced-technology-partner-status');
});

test('Check "Service Delivery Partner" link redirects user to valid path', async t => {
  await t.click(aboutUsPage.servDelPartnerBtn);
  const getLocation = ClientFunction(() => document.location.href);
  await t.expect(getLocation()).contains('mitoc-group-inc-achieves-aws-service-delivery-partner-status-for-aws-lambda');
});

test('Check "Lambda Frameworks Partner" link redirects user to valid path', async t => {
  await t.click(aboutUsPage.lambdaFramePartnerBtn);
  const getLocation = ClientFunction(() => document.location.href);
  await t.expect(getLocation()).contains('mitoc-group-featured-as-frameworks-partner-by-aws-lambda-team');
});

test('Check "Reinvent 2015" link redirects user to valid path', async t => {
  await t.click(aboutUsPage.reivnentFifteenBtn);
  const getLocation = ClientFunction(() => document.location.href);
  await t.expect(getLocation()).contains('very-exciting-and-looking-forward-to-aws-re-invent');
});

test('Check "Open Camps" link redirects user to valid path', async t => {
  await t.click(aboutUsPage.openCampsBtn);
  const getLocation = ClientFunction(() => document.location.href);
  await t.expect(getLocation()).contains('open-camps-un');
});

test('Check "Node Interactive" link redirects user to valid path', async t => {
  await t.click(aboutUsPage.nodeJsInteractiveBtn);
  const getLocation = ClientFunction(() => document.location.href);
  await t.expect(getLocation()).contains('nieu16/agenda/176233/928560');
});

test('Check "London Serverless" link redirects user to valid path', async t => {
  await t.click(aboutUsPage.serverlessLondonBtn);
  const getLocation = ClientFunction(() => document.location.href);
  await t.expect(getLocation()).contains('serverlessconf');
});

test('Check "Austin Serverless" link redirects user to valid path', async t => {
  await t.click(aboutUsPage.serverlessAustinBtn);
  const getLocation = ClientFunction(() => document.location.href);
  await t.expect(getLocation()).contains('austin.serverlessconf');
});

test('Check "Tech Week" link redirects user to valid path', async t => {
  await t.click(aboutUsPage.techWeekBtn);
  const getLocation = ClientFunction(() => document.location.href);
  await t.expect(getLocation()).contains('panel-discussion-the-business-case-for-becoming-serverless');
});

test('Check "Reinvent 2017" link redirects user to valid path', async t => {
  await t.click(aboutUsPage.reivnentSeventeenBtn);
  const getLocation = ClientFunction(() => document.location.href);
  await t.expect(getLocation()).contains('reinvent.awsevents');
});
