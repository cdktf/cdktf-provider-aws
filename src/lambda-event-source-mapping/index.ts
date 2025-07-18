/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LambdaEventSourceMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#batch_size LambdaEventSourceMapping#batch_size}
  */
  readonly batchSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#bisect_batch_on_function_error LambdaEventSourceMapping#bisect_batch_on_function_error}
  */
  readonly bisectBatchOnFunctionError?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#enabled LambdaEventSourceMapping#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#event_source_arn LambdaEventSourceMapping#event_source_arn}
  */
  readonly eventSourceArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#function_name LambdaEventSourceMapping#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#function_response_types LambdaEventSourceMapping#function_response_types}
  */
  readonly functionResponseTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#id LambdaEventSourceMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#kms_key_arn LambdaEventSourceMapping#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#maximum_batching_window_in_seconds LambdaEventSourceMapping#maximum_batching_window_in_seconds}
  */
  readonly maximumBatchingWindowInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#maximum_record_age_in_seconds LambdaEventSourceMapping#maximum_record_age_in_seconds}
  */
  readonly maximumRecordAgeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#maximum_retry_attempts LambdaEventSourceMapping#maximum_retry_attempts}
  */
  readonly maximumRetryAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#parallelization_factor LambdaEventSourceMapping#parallelization_factor}
  */
  readonly parallelizationFactor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#queues LambdaEventSourceMapping#queues}
  */
  readonly queues?: string[];
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#region LambdaEventSourceMapping#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#starting_position LambdaEventSourceMapping#starting_position}
  */
  readonly startingPosition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#starting_position_timestamp LambdaEventSourceMapping#starting_position_timestamp}
  */
  readonly startingPositionTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#tags LambdaEventSourceMapping#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#tags_all LambdaEventSourceMapping#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#topics LambdaEventSourceMapping#topics}
  */
  readonly topics?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#tumbling_window_in_seconds LambdaEventSourceMapping#tumbling_window_in_seconds}
  */
  readonly tumblingWindowInSeconds?: number;
  /**
  * amazon_managed_kafka_event_source_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#amazon_managed_kafka_event_source_config LambdaEventSourceMapping#amazon_managed_kafka_event_source_config}
  */
  readonly amazonManagedKafkaEventSourceConfig?: LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig;
  /**
  * destination_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#destination_config LambdaEventSourceMapping#destination_config}
  */
  readonly destinationConfig?: LambdaEventSourceMappingDestinationConfig;
  /**
  * document_db_event_source_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#document_db_event_source_config LambdaEventSourceMapping#document_db_event_source_config}
  */
  readonly documentDbEventSourceConfig?: LambdaEventSourceMappingDocumentDbEventSourceConfig;
  /**
  * filter_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#filter_criteria LambdaEventSourceMapping#filter_criteria}
  */
  readonly filterCriteria?: LambdaEventSourceMappingFilterCriteria;
  /**
  * metrics_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#metrics_config LambdaEventSourceMapping#metrics_config}
  */
  readonly metricsConfig?: LambdaEventSourceMappingMetricsConfig;
  /**
  * provisioned_poller_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#provisioned_poller_config LambdaEventSourceMapping#provisioned_poller_config}
  */
  readonly provisionedPollerConfig?: LambdaEventSourceMappingProvisionedPollerConfig;
  /**
  * scaling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#scaling_config LambdaEventSourceMapping#scaling_config}
  */
  readonly scalingConfig?: LambdaEventSourceMappingScalingConfig;
  /**
  * self_managed_event_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#self_managed_event_source LambdaEventSourceMapping#self_managed_event_source}
  */
  readonly selfManagedEventSource?: LambdaEventSourceMappingSelfManagedEventSource;
  /**
  * self_managed_kafka_event_source_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#self_managed_kafka_event_source_config LambdaEventSourceMapping#self_managed_kafka_event_source_config}
  */
  readonly selfManagedKafkaEventSourceConfig?: LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig;
  /**
  * source_access_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#source_access_configuration LambdaEventSourceMapping#source_access_configuration}
  */
  readonly sourceAccessConfiguration?: LambdaEventSourceMappingSourceAccessConfiguration[] | cdktf.IResolvable;
}
export interface LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#consumer_group_id LambdaEventSourceMapping#consumer_group_id}
  */
  readonly consumerGroupId?: string;
}

export function lambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigToTerraform(struct?: LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference | LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consumer_group_id: cdktf.stringToTerraform(struct!.consumerGroupId),
  }
}


export function lambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigToHclTerraform(struct?: LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference | LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consumer_group_id: {
      value: cdktf.stringToHclTerraform(struct!.consumerGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumerGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerGroupId = this._consumerGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consumerGroupId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consumerGroupId = value.consumerGroupId;
    }
  }

  // consumer_group_id - computed: true, optional: true, required: false
  private _consumerGroupId?: string; 
  public get consumerGroupId() {
    return this.getStringAttribute('consumer_group_id');
  }
  public set consumerGroupId(value: string) {
    this._consumerGroupId = value;
  }
  public resetConsumerGroupId() {
    this._consumerGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerGroupIdInput() {
    return this._consumerGroupId;
  }
}
export interface LambdaEventSourceMappingDestinationConfigOnFailure {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#destination_arn LambdaEventSourceMapping#destination_arn}
  */
  readonly destinationArn: string;
}

export function lambdaEventSourceMappingDestinationConfigOnFailureToTerraform(struct?: LambdaEventSourceMappingDestinationConfigOnFailureOutputReference | LambdaEventSourceMappingDestinationConfigOnFailure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_arn: cdktf.stringToTerraform(struct!.destinationArn),
  }
}


