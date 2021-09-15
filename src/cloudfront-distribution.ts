// https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudfrontDistributionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#aliases CloudfrontDistribution#aliases}
  */
  readonly aliases?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#comment CloudfrontDistribution#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#default_root_object CloudfrontDistribution#default_root_object}
  */
  readonly defaultRootObject?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#enabled CloudfrontDistribution#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#http_version CloudfrontDistribution#http_version}
  */
  readonly httpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#is_ipv6_enabled CloudfrontDistribution#is_ipv6_enabled}
  */
  readonly isIpv6Enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#price_class CloudfrontDistribution#price_class}
  */
  readonly priceClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#retain_on_delete CloudfrontDistribution#retain_on_delete}
  */
  readonly retainOnDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#tags CloudfrontDistribution#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#tags_all CloudfrontDistribution#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#wait_for_deployment CloudfrontDistribution#wait_for_deployment}
  */
  readonly waitForDeployment?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#web_acl_id CloudfrontDistribution#web_acl_id}
  */
  readonly webAclId?: string;
  /**
  * custom_error_response block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#custom_error_response CloudfrontDistribution#custom_error_response}
  */
  readonly customErrorResponse?: CloudfrontDistributionCustomErrorResponse[];
  /**
  * default_cache_behavior block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#default_cache_behavior CloudfrontDistribution#default_cache_behavior}
  */
  readonly defaultCacheBehavior: CloudfrontDistributionDefaultCacheBehavior[];
  /**
  * logging_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#logging_config CloudfrontDistribution#logging_config}
  */
  readonly loggingConfig?: CloudfrontDistributionLoggingConfig[];
  /**
  * ordered_cache_behavior block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#ordered_cache_behavior CloudfrontDistribution#ordered_cache_behavior}
  */
  readonly orderedCacheBehavior?: CloudfrontDistributionOrderedCacheBehavior[];
  /**
  * origin block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin CloudfrontDistribution#origin}
  */
  readonly origin: CloudfrontDistributionOrigin[];
  /**
  * origin_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_group CloudfrontDistribution#origin_group}
  */
  readonly originGroup?: CloudfrontDistributionOriginGroup[];
  /**
  * restrictions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#restrictions CloudfrontDistribution#restrictions}
  */
  readonly restrictions: CloudfrontDistributionRestrictions[];
  /**
  * viewer_certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#viewer_certificate CloudfrontDistribution#viewer_certificate}
  */
  readonly viewerCertificate: CloudfrontDistributionViewerCertificate[];
}
export class CloudfrontDistributionTrustedKeyGroupsItems extends cdktf.ComplexComputedList {

  // key_group_id - computed: true, optional: false, required: false
  public get keyGroupId() {
    return this.getStringAttribute('key_group_id');
  }

  // key_pair_ids - computed: true, optional: false, required: false
  public get keyPairIds() {
    return this.getListAttribute('key_pair_ids');
  }
}
export class CloudfrontDistributionTrustedKeyGroups extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // items - computed: true, optional: false, required: false
  public get items() {
    return this.interpolationForAttribute('items') as any;
  }
}
export class CloudfrontDistributionTrustedSignersItems extends cdktf.ComplexComputedList {

  // aws_account_number - computed: true, optional: false, required: false
  public get awsAccountNumber() {
    return this.getStringAttribute('aws_account_number');
  }

  // key_pair_ids - computed: true, optional: false, required: false
  public get keyPairIds() {
    return this.getListAttribute('key_pair_ids');
  }
}
export class CloudfrontDistributionTrustedSigners extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // items - computed: true, optional: false, required: false
  public get items() {
    return this.interpolationForAttribute('items') as any;
  }
}
export interface CloudfrontDistributionCustomErrorResponse {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#error_caching_min_ttl CloudfrontDistribution#error_caching_min_ttl}
  */
  readonly errorCachingMinTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#error_code CloudfrontDistribution#error_code}
  */
  readonly errorCode: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#response_code CloudfrontDistribution#response_code}
  */
  readonly responseCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#response_page_path CloudfrontDistribution#response_page_path}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#forward CloudfrontDistribution#forward}
  */
  readonly forward: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#whitelisted_names CloudfrontDistribution#whitelisted_names}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#headers CloudfrontDistribution#headers}
  */
  readonly headers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#query_string CloudfrontDistribution#query_string}
  */
  readonly queryString: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#query_string_cache_keys CloudfrontDistribution#query_string_cache_keys}
  */
  readonly queryStringCacheKeys?: string[];
  /**
  * cookies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#cookies CloudfrontDistribution#cookies}
  */
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

export interface CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#event_type CloudfrontDistribution#event_type}
  */
  readonly eventType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#function_arn CloudfrontDistribution#function_arn}
  */
  readonly functionArn: string;
}

