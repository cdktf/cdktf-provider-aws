// https://www.terraform.io/docs/providers/aws/r/mq_broker.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MqBrokerConfig extends cdktf.TerraformMetaArguments {
  readonly applyImmediately?: boolean;
  readonly autoMinorVersionUpgrade?: boolean;
  readonly brokerName: string;
  readonly deploymentMode?: string;
  readonly engineType: string;
  readonly engineVersion: string;
  readonly hostInstanceType: string;
  readonly publiclyAccessible?: boolean;
  readonly securityGroups: string[];
  readonly subnetIds?: string[];
  readonly tags?: { [key: string]: string };
  /** configuration block */
  readonly configuration?: MqBrokerConfiguration[];
  /** encryption_options block */
  readonly encryptionOptions?: MqBrokerEncryptionOptions[];
  /** logs block */
  readonly logs?: MqBrokerLogs[];
  /** maintenance_window_start_time block */
  readonly maintenanceWindowStartTime?: MqBrokerMaintenanceWindowStartTime[];
  /** user block */
  readonly user: MqBrokerUser[];
}
export class MqBrokerInstances extends cdktf.ComplexComputedList {

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
export interface MqBrokerConfiguration {
  readonly id?: string;
  readonly revision?: number;
}

function mqBrokerConfigurationToTerraform(struct?: MqBrokerConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    revision: cdktf.numberToTerraform(struct!.revision),
  }
}

export interface MqBrokerEncryptionOptions {
  readonly kmsKeyId?: string;
  readonly useAwsOwnedKey?: boolean;
}

function mqBrokerEncryptionOptionsToTerraform(struct?: MqBrokerEncryptionOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    use_aws_owned_key: cdktf.booleanToTerraform(struct!.useAwsOwnedKey),
  }
}

export interface MqBrokerLogs {
  readonly audit?: boolean;
  readonly general?: boolean;
}

function mqBrokerLogsToTerraform(struct?: MqBrokerLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    audit: cdktf.booleanToTerraform(struct!.audit),
    general: cdktf.booleanToTerraform(struct!.general),
  }
}

export interface MqBrokerMaintenanceWindowStartTime {
  readonly dayOfWeek: string;
  readonly timeOfDay: string;
  readonly timeZone: string;
}

function mqBrokerMaintenanceWindowStartTimeToTerraform(struct?: MqBrokerMaintenanceWindowStartTime): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    time_of_day: cdktf.stringToTerraform(struct!.timeOfDay),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}

export interface MqBrokerUser {
  readonly consoleAccess?: boolean;
  readonly groups?: string[];
  readonly password: string;
  readonly username: string;
}

function mqBrokerUserToTerraform(struct?: MqBrokerUser): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    console_access: cdktf.booleanToTerraform(struct!.consoleAccess),
    groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.groups),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


// Resource

