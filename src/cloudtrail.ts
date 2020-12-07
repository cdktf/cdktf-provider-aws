// https://www.terraform.io/docs/providers/aws/r/cloudtrail.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudtrailConfig extends cdktf.TerraformMetaArguments {
  readonly cloudWatchLogsGroupArn?: string;
  readonly cloudWatchLogsRoleArn?: string;
  readonly enableLogFileValidation?: boolean;
  readonly enableLogging?: boolean;
  readonly includeGlobalServiceEvents?: boolean;
  readonly isMultiRegionTrail?: boolean;
  readonly isOrganizationTrail?: boolean;
  readonly kmsKeyId?: string;
  readonly name: string;
  readonly s3BucketName: string;
  readonly s3KeyPrefix?: string;
  readonly snsTopicName?: string;
  readonly tags?: { [key: string]: string };
  /** event_selector block */
  readonly eventSelector?: CloudtrailEventSelector[];
}
export interface CloudtrailEventSelectorDataResource {
  readonly type: string;
  readonly values: string[];
}

function cloudtrailEventSelectorDataResourceToTerraform(struct?: CloudtrailEventSelectorDataResource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface CloudtrailEventSelector {
  readonly includeManagementEvents?: boolean;
  readonly readWriteType?: string;
  /** data_resource block */
  readonly dataResource?: CloudtrailEventSelectorDataResource[];
}

function cloudtrailEventSelectorToTerraform(struct?: CloudtrailEventSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    include_management_events: cdktf.booleanToTerraform(struct!.includeManagementEvents),
    read_write_type: cdktf.stringToTerraform(struct!.readWriteType),
    data_resource: cdktf.listMapper(cloudtrailEventSelectorDataResourceToTerraform)(struct!.dataResource),
  }
}


// Resource

export class Cloudtrail extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._eventSelector = config.eventSelector;
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
  public set cloudWatchLogsGroupArn(value: string ) {
    this._cloudWatchLogsGroupArn = value;
  }
  public resetCloudWatchLogsGroupArn() {
    this._cloudWatchLogsGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudWatchLogsGroupArnInput() {
    return this._cloudWatchLogsGroupArn
  }

  // cloud_watch_logs_role_arn - computed: false, optional: true, required: false
  private _cloudWatchLogsRoleArn?: string;
  public get cloudWatchLogsRoleArn() {
    return this.getStringAttribute('cloud_watch_logs_role_arn');
  }
  public set cloudWatchLogsRoleArn(value: string ) {
    this._cloudWatchLogsRoleArn = value;
  }
  public resetCloudWatchLogsRoleArn() {
    this._cloudWatchLogsRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudWatchLogsRoleArnInput() {
    return this._cloudWatchLogsRoleArn
  }

  // enable_log_file_validation - computed: false, optional: true, required: false
  private _enableLogFileValidation?: boolean;
  public get enableLogFileValidation() {
    return this.getBooleanAttribute('enable_log_file_validation');
  }
  public set enableLogFileValidation(value: boolean ) {
    this._enableLogFileValidation = value;
  }
  public resetEnableLogFileValidation() {
    this._enableLogFileValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLogFileValidationInput() {
    return this._enableLogFileValidation
  }

  // enable_logging - computed: false, optional: true, required: false
  private _enableLogging?: boolean;
  public get enableLogging() {
    return this.getBooleanAttribute('enable_logging');
  }
  public set enableLogging(value: boolean ) {
    this._enableLogging = value;
  }
  public resetEnableLogging() {
    this._enableLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLoggingInput() {
    return this._enableLogging
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
  private _includeGlobalServiceEvents?: boolean;
  public get includeGlobalServiceEvents() {
    return this.getBooleanAttribute('include_global_service_events');
  }
  public set includeGlobalServiceEvents(value: boolean ) {
    this._includeGlobalServiceEvents = value;
  }
  public resetIncludeGlobalServiceEvents() {
    this._includeGlobalServiceEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeGlobalServiceEventsInput() {
    return this._includeGlobalServiceEvents
  }

  // is_multi_region_trail - computed: false, optional: true, required: false
  private _isMultiRegionTrail?: boolean;
  public get isMultiRegionTrail() {
    return this.getBooleanAttribute('is_multi_region_trail');
  }
  public set isMultiRegionTrail(value: boolean ) {
    this._isMultiRegionTrail = value;
  }
  public resetIsMultiRegionTrail() {
    this._isMultiRegionTrail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMultiRegionTrailInput() {
    return this._isMultiRegionTrail
  }

  // is_organization_trail - computed: false, optional: true, required: false
  private _isOrganizationTrail?: boolean;
  public get isOrganizationTrail() {
    return this.getBooleanAttribute('is_organization_trail');
  }
  public set isOrganizationTrail(value: boolean ) {
    this._isOrganizationTrail = value;
  }
  public resetIsOrganizationTrail() {
    this._isOrganizationTrail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOrganizationTrailInput() {
    return this._isOrganizationTrail
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string ) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // s3_bucket_name - computed: false, optional: false, required: true
  private _s3BucketName: string;
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketNameInput() {
    return this._s3BucketName
  }

  // s3_key_prefix - computed: false, optional: true, required: false
  private _s3KeyPrefix?: string;
  public get s3KeyPrefix() {
    return this.getStringAttribute('s3_key_prefix');
  }
  public set s3KeyPrefix(value: string ) {
    this._s3KeyPrefix = value;
  }
  public resetS3KeyPrefix() {
    this._s3KeyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KeyPrefixInput() {
    return this._s3KeyPrefix
  }

  // sns_topic_name - computed: false, optional: true, required: false
  private _snsTopicName?: string;
  public get snsTopicName() {
    return this.getStringAttribute('sns_topic_name');
  }
  public set snsTopicName(value: string ) {
    this._snsTopicName = value;
  }
  public resetSnsTopicName() {
    this._snsTopicName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsTopicNameInput() {
    return this._snsTopicName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // event_selector - computed: false, optional: true, required: false
  private _eventSelector?: CloudtrailEventSelector[];
  public get eventSelector() {
    return this.interpolationForAttribute('event_selector') as any;
  }
  public set eventSelector(value: CloudtrailEventSelector[] ) {
    this._eventSelector = value;
  }
  public resetEventSelector() {
    this._eventSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSelectorInput() {
    return this._eventSelector
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
      event_selector: cdktf.listMapper(cloudtrailEventSelectorToTerraform)(this._eventSelector),
    };
  }
}
