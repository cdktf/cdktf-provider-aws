// https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudfrontDistributionConfig extends cdktf.TerraformMetaArguments {
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

function cloudfrontDistributionCacheBehaviorForwardedValuesCookiesToTerraform(struct?: CloudfrontDistributionCacheBehaviorForwardedValuesCookies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    forward: cdktf.stringToTerraform(struct!.forward),
    whitelisted_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.whitelistedNames),
  }
}

export interface CloudfrontDistributionCacheBehaviorForwardedValues {
  readonly headers?: string[];
  readonly queryString: boolean;
  readonly queryStringCacheKeys?: string[];
  /** cookies block */
  readonly cookies: CloudfrontDistributionCacheBehaviorForwardedValuesCookies[];
}

function cloudfrontDistributionCacheBehaviorForwardedValuesToTerraform(struct?: CloudfrontDistributionCacheBehaviorForwardedValues): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.headers),
    query_string: cdktf.booleanToTerraform(struct!.queryString),
    query_string_cache_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queryStringCacheKeys),
    cookies: cdktf.listMapper(cloudfrontDistributionCacheBehaviorForwardedValuesCookiesToTerraform)(struct!.cookies),
  }
}

export interface CloudfrontDistributionCacheBehaviorLambdaFunctionAssociation {
  readonly eventType: string;
  readonly includeBody?: boolean;
  readonly lambdaArn: string;
}

function cloudfrontDistributionCacheBehaviorLambdaFunctionAssociationToTerraform(struct?: CloudfrontDistributionCacheBehaviorLambdaFunctionAssociation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    event_type: cdktf.stringToTerraform(struct!.eventType),
    include_body: cdktf.booleanToTerraform(struct!.includeBody),
    lambda_arn: cdktf.stringToTerraform(struct!.lambdaArn),
  }
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

function cloudfrontDistributionCacheBehaviorToTerraform(struct?: CloudfrontDistributionCacheBehavior): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedMethods),
    cached_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cachedMethods),
    compress: cdktf.booleanToTerraform(struct!.compress),
    default_ttl: cdktf.numberToTerraform(struct!.defaultTtl),
    field_level_encryption_id: cdktf.stringToTerraform(struct!.fieldLevelEncryptionId),
    max_ttl: cdktf.numberToTerraform(struct!.maxTtl),
    min_ttl: cdktf.numberToTerraform(struct!.minTtl),
    path_pattern: cdktf.stringToTerraform(struct!.pathPattern),
    smooth_streaming: cdktf.booleanToTerraform(struct!.smoothStreaming),
    target_origin_id: cdktf.stringToTerraform(struct!.targetOriginId),
    trusted_signers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.trustedSigners),
    viewer_protocol_policy: cdktf.stringToTerraform(struct!.viewerProtocolPolicy),
    forwarded_values: cdktf.listMapper(cloudfrontDistributionCacheBehaviorForwardedValuesToTerraform)(struct!.forwardedValues),
    lambda_function_association: cdktf.listMapper(cloudfrontDistributionCacheBehaviorLambdaFunctionAssociationToTerraform)(struct!.lambdaFunctionAssociation),
  }
}

export interface CloudfrontDistributionCustomErrorResponse {
  readonly errorCachingMinTtl?: number;
  readonly errorCode: number;
  readonly responseCode?: number;
  readonly responsePagePath?: string;
}

function cloudfrontDistributionCustomErrorResponseToTerraform(struct?: CloudfrontDistributionCustomErrorResponse): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    error_caching_min_ttl: cdktf.numberToTerraform(struct!.errorCachingMinTtl),
    error_code: cdktf.numberToTerraform(struct!.errorCode),
    response_code: cdktf.numberToTerraform(struct!.responseCode),
    response_page_path: cdktf.stringToTerraform(struct!.responsePagePath),
  }
}

export interface CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies {
  readonly forward: string;
  readonly whitelistedNames?: string[];
}

function cloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesToTerraform(struct?: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    forward: cdktf.stringToTerraform(struct!.forward),
    whitelisted_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.whitelistedNames),
  }
}

