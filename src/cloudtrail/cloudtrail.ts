// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS CloudTrail
*/
export interface CloudtrailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#cloud_watch_logs_group_arn Cloudtrail#cloud_watch_logs_group_arn}
  */
  readonly cloudWatchLogsGroupArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#cloud_watch_logs_role_arn Cloudtrail#cloud_watch_logs_role_arn}
  */
  readonly cloudWatchLogsRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#enable_log_file_validation Cloudtrail#enable_log_file_validation}
  */
  readonly enableLogFileValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#enable_logging Cloudtrail#enable_logging}
  */
  readonly enableLogging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#include_global_service_events Cloudtrail#include_global_service_events}
  */
  readonly includeGlobalServiceEvents?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#is_multi_region_trail Cloudtrail#is_multi_region_trail}
  */
  readonly isMultiRegionTrail?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#is_organization_trail Cloudtrail#is_organization_trail}
  */
  readonly isOrganizationTrail?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#kms_key_id Cloudtrail#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#name Cloudtrail#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#s3_bucket_name Cloudtrail#s3_bucket_name}
  */
  readonly s3BucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#s3_key_prefix Cloudtrail#s3_key_prefix}
  */
  readonly s3KeyPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#sns_topic_name Cloudtrail#sns_topic_name}
  */
  readonly snsTopicName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#tags Cloudtrail#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#tags_all Cloudtrail#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * advanced_event_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#advanced_event_selector Cloudtrail#advanced_event_selector}
  */
  readonly advancedEventSelector?: CloudtrailAdvancedEventSelector[];
  /**
  * event_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#event_selector Cloudtrail#event_selector}
  */
  readonly eventSelector?: CloudtrailEventSelector[];
  /**
  * insight_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#insight_selector Cloudtrail#insight_selector}
  */
  readonly insightSelector?: CloudtrailInsightSelector[];
}
export interface CloudtrailAdvancedEventSelectorFieldSelector {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#ends_with Cloudtrail#ends_with}
  */
  readonly endsWith?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#equals Cloudtrail#equals}
  */
  readonly equalTo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#field Cloudtrail#field}
  */
  readonly field: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#not_ends_with Cloudtrail#not_ends_with}
  */
  readonly notEndsWith?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#not_equals Cloudtrail#not_equals}
  */
  readonly notEquals?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#not_starts_with Cloudtrail#not_starts_with}
  */
  readonly notStartsWith?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#starts_with Cloudtrail#starts_with}
  */
  readonly startsWith?: string[];
}

export function cloudtrailAdvancedEventSelectorFieldSelectorToTerraform(struct?: CloudtrailAdvancedEventSelectorFieldSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ends_with: cdktf.listMapper(cdktf.stringToTerraform)(struct!.endsWith),
    equals: cdktf.listMapper(cdktf.stringToTerraform)(struct!.equalTo),
    field: cdktf.stringToTerraform(struct!.field),
    not_ends_with: cdktf.listMapper(cdktf.stringToTerraform)(struct!.notEndsWith),
    not_equals: cdktf.listMapper(cdktf.stringToTerraform)(struct!.notEquals),
    not_starts_with: cdktf.listMapper(cdktf.stringToTerraform)(struct!.notStartsWith),
    starts_with: cdktf.listMapper(cdktf.stringToTerraform)(struct!.startsWith),
  }
}

export interface CloudtrailAdvancedEventSelector {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#name Cloudtrail#name}
  */
  readonly name?: string;
  /**
  * field_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#field_selector Cloudtrail#field_selector}
  */
  readonly fieldSelector: CloudtrailAdvancedEventSelectorFieldSelector[];
}

export function cloudtrailAdvancedEventSelectorToTerraform(struct?: CloudtrailAdvancedEventSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    field_selector: cdktf.listMapper(cloudtrailAdvancedEventSelectorFieldSelectorToTerraform)(struct!.fieldSelector),
  }
}

export interface CloudtrailEventSelectorDataResource {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#type Cloudtrail#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#values Cloudtrail#values}
  */
  readonly values: string[];
}

export function cloudtrailEventSelectorDataResourceToTerraform(struct?: CloudtrailEventSelectorDataResource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface CloudtrailEventSelector {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#exclude_management_event_sources Cloudtrail#exclude_management_event_sources}
  */
  readonly excludeManagementEventSources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#include_management_events Cloudtrail#include_management_events}
  */
  readonly includeManagementEvents?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#read_write_type Cloudtrail#read_write_type}
  */
  readonly readWriteType?: string;
  /**
  * data_resource block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#data_resource Cloudtrail#data_resource}
  */
  readonly dataResource?: CloudtrailEventSelectorDataResource[];
}

export function cloudtrailEventSelectorToTerraform(struct?: CloudtrailEventSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_management_event_sources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludeManagementEventSources),
    include_management_events: cdktf.booleanToTerraform(struct!.includeManagementEvents),
    read_write_type: cdktf.stringToTerraform(struct!.readWriteType),
    data_resource: cdktf.listMapper(cloudtrailEventSelectorDataResourceToTerraform)(struct!.dataResource),
  }
}

