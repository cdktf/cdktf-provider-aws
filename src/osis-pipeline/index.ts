/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/osis_pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OsisPipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/osis_pipeline#max_units OsisPipeline#max_units}
  */
  readonly maxUnits: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/osis_pipeline#min_units OsisPipeline#min_units}
  */
  readonly minUnits: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/osis_pipeline#pipeline_configuration_body OsisPipeline#pipeline_configuration_body}
  */
  readonly pipelineConfigurationBody: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/osis_pipeline#pipeline_name OsisPipeline#pipeline_name}
  */
  readonly pipelineName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/osis_pipeline#tags OsisPipeline#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * buffer_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/osis_pipeline#buffer_options OsisPipeline#buffer_options}
  */
  readonly bufferOptions?: OsisPipelineBufferOptions[] | cdktf.IResolvable;
  /**
  * encryption_at_rest_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/osis_pipeline#encryption_at_rest_options OsisPipeline#encryption_at_rest_options}
  */
  readonly encryptionAtRestOptions?: OsisPipelineEncryptionAtRestOptions[] | cdktf.IResolvable;
  /**
  * log_publishing_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/osis_pipeline#log_publishing_options OsisPipeline#log_publishing_options}
  */
  readonly logPublishingOptions?: OsisPipelineLogPublishingOptions[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/osis_pipeline#timeouts OsisPipeline#timeouts}
  */
  readonly timeouts?: OsisPipelineTimeouts;
  /**
  * vpc_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/osis_pipeline#vpc_options OsisPipeline#vpc_options}
  */
  readonly vpcOptions?: OsisPipelineVpcOptions[] | cdktf.IResolvable;
}
export interface OsisPipelineBufferOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/osis_pipeline#persistent_buffer_enabled OsisPipeline#persistent_buffer_enabled}
  */
  readonly persistentBufferEnabled: boolean | cdktf.IResolvable;
}

export function osisPipelineBufferOptionsToTerraform(struct?: OsisPipelineBufferOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    persistent_buffer_enabled: cdktf.booleanToTerraform(struct!.persistentBufferEnabled),
  }
}


export function osisPipelineBufferOptionsToHclTerraform(struct?: OsisPipelineBufferOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    persistent_buffer_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.persistentBufferEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsisPipelineBufferOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsisPipelineBufferOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._persistentBufferEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentBufferEnabled = this._persistentBufferEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsisPipelineBufferOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._persistentBufferEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._persistentBufferEnabled = value.persistentBufferEnabled;
    }
  }

  // persistent_buffer_enabled - computed: false, optional: false, required: true
  private _persistentBufferEnabled?: boolean | cdktf.IResolvable; 
  public get persistentBufferEnabled() {
    return this.getBooleanAttribute('persistent_buffer_enabled');
  }
  public set persistentBufferEnabled(value: boolean | cdktf.IResolvable) {
    this._persistentBufferEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentBufferEnabledInput() {
    return this._persistentBufferEnabled;
  }
}

export class OsisPipelineBufferOptionsList extends cdktf.ComplexList {
  public internalValue? : OsisPipelineBufferOptions[] | cdktf.IResolvable

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
  public get(index: number): OsisPipelineBufferOptionsOutputReference {
    return new OsisPipelineBufferOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsisPipelineEncryptionAtRestOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/osis_pipeline#kms_key_arn OsisPipeline#kms_key_arn}
  */
  readonly kmsKeyArn: string;
}

export function osisPipelineEncryptionAtRestOptionsToTerraform(struct?: OsisPipelineEncryptionAtRestOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
  }
}


export function osisPipelineEncryptionAtRestOptionsToHclTerraform(struct?: OsisPipelineEncryptionAtRestOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_arn: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsisPipelineEncryptionAtRestOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsisPipelineEncryptionAtRestOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsisPipelineEncryptionAtRestOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyArn = value.kmsKeyArn;
    }
  }

  // kms_key_arn - computed: false, optional: false, required: true
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }
}

export class OsisPipelineEncryptionAtRestOptionsList extends cdktf.ComplexList {
  public internalValue? : OsisPipelineEncryptionAtRestOptions[] | cdktf.IResolvable

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
  public get(index: number): OsisPipelineEncryptionAtRestOptionsOutputReference {
    return new OsisPipelineEncryptionAtRestOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsisPipelineLogPublishingOptionsCloudwatchLogDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/osis_pipeline#log_group OsisPipeline#log_group}
  */
  readonly logGroup: string;
}

export function osisPipelineLogPublishingOptionsCloudwatchLogDestinationToTerraform(struct?: OsisPipelineLogPublishingOptionsCloudwatchLogDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_group: cdktf.stringToTerraform(struct!.logGroup),
  }
}


