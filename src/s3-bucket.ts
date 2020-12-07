// https://www.terraform.io/docs/providers/aws/r/s3_bucket.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3BucketConfig extends cdktf.TerraformMetaArguments {
  readonly accelerationStatus?: string;
  readonly acl?: string;
  readonly bucket?: string;
  readonly bucketPrefix?: string;
  readonly forceDestroy?: boolean;
  readonly hostedZoneId?: string;
  readonly policy?: string;
  readonly region?: string;
  readonly requestPayer?: string;
  readonly tags?: { [key: string]: string };
  readonly websiteDomain?: string;
  readonly websiteEndpoint?: string;
  /** cors_rule block */
  readonly corsRule?: S3BucketCorsRule[];
  /** grant block */
  readonly grant?: S3BucketGrant[];
  /** lifecycle_rule block */
  readonly lifecycleRule?: S3BucketLifecycleRule[];
  /** logging block */
  readonly logging?: S3BucketLogging[];
  /** object_lock_configuration block */
  readonly objectLockConfiguration?: S3BucketObjectLockConfiguration[];
  /** replication_configuration block */
  readonly replicationConfiguration?: S3BucketReplicationConfiguration[];
  /** server_side_encryption_configuration block */
  readonly serverSideEncryptionConfiguration?: S3BucketServerSideEncryptionConfiguration[];
  /** versioning block */
  readonly versioning?: S3BucketVersioning[];
  /** website block */
  readonly website?: S3BucketWebsite[];
}
export interface S3BucketCorsRule {
  readonly allowedHeaders?: string[];
  readonly allowedMethods: string[];
  readonly allowedOrigins: string[];
  readonly exposeHeaders?: string[];
  readonly maxAgeSeconds?: number;
}

function s3BucketCorsRuleToTerraform(struct?: S3BucketCorsRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedHeaders),
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedMethods),
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedOrigins),
    expose_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exposeHeaders),
    max_age_seconds: cdktf.numberToTerraform(struct!.maxAgeSeconds),
  }
}

export interface S3BucketGrant {
  readonly id?: string;
  readonly permissions: string[];
  readonly type: string;
  readonly uri?: string;
}

function s3BucketGrantToTerraform(struct?: S3BucketGrant): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    permissions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.permissions),
    type: cdktf.stringToTerraform(struct!.type),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}

export interface S3BucketLifecycleRuleExpiration {
  readonly date?: string;
  readonly days?: number;
  readonly expiredObjectDeleteMarker?: boolean;
}

function s3BucketLifecycleRuleExpirationToTerraform(struct?: S3BucketLifecycleRuleExpiration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    date: cdktf.stringToTerraform(struct!.date),
    days: cdktf.numberToTerraform(struct!.days),
    expired_object_delete_marker: cdktf.booleanToTerraform(struct!.expiredObjectDeleteMarker),
  }
}

export interface S3BucketLifecycleRuleNoncurrentVersionExpiration {
  readonly days?: number;
}

function s3BucketLifecycleRuleNoncurrentVersionExpirationToTerraform(struct?: S3BucketLifecycleRuleNoncurrentVersionExpiration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    days: cdktf.numberToTerraform(struct!.days),
  }
}

export interface S3BucketLifecycleRuleNoncurrentVersionTransition {
  readonly days?: number;
  readonly storageClass: string;
}

function s3BucketLifecycleRuleNoncurrentVersionTransitionToTerraform(struct?: S3BucketLifecycleRuleNoncurrentVersionTransition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}

export interface S3BucketLifecycleRuleTransition {
  readonly date?: string;
  readonly days?: number;
  readonly storageClass: string;
}

function s3BucketLifecycleRuleTransitionToTerraform(struct?: S3BucketLifecycleRuleTransition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    date: cdktf.stringToTerraform(struct!.date),
    days: cdktf.numberToTerraform(struct!.days),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}

export interface S3BucketLifecycleRule {
  readonly abortIncompleteMultipartUploadDays?: number;
  readonly enabled: boolean;
  readonly id?: string;
  readonly prefix?: string;
  readonly tags?: { [key: string]: string };
  /** expiration block */
  readonly expiration?: S3BucketLifecycleRuleExpiration[];
  /** noncurrent_version_expiration block */
  readonly noncurrentVersionExpiration?: S3BucketLifecycleRuleNoncurrentVersionExpiration[];
  /** noncurrent_version_transition block */
  readonly noncurrentVersionTransition?: S3BucketLifecycleRuleNoncurrentVersionTransition[];
  /** transition block */
  readonly transition?: S3BucketLifecycleRuleTransition[];
}