export interface CloudfrontDistributionDefaultCacheBehaviorForwardedValues {
  readonly headers?: string[];
  readonly queryString: boolean;
  readonly queryStringCacheKeys?: string[];
  /** cookies block */
  readonly cookies: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies[];
}

function cloudfrontDistributionDefaultCacheBehaviorForwardedValuesToTerraform(struct?: CloudfrontDistributionDefaultCacheBehaviorForwardedValues): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.headers),
    query_string: cdktf.booleanToTerraform(struct!.queryString),
    query_string_cache_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queryStringCacheKeys),
    cookies: cdktf.listMapper(cloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesToTerraform)(struct!.cookies),
  }
}

export interface CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation {
  readonly eventType: string;
  readonly includeBody?: boolean;
  readonly lambdaArn: string;
}

function cloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationToTerraform(struct?: CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    event_type: cdktf.stringToTerraform(struct!.eventType),
    include_body: cdktf.booleanToTerraform(struct!.includeBody),
    lambda_arn: cdktf.stringToTerraform(struct!.lambdaArn),
  }
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

function cloudfrontDistributionDefaultCacheBehaviorToTerraform(struct?: CloudfrontDistributionDefaultCacheBehavior): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedMethods),
    cached_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cachedMethods),
    compress: cdktf.booleanToTerraform(struct!.compress),
    default_ttl: cdktf.numberToTerraform(struct!.defaultTtl),
    field_level_encryption_id: cdktf.stringToTerraform(struct!.fieldLevelEncryptionId),
    max_ttl: cdktf.numberToTerraform(struct!.maxTtl),
    min_ttl: cdktf.numberToTerraform(struct!.minTtl),
    smooth_streaming: cdktf.booleanToTerraform(struct!.smoothStreaming),
    target_origin_id: cdktf.stringToTerraform(struct!.targetOriginId),
    trusted_signers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.trustedSigners),
    viewer_protocol_policy: cdktf.stringToTerraform(struct!.viewerProtocolPolicy),
    forwarded_values: cdktf.listMapper(cloudfrontDistributionDefaultCacheBehaviorForwardedValuesToTerraform)(struct!.forwardedValues),
    lambda_function_association: cdktf.listMapper(cloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationToTerraform)(struct!.lambdaFunctionAssociation),
  }
}

export interface CloudfrontDistributionLoggingConfig {
  readonly bucket: string;
  readonly includeCookies?: boolean;
  readonly prefix?: string;
}

function cloudfrontDistributionLoggingConfigToTerraform(struct?: CloudfrontDistributionLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    include_cookies: cdktf.booleanToTerraform(struct!.includeCookies),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}

export interface CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies {
  readonly forward: string;
  readonly whitelistedNames?: string[];
}

function cloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesToTerraform(struct?: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    forward: cdktf.stringToTerraform(struct!.forward),
    whitelisted_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.whitelistedNames),
  }
}

export interface CloudfrontDistributionOrderedCacheBehaviorForwardedValues {
  readonly headers?: string[];
  readonly queryString: boolean;
  readonly queryStringCacheKeys?: string[];
  /** cookies block */
  readonly cookies: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies[];
}

function cloudfrontDistributionOrderedCacheBehaviorForwardedValuesToTerraform(struct?: CloudfrontDistributionOrderedCacheBehaviorForwardedValues): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.headers),
    query_string: cdktf.booleanToTerraform(struct!.queryString),
    query_string_cache_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queryStringCacheKeys),
    cookies: cdktf.listMapper(cloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesToTerraform)(struct!.cookies),
  }
}

export interface CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation {
  readonly eventType: string;
  readonly includeBody?: boolean;
  readonly lambdaArn: string;
}

function cloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationToTerraform(struct?: CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    event_type: cdktf.stringToTerraform(struct!.eventType),
    include_body: cdktf.booleanToTerraform(struct!.includeBody),
    lambda_arn: cdktf.stringToTerraform(struct!.lambdaArn),
  }
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