export function lambdaEventSourceMappingDestinationConfigOnFailureToHclTerraform(struct?: LambdaEventSourceMappingDestinationConfigOnFailureOutputReference | LambdaEventSourceMappingDestinationConfigOnFailure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_arn: {
      value: cdktf.stringToHclTerraform(struct!.destinationArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaEventSourceMappingDestinationConfigOnFailureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LambdaEventSourceMappingDestinationConfigOnFailure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationArn = this._destinationArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaEventSourceMappingDestinationConfigOnFailure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationArn = value.destinationArn;
    }
  }

  // destination_arn - computed: false, optional: false, required: true
  private _destinationArn?: string; 
  public get destinationArn() {
    return this.getStringAttribute('destination_arn');
  }
  public set destinationArn(value: string) {
    this._destinationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationArnInput() {
    return this._destinationArn;
  }
}
export interface LambdaEventSourceMappingDestinationConfig {
  /**
  * on_failure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#on_failure LambdaEventSourceMapping#on_failure}
  */
  readonly onFailure?: LambdaEventSourceMappingDestinationConfigOnFailure;
}

export function lambdaEventSourceMappingDestinationConfigToTerraform(struct?: LambdaEventSourceMappingDestinationConfigOutputReference | LambdaEventSourceMappingDestinationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_failure: lambdaEventSourceMappingDestinationConfigOnFailureToTerraform(struct!.onFailure),
  }
}


export function lambdaEventSourceMappingDestinationConfigToHclTerraform(struct?: LambdaEventSourceMappingDestinationConfigOutputReference | LambdaEventSourceMappingDestinationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    on_failure: {
      value: lambdaEventSourceMappingDestinationConfigOnFailureToHclTerraform(struct!.onFailure),
      isBlock: true,
      type: "list",
      storageClassType: "LambdaEventSourceMappingDestinationConfigOnFailureList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaEventSourceMappingDestinationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LambdaEventSourceMappingDestinationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onFailure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onFailure = this._onFailure?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaEventSourceMappingDestinationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._onFailure.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onFailure.internalValue = value.onFailure;
    }
  }

  // on_failure - computed: false, optional: true, required: false
  private _onFailure = new LambdaEventSourceMappingDestinationConfigOnFailureOutputReference(this, "on_failure");
  public get onFailure() {
    return this._onFailure;
  }
  public putOnFailure(value: LambdaEventSourceMappingDestinationConfigOnFailure) {
    this._onFailure.internalValue = value;
  }
  public resetOnFailure() {
    this._onFailure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFailureInput() {
    return this._onFailure.internalValue;
  }
}
export interface LambdaEventSourceMappingDocumentDbEventSourceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#collection_name LambdaEventSourceMapping#collection_name}
  */
  readonly collectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#database_name LambdaEventSourceMapping#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#full_document LambdaEventSourceMapping#full_document}
  */
  readonly fullDocument?: string;
}

export function lambdaEventSourceMappingDocumentDbEventSourceConfigToTerraform(struct?: LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference | LambdaEventSourceMappingDocumentDbEventSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection_name: cdktf.stringToTerraform(struct!.collectionName),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    full_document: cdktf.stringToTerraform(struct!.fullDocument),
  }
}


