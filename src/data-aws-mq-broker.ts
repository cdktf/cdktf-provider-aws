// https://www.terraform.io/docs/providers/aws/r/data_aws_mq_broker.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsMqBrokerConfig extends cdktf.TerraformMetaArguments {
  readonly brokerId?: string;
  readonly brokerName?: string;
  readonly tags?: { [key: string]: string };
  /** logs block */
  readonly logs?: DataAwsMqBrokerLogs[];
}
export class DataAwsMqBrokerConfiguration extends cdktf.ComplexComputedList {

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }
}
export class DataAwsMqBrokerEncryptionOptions extends cdktf.ComplexComputedList {

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // use_aws_owned_key - computed: true, optional: false, required: false
  public get useAwsOwnedKey() {
    return this.getBooleanAttribute('use_aws_owned_key');
  }
}
export class DataAwsMqBrokerInstances extends cdktf.ComplexComputedList {

  // console_url - computed: true, optional: false, required: false
  public get consoleUrl() {
    return this.getStringAttribute('console_url');
  }

  // endpoints - computed: true, optional: false, required: false
  public get endpoints() {
    return this.getListAttribute('endpoints');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
}
export class DataAwsMqBrokerMaintenanceWindowStartTime extends cdktf.ComplexComputedList {

  // day_of_week - computed: true, optional: false, required: false
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }

  // time_of_day - computed: true, optional: false, required: false
  public get timeOfDay() {
    return this.getStringAttribute('time_of_day');
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
}
export class DataAwsMqBrokerUser extends cdktf.ComplexComputedList {

  // console_access - computed: true, optional: false, required: false
  public get consoleAccess() {
    return this.getBooleanAttribute('console_access');
  }

  // groups - computed: true, optional: false, required: false
  public get groups() {
    return this.getListAttribute('groups');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataAwsMqBrokerLogs {
}

function dataAwsMqBrokerLogsToTerraform(struct?: DataAwsMqBrokerLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}


// Resource

export class DataAwsMqBroker extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsMqBrokerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_mq_broker',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._brokerId = config.brokerId;
    this._brokerName = config.brokerName;
    this._tags = config.tags;
    this._logs = config.logs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_minor_version_upgrade - computed: true, optional: false, required: false
  public get autoMinorVersionUpgrade() {
    return this.getBooleanAttribute('auto_minor_version_upgrade');
  }

  // broker_id - computed: true, optional: true, required: false
  private _brokerId?: string;
  public get brokerId() {
    return this.getStringAttribute('broker_id');
  }
  public set brokerId(value: string) {
    this._brokerId = value;
  }
  public resetBrokerId() {
    this._brokerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerIdInput() {
    return this._brokerId
  }

  // broker_name - computed: true, optional: true, required: false
  private _brokerName?: string;
  public get brokerName() {
    return this.getStringAttribute('broker_name');
  }
  public set brokerName(value: string) {
    this._brokerName = value;
  }
  public resetBrokerName() {
    this._brokerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerNameInput() {
    return this._brokerName
  }

  // configuration - computed: true, optional: false, required: false
  public configuration(index: string) {
    return new DataAwsMqBrokerConfiguration(this, 'configuration', index);
  }

  // deployment_mode - computed: true, optional: false, required: false
  public get deploymentMode() {
    return this.getStringAttribute('deployment_mode');
  }

  // encryption_options - computed: true, optional: false, required: false
  public encryptionOptions(index: string) {
    return new DataAwsMqBrokerEncryptionOptions(this, 'encryption_options', index);
  }

  // engine_type - computed: true, optional: false, required: false
  public get engineType() {
    return this.getStringAttribute('engine_type');
  }

  // engine_version - computed: true, optional: false, required: false
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }

  // host_instance_type - computed: true, optional: false, required: false
  public get hostInstanceType() {
    return this.getStringAttribute('host_instance_type');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instances - computed: true, optional: false, required: false
  public instances(index: string) {
    return new DataAwsMqBrokerInstances(this, 'instances', index);
  }

  // maintenance_window_start_time - computed: true, optional: false, required: false
  public maintenanceWindowStartTime(index: string) {
    return new DataAwsMqBrokerMaintenanceWindowStartTime(this, 'maintenance_window_start_time', index);
  }

  // publicly_accessible - computed: true, optional: false, required: false
  public get publiclyAccessible() {
    return this.getBooleanAttribute('publicly_accessible');
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } {
    return this.interpolationForAttribute('tags') as any; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // user - computed: true, optional: false, required: false
  public user(index: string) {
    return new DataAwsMqBrokerUser(this, 'user', index);
  }

  // logs - computed: false, optional: true, required: false
  private _logs?: DataAwsMqBrokerLogs[];
  public get logs() {
    return this.interpolationForAttribute('logs') as any;
  }
  public set logs(value: DataAwsMqBrokerLogs[] ) {
    this._logs = value;
  }
  public resetLogs() {
    this._logs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsInput() {
    return this._logs
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      broker_id: cdktf.stringToTerraform(this._brokerId),
      broker_name: cdktf.stringToTerraform(this._brokerName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      logs: cdktf.listMapper(dataAwsMqBrokerLogsToTerraform)(this._logs),
    };
  }
}
