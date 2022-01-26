// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Managed Message Queue
*/
export interface MqBrokerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#apply_immediately MqBroker#apply_immediately}
  */
  readonly applyImmediately?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#authentication_strategy MqBroker#authentication_strategy}
  */
  readonly authenticationStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#auto_minor_version_upgrade MqBroker#auto_minor_version_upgrade}
  */
  readonly autoMinorVersionUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#broker_name MqBroker#broker_name}
  */
  readonly brokerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#deployment_mode MqBroker#deployment_mode}
  */
  readonly deploymentMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#engine_type MqBroker#engine_type}
  */
  readonly engineType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#engine_version MqBroker#engine_version}
  */
  readonly engineVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#host_instance_type MqBroker#host_instance_type}
  */
  readonly hostInstanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#publicly_accessible MqBroker#publicly_accessible}
  */
  readonly publiclyAccessible?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#security_groups MqBroker#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#storage_type MqBroker#storage_type}
  */
  readonly storageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#subnet_ids MqBroker#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#tags MqBroker#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#tags_all MqBroker#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#configuration MqBroker#configuration}
  */
  readonly configuration?: MqBrokerConfiguration;
  /**
  * encryption_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#encryption_options MqBroker#encryption_options}
  */
  readonly encryptionOptions?: MqBrokerEncryptionOptions;
  /**
  * ldap_server_metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#ldap_server_metadata MqBroker#ldap_server_metadata}
  */
  readonly ldapServerMetadata?: MqBrokerLdapServerMetadata;
  /**
  * logs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#logs MqBroker#logs}
  */
  readonly logs?: MqBrokerLogs;
  /**
  * maintenance_window_start_time block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#maintenance_window_start_time MqBroker#maintenance_window_start_time}
  */
  readonly maintenanceWindowStartTime?: MqBrokerMaintenanceWindowStartTime;
  /**
  * user block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#user MqBroker#user}
  */
  readonly user: MqBrokerUser[] | cdktf.IResolvable;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#id MqBroker#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#revision MqBroker#revision}
  */
  readonly revision?: number;
}

export function mqBrokerConfigurationToTerraform(struct?: MqBrokerConfigurationOutputReference | MqBrokerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    revision: cdktf.numberToTerraform(struct!.revision),
  }
}

export class MqBrokerConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MqBrokerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MqBrokerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._revision = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._revision = value.revision;
    }
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // revision - computed: true, optional: true, required: false
  private _revision?: number; 
  public get revision() {
    return this.getNumberAttribute('revision');
  }
  public set revision(value: number) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }
}
export interface MqBrokerEncryptionOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#kms_key_id MqBroker#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#use_aws_owned_key MqBroker#use_aws_owned_key}
  */
  readonly useAwsOwnedKey?: boolean | cdktf.IResolvable;
}

export function mqBrokerEncryptionOptionsToTerraform(struct?: MqBrokerEncryptionOptionsOutputReference | MqBrokerEncryptionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    use_aws_owned_key: cdktf.booleanToTerraform(struct!.useAwsOwnedKey),
  }
}

export class MqBrokerEncryptionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MqBrokerEncryptionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._useAwsOwnedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAwsOwnedKey = this._useAwsOwnedKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MqBrokerEncryptionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyId = undefined;
      this._useAwsOwnedKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyId = value.kmsKeyId;
      this._useAwsOwnedKey = value.useAwsOwnedKey;
    }
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // use_aws_owned_key - computed: false, optional: true, required: false
  private _useAwsOwnedKey?: boolean | cdktf.IResolvable; 
  public get useAwsOwnedKey() {
    return this.getBooleanAttribute('use_aws_owned_key');
  }
  public set useAwsOwnedKey(value: boolean | cdktf.IResolvable) {
    this._useAwsOwnedKey = value;
  }
  public resetUseAwsOwnedKey() {
    this._useAwsOwnedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAwsOwnedKeyInput() {
    return this._useAwsOwnedKey;
  }
}
export interface MqBrokerLdapServerMetadata {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#hosts MqBroker#hosts}
  */
  readonly hosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#role_base MqBroker#role_base}
  */
  readonly roleBase?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#role_name MqBroker#role_name}
  */
  readonly roleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#role_search_matching MqBroker#role_search_matching}
  */
  readonly roleSearchMatching?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#role_search_subtree MqBroker#role_search_subtree}
  */
  readonly roleSearchSubtree?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#service_account_password MqBroker#service_account_password}
  */
  readonly serviceAccountPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#service_account_username MqBroker#service_account_username}
  */
  readonly serviceAccountUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#user_base MqBroker#user_base}
  */
  readonly userBase?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#user_role_name MqBroker#user_role_name}
  */
  readonly userRoleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#user_search_matching MqBroker#user_search_matching}
  */
  readonly userSearchMatching?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#user_search_subtree MqBroker#user_search_subtree}
  */
  readonly userSearchSubtree?: boolean | cdktf.IResolvable;
}

