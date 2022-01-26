// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Connect
*/
export interface ConnectQuickConnectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#description ConnectQuickConnect#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#instance_id ConnectQuickConnect#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#name ConnectQuickConnect#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#tags ConnectQuickConnect#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#tags_all ConnectQuickConnect#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * quick_connect_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#quick_connect_config ConnectQuickConnect#quick_connect_config}
  */
  readonly quickConnectConfig: ConnectQuickConnectQuickConnectConfig;
}
export interface ConnectQuickConnectQuickConnectConfigPhoneConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#phone_number ConnectQuickConnect#phone_number}
  */
  readonly phoneNumber: string;
}

export function connectQuickConnectQuickConnectConfigPhoneConfigToTerraform(struct?: ConnectQuickConnectQuickConnectConfigPhoneConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
  }
}

export interface ConnectQuickConnectQuickConnectConfigQueueConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#contact_flow_id ConnectQuickConnect#contact_flow_id}
  */
  readonly contactFlowId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#queue_id ConnectQuickConnect#queue_id}
  */
  readonly queueId: string;
}

export function connectQuickConnectQuickConnectConfigQueueConfigToTerraform(struct?: ConnectQuickConnectQuickConnectConfigQueueConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contact_flow_id: cdktf.stringToTerraform(struct!.contactFlowId),
    queue_id: cdktf.stringToTerraform(struct!.queueId),
  }
}

export interface ConnectQuickConnectQuickConnectConfigUserConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#contact_flow_id ConnectQuickConnect#contact_flow_id}
  */
  readonly contactFlowId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#user_id ConnectQuickConnect#user_id}
  */
  readonly userId: string;
}

export function connectQuickConnectQuickConnectConfigUserConfigToTerraform(struct?: ConnectQuickConnectQuickConnectConfigUserConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contact_flow_id: cdktf.stringToTerraform(struct!.contactFlowId),
    user_id: cdktf.stringToTerraform(struct!.userId),
  }
}

export interface ConnectQuickConnectQuickConnectConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#quick_connect_type ConnectQuickConnect#quick_connect_type}
  */
  readonly quickConnectType: string;
  /**
  * phone_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#phone_config ConnectQuickConnect#phone_config}
  */
  readonly phoneConfig?: ConnectQuickConnectQuickConnectConfigPhoneConfig[] | cdktf.IResolvable;
  /**
  * queue_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#queue_config ConnectQuickConnect#queue_config}
  */
  readonly queueConfig?: ConnectQuickConnectQuickConnectConfigQueueConfig[] | cdktf.IResolvable;
  /**
  * user_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect#user_config ConnectQuickConnect#user_config}
  */
  readonly userConfig?: ConnectQuickConnectQuickConnectConfigUserConfig[] | cdktf.IResolvable;
}

export function connectQuickConnectQuickConnectConfigToTerraform(struct?: ConnectQuickConnectQuickConnectConfigOutputReference | ConnectQuickConnectQuickConnectConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    quick_connect_type: cdktf.stringToTerraform(struct!.quickConnectType),
    phone_config: cdktf.listMapper(connectQuickConnectQuickConnectConfigPhoneConfigToTerraform)(struct!.phoneConfig),
    queue_config: cdktf.listMapper(connectQuickConnectQuickConnectConfigQueueConfigToTerraform)(struct!.queueConfig),
    user_config: cdktf.listMapper(connectQuickConnectQuickConnectConfigUserConfigToTerraform)(struct!.userConfig),
  }
}

export class ConnectQuickConnectQuickConnectConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ConnectQuickConnectQuickConnectConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._quickConnectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.quickConnectType = this._quickConnectType;
    }
    if (this._phoneConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneConfig = this._phoneConfig;
    }
    if (this._queueConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueConfig = this._queueConfig;
    }
    if (this._userConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.userConfig = this._userConfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectQuickConnectQuickConnectConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._quickConnectType = undefined;
      this._phoneConfig = undefined;
      this._queueConfig = undefined;
      this._userConfig = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._quickConnectType = value.quickConnectType;
      this._phoneConfig = value.phoneConfig;
      this._queueConfig = value.queueConfig;
      this._userConfig = value.userConfig;
    }
  }

  // quick_connect_type - computed: false, optional: false, required: true
  private _quickConnectType?: string; 
  public get quickConnectType() {
    return this.getStringAttribute('quick_connect_type');
  }
  public set quickConnectType(value: string) {
    this._quickConnectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quickConnectTypeInput() {
    return this._quickConnectType;
  }

  // phone_config - computed: false, optional: true, required: false
  private _phoneConfig?: ConnectQuickConnectQuickConnectConfigPhoneConfig[] | cdktf.IResolvable; 
  public get phoneConfig() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('phone_config');
  }
  public set phoneConfig(value: ConnectQuickConnectQuickConnectConfigPhoneConfig[] | cdktf.IResolvable) {
    this._phoneConfig = value;
  }
  public resetPhoneConfig() {
    this._phoneConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneConfigInput() {
    return this._phoneConfig;
  }

  // queue_config - computed: false, optional: true, required: false
  private _queueConfig?: ConnectQuickConnectQuickConnectConfigQueueConfig[] | cdktf.IResolvable; 
  public get queueConfig() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('queue_config');
  }
  public set queueConfig(value: ConnectQuickConnectQuickConnectConfigQueueConfig[] | cdktf.IResolvable) {
    this._queueConfig = value;
  }
  public resetQueueConfig() {
    this._queueConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueConfigInput() {
    return this._queueConfig;
  }

  // user_config - computed: false, optional: true, required: false
  private _userConfig?: ConnectQuickConnectQuickConnectConfigUserConfig[] | cdktf.IResolvable; 
  public get userConfig() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('user_config');
  }
  public set userConfig(value: ConnectQuickConnectQuickConnectConfigUserConfig[] | cdktf.IResolvable) {
    this._userConfig = value;
  }
  public resetUserConfig() {
    this._userConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userConfigInput() {
    return this._userConfig;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect aws_connect_quick_connect}
*/
export class ConnectQuickConnect extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_connect_quick_connect";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/connect_quick_connect aws_connect_quick_connect} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectQuickConnectConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectQuickConnectConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_connect_quick_connect',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._instanceId = config.instanceId;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._quickConnectConfig.internalValue = config.quickConnectConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // quick_connect_id - computed: true, optional: false, required: false
  public get quickConnectId() {
    return this.getStringAttribute('quick_connect_id');
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

  // quick_connect_config - computed: false, optional: false, required: true
  private _quickConnectConfig = new ConnectQuickConnectQuickConnectConfigOutputReference(this, "quick_connect_config", true);
  public get quickConnectConfig() {
    return this._quickConnectConfig;
  }
  public putQuickConnectConfig(value: ConnectQuickConnectQuickConnectConfig) {
    this._quickConnectConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quickConnectConfigInput() {
    return this._quickConnectConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      quick_connect_config: connectQuickConnectQuickConnectConfigToTerraform(this._quickConnectConfig.internalValue),
    };
  }
}