export class MqBroker extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MqBrokerConfig) {
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
    this._applyImmediately = config.applyImmediately;
    this._autoMinorVersionUpgrade = config.autoMinorVersionUpgrade;
    this._brokerName = config.brokerName;
    this._deploymentMode = config.deploymentMode;
    this._engineType = config.engineType;
    this._engineVersion = config.engineVersion;
    this._hostInstanceType = config.hostInstanceType;
    this._publiclyAccessible = config.publiclyAccessible;
    this._securityGroups = config.securityGroups;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._configuration = config.configuration;
    this._encryptionOptions = config.encryptionOptions;
    this._logs = config.logs;
    this._maintenanceWindowStartTime = config.maintenanceWindowStartTime;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_immediately - computed: false, optional: true, required: false
  private _applyImmediately?: boolean;
  public get applyImmediately() {
    return this.getBooleanAttribute('apply_immediately');
  }
  public set applyImmediately(value: boolean ) {
    this._applyImmediately = value;
  }
  public resetApplyImmediately() {
    this._applyImmediately = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyImmediatelyInput() {
    return this._applyImmediately
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_minor_version_upgrade - computed: false, optional: true, required: false
  private _autoMinorVersionUpgrade?: boolean;
  public get autoMinorVersionUpgrade() {
    return this.getBooleanAttribute('auto_minor_version_upgrade');
  }
  public set autoMinorVersionUpgrade(value: boolean ) {
    this._autoMinorVersionUpgrade = value;
  }
  public resetAutoMinorVersionUpgrade() {
    this._autoMinorVersionUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMinorVersionUpgradeInput() {
    return this._autoMinorVersionUpgrade
  }

  // broker_name - computed: false, optional: false, required: true
  private _brokerName: string;
  public get brokerName() {
    return this.getStringAttribute('broker_name');
  }
  public set brokerName(value: string) {
    this._brokerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerNameInput() {
    return this._brokerName
  }

  // deployment_mode - computed: false, optional: true, required: false
  private _deploymentMode?: string;
  public get deploymentMode() {
    return this.getStringAttribute('deployment_mode');
  }
  public set deploymentMode(value: string ) {
    this._deploymentMode = value;
  }
  public resetDeploymentMode() {
    this._deploymentMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentModeInput() {
    return this._deploymentMode
  }

  // engine_type - computed: false, optional: false, required: true
  private _engineType: string;
  public get engineType() {
    return this.getStringAttribute('engine_type');
  }
  public set engineType(value: string) {
    this._engineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineTypeInput() {
    return this._engineType
  }

  // engine_version - computed: false, optional: false, required: true
  private _engineVersion: string;
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion
  }

  // host_instance_type - computed: false, optional: false, required: true
  private _hostInstanceType: string;
  public get hostInstanceType() {
    return this.getStringAttribute('host_instance_type');
  }
  public set hostInstanceType(value: string) {
    this._hostInstanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInstanceTypeInput() {
    return this._hostInstanceType
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instances - computed: true, optional: false, required: false
  public instances(index: string) {
    return new MqBrokerInstances(this, 'instances', index);
  }

  // publicly_accessible - computed: false, optional: true, required: false
  private _publiclyAccessible?: boolean;
  public get publiclyAccessible() {
    return this.getBooleanAttribute('publicly_accessible');
  }
  public set publiclyAccessible(value: boolean ) {
    this._publiclyAccessible = value;
  }
  public resetPubliclyAccessible() {
    this._publiclyAccessible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publiclyAccessibleInput() {
    return this._publiclyAccessible
  }

  // security_groups - computed: false, optional: false, required: true
  private _securityGroups: string[];
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups
  }

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[];
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: MqBrokerConfiguration[];
  public get configuration() {
    return this.interpolationForAttribute('configuration') as any;
  }
  public set configuration(value: MqBrokerConfiguration[] ) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration
  }

  // encryption_options - computed: false, optional: true, required: false
  private _encryptionOptions?: MqBrokerEncryptionOptions[];
  public get encryptionOptions() {
    return this.interpolationForAttribute('encryption_options') as any;
  }
  public set encryptionOptions(value: MqBrokerEncryptionOptions[] ) {
    this._encryptionOptions = value;
  }
  public resetEncryptionOptions() {
    this._encryptionOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionOptionsInput() {
    return this._encryptionOptions
  }

  // logs - computed: false, optional: true, required: false
  private _logs?: MqBrokerLogs[];
  public get logs() {
    return this.interpolationForAttribute('logs') as any;
  }
  public set logs(value: MqBrokerLogs[] ) {
    this._logs = value;
  }
  public resetLogs() {
    this._logs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsInput() {
    return this._logs
  }

  // maintenance_window_start_time - computed: false, optional: true, required: false
  private _maintenanceWindowStartTime?: MqBrokerMaintenanceWindowStartTime[];
  public get maintenanceWindowStartTime() {
    return this.interpolationForAttribute('maintenance_window_start_time') as any;
  }
  public set maintenanceWindowStartTime(value: MqBrokerMaintenanceWindowStartTime[] ) {
    this._maintenanceWindowStartTime = value;
  }
  public resetMaintenanceWindowStartTime() {
    this._maintenanceWindowStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowStartTimeInput() {
    return this._maintenanceWindowStartTime
  }

  // user - computed: false, optional: false, required: true
  private _user: MqBrokerUser[];
  public get user() {
    return this.interpolationForAttribute('user') as any;
  }
  public set user(value: MqBrokerUser[]) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apply_immediately: cdktf.booleanToTerraform(this._applyImmediately),
      auto_minor_version_upgrade: cdktf.booleanToTerraform(this._autoMinorVersionUpgrade),
      broker_name: cdktf.stringToTerraform(this._brokerName),
      deployment_mode: cdktf.stringToTerraform(this._deploymentMode),
      engine_type: cdktf.stringToTerraform(this._engineType),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      host_instance_type: cdktf.stringToTerraform(this._hostInstanceType),
      publicly_accessible: cdktf.booleanToTerraform(this._publiclyAccessible),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroups),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      configuration: cdktf.listMapper(mqBrokerConfigurationToTerraform)(this._configuration),
      encryption_options: cdktf.listMapper(mqBrokerEncryptionOptionsToTerraform)(this._encryptionOptions),
      logs: cdktf.listMapper(mqBrokerLogsToTerraform)(this._logs),
      maintenance_window_start_time: cdktf.listMapper(mqBrokerMaintenanceWindowStartTimeToTerraform)(this._maintenanceWindowStartTime),
      user: cdktf.listMapper(mqBrokerUserToTerraform)(this._user),
    };
  }
}
