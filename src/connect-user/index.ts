// https://www.terraform.io/docs/providers/aws/r/connect_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#directory_user_id ConnectUser#directory_user_id}
  */
  readonly directoryUserId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#hierarchy_group_id ConnectUser#hierarchy_group_id}
  */
  readonly hierarchyGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#id ConnectUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#instance_id ConnectUser#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#name ConnectUser#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#password ConnectUser#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#routing_profile_id ConnectUser#routing_profile_id}
  */
  readonly routingProfileId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#security_profile_ids ConnectUser#security_profile_ids}
  */
  readonly securityProfileIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#tags ConnectUser#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#tags_all ConnectUser#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * identity_info block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#identity_info ConnectUser#identity_info}
  */
  readonly identityInfo?: ConnectUserIdentityInfo;
  /**
  * phone_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#phone_config ConnectUser#phone_config}
  */
  readonly phoneConfig: ConnectUserPhoneConfig;
}
export interface ConnectUserIdentityInfo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#email ConnectUser#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#first_name ConnectUser#first_name}
  */
  readonly firstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#last_name ConnectUser#last_name}
  */
  readonly lastName?: string;
}

export function connectUserIdentityInfoToTerraform(struct?: ConnectUserIdentityInfoOutputReference | ConnectUserIdentityInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    first_name: cdktf.stringToTerraform(struct!.firstName),
    last_name: cdktf.stringToTerraform(struct!.lastName),
  }
}

export class ConnectUserIdentityInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectUserIdentityInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._firstName !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstName = this._firstName;
    }
    if (this._lastName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastName = this._lastName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectUserIdentityInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._email = undefined;
      this._firstName = undefined;
      this._lastName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._email = value.email;
      this._firstName = value.firstName;
      this._lastName = value.lastName;
    }
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // first_name - computed: false, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // last_name - computed: false, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }
}
export interface ConnectUserPhoneConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#after_contact_work_time_limit ConnectUser#after_contact_work_time_limit}
  */
  readonly afterContactWorkTimeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#auto_accept ConnectUser#auto_accept}
  */
  readonly autoAccept?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#desk_phone_number ConnectUser#desk_phone_number}
  */
  readonly deskPhoneNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#phone_type ConnectUser#phone_type}
  */
  readonly phoneType: string;
}

export function connectUserPhoneConfigToTerraform(struct?: ConnectUserPhoneConfigOutputReference | ConnectUserPhoneConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after_contact_work_time_limit: cdktf.numberToTerraform(struct!.afterContactWorkTimeLimit),
    auto_accept: cdktf.booleanToTerraform(struct!.autoAccept),
    desk_phone_number: cdktf.stringToTerraform(struct!.deskPhoneNumber),
    phone_type: cdktf.stringToTerraform(struct!.phoneType),
  }
}

