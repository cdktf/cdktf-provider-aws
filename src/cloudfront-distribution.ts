// https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";

// Configuration

export interface CloudfrontDistributionConfig extends TerraformMetaArguments {
  readonly aliases?: string[];
  readonly comment?: string;
  readonly defaultRootObject?: string;
  readonly enabled: boolean;
  readonly httpVersion?: string;
  readonly isIpv6Enabled?: boolean;
  readonly priceClass?: string;
  readonly retainOnDelete?: boolean;
  readonly tags?: { [key: string]: string };
  readonly waitForDeployment?: boolean;
  readonly webAclId?: string;
  /** cache_behavior block */
  readonly cacheBehavior?: CloudfrontDistributionCacheBehavior[];
  /** custom_error_response block */
  readonly customErrorResponse?: CloudfrontDistributionCustomErrorResponse[];
  /** default_cache_behavior block */
  readonly defaultCacheBehavior: CloudfrontDistributionDefaultCacheBehavior[];
  /** logging_config block */
  readonly loggingConfig?: CloudfrontDistributionLoggingConfig[];
  /** ordered_cache_behavior block */
  readonly orderedCacheBehavior?: CloudfrontDistributionOrderedCacheBehavior[];
  /** origin block */
  readonly origin: CloudfrontDistributionOrigin[];
  /** origin_group block */
  readonly originGroup?: CloudfrontDistributionOriginGroup[];
  /** restrictions block */
  readonly restrictions: CloudfrontDistributionRestrictions[];
  /** viewer_certificate block */
  readonly viewerCertificate: CloudfrontDistributionViewerCertificate[];
}
export interface CloudfrontDistributionCacheBehaviorForwardedValuesCookies {
  readonly forward: string;
  readonly whitelistedNames?: string[];
}
export interface CloudfrontDistributionCacheBehaviorForwardedValues {
  readonly headers?: string[];
  readonly queryString: boolean;
  readonly queryStringCacheKeys?: string[];
  /** cookies block */
  readonly cookies: CloudfrontDistributionCacheBehaviorForwardedValuesCookies[];
}
export interface CloudfrontDistributionCacheBehaviorLambdaFunctionAssociation {
  readonly eventType: string;
  readonly includeBody?: boolean;
  readonly lambdaArn: string;
}
export interface CloudfrontDistributionCacheBehavior {
  readonly allowedMethods: string[];
  readonly cachedMethods: string[];
  readonly compress?: boolean;
  readonly defaultTtl?: number;
  readonly fieldLevelEncryptionId?: string;
  readonly maxTtl?: number;
  readonly minTtl?: number;
  readonly pathPattern: string;
  readonly smoothStreaming?: boolean;
  readonly targetOriginId: string;
  readonly trustedSigners?: string[];
  readonly viewerProtocolPolicy: string;
  /** forwarded_values block */
  readonly forwardedValues: CloudfrontDistributionCacheBehaviorForwardedValues[];
  /** lambda_function_association block */
  readonly lambdaFunctionAssociation?: CloudfrontDistributionCacheBehaviorLambdaFunctionAssociation[];
}
export interface CloudfrontDistributionCustomErrorResponse {
  readonly errorCachingMinTtl?: number;
  readonly errorCode: number;
  readonly responseCode?: number;
  readonly responsePagePath?: string;
}
export interface CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies {
  readonly forward: string;
  readonly whitelistedNames?: string[];
}
export interface CloudfrontDistributionDefaultCacheBehaviorForwardedValues {
  readonly headers?: string[];
  readonly queryString: boolean;
  readonly queryStringCacheKeys?: string[];
  /** cookies block */
  readonly cookies: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies[];
}
export interface CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation {
  readonly eventType: string;
  readonly includeBody?: boolean;
  readonly lambdaArn: string;
}
export interface CloudfrontDistributionDefaultCacheBehavior {
  readonly allowedMethods: string[];
  readonly cachedMethods: string[];
  readonly compress?: boolean;
  readonly defaultTtl?: number;
  readonly fieldLevelEncryptionId?: string;
  readonly maxTtl?: number;
  readonly minTtl?: number;
  readonly smoothStreaming?: boolean;
  readonly targetOriginId: string;
  readonly trustedSigners?: string[];
  readonly viewerProtocolPolicy: string;
  /** forwarded_values block */
  readonly forwardedValues: CloudfrontDistributionDefaultCacheBehaviorForwardedValues[];
  /** lambda_function_association block */
  readonly lambdaFunctionAssociation?: CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation[];
}
export interface CloudfrontDistributionLoggingConfig {
  readonly bucket: string;
  readonly includeCookies?: boolean;
  readonly prefix?: string;
}
export interface CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies {
  readonly forward: string;
  readonly whitelistedNames?: string[];
}
export interface CloudfrontDistributionOrderedCacheBehaviorForwardedValues {
  readonly headers?: string[];
  readonly queryString: boolean;
  readonly queryStringCacheKeys?: string[];
  /** cookies block */
  readonly cookies: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies[];
}
export interface CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation {
  readonly eventType: string;
  readonly includeBody?: boolean;
  readonly lambdaArn: string;
}
export interface CloudfrontDistributionOrderedCacheBehavior {
  readonly allowedMethods: string[];
  readonly cachedMethods: string[];
  readonly compress?: boolean;
  readonly defaultTtl?: number;
  readonly fieldLevelEncryptionId?: string;
  readonly maxTtl?: number;
  readonly minTtl?: number;
  readonly pathPattern: string;
  readonly smoothStreaming?: boolean;
  readonly targetOriginId: string;
  readonly trustedSigners?: string[];
  readonly viewerProtocolPolicy: string;
  /** forwarded_values block */
  readonly forwardedValues: CloudfrontDistributionOrderedCacheBehaviorForwardedValues[];
  /** lambda_function_association block */
  readonly lambdaFunctionAssociation?: CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation[];
}
export interface CloudfrontDistributionOriginCustomHeader {
  readonly name: string;
  readonly value: string;
}
export interface CloudfrontDistributionOriginCustomOriginConfig {
  readonly httpPort: number;
  readonly httpsPort: number;
  readonly originKeepaliveTimeout?: number;
  readonly originProtocolPolicy: string;
  readonly originReadTimeout?: number;
  readonly originSslProtocols: string[];
}
export interface CloudfrontDistributionOriginS3OriginConfig {
  readonly originAccessIdentity: string;
}
export interface CloudfrontDistributionOrigin {
  readonly domainName: string;
  readonly originId: string;
  readonly originPath?: string;
  /** custom_header block */
  readonly customHeader?: CloudfrontDistributionOriginCustomHeader[];
  /** custom_origin_config block */
  readonly customOriginConfig?: CloudfrontDistributionOriginCustomOriginConfig[];
  /** s3_origin_config block */
  readonly s3OriginConfig?: CloudfrontDistributionOriginS3OriginConfig[];
}
export interface CloudfrontDistributionOriginGroupFailoverCriteria {
  readonly statusCodes: number[];
}
export interface CloudfrontDistributionOriginGroupMember {
  readonly originId: string;
}
export interface CloudfrontDistributionOriginGroup {
  readonly originId: string;
  /** failover_criteria block */
  readonly failoverCriteria: CloudfrontDistributionOriginGroupFailoverCriteria[];
  /** member block */
  readonly member: CloudfrontDistributionOriginGroupMember[];
}
export interface CloudfrontDistributionRestrictionsGeoRestriction {
  readonly locations?: string[];
  readonly restrictionType: string;
}
export interface CloudfrontDistributionRestrictions {
  /** geo_restriction block */
  readonly geoRestriction: CloudfrontDistributionRestrictionsGeoRestriction[];
}
export interface CloudfrontDistributionViewerCertificate {
  readonly acmCertificateArn?: string;
  readonly cloudfrontDefaultCertificate?: boolean;
  readonly iamCertificateId?: string;
  readonly minimumProtocolVersion?: string;
  readonly sslSupportMethod?: string;
}

