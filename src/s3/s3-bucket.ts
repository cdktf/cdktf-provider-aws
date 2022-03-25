// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Simple Storage Service
*/
export interface S3BucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#bucket S3Bucket#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#bucket_prefix S3Bucket#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#force_destroy S3Bucket#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#hosted_zone_id S3Bucket#hosted_zone_id}
  */
  readonly hostedZoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#object_lock_enabled S3Bucket#object_lock_enabled}
  */
  readonly objectLockEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#tags S3Bucket#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#tags_all S3Bucket#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * object_lock_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#object_lock_configuration S3Bucket#object_lock_configuration}
  */
  readonly objectLockConfiguration?: S3BucketObjectLockConfiguration;
}
export class S3BucketCorsRule extends cdktf.ComplexComputedList {

  // allowed_headers - computed: true, optional: false, required: false
  public get allowedHeaders() {
    return this.getListAttribute('allowed_headers');
  }

  // allowed_methods - computed: true, optional: false, required: false
  public get allowedMethods() {
    return this.getListAttribute('allowed_methods');
  }

  // allowed_origins - computed: true, optional: false, required: false
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }

  // expose_headers - computed: true, optional: false, required: false
  public get exposeHeaders() {
    return this.getListAttribute('expose_headers');
  }

  // max_age_seconds - computed: true, optional: false, required: false
  public get maxAgeSeconds() {
    return this.getNumberAttribute('max_age_seconds');
  }
}
export class S3BucketGrant extends cdktf.ComplexComputedList {

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return cdktf.Fn.tolist(this.getListAttribute('permissions'));
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}
export class S3BucketLifecycleRuleExpiration extends cdktf.ComplexComputedList {

  // date - computed: true, optional: false, required: false
  public get date() {
    return this.getStringAttribute('date');
  }

  // days - computed: true, optional: false, required: false
  public get days() {
    return this.getNumberAttribute('days');
  }

  // expired_object_delete_marker - computed: true, optional: false, required: false
  public get expiredObjectDeleteMarker() {
    return this.getBooleanAttribute('expired_object_delete_marker');
  }
}
export class S3BucketLifecycleRuleNoncurrentVersionExpiration extends cdktf.ComplexComputedList {

  // days - computed: true, optional: false, required: false
  public get days() {
    return this.getNumberAttribute('days');
  }
}
export class S3BucketLifecycleRuleNoncurrentVersionTransition extends cdktf.ComplexComputedList {

  // days - computed: true, optional: false, required: false
  public get days() {
    return this.getNumberAttribute('days');
  }

  // storage_class - computed: true, optional: false, required: false
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
}
export class S3BucketLifecycleRuleTransition extends cdktf.ComplexComputedList {

  // date - computed: true, optional: false, required: false
  public get date() {
    return this.getStringAttribute('date');
  }

  // days - computed: true, optional: false, required: false
  public get days() {
    return this.getNumberAttribute('days');
  }

  // storage_class - computed: true, optional: false, required: false
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
}
export class S3BucketLifecycleRule extends cdktf.ComplexComputedList {

  // abort_incomplete_multipart_upload_days - computed: true, optional: false, required: false
  public get abortIncompleteMultipartUploadDays() {
    return this.getNumberAttribute('abort_incomplete_multipart_upload_days');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // expiration - computed: true, optional: false, required: false
  public get expiration() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('expiration');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // noncurrent_version_expiration - computed: true, optional: false, required: false
  public get noncurrentVersionExpiration() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('noncurrent_version_expiration');
  }

  // noncurrent_version_transition - computed: true, optional: false, required: false
  public get noncurrentVersionTransition() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('noncurrent_version_transition')));
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getStringMapAttribute('tags');
  }

  // transition - computed: true, optional: false, required: false
  public get transition() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('transition')));
  }
}
export class S3BucketLogging extends cdktf.ComplexComputedList {

  // target_bucket - computed: true, optional: false, required: false
  public get targetBucket() {
    return this.getStringAttribute('target_bucket');
  }

  // target_prefix - computed: true, optional: false, required: false
  public get targetPrefix() {
    return this.getStringAttribute('target_prefix');
  }
}
export class S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation extends cdktf.ComplexComputedList {

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }
}
export class S3BucketReplicationConfigurationRulesDestinationMetrics extends cdktf.ComplexComputedList {

  // minutes - computed: true, optional: false, required: false
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export class S3BucketReplicationConfigurationRulesDestinationReplicationTime extends cdktf.ComplexComputedList {

  // minutes - computed: true, optional: false, required: false
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export class S3BucketReplicationConfigurationRulesDestination extends cdktf.ComplexComputedList {

  // access_control_translation - computed: true, optional: false, required: false
  public get accessControlTranslation() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('access_control_translation');
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // metrics - computed: true, optional: false, required: false
  public get metrics() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('metrics');
  }

  // replica_kms_key_id - computed: true, optional: false, required: false
  public get replicaKmsKeyId() {
    return this.getStringAttribute('replica_kms_key_id');
  }

  // replication_time - computed: true, optional: false, required: false
  public get replicationTime() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('replication_time');
  }