function s3BucketLifecycleRuleToTerraform(struct?: S3BucketLifecycleRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    abort_incomplete_multipart_upload_days: cdktf.numberToTerraform(struct!.abortIncompleteMultipartUploadDays),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
    expiration: cdktf.listMapper(s3BucketLifecycleRuleExpirationToTerraform)(struct!.expiration),
    noncurrent_version_expiration: cdktf.listMapper(s3BucketLifecycleRuleNoncurrentVersionExpirationToTerraform)(struct!.noncurrentVersionExpiration),
    noncurrent_version_transition: cdktf.listMapper(s3BucketLifecycleRuleNoncurrentVersionTransitionToTerraform)(struct!.noncurrentVersionTransition),
    transition: cdktf.listMapper(s3BucketLifecycleRuleTransitionToTerraform)(struct!.transition),
  }
}

export interface S3BucketLogging {
  readonly targetBucket: string;
  readonly targetPrefix?: string;
}

function s3BucketLoggingToTerraform(struct?: S3BucketLogging): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    target_bucket: cdktf.stringToTerraform(struct!.targetBucket),
    target_prefix: cdktf.stringToTerraform(struct!.targetPrefix),
  }
}

export interface S3BucketObjectLockConfigurationRuleDefaultRetention {
  readonly days?: number;
  readonly mode: string;
  readonly years?: number;
}

function s3BucketObjectLockConfigurationRuleDefaultRetentionToTerraform(struct?: S3BucketObjectLockConfigurationRuleDefaultRetention): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    mode: cdktf.stringToTerraform(struct!.mode),
    years: cdktf.numberToTerraform(struct!.years),
  }
}

export interface S3BucketObjectLockConfigurationRule {
  /** default_retention block */
  readonly defaultRetention: S3BucketObjectLockConfigurationRuleDefaultRetention[];
}

function s3BucketObjectLockConfigurationRuleToTerraform(struct?: S3BucketObjectLockConfigurationRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_retention: cdktf.listMapper(s3BucketObjectLockConfigurationRuleDefaultRetentionToTerraform)(struct!.defaultRetention),
  }
}

export interface S3BucketObjectLockConfiguration {
  readonly objectLockEnabled: string;
  /** rule block */
  readonly rule?: S3BucketObjectLockConfigurationRule[];
}

function s3BucketObjectLockConfigurationToTerraform(struct?: S3BucketObjectLockConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object_lock_enabled: cdktf.stringToTerraform(struct!.objectLockEnabled),
    rule: cdktf.listMapper(s3BucketObjectLockConfigurationRuleToTerraform)(struct!.rule),
  }
}

export interface S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation {
  readonly owner: string;
}

function s3BucketReplicationConfigurationRulesDestinationAccessControlTranslationToTerraform(struct?: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    owner: cdktf.stringToTerraform(struct!.owner),
  }
}

export interface S3BucketReplicationConfigurationRulesDestination {
  readonly accountId?: string;
  readonly bucket: string;
  readonly replicaKmsKeyId?: string;
  readonly storageClass?: string;
  /** access_control_translation block */
  readonly accessControlTranslation?: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation[];
}

function s3BucketReplicationConfigurationRulesDestinationToTerraform(struct?: S3BucketReplicationConfigurationRulesDestination): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    replica_kms_key_id: cdktf.stringToTerraform(struct!.replicaKmsKeyId),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
    access_control_translation: cdktf.listMapper(s3BucketReplicationConfigurationRulesDestinationAccessControlTranslationToTerraform)(struct!.accessControlTranslation),
  }
}

export interface S3BucketReplicationConfigurationRulesFilter {
  readonly prefix?: string;
  readonly tags?: { [key: string]: string };
}

function s3BucketReplicationConfigurationRulesFilterToTerraform(struct?: S3BucketReplicationConfigurationRulesFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
  }
}

export interface S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects {
  readonly enabled: boolean;
}

