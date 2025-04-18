/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/cleanrooms_membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CleanroomsMembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/cleanrooms_membership#collaboration_id CleanroomsMembership#collaboration_id}
  */
  readonly collaborationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/cleanrooms_membership#query_log_status CleanroomsMembership#query_log_status}
  */
  readonly queryLogStatus: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/cleanrooms_membership#tags CleanroomsMembership#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * default_result_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/cleanrooms_membership#default_result_configuration CleanroomsMembership#default_result_configuration}
  */
  readonly defaultResultConfiguration?: CleanroomsMembershipDefaultResultConfiguration[] | cdktf.IResolvable;
  /**
  * payment_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/cleanrooms_membership#payment_configuration CleanroomsMembership#payment_configuration}
  */
  readonly paymentConfiguration?: CleanroomsMembershipPaymentConfiguration[] | cdktf.IResolvable;
}
export interface CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/cleanrooms_membership#bucket CleanroomsMembership#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/cleanrooms_membership#key_prefix CleanroomsMembership#key_prefix}
  */
  readonly keyPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/cleanrooms_membership#result_format CleanroomsMembership#result_format}
  */
  readonly resultFormat: string;
}

export function cleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3ToTerraform(struct?: CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key_prefix: cdktf.stringToTerraform(struct!.keyPrefix),
    result_format: cdktf.stringToTerraform(struct!.resultFormat),
  }
}