// Resource

export class CloudfrontDistribution extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CloudfrontDistributionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_distribution',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._aliases = config.aliases;
    this._comment = config.comment;
    this._defaultRootObject = config.defaultRootObject;
    this._enabled = config.enabled;
    this._httpVersion = config.httpVersion;
    this._isIpv6Enabled = config.isIpv6Enabled;
    this._priceClass = config.priceClass;
    this._retainOnDelete = config.retainOnDelete;
    this._tags = config.tags;
    this._waitForDeployment = config.waitForDeployment;
    this._webAclId = config.webAclId;
    this._cacheBehavior = config.cacheBehavior;
    this._customErrorResponse = config.customErrorResponse;
    this._defaultCacheBehavior = config.defaultCacheBehavior;
    this._loggingConfig = config.loggingConfig;
    this._orderedCacheBehavior = config.orderedCacheBehavior;
    this._origin = config.origin;
    this._originGroup = config.originGroup;
    this._restrictions = config.restrictions;
    this._viewerCertificate = config.viewerCertificate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_trusted_signers - computed: true, optional: false, required: true
  public activeTrustedSigners(key: string): string {
    return new StringMap(this, 'active_trusted_signers').lookup(key);
  }

  // aliases - computed: false, optional: true, required: false
  private _aliases?: string[];
  public get aliases() {
    return this._aliases;
  }
  public set aliases(value: string[] | undefined) {
    this._aliases = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // caller_reference - computed: true, optional: false, required: true
  public get callerReference() {
    return this.getStringAttribute('caller_reference');
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string;
  public get comment() {
    return this._comment;
  }
  public set comment(value: string | undefined) {
    this._comment = value;
  }

  // default_root_object - computed: false, optional: true, required: false
  private _defaultRootObject?: string;
  public get defaultRootObject() {
    return this._defaultRootObject;
  }
  public set defaultRootObject(value: string | undefined) {
    this._defaultRootObject = value;
  }

  // domain_name - computed: true, optional: false, required: true
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled: boolean;
  public get enabled() {
    return this._enabled;
  }
  public set enabled(value: boolean) {
    this._enabled = value;
  }

  // etag - computed: true, optional: false, required: true
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // hosted_zone_id - computed: true, optional: false, required: true
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }

  // http_version - computed: false, optional: true, required: false
  private _httpVersion?: string;
  public get httpVersion() {
    return this._httpVersion;
  }
  public set httpVersion(value: string | undefined) {
    this._httpVersion = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // in_progress_validation_batches - computed: true, optional: false, required: true
  public get inProgressValidationBatches() {
    return this.getNumberAttribute('in_progress_validation_batches');
  }

  // is_ipv6_enabled - computed: false, optional: true, required: false
  private _isIpv6Enabled?: boolean;
  public get isIpv6Enabled() {
    return this._isIpv6Enabled;
  }
  public set isIpv6Enabled(value: boolean | undefined) {
    this._isIpv6Enabled = value;
  }

  // last_modified_time - computed: true, optional: false, required: true
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // price_class - computed: false, optional: true, required: false
  private _priceClass?: string;
  public get priceClass() {
    return this._priceClass;
  }
  public set priceClass(value: string | undefined) {
    this._priceClass = value;
  }

  // retain_on_delete - computed: false, optional: true, required: false
  private _retainOnDelete?: boolean;
  public get retainOnDelete() {
    return this._retainOnDelete;
  }
  public set retainOnDelete(value: boolean | undefined) {
    this._retainOnDelete = value;
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // wait_for_deployment - computed: false, optional: true, required: false
  private _waitForDeployment?: boolean;
  public get waitForDeployment() {
    return this._waitForDeployment;
  }
  public set waitForDeployment(value: boolean | undefined) {
    this._waitForDeployment = value;
  }

  // web_acl_id - computed: false, optional: true, required: false
  private _webAclId?: string;
  public get webAclId() {
    return this._webAclId;
  }
  public set webAclId(value: string | undefined) {
    this._webAclId = value;
  }

  // cache_behavior - computed: false, optional: true, required: false
  private _cacheBehavior?: CloudfrontDistributionCacheBehavior[];
  public get cacheBehavior() {
    return this._cacheBehavior;
  }
  public set cacheBehavior(value: CloudfrontDistributionCacheBehavior[] | undefined) {
    this._cacheBehavior = value;
  }

  // custom_error_response - computed: false, optional: true, required: false
  private _customErrorResponse?: CloudfrontDistributionCustomErrorResponse[];
  public get customErrorResponse() {
    return this._customErrorResponse;
  }
  public set customErrorResponse(value: CloudfrontDistributionCustomErrorResponse[] | undefined) {
    this._customErrorResponse = value;
  }

  // default_cache_behavior - computed: false, optional: false, required: true
  private _defaultCacheBehavior: CloudfrontDistributionDefaultCacheBehavior[];
  public get defaultCacheBehavior() {
    return this._defaultCacheBehavior;
  }
  public set defaultCacheBehavior(value: CloudfrontDistributionDefaultCacheBehavior[]) {
    this._defaultCacheBehavior = value;
  }

  // logging_config - computed: false, optional: true, required: false
  private _loggingConfig?: CloudfrontDistributionLoggingConfig[];
  public get loggingConfig() {
    return this._loggingConfig;
  }
  public set loggingConfig(value: CloudfrontDistributionLoggingConfig[] | undefined) {
    this._loggingConfig = value;
  }

  // ordered_cache_behavior - computed: false, optional: true, required: false
  private _orderedCacheBehavior?: CloudfrontDistributionOrderedCacheBehavior[];
  public get orderedCacheBehavior() {
    return this._orderedCacheBehavior;
  }
  public set orderedCacheBehavior(value: CloudfrontDistributionOrderedCacheBehavior[] | undefined) {
    this._orderedCacheBehavior = value;
  }

  // origin - computed: false, optional: false, required: true
  private _origin: CloudfrontDistributionOrigin[];
  public get origin() {
    return this._origin;
  }
  public set origin(value: CloudfrontDistributionOrigin[]) {
    this._origin = value;
  }

  // origin_group - computed: false, optional: true, required: false
  private _originGroup?: CloudfrontDistributionOriginGroup[];
  public get originGroup() {
    return this._originGroup;
  }
  public set originGroup(value: CloudfrontDistributionOriginGroup[] | undefined) {
    this._originGroup = value;
  }

  // restrictions - computed: false, optional: false, required: true
  private _restrictions: CloudfrontDistributionRestrictions[];
  public get restrictions() {
    return this._restrictions;
  }
  public set restrictions(value: CloudfrontDistributionRestrictions[]) {
    this._restrictions = value;
  }

  // viewer_certificate - computed: false, optional: false, required: true
  private _viewerCertificate: CloudfrontDistributionViewerCertificate[];
  public get viewerCertificate() {
    return this._viewerCertificate;
  }
  public set viewerCertificate(value: CloudfrontDistributionViewerCertificate[]) {
    this._viewerCertificate = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      aliases: this._aliases,
      comment: this._comment,
      default_root_object: this._defaultRootObject,
      enabled: this._enabled,
      http_version: this._httpVersion,
      is_ipv6_enabled: this._isIpv6Enabled,
      price_class: this._priceClass,
      retain_on_delete: this._retainOnDelete,
      tags: this._tags,
      wait_for_deployment: this._waitForDeployment,
      web_acl_id: this._webAclId,
      cache_behavior: this._cacheBehavior,
      custom_error_response: this._customErrorResponse,
      default_cache_behavior: this._defaultCacheBehavior,
      logging_config: this._loggingConfig,
      ordered_cache_behavior: this._orderedCacheBehavior,
      origin: this._origin,
      origin_group: this._originGroup,
      restrictions: this._restrictions,
      viewer_certificate: this._viewerCertificate,
    };
  }
}