  // storage_class - computed: true, optional: false, required: false
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
}
export class S3BucketReplicationConfigurationRulesFilter extends cdktf.ComplexComputedList {

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
}
export class S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export class S3BucketReplicationConfigurationRulesSourceSelectionCriteria extends cdktf.ComplexComputedList {

  // sse_kms_encrypted_objects - computed: true, optional: false, required: false
  public get sseKmsEncryptedObjects() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('sse_kms_encrypted_objects');
  }
}
export class S3BucketReplicationConfigurationRules extends cdktf.ComplexComputedList {

  // delete_marker_replication_status - computed: true, optional: false, required: false
  public get deleteMarkerReplicationStatus() {
    return this.getStringAttribute('delete_marker_replication_status');
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('destination');
  }

  // filter - computed: true, optional: false, required: false
  public get filter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('filter');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // source_selection_criteria - computed: true, optional: false, required: false
  public get sourceSelectionCriteria() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('source_selection_criteria');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export class S3BucketReplicationConfiguration extends cdktf.ComplexComputedList {

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // rules - computed: true, optional: false, required: false
  public get rules() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('rules')));
  }
}
export class S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault extends cdktf.ComplexComputedList {

  // kms_master_key_id - computed: true, optional: false, required: false
  public get kmsMasterKeyId() {
    return this.getStringAttribute('kms_master_key_id');
  }

  // sse_algorithm - computed: true, optional: false, required: false
  public get sseAlgorithm() {
    return this.getStringAttribute('sse_algorithm');
  }
}
export class S3BucketServerSideEncryptionConfigurationRule extends cdktf.ComplexComputedList {

  // apply_server_side_encryption_by_default - computed: true, optional: false, required: false
  public get applyServerSideEncryptionByDefault() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('apply_server_side_encryption_by_default');
  }

  // bucket_key_enabled - computed: true, optional: false, required: false
  public get bucketKeyEnabled() {
    return this.getBooleanAttribute('bucket_key_enabled');
  }
}
export class S3BucketServerSideEncryptionConfiguration extends cdktf.ComplexComputedList {

  // rule - computed: true, optional: false, required: false
  public get rule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('rule');
  }
}
export class S3BucketVersioning extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // mfa_delete - computed: true, optional: false, required: false
  public get mfaDelete() {
    return this.getBooleanAttribute('mfa_delete');
  }
}
export class S3BucketWebsite extends cdktf.ComplexComputedList {

  // error_document - computed: true, optional: false, required: false
  public get errorDocument() {
    return this.getStringAttribute('error_document');
  }

  // index_document - computed: true, optional: false, required: false
  public get indexDocument() {
    return this.getStringAttribute('index_document');
  }

  // redirect_all_requests_to - computed: true, optional: false, required: false
  public get redirectAllRequestsTo() {
    return this.getStringAttribute('redirect_all_requests_to');
  }

  // routing_rules - computed: true, optional: false, required: false
  public get routingRules() {
    return this.getStringAttribute('routing_rules');
  }
}
export class S3BucketObjectLockConfigurationRuleDefaultRetention extends cdktf.ComplexComputedList {

  // days - computed: true, optional: false, required: false
  public get days() {
    return this.getNumberAttribute('days');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // years - computed: true, optional: false, required: false
  public get years() {
    return this.getNumberAttribute('years');
  }
}
export class S3BucketObjectLockConfigurationRule extends cdktf.ComplexComputedList {

  // default_retention - computed: true, optional: false, required: false
  public get defaultRetention() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('default_retention');
  }
}
export interface S3BucketObjectLockConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#object_lock_enabled S3Bucket#object_lock_enabled}
  */
  readonly objectLockEnabled?: string;
}

export function s3BucketObjectLockConfigurationToTerraform(struct?: S3BucketObjectLockConfigurationOutputReference | S3BucketObjectLockConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_lock_enabled: cdktf.stringToTerraform(struct!.objectLockEnabled),
  }
}

