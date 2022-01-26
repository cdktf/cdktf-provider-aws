// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Managed Message Queue
*/
export interface DataAwsMqBrokerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/mq_broker#broker_id DataAwsMqBroker#broker_id}
  */
  readonly brokerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/mq_broker#broker_name DataAwsMqBroker#broker_name}
  */
  readonly brokerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/mq_broker#tags DataAwsMqBroker#tags}
  */
  readonly tags?: { [key: string]: string };
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
export class DataAwsMqBrokerLdapServerMetadata extends cdktf.ComplexComputedList {

  // hosts - computed: true, optional: false, required: false
  public get hosts() {
    return this.getListAttribute('hosts');
  }

  // role_base - computed: true, optional: false, required: false
  public get roleBase() {
    return this.getStringAttribute('role_base');
  }

  // role_name - computed: true, optional: false, required: false
  public get roleName() {
    return this.getStringAttribute('role_name');
  }

  // role_search_matching - computed: true, optional: false, required: false
  public get roleSearchMatching() {
    return this.getStringAttribute('role_search_matching');
  }

  // role_search_subtree - computed: true, optional: false, required: false
  public get roleSearchSubtree() {
    return this.getBooleanAttribute('role_search_subtree');
  }

  // service_account_password - computed: true, optional: false, required: false
  public get serviceAccountPassword() {
    return this.getStringAttribute('service_account_password');
  }

  // service_account_username - computed: true, optional: false, required: false
  public get serviceAccountUsername() {
    return this.getStringAttribute('service_account_username');
  }

  // user_base - computed: true, optional: false, required: false
  public get userBase() {
    return this.getStringAttribute('user_base');
  }

  // user_role_name - computed: true, optional: false, required: false
  public get userRoleName() {
    return this.getStringAttribute('user_role_name');
  }

  // user_search_matching - computed: true, optional: false, required: false
  public get userSearchMatching() {
    return this.getStringAttribute('user_search_matching');
  }

  // user_search_subtree - computed: true, optional: false, required: false
  public get userSearchSubtree() {
    return this.getBooleanAttribute('user_search_subtree');
  }
}
export class DataAwsMqBrokerLogs extends cdktf.ComplexComputedList {

  // audit - computed: true, optional: false, required: false
  public get audit() {
    return this.getStringAttribute('audit');
  }

  // general - computed: true, optional: false, required: false
  public get general() {
    return this.getBooleanAttribute('general');
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
    return cdktf.Fn.tolist(this.getListAttribute('groups'));
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/mq_broker aws_mq_broker}
*/
export class DataAwsMqBroker extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_mq_broker";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/mq_broker aws_mq_broker} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsMqBrokerConfig = {}
  */
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // authentication_strategy - computed: true, optional: false, required: false
  public get authenticationStrategy() {
    return this.getStringAttribute('authentication_strategy');
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
    return this._brokerId;
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
    return this._brokerName;
  }

  // configuration - computed: true, optional: false, required: false
  public configuration(index: string) {
    return new DataAwsMqBrokerConfiguration(this, 'configuration', index, false);
  }

  // deployment_mode - computed: true, optional: false, required: false
  public get deploymentMode() {
    return this.getStringAttribute('deployment_mode');
  }

  // encryption_options - computed: true, optional: false, required: false
  public encryptionOptions(index: string) {
    return new DataAwsMqBrokerEncryptionOptions(this, 'encryption_options', index, false);
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
    return new DataAwsMqBrokerInstances(this, 'instances', index, false);
  }

  // ldap_server_metadata - computed: true, optional: false, required: false
  public ldapServerMetadata(index: string) {
    return new DataAwsMqBrokerLdapServerMetadata(this, 'ldap_server_metadata', index, false);
  }

  // logs - computed: true, optional: false, required: false
  public logs(index: string) {
    return new DataAwsMqBrokerLogs(this, 'logs', index, false);
  }

  // maintenance_window_start_time - computed: true, optional: false, required: false
  public maintenanceWindowStartTime(index: string) {
    return new DataAwsMqBrokerMaintenanceWindowStartTime(this, 'maintenance_window_start_time', index, false);
  }

  // publicly_accessible - computed: true, optional: false, required: false
  public get publiclyAccessible() {
    return this.getBooleanAttribute('publicly_accessible');
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
  }

  // storage_type - computed: true, optional: false, required: false
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // user - computed: true, optional: false, required: false
  public user(index: string) {
    return new DataAwsMqBrokerUser(this, 'user', index, true);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      broker_id: cdktf.stringToTerraform(this._brokerId),
      broker_name: cdktf.stringToTerraform(this._brokerName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }
}