function cloudfrontDistributionOrderedCacheBehaviorToTerraform(struct?: CloudfrontDistributionOrderedCacheBehavior): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedMethods),
    cached_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cachedMethods),
    compress: cdktf.booleanToTerraform(struct!.compress),
    default_ttl: cdktf.numberToTerraform(struct!.defaultTtl),
    field_level_encryption_id: cdktf.stringToTerraform(struct!.fieldLevelEncryptionId),
    max_ttl: cdktf.numberToTerraform(struct!.maxTtl),
    min_ttl: cdktf.numberToTerraform(struct!.minTtl),
    path_pattern: cdktf.stringToTerraform(struct!.pathPattern),
    smooth_streaming: cdktf.booleanToTerraform(struct!.smoothStreaming),
    target_origin_id: cdktf.stringToTerraform(struct!.targetOriginId),
    trusted_signers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.trustedSigners),
    viewer_protocol_policy: cdktf.stringToTerraform(struct!.viewerProtocolPolicy),
    forwarded_values: cdktf.listMapper(cloudfrontDistributionOrderedCacheBehaviorForwardedValuesToTerraform)(struct!.forwardedValues),
    lambda_function_association: cdktf.listMapper(cloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationToTerraform)(struct!.lambdaFunctionAssociation),
  }
}

export interface CloudfrontDistributionOriginCustomHeader {
  readonly name: string;
  readonly value: string;
}

function cloudfrontDistributionOriginCustomHeaderToTerraform(struct?: CloudfrontDistributionOriginCustomHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface CloudfrontDistributionOriginCustomOriginConfig {
  readonly httpPort: number;
  readonly httpsPort: number;
  readonly originKeepaliveTimeout?: number;
  readonly originProtocolPolicy: string;
  readonly originReadTimeout?: number;
  readonly originSslProtocols: string[];
}

function cloudfrontDistributionOriginCustomOriginConfigToTerraform(struct?: CloudfrontDistributionOriginCustomOriginConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    http_port: cdktf.numberToTerraform(struct!.httpPort),
    https_port: cdktf.numberToTerraform(struct!.httpsPort),
    origin_keepalive_timeout: cdktf.numberToTerraform(struct!.originKeepaliveTimeout),
    origin_protocol_policy: cdktf.stringToTerraform(struct!.originProtocolPolicy),
    origin_read_timeout: cdktf.numberToTerraform(struct!.originReadTimeout),
    origin_ssl_protocols: cdktf.listMapper(cdktf.stringToTerraform)(struct!.originSslProtocols),
  }
}

export interface CloudfrontDistributionOriginS3OriginConfig {
  readonly originAccessIdentity: string;
}

function cloudfrontDistributionOriginS3OriginConfigToTerraform(struct?: CloudfrontDistributionOriginS3OriginConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    origin_access_identity: cdktf.stringToTerraform(struct!.originAccessIdentity),
  }
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

function cloudfrontDistributionOriginToTerraform(struct?: CloudfrontDistributionOrigin): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    origin_id: cdktf.stringToTerraform(struct!.originId),
    origin_path: cdktf.stringToTerraform(struct!.originPath),
    custom_header: cdktf.listMapper(cloudfrontDistributionOriginCustomHeaderToTerraform)(struct!.customHeader),
    custom_origin_config: cdktf.listMapper(cloudfrontDistributionOriginCustomOriginConfigToTerraform)(struct!.customOriginConfig),
    s3_origin_config: cdktf.listMapper(cloudfrontDistributionOriginS3OriginConfigToTerraform)(struct!.s3OriginConfig),
  }
}

export interface CloudfrontDistributionOriginGroupFailoverCriteria {
  readonly statusCodes: number[];
}

function cloudfrontDistributionOriginGroupFailoverCriteriaToTerraform(struct?: CloudfrontDistributionOriginGroupFailoverCriteria): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    status_codes: cdktf.listMapper(cdktf.numberToTerraform)(struct!.statusCodes),
  }
}

export interface CloudfrontDistributionOriginGroupMember {
  readonly originId: string;
}

function cloudfrontDistributionOriginGroupMemberToTerraform(struct?: CloudfrontDistributionOriginGroupMember): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    origin_id: cdktf.stringToTerraform(struct!.originId),
  }
}