function cloudfrontDistributionDefaultCacheBehaviorFunctionAssociationToTerraform(struct?: CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    event_type: cdktf.stringToTerraform(struct!.eventType),
    function_arn: cdktf.stringToTerraform(struct!.functionArn),
  }
}

export interface CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#event_type CloudfrontDistribution#event_type}
  */
  readonly eventType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#include_body CloudfrontDistribution#include_body}
  */
  readonly includeBody?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#lambda_arn CloudfrontDistribution#lambda_arn}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#allowed_methods CloudfrontDistribution#allowed_methods}
  */
  readonly allowedMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#cache_policy_id CloudfrontDistribution#cache_policy_id}
  */
  readonly cachePolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#cached_methods CloudfrontDistribution#cached_methods}
  */
  readonly cachedMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#compress CloudfrontDistribution#compress}
  */
  readonly compress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#default_ttl CloudfrontDistribution#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#field_level_encryption_id CloudfrontDistribution#field_level_encryption_id}
  */
  readonly fieldLevelEncryptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#max_ttl CloudfrontDistribution#max_ttl}
  */
  readonly maxTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#min_ttl CloudfrontDistribution#min_ttl}
  */
  readonly minTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_request_policy_id CloudfrontDistribution#origin_request_policy_id}
  */
  readonly originRequestPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#realtime_log_config_arn CloudfrontDistribution#realtime_log_config_arn}
  */
  readonly realtimeLogConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#smooth_streaming CloudfrontDistribution#smooth_streaming}
  */
  readonly smoothStreaming?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#target_origin_id CloudfrontDistribution#target_origin_id}
  */
  readonly targetOriginId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#trusted_key_groups CloudfrontDistribution#trusted_key_groups}
  */
  readonly trustedKeyGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#trusted_signers CloudfrontDistribution#trusted_signers}
  */
  readonly trustedSigners?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#viewer_protocol_policy CloudfrontDistribution#viewer_protocol_policy}
  */
  readonly viewerProtocolPolicy: string;
  /**
  * forwarded_values block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#forwarded_values CloudfrontDistribution#forwarded_values}
  */
  readonly forwardedValues?: CloudfrontDistributionDefaultCacheBehaviorForwardedValues[];
  /**
  * function_association block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#function_association CloudfrontDistribution#function_association}
  */
  readonly functionAssociation?: CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation[];
  /**
  * lambda_function_association block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#lambda_function_association CloudfrontDistribution#lambda_function_association}
  */
  readonly lambdaFunctionAssociation?: CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation[];
}

function cloudfrontDistributionDefaultCacheBehaviorToTerraform(struct?: CloudfrontDistributionDefaultCacheBehavior): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedMethods),
    cache_policy_id: cdktf.stringToTerraform(struct!.cachePolicyId),
    cached_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cachedMethods),
    compress: cdktf.booleanToTerraform(struct!.compress),
    default_ttl: cdktf.numberToTerraform(struct!.defaultTtl),
    field_level_encryption_id: cdktf.stringToTerraform(struct!.fieldLevelEncryptionId),
    max_ttl: cdktf.numberToTerraform(struct!.maxTtl),
    min_ttl: cdktf.numberToTerraform(struct!.minTtl),
    origin_request_policy_id: cdktf.stringToTerraform(struct!.originRequestPolicyId),
    realtime_log_config_arn: cdktf.stringToTerraform(struct!.realtimeLogConfigArn),
    smooth_streaming: cdktf.booleanToTerraform(struct!.smoothStreaming),
    target_origin_id: cdktf.stringToTerraform(struct!.targetOriginId),
    trusted_key_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.trustedKeyGroups),
    trusted_signers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.trustedSigners),
    viewer_protocol_policy: cdktf.stringToTerraform(struct!.viewerProtocolPolicy),
    forwarded_values: cdktf.listMapper(cloudfrontDistributionDefaultCacheBehaviorForwardedValuesToTerraform)(struct!.forwardedValues),
    function_association: cdktf.listMapper(cloudfrontDistributionDefaultCacheBehaviorFunctionAssociationToTerraform)(struct!.functionAssociation),
    lambda_function_association: cdktf.listMapper(cloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationToTerraform)(struct!.lambdaFunctionAssociation),
  }
}

export interface CloudfrontDistributionLoggingConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#bucket CloudfrontDistribution#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#include_cookies CloudfrontDistribution#include_cookies}
  */
  readonly includeCookies?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#prefix CloudfrontDistribution#prefix}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#forward CloudfrontDistribution#forward}
  */
  readonly forward: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#whitelisted_names CloudfrontDistribution#whitelisted_names}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#headers CloudfrontDistribution#headers}
  */
  readonly headers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#query_string CloudfrontDistribution#query_string}
  */
  readonly queryString: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#query_string_cache_keys CloudfrontDistribution#query_string_cache_keys}
  */
  readonly queryStringCacheKeys?: string[];
  /**
  * cookies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#cookies CloudfrontDistribution#cookies}
  */
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

export interface CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#event_type CloudfrontDistribution#event_type}
  */
  readonly eventType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#function_arn CloudfrontDistribution#function_arn}
  */
  readonly functionArn: string;
}

function cloudfrontDistributionOrderedCacheBehaviorFunctionAssociationToTerraform(struct?: CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    event_type: cdktf.stringToTerraform(struct!.eventType),
    function_arn: cdktf.stringToTerraform(struct!.functionArn),
  }
}

export interface CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#event_type CloudfrontDistribution#event_type}
  */
  readonly eventType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#include_body CloudfrontDistribution#include_body}
  */
  readonly includeBody?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#lambda_arn CloudfrontDistribution#lambda_arn}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#allowed_methods CloudfrontDistribution#allowed_methods}
  */
  readonly allowedMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#cache_policy_id CloudfrontDistribution#cache_policy_id}
  */
  readonly cachePolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#cached_methods CloudfrontDistribution#cached_methods}
  */
  readonly cachedMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#compress CloudfrontDistribution#compress}
  */
  readonly compress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#default_ttl CloudfrontDistribution#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#field_level_encryption_id CloudfrontDistribution#field_level_encryption_id}
  */
  readonly fieldLevelEncryptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#max_ttl CloudfrontDistribution#max_ttl}
  */
  readonly maxTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#min_ttl CloudfrontDistribution#min_ttl}
  */
  readonly minTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_request_policy_id CloudfrontDistribution#origin_request_policy_id}
  */
  readonly originRequestPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#path_pattern CloudfrontDistribution#path_pattern}
  */
  readonly pathPattern: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#realtime_log_config_arn CloudfrontDistribution#realtime_log_config_arn}
  */
  readonly realtimeLogConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#smooth_streaming CloudfrontDistribution#smooth_streaming}
  */
  readonly smoothStreaming?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#target_origin_id CloudfrontDistribution#target_origin_id}
  */
  readonly targetOriginId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#trusted_key_groups CloudfrontDistribution#trusted_key_groups}
  */
  readonly trustedKeyGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#trusted_signers CloudfrontDistribution#trusted_signers}
  */
  readonly trustedSigners?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#viewer_protocol_policy CloudfrontDistribution#viewer_protocol_policy}
  */
  readonly viewerProtocolPolicy: string;
  /**
  * forwarded_values block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#forwarded_values CloudfrontDistribution#forwarded_values}
  */
  readonly forwardedValues?: CloudfrontDistributionOrderedCacheBehaviorForwardedValues[];
  /**
  * function_association block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#function_association CloudfrontDistribution#function_association}
  */
  readonly functionAssociation?: CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation[];
  /**
  * lambda_function_association block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#lambda_function_association CloudfrontDistribution#lambda_function_association}
  */
  readonly lambdaFunctionAssociation?: CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation[];
}

