/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/bedrock_custom_model
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BedrockCustomModelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/bedrock_custom_model#base_model_identifier BedrockCustomModel#base_model_identifier}
  */
  readonly baseModelIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/bedrock_custom_model#custom_model_kms_key_id BedrockCustomModel#custom_model_kms_key_id}
  */
  readonly customModelKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/bedrock_custom_model#custom_model_name BedrockCustomModel#custom_model_name}
  */
  readonly customModelName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/bedrock_custom_model#customization_type BedrockCustomModel#customization_type}
  */
  readonly customizationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/bedrock_custom_model#hyperparameters BedrockCustomModel#hyperparameters}
  */
  readonly hyperparameters: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/bedrock_custom_model#job_name BedrockCustomModel#job_name}
  */
  readonly jobName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/bedrock_custom_model#role_arn BedrockCustomModel#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/bedrock_custom_model#tags BedrockCustomModel#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * output_data_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/bedrock_custom_model#output_data_config BedrockCustomModel#output_data_config}
  */
  readonly outputDataConfig?: BedrockCustomModelOutputDataConfig[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/bedrock_custom_model#timeouts BedrockCustomModel#timeouts}
  */
  readonly timeouts?: BedrockCustomModelTimeouts;
  /**
  * training_data_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/bedrock_custom_model#training_data_config BedrockCustomModel#training_data_config}
  */
  readonly trainingDataConfig?: BedrockCustomModelTrainingDataConfig[] | cdktf.IResolvable;
  /**
  * validation_data_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/bedrock_custom_model#validation_data_config BedrockCustomModel#validation_data_config}
  */
  readonly validationDataConfig?: BedrockCustomModelValidationDataConfig[] | cdktf.IResolvable;
  /**
  * vpc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/bedrock_custom_model#vpc_config BedrockCustomModel#vpc_config}
  */
  readonly vpcConfig?: BedrockCustomModelVpcConfig[] | cdktf.IResolvable;
}
export interface BedrockCustomModelTrainingMetrics {
}