export function osisPipelineLogPublishingOptionsCloudwatchLogDestinationToHclTerraform(struct?: OsisPipelineLogPublishingOptionsCloudwatchLogDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_group: {
      value: cdktf.stringToHclTerraform(struct!.logGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsisPipelineLogPublishingOptionsCloudwatchLogDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroup = this._logGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsisPipelineLogPublishingOptionsCloudwatchLogDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logGroup = value.logGroup;
    }
  }

  // log_group - computed: false, optional: false, required: true
  private _logGroup?: string; 
  public get logGroup() {
    return this.getStringAttribute('log_group');
  }
  public set logGroup(value: string) {
    this._logGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupInput() {
    return this._logGroup;
  }
}

export class OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList extends cdktf.ComplexList {
  public internalValue? : OsisPipelineLogPublishingOptionsCloudwatchLogDestination[] | cdktf.IResolvable

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
  public get(index: number): OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference {
    return new OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsisPipelineLogPublishingOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/osis_pipeline#is_logging_enabled OsisPipeline#is_logging_enabled}
  */
  readonly isLoggingEnabled?: boolean | cdktf.IResolvable;
  /**
  * cloudwatch_log_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/osis_pipeline#cloudwatch_log_destination OsisPipeline#cloudwatch_log_destination}
  */
  readonly cloudwatchLogDestination?: OsisPipelineLogPublishingOptionsCloudwatchLogDestination[] | cdktf.IResolvable;
}

export function osisPipelineLogPublishingOptionsToTerraform(struct?: OsisPipelineLogPublishingOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_logging_enabled: cdktf.booleanToTerraform(struct!.isLoggingEnabled),
    cloudwatch_log_destination: cdktf.listMapper(osisPipelineLogPublishingOptionsCloudwatchLogDestinationToTerraform, true)(struct!.cloudwatchLogDestination),
  }
}


export function osisPipelineLogPublishingOptionsToHclTerraform(struct?: OsisPipelineLogPublishingOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_logging_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isLoggingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cloudwatch_log_destination: {
      value: cdktf.listMapperHcl(osisPipelineLogPublishingOptionsCloudwatchLogDestinationToHclTerraform, true)(struct!.cloudwatchLogDestination),
      isBlock: true,
      type: "list",
      storageClassType: "OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsisPipelineLogPublishingOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsisPipelineLogPublishingOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isLoggingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isLoggingEnabled = this._isLoggingEnabled;
    }
    if (this._cloudwatchLogDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogDestination = this._cloudwatchLogDestination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsisPipelineLogPublishingOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isLoggingEnabled = undefined;
      this._cloudwatchLogDestination.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isLoggingEnabled = value.isLoggingEnabled;
      this._cloudwatchLogDestination.internalValue = value.cloudwatchLogDestination;
    }
  }

  // is_logging_enabled - computed: false, optional: true, required: false
  private _isLoggingEnabled?: boolean | cdktf.IResolvable; 
  public get isLoggingEnabled() {
    return this.getBooleanAttribute('is_logging_enabled');
  }
  public set isLoggingEnabled(value: boolean | cdktf.IResolvable) {
    this._isLoggingEnabled = value;
  }
  public resetIsLoggingEnabled() {
    this._isLoggingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLoggingEnabledInput() {
    return this._isLoggingEnabled;
  }

  // cloudwatch_log_destination - computed: false, optional: true, required: false
  private _cloudwatchLogDestination = new OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList(this, "cloudwatch_log_destination", false);
  public get cloudwatchLogDestination() {
    return this._cloudwatchLogDestination;
  }
  public putCloudwatchLogDestination(value: OsisPipelineLogPublishingOptionsCloudwatchLogDestination[] | cdktf.IResolvable) {
    this._cloudwatchLogDestination.internalValue = value;
  }
  public resetCloudwatchLogDestination() {
    this._cloudwatchLogDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogDestinationInput() {
    return this._cloudwatchLogDestination.internalValue;
  }
}

export class OsisPipelineLogPublishingOptionsList extends cdktf.ComplexList {
  public internalValue? : OsisPipelineLogPublishingOptions[] | cdktf.IResolvable

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
  public get(index: number): OsisPipelineLogPublishingOptionsOutputReference {
    return new OsisPipelineLogPublishingOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsisPipelineTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/osis_pipeline#create OsisPipeline#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/osis_pipeline#delete OsisPipeline#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/osis_pipeline#update OsisPipeline#update}
  */
  readonly update?: string;
}

export function osisPipelineTimeoutsToTerraform(struct?: OsisPipelineTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function osisPipelineTimeoutsToHclTerraform(struct?: OsisPipelineTimeouts | cdktf.IResolvable): any {
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

export class OsisPipelineTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OsisPipelineTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsisPipelineTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
      this._delete = value.delete;
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
export interface OsisPipelineVpcOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/osis_pipeline#security_group_ids OsisPipeline#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/osis_pipeline#subnet_ids OsisPipeline#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/osis_pipeline#vpc_endpoint_management OsisPipeline#vpc_endpoint_management}
  */
  readonly vpcEndpointManagement?: string;
}

export function osisPipelineVpcOptionsToTerraform(struct?: OsisPipelineVpcOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
    vpc_endpoint_management: cdktf.stringToTerraform(struct!.vpcEndpointManagement),
  }
}


export function osisPipelineVpcOptionsToHclTerraform(struct?: OsisPipelineVpcOptions | cdktf.IResolvable): any {
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
    vpc_endpoint_management: {
      value: cdktf.stringToHclTerraform(struct!.vpcEndpointManagement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsisPipelineVpcOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsisPipelineVpcOptions | cdktf.IResolvable | undefined {
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
    if (this._vpcEndpointManagement !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcEndpointManagement = this._vpcEndpointManagement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsisPipelineVpcOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
      this._vpcEndpointManagement = undefined;
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
      this._vpcEndpointManagement = value.vpcEndpointManagement;
    }
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
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

  // vpc_endpoint_management - computed: false, optional: true, required: false
  private _vpcEndpointManagement?: string; 
  public get vpcEndpointManagement() {
    return this.getStringAttribute('vpc_endpoint_management');
  }
  public set vpcEndpointManagement(value: string) {
    this._vpcEndpointManagement = value;
  }
  public resetVpcEndpointManagement() {
    this._vpcEndpointManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointManagementInput() {
    return this._vpcEndpointManagement;
  }
}

export class OsisPipelineVpcOptionsList extends cdktf.ComplexList {
  public internalValue? : OsisPipelineVpcOptions[] | cdktf.IResolvable

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
  public get(index: number): OsisPipelineVpcOptionsOutputReference {
    return new OsisPipelineVpcOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/osis_pipeline aws_osis_pipeline}
*/
export class OsisPipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_osis_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OsisPipeline resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OsisPipeline to import
  * @param importFromId The id of the existing OsisPipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/osis_pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OsisPipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_osis_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/osis_pipeline aws_osis_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OsisPipelineConfig
  */
  public constructor(scope: Construct, id: string, config: OsisPipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_osis_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.99.1',
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
    this._maxUnits = config.maxUnits;
    this._minUnits = config.minUnits;
    this._pipelineConfigurationBody = config.pipelineConfigurationBody;
    this._pipelineName = config.pipelineName;
    this._tags = config.tags;
    this._bufferOptions.internalValue = config.bufferOptions;
    this._encryptionAtRestOptions.internalValue = config.encryptionAtRestOptions;
    this._logPublishingOptions.internalValue = config.logPublishingOptions;
    this._timeouts.internalValue = config.timeouts;
    this._vpcOptions.internalValue = config.vpcOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingest_endpoint_urls - computed: true, optional: false, required: false
  public get ingestEndpointUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('ingest_endpoint_urls'));
  }

  // max_units - computed: false, optional: false, required: true
  private _maxUnits?: number; 
  public get maxUnits() {
    return this.getNumberAttribute('max_units');
  }
  public set maxUnits(value: number) {
    this._maxUnits = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnitsInput() {
    return this._maxUnits;
  }

  // min_units - computed: false, optional: false, required: true
  private _minUnits?: number; 
  public get minUnits() {
    return this.getNumberAttribute('min_units');
  }
  public set minUnits(value: number) {
    this._minUnits = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minUnitsInput() {
    return this._minUnits;
  }

  // pipeline_arn - computed: true, optional: false, required: false
  public get pipelineArn() {
    return this.getStringAttribute('pipeline_arn');
  }

  // pipeline_configuration_body - computed: false, optional: false, required: true
  private _pipelineConfigurationBody?: string; 
  public get pipelineConfigurationBody() {
    return this.getStringAttribute('pipeline_configuration_body');
  }
  public set pipelineConfigurationBody(value: string) {
    this._pipelineConfigurationBody = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineConfigurationBodyInput() {
    return this._pipelineConfigurationBody;
  }

  // pipeline_name - computed: false, optional: false, required: true
  private _pipelineName?: string; 
  public get pipelineName() {
    return this.getStringAttribute('pipeline_name');
  }
  public set pipelineName(value: string) {
    this._pipelineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineNameInput() {
    return this._pipelineName;
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

  // buffer_options - computed: false, optional: true, required: false
  private _bufferOptions = new OsisPipelineBufferOptionsList(this, "buffer_options", false);
  public get bufferOptions() {
    return this._bufferOptions;
  }
  public putBufferOptions(value: OsisPipelineBufferOptions[] | cdktf.IResolvable) {
    this._bufferOptions.internalValue = value;
  }
  public resetBufferOptions() {
    this._bufferOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferOptionsInput() {
    return this._bufferOptions.internalValue;
  }

  // encryption_at_rest_options - computed: false, optional: true, required: false
  private _encryptionAtRestOptions = new OsisPipelineEncryptionAtRestOptionsList(this, "encryption_at_rest_options", false);
  public get encryptionAtRestOptions() {
    return this._encryptionAtRestOptions;
  }
  public putEncryptionAtRestOptions(value: OsisPipelineEncryptionAtRestOptions[] | cdktf.IResolvable) {
    this._encryptionAtRestOptions.internalValue = value;
  }
  public resetEncryptionAtRestOptions() {
    this._encryptionAtRestOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAtRestOptionsInput() {
    return this._encryptionAtRestOptions.internalValue;
  }

  // log_publishing_options - computed: false, optional: true, required: false
  private _logPublishingOptions = new OsisPipelineLogPublishingOptionsList(this, "log_publishing_options", false);
  public get logPublishingOptions() {
    return this._logPublishingOptions;
  }
  public putLogPublishingOptions(value: OsisPipelineLogPublishingOptions[] | cdktf.IResolvable) {
    this._logPublishingOptions.internalValue = value;
  }
  public resetLogPublishingOptions() {
    this._logPublishingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPublishingOptionsInput() {
    return this._logPublishingOptions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OsisPipelineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OsisPipelineTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vpc_options - computed: false, optional: true, required: false
  private _vpcOptions = new OsisPipelineVpcOptionsList(this, "vpc_options", false);
  public get vpcOptions() {
    return this._vpcOptions;
  }
  public putVpcOptions(value: OsisPipelineVpcOptions[] | cdktf.IResolvable) {
    this._vpcOptions.internalValue = value;
  }
  public resetVpcOptions() {
    this._vpcOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcOptionsInput() {
    return this._vpcOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      max_units: cdktf.numberToTerraform(this._maxUnits),
      min_units: cdktf.numberToTerraform(this._minUnits),
      pipeline_configuration_body: cdktf.stringToTerraform(this._pipelineConfigurationBody),
      pipeline_name: cdktf.stringToTerraform(this._pipelineName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      buffer_options: cdktf.listMapper(osisPipelineBufferOptionsToTerraform, true)(this._bufferOptions.internalValue),
      encryption_at_rest_options: cdktf.listMapper(osisPipelineEncryptionAtRestOptionsToTerraform, true)(this._encryptionAtRestOptions.internalValue),
      log_publishing_options: cdktf.listMapper(osisPipelineLogPublishingOptionsToTerraform, true)(this._logPublishingOptions.internalValue),
      timeouts: osisPipelineTimeoutsToTerraform(this._timeouts.internalValue),
      vpc_options: cdktf.listMapper(osisPipelineVpcOptionsToTerraform, true)(this._vpcOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      max_units: {
        value: cdktf.numberToHclTerraform(this._maxUnits),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_units: {
        value: cdktf.numberToHclTerraform(this._minUnits),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pipeline_configuration_body: {
        value: cdktf.stringToHclTerraform(this._pipelineConfigurationBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipeline_name: {
        value: cdktf.stringToHclTerraform(this._pipelineName),
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
      buffer_options: {
        value: cdktf.listMapperHcl(osisPipelineBufferOptionsToHclTerraform, true)(this._bufferOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OsisPipelineBufferOptionsList",
      },
      encryption_at_rest_options: {
        value: cdktf.listMapperHcl(osisPipelineEncryptionAtRestOptionsToHclTerraform, true)(this._encryptionAtRestOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OsisPipelineEncryptionAtRestOptionsList",
      },
      log_publishing_options: {
        value: cdktf.listMapperHcl(osisPipelineLogPublishingOptionsToHclTerraform, true)(this._logPublishingOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OsisPipelineLogPublishingOptionsList",
      },
      timeouts: {
        value: osisPipelineTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OsisPipelineTimeouts",
      },
      vpc_options: {
        value: cdktf.listMapperHcl(osisPipelineVpcOptionsToHclTerraform, true)(this._vpcOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OsisPipelineVpcOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