export class S3BucketObjectLockConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): S3BucketObjectLockConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectLockEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectLockEnabled = this._objectLockEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketObjectLockConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objectLockEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objectLockEnabled = value.objectLockEnabled;
    }
  }

  // object_lock_enabled - computed: false, optional: true, required: false
  private _objectLockEnabled?: string; 
  public get objectLockEnabled() {
    return this.getStringAttribute('object_lock_enabled');
  }
  public set objectLockEnabled(value: string) {
    this._objectLockEnabled = value;
  }
  public resetObjectLockEnabled() {
    this._objectLockEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectLockEnabledInput() {
    return this._objectLockEnabled;
  }

  // rule - computed: true, optional: false, required: false
  public rule(index: string) {
    return new S3BucketObjectLockConfigurationRule(this, 'rule', index, false);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket aws_s3_bucket}
*/
export class S3Bucket extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_s3_bucket";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket aws_s3_bucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3BucketConfig = {}
  */
  public constructor(scope: Construct, id: string, config: S3BucketConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_bucket',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucket = config.bucket;
    this._bucketPrefix = config.bucketPrefix;
    this._forceDestroy = config.forceDestroy;
    this._hostedZoneId = config.hostedZoneId;
    this._objectLockEnabled = config.objectLockEnabled;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._objectLockConfiguration.internalValue = config.objectLockConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acceleration_status - computed: true, optional: false, required: false
  public get accelerationStatus() {
    return this.getStringAttribute('acceleration_status');
  }

  // acl - computed: true, optional: false, required: false
  public get acl() {
    return this.getStringAttribute('acl');
  }

  // arn - computed: true, optional: true, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // bucket_domain_name - computed: true, optional: false, required: false
  public get bucketDomainName() {
    return this.getStringAttribute('bucket_domain_name');
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // bucket_regional_domain_name - computed: true, optional: false, required: false
  public get bucketRegionalDomainName() {
    return this.getStringAttribute('bucket_regional_domain_name');
  }

  // cors_rule - computed: true, optional: false, required: false
  public corsRule(index: string) {
    return new S3BucketCorsRule(this, 'cors_rule', index, false);
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktf.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean | cdktf.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
  }

  // grant - computed: true, optional: false, required: false
  public grant(index: string) {
    return new S3BucketGrant(this, 'grant', index, true);
  }

  // hosted_zone_id - computed: true, optional: true, required: false
  private _hostedZoneId?: string; 
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }
  public set hostedZoneId(value: string) {
    this._hostedZoneId = value;
  }
  public resetHostedZoneId() {
    this._hostedZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedZoneIdInput() {
    return this._hostedZoneId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_rule - computed: true, optional: false, required: false
  public lifecycleRule(index: string) {
    return new S3BucketLifecycleRule(this, 'lifecycle_rule', index, false);
  }

  // logging - computed: true, optional: false, required: false
  public logging(index: string) {
    return new S3BucketLogging(this, 'logging', index, true);
  }

  // object_lock_enabled - computed: true, optional: true, required: false
  private _objectLockEnabled?: boolean | cdktf.IResolvable; 
  public get objectLockEnabled() {
    return this.getBooleanAttribute('object_lock_enabled');
  }
  public set objectLockEnabled(value: boolean | cdktf.IResolvable) {
    this._objectLockEnabled = value;
  }
  public resetObjectLockEnabled() {
    this._objectLockEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectLockEnabledInput() {
    return this._objectLockEnabled;
  }

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // replication_configuration - computed: true, optional: false, required: false
  public replicationConfiguration(index: string) {
    return new S3BucketReplicationConfiguration(this, 'replication_configuration', index, false);
  }

  // request_payer - computed: true, optional: false, required: false
  public get requestPayer() {
    return this.getStringAttribute('request_payer');
  }

  // server_side_encryption_configuration - computed: true, optional: false, required: false
  public serverSideEncryptionConfiguration(index: string) {
    return new S3BucketServerSideEncryptionConfiguration(this, 'server_side_encryption_configuration', index, false);
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

  // versioning - computed: true, optional: false, required: false
  public versioning(index: string) {
    return new S3BucketVersioning(this, 'versioning', index, false);
  }

  // website - computed: true, optional: false, required: false
  public website(index: string) {
    return new S3BucketWebsite(this, 'website', index, false);
  }

  // website_domain - computed: true, optional: false, required: false
  public get websiteDomain() {
    return this.getStringAttribute('website_domain');
  }

  // website_endpoint - computed: true, optional: false, required: false
  public get websiteEndpoint() {
    return this.getStringAttribute('website_endpoint');
  }

  // object_lock_configuration - computed: false, optional: true, required: false
  private _objectLockConfiguration = new S3BucketObjectLockConfigurationOutputReference(this, "object_lock_configuration", true);
  public get objectLockConfiguration() {
    return this._objectLockConfiguration;
  }
  public putObjectLockConfiguration(value: S3BucketObjectLockConfiguration) {
    this._objectLockConfiguration.internalValue = value;
  }
  public resetObjectLockConfiguration() {
    this._objectLockConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectLockConfigurationInput() {
    return this._objectLockConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      bucket_prefix: cdktf.stringToTerraform(this._bucketPrefix),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      hosted_zone_id: cdktf.stringToTerraform(this._hostedZoneId),
      object_lock_enabled: cdktf.booleanToTerraform(this._objectLockEnabled),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      object_lock_configuration: s3BucketObjectLockConfigurationToTerraform(this._objectLockConfiguration.internalValue),
    };
  }
}
