/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/bedrockagent_agent_action_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BedrockagentAgentActionGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/bedrockagent_agent_action_group#action_group_name BedrockagentAgentActionGroup#action_group_name}
  */
  readonly actionGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/bedrockagent_agent_action_group#action_group_state BedrockagentAgentActionGroup#action_group_state}
  */
  readonly actionGroupState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/bedrockagent_agent_action_group#agent_id BedrockagentAgentActionGroup#agent_id}
  */
  readonly agentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/bedrockagent_agent_action_group#agent_version BedrockagentAgentActionGroup#agent_version}
  */
  readonly agentVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/bedrockagent_agent_action_group#description BedrockagentAgentActionGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/bedrockagent_agent_action_group#parent_action_group_signature BedrockagentAgentActionGroup#parent_action_group_signature}
  */
  readonly parentActionGroupSignature?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/bedrockagent_agent_action_group#prepare_agent BedrockagentAgentActionGroup#prepare_agent}
  */
  readonly prepareAgent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/bedrockagent_agent_action_group#skip_resource_in_use_check BedrockagentAgentActionGroup#skip_resource_in_use_check}
  */
  readonly skipResourceInUseCheck?: boolean | cdktf.IResolvable;
  /**
  * action_group_executor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/bedrockagent_agent_action_group#action_group_executor BedrockagentAgentActionGroup#action_group_executor}
  */
  readonly actionGroupExecutor?: BedrockagentAgentActionGroupActionGroupExecutor[] | cdktf.IResolvable;
  /**
  * api_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/bedrockagent_agent_action_group#api_schema BedrockagentAgentActionGroup#api_schema}
  */
  readonly apiSchema?: BedrockagentAgentActionGroupApiSchema[] | cdktf.IResolvable;
  /**
  * function_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/bedrockagent_agent_action_group#function_schema BedrockagentAgentActionGroup#function_schema}
  */
  readonly functionSchema?: BedrockagentAgentActionGroupFunctionSchema[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/bedrockagent_agent_action_group#timeouts BedrockagentAgentActionGroup#timeouts}
  */
  readonly timeouts?: BedrockagentAgentActionGroupTimeouts;
}
export interface BedrockagentAgentActionGroupActionGroupExecutor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/bedrockagent_agent_action_group#custom_control BedrockagentAgentActionGroup#custom_control}
  */
  readonly customControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/bedrockagent_agent_action_group#lambda BedrockagentAgentActionGroup#lambda}
  */
  readonly lambda?: string;
}

export function bedrockagentAgentActionGroupActionGroupExecutorToTerraform(struct?: BedrockagentAgentActionGroupActionGroupExecutor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_control: cdktf.stringToTerraform(struct!.customControl),
    lambda: cdktf.stringToTerraform(struct!.lambda),
  }
}


