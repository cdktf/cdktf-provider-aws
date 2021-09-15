// https://www.terraform.io/docs/providers/aws/r/mq_broker.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MqBrokerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#apply_immediately MqBroker#apply_immediately}
  */
  readonly applyImmediately?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#authentication_strategy MqBroker#authentication_strategy}
  */
  readonly authenticationStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#auto_minor_version_upgrade MqBroker#auto_minor_version_upgrade}
  */
  readonly autoMinorVersionUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#broker_name MqBroker#broker_name}
  */
  readonly brokerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#deployment_mode MqBroker#deployment_mode}
  */
  readonly deploymentMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#engine_type MqBroker#engine_type}
  */
  readonly engineType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#engine_version MqBroker#engine_version}
  */
  readonly engineVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#host_instance_type MqBroker#host_instance_type}
  */
  readonly hostInstanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#publicly_accessible MqBroker#publicly_accessible}
  */
  readonly publiclyAccessible?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#security_groups MqBroker#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#storage_type MqBroker#storage_type}
  */
  readonly storageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#subnet_ids MqBroker#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#tags MqBroker#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#tags_all MqBroker#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#configuration MqBroker#configuration}
  */
  readonly configuration?: MqBrokerConfiguration[];
  /**
  * encryption_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#encryption_options MqBroker#encryption_options}
  */
  readonly encryptionOptions?: MqBrokerEncryptionOptions[];
  /**
  * ldap_server_metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#ldap_server_metadata MqBroker#ldap_server_metadata}
  */
  readonly ldapServerMetadata?: MqBrokerLdapServerMetadata[];
  /**
  * logs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#logs MqBroker#logs}
  */
  readonly logs?: MqBrokerLogs[];
  /**
  * maintenance_window_start_time block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#maintenance_window_start_time MqBroker#maintenance_window_start_time}
  */
  readonly maintenanceWindowStartTime?: MqBrokerMaintenanceWindowStartTime[];
  /**
  * user block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#user MqBroker#user}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#id MqBroker#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#revision MqBroker#revision}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#kms_key_id MqBroker#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#use_aws_owned_key MqBroker#use_aws_owned_key}
  */
  readonly useAwsOwnedKey?: boolean | cdktf.IResolvable;
}

function mqBrokerEncryptionOptionsToTerraform(struct?: MqBrokerEncryptionOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    use_aws_owned_key: cdktf.booleanToTerraform(struct!.useAwsOwnedKey),
  }
}

export interface MqBrokerLdapServerMetadata {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#hosts MqBroker#hosts}
  */
  readonly hosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#role_base MqBroker#role_base}
  */
  readonly roleBase?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#role_name MqBroker#role_name}
  */
  readonly roleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#role_search_matching MqBroker#role_search_matching}
  */
  readonly roleSearchMatching?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#role_search_subtree MqBroker#role_search_subtree}
  */
  readonly roleSearchSubtree?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#service_account_password MqBroker#service_account_password}
  */
  readonly serviceAccountPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#service_account_username MqBroker#service_account_username}
  */
  readonly serviceAccountUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#user_base MqBroker#user_base}
  */
  readonly userBase?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#user_role_name MqBroker#user_role_name}
  */
  readonly userRoleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#user_search_matching MqBroker#user_search_matching}
  */
  readonly userSearchMatching?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#user_search_subtree MqBroker#user_search_subtree}
  */
  readonly userSearchSubtree?: boolean | cdktf.IResolvable;
}

function mqBrokerLdapServerMetadataToTerraform(struct?: MqBrokerLdapServerMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hosts: cdktf.listMapper(cdktf.stringToTerraform)(struct!.hosts),
    role_base: cdktf.stringToTerraform(struct!.roleBase),
    role_name: cdktf.stringToTerraform(struct!.roleName),
    role_search_matching: cdktf.stringToTerraform(struct!.roleSearchMatching),
    role_search_subtree: cdktf.booleanToTerraform(struct!.roleSearchSubtree),
    service_account_password: cdktf.stringToTerraform(struct!.serviceAccountPassword),
    service_account_username: cdktf.stringToTerraform(struct!.serviceAccountUsername),
    user_base: cdktf.stringToTerraform(struct!.userBase),
    user_role_name: cdktf.stringToTerraform(struct!.userRoleName),
    user_search_matching: cdktf.stringToTerraform(struct!.userSearchMatching),
    user_search_subtree: cdktf.booleanToTerraform(struct!.userSearchSubtree),
  }
}

export interface MqBrokerLogs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#audit MqBroker#audit}
  */
  readonly audit?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#general MqBroker#general}
  */
  readonly general?: boolean | cdktf.IResolvable;
}

function mqBrokerLogsToTerraform(struct?: MqBrokerLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    audit: cdktf.stringToTerraform(struct!.audit),
    general: cdktf.booleanToTerraform(struct!.general),
  }
}