export interface CloudfrontDistributionOriginGroup {
  readonly originId: string;
  /** failover_criteria block */
  readonly failoverCriteria: CloudfrontDistributionOriginGroupFailoverCriteria[];
  /** member block */
  readonly member: CloudfrontDistributionOriginGroupMember[];
}

function cloudfrontDistributionOriginGroupToTerraform(struct?: CloudfrontDistributionOriginGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    origin_id: cdktf.stringToTerraform(struct!.originId),
    failover_criteria: cdktf.listMapper(cloudfrontDistributionOriginGroupFailoverCriteriaToTerraform)(struct!.failoverCriteria),
    member: cdktf.listMapper(cloudfrontDistributionOriginGroupMemberToTerraform)(struct!.member),
  }
}

export interface CloudfrontDistributionRestrictionsGeoRestriction {
  readonly locations?: string[];
  readonly restrictionType: string;
}

function cloudfrontDistributionRestrictionsGeoRestrictionToTerraform(struct?: CloudfrontDistributionRestrictionsGeoRestriction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    locations: cdktf.listMapper(cdktf.stringToTerraform)(struct!.locations),
    restriction_type: cdktf.stringToTerraform(struct!.restrictionType),
  }
}

export interface CloudfrontDistributionRestrictions {
  /** geo_restriction block */
  readonly geoRestriction: CloudfrontDistributionRestrictionsGeoRestriction[];
}

function cloudfrontDistributionRestrictionsToTerraform(struct?: CloudfrontDistributionRestrictions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    geo_restriction: cdktf.listMapper(cloudfrontDistributionRestrictionsGeoRestrictionToTerraform)(struct!.geoRestriction),
  }
}

export interface CloudfrontDistributionViewerCertificate {
  readonly acmCertificateArn?: string;
  readonly cloudfrontDefaultCertificate?: boolean;
  readonly iamCertificateId?: string;
  readonly minimumProtocolVersion?: string;
  readonly sslSupportMethod?: string;
}

function cloudfrontDistributionViewerCertificateToTerraform(struct?: CloudfrontDistributionViewerCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    acm_certificate_arn: cdktf.stringToTerraform(struct!.acmCertificateArn),
    cloudfront_default_certificate: cdktf.booleanToTerraform(struct!.cloudfrontDefaultCertificate),
    iam_certificate_id: cdktf.stringToTerraform(struct!.iamCertificateId),
    minimum_protocol_version: cdktf.stringToTerraform(struct!.minimumProtocolVersion),
    ssl_support_method: cdktf.stringToTerraform(struct!.sslSupportMethod),
  }
}


// Resource

export class CloudfrontDistribution extends cdktf.TerraformResource {

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

  // active_trusted_signers - computed: true, optional: false, required: false
  public activeTrustedSigners(key: string): string {
    return new cdktf.StringMap(this, 'active_trusted_signers').lookup(key);
  }

