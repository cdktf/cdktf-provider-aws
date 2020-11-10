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
