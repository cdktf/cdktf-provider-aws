/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/connect_quick_connect
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectQuickConnectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/connect_quick_connect#description ConnectQuickConnect#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/connect_quick_connect#id ConnectQuickConnect#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/connect_quick_connect#instance_id ConnectQuickConnect#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/connect_quick_connect#name ConnectQuickConnect#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/connect_quick_connect#region ConnectQuickConnect#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/connect_quick_connect#tags ConnectQuickConnect#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/connect_quick_connect#tags_all ConnectQuickConnect#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * quick_connect_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/connect_quick_connect#quick_connect_config ConnectQuickConnect#quick_connect_config}
  */
  readonly quickConnectConfig: ConnectQuickConnectQuickConnectConfig;
}
export interface ConnectQuickConnectQuickConnectConfigPhoneConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/connect_quick_connect#phone_number ConnectQuickConnect#phone_number}
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


export function connectQuickConnectQuickConnectConfigPhoneConfigToHclTerraform(struct?: ConnectQuickConnectQuickConnectConfigPhoneConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    phone_number: {
      value: cdktf.stringToHclTerraform(struct!.phoneNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ConnectQuickConnectQuickConnectConfigPhoneConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectQuickConnectQuickConnectConfigPhoneConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._phoneNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._phoneNumber = value.phoneNumber;
    }
  }

  // phone_number - computed: false, optional: false, required: true
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }
}