  // aliases - computed: false, optional: true, required: false
  private _aliases?: string[];
  public get aliases() {
    return this.getListAttribute('aliases');
  }
  public set aliases(value: string[] ) {
    this._aliases = value;
  }
  public resetAliases() {
    this._aliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasesInput() {
    return this._aliases
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // caller_reference - computed: true, optional: false, required: false
  public get callerReference() {
    return this.getStringAttribute('caller_reference');
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string;
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string ) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment
  }

  // default_root_object - computed: false, optional: true, required: false
  private _defaultRootObject?: string;
  public get defaultRootObject() {
    return this.getStringAttribute('default_root_object');
  }
  public set defaultRootObject(value: string ) {
    this._defaultRootObject = value;
  }
  public resetDefaultRootObject() {
    this._defaultRootObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRootObjectInput() {
    return this._defaultRootObject
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled: boolean;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // hosted_zone_id - computed: true, optional: false, required: false
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }

  // http_version - computed: false, optional: true, required: false
  private _httpVersion?: string;
  public get httpVersion() {
    return this.getStringAttribute('http_version');
  }
  public set httpVersion(value: string ) {
    this._httpVersion = value;
  }
  public resetHttpVersion() {
    this._httpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpVersionInput() {
    return this._httpVersion
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // in_progress_validation_batches - computed: true, optional: false, required: false
  public get inProgressValidationBatches() {
    return this.getNumberAttribute('in_progress_validation_batches');
  }

  // is_ipv6_enabled - computed: false, optional: true, required: false
  private _isIpv6Enabled?: boolean;
  public get isIpv6Enabled() {
    return this.getBooleanAttribute('is_ipv6_enabled');
  }
  public set isIpv6Enabled(value: boolean ) {
    this._isIpv6Enabled = value;
  }
  public resetIsIpv6Enabled() {
    this._isIpv6Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIpv6EnabledInput() {
    return this._isIpv6Enabled
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // price_class - computed: false, optional: true, required: false
  private _priceClass?: string;
  public get priceClass() {
    return this.getStringAttribute('price_class');
  }
  public set priceClass(value: string ) {
    this._priceClass = value;
  }
  public resetPriceClass() {
    this._priceClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priceClassInput() {
    return this._priceClass
  }

  // retain_on_delete - computed: false, optional: true, required: false
  private _retainOnDelete?: boolean;
  public get retainOnDelete() {
    return this.getBooleanAttribute('retain_on_delete');
  }
  public set retainOnDelete(value: boolean ) {
    this._retainOnDelete = value;
  }
  public resetRetainOnDelete() {
    this._retainOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainOnDeleteInput() {
    return this._retainOnDelete
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // wait_for_deployment - computed: false, optional: true, required: false
  private _waitForDeployment?: boolean;
  public get waitForDeployment() {
    return this.getBooleanAttribute('wait_for_deployment');
  }
  public set waitForDeployment(value: boolean ) {
    this._waitForDeployment = value;
  }
  public resetWaitForDeployment() {
    this._waitForDeployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForDeploymentInput() {
    return this._waitForDeployment
  }

  // web_acl_id - computed: false, optional: true, required: false
  private _webAclId?: string;
  public get webAclId() {
    return this.getStringAttribute('web_acl_id');
  }
  public set webAclId(value: string ) {
    this._webAclId = value;
  }
  public resetWebAclId() {
    this._webAclId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAclIdInput() {
    return this._webAclId
  }

  // cache_behavior - computed: false, optional: true, required: false
  private _cacheBehavior?: CloudfrontDistributionCacheBehavior[];
  public get cacheBehavior() {
    return this.interpolationForAttribute('cache_behavior') as any;
  }
  public set cacheBehavior(value: CloudfrontDistributionCacheBehavior[] ) {
    this._cacheBehavior = value;
  }
  public resetCacheBehavior() {
    this._cacheBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheBehaviorInput() {
    return this._cacheBehavior
  }

  // custom_error_response - computed: false, optional: true, required: false
  private _customErrorResponse?: CloudfrontDistributionCustomErrorResponse[];
  public get customErrorResponse() {
    return this.interpolationForAttribute('custom_error_response') as any;
  }
  public set customErrorResponse(value: CloudfrontDistributionCustomErrorResponse[] ) {
    this._customErrorResponse = value;
  }
  public resetCustomErrorResponse() {
    this._customErrorResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customErrorResponseInput() {
    return this._customErrorResponse
  }

  // default_cache_behavior - computed: false, optional: false, required: true
  private _defaultCacheBehavior: CloudfrontDistributionDefaultCacheBehavior[];
  public get defaultCacheBehavior() {
    return this.interpolationForAttribute('default_cache_behavior') as any;
  }
  public set defaultCacheBehavior(value: CloudfrontDistributionDefaultCacheBehavior[]) {
    this._defaultCacheBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCacheBehaviorInput() {
    return this._defaultCacheBehavior
  }

  // logging_config - computed: false, optional: true, required: false
  private _loggingConfig?: CloudfrontDistributionLoggingConfig[];
  public get loggingConfig() {
    return this.interpolationForAttribute('logging_config') as any;
  }
  public set loggingConfig(value: CloudfrontDistributionLoggingConfig[] ) {
    this._loggingConfig = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig
  }

  // ordered_cache_behavior - computed: false, optional: true, required: false
  private _orderedCacheBehavior?: CloudfrontDistributionOrderedCacheBehavior[];
  public get orderedCacheBehavior() {
    return this.interpolationForAttribute('ordered_cache_behavior') as any;
  }
  public set orderedCacheBehavior(value: CloudfrontDistributionOrderedCacheBehavior[] ) {
    this._orderedCacheBehavior = value;
  }
  public resetOrderedCacheBehavior() {
    this._orderedCacheBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderedCacheBehaviorInput() {
    return this._orderedCacheBehavior
  }

  // origin - computed: false, optional: false, required: true
  private _origin: CloudfrontDistributionOrigin[];
  public get origin() {
    return this.interpolationForAttribute('origin') as any;
  }
  public set origin(value: CloudfrontDistributionOrigin[]) {
    this._origin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin
  }

  // origin_group - computed: false, optional: true, required: false
  private _originGroup?: CloudfrontDistributionOriginGroup[];
  public get originGroup() {
    return this.interpolationForAttribute('origin_group') as any;
  }
  public set originGroup(value: CloudfrontDistributionOriginGroup[] ) {
    this._originGroup = value;
  }
  public resetOriginGroup() {
    this._originGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originGroupInput() {
    return this._originGroup
  }

  // restrictions - computed: false, optional: false, required: true
  private _restrictions: CloudfrontDistributionRestrictions[];
  public get restrictions() {
    return this.interpolationForAttribute('restrictions') as any;
  }
  public set restrictions(value: CloudfrontDistributionRestrictions[]) {
    this._restrictions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionsInput() {
    return this._restrictions
  }

  // viewer_certificate - computed: false, optional: false, required: true
  private _viewerCertificate: CloudfrontDistributionViewerCertificate[];
  public get viewerCertificate() {
    return this.interpolationForAttribute('viewer_certificate') as any;
  }
  public set viewerCertificate(value: CloudfrontDistributionViewerCertificate[]) {
    this._viewerCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get viewerCertificateInput() {
    return this._viewerCertificate
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aliases: cdktf.listMapper(cdktf.stringToTerraform)(this._aliases),
      comment: cdktf.stringToTerraform(this._comment),
      default_root_object: cdktf.stringToTerraform(this._defaultRootObject),
      enabled: cdktf.booleanToTerraform(this._enabled),
      http_version: cdktf.stringToTerraform(this._httpVersion),
      is_ipv6_enabled: cdktf.booleanToTerraform(this._isIpv6Enabled),
      price_class: cdktf.stringToTerraform(this._priceClass),
      retain_on_delete: cdktf.booleanToTerraform(this._retainOnDelete),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      wait_for_deployment: cdktf.booleanToTerraform(this._waitForDeployment),
      web_acl_id: cdktf.stringToTerraform(this._webAclId),
      cache_behavior: cdktf.listMapper(cloudfrontDistributionCacheBehaviorToTerraform)(this._cacheBehavior),
      custom_error_response: cdktf.listMapper(cloudfrontDistributionCustomErrorResponseToTerraform)(this._customErrorResponse),
      default_cache_behavior: cdktf.listMapper(cloudfrontDistributionDefaultCacheBehaviorToTerraform)(this._defaultCacheBehavior),
      logging_config: cdktf.listMapper(cloudfrontDistributionLoggingConfigToTerraform)(this._loggingConfig),
      ordered_cache_behavior: cdktf.listMapper(cloudfrontDistributionOrderedCacheBehaviorToTerraform)(this._orderedCacheBehavior),
      origin: cdktf.listMapper(cloudfrontDistributionOriginToTerraform)(this._origin),
      origin_group: cdktf.listMapper(cloudfrontDistributionOriginGroupToTerraform)(this._originGroup),
      restrictions: cdktf.listMapper(cloudfrontDistributionRestrictionsToTerraform)(this._restrictions),
      viewer_certificate: cdktf.listMapper(cloudfrontDistributionViewerCertificateToTerraform)(this._viewerCertificate),
    };
  }
}
