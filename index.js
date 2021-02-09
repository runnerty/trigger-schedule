'use strict';

const schedule = require('node-schedule');
const Trigger = require('@runnerty/module-core').Trigger;

class triggerSchedule extends Trigger {
  constructor(chain, params) {
    super(chain, params);
  }

  start() {
    const _self = this;
    // Create schedule Job with schedule_interval params:
    this.scheduleRepeater = schedule.scheduleJob(
      _self.params.schedule_interval,
      function () {
        // Check if job must be canceled:
        if (new Date(_self.params.end_date) < new Date()) {
          _self.scheduleRepeater.cancel();
        }
        // Start Chain:
        _self.startChain().catch(err => {
          _self.logger.error('startChain error (triggerSchedule):', err);
        });
      }.bind(null, _self)
    );

    // Schedule cancelation Job (end_date):
    if (this.params.end_date) {
      this.scheduleCancel = schedule.scheduleJob(new Date(this.params.end_date), _ => {
        this.scheduleRepeater.cancel();
      });
    }
  }
}

module.exports = triggerSchedule;