export interface MqBrokerMaintenanceWindowStartTime {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#day_of_week MqBroker#day_of_week}
  */
  readonly dayOfWeek: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#time_of_day MqBroker#time_of_day}
  */
  readonly timeOfDay: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#time_zone MqBroker#time_zone}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#console_access MqBroker#console_access}
  */
  readonly consoleAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#groups MqBroker#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#password MqBroker#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#username MqBroker#username}
  */
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html aws_mq_broker}
*/
export class MqBroker extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_mq_broker";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html aws_mq_broker} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MqBrokerConfig
  */
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
    this._authenticationStrategy = config.authenticationStrategy;
    this._autoMinorVersionUpgrade = config.autoMinorVersionUpgrade;
    this._brokerName = config.brokerName;
    this._deploymentMode = config.deploymentMode;
    this._engineType = config.engineType;
    this._engineVersion = config.engineVersion;
    this._hostInstanceType = config.hostInstanceType;
    this._publiclyAccessible = config.publiclyAccessible;
    this._securityGroups = config.securityGroups;
    this._storageType = config.storageType;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._configuration = config.configuration;
    this._encryptionOptions = config.encryptionOptions;
    this._ldapServerMetadata = config.ldapServerMetadata;
    this._logs = config.logs;
    this._maintenanceWindowStartTime = config.maintenanceWindowStartTime;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_immediately - computed: false, optional: true, required: false
  private _applyImmediately?: boolean | cdktf.IResolvable;
  public get applyImmediately() {
    return this.getBooleanAttribute('apply_immediately');
  }
  public set applyImmediately(value: boolean | cdktf.IResolvable ) {
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

  // authentication_strategy - computed: true, optional: true, required: false
  private _authenticationStrategy?: string;
  public get authenticationStrategy() {
    return this.getStringAttribute('authentication_strategy');
  }
  public set authenticationStrategy(value: string) {
    this._authenticationStrategy = value;
  }
  public resetAuthenticationStrategy() {
    this._authenticationStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationStrategyInput() {
    return this._authenticationStrategy
  }

  // auto_minor_version_upgrade - computed: false, optional: true, required: false
  private _autoMinorVersionUpgrade?: boolean | cdktf.IResolvable;
  public get autoMinorVersionUpgrade() {
    return this.getBooleanAttribute('auto_minor_version_upgrade');
  }
  public set autoMinorVersionUpgrade(value: boolean | cdktf.IResolvable ) {
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
  private _publiclyAccessible?: boolean | cdktf.IResolvable;
  public get publiclyAccessible() {
    return this.getBooleanAttribute('publicly_accessible');
  }
  public set publiclyAccessible(value: boolean | cdktf.IResolvable ) {
    this._publiclyAccessible = value;
  }
  public resetPubliclyAccessible() {
    this._publiclyAccessible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publiclyAccessibleInput() {
    return this._publiclyAccessible
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[];
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[] ) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups
  }

  // storage_type - computed: true, optional: true, required: false
  private _storageType?: string;
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
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

  // ldap_server_metadata - computed: false, optional: true, required: false
  private _ldapServerMetadata?: MqBrokerLdapServerMetadata[];
  public get ldapServerMetadata() {
    return this.interpolationForAttribute('ldap_server_metadata') as any;
  }
  public set ldapServerMetadata(value: MqBrokerLdapServerMetadata[] ) {
    this._ldapServerMetadata = value;
  }
  public resetLdapServerMetadata() {
    this._ldapServerMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapServerMetadataInput() {
    return this._ldapServerMetadata
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
      authentication_strategy: cdktf.stringToTerraform(this._authenticationStrategy),
      auto_minor_version_upgrade: cdktf.booleanToTerraform(this._autoMinorVersionUpgrade),
      broker_name: cdktf.stringToTerraform(this._brokerName),
      deployment_mode: cdktf.stringToTerraform(this._deploymentMode),
      engine_type: cdktf.stringToTerraform(this._engineType),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      host_instance_type: cdktf.stringToTerraform(this._hostInstanceType),
      publicly_accessible: cdktf.booleanToTerraform(this._publiclyAccessible),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroups),
      storage_type: cdktf.stringToTerraform(this._storageType),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      configuration: cdktf.listMapper(mqBrokerConfigurationToTerraform)(this._configuration),
      encryption_options: cdktf.listMapper(mqBrokerEncryptionOptionsToTerraform)(this._encryptionOptions),
      ldap_server_metadata: cdktf.listMapper(mqBrokerLdapServerMetadataToTerraform)(this._ldapServerMetadata),
      logs: cdktf.listMapper(mqBrokerLogsToTerraform)(this._logs),
      maintenance_window_start_time: cdktf.listMapper(mqBrokerMaintenanceWindowStartTimeToTerraform)(this._maintenanceWindowStartTime),
      user: cdktf.listMapper(mqBrokerUserToTerraform)(this._user),
    };
  }
}