export function lambdaEventSourceMappingDocumentDbEventSourceConfigToHclTerraform(struct?: LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference | LambdaEventSourceMappingDocumentDbEventSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collection_name: {
      value: cdktf.stringToHclTerraform(struct!.collectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    full_document: {
      value: cdktf.stringToHclTerraform(struct!.fullDocument),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LambdaEventSourceMappingDocumentDbEventSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectionName = this._collectionName;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._fullDocument !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullDocument = this._fullDocument;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaEventSourceMappingDocumentDbEventSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._collectionName = undefined;
      this._databaseName = undefined;
      this._fullDocument = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._collectionName = value.collectionName;
      this._databaseName = value.databaseName;
      this._fullDocument = value.fullDocument;
    }
  }

  // collection_name - computed: false, optional: true, required: false
  private _collectionName?: string; 
  public get collectionName() {
    return this.getStringAttribute('collection_name');
  }
  public set collectionName(value: string) {
    this._collectionName = value;
  }
  public resetCollectionName() {
    this._collectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionNameInput() {
    return this._collectionName;
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // full_document - computed: false, optional: true, required: false
  private _fullDocument?: string; 
  public get fullDocument() {
    return this.getStringAttribute('full_document');
  }
  public set fullDocument(value: string) {
    this._fullDocument = value;
  }
  public resetFullDocument() {
    this._fullDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullDocumentInput() {
    return this._fullDocument;
  }
}
export interface LambdaEventSourceMappingFilterCriteriaFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#pattern LambdaEventSourceMapping#pattern}
  */
  readonly pattern?: string;
}

export function lambdaEventSourceMappingFilterCriteriaFilterToTerraform(struct?: LambdaEventSourceMappingFilterCriteriaFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function lambdaEventSourceMappingFilterCriteriaFilterToHclTerraform(struct?: LambdaEventSourceMappingFilterCriteriaFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaEventSourceMappingFilterCriteriaFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LambdaEventSourceMappingFilterCriteriaFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaEventSourceMappingFilterCriteriaFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pattern = value.pattern;
    }
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class LambdaEventSourceMappingFilterCriteriaFilterList extends cdktf.ComplexList {
  public internalValue? : LambdaEventSourceMappingFilterCriteriaFilter[] | cdktf.IResolvable

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
  public get(index: number): LambdaEventSourceMappingFilterCriteriaFilterOutputReference {
    return new LambdaEventSourceMappingFilterCriteriaFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LambdaEventSourceMappingFilterCriteria {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#filter LambdaEventSourceMapping#filter}
  */
  readonly filter?: LambdaEventSourceMappingFilterCriteriaFilter[] | cdktf.IResolvable;
}

export function lambdaEventSourceMappingFilterCriteriaToTerraform(struct?: LambdaEventSourceMappingFilterCriteriaOutputReference | LambdaEventSourceMappingFilterCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.listMapper(lambdaEventSourceMappingFilterCriteriaFilterToTerraform, true)(struct!.filter),
  }
}


export function lambdaEventSourceMappingFilterCriteriaToHclTerraform(struct?: LambdaEventSourceMappingFilterCriteriaOutputReference | LambdaEventSourceMappingFilterCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.listMapperHcl(lambdaEventSourceMappingFilterCriteriaFilterToHclTerraform, true)(struct!.filter),
      isBlock: true,
      type: "set",
      storageClassType: "LambdaEventSourceMappingFilterCriteriaFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaEventSourceMappingFilterCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LambdaEventSourceMappingFilterCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaEventSourceMappingFilterCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filter.internalValue = value.filter;
    }
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new LambdaEventSourceMappingFilterCriteriaFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: LambdaEventSourceMappingFilterCriteriaFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}
export interface LambdaEventSourceMappingMetricsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#metrics LambdaEventSourceMapping#metrics}
  */
  readonly metrics: string[];
}

export function lambdaEventSourceMappingMetricsConfigToTerraform(struct?: LambdaEventSourceMappingMetricsConfigOutputReference | LambdaEventSourceMappingMetricsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.metrics),
  }
}


export function lambdaEventSourceMappingMetricsConfigToHclTerraform(struct?: LambdaEventSourceMappingMetricsConfigOutputReference | LambdaEventSourceMappingMetricsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metrics: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.metrics),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaEventSourceMappingMetricsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LambdaEventSourceMappingMetricsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaEventSourceMappingMetricsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metrics = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metrics = value.metrics;
    }
  }

  // metrics - computed: false, optional: false, required: true
  private _metrics?: string[]; 
  public get metrics() {
    return cdktf.Fn.tolist(this.getListAttribute('metrics'));
  }
  public set metrics(value: string[]) {
    this._metrics = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics;
  }
}
export interface LambdaEventSourceMappingProvisionedPollerConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#maximum_pollers LambdaEventSourceMapping#maximum_pollers}
  */
  readonly maximumPollers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#minimum_pollers LambdaEventSourceMapping#minimum_pollers}
  */
  readonly minimumPollers?: number;
}

export function lambdaEventSourceMappingProvisionedPollerConfigToTerraform(struct?: LambdaEventSourceMappingProvisionedPollerConfigOutputReference | LambdaEventSourceMappingProvisionedPollerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_pollers: cdktf.numberToTerraform(struct!.maximumPollers),
    minimum_pollers: cdktf.numberToTerraform(struct!.minimumPollers),
  }
}


