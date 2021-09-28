<p align="center">
  <a href="http://runnerty.io">
    <img height="257" src="https://runnerty.io/assets/header/logo-stroked.png">
  </a>
  <p align="center">Smart Processes Management</p>
</p>

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Dependency Status][david-badge]][david-badge-url]
<a href="#badge">
  <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg">
</a>

# Schedule Trigger for [Runnerty]:

### Installation:
Through NPM

```bash
npm i @runnerty/trigger-schedule
```

You can also add modules to your project with [runnerty]

```bash
npx runnerty add @runnerty/trigger-schedule
```

This command installs the module in your project, adds example configuration in your [config.json] and creates an example plan of use.

If you have installed [runnerty] globally you can include the module with this command:

```bash
runnerty add @runnerty/trigger-schedule
```
### Configuration:
Add in [config.json]:
```json
{
  "triggers": [
    {
      "id": "schedule_default",
      "type": "@runnerty-trigger-schedule"
    }
  ]
}
```

### Plan sample:
Add in [plan.json]:
```json
{
  "triggers": [
    {
      "id":"schedule_default",
      "start_date":"2017-09-05T00:00:00.00Z",
      "end_date":"2099-09-05T00:00:00.00Z",
      "schedule_interval":"*/1 * * * *"
    }
  ]
}
```


[Runnerty]: https://www.runnerty.io
[downloads-image]: https://img.shields.io/npm/dm/@runnerty/trigger-schedule.svg
[npm-url]: https://www.npmjs.com/package/@runnerty/trigger-schedule
[npm-image]: https://img.shields.io/npm/v/@runnerty/trigger-schedule.svg
[david-badge]: https://david-dm.org/runnerty/trigger-schedule.svg
[david-badge-url]: https://david-dm.org/runnerty/trigger-schedule
[config.json]: http://docs.runnerty.io/config/
[plan.json]: http://docs.runnerty.io/plan/