function s3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsToTerraform(struct?: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface S3BucketReplicationConfigurationRulesSourceSelectionCriteria {
  /** sse_kms_encrypted_objects block */
  readonly sseKmsEncryptedObjects?: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects[];
}

function s3BucketReplicationConfigurationRulesSourceSelectionCriteriaToTerraform(struct?: S3BucketReplicationConfigurationRulesSourceSelectionCriteria): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    sse_kms_encrypted_objects: cdktf.listMapper(s3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsToTerraform)(struct!.sseKmsEncryptedObjects),
  }
}

export interface S3BucketReplicationConfigurationRules {
  readonly id?: string;
  readonly prefix?: string;
  readonly priority?: number;
  readonly status: string;
  /** destination block */
  readonly destination: S3BucketReplicationConfigurationRulesDestination[];
  /** filter block */
  readonly filter?: S3BucketReplicationConfigurationRulesFilter[];
  /** source_selection_criteria block */
  readonly sourceSelectionCriteria?: S3BucketReplicationConfigurationRulesSourceSelectionCriteria[];
}

function s3BucketReplicationConfigurationRulesToTerraform(struct?: S3BucketReplicationConfigurationRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    priority: cdktf.numberToTerraform(struct!.priority),
    status: cdktf.stringToTerraform(struct!.status),
    destination: cdktf.listMapper(s3BucketReplicationConfigurationRulesDestinationToTerraform)(struct!.destination),
    filter: cdktf.listMapper(s3BucketReplicationConfigurationRulesFilterToTerraform)(struct!.filter),
    source_selection_criteria: cdktf.listMapper(s3BucketReplicationConfigurationRulesSourceSelectionCriteriaToTerraform)(struct!.sourceSelectionCriteria),
  }
}

export interface S3BucketReplicationConfiguration {
  readonly role: string;
  /** rules block */
  readonly rules: S3BucketReplicationConfigurationRules[];
}

function s3BucketReplicationConfigurationToTerraform(struct?: S3BucketReplicationConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    role: cdktf.stringToTerraform(struct!.role),
    rules: cdktf.listMapper(s3BucketReplicationConfigurationRulesToTerraform)(struct!.rules),
  }
}

export interface S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault {
  readonly kmsMasterKeyId?: string;
  readonly sseAlgorithm: string;
}

function s3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultToTerraform(struct?: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_master_key_id: cdktf.stringToTerraform(struct!.kmsMasterKeyId),
    sse_algorithm: cdktf.stringToTerraform(struct!.sseAlgorithm),
  }
}

export interface S3BucketServerSideEncryptionConfigurationRule {
  /** apply_server_side_encryption_by_default block */
  readonly applyServerSideEncryptionByDefault: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault[];
}

function s3BucketServerSideEncryptionConfigurationRuleToTerraform(struct?: S3BucketServerSideEncryptionConfigurationRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    apply_server_side_encryption_by_default: cdktf.listMapper(s3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultToTerraform)(struct!.applyServerSideEncryptionByDefault),
  }
}

export interface S3BucketServerSideEncryptionConfiguration {
  /** rule block */
  readonly rule: S3BucketServerSideEncryptionConfigurationRule[];
}

function s3BucketServerSideEncryptionConfigurationToTerraform(struct?: S3BucketServerSideEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    rule: cdktf.listMapper(s3BucketServerSideEncryptionConfigurationRuleToTerraform)(struct!.rule),
  }
}

export interface S3BucketVersioning {
  readonly enabled?: boolean;
  readonly mfaDelete?: boolean;
}

function s3BucketVersioningToTerraform(struct?: S3BucketVersioning): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    mfa_delete: cdktf.booleanToTerraform(struct!.mfaDelete),
  }
}

export interface S3BucketWebsite {
  readonly errorDocument?: string;
  readonly indexDocument?: string;
  readonly redirectAllRequestsTo?: string;
  readonly routingRules?: string;
}

function s3BucketWebsiteToTerraform(struct?: S3BucketWebsite): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    error_document: cdktf.stringToTerraform(struct!.errorDocument),
    index_document: cdktf.stringToTerraform(struct!.indexDocument),
    redirect_all_requests_to: cdktf.stringToTerraform(struct!.redirectAllRequestsTo),
    routing_rules: cdktf.stringToTerraform(struct!.routingRules),
  }
}


