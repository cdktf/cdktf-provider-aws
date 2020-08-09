// https://www.terraform.io/docs/providers/aws/r/s3_bucket.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface S3BucketConfig extends TerraformMetaArguments {
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
export interface S3BucketGrant {
  readonly id?: string;
  readonly permissions: string[];
  readonly type: string;
  readonly uri?: string;
}
export interface S3BucketLifecycleRuleExpiration {
  readonly date?: string;
  readonly days?: number;
  readonly expiredObjectDeleteMarker?: boolean;
}
export interface S3BucketLifecycleRuleNoncurrentVersionExpiration {
  readonly days?: number;
}
export interface S3BucketLifecycleRuleNoncurrentVersionTransition {
  readonly days?: number;
  readonly storageClass: string;
}
export interface S3BucketLifecycleRuleTransition {
  readonly date?: string;
  readonly days?: number;
  readonly storageClass: string;
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
export interface S3BucketLogging {
  readonly targetBucket: string;
  readonly targetPrefix?: string;
}
export interface S3BucketObjectLockConfigurationRuleDefaultRetention {
  readonly days?: number;
  readonly mode: string;
  readonly years?: number;
}
export interface S3BucketObjectLockConfigurationRule {
  /** default_retention block */
  readonly defaultRetention: S3BucketObjectLockConfigurationRuleDefaultRetention[];
}
export interface S3BucketObjectLockConfiguration {
  readonly objectLockEnabled: string;
  /** rule block */
  readonly rule?: S3BucketObjectLockConfigurationRule[];
}
export interface S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation {
  readonly owner: string;
}
export interface S3BucketReplicationConfigurationRulesDestination {
  readonly accountId?: string;
  readonly bucket: string;
  readonly replicaKmsKeyId?: string;
  readonly storageClass?: string;
  /** access_control_translation block */
  readonly accessControlTranslation?: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation[];
}
export interface S3BucketReplicationConfigurationRulesFilter {
  readonly prefix?: string;
  readonly tags?: { [key: string]: string };
}
export interface S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects {
  readonly enabled: boolean;
}
export interface S3BucketReplicationConfigurationRulesSourceSelectionCriteria {
  /** sse_kms_encrypted_objects block */
  readonly sseKmsEncryptedObjects?: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects[];
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
export interface S3BucketReplicationConfiguration {
  readonly role: string;
  /** rules block */
  readonly rules: S3BucketReplicationConfigurationRules[];
}
export interface S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault {
  readonly kmsMasterKeyId?: string;
  readonly sseAlgorithm: string;
}
export interface S3BucketServerSideEncryptionConfigurationRule {
  /** apply_server_side_encryption_by_default block */
  readonly applyServerSideEncryptionByDefault: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault[];
}
export interface S3BucketServerSideEncryptionConfiguration {
  /** rule block */
  readonly rule: S3BucketServerSideEncryptionConfigurationRule[];
}
export interface S3BucketVersioning {
  readonly enabled?: boolean;
  readonly mfaDelete?: boolean;
}
export interface S3BucketWebsite {
  readonly errorDocument?: string;
  readonly indexDocument?: string;
  readonly redirectAllRequestsTo?: string;
  readonly routingRules?: string;
}

// Resource

export class S3Bucket extends TerraformResource {

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
    return this._accelerationStatus ?? this.getStringAttribute('acceleration_status');
  }
  public set accelerationStatus(value: string | undefined) {
    this._accelerationStatus = value;
  }

  // acl - computed: false, optional: true, required: false
  private _acl?: string;
  public get acl() {
    return this._acl;
  }
  public set acl(value: string | undefined) {
    this._acl = value;
  }

