"use strict";

const schedule = require("node-schedule");
const Trigger = global.TriggerClass;

class triggerSchedule extends Trigger {
  constructor(chain, params) {
    super(chain, params);
  }

  start() {
    const _this = this;

    // Create schedule Job with schedule_interval params:
    _this.scheduleRepeater = schedule.scheduleJob(
      _this.params.schedule_interval,
      function() {
        // Check if job must be canceled:
        if (new Date(_this.params.end_date) < new Date()) {
          _this.scheduleRepeater.cancel();
        }
        // Start Chain:
        _this
          .startChain()
          .then(() => {})
          .catch(err => {
            _this.logger.error("startChain error (triggerSchedule):", err);
          });
      }.bind(null, _this)
    );

    // Schedule cancelation Job (end_date):
    if (_this.params.end_date) {
      _this.scheduleCancel = schedule.scheduleJob(new Date(_this.params.end_date), _ => {
        _this.scheduleRepeater.cancel();
      });
    }
  }
}

module.exports = triggerSchedule;