export function lambdaEventSourceMappingProvisionedPollerConfigToHclTerraform(struct?: LambdaEventSourceMappingProvisionedPollerConfigOutputReference | LambdaEventSourceMappingProvisionedPollerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum_pollers: {
      value: cdktf.numberToHclTerraform(struct!.maximumPollers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_pollers: {
      value: cdktf.numberToHclTerraform(struct!.minimumPollers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaEventSourceMappingProvisionedPollerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LambdaEventSourceMappingProvisionedPollerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumPollers !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPollers = this._maximumPollers;
    }
    if (this._minimumPollers !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumPollers = this._minimumPollers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaEventSourceMappingProvisionedPollerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maximumPollers = undefined;
      this._minimumPollers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maximumPollers = value.maximumPollers;
      this._minimumPollers = value.minimumPollers;
    }
  }

  // maximum_pollers - computed: true, optional: true, required: false
  private _maximumPollers?: number; 
  public get maximumPollers() {
    return this.getNumberAttribute('maximum_pollers');
  }
  public set maximumPollers(value: number) {
    this._maximumPollers = value;
  }
  public resetMaximumPollers() {
    this._maximumPollers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPollersInput() {
    return this._maximumPollers;
  }

  // minimum_pollers - computed: true, optional: true, required: false
  private _minimumPollers?: number; 
  public get minimumPollers() {
    return this.getNumberAttribute('minimum_pollers');
  }
  public set minimumPollers(value: number) {
    this._minimumPollers = value;
  }
  public resetMinimumPollers() {
    this._minimumPollers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumPollersInput() {
    return this._minimumPollers;
  }
}
export interface LambdaEventSourceMappingScalingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#maximum_concurrency LambdaEventSourceMapping#maximum_concurrency}
  */
  readonly maximumConcurrency?: number;
}

export function lambdaEventSourceMappingScalingConfigToTerraform(struct?: LambdaEventSourceMappingScalingConfigOutputReference | LambdaEventSourceMappingScalingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_concurrency: cdktf.numberToTerraform(struct!.maximumConcurrency),
  }
}


export function lambdaEventSourceMappingScalingConfigToHclTerraform(struct?: LambdaEventSourceMappingScalingConfigOutputReference | LambdaEventSourceMappingScalingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum_concurrency: {
      value: cdktf.numberToHclTerraform(struct!.maximumConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaEventSourceMappingScalingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LambdaEventSourceMappingScalingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumConcurrency = this._maximumConcurrency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaEventSourceMappingScalingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maximumConcurrency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maximumConcurrency = value.maximumConcurrency;
    }
  }

  // maximum_concurrency - computed: false, optional: true, required: false
  private _maximumConcurrency?: number; 
  public get maximumConcurrency() {
    return this.getNumberAttribute('maximum_concurrency');
  }
  public set maximumConcurrency(value: number) {
    this._maximumConcurrency = value;
  }
  public resetMaximumConcurrency() {
    this._maximumConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumConcurrencyInput() {
    return this._maximumConcurrency;
  }
}
export interface LambdaEventSourceMappingSelfManagedEventSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#endpoints LambdaEventSourceMapping#endpoints}
  */
  readonly endpoints: { [key: string]: string };
}

export function lambdaEventSourceMappingSelfManagedEventSourceToTerraform(struct?: LambdaEventSourceMappingSelfManagedEventSourceOutputReference | LambdaEventSourceMappingSelfManagedEventSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoints: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.endpoints),
  }
}


export function lambdaEventSourceMappingSelfManagedEventSourceToHclTerraform(struct?: LambdaEventSourceMappingSelfManagedEventSourceOutputReference | LambdaEventSourceMappingSelfManagedEventSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoints: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.endpoints),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaEventSourceMappingSelfManagedEventSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LambdaEventSourceMappingSelfManagedEventSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoints = this._endpoints;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaEventSourceMappingSelfManagedEventSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoints = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoints = value.endpoints;
    }
  }

  // endpoints - computed: false, optional: false, required: true
  private _endpoints?: { [key: string]: string }; 
  public get endpoints() {
    return this.getStringMapAttribute('endpoints');
  }
  public set endpoints(value: { [key: string]: string }) {
    this._endpoints = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
  }
}
export interface LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#consumer_group_id LambdaEventSourceMapping#consumer_group_id}
  */
  readonly consumerGroupId?: string;
}

export function lambdaEventSourceMappingSelfManagedKafkaEventSourceConfigToTerraform(struct?: LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference | LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consumer_group_id: cdktf.stringToTerraform(struct!.consumerGroupId),
  }
}


export function lambdaEventSourceMappingSelfManagedKafkaEventSourceConfigToHclTerraform(struct?: LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference | LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consumer_group_id: {
      value: cdktf.stringToHclTerraform(struct!.consumerGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumerGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerGroupId = this._consumerGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consumerGroupId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consumerGroupId = value.consumerGroupId;
    }
  }

  // consumer_group_id - computed: true, optional: true, required: false
  private _consumerGroupId?: string; 
  public get consumerGroupId() {
    return this.getStringAttribute('consumer_group_id');
  }
  public set consumerGroupId(value: string) {
    this._consumerGroupId = value;
  }
  public resetConsumerGroupId() {
    this._consumerGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerGroupIdInput() {
    return this._consumerGroupId;
  }
}
export interface LambdaEventSourceMappingSourceAccessConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#type LambdaEventSourceMapping#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#uri LambdaEventSourceMapping#uri}
  */
  readonly uri: string;
}

export function lambdaEventSourceMappingSourceAccessConfigurationToTerraform(struct?: LambdaEventSourceMappingSourceAccessConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function lambdaEventSourceMappingSourceAccessConfigurationToHclTerraform(struct?: LambdaEventSourceMappingSourceAccessConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaEventSourceMappingSourceAccessConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LambdaEventSourceMappingSourceAccessConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaEventSourceMappingSourceAccessConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._uri = value.uri;
    }
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

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}

