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

  // active_trusted_signers - computed: true, optional: false, required: false
  public activeTrustedSigners(key: string): string {
    return new StringMap(this, 'active_trusted_signers').lookup(key);
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