export function bedrockCustomModelTrainingMetricsToTerraform(struct?: BedrockCustomModelTrainingMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bedrockCustomModelTrainingMetricsToHclTerraform(struct?: BedrockCustomModelTrainingMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockCustomModelTrainingMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BedrockCustomModelTrainingMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockCustomModelTrainingMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // training_loss - computed: true, optional: false, required: false
  public get trainingLoss() {
    return this.getNumberAttribute('training_loss');
  }
}

export class BedrockCustomModelTrainingMetricsList extends cdktf.ComplexList {

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
  public get(index: number): BedrockCustomModelTrainingMetricsOutputReference {
    return new BedrockCustomModelTrainingMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockCustomModelValidationMetrics {
}

export function bedrockCustomModelValidationMetricsToTerraform(struct?: BedrockCustomModelValidationMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bedrockCustomModelValidationMetricsToHclTerraform(struct?: BedrockCustomModelValidationMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockCustomModelValidationMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BedrockCustomModelValidationMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockCustomModelValidationMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // validation_loss - computed: true, optional: false, required: false
  public get validationLoss() {
    return this.getNumberAttribute('validation_loss');
  }
}

export class BedrockCustomModelValidationMetricsList extends cdktf.ComplexList {

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
  public get(index: number): BedrockCustomModelValidationMetricsOutputReference {
    return new BedrockCustomModelValidationMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockCustomModelOutputDataConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/bedrock_custom_model#s3_uri BedrockCustomModel#s3_uri}
  */
  readonly s3Uri: string;
}

export function bedrockCustomModelOutputDataConfigToTerraform(struct?: BedrockCustomModelOutputDataConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}


export function bedrockCustomModelOutputDataConfigToHclTerraform(struct?: BedrockCustomModelOutputDataConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_uri: {
      value: cdktf.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockCustomModelOutputDataConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockCustomModelOutputDataConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockCustomModelOutputDataConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Uri = value.s3Uri;
    }
  }

  // s3_uri - computed: false, optional: false, required: true
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}

export class BedrockCustomModelOutputDataConfigList extends cdktf.ComplexList {
  public internalValue? : BedrockCustomModelOutputDataConfig[] | cdktf.IResolvable

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
  public get(index: number): BedrockCustomModelOutputDataConfigOutputReference {
    return new BedrockCustomModelOutputDataConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockCustomModelTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/bedrock_custom_model#create BedrockCustomModel#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/bedrock_custom_model#delete BedrockCustomModel#delete}
  */
  readonly delete?: string;
}

export function bedrockCustomModelTimeoutsToTerraform(struct?: BedrockCustomModelTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function bedrockCustomModelTimeoutsToHclTerraform(struct?: BedrockCustomModelTimeouts | cdktf.IResolvable): any {
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
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockCustomModelTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockCustomModelTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockCustomModelTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
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

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}
export interface BedrockCustomModelTrainingDataConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/bedrock_custom_model#s3_uri BedrockCustomModel#s3_uri}
  */
  readonly s3Uri: string;
}

export function bedrockCustomModelTrainingDataConfigToTerraform(struct?: BedrockCustomModelTrainingDataConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}


export function bedrockCustomModelTrainingDataConfigToHclTerraform(struct?: BedrockCustomModelTrainingDataConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_uri: {
      value: cdktf.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockCustomModelTrainingDataConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockCustomModelTrainingDataConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockCustomModelTrainingDataConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Uri = value.s3Uri;
    }
  }

  // s3_uri - computed: false, optional: false, required: true
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}

export class BedrockCustomModelTrainingDataConfigList extends cdktf.ComplexList {
  public internalValue? : BedrockCustomModelTrainingDataConfig[] | cdktf.IResolvable

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
  public get(index: number): BedrockCustomModelTrainingDataConfigOutputReference {
    return new BedrockCustomModelTrainingDataConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockCustomModelValidationDataConfigValidator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/bedrock_custom_model#s3_uri BedrockCustomModel#s3_uri}
  */
  readonly s3Uri: string;
}

export function bedrockCustomModelValidationDataConfigValidatorToTerraform(struct?: BedrockCustomModelValidationDataConfigValidator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}


export function bedrockCustomModelValidationDataConfigValidatorToHclTerraform(struct?: BedrockCustomModelValidationDataConfigValidator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_uri: {
      value: cdktf.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockCustomModelValidationDataConfigValidatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockCustomModelValidationDataConfigValidator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockCustomModelValidationDataConfigValidator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Uri = value.s3Uri;
    }
  }

  // s3_uri - computed: false, optional: false, required: true
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}

export class BedrockCustomModelValidationDataConfigValidatorList extends cdktf.ComplexList {
  public internalValue? : BedrockCustomModelValidationDataConfigValidator[] | cdktf.IResolvable

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
  public get(index: number): BedrockCustomModelValidationDataConfigValidatorOutputReference {
    return new BedrockCustomModelValidationDataConfigValidatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockCustomModelValidationDataConfig {
  /**
  * validator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/bedrock_custom_model#validator BedrockCustomModel#validator}
  */
  readonly validator?: BedrockCustomModelValidationDataConfigValidator[] | cdktf.IResolvable;
}

export function bedrockCustomModelValidationDataConfigToTerraform(struct?: BedrockCustomModelValidationDataConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    validator: cdktf.listMapper(bedrockCustomModelValidationDataConfigValidatorToTerraform, true)(struct!.validator),
  }
}


export function bedrockCustomModelValidationDataConfigToHclTerraform(struct?: BedrockCustomModelValidationDataConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    validator: {
      value: cdktf.listMapperHcl(bedrockCustomModelValidationDataConfigValidatorToHclTerraform, true)(struct!.validator),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockCustomModelValidationDataConfigValidatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockCustomModelValidationDataConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockCustomModelValidationDataConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._validator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validator = this._validator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockCustomModelValidationDataConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._validator.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._validator.internalValue = value.validator;
    }
  }

  // validator - computed: false, optional: true, required: false
  private _validator = new BedrockCustomModelValidationDataConfigValidatorList(this, "validator", false);
  public get validator() {
    return this._validator;
  }
  public putValidator(value: BedrockCustomModelValidationDataConfigValidator[] | cdktf.IResolvable) {
    this._validator.internalValue = value;
  }
  public resetValidator() {
    this._validator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validatorInput() {
    return this._validator.internalValue;
  }
}

export class BedrockCustomModelValidationDataConfigList extends cdktf.ComplexList {
  public internalValue? : BedrockCustomModelValidationDataConfig[] | cdktf.IResolvable

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
  public get(index: number): BedrockCustomModelValidationDataConfigOutputReference {
    return new BedrockCustomModelValidationDataConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockCustomModelVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/bedrock_custom_model#security_group_ids BedrockCustomModel#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/bedrock_custom_model#subnet_ids BedrockCustomModel#subnet_ids}
  */
  readonly subnetIds: string[];
}

export function bedrockCustomModelVpcConfigToTerraform(struct?: BedrockCustomModelVpcConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function bedrockCustomModelVpcConfigToHclTerraform(struct?: BedrockCustomModelVpcConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockCustomModelVpcConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockCustomModelVpcConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockCustomModelVpcConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
    }
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }
}

export class BedrockCustomModelVpcConfigList extends cdktf.ComplexList {
  public internalValue? : BedrockCustomModelVpcConfig[] | cdktf.IResolvable

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
  public get(index: number): BedrockCustomModelVpcConfigOutputReference {
    return new BedrockCustomModelVpcConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/bedrock_custom_model aws_bedrock_custom_model}
*/
export class BedrockCustomModel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrock_custom_model";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BedrockCustomModel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockCustomModel to import
  * @param importFromId The id of the existing BedrockCustomModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/bedrock_custom_model#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockCustomModel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrock_custom_model", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/bedrock_custom_model aws_bedrock_custom_model} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockCustomModelConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockCustomModelConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrock_custom_model',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.41.0',
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
    this._baseModelIdentifier = config.baseModelIdentifier;
    this._customModelKmsKeyId = config.customModelKmsKeyId;
    this._customModelName = config.customModelName;
    this._customizationType = config.customizationType;
    this._hyperparameters = config.hyperparameters;
    this._jobName = config.jobName;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._outputDataConfig.internalValue = config.outputDataConfig;
    this._timeouts.internalValue = config.timeouts;
    this._trainingDataConfig.internalValue = config.trainingDataConfig;
    this._validationDataConfig.internalValue = config.validationDataConfig;
    this._vpcConfig.internalValue = config.vpcConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_model_identifier - computed: false, optional: false, required: true
  private _baseModelIdentifier?: string; 
  public get baseModelIdentifier() {
    return this.getStringAttribute('base_model_identifier');
  }
  public set baseModelIdentifier(value: string) {
    this._baseModelIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseModelIdentifierInput() {
    return this._baseModelIdentifier;
  }

  // custom_model_arn - computed: true, optional: false, required: false
  public get customModelArn() {
    return this.getStringAttribute('custom_model_arn');
  }

  // custom_model_kms_key_id - computed: false, optional: true, required: false
  private _customModelKmsKeyId?: string; 
  public get customModelKmsKeyId() {
    return this.getStringAttribute('custom_model_kms_key_id');
  }
  public set customModelKmsKeyId(value: string) {
    this._customModelKmsKeyId = value;
  }
  public resetCustomModelKmsKeyId() {
    this._customModelKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customModelKmsKeyIdInput() {
    return this._customModelKmsKeyId;
  }

  // custom_model_name - computed: false, optional: false, required: true
  private _customModelName?: string; 
  public get customModelName() {
    return this.getStringAttribute('custom_model_name');
  }
  public set customModelName(value: string) {
    this._customModelName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customModelNameInput() {
    return this._customModelName;
  }

  // customization_type - computed: true, optional: true, required: false
  private _customizationType?: string; 
  public get customizationType() {
    return this.getStringAttribute('customization_type');
  }
  public set customizationType(value: string) {
    this._customizationType = value;
  }
  public resetCustomizationType() {
    this._customizationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizationTypeInput() {
    return this._customizationType;
  }

  // hyperparameters - computed: false, optional: false, required: true
  private _hyperparameters?: { [key: string]: string }; 
  public get hyperparameters() {
    return this.getStringMapAttribute('hyperparameters');
  }
  public set hyperparameters(value: { [key: string]: string }) {
    this._hyperparameters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperparametersInput() {
    return this._hyperparameters;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // job_arn - computed: true, optional: false, required: false
  public get jobArn() {
    return this.getStringAttribute('job_arn');
  }

  // job_name - computed: false, optional: false, required: true
  private _jobName?: string; 
  public get jobName() {
    return this.getStringAttribute('job_name');
  }
  public set jobName(value: string) {
    this._jobName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobNameInput() {
    return this._jobName;
  }

  // job_status - computed: true, optional: false, required: false
  public get jobStatus() {
    return this.getStringAttribute('job_status');
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
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

  // training_metrics - computed: true, optional: false, required: false
  private _trainingMetrics = new BedrockCustomModelTrainingMetricsList(this, "training_metrics", false);
  public get trainingMetrics() {
    return this._trainingMetrics;
  }

  // validation_metrics - computed: true, optional: false, required: false
  private _validationMetrics = new BedrockCustomModelValidationMetricsList(this, "validation_metrics", false);
  public get validationMetrics() {
    return this._validationMetrics;
  }

  // output_data_config - computed: false, optional: true, required: false
  private _outputDataConfig = new BedrockCustomModelOutputDataConfigList(this, "output_data_config", false);
  public get outputDataConfig() {
    return this._outputDataConfig;
  }
  public putOutputDataConfig(value: BedrockCustomModelOutputDataConfig[] | cdktf.IResolvable) {
    this._outputDataConfig.internalValue = value;
  }
  public resetOutputDataConfig() {
    this._outputDataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputDataConfigInput() {
    return this._outputDataConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BedrockCustomModelTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BedrockCustomModelTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // training_data_config - computed: false, optional: true, required: false
  private _trainingDataConfig = new BedrockCustomModelTrainingDataConfigList(this, "training_data_config", false);
  public get trainingDataConfig() {
    return this._trainingDataConfig;
  }
  public putTrainingDataConfig(value: BedrockCustomModelTrainingDataConfig[] | cdktf.IResolvable) {
    this._trainingDataConfig.internalValue = value;
  }
  public resetTrainingDataConfig() {
    this._trainingDataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingDataConfigInput() {
    return this._trainingDataConfig.internalValue;
  }

  // validation_data_config - computed: false, optional: true, required: false
  private _validationDataConfig = new BedrockCustomModelValidationDataConfigList(this, "validation_data_config", false);
  public get validationDataConfig() {
    return this._validationDataConfig;
  }
  public putValidationDataConfig(value: BedrockCustomModelValidationDataConfig[] | cdktf.IResolvable) {
    this._validationDataConfig.internalValue = value;
  }
  public resetValidationDataConfig() {
    this._validationDataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationDataConfigInput() {
    return this._validationDataConfig.internalValue;
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig = new BedrockCustomModelVpcConfigList(this, "vpc_config", false);
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: BedrockCustomModelVpcConfig[] | cdktf.IResolvable) {
    this._vpcConfig.internalValue = value;
  }
  public resetVpcConfig() {
    this._vpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_model_identifier: cdktf.stringToTerraform(this._baseModelIdentifier),
      custom_model_kms_key_id: cdktf.stringToTerraform(this._customModelKmsKeyId),
      custom_model_name: cdktf.stringToTerraform(this._customModelName),
      customization_type: cdktf.stringToTerraform(this._customizationType),
      hyperparameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._hyperparameters),
      job_name: cdktf.stringToTerraform(this._jobName),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      output_data_config: cdktf.listMapper(bedrockCustomModelOutputDataConfigToTerraform, true)(this._outputDataConfig.internalValue),
      timeouts: bedrockCustomModelTimeoutsToTerraform(this._timeouts.internalValue),
      training_data_config: cdktf.listMapper(bedrockCustomModelTrainingDataConfigToTerraform, true)(this._trainingDataConfig.internalValue),
      validation_data_config: cdktf.listMapper(bedrockCustomModelValidationDataConfigToTerraform, true)(this._validationDataConfig.internalValue),
      vpc_config: cdktf.listMapper(bedrockCustomModelVpcConfigToTerraform, true)(this._vpcConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_model_identifier: {
        value: cdktf.stringToHclTerraform(this._baseModelIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_model_kms_key_id: {
        value: cdktf.stringToHclTerraform(this._customModelKmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_model_name: {
        value: cdktf.stringToHclTerraform(this._customModelName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customization_type: {
        value: cdktf.stringToHclTerraform(this._customizationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hyperparameters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._hyperparameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      job_name: {
        value: cdktf.stringToHclTerraform(this._jobName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
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
      output_data_config: {
        value: cdktf.listMapperHcl(bedrockCustomModelOutputDataConfigToHclTerraform, true)(this._outputDataConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockCustomModelOutputDataConfigList",
      },
      timeouts: {
        value: bedrockCustomModelTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockCustomModelTimeouts",
      },
      training_data_config: {
        value: cdktf.listMapperHcl(bedrockCustomModelTrainingDataConfigToHclTerraform, true)(this._trainingDataConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockCustomModelTrainingDataConfigList",
      },
      validation_data_config: {
        value: cdktf.listMapperHcl(bedrockCustomModelValidationDataConfigToHclTerraform, true)(this._validationDataConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockCustomModelValidationDataConfigList",
      },
      vpc_config: {
        value: cdktf.listMapperHcl(bedrockCustomModelVpcConfigToHclTerraform, true)(this._vpcConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockCustomModelVpcConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