export class LambdaEventSourceMappingSourceAccessConfigurationList extends cdktf.ComplexList {
  public internalValue? : LambdaEventSourceMappingSourceAccessConfiguration[] | cdktf.IResolvable

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
  public get(index: number): LambdaEventSourceMappingSourceAccessConfigurationOutputReference {
    return new LambdaEventSourceMappingSourceAccessConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping aws_lambda_event_source_mapping}
*/
export class LambdaEventSourceMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lambda_event_source_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LambdaEventSourceMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LambdaEventSourceMapping to import
  * @param importFromId The id of the existing LambdaEventSourceMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LambdaEventSourceMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_lambda_event_source_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_event_source_mapping aws_lambda_event_source_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LambdaEventSourceMappingConfig
  */
  public constructor(scope: Construct, id: string, config: LambdaEventSourceMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambda_event_source_mapping',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
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
    this._batchSize = config.batchSize;
    this._bisectBatchOnFunctionError = config.bisectBatchOnFunctionError;
    this._enabled = config.enabled;
    this._eventSourceArn = config.eventSourceArn;
    this._functionName = config.functionName;
    this._functionResponseTypes = config.functionResponseTypes;
    this._id = config.id;
    this._kmsKeyArn = config.kmsKeyArn;
    this._maximumBatchingWindowInSeconds = config.maximumBatchingWindowInSeconds;
    this._maximumRecordAgeInSeconds = config.maximumRecordAgeInSeconds;
    this._maximumRetryAttempts = config.maximumRetryAttempts;
    this._parallelizationFactor = config.parallelizationFactor;
    this._queues = config.queues;
    this._region = config.region;
    this._startingPosition = config.startingPosition;
    this._startingPositionTimestamp = config.startingPositionTimestamp;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._topics = config.topics;
    this._tumblingWindowInSeconds = config.tumblingWindowInSeconds;
    this._amazonManagedKafkaEventSourceConfig.internalValue = config.amazonManagedKafkaEventSourceConfig;
    this._destinationConfig.internalValue = config.destinationConfig;
    this._documentDbEventSourceConfig.internalValue = config.documentDbEventSourceConfig;
    this._filterCriteria.internalValue = config.filterCriteria;
    this._metricsConfig.internalValue = config.metricsConfig;
    this._provisionedPollerConfig.internalValue = config.provisionedPollerConfig;
    this._scalingConfig.internalValue = config.scalingConfig;
    this._selfManagedEventSource.internalValue = config.selfManagedEventSource;
    this._selfManagedKafkaEventSourceConfig.internalValue = config.selfManagedKafkaEventSourceConfig;
    this._sourceAccessConfiguration.internalValue = config.sourceAccessConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // batch_size - computed: false, optional: true, required: false
  private _batchSize?: number; 
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // bisect_batch_on_function_error - computed: false, optional: true, required: false
  private _bisectBatchOnFunctionError?: boolean | cdktf.IResolvable; 
  public get bisectBatchOnFunctionError() {
    return this.getBooleanAttribute('bisect_batch_on_function_error');
  }
  public set bisectBatchOnFunctionError(value: boolean | cdktf.IResolvable) {
    this._bisectBatchOnFunctionError = value;
  }
  public resetBisectBatchOnFunctionError() {
    this._bisectBatchOnFunctionError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bisectBatchOnFunctionErrorInput() {
    return this._bisectBatchOnFunctionError;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // event_source_arn - computed: false, optional: true, required: false
  private _eventSourceArn?: string; 
  public get eventSourceArn() {
    return this.getStringAttribute('event_source_arn');
  }
  public set eventSourceArn(value: string) {
    this._eventSourceArn = value;
  }
  public resetEventSourceArn() {
    this._eventSourceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSourceArnInput() {
    return this._eventSourceArn;
  }

  // function_arn - computed: true, optional: false, required: false
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }

  // function_name - computed: false, optional: false, required: true
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
  }

  // function_response_types - computed: false, optional: true, required: false
  private _functionResponseTypes?: string[]; 
  public get functionResponseTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('function_response_types'));
  }
  public set functionResponseTypes(value: string[]) {
    this._functionResponseTypes = value;
  }
  public resetFunctionResponseTypes() {
    this._functionResponseTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionResponseTypesInput() {
    return this._functionResponseTypes;
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

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // last_processing_result - computed: true, optional: false, required: false
  public get lastProcessingResult() {
    return this.getStringAttribute('last_processing_result');
  }

  // maximum_batching_window_in_seconds - computed: false, optional: true, required: false
  private _maximumBatchingWindowInSeconds?: number; 
  public get maximumBatchingWindowInSeconds() {
    return this.getNumberAttribute('maximum_batching_window_in_seconds');
  }
  public set maximumBatchingWindowInSeconds(value: number) {
    this._maximumBatchingWindowInSeconds = value;
  }
  public resetMaximumBatchingWindowInSeconds() {
    this._maximumBatchingWindowInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBatchingWindowInSecondsInput() {
    return this._maximumBatchingWindowInSeconds;
  }

  // maximum_record_age_in_seconds - computed: true, optional: true, required: false
  private _maximumRecordAgeInSeconds?: number; 
  public get maximumRecordAgeInSeconds() {
    return this.getNumberAttribute('maximum_record_age_in_seconds');
  }
  public set maximumRecordAgeInSeconds(value: number) {
    this._maximumRecordAgeInSeconds = value;
  }
  public resetMaximumRecordAgeInSeconds() {
    this._maximumRecordAgeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRecordAgeInSecondsInput() {
    return this._maximumRecordAgeInSeconds;
  }

  // maximum_retry_attempts - computed: true, optional: true, required: false
  private _maximumRetryAttempts?: number; 
  public get maximumRetryAttempts() {
    return this.getNumberAttribute('maximum_retry_attempts');
  }
  public set maximumRetryAttempts(value: number) {
    this._maximumRetryAttempts = value;
  }
  public resetMaximumRetryAttempts() {
    this._maximumRetryAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRetryAttemptsInput() {
    return this._maximumRetryAttempts;
  }

  // parallelization_factor - computed: true, optional: true, required: false
  private _parallelizationFactor?: number; 
  public get parallelizationFactor() {
    return this.getNumberAttribute('parallelization_factor');
  }
  public set parallelizationFactor(value: number) {
    this._parallelizationFactor = value;
  }
  public resetParallelizationFactor() {
    this._parallelizationFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelizationFactorInput() {
    return this._parallelizationFactor;
  }

  // queues - computed: false, optional: true, required: false
  private _queues?: string[]; 
  public get queues() {
    return this.getListAttribute('queues');
  }
  public set queues(value: string[]) {
    this._queues = value;
  }
  public resetQueues() {
    this._queues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queuesInput() {
    return this._queues;
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

  // starting_position - computed: false, optional: true, required: false
  private _startingPosition?: string; 
  public get startingPosition() {
    return this.getStringAttribute('starting_position');
  }
  public set startingPosition(value: string) {
    this._startingPosition = value;
  }
  public resetStartingPosition() {
    this._startingPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startingPositionInput() {
    return this._startingPosition;
  }

  // starting_position_timestamp - computed: false, optional: true, required: false
  private _startingPositionTimestamp?: string; 
  public get startingPositionTimestamp() {
    return this.getStringAttribute('starting_position_timestamp');
  }
  public set startingPositionTimestamp(value: string) {
    this._startingPositionTimestamp = value;
  }
  public resetStartingPositionTimestamp() {
    this._startingPositionTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startingPositionTimestampInput() {
    return this._startingPositionTimestamp;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_transition_reason - computed: true, optional: false, required: false
  public get stateTransitionReason() {
    return this.getStringAttribute('state_transition_reason');
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

  // topics - computed: false, optional: true, required: false
  private _topics?: string[]; 
  public get topics() {
    return cdktf.Fn.tolist(this.getListAttribute('topics'));
  }
  public set topics(value: string[]) {
    this._topics = value;
  }
  public resetTopics() {
    this._topics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsInput() {
    return this._topics;
  }

  // tumbling_window_in_seconds - computed: false, optional: true, required: false
  private _tumblingWindowInSeconds?: number; 
  public get tumblingWindowInSeconds() {
    return this.getNumberAttribute('tumbling_window_in_seconds');
  }
  public set tumblingWindowInSeconds(value: number) {
    this._tumblingWindowInSeconds = value;
  }
  public resetTumblingWindowInSeconds() {
    this._tumblingWindowInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tumblingWindowInSecondsInput() {
    return this._tumblingWindowInSeconds;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // amazon_managed_kafka_event_source_config - computed: false, optional: true, required: false
  private _amazonManagedKafkaEventSourceConfig = new LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference(this, "amazon_managed_kafka_event_source_config");
  public get amazonManagedKafkaEventSourceConfig() {
    return this._amazonManagedKafkaEventSourceConfig;
  }
  public putAmazonManagedKafkaEventSourceConfig(value: LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig) {
    this._amazonManagedKafkaEventSourceConfig.internalValue = value;
  }
  public resetAmazonManagedKafkaEventSourceConfig() {
    this._amazonManagedKafkaEventSourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonManagedKafkaEventSourceConfigInput() {
    return this._amazonManagedKafkaEventSourceConfig.internalValue;
  }

  // destination_config - computed: false, optional: true, required: false
  private _destinationConfig = new LambdaEventSourceMappingDestinationConfigOutputReference(this, "destination_config");
  public get destinationConfig() {
    return this._destinationConfig;
  }
  public putDestinationConfig(value: LambdaEventSourceMappingDestinationConfig) {
    this._destinationConfig.internalValue = value;
  }
  public resetDestinationConfig() {
    this._destinationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConfigInput() {
    return this._destinationConfig.internalValue;
  }

  // document_db_event_source_config - computed: false, optional: true, required: false
  private _documentDbEventSourceConfig = new LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference(this, "document_db_event_source_config");
  public get documentDbEventSourceConfig() {
    return this._documentDbEventSourceConfig;
  }
  public putDocumentDbEventSourceConfig(value: LambdaEventSourceMappingDocumentDbEventSourceConfig) {
    this._documentDbEventSourceConfig.internalValue = value;
  }
  public resetDocumentDbEventSourceConfig() {
    this._documentDbEventSourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentDbEventSourceConfigInput() {
    return this._documentDbEventSourceConfig.internalValue;
  }

  // filter_criteria - computed: false, optional: true, required: false
  private _filterCriteria = new LambdaEventSourceMappingFilterCriteriaOutputReference(this, "filter_criteria");
  public get filterCriteria() {
    return this._filterCriteria;
  }
  public putFilterCriteria(value: LambdaEventSourceMappingFilterCriteria) {
    this._filterCriteria.internalValue = value;
  }
  public resetFilterCriteria() {
    this._filterCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterCriteriaInput() {
    return this._filterCriteria.internalValue;
  }

  // metrics_config - computed: false, optional: true, required: false
  private _metricsConfig = new LambdaEventSourceMappingMetricsConfigOutputReference(this, "metrics_config");
  public get metricsConfig() {
    return this._metricsConfig;
  }
  public putMetricsConfig(value: LambdaEventSourceMappingMetricsConfig) {
    this._metricsConfig.internalValue = value;
  }
  public resetMetricsConfig() {
    this._metricsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsConfigInput() {
    return this._metricsConfig.internalValue;
  }

  // provisioned_poller_config - computed: false, optional: true, required: false
  private _provisionedPollerConfig = new LambdaEventSourceMappingProvisionedPollerConfigOutputReference(this, "provisioned_poller_config");
  public get provisionedPollerConfig() {
    return this._provisionedPollerConfig;
  }
  public putProvisionedPollerConfig(value: LambdaEventSourceMappingProvisionedPollerConfig) {
    this._provisionedPollerConfig.internalValue = value;
  }
  public resetProvisionedPollerConfig() {
    this._provisionedPollerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedPollerConfigInput() {
    return this._provisionedPollerConfig.internalValue;
  }

  // scaling_config - computed: false, optional: true, required: false
  private _scalingConfig = new LambdaEventSourceMappingScalingConfigOutputReference(this, "scaling_config");
  public get scalingConfig() {
    return this._scalingConfig;
  }
  public putScalingConfig(value: LambdaEventSourceMappingScalingConfig) {
    this._scalingConfig.internalValue = value;
  }
  public resetScalingConfig() {
    this._scalingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingConfigInput() {
    return this._scalingConfig.internalValue;
  }

  // self_managed_event_source - computed: false, optional: true, required: false
  private _selfManagedEventSource = new LambdaEventSourceMappingSelfManagedEventSourceOutputReference(this, "self_managed_event_source");
  public get selfManagedEventSource() {
    return this._selfManagedEventSource;
  }
  public putSelfManagedEventSource(value: LambdaEventSourceMappingSelfManagedEventSource) {
    this._selfManagedEventSource.internalValue = value;
  }
  public resetSelfManagedEventSource() {
    this._selfManagedEventSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfManagedEventSourceInput() {
    return this._selfManagedEventSource.internalValue;
  }

  // self_managed_kafka_event_source_config - computed: false, optional: true, required: false
  private _selfManagedKafkaEventSourceConfig = new LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference(this, "self_managed_kafka_event_source_config");
  public get selfManagedKafkaEventSourceConfig() {
    return this._selfManagedKafkaEventSourceConfig;
  }
  public putSelfManagedKafkaEventSourceConfig(value: LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig) {
    this._selfManagedKafkaEventSourceConfig.internalValue = value;
  }
  public resetSelfManagedKafkaEventSourceConfig() {
    this._selfManagedKafkaEventSourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfManagedKafkaEventSourceConfigInput() {
    return this._selfManagedKafkaEventSourceConfig.internalValue;
  }

  // source_access_configuration - computed: false, optional: true, required: false
  private _sourceAccessConfiguration = new LambdaEventSourceMappingSourceAccessConfigurationList(this, "source_access_configuration", true);
  public get sourceAccessConfiguration() {
    return this._sourceAccessConfiguration;
  }
  public putSourceAccessConfiguration(value: LambdaEventSourceMappingSourceAccessConfiguration[] | cdktf.IResolvable) {
    this._sourceAccessConfiguration.internalValue = value;
  }
  public resetSourceAccessConfiguration() {
    this._sourceAccessConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAccessConfigurationInput() {
    return this._sourceAccessConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      batch_size: cdktf.numberToTerraform(this._batchSize),
      bisect_batch_on_function_error: cdktf.booleanToTerraform(this._bisectBatchOnFunctionError),
      enabled: cdktf.booleanToTerraform(this._enabled),
      event_source_arn: cdktf.stringToTerraform(this._eventSourceArn),
      function_name: cdktf.stringToTerraform(this._functionName),
      function_response_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._functionResponseTypes),
      id: cdktf.stringToTerraform(this._id),
      kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
      maximum_batching_window_in_seconds: cdktf.numberToTerraform(this._maximumBatchingWindowInSeconds),
      maximum_record_age_in_seconds: cdktf.numberToTerraform(this._maximumRecordAgeInSeconds),
      maximum_retry_attempts: cdktf.numberToTerraform(this._maximumRetryAttempts),
      parallelization_factor: cdktf.numberToTerraform(this._parallelizationFactor),
      queues: cdktf.listMapper(cdktf.stringToTerraform, false)(this._queues),
      region: cdktf.stringToTerraform(this._region),
      starting_position: cdktf.stringToTerraform(this._startingPosition),
      starting_position_timestamp: cdktf.stringToTerraform(this._startingPositionTimestamp),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      topics: cdktf.listMapper(cdktf.stringToTerraform, false)(this._topics),
      tumbling_window_in_seconds: cdktf.numberToTerraform(this._tumblingWindowInSeconds),
      amazon_managed_kafka_event_source_config: lambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigToTerraform(this._amazonManagedKafkaEventSourceConfig.internalValue),
      destination_config: lambdaEventSourceMappingDestinationConfigToTerraform(this._destinationConfig.internalValue),
      document_db_event_source_config: lambdaEventSourceMappingDocumentDbEventSourceConfigToTerraform(this._documentDbEventSourceConfig.internalValue),
      filter_criteria: lambdaEventSourceMappingFilterCriteriaToTerraform(this._filterCriteria.internalValue),
      metrics_config: lambdaEventSourceMappingMetricsConfigToTerraform(this._metricsConfig.internalValue),
      provisioned_poller_config: lambdaEventSourceMappingProvisionedPollerConfigToTerraform(this._provisionedPollerConfig.internalValue),
      scaling_config: lambdaEventSourceMappingScalingConfigToTerraform(this._scalingConfig.internalValue),
      self_managed_event_source: lambdaEventSourceMappingSelfManagedEventSourceToTerraform(this._selfManagedEventSource.internalValue),
      self_managed_kafka_event_source_config: lambdaEventSourceMappingSelfManagedKafkaEventSourceConfigToTerraform(this._selfManagedKafkaEventSourceConfig.internalValue),
      source_access_configuration: cdktf.listMapper(lambdaEventSourceMappingSourceAccessConfigurationToTerraform, true)(this._sourceAccessConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      batch_size: {
        value: cdktf.numberToHclTerraform(this._batchSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bisect_batch_on_function_error: {
        value: cdktf.booleanToHclTerraform(this._bisectBatchOnFunctionError),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      event_source_arn: {
        value: cdktf.stringToHclTerraform(this._eventSourceArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      function_name: {
        value: cdktf.stringToHclTerraform(this._functionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      function_response_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._functionResponseTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_arn: {
        value: cdktf.stringToHclTerraform(this._kmsKeyArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_batching_window_in_seconds: {
        value: cdktf.numberToHclTerraform(this._maximumBatchingWindowInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_record_age_in_seconds: {
        value: cdktf.numberToHclTerraform(this._maximumRecordAgeInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_retry_attempts: {
        value: cdktf.numberToHclTerraform(this._maximumRetryAttempts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      parallelization_factor: {
        value: cdktf.numberToHclTerraform(this._parallelizationFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      queues: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._queues),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      starting_position: {
        value: cdktf.stringToHclTerraform(this._startingPosition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      starting_position_timestamp: {
        value: cdktf.stringToHclTerraform(this._startingPositionTimestamp),
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
      topics: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._topics),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tumbling_window_in_seconds: {
        value: cdktf.numberToHclTerraform(this._tumblingWindowInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      amazon_managed_kafka_event_source_config: {
        value: lambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigToHclTerraform(this._amazonManagedKafkaEventSourceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigList",
      },
      destination_config: {
        value: lambdaEventSourceMappingDestinationConfigToHclTerraform(this._destinationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LambdaEventSourceMappingDestinationConfigList",
      },
      document_db_event_source_config: {
        value: lambdaEventSourceMappingDocumentDbEventSourceConfigToHclTerraform(this._documentDbEventSourceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LambdaEventSourceMappingDocumentDbEventSourceConfigList",
      },
      filter_criteria: {
        value: lambdaEventSourceMappingFilterCriteriaToHclTerraform(this._filterCriteria.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LambdaEventSourceMappingFilterCriteriaList",
      },
      metrics_config: {
        value: lambdaEventSourceMappingMetricsConfigToHclTerraform(this._metricsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LambdaEventSourceMappingMetricsConfigList",
      },
      provisioned_poller_config: {
        value: lambdaEventSourceMappingProvisionedPollerConfigToHclTerraform(this._provisionedPollerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LambdaEventSourceMappingProvisionedPollerConfigList",
      },
      scaling_config: {
        value: lambdaEventSourceMappingScalingConfigToHclTerraform(this._scalingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LambdaEventSourceMappingScalingConfigList",
      },
      self_managed_event_source: {
        value: lambdaEventSourceMappingSelfManagedEventSourceToHclTerraform(this._selfManagedEventSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LambdaEventSourceMappingSelfManagedEventSourceList",
      },
      self_managed_kafka_event_source_config: {
        value: lambdaEventSourceMappingSelfManagedKafkaEventSourceConfigToHclTerraform(this._selfManagedKafkaEventSourceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigList",
      },
      source_access_configuration: {
        value: cdktf.listMapperHcl(lambdaEventSourceMappingSourceAccessConfigurationToHclTerraform, true)(this._sourceAccessConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LambdaEventSourceMappingSourceAccessConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