export class ConnectUserPhoneConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectUserPhoneConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._afterContactWorkTimeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.afterContactWorkTimeLimit = this._afterContactWorkTimeLimit;
    }
    if (this._autoAccept !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoAccept = this._autoAccept;
    }
    if (this._deskPhoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.deskPhoneNumber = this._deskPhoneNumber;
    }
    if (this._phoneType !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneType = this._phoneType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectUserPhoneConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._afterContactWorkTimeLimit = undefined;
      this._autoAccept = undefined;
      this._deskPhoneNumber = undefined;
      this._phoneType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._afterContactWorkTimeLimit = value.afterContactWorkTimeLimit;
      this._autoAccept = value.autoAccept;
      this._deskPhoneNumber = value.deskPhoneNumber;
      this._phoneType = value.phoneType;
    }
  }

  // after_contact_work_time_limit - computed: false, optional: true, required: false
  private _afterContactWorkTimeLimit?: number; 
  public get afterContactWorkTimeLimit() {
    return this.getNumberAttribute('after_contact_work_time_limit');
  }
  public set afterContactWorkTimeLimit(value: number) {
    this._afterContactWorkTimeLimit = value;
  }
  public resetAfterContactWorkTimeLimit() {
    this._afterContactWorkTimeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterContactWorkTimeLimitInput() {
    return this._afterContactWorkTimeLimit;
  }

  // auto_accept - computed: false, optional: true, required: false
  private _autoAccept?: boolean | cdktf.IResolvable; 
  public get autoAccept() {
    return this.getBooleanAttribute('auto_accept');
  }
  public set autoAccept(value: boolean | cdktf.IResolvable) {
    this._autoAccept = value;
  }
  public resetAutoAccept() {
    this._autoAccept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAcceptInput() {
    return this._autoAccept;
  }

  // desk_phone_number - computed: false, optional: true, required: false
  private _deskPhoneNumber?: string; 
  public get deskPhoneNumber() {
    return this.getStringAttribute('desk_phone_number');
  }
  public set deskPhoneNumber(value: string) {
    this._deskPhoneNumber = value;
  }
  public resetDeskPhoneNumber() {
    this._deskPhoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deskPhoneNumberInput() {
    return this._deskPhoneNumber;
  }

  // phone_type - computed: false, optional: false, required: true
  private _phoneType?: string; 
  public get phoneType() {
    return this.getStringAttribute('phone_type');
  }
  public set phoneType(value: string) {
    this._phoneType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneTypeInput() {
    return this._phoneType;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/connect_user aws_connect_user}
*/
export class ConnectUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_connect_user";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/connect_user aws_connect_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectUserConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectUserConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_connect_user',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._directoryUserId = config.directoryUserId;
    this._hierarchyGroupId = config.hierarchyGroupId;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._name = config.name;
    this._password = config.password;
    this._routingProfileId = config.routingProfileId;
    this._securityProfileIds = config.securityProfileIds;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._identityInfo.internalValue = config.identityInfo;
    this._phoneConfig.internalValue = config.phoneConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // directory_user_id - computed: true, optional: true, required: false
  private _directoryUserId?: string; 
  public get directoryUserId() {
    return this.getStringAttribute('directory_user_id');
  }
  public set directoryUserId(value: string) {
    this._directoryUserId = value;
  }
  public resetDirectoryUserId() {
    this._directoryUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryUserIdInput() {
    return this._directoryUserId;
  }

  // hierarchy_group_id - computed: false, optional: true, required: false
  private _hierarchyGroupId?: string; 
  public get hierarchyGroupId() {
    return this.getStringAttribute('hierarchy_group_id');
  }
  public set hierarchyGroupId(value: string) {
    this._hierarchyGroupId = value;
  }
  public resetHierarchyGroupId() {
    this._hierarchyGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hierarchyGroupIdInput() {
    return this._hierarchyGroupId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
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
    return this._name;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // routing_profile_id - computed: false, optional: false, required: true
  private _routingProfileId?: string; 
  public get routingProfileId() {
    return this.getStringAttribute('routing_profile_id');
  }
  public set routingProfileId(value: string) {
    this._routingProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingProfileIdInput() {
    return this._routingProfileId;
  }

  // security_profile_ids - computed: false, optional: false, required: true
  private _securityProfileIds?: string[]; 
  public get securityProfileIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_profile_ids'));
  }
  public set securityProfileIds(value: string[]) {
    this._securityProfileIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProfileIdsInput() {
    return this._securityProfileIds;
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

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // identity_info - computed: false, optional: true, required: false
  private _identityInfo = new ConnectUserIdentityInfoOutputReference(this, "identity_info");
  public get identityInfo() {
    return this._identityInfo;
  }
  public putIdentityInfo(value: ConnectUserIdentityInfo) {
    this._identityInfo.internalValue = value;
  }
  public resetIdentityInfo() {
    this._identityInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInfoInput() {
    return this._identityInfo.internalValue;
  }

  // phone_config - computed: false, optional: false, required: true
  private _phoneConfig = new ConnectUserPhoneConfigOutputReference(this, "phone_config");
  public get phoneConfig() {
    return this._phoneConfig;
  }
  public putPhoneConfig(value: ConnectUserPhoneConfig) {
    this._phoneConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneConfigInput() {
    return this._phoneConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      directory_user_id: cdktf.stringToTerraform(this._directoryUserId),
      hierarchy_group_id: cdktf.stringToTerraform(this._hierarchyGroupId),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      routing_profile_id: cdktf.stringToTerraform(this._routingProfileId),
      security_profile_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityProfileIds),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      identity_info: connectUserIdentityInfoToTerraform(this._identityInfo.internalValue),
      phone_config: connectUserPhoneConfigToTerraform(this._phoneConfig.internalValue),
    };
  }
}