function cloudfrontDistributionOrderedCacheBehaviorToTerraform(struct?: CloudfrontDistributionOrderedCacheBehavior): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedMethods),
    cache_policy_id: cdktf.stringToTerraform(struct!.cachePolicyId),
    cached_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cachedMethods),
    compress: cdktf.booleanToTerraform(struct!.compress),
    default_ttl: cdktf.numberToTerraform(struct!.defaultTtl),
    field_level_encryption_id: cdktf.stringToTerraform(struct!.fieldLevelEncryptionId),
    max_ttl: cdktf.numberToTerraform(struct!.maxTtl),
    min_ttl: cdktf.numberToTerraform(struct!.minTtl),
    origin_request_policy_id: cdktf.stringToTerraform(struct!.originRequestPolicyId),
    path_pattern: cdktf.stringToTerraform(struct!.pathPattern),
    realtime_log_config_arn: cdktf.stringToTerraform(struct!.realtimeLogConfigArn),
    smooth_streaming: cdktf.booleanToTerraform(struct!.smoothStreaming),
    target_origin_id: cdktf.stringToTerraform(struct!.targetOriginId),
    trusted_key_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.trustedKeyGroups),
    trusted_signers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.trustedSigners),
    viewer_protocol_policy: cdktf.stringToTerraform(struct!.viewerProtocolPolicy),
    forwarded_values: cdktf.listMapper(cloudfrontDistributionOrderedCacheBehaviorForwardedValuesToTerraform)(struct!.forwardedValues),
    function_association: cdktf.listMapper(cloudfrontDistributionOrderedCacheBehaviorFunctionAssociationToTerraform)(struct!.functionAssociation),
    lambda_function_association: cdktf.listMapper(cloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationToTerraform)(struct!.lambdaFunctionAssociation),
  }
}

export interface CloudfrontDistributionOriginCustomHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#name CloudfrontDistribution#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#value CloudfrontDistribution#value}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#http_port CloudfrontDistribution#http_port}
  */
  readonly httpPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#https_port CloudfrontDistribution#https_port}
  */
  readonly httpsPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_keepalive_timeout CloudfrontDistribution#origin_keepalive_timeout}
  */
  readonly originKeepaliveTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_protocol_policy CloudfrontDistribution#origin_protocol_policy}
  */
  readonly originProtocolPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_read_timeout CloudfrontDistribution#origin_read_timeout}
  */
  readonly originReadTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_ssl_protocols CloudfrontDistribution#origin_ssl_protocols}
  */
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

export interface CloudfrontDistributionOriginOriginShield {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#enabled CloudfrontDistribution#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_shield_region CloudfrontDistribution#origin_shield_region}
  */
  readonly originShieldRegion: string;
}

function cloudfrontDistributionOriginOriginShieldToTerraform(struct?: CloudfrontDistributionOriginOriginShield): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    origin_shield_region: cdktf.stringToTerraform(struct!.originShieldRegion),
  }
}

export interface CloudfrontDistributionOriginS3OriginConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_access_identity CloudfrontDistribution#origin_access_identity}
  */
  readonly originAccessIdentity: string;
}

function cloudfrontDistributionOriginS3OriginConfigToTerraform(struct?: CloudfrontDistributionOriginS3OriginConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    origin_access_identity: cdktf.stringToTerraform(struct!.originAccessIdentity),
  }
}

export interface CloudfrontDistributionOrigin {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#connection_attempts CloudfrontDistribution#connection_attempts}
  */
  readonly connectionAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#connection_timeout CloudfrontDistribution#connection_timeout}
  */
  readonly connectionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#domain_name CloudfrontDistribution#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_id CloudfrontDistribution#origin_id}
  */
  readonly originId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_path CloudfrontDistribution#origin_path}
  */
  readonly originPath?: string;
  /**
  * custom_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#custom_header CloudfrontDistribution#custom_header}
  */
  readonly customHeader?: CloudfrontDistributionOriginCustomHeader[];
  /**
  * custom_origin_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#custom_origin_config CloudfrontDistribution#custom_origin_config}
  */
  readonly customOriginConfig?: CloudfrontDistributionOriginCustomOriginConfig[];
  /**
  * origin_shield block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_shield CloudfrontDistribution#origin_shield}
  */
  readonly originShield?: CloudfrontDistributionOriginOriginShield[];
  /**
  * s3_origin_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#s3_origin_config CloudfrontDistribution#s3_origin_config}
  */
  readonly s3OriginConfig?: CloudfrontDistributionOriginS3OriginConfig[];
}

function cloudfrontDistributionOriginToTerraform(struct?: CloudfrontDistributionOrigin): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    connection_attempts: cdktf.numberToTerraform(struct!.connectionAttempts),
    connection_timeout: cdktf.numberToTerraform(struct!.connectionTimeout),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    origin_id: cdktf.stringToTerraform(struct!.originId),
    origin_path: cdktf.stringToTerraform(struct!.originPath),
    custom_header: cdktf.listMapper(cloudfrontDistributionOriginCustomHeaderToTerraform)(struct!.customHeader),
    custom_origin_config: cdktf.listMapper(cloudfrontDistributionOriginCustomOriginConfigToTerraform)(struct!.customOriginConfig),
    origin_shield: cdktf.listMapper(cloudfrontDistributionOriginOriginShieldToTerraform)(struct!.originShield),
    s3_origin_config: cdktf.listMapper(cloudfrontDistributionOriginS3OriginConfigToTerraform)(struct!.s3OriginConfig),
  }
}