export function bedrockagentAgentActionGroupActionGroupExecutorToHclTerraform(struct?: BedrockagentAgentActionGroupActionGroupExecutor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_control: {
      value: cdktf.stringToHclTerraform(struct!.customControl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lambda: {
      value: cdktf.stringToHclTerraform(struct!.lambda),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentAgentActionGroupActionGroupExecutorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentAgentActionGroupActionGroupExecutor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.customControl = this._customControl;
    }
    if (this._lambda !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambda = this._lambda;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentAgentActionGroupActionGroupExecutor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customControl = undefined;
      this._lambda = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customControl = value.customControl;
      this._lambda = value.lambda;
    }
  }

  // custom_control - computed: false, optional: true, required: false
  private _customControl?: string; 
  public get customControl() {
    return this.getStringAttribute('custom_control');
  }
  public set customControl(value: string) {
    this._customControl = value;
  }
  public resetCustomControl() {
    this._customControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customControlInput() {
    return this._customControl;
  }

  // lambda - computed: false, optional: true, required: false
  private _lambda?: string; 
  public get lambda() {
    return this.getStringAttribute('lambda');
  }
  public set lambda(value: string) {
    this._lambda = value;
  }
  public resetLambda() {
    this._lambda = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaInput() {
    return this._lambda;
  }
}

export class BedrockagentAgentActionGroupActionGroupExecutorList extends cdktf.ComplexList {
  public internalValue? : BedrockagentAgentActionGroupActionGroupExecutor[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentAgentActionGroupActionGroupExecutorOutputReference {
    return new BedrockagentAgentActionGroupActionGroupExecutorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentAgentActionGroupApiSchemaS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/bedrockagent_agent_action_group#s3_bucket_name BedrockagentAgentActionGroup#s3_bucket_name}
  */
  readonly s3BucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/bedrockagent_agent_action_group#s3_object_key BedrockagentAgentActionGroup#s3_object_key}
  */
  readonly s3ObjectKey?: string;
}

export function bedrockagentAgentActionGroupApiSchemaS3ToTerraform(struct?: BedrockagentAgentActionGroupApiSchemaS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_bucket_name: cdktf.stringToTerraform(struct!.s3BucketName),
    s3_object_key: cdktf.stringToTerraform(struct!.s3ObjectKey),
  }
}


export function bedrockagentAgentActionGroupApiSchemaS3ToHclTerraform(struct?: BedrockagentAgentActionGroupApiSchemaS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.s3BucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_object_key: {
      value: cdktf.stringToHclTerraform(struct!.s3ObjectKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentAgentActionGroupApiSchemaS3OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentAgentActionGroupApiSchemaS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3BucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketName = this._s3BucketName;
    }
    if (this._s3ObjectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3ObjectKey = this._s3ObjectKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentAgentActionGroupApiSchemaS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3BucketName = undefined;
      this._s3ObjectKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3BucketName = value.s3BucketName;
      this._s3ObjectKey = value.s3ObjectKey;
    }
  }

  // s3_bucket_name - computed: false, optional: true, required: false
  private _s3BucketName?: string; 
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }
  public resetS3BucketName() {
    this._s3BucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketNameInput() {
    return this._s3BucketName;
  }

  // s3_object_key - computed: false, optional: true, required: false
  private _s3ObjectKey?: string; 
  public get s3ObjectKey() {
    return this.getStringAttribute('s3_object_key');
  }
  public set s3ObjectKey(value: string) {
    this._s3ObjectKey = value;
  }
  public resetS3ObjectKey() {
    this._s3ObjectKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ObjectKeyInput() {
    return this._s3ObjectKey;
  }
}

export class BedrockagentAgentActionGroupApiSchemaS3List extends cdktf.ComplexList {
  public internalValue? : BedrockagentAgentActionGroupApiSchemaS3[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentAgentActionGroupApiSchemaS3OutputReference {
    return new BedrockagentAgentActionGroupApiSchemaS3OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentAgentActionGroupApiSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/bedrockagent_agent_action_group#payload BedrockagentAgentActionGroup#payload}
  */
  readonly payload?: string;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/bedrockagent_agent_action_group#s3 BedrockagentAgentActionGroup#s3}
  */
  readonly s3?: BedrockagentAgentActionGroupApiSchemaS3[] | cdktf.IResolvable;
}

export function bedrockagentAgentActionGroupApiSchemaToTerraform(struct?: BedrockagentAgentActionGroupApiSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    payload: cdktf.stringToTerraform(struct!.payload),
    s3: cdktf.listMapper(bedrockagentAgentActionGroupApiSchemaS3ToTerraform, true)(struct!.s3),
  }
}


export function bedrockagentAgentActionGroupApiSchemaToHclTerraform(struct?: BedrockagentAgentActionGroupApiSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    payload: {
      value: cdktf.stringToHclTerraform(struct!.payload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3: {
      value: cdktf.listMapperHcl(bedrockagentAgentActionGroupApiSchemaS3ToHclTerraform, true)(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentAgentActionGroupApiSchemaS3List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentAgentActionGroupApiSchemaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentAgentActionGroupApiSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentAgentActionGroupApiSchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._payload = undefined;
      this._s3.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._payload = value.payload;
      this._s3.internalValue = value.s3;
    }
  }

  // payload - computed: false, optional: true, required: false
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  public resetPayload() {
    this._payload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new BedrockagentAgentActionGroupApiSchemaS3List(this, "s3", false);
  public get s3() {
    return this._s3;
  }
  public putS3(value: BedrockagentAgentActionGroupApiSchemaS3[] | cdktf.IResolvable) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}

export class BedrockagentAgentActionGroupApiSchemaList extends cdktf.ComplexList {
  public internalValue? : BedrockagentAgentActionGroupApiSchema[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentAgentActionGroupApiSchemaOutputReference {
    return new BedrockagentAgentActionGroupApiSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/bedrockagent_agent_action_group#description BedrockagentAgentActionGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/bedrockagent_agent_action_group#map_block_key BedrockagentAgentActionGroup#map_block_key}
  */
  readonly mapBlockKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/bedrockagent_agent_action_group#required BedrockagentAgentActionGroup#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/bedrockagent_agent_action_group#type BedrockagentAgentActionGroup#type}
  */
  readonly type: string;
}

export function bedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersToTerraform(struct?: BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    map_block_key: cdktf.stringToTerraform(struct!.mapBlockKey),
    required: cdktf.booleanToTerraform(struct!.required),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function bedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersToHclTerraform(struct?: BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    map_block_key: {
      value: cdktf.stringToHclTerraform(struct!.mapBlockKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._mapBlockKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapBlockKey = this._mapBlockKey;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._mapBlockKey = undefined;
      this._required = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._mapBlockKey = value.mapBlockKey;
      this._required = value.required;
      this._type = value.type;
    }
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

  // map_block_key - computed: false, optional: false, required: true
  private _mapBlockKey?: string; 
  public get mapBlockKey() {
    return this.getStringAttribute('map_block_key');
  }
  public set mapBlockKey(value: string) {
    this._mapBlockKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mapBlockKeyInput() {
    return this._mapBlockKey;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList extends cdktf.ComplexList {
  public internalValue? : BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference {
    return new BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/bedrockagent_agent_action_group#description BedrockagentAgentActionGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/bedrockagent_agent_action_group#name BedrockagentAgentActionGroup#name}
  */
  readonly name: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/bedrockagent_agent_action_group#parameters BedrockagentAgentActionGroup#parameters}
  */
  readonly parameters?: BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters[] | cdktf.IResolvable;
}

export function bedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsToTerraform(struct?: BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.listMapper(bedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersToTerraform, true)(struct!.parameters),
  }
}


export function bedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsToHclTerraform(struct?: BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(bedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "set",
      storageClassType: "BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._parameters.internalValue = value.parameters;
    }
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

  // parameters - computed: false, optional: true, required: false
  private _parameters = new BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParametersList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList extends cdktf.ComplexList {
  public internalValue? : BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference {
    return new BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentAgentActionGroupFunctionSchemaMemberFunctions {
  /**
  * functions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/bedrockagent_agent_action_group#functions BedrockagentAgentActionGroup#functions}
  */
  readonly functions?: BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions[] | cdktf.IResolvable;
}

export function bedrockagentAgentActionGroupFunctionSchemaMemberFunctionsToTerraform(struct?: BedrockagentAgentActionGroupFunctionSchemaMemberFunctions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    functions: cdktf.listMapper(bedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsToTerraform, true)(struct!.functions),
  }
}


export function bedrockagentAgentActionGroupFunctionSchemaMemberFunctionsToHclTerraform(struct?: BedrockagentAgentActionGroupFunctionSchemaMemberFunctions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    functions: {
      value: cdktf.listMapperHcl(bedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsToHclTerraform, true)(struct!.functions),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentAgentActionGroupFunctionSchemaMemberFunctions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.functions = this._functions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentAgentActionGroupFunctionSchemaMemberFunctions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._functions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._functions.internalValue = value.functions;
    }
  }

  // functions - computed: false, optional: true, required: false
  private _functions = new BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctionsList(this, "functions", false);
  public get functions() {
    return this._functions;
  }
  public putFunctions(value: BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsFunctions[] | cdktf.IResolvable) {
    this._functions.internalValue = value;
  }
  public resetFunctions() {
    this._functions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionsInput() {
    return this._functions.internalValue;
  }
}

export class BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList extends cdktf.ComplexList {
  public internalValue? : BedrockagentAgentActionGroupFunctionSchemaMemberFunctions[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference {
    return new BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentAgentActionGroupFunctionSchema {
  /**
  * member_functions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/bedrockagent_agent_action_group#member_functions BedrockagentAgentActionGroup#member_functions}
  */
  readonly memberFunctions?: BedrockagentAgentActionGroupFunctionSchemaMemberFunctions[] | cdktf.IResolvable;
}

export function bedrockagentAgentActionGroupFunctionSchemaToTerraform(struct?: BedrockagentAgentActionGroupFunctionSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    member_functions: cdktf.listMapper(bedrockagentAgentActionGroupFunctionSchemaMemberFunctionsToTerraform, true)(struct!.memberFunctions),
  }
}


export function bedrockagentAgentActionGroupFunctionSchemaToHclTerraform(struct?: BedrockagentAgentActionGroupFunctionSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    member_functions: {
      value: cdktf.listMapperHcl(bedrockagentAgentActionGroupFunctionSchemaMemberFunctionsToHclTerraform, true)(struct!.memberFunctions),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentAgentActionGroupFunctionSchemaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentAgentActionGroupFunctionSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memberFunctions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberFunctions = this._memberFunctions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentAgentActionGroupFunctionSchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._memberFunctions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._memberFunctions.internalValue = value.memberFunctions;
    }
  }

  // member_functions - computed: false, optional: true, required: false
  private _memberFunctions = new BedrockagentAgentActionGroupFunctionSchemaMemberFunctionsList(this, "member_functions", false);
  public get memberFunctions() {
    return this._memberFunctions;
  }
  public putMemberFunctions(value: BedrockagentAgentActionGroupFunctionSchemaMemberFunctions[] | cdktf.IResolvable) {
    this._memberFunctions.internalValue = value;
  }
  public resetMemberFunctions() {
    this._memberFunctions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberFunctionsInput() {
    return this._memberFunctions.internalValue;
  }
}

export class BedrockagentAgentActionGroupFunctionSchemaList extends cdktf.ComplexList {
  public internalValue? : BedrockagentAgentActionGroupFunctionSchema[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentAgentActionGroupFunctionSchemaOutputReference {
    return new BedrockagentAgentActionGroupFunctionSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentAgentActionGroupTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/bedrockagent_agent_action_group#create BedrockagentAgentActionGroup#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/bedrockagent_agent_action_group#update BedrockagentAgentActionGroup#update}
  */
  readonly update?: string;
}

export function bedrockagentAgentActionGroupTimeoutsToTerraform(struct?: BedrockagentAgentActionGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function bedrockagentAgentActionGroupTimeoutsToHclTerraform(struct?: BedrockagentAgentActionGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentAgentActionGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentAgentActionGroupTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentAgentActionGroupTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/bedrockagent_agent_action_group aws_bedrockagent_agent_action_group}
*/
export class BedrockagentAgentActionGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrockagent_agent_action_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BedrockagentAgentActionGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockagentAgentActionGroup to import
  * @param importFromId The id of the existing BedrockagentAgentActionGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/bedrockagent_agent_action_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockagentAgentActionGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrockagent_agent_action_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/bedrockagent_agent_action_group aws_bedrockagent_agent_action_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockagentAgentActionGroupConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockagentAgentActionGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrockagent_agent_action_group',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.90.1',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actionGroupName = config.actionGroupName;
    this._actionGroupState = config.actionGroupState;
    this._agentId = config.agentId;
    this._agentVersion = config.agentVersion;
    this._description = config.description;
    this._parentActionGroupSignature = config.parentActionGroupSignature;
    this._prepareAgent = config.prepareAgent;
    this._skipResourceInUseCheck = config.skipResourceInUseCheck;
    this._actionGroupExecutor.internalValue = config.actionGroupExecutor;
    this._apiSchema.internalValue = config.apiSchema;
    this._functionSchema.internalValue = config.functionSchema;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_group_id - computed: true, optional: false, required: false
  public get actionGroupId() {
    return this.getStringAttribute('action_group_id');
  }

  // action_group_name - computed: false, optional: false, required: true
  private _actionGroupName?: string; 
  public get actionGroupName() {
    return this.getStringAttribute('action_group_name');
  }
  public set actionGroupName(value: string) {
    this._actionGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionGroupNameInput() {
    return this._actionGroupName;
  }

  // action_group_state - computed: true, optional: true, required: false
  private _actionGroupState?: string; 
  public get actionGroupState() {
    return this.getStringAttribute('action_group_state');
  }
  public set actionGroupState(value: string) {
    this._actionGroupState = value;
  }
  public resetActionGroupState() {
    this._actionGroupState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionGroupStateInput() {
    return this._actionGroupState;
  }

  // agent_id - computed: false, optional: false, required: true
  private _agentId?: string; 
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }
  public set agentId(value: string) {
    this._agentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdInput() {
    return this._agentId;
  }

  // agent_version - computed: false, optional: false, required: true
  private _agentVersion?: string; 
  public get agentVersion() {
    return this.getStringAttribute('agent_version');
  }
  public set agentVersion(value: string) {
    this._agentVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentVersionInput() {
    return this._agentVersion;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // parent_action_group_signature - computed: false, optional: true, required: false
  private _parentActionGroupSignature?: string; 
  public get parentActionGroupSignature() {
    return this.getStringAttribute('parent_action_group_signature');
  }
  public set parentActionGroupSignature(value: string) {
    this._parentActionGroupSignature = value;
  }
  public resetParentActionGroupSignature() {
    this._parentActionGroupSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentActionGroupSignatureInput() {
    return this._parentActionGroupSignature;
  }

  // prepare_agent - computed: true, optional: true, required: false
  private _prepareAgent?: boolean | cdktf.IResolvable; 
  public get prepareAgent() {
    return this.getBooleanAttribute('prepare_agent');
  }
  public set prepareAgent(value: boolean | cdktf.IResolvable) {
    this._prepareAgent = value;
  }
  public resetPrepareAgent() {
    this._prepareAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prepareAgentInput() {
    return this._prepareAgent;
  }

  // skip_resource_in_use_check - computed: true, optional: true, required: false
  private _skipResourceInUseCheck?: boolean | cdktf.IResolvable; 
  public get skipResourceInUseCheck() {
    return this.getBooleanAttribute('skip_resource_in_use_check');
  }
  public set skipResourceInUseCheck(value: boolean | cdktf.IResolvable) {
    this._skipResourceInUseCheck = value;
  }
  public resetSkipResourceInUseCheck() {
    this._skipResourceInUseCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipResourceInUseCheckInput() {
    return this._skipResourceInUseCheck;
  }

  // action_group_executor - computed: false, optional: true, required: false
  private _actionGroupExecutor = new BedrockagentAgentActionGroupActionGroupExecutorList(this, "action_group_executor", false);
  public get actionGroupExecutor() {
    return this._actionGroupExecutor;
  }
  public putActionGroupExecutor(value: BedrockagentAgentActionGroupActionGroupExecutor[] | cdktf.IResolvable) {
    this._actionGroupExecutor.internalValue = value;
  }
  public resetActionGroupExecutor() {
    this._actionGroupExecutor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionGroupExecutorInput() {
    return this._actionGroupExecutor.internalValue;
  }

  // api_schema - computed: false, optional: true, required: false
  private _apiSchema = new BedrockagentAgentActionGroupApiSchemaList(this, "api_schema", false);
  public get apiSchema() {
    return this._apiSchema;
  }
  public putApiSchema(value: BedrockagentAgentActionGroupApiSchema[] | cdktf.IResolvable) {
    this._apiSchema.internalValue = value;
  }
  public resetApiSchema() {
    this._apiSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSchemaInput() {
    return this._apiSchema.internalValue;
  }

  // function_schema - computed: false, optional: true, required: false
  private _functionSchema = new BedrockagentAgentActionGroupFunctionSchemaList(this, "function_schema", false);
  public get functionSchema() {
    return this._functionSchema;
  }
  public putFunctionSchema(value: BedrockagentAgentActionGroupFunctionSchema[] | cdktf.IResolvable) {
    this._functionSchema.internalValue = value;
  }
  public resetFunctionSchema() {
    this._functionSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionSchemaInput() {
    return this._functionSchema.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BedrockagentAgentActionGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BedrockagentAgentActionGroupTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_group_name: cdktf.stringToTerraform(this._actionGroupName),
      action_group_state: cdktf.stringToTerraform(this._actionGroupState),
      agent_id: cdktf.stringToTerraform(this._agentId),
      agent_version: cdktf.stringToTerraform(this._agentVersion),
      description: cdktf.stringToTerraform(this._description),
      parent_action_group_signature: cdktf.stringToTerraform(this._parentActionGroupSignature),
      prepare_agent: cdktf.booleanToTerraform(this._prepareAgent),
      skip_resource_in_use_check: cdktf.booleanToTerraform(this._skipResourceInUseCheck),
      action_group_executor: cdktf.listMapper(bedrockagentAgentActionGroupActionGroupExecutorToTerraform, true)(this._actionGroupExecutor.internalValue),
      api_schema: cdktf.listMapper(bedrockagentAgentActionGroupApiSchemaToTerraform, true)(this._apiSchema.internalValue),
      function_schema: cdktf.listMapper(bedrockagentAgentActionGroupFunctionSchemaToTerraform, true)(this._functionSchema.internalValue),
      timeouts: bedrockagentAgentActionGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_group_name: {
        value: cdktf.stringToHclTerraform(this._actionGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_group_state: {
        value: cdktf.stringToHclTerraform(this._actionGroupState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_id: {
        value: cdktf.stringToHclTerraform(this._agentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_version: {
        value: cdktf.stringToHclTerraform(this._agentVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_action_group_signature: {
        value: cdktf.stringToHclTerraform(this._parentActionGroupSignature),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prepare_agent: {
        value: cdktf.booleanToHclTerraform(this._prepareAgent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_resource_in_use_check: {
        value: cdktf.booleanToHclTerraform(this._skipResourceInUseCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      action_group_executor: {
        value: cdktf.listMapperHcl(bedrockagentAgentActionGroupActionGroupExecutorToHclTerraform, true)(this._actionGroupExecutor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentAgentActionGroupActionGroupExecutorList",
      },
      api_schema: {
        value: cdktf.listMapperHcl(bedrockagentAgentActionGroupApiSchemaToHclTerraform, true)(this._apiSchema.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentAgentActionGroupApiSchemaList",
      },
      function_schema: {
        value: cdktf.listMapperHcl(bedrockagentAgentActionGroupFunctionSchemaToHclTerraform, true)(this._functionSchema.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentAgentActionGroupFunctionSchemaList",
      },
      timeouts: {
        value: bedrockagentAgentActionGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockagentAgentActionGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
