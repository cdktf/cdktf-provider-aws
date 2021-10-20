// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Managed Message Queue
*/
export namespace MQ {
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
    readonly configuration?: MqBrokerConfiguration;
    /**
    * encryption_options block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#encryption_options MqBroker#encryption_options}
    */
    readonly encryptionOptions?: MqBrokerEncryptionOptions;
    /**
    * ldap_server_metadata block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#ldap_server_metadata MqBroker#ldap_server_metadata}
    */
    readonly ldapServerMetadata?: MqBrokerLdapServerMetadata;
    /**
    * logs block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#logs MqBroker#logs}
    */
    readonly logs?: MqBrokerLogs;
    /**
    * maintenance_window_start_time block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#maintenance_window_start_time MqBroker#maintenance_window_start_time}
    */
    readonly maintenanceWindowStartTime?: MqBrokerMaintenanceWindowStartTime;
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

  function mqBrokerConfigurationToTerraform(struct?: MqBrokerConfigurationOutputReference | MqBrokerConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      revision: cdktf.numberToTerraform(struct!.revision),
    }
  }

  export class MqBrokerConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // revision - computed: true, optional: true, required: false
    private _revision?: number | undefined; 
    public get revision() {
      return this.getNumberAttribute('revision');
    }
    public set revision(value: number | undefined) {
      this._revision = value;
    }
    public resetRevision() {
      this._revision = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get revisionInput() {
      return this._revision
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

  function mqBrokerEncryptionOptionsToTerraform(struct?: MqBrokerEncryptionOptionsOutputReference | MqBrokerEncryptionOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
      use_aws_owned_key: cdktf.booleanToTerraform(struct!.useAwsOwnedKey),
    }
  }

  export class MqBrokerEncryptionOptionsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string | undefined; 
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string | undefined) {
      this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
      this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
      return this._kmsKeyId
    }

    // use_aws_owned_key - computed: false, optional: true, required: false
    private _useAwsOwnedKey?: boolean | cdktf.IResolvable | undefined; 
    public get useAwsOwnedKey() {
      return this.getBooleanAttribute('use_aws_owned_key') as any;
    }
    public set useAwsOwnedKey(value: boolean | cdktf.IResolvable | undefined) {
      this._useAwsOwnedKey = value;
    }
    public resetUseAwsOwnedKey() {
      this._useAwsOwnedKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useAwsOwnedKeyInput() {
      return this._useAwsOwnedKey
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

  function mqBrokerLdapServerMetadataToTerraform(struct?: MqBrokerLdapServerMetadataOutputReference | MqBrokerLdapServerMetadata): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
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

  export class MqBrokerLdapServerMetadataOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // hosts - computed: false, optional: true, required: false
    private _hosts?: string[] | undefined; 
    public get hosts() {
      return this.getListAttribute('hosts');
    }
    public set hosts(value: string[] | undefined) {
      this._hosts = value;
    }
    public resetHosts() {
      this._hosts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostsInput() {
      return this._hosts
    }

    // role_base - computed: false, optional: true, required: false
    private _roleBase?: string | undefined; 
    public get roleBase() {
      return this.getStringAttribute('role_base');
    }
    public set roleBase(value: string | undefined) {
      this._roleBase = value;
    }
    public resetRoleBase() {
      this._roleBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleBaseInput() {
      return this._roleBase
    }

    // role_name - computed: false, optional: true, required: false
    private _roleName?: string | undefined; 
    public get roleName() {
      return this.getStringAttribute('role_name');
    }
    public set roleName(value: string | undefined) {
      this._roleName = value;
    }
    public resetRoleName() {
      this._roleName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleNameInput() {
      return this._roleName
    }

    // role_search_matching - computed: false, optional: true, required: false
    private _roleSearchMatching?: string | undefined; 
    public get roleSearchMatching() {
      return this.getStringAttribute('role_search_matching');
    }
    public set roleSearchMatching(value: string | undefined) {
      this._roleSearchMatching = value;
    }
    public resetRoleSearchMatching() {
      this._roleSearchMatching = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleSearchMatchingInput() {
      return this._roleSearchMatching
    }

    // role_search_subtree - computed: false, optional: true, required: false
    private _roleSearchSubtree?: boolean | cdktf.IResolvable | undefined; 
    public get roleSearchSubtree() {
      return this.getBooleanAttribute('role_search_subtree') as any;
    }
    public set roleSearchSubtree(value: boolean | cdktf.IResolvable | undefined) {
      this._roleSearchSubtree = value;
    }
    public resetRoleSearchSubtree() {
      this._roleSearchSubtree = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleSearchSubtreeInput() {
      return this._roleSearchSubtree
    }

    // service_account_password - computed: false, optional: true, required: false
    private _serviceAccountPassword?: string | undefined; 
    public get serviceAccountPassword() {
      return this.getStringAttribute('service_account_password');
    }
    public set serviceAccountPassword(value: string | undefined) {
      this._serviceAccountPassword = value;
    }
    public resetServiceAccountPassword() {
      this._serviceAccountPassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceAccountPasswordInput() {
      return this._serviceAccountPassword
    }

    // service_account_username - computed: false, optional: true, required: false
    private _serviceAccountUsername?: string | undefined; 
    public get serviceAccountUsername() {
      return this.getStringAttribute('service_account_username');
    }
    public set serviceAccountUsername(value: string | undefined) {
      this._serviceAccountUsername = value;
    }
    public resetServiceAccountUsername() {
      this._serviceAccountUsername = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceAccountUsernameInput() {
      return this._serviceAccountUsername
    }

    // user_base - computed: false, optional: true, required: false
    private _userBase?: string | undefined; 
    public get userBase() {
      return this.getStringAttribute('user_base');
    }
    public set userBase(value: string | undefined) {
      this._userBase = value;
    }
    public resetUserBase() {
      this._userBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userBaseInput() {
      return this._userBase
    }

    // user_role_name - computed: false, optional: true, required: false
    private _userRoleName?: string | undefined; 
    public get userRoleName() {
      return this.getStringAttribute('user_role_name');
    }
    public set userRoleName(value: string | undefined) {
      this._userRoleName = value;
    }
    public resetUserRoleName() {
      this._userRoleName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userRoleNameInput() {
      return this._userRoleName
    }

    // user_search_matching - computed: false, optional: true, required: false
    private _userSearchMatching?: string | undefined; 
    public get userSearchMatching() {
      return this.getStringAttribute('user_search_matching');
    }
    public set userSearchMatching(value: string | undefined) {
      this._userSearchMatching = value;
    }
    public resetUserSearchMatching() {
      this._userSearchMatching = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userSearchMatchingInput() {
      return this._userSearchMatching
    }

    // user_search_subtree - computed: false, optional: true, required: false
    private _userSearchSubtree?: boolean | cdktf.IResolvable | undefined; 
    public get userSearchSubtree() {
      return this.getBooleanAttribute('user_search_subtree') as any;
    }
    public set userSearchSubtree(value: boolean | cdktf.IResolvable | undefined) {
      this._userSearchSubtree = value;
    }
    public resetUserSearchSubtree() {
      this._userSearchSubtree = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userSearchSubtreeInput() {
      return this._userSearchSubtree
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

  function mqBrokerLogsToTerraform(struct?: MqBrokerLogsOutputReference | MqBrokerLogs): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      audit: cdktf.stringToTerraform(struct!.audit),
      general: cdktf.booleanToTerraform(struct!.general),
    }
  }

  export class MqBrokerLogsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // audit - computed: false, optional: true, required: false
    private _audit?: string | undefined; 
    public get audit() {
      return this.getStringAttribute('audit');
    }
    public set audit(value: string | undefined) {
      this._audit = value;
    }
    public resetAudit() {
      this._audit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get auditInput() {
      return this._audit
    }

    // general - computed: false, optional: true, required: false
    private _general?: boolean | cdktf.IResolvable | undefined; 
    public get general() {
      return this.getBooleanAttribute('general') as any;
    }
    public set general(value: boolean | cdktf.IResolvable | undefined) {
      this._general = value;
    }
    public resetGeneral() {
      this._general = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get generalInput() {
      return this._general
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

  function mqBrokerMaintenanceWindowStartTimeToTerraform(struct?: MqBrokerMaintenanceWindowStartTimeOutputReference | MqBrokerMaintenanceWindowStartTime): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
      time_of_day: cdktf.stringToTerraform(struct!.timeOfDay),
      time_zone: cdktf.stringToTerraform(struct!.timeZone),
    }
  }

  export class MqBrokerMaintenanceWindowStartTimeOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // day_of_week - computed: false, optional: false, required: true
    private _dayOfWeek?: string; 
    public get dayOfWeek() {
      return this.getStringAttribute('day_of_week');
    }
    public set dayOfWeek(value: string) {
      this._dayOfWeek = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dayOfWeekInput() {
      return this._dayOfWeek
    }

    // time_of_day - computed: false, optional: false, required: true
    private _timeOfDay?: string; 
    public get timeOfDay() {
      return this.getStringAttribute('time_of_day');
    }
    public set timeOfDay(value: string) {
      this._timeOfDay = value;
    }
    // Temporarily expose input value. Use with caution.
    public get timeOfDayInput() {
      return this._timeOfDay
    }

    // time_zone - computed: false, optional: false, required: true
    private _timeZone?: string; 
    public get timeZone() {
      return this.getStringAttribute('time_zone');
    }
    public set timeZone(value: string) {
      this._timeZone = value;
    }
    // Temporarily expose input value. Use with caution.
    public get timeZoneInput() {
      return this._timeZone
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
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
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
    private _applyImmediately?: boolean | cdktf.IResolvable | undefined; 
    public get applyImmediately() {
      return this.getBooleanAttribute('apply_immediately') as any;
    }
    public set applyImmediately(value: boolean | cdktf.IResolvable | undefined) {
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
    private _authenticationStrategy?: string | undefined; 
    public get authenticationStrategy() {
      return this.getStringAttribute('authentication_strategy');
    }
    public set authenticationStrategy(value: string | undefined) {
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
    private _autoMinorVersionUpgrade?: boolean | cdktf.IResolvable | undefined; 
    public get autoMinorVersionUpgrade() {
      return this.getBooleanAttribute('auto_minor_version_upgrade') as any;
    }
    public set autoMinorVersionUpgrade(value: boolean | cdktf.IResolvable | undefined) {
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
    private _brokerName?: string; 
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
    private _deploymentMode?: string | undefined; 
    public get deploymentMode() {
      return this.getStringAttribute('deployment_mode');
    }
    public set deploymentMode(value: string | undefined) {
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
    private _engineType?: string; 
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
    private _engineVersion?: string; 
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
    private _hostInstanceType?: string; 
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
    private _publiclyAccessible?: boolean | cdktf.IResolvable | undefined; 
    public get publiclyAccessible() {
      return this.getBooleanAttribute('publicly_accessible') as any;
    }
    public set publiclyAccessible(value: boolean | cdktf.IResolvable | undefined) {
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
    private _securityGroups?: string[] | undefined; 
    public get securityGroups() {
      return this.getListAttribute('security_groups');
    }
    public set securityGroups(value: string[] | undefined) {
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
    private _storageType?: string | undefined; 
    public get storageType() {
      return this.getStringAttribute('storage_type');
    }
    public set storageType(value: string | undefined) {
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
    private _subnetIds?: string[] | undefined; 
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[] | undefined) {
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _configuration?: MqBrokerConfiguration | undefined; 
    private __configurationOutput = new MqBrokerConfigurationOutputReference(this as any, "configuration", true);
    public get configuration() {
      return this.__configurationOutput;
    }
    public putConfiguration(value: MqBrokerConfiguration | undefined) {
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
    private _encryptionOptions?: MqBrokerEncryptionOptions | undefined; 
    private __encryptionOptionsOutput = new MqBrokerEncryptionOptionsOutputReference(this as any, "encryption_options", true);
    public get encryptionOptions() {
      return this.__encryptionOptionsOutput;
    }
    public putEncryptionOptions(value: MqBrokerEncryptionOptions | undefined) {
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
    private _ldapServerMetadata?: MqBrokerLdapServerMetadata | undefined; 
    private __ldapServerMetadataOutput = new MqBrokerLdapServerMetadataOutputReference(this as any, "ldap_server_metadata", true);
    public get ldapServerMetadata() {
      return this.__ldapServerMetadataOutput;
    }
    public putLdapServerMetadata(value: MqBrokerLdapServerMetadata | undefined) {
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
    private _logs?: MqBrokerLogs | undefined; 
    private __logsOutput = new MqBrokerLogsOutputReference(this as any, "logs", true);
    public get logs() {
      return this.__logsOutput;
    }
    public putLogs(value: MqBrokerLogs | undefined) {
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
    private _maintenanceWindowStartTime?: MqBrokerMaintenanceWindowStartTime | undefined; 
    private __maintenanceWindowStartTimeOutput = new MqBrokerMaintenanceWindowStartTimeOutputReference(this as any, "maintenance_window_start_time", true);
    public get maintenanceWindowStartTime() {
      return this.__maintenanceWindowStartTimeOutput;
    }
    public putMaintenanceWindowStartTime(value: MqBrokerMaintenanceWindowStartTime | undefined) {
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
    private _user?: MqBrokerUser[]; 
    public get user() {
      // Getting the computed value is not yet implemented
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
        configuration: mqBrokerConfigurationToTerraform(this._configuration),
        encryption_options: mqBrokerEncryptionOptionsToTerraform(this._encryptionOptions),
        ldap_server_metadata: mqBrokerLdapServerMetadataToTerraform(this._ldapServerMetadata),
        logs: mqBrokerLogsToTerraform(this._logs),
        maintenance_window_start_time: mqBrokerMaintenanceWindowStartTimeToTerraform(this._maintenanceWindowStartTime),
        user: cdktf.listMapper(mqBrokerUserToTerraform)(this._user),
      };
    }
  }
  export interface MqConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_configuration.html#authentication_strategy MqConfiguration#authentication_strategy}
    */
    readonly authenticationStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_configuration.html#data MqConfiguration#data}
    */
    readonly data: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_configuration.html#description MqConfiguration#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_configuration.html#engine_type MqConfiguration#engine_type}
    */
    readonly engineType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_configuration.html#engine_version MqConfiguration#engine_version}
    */
    readonly engineVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_configuration.html#name MqConfiguration#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_configuration.html#tags MqConfiguration#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_configuration.html#tags_all MqConfiguration#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/mq_configuration.html aws_mq_configuration}
  */
  export class MqConfiguration extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_mq_configuration";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/mq_configuration.html aws_mq_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MqConfigurationConfig
    */
    public constructor(scope: Construct, id: string, config: MqConfigurationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_mq_configuration',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._authenticationStrategy = config.authenticationStrategy;
      this._data = config.data;
      this._description = config.description;
      this._engineType = config.engineType;
      this._engineVersion = config.engineVersion;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // authentication_strategy - computed: true, optional: true, required: false
    private _authenticationStrategy?: string | undefined; 
    public get authenticationStrategy() {
      return this.getStringAttribute('authentication_strategy');
    }
    public set authenticationStrategy(value: string | undefined) {
      this._authenticationStrategy = value;
    }
    public resetAuthenticationStrategy() {
      this._authenticationStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticationStrategyInput() {
      return this._authenticationStrategy
    }

    // data - computed: false, optional: false, required: true
    private _data?: string; 
    public get data() {
      return this.getStringAttribute('data');
    }
    public set data(value: string) {
      this._data = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dataInput() {
      return this._data
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // engine_type - computed: false, optional: false, required: true
    private _engineType?: string; 
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
    private _engineVersion?: string; 
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

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // latest_revision - computed: true, optional: false, required: false
    public get latestRevision() {
      return this.getNumberAttribute('latest_revision');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        authentication_strategy: cdktf.stringToTerraform(this._authenticationStrategy),
        data: cdktf.stringToTerraform(this._data),
        description: cdktf.stringToTerraform(this._description),
        engine_type: cdktf.stringToTerraform(this._engineType),
        engine_version: cdktf.stringToTerraform(this._engineVersion),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface DataAwsMqBrokerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/mq_broker.html#broker_id DataAwsMqBroker#broker_id}
    */
    readonly brokerId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/mq_broker.html#broker_name DataAwsMqBroker#broker_name}
    */
    readonly brokerName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/mq_broker.html#tags DataAwsMqBroker#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
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
      return this.getBooleanAttribute('use_aws_owned_key') as any;
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
      return this.getBooleanAttribute('role_search_subtree') as any;
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
      return this.getBooleanAttribute('user_search_subtree') as any;
    }
  }
  export class DataAwsMqBrokerLogs extends cdktf.ComplexComputedList {

    // audit - computed: true, optional: false, required: false
    public get audit() {
      return this.getStringAttribute('audit');
    }

    // general - computed: true, optional: false, required: false
    public get general() {
      return this.getBooleanAttribute('general') as any;
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
      return this.getBooleanAttribute('console_access') as any;
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

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/mq_broker.html aws_mq_broker}
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
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/mq_broker.html aws_mq_broker} Data Source
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
      return this.getBooleanAttribute('auto_minor_version_upgrade') as any;
    }

    // broker_id - computed: true, optional: true, required: false
    private _brokerId?: string | undefined; 
    public get brokerId() {
      return this.getStringAttribute('broker_id');
    }
    public set brokerId(value: string | undefined) {
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
    private _brokerName?: string | undefined; 
    public get brokerName() {
      return this.getStringAttribute('broker_name');
    }
    public set brokerName(value: string | undefined) {
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

    // ldap_server_metadata - computed: true, optional: false, required: false
    public ldapServerMetadata(index: string) {
      return new DataAwsMqBrokerLdapServerMetadata(this, 'ldap_server_metadata', index);
    }

    // logs - computed: true, optional: false, required: false
    public logs(index: string) {
      return new DataAwsMqBrokerLogs(this, 'logs', index);
    }

    // maintenance_window_start_time - computed: true, optional: false, required: false
    public maintenanceWindowStartTime(index: string) {
      return new DataAwsMqBrokerMaintenanceWindowStartTime(this, 'maintenance_window_start_time', index);
    }

    // publicly_accessible - computed: true, optional: false, required: false
    public get publiclyAccessible() {
      return this.getBooleanAttribute('publicly_accessible') as any;
    }

    // security_groups - computed: true, optional: false, required: false
    public get securityGroups() {
      return this.getListAttribute('security_groups');
    }

    // storage_type - computed: true, optional: false, required: false
    public get storageType() {
      return this.getStringAttribute('storage_type');
    }

    // subnet_ids - computed: true, optional: false, required: false
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        broker_id: cdktf.stringToTerraform(this._brokerId),
        broker_name: cdktf.stringToTerraform(this._brokerName),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
}