export function cleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3ToHclTerraform(struct?: CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_prefix: {
      value: cdktf.stringToHclTerraform(struct!.keyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result_format: {
      value: cdktf.stringToHclTerraform(struct!.resultFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._keyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPrefix = this._keyPrefix;
    }
    if (this._resultFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultFormat = this._resultFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._keyPrefix = undefined;
      this._resultFormat = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._keyPrefix = value.keyPrefix;
      this._resultFormat = value.resultFormat;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // key_prefix - computed: false, optional: true, required: false
  private _keyPrefix?: string; 
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }
  public set keyPrefix(value: string) {
    this._keyPrefix = value;
  }
  public resetKeyPrefix() {
    this._keyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPrefixInput() {
    return this._keyPrefix;
  }

  // result_format - computed: false, optional: false, required: true
  private _resultFormat?: string; 
  public get resultFormat() {
    return this.getStringAttribute('result_format');
  }
  public set resultFormat(value: string) {
    this._resultFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resultFormatInput() {
    return this._resultFormat;
  }
}

export class CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List extends cdktf.ComplexList {
  public internalValue? : CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3[] | cdktf.IResolvable

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
  public get(index: number): CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference {
    return new CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CleanroomsMembershipDefaultResultConfigurationOutputConfiguration {
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/cleanrooms_membership#s3 CleanroomsMembership#s3}
  */
  readonly s3?: CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3[] | cdktf.IResolvable;
}

export function cleanroomsMembershipDefaultResultConfigurationOutputConfigurationToTerraform(struct?: CleanroomsMembershipDefaultResultConfigurationOutputConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3: cdktf.listMapper(cleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3ToTerraform, true)(struct!.s3),
  }
}


export function cleanroomsMembershipDefaultResultConfigurationOutputConfigurationToHclTerraform(struct?: CleanroomsMembershipDefaultResultConfigurationOutputConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3: {
      value: cdktf.listMapperHcl(cleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3ToHclTerraform, true)(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CleanroomsMembershipDefaultResultConfigurationOutputConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsMembershipDefaultResultConfigurationOutputConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3.internalValue = value.s3;
    }
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List(this, "s3", false);
  public get s3() {
    return this._s3;
  }
  public putS3(value: CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3[] | cdktf.IResolvable) {
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

export class CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList extends cdktf.ComplexList {
  public internalValue? : CleanroomsMembershipDefaultResultConfigurationOutputConfiguration[] | cdktf.IResolvable

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
  public get(index: number): CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference {
    return new CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CleanroomsMembershipDefaultResultConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/cleanrooms_membership#role_arn CleanroomsMembership#role_arn}
  */
  readonly roleArn?: string;
  /**
  * output_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/cleanrooms_membership#output_configuration CleanroomsMembership#output_configuration}
  */
  readonly outputConfiguration?: CleanroomsMembershipDefaultResultConfigurationOutputConfiguration[] | cdktf.IResolvable;
}

export function cleanroomsMembershipDefaultResultConfigurationToTerraform(struct?: CleanroomsMembershipDefaultResultConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    output_configuration: cdktf.listMapper(cleanroomsMembershipDefaultResultConfigurationOutputConfigurationToTerraform, true)(struct!.outputConfiguration),
  }
}


export function cleanroomsMembershipDefaultResultConfigurationToHclTerraform(struct?: CleanroomsMembershipDefaultResultConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_configuration: {
      value: cdktf.listMapperHcl(cleanroomsMembershipDefaultResultConfigurationOutputConfigurationToHclTerraform, true)(struct!.outputConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsMembershipDefaultResultConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CleanroomsMembershipDefaultResultConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._outputConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputConfiguration = this._outputConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsMembershipDefaultResultConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleArn = undefined;
      this._outputConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleArn = value.roleArn;
      this._outputConfiguration.internalValue = value.outputConfiguration;
    }
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // output_configuration - computed: false, optional: true, required: false
  private _outputConfiguration = new CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList(this, "output_configuration", false);
  public get outputConfiguration() {
    return this._outputConfiguration;
  }
  public putOutputConfiguration(value: CleanroomsMembershipDefaultResultConfigurationOutputConfiguration[] | cdktf.IResolvable) {
    this._outputConfiguration.internalValue = value;
  }
  public resetOutputConfiguration() {
    this._outputConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputConfigurationInput() {
    return this._outputConfiguration.internalValue;
  }
}

export class CleanroomsMembershipDefaultResultConfigurationList extends cdktf.ComplexList {
  public internalValue? : CleanroomsMembershipDefaultResultConfiguration[] | cdktf.IResolvable

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
  public get(index: number): CleanroomsMembershipDefaultResultConfigurationOutputReference {
    return new CleanroomsMembershipDefaultResultConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CleanroomsMembershipPaymentConfigurationQueryCompute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}
  */
  readonly isResponsible: boolean | cdktf.IResolvable;
}

export function cleanroomsMembershipPaymentConfigurationQueryComputeToTerraform(struct?: CleanroomsMembershipPaymentConfigurationQueryCompute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_responsible: cdktf.booleanToTerraform(struct!.isResponsible),
  }
}


export function cleanroomsMembershipPaymentConfigurationQueryComputeToHclTerraform(struct?: CleanroomsMembershipPaymentConfigurationQueryCompute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_responsible: {
      value: cdktf.booleanToHclTerraform(struct!.isResponsible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CleanroomsMembershipPaymentConfigurationQueryCompute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isResponsible !== undefined) {
      hasAnyValues = true;
      internalValueResult.isResponsible = this._isResponsible;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsMembershipPaymentConfigurationQueryCompute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isResponsible = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isResponsible = value.isResponsible;
    }
  }

  // is_responsible - computed: false, optional: false, required: true
  private _isResponsible?: boolean | cdktf.IResolvable; 
  public get isResponsible() {
    return this.getBooleanAttribute('is_responsible');
  }
  public set isResponsible(value: boolean | cdktf.IResolvable) {
    this._isResponsible = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isResponsibleInput() {
    return this._isResponsible;
  }
}

export class CleanroomsMembershipPaymentConfigurationQueryComputeList extends cdktf.ComplexList {
  public internalValue? : CleanroomsMembershipPaymentConfigurationQueryCompute[] | cdktf.IResolvable

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
  public get(index: number): CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference {
    return new CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CleanroomsMembershipPaymentConfiguration {
  /**
  * query_compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/cleanrooms_membership#query_compute CleanroomsMembership#query_compute}
  */
  readonly queryCompute?: CleanroomsMembershipPaymentConfigurationQueryCompute[] | cdktf.IResolvable;
}

export function cleanroomsMembershipPaymentConfigurationToTerraform(struct?: CleanroomsMembershipPaymentConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_compute: cdktf.listMapper(cleanroomsMembershipPaymentConfigurationQueryComputeToTerraform, true)(struct!.queryCompute),
  }
}


export function cleanroomsMembershipPaymentConfigurationToHclTerraform(struct?: CleanroomsMembershipPaymentConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query_compute: {
      value: cdktf.listMapperHcl(cleanroomsMembershipPaymentConfigurationQueryComputeToHclTerraform, true)(struct!.queryCompute),
      isBlock: true,
      type: "list",
      storageClassType: "CleanroomsMembershipPaymentConfigurationQueryComputeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsMembershipPaymentConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CleanroomsMembershipPaymentConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryCompute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryCompute = this._queryCompute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsMembershipPaymentConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._queryCompute.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._queryCompute.internalValue = value.queryCompute;
    }
  }

  // query_compute - computed: false, optional: true, required: false
  private _queryCompute = new CleanroomsMembershipPaymentConfigurationQueryComputeList(this, "query_compute", false);
  public get queryCompute() {
    return this._queryCompute;
  }
  public putQueryCompute(value: CleanroomsMembershipPaymentConfigurationQueryCompute[] | cdktf.IResolvable) {
    this._queryCompute.internalValue = value;
  }
  public resetQueryCompute() {
    this._queryCompute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryComputeInput() {
    return this._queryCompute.internalValue;
  }
}

export class CleanroomsMembershipPaymentConfigurationList extends cdktf.ComplexList {
  public internalValue? : CleanroomsMembershipPaymentConfiguration[] | cdktf.IResolvable

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
  public get(index: number): CleanroomsMembershipPaymentConfigurationOutputReference {
    return new CleanroomsMembershipPaymentConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/cleanrooms_membership aws_cleanrooms_membership}
*/
export class CleanroomsMembership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cleanrooms_membership";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CleanroomsMembership resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CleanroomsMembership to import
  * @param importFromId The id of the existing CleanroomsMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/cleanrooms_membership#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CleanroomsMembership to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cleanrooms_membership", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/cleanrooms_membership aws_cleanrooms_membership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CleanroomsMembershipConfig
  */
  public constructor(scope: Construct, id: string, config: CleanroomsMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cleanrooms_membership',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.95.0',
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
    this._collaborationId = config.collaborationId;
    this._queryLogStatus = config.queryLogStatus;
    this._tags = config.tags;
    this._defaultResultConfiguration.internalValue = config.defaultResultConfiguration;
    this._paymentConfiguration.internalValue = config.paymentConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // collaboration_arn - computed: true, optional: false, required: false
  public get collaborationArn() {
    return this.getStringAttribute('collaboration_arn');
  }

  // collaboration_creator_account_id - computed: true, optional: false, required: false
  public get collaborationCreatorAccountId() {
    return this.getStringAttribute('collaboration_creator_account_id');
  }

  // collaboration_creator_display_name - computed: true, optional: false, required: false
  public get collaborationCreatorDisplayName() {
    return this.getStringAttribute('collaboration_creator_display_name');
  }

  // collaboration_id - computed: false, optional: false, required: true
  private _collaborationId?: string; 
  public get collaborationId() {
    return this.getStringAttribute('collaboration_id');
  }
  public set collaborationId(value: string) {
    this._collaborationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collaborationIdInput() {
    return this._collaborationId;
  }

  // collaboration_name - computed: true, optional: false, required: false
  public get collaborationName() {
    return this.getStringAttribute('collaboration_name');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member_abilities - computed: true, optional: false, required: false
  public get memberAbilities() {
    return this.getListAttribute('member_abilities');
  }

  // query_log_status - computed: false, optional: false, required: true
  private _queryLogStatus?: string; 
  public get queryLogStatus() {
    return this.getStringAttribute('query_log_status');
  }
  public set queryLogStatus(value: string) {
    this._queryLogStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryLogStatusInput() {
    return this._queryLogStatus;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // default_result_configuration - computed: false, optional: true, required: false
  private _defaultResultConfiguration = new CleanroomsMembershipDefaultResultConfigurationList(this, "default_result_configuration", false);
  public get defaultResultConfiguration() {
    return this._defaultResultConfiguration;
  }
  public putDefaultResultConfiguration(value: CleanroomsMembershipDefaultResultConfiguration[] | cdktf.IResolvable) {
    this._defaultResultConfiguration.internalValue = value;
  }
  public resetDefaultResultConfiguration() {
    this._defaultResultConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResultConfigurationInput() {
    return this._defaultResultConfiguration.internalValue;
  }

  // payment_configuration - computed: false, optional: true, required: false
  private _paymentConfiguration = new CleanroomsMembershipPaymentConfigurationList(this, "payment_configuration", false);
  public get paymentConfiguration() {
    return this._paymentConfiguration;
  }
  public putPaymentConfiguration(value: CleanroomsMembershipPaymentConfiguration[] | cdktf.IResolvable) {
    this._paymentConfiguration.internalValue = value;
  }
  public resetPaymentConfiguration() {
    this._paymentConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentConfigurationInput() {
    return this._paymentConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      collaboration_id: cdktf.stringToTerraform(this._collaborationId),
      query_log_status: cdktf.stringToTerraform(this._queryLogStatus),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      default_result_configuration: cdktf.listMapper(cleanroomsMembershipDefaultResultConfigurationToTerraform, true)(this._defaultResultConfiguration.internalValue),
      payment_configuration: cdktf.listMapper(cleanroomsMembershipPaymentConfigurationToTerraform, true)(this._paymentConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      collaboration_id: {
        value: cdktf.stringToHclTerraform(this._collaborationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_log_status: {
        value: cdktf.stringToHclTerraform(this._queryLogStatus),
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
      default_result_configuration: {
        value: cdktf.listMapperHcl(cleanroomsMembershipDefaultResultConfigurationToHclTerraform, true)(this._defaultResultConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CleanroomsMembershipDefaultResultConfigurationList",
      },
      payment_configuration: {
        value: cdktf.listMapperHcl(cleanroomsMembershipPaymentConfigurationToHclTerraform, true)(this._paymentConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CleanroomsMembershipPaymentConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