export interface CloudfrontDistributionOriginGroupFailoverCriteria {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#status_codes CloudfrontDistribution#status_codes}
  */
  readonly statusCodes: number[];
}

function cloudfrontDistributionOriginGroupFailoverCriteriaToTerraform(struct?: CloudfrontDistributionOriginGroupFailoverCriteria): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    status_codes: cdktf.listMapper(cdktf.numberToTerraform)(struct!.statusCodes),
  }
}

export interface CloudfrontDistributionOriginGroupMember {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_id CloudfrontDistribution#origin_id}
  */
  readonly originId: string;
}

function cloudfrontDistributionOriginGroupMemberToTerraform(struct?: CloudfrontDistributionOriginGroupMember): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    origin_id: cdktf.stringToTerraform(struct!.originId),
  }
}

export interface CloudfrontDistributionOriginGroup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_id CloudfrontDistribution#origin_id}
  */
  readonly originId: string;
  /**
  * failover_criteria block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#failover_criteria CloudfrontDistribution#failover_criteria}
  */
  readonly failoverCriteria: CloudfrontDistributionOriginGroupFailoverCriteria[];
  /**
  * member block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#member CloudfrontDistribution#member}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#locations CloudfrontDistribution#locations}
  */
  readonly locations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#restriction_type CloudfrontDistribution#restriction_type}
  */
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
  /**
  * geo_restriction block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#geo_restriction CloudfrontDistribution#geo_restriction}
  */
  readonly geoRestriction: CloudfrontDistributionRestrictionsGeoRestriction[];
}

function cloudfrontDistributionRestrictionsToTerraform(struct?: CloudfrontDistributionRestrictions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    geo_restriction: cdktf.listMapper(cloudfrontDistributionRestrictionsGeoRestrictionToTerraform)(struct!.geoRestriction),
  }
}

export interface CloudfrontDistributionViewerCertificate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#acm_certificate_arn CloudfrontDistribution#acm_certificate_arn}
  */
  readonly acmCertificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#cloudfront_default_certificate CloudfrontDistribution#cloudfront_default_certificate}
  */
  readonly cloudfrontDefaultCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#iam_certificate_id CloudfrontDistribution#iam_certificate_id}
  */
  readonly iamCertificateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#minimum_protocol_version CloudfrontDistribution#minimum_protocol_version}
  */
  readonly minimumProtocolVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#ssl_support_method CloudfrontDistribution#ssl_support_method}
  */
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html aws_cloudfront_distribution}
*/
export class CloudfrontDistribution extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_cloudfront_distribution";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html aws_cloudfront_distribution} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfrontDistributionConfig
  */
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
    this._tagsAll = config.tagsAll;
    this._waitForDeployment = config.waitForDeployment;
    this._webAclId = config.webAclId;
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
  private _enabled: boolean | cdktf.IResolvable;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
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
  private _isIpv6Enabled?: boolean | cdktf.IResolvable;
  public get isIpv6Enabled() {
    return this.getBooleanAttribute('is_ipv6_enabled');
  }
  public set isIpv6Enabled(value: boolean | cdktf.IResolvable ) {
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
  private _retainOnDelete?: boolean | cdktf.IResolvable;
  public get retainOnDelete() {
    return this.getBooleanAttribute('retain_on_delete');
  }
  public set retainOnDelete(value: boolean | cdktf.IResolvable ) {
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // trusted_key_groups - computed: true, optional: false, required: false
  public trustedKeyGroups(index: string) {
    return new CloudfrontDistributionTrustedKeyGroups(this, 'trusted_key_groups', index);
  }

  // trusted_signers - computed: true, optional: false, required: false
  public trustedSigners(index: string) {
    return new CloudfrontDistributionTrustedSigners(this, 'trusted_signers', index);
  }

  // wait_for_deployment - computed: false, optional: true, required: false
  private _waitForDeployment?: boolean | cdktf.IResolvable;
  public get waitForDeployment() {
    return this.getBooleanAttribute('wait_for_deployment');
  }
  public set waitForDeployment(value: boolean | cdktf.IResolvable ) {
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
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      wait_for_deployment: cdktf.booleanToTerraform(this._waitForDeployment),
      web_acl_id: cdktf.stringToTerraform(this._webAclId),
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