// Resource

export class S3Bucket extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._accelerationStatus = config.accelerationStatus;
    this._acl = config.acl;
    this._bucket = config.bucket;
    this._bucketPrefix = config.bucketPrefix;
    this._forceDestroy = config.forceDestroy;
    this._hostedZoneId = config.hostedZoneId;
    this._policy = config.policy;
    this._region = config.region;
    this._requestPayer = config.requestPayer;
    this._tags = config.tags;
    this._websiteDomain = config.websiteDomain;
    this._websiteEndpoint = config.websiteEndpoint;
    this._corsRule = config.corsRule;
    this._grant = config.grant;
    this._lifecycleRule = config.lifecycleRule;
    this._logging = config.logging;
    this._objectLockConfiguration = config.objectLockConfiguration;
    this._replicationConfiguration = config.replicationConfiguration;
    this._serverSideEncryptionConfiguration = config.serverSideEncryptionConfiguration;
    this._versioning = config.versioning;
    this._website = config.website;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acceleration_status - computed: true, optional: true, required: false
  private _accelerationStatus?: string;
  public get accelerationStatus() {
    return this.getStringAttribute('acceleration_status');
  }
  public set accelerationStatus(value: string) {
    this._accelerationStatus = value;
  }
  public resetAccelerationStatus() {
    this._accelerationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accelerationStatusInput() {
    return this._accelerationStatus
  }

  // acl - computed: false, optional: true, required: false
  private _acl?: string;
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string ) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl
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
    return this._bucket
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
  public set bucketPrefix(value: string ) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix
  }

  // bucket_regional_domain_name - computed: true, optional: false, required: false
  public get bucketRegionalDomainName() {
    return this.getStringAttribute('bucket_regional_domain_name');
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean;
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean ) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy
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
    return this._hostedZoneId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string;
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string ) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy
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
    return this._region
  }

  // request_payer - computed: true, optional: true, required: false
  private _requestPayer?: string;
  public get requestPayer() {
    return this.getStringAttribute('request_payer');
  }
  public set requestPayer(value: string) {
    this._requestPayer = value;
  }
  public resetRequestPayer() {
    this._requestPayer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPayerInput() {
    return this._requestPayer
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

  // website_domain - computed: true, optional: true, required: false
  private _websiteDomain?: string;
  public get websiteDomain() {
    return this.getStringAttribute('website_domain');
  }
  public set websiteDomain(value: string) {
    this._websiteDomain = value;
  }
  public resetWebsiteDomain() {
    this._websiteDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteDomainInput() {
    return this._websiteDomain
  }

  // website_endpoint - computed: true, optional: true, required: false
  private _websiteEndpoint?: string;
  public get websiteEndpoint() {
    return this.getStringAttribute('website_endpoint');
  }
  public set websiteEndpoint(value: string) {
    this._websiteEndpoint = value;
  }
  public resetWebsiteEndpoint() {
    this._websiteEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteEndpointInput() {
    return this._websiteEndpoint
  }

  // cors_rule - computed: false, optional: true, required: false
  private _corsRule?: S3BucketCorsRule[];
  public get corsRule() {
    return this.interpolationForAttribute('cors_rule') as any;
  }
  public set corsRule(value: S3BucketCorsRule[] ) {
    this._corsRule = value;
  }
  public resetCorsRule() {
    this._corsRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsRuleInput() {
    return this._corsRule
  }

  // grant - computed: false, optional: true, required: false
  private _grant?: S3BucketGrant[];
  public get grant() {
    return this.interpolationForAttribute('grant') as any;
  }
  public set grant(value: S3BucketGrant[] ) {
    this._grant = value;
  }
  public resetGrant() {
    this._grant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantInput() {
    return this._grant
  }

  // lifecycle_rule - computed: false, optional: true, required: false
  private _lifecycleRule?: S3BucketLifecycleRule[];
  public get lifecycleRule() {
    return this.interpolationForAttribute('lifecycle_rule') as any;
  }
  public set lifecycleRule(value: S3BucketLifecycleRule[] ) {
    this._lifecycleRule = value;
  }
  public resetLifecycleRule() {
    this._lifecycleRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleRuleInput() {
    return this._lifecycleRule
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: S3BucketLogging[];
  public get logging() {
    return this.interpolationForAttribute('logging') as any;
  }
  public set logging(value: S3BucketLogging[] ) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging
  }

  // object_lock_configuration - computed: false, optional: true, required: false
  private _objectLockConfiguration?: S3BucketObjectLockConfiguration[];
  public get objectLockConfiguration() {
    return this.interpolationForAttribute('object_lock_configuration') as any;
  }
  public set objectLockConfiguration(value: S3BucketObjectLockConfiguration[] ) {
    this._objectLockConfiguration = value;
  }
  public resetObjectLockConfiguration() {
    this._objectLockConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectLockConfigurationInput() {
    return this._objectLockConfiguration
  }

  // replication_configuration - computed: false, optional: true, required: false
  private _replicationConfiguration?: S3BucketReplicationConfiguration[];
  public get replicationConfiguration() {
    return this.interpolationForAttribute('replication_configuration') as any;
  }
  public set replicationConfiguration(value: S3BucketReplicationConfiguration[] ) {
    this._replicationConfiguration = value;
  }
  public resetReplicationConfiguration() {
    this._replicationConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationConfigurationInput() {
    return this._replicationConfiguration
  }

  // server_side_encryption_configuration - computed: false, optional: true, required: false
  private _serverSideEncryptionConfiguration?: S3BucketServerSideEncryptionConfiguration[];
  public get serverSideEncryptionConfiguration() {
    return this.interpolationForAttribute('server_side_encryption_configuration') as any;
  }
  public set serverSideEncryptionConfiguration(value: S3BucketServerSideEncryptionConfiguration[] ) {
    this._serverSideEncryptionConfiguration = value;
  }
  public resetServerSideEncryptionConfiguration() {
    this._serverSideEncryptionConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionConfigurationInput() {
    return this._serverSideEncryptionConfiguration
  }

  // versioning - computed: false, optional: true, required: false
  private _versioning?: S3BucketVersioning[];
  public get versioning() {
    return this.interpolationForAttribute('versioning') as any;
  }
  public set versioning(value: S3BucketVersioning[] ) {
    this._versioning = value;
  }
  public resetVersioning() {
    this._versioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versioningInput() {
    return this._versioning
  }

  // website - computed: false, optional: true, required: false
  private _website?: S3BucketWebsite[];
  public get website() {
    return this.interpolationForAttribute('website') as any;
  }
  public set website(value: S3BucketWebsite[] ) {
    this._website = value;
  }
  public resetWebsite() {
    this._website = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteInput() {
    return this._website
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acceleration_status: cdktf.stringToTerraform(this._accelerationStatus),
      acl: cdktf.stringToTerraform(this._acl),
      bucket: cdktf.stringToTerraform(this._bucket),
      bucket_prefix: cdktf.stringToTerraform(this._bucketPrefix),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      hosted_zone_id: cdktf.stringToTerraform(this._hostedZoneId),
      policy: cdktf.stringToTerraform(this._policy),
      region: cdktf.stringToTerraform(this._region),
      request_payer: cdktf.stringToTerraform(this._requestPayer),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      website_domain: cdktf.stringToTerraform(this._websiteDomain),
      website_endpoint: cdktf.stringToTerraform(this._websiteEndpoint),
      cors_rule: cdktf.listMapper(s3BucketCorsRuleToTerraform)(this._corsRule),
      grant: cdktf.listMapper(s3BucketGrantToTerraform)(this._grant),
      lifecycle_rule: cdktf.listMapper(s3BucketLifecycleRuleToTerraform)(this._lifecycleRule),
      logging: cdktf.listMapper(s3BucketLoggingToTerraform)(this._logging),
      object_lock_configuration: cdktf.listMapper(s3BucketObjectLockConfigurationToTerraform)(this._objectLockConfiguration),
      replication_configuration: cdktf.listMapper(s3BucketReplicationConfigurationToTerraform)(this._replicationConfiguration),
      server_side_encryption_configuration: cdktf.listMapper(s3BucketServerSideEncryptionConfigurationToTerraform)(this._serverSideEncryptionConfiguration),
      versioning: cdktf.listMapper(s3BucketVersioningToTerraform)(this._versioning),
      website: cdktf.listMapper(s3BucketWebsiteToTerraform)(this._website),
    };
  }
}