export class ConnectQuickConnectQuickConnectConfigPhoneConfigList extends cdktf.ComplexList {
  public internalValue? : ConnectQuickConnectQuickConnectConfigPhoneConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference {
    return new ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectQuickConnectQuickConnectConfigQueueConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/connect_quick_connect#contact_flow_id ConnectQuickConnect#contact_flow_id}
  */
  readonly contactFlowId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/connect_quick_connect#queue_id ConnectQuickConnect#queue_id}
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


export function connectQuickConnectQuickConnectConfigQueueConfigToHclTerraform(struct?: ConnectQuickConnectQuickConnectConfigQueueConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contact_flow_id: {
      value: cdktf.stringToHclTerraform(struct!.contactFlowId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue_id: {
      value: cdktf.stringToHclTerraform(struct!.queueId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ConnectQuickConnectQuickConnectConfigQueueConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contactFlowId !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactFlowId = this._contactFlowId;
    }
    if (this._queueId !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueId = this._queueId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectQuickConnectQuickConnectConfigQueueConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contactFlowId = undefined;
      this._queueId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contactFlowId = value.contactFlowId;
      this._queueId = value.queueId;
    }
  }

  // contact_flow_id - computed: false, optional: false, required: true
  private _contactFlowId?: string; 
  public get contactFlowId() {
    return this.getStringAttribute('contact_flow_id');
  }
  public set contactFlowId(value: string) {
    this._contactFlowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactFlowIdInput() {
    return this._contactFlowId;
  }

  // queue_id - computed: false, optional: false, required: true
  private _queueId?: string; 
  public get queueId() {
    return this.getStringAttribute('queue_id');
  }
  public set queueId(value: string) {
    this._queueId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueIdInput() {
    return this._queueId;
  }
}

export class ConnectQuickConnectQuickConnectConfigQueueConfigList extends cdktf.ComplexList {
  public internalValue? : ConnectQuickConnectQuickConnectConfigQueueConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference {
    return new ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectQuickConnectQuickConnectConfigUserConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/connect_quick_connect#contact_flow_id ConnectQuickConnect#contact_flow_id}
  */
  readonly contactFlowId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/connect_quick_connect#user_id ConnectQuickConnect#user_id}
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


export function connectQuickConnectQuickConnectConfigUserConfigToHclTerraform(struct?: ConnectQuickConnectQuickConnectConfigUserConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contact_flow_id: {
      value: cdktf.stringToHclTerraform(struct!.contactFlowId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectQuickConnectQuickConnectConfigUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ConnectQuickConnectQuickConnectConfigUserConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contactFlowId !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactFlowId = this._contactFlowId;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectQuickConnectQuickConnectConfigUserConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contactFlowId = undefined;
      this._userId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contactFlowId = value.contactFlowId;
      this._userId = value.userId;
    }
  }

  // contact_flow_id - computed: false, optional: false, required: true
  private _contactFlowId?: string; 
  public get contactFlowId() {
    return this.getStringAttribute('contact_flow_id');
  }
  public set contactFlowId(value: string) {
    this._contactFlowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactFlowIdInput() {
    return this._contactFlowId;
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}

export class ConnectQuickConnectQuickConnectConfigUserConfigList extends cdktf.ComplexList {
  public internalValue? : ConnectQuickConnectQuickConnectConfigUserConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ConnectQuickConnectQuickConnectConfigUserConfigOutputReference {
    return new ConnectQuickConnectQuickConnectConfigUserConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectQuickConnectQuickConnectConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/connect_quick_connect#quick_connect_type ConnectQuickConnect#quick_connect_type}
  */
  readonly quickConnectType: string;
  /**
  * phone_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/connect_quick_connect#phone_config ConnectQuickConnect#phone_config}
  */
  readonly phoneConfig?: ConnectQuickConnectQuickConnectConfigPhoneConfig[] | cdktf.IResolvable;
  /**
  * queue_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/connect_quick_connect#queue_config ConnectQuickConnect#queue_config}
  */
  readonly queueConfig?: ConnectQuickConnectQuickConnectConfigQueueConfig[] | cdktf.IResolvable;
  /**
  * user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/connect_quick_connect#user_config ConnectQuickConnect#user_config}
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
    phone_config: cdktf.listMapper(connectQuickConnectQuickConnectConfigPhoneConfigToTerraform, true)(struct!.phoneConfig),
    queue_config: cdktf.listMapper(connectQuickConnectQuickConnectConfigQueueConfigToTerraform, true)(struct!.queueConfig),
    user_config: cdktf.listMapper(connectQuickConnectQuickConnectConfigUserConfigToTerraform, true)(struct!.userConfig),
  }
}


export function connectQuickConnectQuickConnectConfigToHclTerraform(struct?: ConnectQuickConnectQuickConnectConfigOutputReference | ConnectQuickConnectQuickConnectConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    quick_connect_type: {
      value: cdktf.stringToHclTerraform(struct!.quickConnectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phone_config: {
      value: cdktf.listMapperHcl(connectQuickConnectQuickConnectConfigPhoneConfigToHclTerraform, true)(struct!.phoneConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectQuickConnectQuickConnectConfigPhoneConfigList",
    },
    queue_config: {
      value: cdktf.listMapperHcl(connectQuickConnectQuickConnectConfigQueueConfigToHclTerraform, true)(struct!.queueConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectQuickConnectQuickConnectConfigQueueConfigList",
    },
    user_config: {
      value: cdktf.listMapperHcl(connectQuickConnectQuickConnectConfigUserConfigToHclTerraform, true)(struct!.userConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectQuickConnectQuickConnectConfigUserConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectQuickConnectQuickConnectConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectQuickConnectQuickConnectConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._quickConnectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.quickConnectType = this._quickConnectType;
    }
    if (this._phoneConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneConfig = this._phoneConfig?.internalValue;
    }
    if (this._queueConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueConfig = this._queueConfig?.internalValue;
    }
    if (this._userConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userConfig = this._userConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectQuickConnectQuickConnectConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._quickConnectType = undefined;
      this._phoneConfig.internalValue = undefined;
      this._queueConfig.internalValue = undefined;
      this._userConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._quickConnectType = value.quickConnectType;
      this._phoneConfig.internalValue = value.phoneConfig;
      this._queueConfig.internalValue = value.queueConfig;
      this._userConfig.internalValue = value.userConfig;
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
  private _phoneConfig = new ConnectQuickConnectQuickConnectConfigPhoneConfigList(this, "phone_config", false);
  public get phoneConfig() {
    return this._phoneConfig;
  }
  public putPhoneConfig(value: ConnectQuickConnectQuickConnectConfigPhoneConfig[] | cdktf.IResolvable) {
    this._phoneConfig.internalValue = value;
  }
  public resetPhoneConfig() {
    this._phoneConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneConfigInput() {
    return this._phoneConfig.internalValue;
  }

  // queue_config - computed: false, optional: true, required: false
  private _queueConfig = new ConnectQuickConnectQuickConnectConfigQueueConfigList(this, "queue_config", false);
  public get queueConfig() {
    return this._queueConfig;
  }
  public putQueueConfig(value: ConnectQuickConnectQuickConnectConfigQueueConfig[] | cdktf.IResolvable) {
    this._queueConfig.internalValue = value;
  }
  public resetQueueConfig() {
    this._queueConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueConfigInput() {
    return this._queueConfig.internalValue;
  }

  // user_config - computed: false, optional: true, required: false
  private _userConfig = new ConnectQuickConnectQuickConnectConfigUserConfigList(this, "user_config", false);
  public get userConfig() {
    return this._userConfig;
  }
  public putUserConfig(value: ConnectQuickConnectQuickConnectConfigUserConfig[] | cdktf.IResolvable) {
    this._userConfig.internalValue = value;
  }
  public resetUserConfig() {
    this._userConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userConfigInput() {
    return this._userConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/connect_quick_connect aws_connect_quick_connect}
*/
export class ConnectQuickConnect extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_connect_quick_connect";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectQuickConnect resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectQuickConnect to import
  * @param importFromId The id of the existing ConnectQuickConnect that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/connect_quick_connect#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectQuickConnect to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_connect_quick_connect", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/connect_quick_connect aws_connect_quick_connect} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectQuickConnectConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectQuickConnectConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_connect_quick_connect',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.14.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._name = config.name;
    this._region = config.region;
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

  // quick_connect_id - computed: true, optional: false, required: false
  public get quickConnectId() {
    return this.getStringAttribute('quick_connect_id');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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
  private _quickConnectConfig = new ConnectQuickConnectQuickConnectConfigOutputReference(this, "quick_connect_config");
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
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      quick_connect_config: connectQuickConnectQuickConnectConfigToTerraform(this._quickConnectConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      quick_connect_config: {
        value: connectQuickConnectQuickConnectConfigToHclTerraform(this._quickConnectConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectQuickConnectQuickConnectConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