export function mqBrokerLdapServerMetadataToTerraform(struct?: MqBrokerLdapServerMetadataOutputReference | MqBrokerLdapServerMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MqBrokerLdapServerMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._roleBase !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleBase = this._roleBase;
    }
    if (this._roleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleName = this._roleName;
    }
    if (this._roleSearchMatching !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleSearchMatching = this._roleSearchMatching;
    }
    if (this._roleSearchSubtree !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleSearchSubtree = this._roleSearchSubtree;
    }
    if (this._serviceAccountPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountPassword = this._serviceAccountPassword;
    }
    if (this._serviceAccountUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountUsername = this._serviceAccountUsername;
    }
    if (this._userBase !== undefined) {
      hasAnyValues = true;
      internalValueResult.userBase = this._userBase;
    }
    if (this._userRoleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userRoleName = this._userRoleName;
    }
    if (this._userSearchMatching !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSearchMatching = this._userSearchMatching;
    }
    if (this._userSearchSubtree !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSearchSubtree = this._userSearchSubtree;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MqBrokerLdapServerMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hosts = undefined;
      this._roleBase = undefined;
      this._roleName = undefined;
      this._roleSearchMatching = undefined;
      this._roleSearchSubtree = undefined;
      this._serviceAccountPassword = undefined;
      this._serviceAccountUsername = undefined;
      this._userBase = undefined;
      this._userRoleName = undefined;
      this._userSearchMatching = undefined;
      this._userSearchSubtree = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hosts = value.hosts;
      this._roleBase = value.roleBase;
      this._roleName = value.roleName;
      this._roleSearchMatching = value.roleSearchMatching;
      this._roleSearchSubtree = value.roleSearchSubtree;
      this._serviceAccountPassword = value.serviceAccountPassword;
      this._serviceAccountUsername = value.serviceAccountUsername;
      this._userBase = value.userBase;
      this._userRoleName = value.userRoleName;
      this._userSearchMatching = value.userSearchMatching;
      this._userSearchSubtree = value.userSearchSubtree;
    }
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // role_base - computed: false, optional: true, required: false
  private _roleBase?: string; 
  public get roleBase() {
    return this.getStringAttribute('role_base');
  }
  public set roleBase(value: string) {
    this._roleBase = value;
  }
  public resetRoleBase() {
    this._roleBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleBaseInput() {
    return this._roleBase;
  }

  // role_name - computed: false, optional: true, required: false
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  public resetRoleName() {
    this._roleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // role_search_matching - computed: false, optional: true, required: false
  private _roleSearchMatching?: string; 
  public get roleSearchMatching() {
    return this.getStringAttribute('role_search_matching');
  }
  public set roleSearchMatching(value: string) {
    this._roleSearchMatching = value;
  }
  public resetRoleSearchMatching() {
    this._roleSearchMatching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleSearchMatchingInput() {
    return this._roleSearchMatching;
  }

  // role_search_subtree - computed: false, optional: true, required: false
  private _roleSearchSubtree?: boolean | cdktf.IResolvable; 
  public get roleSearchSubtree() {
    return this.getBooleanAttribute('role_search_subtree');
  }
  public set roleSearchSubtree(value: boolean | cdktf.IResolvable) {
    this._roleSearchSubtree = value;
  }
  public resetRoleSearchSubtree() {
    this._roleSearchSubtree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleSearchSubtreeInput() {
    return this._roleSearchSubtree;
  }

  // service_account_password - computed: false, optional: true, required: false
  private _serviceAccountPassword?: string; 
  public get serviceAccountPassword() {
    return this.getStringAttribute('service_account_password');
  }
  public set serviceAccountPassword(value: string) {
    this._serviceAccountPassword = value;
  }
  public resetServiceAccountPassword() {
    this._serviceAccountPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountPasswordInput() {
    return this._serviceAccountPassword;
  }

  // service_account_username - computed: false, optional: true, required: false
  private _serviceAccountUsername?: string; 
  public get serviceAccountUsername() {
    return this.getStringAttribute('service_account_username');
  }
  public set serviceAccountUsername(value: string) {
    this._serviceAccountUsername = value;
  }
  public resetServiceAccountUsername() {
    this._serviceAccountUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountUsernameInput() {
    return this._serviceAccountUsername;
  }

  // user_base - computed: false, optional: true, required: false
  private _userBase?: string; 
  public get userBase() {
    return this.getStringAttribute('user_base');
  }
  public set userBase(value: string) {
    this._userBase = value;
  }
  public resetUserBase() {
    this._userBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userBaseInput() {
    return this._userBase;
  }

  // user_role_name - computed: false, optional: true, required: false
  private _userRoleName?: string; 
  public get userRoleName() {
    return this.getStringAttribute('user_role_name');
  }
  public set userRoleName(value: string) {
    this._userRoleName = value;
  }
  public resetUserRoleName() {
    this._userRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userRoleNameInput() {
    return this._userRoleName;
  }

  // user_search_matching - computed: false, optional: true, required: false
  private _userSearchMatching?: string; 
  public get userSearchMatching() {
    return this.getStringAttribute('user_search_matching');
  }
  public set userSearchMatching(value: string) {
    this._userSearchMatching = value;
  }
  public resetUserSearchMatching() {
    this._userSearchMatching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSearchMatchingInput() {
    return this._userSearchMatching;
  }

  // user_search_subtree - computed: false, optional: true, required: false
  private _userSearchSubtree?: boolean | cdktf.IResolvable; 
  public get userSearchSubtree() {
    return this.getBooleanAttribute('user_search_subtree');
  }
  public set userSearchSubtree(value: boolean | cdktf.IResolvable) {
    this._userSearchSubtree = value;
  }
  public resetUserSearchSubtree() {
    this._userSearchSubtree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSearchSubtreeInput() {
    return this._userSearchSubtree;
  }
}
export interface MqBrokerLogs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#audit MqBroker#audit}
  */
  readonly audit?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#general MqBroker#general}
  */
  readonly general?: boolean | cdktf.IResolvable;
}

export function mqBrokerLogsToTerraform(struct?: MqBrokerLogsOutputReference | MqBrokerLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit: cdktf.stringToTerraform(struct!.audit),
    general: cdktf.booleanToTerraform(struct!.general),
  }
}

export class MqBrokerLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MqBrokerLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audit !== undefined) {
      hasAnyValues = true;
      internalValueResult.audit = this._audit;
    }
    if (this._general !== undefined) {
      hasAnyValues = true;
      internalValueResult.general = this._general;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MqBrokerLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audit = undefined;
      this._general = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audit = value.audit;
      this._general = value.general;
    }
  }

  // audit - computed: false, optional: true, required: false
  private _audit?: string; 
  public get audit() {
    return this.getStringAttribute('audit');
  }
  public set audit(value: string) {
    this._audit = value;
  }
  public resetAudit() {
    this._audit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditInput() {
    return this._audit;
  }

  // general - computed: false, optional: true, required: false
  private _general?: boolean | cdktf.IResolvable; 
  public get general() {
    return this.getBooleanAttribute('general');
  }
  public set general(value: boolean | cdktf.IResolvable) {
    this._general = value;
  }
  public resetGeneral() {
    this._general = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generalInput() {
    return this._general;
  }
}
export interface MqBrokerMaintenanceWindowStartTime {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#day_of_week MqBroker#day_of_week}
  */
  readonly dayOfWeek: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#time_of_day MqBroker#time_of_day}
  */
  readonly timeOfDay: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#time_zone MqBroker#time_zone}
  */
  readonly timeZone: string;
}

export function mqBrokerMaintenanceWindowStartTimeToTerraform(struct?: MqBrokerMaintenanceWindowStartTimeOutputReference | MqBrokerMaintenanceWindowStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MqBrokerMaintenanceWindowStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._timeOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOfDay = this._timeOfDay;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MqBrokerMaintenanceWindowStartTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfWeek = undefined;
      this._timeOfDay = undefined;
      this._timeZone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfWeek = value.dayOfWeek;
      this._timeOfDay = value.timeOfDay;
      this._timeZone = value.timeZone;
    }
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
    return this._dayOfWeek;
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
    return this._timeOfDay;
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
    return this._timeZone;
  }
}
export interface MqBrokerUser {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#console_access MqBroker#console_access}
  */
  readonly consoleAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#groups MqBroker#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#password MqBroker#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#username MqBroker#username}
  */
  readonly username: string;
}

export function mqBrokerUserToTerraform(struct?: MqBrokerUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/mq_broker aws_mq_broker}
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
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/mq_broker aws_mq_broker} Resource
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
    this._configuration.internalValue = config.configuration;
    this._encryptionOptions.internalValue = config.encryptionOptions;
    this._ldapServerMetadata.internalValue = config.ldapServerMetadata;
    this._logs.internalValue = config.logs;
    this._maintenanceWindowStartTime.internalValue = config.maintenanceWindowStartTime;
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
  public set applyImmediately(value: boolean | cdktf.IResolvable) {
    this._applyImmediately = value;
  }
  public resetApplyImmediately() {
    this._applyImmediately = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyImmediatelyInput() {
    return this._applyImmediately;
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
    return this._authenticationStrategy;
  }

  // auto_minor_version_upgrade - computed: false, optional: true, required: false
  private _autoMinorVersionUpgrade?: boolean | cdktf.IResolvable; 
  public get autoMinorVersionUpgrade() {
    return this.getBooleanAttribute('auto_minor_version_upgrade');
  }
  public set autoMinorVersionUpgrade(value: boolean | cdktf.IResolvable) {
    this._autoMinorVersionUpgrade = value;
  }
  public resetAutoMinorVersionUpgrade() {
    this._autoMinorVersionUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMinorVersionUpgradeInput() {
    return this._autoMinorVersionUpgrade;
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
    return this._brokerName;
  }

  // deployment_mode - computed: false, optional: true, required: false
  private _deploymentMode?: string; 
  public get deploymentMode() {
    return this.getStringAttribute('deployment_mode');
  }
  public set deploymentMode(value: string) {
    this._deploymentMode = value;
  }
  public resetDeploymentMode() {
    this._deploymentMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentModeInput() {
    return this._deploymentMode;
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
    return this._engineType;
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
    return this._engineVersion;
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
    return this._hostInstanceType;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instances - computed: true, optional: false, required: false
  public instances(index: string) {
    return new MqBrokerInstances(this, 'instances', index, false);
  }

  // publicly_accessible - computed: false, optional: true, required: false
  private _publiclyAccessible?: boolean | cdktf.IResolvable; 
  public get publiclyAccessible() {
    return this.getBooleanAttribute('publicly_accessible');
  }
  public set publiclyAccessible(value: boolean | cdktf.IResolvable) {
    this._publiclyAccessible = value;
  }
  public resetPubliclyAccessible() {
    this._publiclyAccessible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publiclyAccessibleInput() {
    return this._publiclyAccessible;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
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
    return this._storageType;
  }

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // tags - computed: false, optional: true, required: false
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new MqBrokerConfigurationOutputReference(this, "configuration", true);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: MqBrokerConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // encryption_options - computed: false, optional: true, required: false
  private _encryptionOptions = new MqBrokerEncryptionOptionsOutputReference(this, "encryption_options", true);
  public get encryptionOptions() {
    return this._encryptionOptions;
  }
  public putEncryptionOptions(value: MqBrokerEncryptionOptions) {
    this._encryptionOptions.internalValue = value;
  }
  public resetEncryptionOptions() {
    this._encryptionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionOptionsInput() {
    return this._encryptionOptions.internalValue;
  }

  // ldap_server_metadata - computed: false, optional: true, required: false
  private _ldapServerMetadata = new MqBrokerLdapServerMetadataOutputReference(this, "ldap_server_metadata", true);
  public get ldapServerMetadata() {
    return this._ldapServerMetadata;
  }
  public putLdapServerMetadata(value: MqBrokerLdapServerMetadata) {
    this._ldapServerMetadata.internalValue = value;
  }
  public resetLdapServerMetadata() {
    this._ldapServerMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapServerMetadataInput() {
    return this._ldapServerMetadata.internalValue;
  }

  // logs - computed: false, optional: true, required: false
  private _logs = new MqBrokerLogsOutputReference(this, "logs", true);
  public get logs() {
    return this._logs;
  }
  public putLogs(value: MqBrokerLogs) {
    this._logs.internalValue = value;
  }
  public resetLogs() {
    this._logs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsInput() {
    return this._logs.internalValue;
  }

  // maintenance_window_start_time - computed: false, optional: true, required: false
  private _maintenanceWindowStartTime = new MqBrokerMaintenanceWindowStartTimeOutputReference(this, "maintenance_window_start_time", true);
  public get maintenanceWindowStartTime() {
    return this._maintenanceWindowStartTime;
  }
  public putMaintenanceWindowStartTime(value: MqBrokerMaintenanceWindowStartTime) {
    this._maintenanceWindowStartTime.internalValue = value;
  }
  public resetMaintenanceWindowStartTime() {
    this._maintenanceWindowStartTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowStartTimeInput() {
    return this._maintenanceWindowStartTime.internalValue;
  }

  // user - computed: false, optional: false, required: true
  private _user?: MqBrokerUser[] | cdktf.IResolvable; 
  public get user() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('user')));
  }
  public set user(value: MqBrokerUser[] | cdktf.IResolvable) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
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
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      configuration: mqBrokerConfigurationToTerraform(this._configuration.internalValue),
      encryption_options: mqBrokerEncryptionOptionsToTerraform(this._encryptionOptions.internalValue),
      ldap_server_metadata: mqBrokerLdapServerMetadataToTerraform(this._ldapServerMetadata.internalValue),
      logs: mqBrokerLogsToTerraform(this._logs.internalValue),
      maintenance_window_start_time: mqBrokerMaintenanceWindowStartTimeToTerraform(this._maintenanceWindowStartTime.internalValue),
      user: cdktf.listMapper(mqBrokerUserToTerraform)(this._user),
    };
  }
}