export interface CloudtrailInsightSelector {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html#insight_type Cloudtrail#insight_type}
  */
  readonly insightType: string;
}

export function cloudtrailInsightSelectorToTerraform(struct?: CloudtrailInsightSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insight_type: cdktf.stringToTerraform(struct!.insightType),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html aws_cloudtrail}
*/
export class Cloudtrail extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_cloudtrail";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail.html aws_cloudtrail} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudtrailConfig
  */
  public constructor(scope: Construct, id: string, config: CloudtrailConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudtrail',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cloudWatchLogsGroupArn = config.cloudWatchLogsGroupArn;
    this._cloudWatchLogsRoleArn = config.cloudWatchLogsRoleArn;
    this._enableLogFileValidation = config.enableLogFileValidation;
    this._enableLogging = config.enableLogging;
    this._includeGlobalServiceEvents = config.includeGlobalServiceEvents;
    this._isMultiRegionTrail = config.isMultiRegionTrail;
    this._isOrganizationTrail = config.isOrganizationTrail;
    this._kmsKeyId = config.kmsKeyId;
    this._name = config.name;
    this._s3BucketName = config.s3BucketName;
    this._s3KeyPrefix = config.s3KeyPrefix;
    this._snsTopicName = config.snsTopicName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._advancedEventSelector = config.advancedEventSelector;
    this._eventSelector = config.eventSelector;
    this._insightSelector = config.insightSelector;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cloud_watch_logs_group_arn - computed: false, optional: true, required: false
  private _cloudWatchLogsGroupArn?: string; 
  public get cloudWatchLogsGroupArn() {
    return this.getStringAttribute('cloud_watch_logs_group_arn');
  }
  public set cloudWatchLogsGroupArn(value: string) {
    this._cloudWatchLogsGroupArn = value;
  }
  public resetCloudWatchLogsGroupArn() {
    this._cloudWatchLogsGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudWatchLogsGroupArnInput() {
    return this._cloudWatchLogsGroupArn;
  }

  // cloud_watch_logs_role_arn - computed: false, optional: true, required: false
  private _cloudWatchLogsRoleArn?: string; 
  public get cloudWatchLogsRoleArn() {
    return this.getStringAttribute('cloud_watch_logs_role_arn');
  }
  public set cloudWatchLogsRoleArn(value: string) {
    this._cloudWatchLogsRoleArn = value;
  }
  public resetCloudWatchLogsRoleArn() {
    this._cloudWatchLogsRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudWatchLogsRoleArnInput() {
    return this._cloudWatchLogsRoleArn;
  }

  // enable_log_file_validation - computed: false, optional: true, required: false
  private _enableLogFileValidation?: boolean | cdktf.IResolvable; 
  public get enableLogFileValidation() {
    return this.getBooleanAttribute('enable_log_file_validation') as any;
  }
  public set enableLogFileValidation(value: boolean | cdktf.IResolvable) {
    this._enableLogFileValidation = value;
  }
  public resetEnableLogFileValidation() {
    this._enableLogFileValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLogFileValidationInput() {
    return this._enableLogFileValidation;
  }

  // enable_logging - computed: false, optional: true, required: false
  private _enableLogging?: boolean | cdktf.IResolvable; 
  public get enableLogging() {
    return this.getBooleanAttribute('enable_logging') as any;
  }
  public set enableLogging(value: boolean | cdktf.IResolvable) {
    this._enableLogging = value;
  }
  public resetEnableLogging() {
    this._enableLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLoggingInput() {
    return this._enableLogging;
  }

  // home_region - computed: true, optional: false, required: false
  public get homeRegion() {
    return this.getStringAttribute('home_region');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_global_service_events - computed: false, optional: true, required: false
  private _includeGlobalServiceEvents?: boolean | cdktf.IResolvable; 
  public get includeGlobalServiceEvents() {
    return this.getBooleanAttribute('include_global_service_events') as any;
  }
  public set includeGlobalServiceEvents(value: boolean | cdktf.IResolvable) {
    this._includeGlobalServiceEvents = value;
  }
  public resetIncludeGlobalServiceEvents() {
    this._includeGlobalServiceEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeGlobalServiceEventsInput() {
    return this._includeGlobalServiceEvents;
  }

  // is_multi_region_trail - computed: false, optional: true, required: false
  private _isMultiRegionTrail?: boolean | cdktf.IResolvable; 
  public get isMultiRegionTrail() {
    return this.getBooleanAttribute('is_multi_region_trail') as any;
  }
  public set isMultiRegionTrail(value: boolean | cdktf.IResolvable) {
    this._isMultiRegionTrail = value;
  }
  public resetIsMultiRegionTrail() {
    this._isMultiRegionTrail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMultiRegionTrailInput() {
    return this._isMultiRegionTrail;
  }

  // is_organization_trail - computed: false, optional: true, required: false
  private _isOrganizationTrail?: boolean | cdktf.IResolvable; 
  public get isOrganizationTrail() {
    return this.getBooleanAttribute('is_organization_trail') as any;
  }
  public set isOrganizationTrail(value: boolean | cdktf.IResolvable) {
    this._isOrganizationTrail = value;
  }
  public resetIsOrganizationTrail() {
    this._isOrganizationTrail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOrganizationTrailInput() {
    return this._isOrganizationTrail;
  }

  // kms_key_id - computed: false, optional: true, required: false
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

  // s3_bucket_name - computed: false, optional: false, required: true
  private _s3BucketName?: string; 
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketNameInput() {
    return this._s3BucketName;
  }

  // s3_key_prefix - computed: false, optional: true, required: false
  private _s3KeyPrefix?: string; 
  public get s3KeyPrefix() {
    return this.getStringAttribute('s3_key_prefix');
  }
  public set s3KeyPrefix(value: string) {
    this._s3KeyPrefix = value;
  }
  public resetS3KeyPrefix() {
    this._s3KeyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KeyPrefixInput() {
    return this._s3KeyPrefix;
  }

  // sns_topic_name - computed: false, optional: true, required: false
  private _snsTopicName?: string; 
  public get snsTopicName() {
    return this.getStringAttribute('sns_topic_name');
  }
  public set snsTopicName(value: string) {
    this._snsTopicName = value;
  }
  public resetSnsTopicName() {
    this._snsTopicName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsTopicNameInput() {
    return this._snsTopicName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // advanced_event_selector - computed: false, optional: true, required: false
  private _advancedEventSelector?: CloudtrailAdvancedEventSelector[]; 
  public get advancedEventSelector() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('advanced_event_selector') as any;
  }
  public set advancedEventSelector(value: CloudtrailAdvancedEventSelector[]) {
    this._advancedEventSelector = value;
  }
  public resetAdvancedEventSelector() {
    this._advancedEventSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedEventSelectorInput() {
    return this._advancedEventSelector;
  }

  // event_selector - computed: false, optional: true, required: false
  private _eventSelector?: CloudtrailEventSelector[]; 
  public get eventSelector() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('event_selector') as any;
  }
  public set eventSelector(value: CloudtrailEventSelector[]) {
    this._eventSelector = value;
  }
  public resetEventSelector() {
    this._eventSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSelectorInput() {
    return this._eventSelector;
  }

  // insight_selector - computed: false, optional: true, required: false
  private _insightSelector?: CloudtrailInsightSelector[]; 
  public get insightSelector() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('insight_selector') as any;
  }
  public set insightSelector(value: CloudtrailInsightSelector[]) {
    this._insightSelector = value;
  }
  public resetInsightSelector() {
    this._insightSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insightSelectorInput() {
    return this._insightSelector;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_watch_logs_group_arn: cdktf.stringToTerraform(this._cloudWatchLogsGroupArn),
      cloud_watch_logs_role_arn: cdktf.stringToTerraform(this._cloudWatchLogsRoleArn),
      enable_log_file_validation: cdktf.booleanToTerraform(this._enableLogFileValidation),
      enable_logging: cdktf.booleanToTerraform(this._enableLogging),
      include_global_service_events: cdktf.booleanToTerraform(this._includeGlobalServiceEvents),
      is_multi_region_trail: cdktf.booleanToTerraform(this._isMultiRegionTrail),
      is_organization_trail: cdktf.booleanToTerraform(this._isOrganizationTrail),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      name: cdktf.stringToTerraform(this._name),
      s3_bucket_name: cdktf.stringToTerraform(this._s3BucketName),
      s3_key_prefix: cdktf.stringToTerraform(this._s3KeyPrefix),
      sns_topic_name: cdktf.stringToTerraform(this._snsTopicName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      advanced_event_selector: cdktf.listMapper(cloudtrailAdvancedEventSelectorToTerraform)(this._advancedEventSelector),
      event_selector: cdktf.listMapper(cloudtrailEventSelectorToTerraform)(this._eventSelector),
      insight_selector: cdktf.listMapper(cloudtrailInsightSelectorToTerraform)(this._insightSelector),
    };
  }
}