  // arn - computed: true, optional: true, required: false
  private _arn?: string;
  public get arn() {
    return this._arn ?? this.getStringAttribute('arn');
  }
  public set arn(value: string | undefined) {
    this._arn = value;
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string;
  public get bucket() {
    return this._bucket ?? this.getStringAttribute('bucket');
  }
  public set bucket(value: string | undefined) {
    this._bucket = value;
  }

  // bucket_domain_name - computed: true, optional: false, required: true
  public get bucketDomainName() {
    return this.getStringAttribute('bucket_domain_name');
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string;
  public get bucketPrefix() {
    return this._bucketPrefix;
  }
  public set bucketPrefix(value: string | undefined) {
    this._bucketPrefix = value;
  }

  // bucket_regional_domain_name - computed: true, optional: false, required: true
  public get bucketRegionalDomainName() {
    return this.getStringAttribute('bucket_regional_domain_name');
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean;
  public get forceDestroy() {
    return this._forceDestroy;
  }
  public set forceDestroy(value: boolean | undefined) {
    this._forceDestroy = value;
  }

  // hosted_zone_id - computed: true, optional: true, required: false
  private _hostedZoneId?: string;
  public get hostedZoneId() {
    return this._hostedZoneId ?? this.getStringAttribute('hosted_zone_id');
  }
  public set hostedZoneId(value: string | undefined) {
    this._hostedZoneId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string;
  public get policy() {
    return this._policy;
  }
  public set policy(value: string | undefined) {
    this._policy = value;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region ?? this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }

  // request_payer - computed: true, optional: true, required: false
  private _requestPayer?: string;
  public get requestPayer() {
    return this._requestPayer ?? this.getStringAttribute('request_payer');
  }
  public set requestPayer(value: string | undefined) {
    this._requestPayer = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // website_domain - computed: true, optional: true, required: false
  private _websiteDomain?: string;
  public get websiteDomain() {
    return this._websiteDomain ?? this.getStringAttribute('website_domain');
  }
  public set websiteDomain(value: string | undefined) {
    this._websiteDomain = value;
  }

  // website_endpoint - computed: true, optional: true, required: false
  private _websiteEndpoint?: string;
  public get websiteEndpoint() {
    return this._websiteEndpoint ?? this.getStringAttribute('website_endpoint');
  }
  public set websiteEndpoint(value: string | undefined) {
    this._websiteEndpoint = value;
  }

  // cors_rule - computed: false, optional: true, required: false
  private _corsRule?: S3BucketCorsRule[];
  public get corsRule() {
    return this._corsRule;
  }
  public set corsRule(value: S3BucketCorsRule[] | undefined) {
    this._corsRule = value;
  }

  // grant - computed: false, optional: true, required: false
  private _grant?: S3BucketGrant[];
  public get grant() {
    return this._grant;
  }
  public set grant(value: S3BucketGrant[] | undefined) {
    this._grant = value;
  }

  // lifecycle_rule - computed: false, optional: true, required: false
  private _lifecycleRule?: S3BucketLifecycleRule[];
  public get lifecycleRule() {
    return this._lifecycleRule;
  }
  public set lifecycleRule(value: S3BucketLifecycleRule[] | undefined) {
    this._lifecycleRule = value;
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: S3BucketLogging[];
  public get logging() {
    return this._logging;
  }
  public set logging(value: S3BucketLogging[] | undefined) {
    this._logging = value;
  }

  // object_lock_configuration - computed: false, optional: true, required: false
  private _objectLockConfiguration?: S3BucketObjectLockConfiguration[];
  public get objectLockConfiguration() {
    return this._objectLockConfiguration;
  }
  public set objectLockConfiguration(value: S3BucketObjectLockConfiguration[] | undefined) {
    this._objectLockConfiguration = value;
  }

  // replication_configuration - computed: false, optional: true, required: false
  private _replicationConfiguration?: S3BucketReplicationConfiguration[];
  public get replicationConfiguration() {
    return this._replicationConfiguration;
  }
  public set replicationConfiguration(value: S3BucketReplicationConfiguration[] | undefined) {
    this._replicationConfiguration = value;
  }

  // server_side_encryption_configuration - computed: false, optional: true, required: false
  private _serverSideEncryptionConfiguration?: S3BucketServerSideEncryptionConfiguration[];
  public get serverSideEncryptionConfiguration() {
    return this._serverSideEncryptionConfiguration;
  }
  public set serverSideEncryptionConfiguration(value: S3BucketServerSideEncryptionConfiguration[] | undefined) {
    this._serverSideEncryptionConfiguration = value;
  }

  // versioning - computed: false, optional: true, required: false
  private _versioning?: S3BucketVersioning[];
  public get versioning() {
    return this._versioning;
  }
  public set versioning(value: S3BucketVersioning[] | undefined) {
    this._versioning = value;
  }

  // website - computed: false, optional: true, required: false
  private _website?: S3BucketWebsite[];
  public get website() {
    return this._website;
  }
  public set website(value: S3BucketWebsite[] | undefined) {
    this._website = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      acceleration_status: this._accelerationStatus,
      acl: this._acl,
      bucket: this._bucket,
      bucket_prefix: this._bucketPrefix,
      force_destroy: this._forceDestroy,
      hosted_zone_id: this._hostedZoneId,
      policy: this._policy,
      region: this._region,
      request_payer: this._requestPayer,
      tags: this._tags,
      website_domain: this._websiteDomain,
      website_endpoint: this._websiteEndpoint,
      cors_rule: this._corsRule,
      grant: this._grant,
      lifecycle_rule: this._lifecycleRule,
      logging: this._logging,
      object_lock_configuration: this._objectLockConfiguration,
      replication_configuration: this._replicationConfiguration,
      server_side_encryption_configuration: this._serverSideEncryptionConfiguration,
      versioning: this._versioning,
      website: this._website,
    };
  }
}
