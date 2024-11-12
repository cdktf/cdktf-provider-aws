// https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsProviderConfig {
  /**
  * The access key for API operations. You can retrieve this
  * from the 'Security & Credentials' section of the AWS console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#access_key AwsProvider#access_key}
  */
  readonly accessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#allowed_account_ids AwsProvider#allowed_account_ids}
  */
  readonly allowedAccountIds?: string[];
  /**
  * File containing custom root and intermediate certificates. Can also be configured using the `AWS_CA_BUNDLE` environment variable. (Setting `ca_bundle` in the shared config file is not supported.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#custom_ca_bundle AwsProvider#custom_ca_bundle}
  */
  readonly customCaBundle?: string;
  /**
  * Address of the EC2 metadata service endpoint to use. Can also be configured using the `AWS_EC2_METADATA_SERVICE_ENDPOINT` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#ec2_metadata_service_endpoint AwsProvider#ec2_metadata_service_endpoint}
  */
  readonly ec2MetadataServiceEndpoint?: string;
  /**
  * Protocol to use with EC2 metadata service endpoint.Valid values are `IPv4` and `IPv6`. Can also be configured using the `AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#ec2_metadata_service_endpoint_mode AwsProvider#ec2_metadata_service_endpoint_mode}
  */
  readonly ec2MetadataServiceEndpointMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#forbidden_account_ids AwsProvider#forbidden_account_ids}
  */
  readonly forbiddenAccountIds?: string[];
  /**
  * URL of a proxy to use for HTTP requests when accessing the AWS API. Can also be set using the `HTTP_PROXY` or `http_proxy` environment variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#http_proxy AwsProvider#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * URL of a proxy to use for HTTPS requests when accessing the AWS API. Can also be set using the `HTTPS_PROXY` or `https_proxy` environment variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#https_proxy AwsProvider#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * Explicitly allow the provider to perform "insecure" SSL requests. If omitted, default value is `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#insecure AwsProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of times an AWS API request is
  * being executed. If the API request still fails, an error is
  * thrown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#max_retries AwsProvider#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Comma-separated list of hosts that should not use HTTP or HTTPS proxies. Can also be set using the `NO_PROXY` or `no_proxy` environment variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#no_proxy AwsProvider#no_proxy}
  */
  readonly noProxy?: string;
  /**
  * The profile for API operations. If not set, the default profile
  * created with `aws configure` will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#profile AwsProvider#profile}
  */
  readonly profile?: string;
  /**
  * The region where AWS operations will take place. Examples
  * are us-east-1, us-west-2, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#region AwsProvider#region}
  */
  readonly region?: string;
  /**
  * Specifies how retries are attempted. Valid values are `standard` and `adaptive`. Can also be configured using the `AWS_RETRY_MODE` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#retry_mode AwsProvider#retry_mode}
  */
  readonly retryMode?: string;
  /**
  * Specifies whether S3 API calls in the `us-east-1` region use the legacy global endpoint or a regional endpoint. Valid values are `legacy` or `regional`. Can also be configured using the `AWS_S3_US_EAST_1_REGIONAL_ENDPOINT` environment variable or the `s3_us_east_1_regional_endpoint` shared config file parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#s3_us_east_1_regional_endpoint AwsProvider#s3_us_east_1_regional_endpoint}
  */
  readonly s3UsEast1RegionalEndpoint?: string;
  /**
  * Set this to true to enable the request to use path-style addressing,
  * i.e., https://s3.amazonaws.com/BUCKET/KEY. By default, the S3 client will
  * use virtual hosted bucket addressing when possible
  * (https://BUCKET.s3.amazonaws.com/KEY). Specific to the Amazon S3 service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#s3_use_path_style AwsProvider#s3_use_path_style}
  */
  readonly s3UsePathStyle?: boolean | cdktf.IResolvable;
  /**
  * The secret key for API operations. You can retrieve this
  * from the 'Security & Credentials' section of the AWS console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#secret_key AwsProvider#secret_key}
  */
  readonly secretKey?: string;
  /**
  * List of paths to shared config files. If not set, defaults to [~/.aws/config].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#shared_config_files AwsProvider#shared_config_files}
  */
  readonly sharedConfigFiles?: string[];
  /**
  * List of paths to shared credentials files. If not set, defaults to [~/.aws/credentials].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#shared_credentials_files AwsProvider#shared_credentials_files}
  */
  readonly sharedCredentialsFiles?: string[];
  /**
  * Skip the credentials validation via STS API. Used for AWS API implementations that do not have STS available/implemented.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#skip_credentials_validation AwsProvider#skip_credentials_validation}
  */
  readonly skipCredentialsValidation?: boolean | cdktf.IResolvable;
  /**
  * Skip the AWS Metadata API check. Used for AWS API implementations that do not have a metadata api endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#skip_metadata_api_check AwsProvider#skip_metadata_api_check}
  */
  readonly skipMetadataApiCheck?: string;
  /**
  * Skip static validation of region name. Used by users of alternative AWS-like APIs or users w/ access to regions that are not public (yet).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#skip_region_validation AwsProvider#skip_region_validation}
  */
  readonly skipRegionValidation?: boolean | cdktf.IResolvable;
  /**
  * Skip requesting the account ID. Used for AWS API implementations that do not have IAM/STS API and/or metadata API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#skip_requesting_account_id AwsProvider#skip_requesting_account_id}
  */
  readonly skipRequestingAccountId?: boolean | cdktf.IResolvable;
  /**
  * The region where AWS STS operations will take place. Examples
  * are us-east-1 and us-west-2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#sts_region AwsProvider#sts_region}
  */
  readonly stsRegion?: string;
  /**
  * session token. A session token is only required if you are
  * using temporary security credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#token AwsProvider#token}
  */
  readonly token?: string;
  /**
  * The capacity of the AWS SDK's token bucket rate limiter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#token_bucket_rate_limiter_capacity AwsProvider#token_bucket_rate_limiter_capacity}
  */
  readonly tokenBucketRateLimiterCapacity?: number;
  /**
  * Resolve an endpoint with DualStack capability
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#use_dualstack_endpoint AwsProvider#use_dualstack_endpoint}
  */
  readonly useDualstackEndpoint?: boolean | cdktf.IResolvable;
  /**
  * Resolve an endpoint with FIPS capability
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#use_fips_endpoint AwsProvider#use_fips_endpoint}
  */
  readonly useFipsEndpoint?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#alias AwsProvider#alias}
  */
  readonly alias?: string;
  /**
  * assume_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#assume_role AwsProvider#assume_role}
  */
  readonly assumeRole?: AwsProviderAssumeRole[] | cdktf.IResolvable;
  /**
  * assume_role_with_web_identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#assume_role_with_web_identity AwsProvider#assume_role_with_web_identity}
  */
  readonly assumeRoleWithWebIdentity?: AwsProviderAssumeRoleWithWebIdentity[] | cdktf.IResolvable;
  /**
  * default_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#default_tags AwsProvider#default_tags}
  */
  readonly defaultTags?: AwsProviderDefaultTags[] | cdktf.IResolvable;
  /**
  * endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#endpoints AwsProvider#endpoints}
  */
  readonly endpoints?: AwsProviderEndpoints[] | cdktf.IResolvable;
  /**
  * ignore_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#ignore_tags AwsProvider#ignore_tags}
  */
  readonly ignoreTags?: AwsProviderIgnoreTags[] | cdktf.IResolvable;
}
export interface AwsProviderAssumeRole {
  /**
  * The duration, between 15 minutes and 12 hours, of the role session. Valid time units are ns, us (or µs), ms, s, h, or m.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#duration AwsProvider#duration}
  */
  readonly duration?: string;
  /**
  * A unique identifier that might be required when you assume a role in another account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#external_id AwsProvider#external_id}
  */
  readonly externalId?: string;
  /**
  * IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#policy AwsProvider#policy}
  */
  readonly policy?: string;
  /**
  * Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#policy_arns AwsProvider#policy_arns}
  */
  readonly policyArns?: string[];
  /**
  * Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#role_arn AwsProvider#role_arn}
  */
  readonly roleArn?: string;
  /**
  * An identifier for the assumed role session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#session_name AwsProvider#session_name}
  */
  readonly sessionName?: string;
  /**
  * Source identity specified by the principal assuming the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#source_identity AwsProvider#source_identity}
  */
  readonly sourceIdentity?: string;
  /**
  * Assume role session tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#tags AwsProvider#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Assume role session tag keys to pass to any subsequent sessions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#transitive_tag_keys AwsProvider#transitive_tag_keys}
  */
  readonly transitiveTagKeys?: string[];
}

export function awsProviderAssumeRoleToTerraform(struct?: AwsProviderAssumeRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    policy: cdktf.stringToTerraform(struct!.policy),
    policy_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policyArns),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    session_name: cdktf.stringToTerraform(struct!.sessionName),
    source_identity: cdktf.stringToTerraform(struct!.sourceIdentity),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    transitive_tag_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transitiveTagKeys),
  }
}


export function awsProviderAssumeRoleToHclTerraform(struct?: AwsProviderAssumeRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policyArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_name: {
      value: cdktf.stringToHclTerraform(struct!.sessionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_identity: {
      value: cdktf.stringToHclTerraform(struct!.sourceIdentity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    transitive_tag_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transitiveTagKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AwsProviderAssumeRoleWithWebIdentity {
  /**
  * The duration, between 15 minutes and 12 hours, of the role session. Valid time units are ns, us (or µs), ms, s, h, or m.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#duration AwsProvider#duration}
  */
  readonly duration?: string;
  /**
  * IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#policy AwsProvider#policy}
  */
  readonly policy?: string;
  /**
  * Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#policy_arns AwsProvider#policy_arns}
  */
  readonly policyArns?: string[];
  /**
  * Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#role_arn AwsProvider#role_arn}
  */
  readonly roleArn?: string;
  /**
  * An identifier for the assumed role session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#session_name AwsProvider#session_name}
  */
  readonly sessionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#web_identity_token AwsProvider#web_identity_token}
  */
  readonly webIdentityToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#web_identity_token_file AwsProvider#web_identity_token_file}
  */
  readonly webIdentityTokenFile?: string;
}

export function awsProviderAssumeRoleWithWebIdentityToTerraform(struct?: AwsProviderAssumeRoleWithWebIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    policy: cdktf.stringToTerraform(struct!.policy),
    policy_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policyArns),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    session_name: cdktf.stringToTerraform(struct!.sessionName),
    web_identity_token: cdktf.stringToTerraform(struct!.webIdentityToken),
    web_identity_token_file: cdktf.stringToTerraform(struct!.webIdentityTokenFile),
  }
}


export function awsProviderAssumeRoleWithWebIdentityToHclTerraform(struct?: AwsProviderAssumeRoleWithWebIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policyArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_name: {
      value: cdktf.stringToHclTerraform(struct!.sessionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_identity_token: {
      value: cdktf.stringToHclTerraform(struct!.webIdentityToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_identity_token_file: {
      value: cdktf.stringToHclTerraform(struct!.webIdentityTokenFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AwsProviderDefaultTags {
  /**
  * Resource tags to default across all resources. Can also be configured with environment variables like `TF_AWS_DEFAULT_TAGS_<tag_name>`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#tags AwsProvider#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function awsProviderDefaultTagsToTerraform(struct?: AwsProviderDefaultTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function awsProviderDefaultTagsToHclTerraform(struct?: AwsProviderDefaultTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AwsProviderEndpoints {
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#accessanalyzer AwsProvider#accessanalyzer}
  */
  readonly accessanalyzer?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#account AwsProvider#account}
  */
  readonly account?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#acm AwsProvider#acm}
  */
  readonly acm?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#acmpca AwsProvider#acmpca}
  */
  readonly acmpca?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#amg AwsProvider#amg}
  */
  readonly amg?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#amp AwsProvider#amp}
  */
  readonly amp?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#amplify AwsProvider#amplify}
  */
  readonly amplify?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#apigateway AwsProvider#apigateway}
  */
  readonly apigateway?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#apigatewayv2 AwsProvider#apigatewayv2}
  */
  readonly apigatewayv2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#appautoscaling AwsProvider#appautoscaling}
  */
  readonly appautoscaling?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#appconfig AwsProvider#appconfig}
  */
  readonly appconfig?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#appfabric AwsProvider#appfabric}
  */
  readonly appfabric?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#appflow AwsProvider#appflow}
  */
  readonly appflow?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#appintegrations AwsProvider#appintegrations}
  */
  readonly appintegrations?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#appintegrationsservice AwsProvider#appintegrationsservice}
  */
  readonly appintegrationsservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#applicationautoscaling AwsProvider#applicationautoscaling}
  */
  readonly applicationautoscaling?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#applicationinsights AwsProvider#applicationinsights}
  */
  readonly applicationinsights?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#applicationsignals AwsProvider#applicationsignals}
  */
  readonly applicationsignals?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#appmesh AwsProvider#appmesh}
  */
  readonly appmesh?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#appregistry AwsProvider#appregistry}
  */
  readonly appregistry?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#apprunner AwsProvider#apprunner}
  */
  readonly apprunner?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#appstream AwsProvider#appstream}
  */
  readonly appstream?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#appsync AwsProvider#appsync}
  */
  readonly appsync?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#athena AwsProvider#athena}
  */
  readonly athena?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#auditmanager AwsProvider#auditmanager}
  */
  readonly auditmanager?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#autoscaling AwsProvider#autoscaling}
  */
  readonly autoscaling?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#autoscalingplans AwsProvider#autoscalingplans}
  */
  readonly autoscalingplans?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#backup AwsProvider#backup}
  */
  readonly backup?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#batch AwsProvider#batch}
  */
  readonly batch?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#bcmdataexports AwsProvider#bcmdataexports}
  */
  readonly bcmdataexports?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#beanstalk AwsProvider#beanstalk}
  */
  readonly beanstalk?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#bedrock AwsProvider#bedrock}
  */
  readonly bedrock?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#bedrockagent AwsProvider#bedrockagent}
  */
  readonly bedrockagent?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#budgets AwsProvider#budgets}
  */
  readonly budgets?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#ce AwsProvider#ce}
  */
  readonly ce?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#chatbot AwsProvider#chatbot}
  */
  readonly chatbot?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#chime AwsProvider#chime}
  */
  readonly chime?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#chimesdkmediapipelines AwsProvider#chimesdkmediapipelines}
  */
  readonly chimesdkmediapipelines?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#chimesdkvoice AwsProvider#chimesdkvoice}
  */
  readonly chimesdkvoice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#cleanrooms AwsProvider#cleanrooms}
  */
  readonly cleanrooms?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#cloud9 AwsProvider#cloud9}
  */
  readonly cloud9?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#cloudcontrol AwsProvider#cloudcontrol}
  */
  readonly cloudcontrol?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#cloudcontrolapi AwsProvider#cloudcontrolapi}
  */
  readonly cloudcontrolapi?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#cloudformation AwsProvider#cloudformation}
  */
  readonly cloudformation?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#cloudfront AwsProvider#cloudfront}
  */
  readonly cloudfront?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#cloudfrontkeyvaluestore AwsProvider#cloudfrontkeyvaluestore}
  */
  readonly cloudfrontkeyvaluestore?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#cloudhsm AwsProvider#cloudhsm}
  */
  readonly cloudhsm?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#cloudhsmv2 AwsProvider#cloudhsmv2}
  */
  readonly cloudhsmv2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#cloudsearch AwsProvider#cloudsearch}
  */
  readonly cloudsearch?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#cloudtrail AwsProvider#cloudtrail}
  */
  readonly cloudtrail?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#cloudwatch AwsProvider#cloudwatch}
  */
  readonly cloudwatch?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#cloudwatchevents AwsProvider#cloudwatchevents}
  */
  readonly cloudwatchevents?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#cloudwatchevidently AwsProvider#cloudwatchevidently}
  */
  readonly cloudwatchevidently?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#cloudwatchlog AwsProvider#cloudwatchlog}
  */
  readonly cloudwatchlog?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#cloudwatchlogs AwsProvider#cloudwatchlogs}
  */
  readonly cloudwatchlogs?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#cloudwatchobservabilityaccessmanager AwsProvider#cloudwatchobservabilityaccessmanager}
  */
  readonly cloudwatchobservabilityaccessmanager?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#cloudwatchrum AwsProvider#cloudwatchrum}
  */
  readonly cloudwatchrum?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#codeartifact AwsProvider#codeartifact}
  */
  readonly codeartifact?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#codebuild AwsProvider#codebuild}
  */
  readonly codebuild?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#codecatalyst AwsProvider#codecatalyst}
  */
  readonly codecatalyst?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#codecommit AwsProvider#codecommit}
  */
  readonly codecommit?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#codeconnections AwsProvider#codeconnections}
  */
  readonly codeconnections?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#codedeploy AwsProvider#codedeploy}
  */
  readonly codedeploy?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#codeguruprofiler AwsProvider#codeguruprofiler}
  */
  readonly codeguruprofiler?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#codegurureviewer AwsProvider#codegurureviewer}
  */
  readonly codegurureviewer?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#codepipeline AwsProvider#codepipeline}
  */
  readonly codepipeline?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#codestarconnections AwsProvider#codestarconnections}
  */
  readonly codestarconnections?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#codestarnotifications AwsProvider#codestarnotifications}
  */
  readonly codestarnotifications?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#cognitoidentity AwsProvider#cognitoidentity}
  */
  readonly cognitoidentity?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#cognitoidentityprovider AwsProvider#cognitoidentityprovider}
  */
  readonly cognitoidentityprovider?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#cognitoidp AwsProvider#cognitoidp}
  */
  readonly cognitoidp?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#comprehend AwsProvider#comprehend}
  */
  readonly comprehend?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#computeoptimizer AwsProvider#computeoptimizer}
  */
  readonly computeoptimizer?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#config AwsProvider#config}
  */
  readonly config?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#configservice AwsProvider#configservice}
  */
  readonly configservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#connect AwsProvider#connect}
  */
  readonly connect?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#connectcases AwsProvider#connectcases}
  */
  readonly connectcases?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#controltower AwsProvider#controltower}
  */
  readonly controltower?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#costandusagereportservice AwsProvider#costandusagereportservice}
  */
  readonly costandusagereportservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#costexplorer AwsProvider#costexplorer}
  */
  readonly costexplorer?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#costoptimizationhub AwsProvider#costoptimizationhub}
  */
  readonly costoptimizationhub?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#cur AwsProvider#cur}
  */
  readonly cur?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#customerprofiles AwsProvider#customerprofiles}
  */
  readonly customerprofiles?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#databasemigration AwsProvider#databasemigration}
  */
  readonly databasemigration?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#databasemigrationservice AwsProvider#databasemigrationservice}
  */
  readonly databasemigrationservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#databrew AwsProvider#databrew}
  */
  readonly databrew?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#dataexchange AwsProvider#dataexchange}
  */
  readonly dataexchange?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#datapipeline AwsProvider#datapipeline}
  */
  readonly datapipeline?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#datasync AwsProvider#datasync}
  */
  readonly datasync?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#datazone AwsProvider#datazone}
  */
  readonly datazone?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#dax AwsProvider#dax}
  */
  readonly dax?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#deploy AwsProvider#deploy}
  */
  readonly deploy?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#detective AwsProvider#detective}
  */
  readonly detective?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#devicefarm AwsProvider#devicefarm}
  */
  readonly devicefarm?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#devopsguru AwsProvider#devopsguru}
  */
  readonly devopsguru?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#directconnect AwsProvider#directconnect}
  */
  readonly directconnect?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#directoryservice AwsProvider#directoryservice}
  */
  readonly directoryservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#dlm AwsProvider#dlm}
  */
  readonly dlm?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#dms AwsProvider#dms}
  */
  readonly dms?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#docdb AwsProvider#docdb}
  */
  readonly docdb?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#docdbelastic AwsProvider#docdbelastic}
  */
  readonly docdbelastic?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#drs AwsProvider#drs}
  */
  readonly drs?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#ds AwsProvider#ds}
  */
  readonly ds?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#dynamodb AwsProvider#dynamodb}
  */
  readonly dynamodb?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#ec2 AwsProvider#ec2}
  */
  readonly ec2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#ecr AwsProvider#ecr}
  */
  readonly ecr?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#ecrpublic AwsProvider#ecrpublic}
  */
  readonly ecrpublic?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#ecs AwsProvider#ecs}
  */
  readonly ecs?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#efs AwsProvider#efs}
  */
  readonly efs?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#eks AwsProvider#eks}
  */
  readonly eks?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#elasticache AwsProvider#elasticache}
  */
  readonly elasticache?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#elasticbeanstalk AwsProvider#elasticbeanstalk}
  */
  readonly elasticbeanstalk?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#elasticloadbalancing AwsProvider#elasticloadbalancing}
  */
  readonly elasticloadbalancing?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#elasticloadbalancingv2 AwsProvider#elasticloadbalancingv2}
  */
  readonly elasticloadbalancingv2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#elasticsearch AwsProvider#elasticsearch}
  */
  readonly elasticsearch?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#elasticsearchservice AwsProvider#elasticsearchservice}
  */
  readonly elasticsearchservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#elastictranscoder AwsProvider#elastictranscoder}
  */
  readonly elastictranscoder?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#elb AwsProvider#elb}
  */
  readonly elb?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#elbv2 AwsProvider#elbv2}
  */
  readonly elbv2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#emr AwsProvider#emr}
  */
  readonly emr?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#emrcontainers AwsProvider#emrcontainers}
  */
  readonly emrcontainers?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#emrserverless AwsProvider#emrserverless}
  */
  readonly emrserverless?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#es AwsProvider#es}
  */
  readonly es?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#eventbridge AwsProvider#eventbridge}
  */
  readonly eventbridge?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#events AwsProvider#events}
  */
  readonly events?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#evidently AwsProvider#evidently}
  */
  readonly evidently?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#finspace AwsProvider#finspace}
  */
  readonly finspace?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#firehose AwsProvider#firehose}
  */
  readonly firehose?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#fis AwsProvider#fis}
  */
  readonly fis?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#fms AwsProvider#fms}
  */
  readonly fms?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#fsx AwsProvider#fsx}
  */
  readonly fsx?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#gamelift AwsProvider#gamelift}
  */
  readonly gamelift?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#glacier AwsProvider#glacier}
  */
  readonly glacier?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#globalaccelerator AwsProvider#globalaccelerator}
  */
  readonly globalaccelerator?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#glue AwsProvider#glue}
  */
  readonly glue?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#gluedatabrew AwsProvider#gluedatabrew}
  */
  readonly gluedatabrew?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#grafana AwsProvider#grafana}
  */
  readonly grafana?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#greengrass AwsProvider#greengrass}
  */
  readonly greengrass?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#groundstation AwsProvider#groundstation}
  */
  readonly groundstation?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#guardduty AwsProvider#guardduty}
  */
  readonly guardduty?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#healthlake AwsProvider#healthlake}
  */
  readonly healthlake?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#iam AwsProvider#iam}
  */
  readonly iam?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#identitystore AwsProvider#identitystore}
  */
  readonly identitystore?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#imagebuilder AwsProvider#imagebuilder}
  */
  readonly imagebuilder?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#inspector AwsProvider#inspector}
  */
  readonly inspector?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#inspector2 AwsProvider#inspector2}
  */
  readonly inspector2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#inspectorv2 AwsProvider#inspectorv2}
  */
  readonly inspectorv2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#internetmonitor AwsProvider#internetmonitor}
  */
  readonly internetmonitor?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#iot AwsProvider#iot}
  */
  readonly iot?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#iotanalytics AwsProvider#iotanalytics}
  */
  readonly iotanalytics?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#iotevents AwsProvider#iotevents}
  */
  readonly iotevents?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#ivs AwsProvider#ivs}
  */
  readonly ivs?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#ivschat AwsProvider#ivschat}
  */
  readonly ivschat?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#kafka AwsProvider#kafka}
  */
  readonly kafka?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#kafkaconnect AwsProvider#kafkaconnect}
  */
  readonly kafkaconnect?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#kendra AwsProvider#kendra}
  */
  readonly kendra?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#keyspaces AwsProvider#keyspaces}
  */
  readonly keyspaces?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#kinesis AwsProvider#kinesis}
  */
  readonly kinesis?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#kinesisanalytics AwsProvider#kinesisanalytics}
  */
  readonly kinesisanalytics?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#kinesisanalyticsv2 AwsProvider#kinesisanalyticsv2}
  */
  readonly kinesisanalyticsv2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#kinesisvideo AwsProvider#kinesisvideo}
  */
  readonly kinesisvideo?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#kms AwsProvider#kms}
  */
  readonly kms?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#lakeformation AwsProvider#lakeformation}
  */
  readonly lakeformation?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#lambda AwsProvider#lambda}
  */
  readonly lambda?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#launchwizard AwsProvider#launchwizard}
  */
  readonly launchwizard?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#lex AwsProvider#lex}
  */
  readonly lex?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#lexmodelbuilding AwsProvider#lexmodelbuilding}
  */
  readonly lexmodelbuilding?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#lexmodelbuildingservice AwsProvider#lexmodelbuildingservice}
  */
  readonly lexmodelbuildingservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#lexmodels AwsProvider#lexmodels}
  */
  readonly lexmodels?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#lexmodelsv2 AwsProvider#lexmodelsv2}
  */
  readonly lexmodelsv2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#lexv2models AwsProvider#lexv2models}
  */
  readonly lexv2Models?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#licensemanager AwsProvider#licensemanager}
  */
  readonly licensemanager?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#lightsail AwsProvider#lightsail}
  */
  readonly lightsail?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#location AwsProvider#location}
  */
  readonly location?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#locationservice AwsProvider#locationservice}
  */
  readonly locationservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#logs AwsProvider#logs}
  */
  readonly logs?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#lookoutmetrics AwsProvider#lookoutmetrics}
  */
  readonly lookoutmetrics?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#m2 AwsProvider#m2}
  */
  readonly m2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#macie2 AwsProvider#macie2}
  */
  readonly macie2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#managedgrafana AwsProvider#managedgrafana}
  */
  readonly managedgrafana?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#mediaconnect AwsProvider#mediaconnect}
  */
  readonly mediaconnect?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#mediaconvert AwsProvider#mediaconvert}
  */
  readonly mediaconvert?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#medialive AwsProvider#medialive}
  */
  readonly medialive?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#mediapackage AwsProvider#mediapackage}
  */
  readonly mediapackage?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#mediapackagev2 AwsProvider#mediapackagev2}
  */
  readonly mediapackagev2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#mediastore AwsProvider#mediastore}
  */
  readonly mediastore?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#memorydb AwsProvider#memorydb}
  */
  readonly memorydb?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#mq AwsProvider#mq}
  */
  readonly mq?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#msk AwsProvider#msk}
  */
  readonly msk?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#mwaa AwsProvider#mwaa}
  */
  readonly mwaa?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#neptune AwsProvider#neptune}
  */
  readonly neptune?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#neptunegraph AwsProvider#neptunegraph}
  */
  readonly neptunegraph?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#networkfirewall AwsProvider#networkfirewall}
  */
  readonly networkfirewall?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#networkmanager AwsProvider#networkmanager}
  */
  readonly networkmanager?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#networkmonitor AwsProvider#networkmonitor}
  */
  readonly networkmonitor?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#oam AwsProvider#oam}
  */
  readonly oam?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#opensearch AwsProvider#opensearch}
  */
  readonly opensearch?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#opensearchingestion AwsProvider#opensearchingestion}
  */
  readonly opensearchingestion?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#opensearchserverless AwsProvider#opensearchserverless}
  */
  readonly opensearchserverless?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#opensearchservice AwsProvider#opensearchservice}
  */
  readonly opensearchservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#opsworks AwsProvider#opsworks}
  */
  readonly opsworks?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#organizations AwsProvider#organizations}
  */
  readonly organizations?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#osis AwsProvider#osis}
  */
  readonly osis?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#outposts AwsProvider#outposts}
  */
  readonly outposts?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#paymentcryptography AwsProvider#paymentcryptography}
  */
  readonly paymentcryptography?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#pcaconnectorad AwsProvider#pcaconnectorad}
  */
  readonly pcaconnectorad?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#pcs AwsProvider#pcs}
  */
  readonly pcs?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#pinpoint AwsProvider#pinpoint}
  */
  readonly pinpoint?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#pinpointsmsvoicev2 AwsProvider#pinpointsmsvoicev2}
  */
  readonly pinpointsmsvoicev2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#pipes AwsProvider#pipes}
  */
  readonly pipes?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#polly AwsProvider#polly}
  */
  readonly polly?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#pricing AwsProvider#pricing}
  */
  readonly pricing?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#prometheus AwsProvider#prometheus}
  */
  readonly prometheus?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#prometheusservice AwsProvider#prometheusservice}
  */
  readonly prometheusservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#qbusiness AwsProvider#qbusiness}
  */
  readonly qbusiness?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#qldb AwsProvider#qldb}
  */
  readonly qldb?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#quicksight AwsProvider#quicksight}
  */
  readonly quicksight?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#ram AwsProvider#ram}
  */
  readonly ram?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#rbin AwsProvider#rbin}
  */
  readonly rbin?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#rds AwsProvider#rds}
  */
  readonly rds?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#recyclebin AwsProvider#recyclebin}
  */
  readonly recyclebin?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#redshift AwsProvider#redshift}
  */
  readonly redshift?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#redshiftdata AwsProvider#redshiftdata}
  */
  readonly redshiftdata?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#redshiftdataapiservice AwsProvider#redshiftdataapiservice}
  */
  readonly redshiftdataapiservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#redshiftserverless AwsProvider#redshiftserverless}
  */
  readonly redshiftserverless?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#rekognition AwsProvider#rekognition}
  */
  readonly rekognition?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#resiliencehub AwsProvider#resiliencehub}
  */
  readonly resiliencehub?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#resourceexplorer2 AwsProvider#resourceexplorer2}
  */
  readonly resourceexplorer2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#resourcegroups AwsProvider#resourcegroups}
  */
  readonly resourcegroups?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#resourcegroupstagging AwsProvider#resourcegroupstagging}
  */
  readonly resourcegroupstagging?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#resourcegroupstaggingapi AwsProvider#resourcegroupstaggingapi}
  */
  readonly resourcegroupstaggingapi?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#rolesanywhere AwsProvider#rolesanywhere}
  */
  readonly rolesanywhere?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#route53 AwsProvider#route53}
  */
  readonly route53?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#route53domains AwsProvider#route53domains}
  */
  readonly route53Domains?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#route53profiles AwsProvider#route53profiles}
  */
  readonly route53Profiles?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#route53recoverycontrolconfig AwsProvider#route53recoverycontrolconfig}
  */
  readonly route53Recoverycontrolconfig?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#route53recoveryreadiness AwsProvider#route53recoveryreadiness}
  */
  readonly route53Recoveryreadiness?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#route53resolver AwsProvider#route53resolver}
  */
  readonly route53Resolver?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#rum AwsProvider#rum}
  */
  readonly rum?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#s3 AwsProvider#s3}
  */
  readonly s3?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#s3api AwsProvider#s3api}
  */
  readonly s3Api?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#s3control AwsProvider#s3control}
  */
  readonly s3Control?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#s3outposts AwsProvider#s3outposts}
  */
  readonly s3Outposts?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#sagemaker AwsProvider#sagemaker}
  */
  readonly sagemaker?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#scheduler AwsProvider#scheduler}
  */
  readonly scheduler?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#schemas AwsProvider#schemas}
  */
  readonly schemas?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#sdb AwsProvider#sdb}
  */
  readonly sdb?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#secretsmanager AwsProvider#secretsmanager}
  */
  readonly secretsmanager?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#securityhub AwsProvider#securityhub}
  */
  readonly securityhub?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#securitylake AwsProvider#securitylake}
  */
  readonly securitylake?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#serverlessapplicationrepository AwsProvider#serverlessapplicationrepository}
  */
  readonly serverlessapplicationrepository?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#serverlessapprepo AwsProvider#serverlessapprepo}
  */
  readonly serverlessapprepo?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#serverlessrepo AwsProvider#serverlessrepo}
  */
  readonly serverlessrepo?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#servicecatalog AwsProvider#servicecatalog}
  */
  readonly servicecatalog?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#servicecatalogappregistry AwsProvider#servicecatalogappregistry}
  */
  readonly servicecatalogappregistry?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#servicediscovery AwsProvider#servicediscovery}
  */
  readonly servicediscovery?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#servicequotas AwsProvider#servicequotas}
  */
  readonly servicequotas?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#ses AwsProvider#ses}
  */
  readonly ses?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#sesv2 AwsProvider#sesv2}
  */
  readonly sesv2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#sfn AwsProvider#sfn}
  */
  readonly sfn?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#shield AwsProvider#shield}
  */
  readonly shield?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#signer AwsProvider#signer}
  */
  readonly signer?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#simpledb AwsProvider#simpledb}
  */
  readonly simpledb?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#sns AwsProvider#sns}
  */
  readonly sns?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#sqs AwsProvider#sqs}
  */
  readonly sqs?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#ssm AwsProvider#ssm}
  */
  readonly ssm?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#ssmcontacts AwsProvider#ssmcontacts}
  */
  readonly ssmcontacts?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#ssmincidents AwsProvider#ssmincidents}
  */
  readonly ssmincidents?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#ssmquicksetup AwsProvider#ssmquicksetup}
  */
  readonly ssmquicksetup?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#ssmsap AwsProvider#ssmsap}
  */
  readonly ssmsap?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#sso AwsProvider#sso}
  */
  readonly sso?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#ssoadmin AwsProvider#ssoadmin}
  */
  readonly ssoadmin?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#stepfunctions AwsProvider#stepfunctions}
  */
  readonly stepfunctions?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#storagegateway AwsProvider#storagegateway}
  */
  readonly storagegateway?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#sts AwsProvider#sts}
  */
  readonly sts?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#swf AwsProvider#swf}
  */
  readonly swf?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#synthetics AwsProvider#synthetics}
  */
  readonly synthetics?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#taxsettings AwsProvider#taxsettings}
  */
  readonly taxsettings?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#timestreaminfluxdb AwsProvider#timestreaminfluxdb}
  */
  readonly timestreaminfluxdb?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#timestreamwrite AwsProvider#timestreamwrite}
  */
  readonly timestreamwrite?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#transcribe AwsProvider#transcribe}
  */
  readonly transcribe?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#transcribeservice AwsProvider#transcribeservice}
  */
  readonly transcribeservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#transfer AwsProvider#transfer}
  */
  readonly transfer?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#verifiedpermissions AwsProvider#verifiedpermissions}
  */
  readonly verifiedpermissions?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#vpclattice AwsProvider#vpclattice}
  */
  readonly vpclattice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#waf AwsProvider#waf}
  */
  readonly waf?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#wafregional AwsProvider#wafregional}
  */
  readonly wafregional?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#wafv2 AwsProvider#wafv2}
  */
  readonly wafv2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#wellarchitected AwsProvider#wellarchitected}
  */
  readonly wellarchitected?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#worklink AwsProvider#worklink}
  */
  readonly worklink?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#workspaces AwsProvider#workspaces}
  */
  readonly workspaces?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#workspacesweb AwsProvider#workspacesweb}
  */
  readonly workspacesweb?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#xray AwsProvider#xray}
  */
  readonly xray?: string;
}

export function awsProviderEndpointsToTerraform(struct?: AwsProviderEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accessanalyzer: cdktf.stringToTerraform(struct!.accessanalyzer),
    account: cdktf.stringToTerraform(struct!.account),
    acm: cdktf.stringToTerraform(struct!.acm),
    acmpca: cdktf.stringToTerraform(struct!.acmpca),
    amg: cdktf.stringToTerraform(struct!.amg),
    amp: cdktf.stringToTerraform(struct!.amp),
    amplify: cdktf.stringToTerraform(struct!.amplify),
    apigateway: cdktf.stringToTerraform(struct!.apigateway),
    apigatewayv2: cdktf.stringToTerraform(struct!.apigatewayv2),
    appautoscaling: cdktf.stringToTerraform(struct!.appautoscaling),
    appconfig: cdktf.stringToTerraform(struct!.appconfig),
    appfabric: cdktf.stringToTerraform(struct!.appfabric),
    appflow: cdktf.stringToTerraform(struct!.appflow),
    appintegrations: cdktf.stringToTerraform(struct!.appintegrations),
    appintegrationsservice: cdktf.stringToTerraform(struct!.appintegrationsservice),
    applicationautoscaling: cdktf.stringToTerraform(struct!.applicationautoscaling),
    applicationinsights: cdktf.stringToTerraform(struct!.applicationinsights),
    applicationsignals: cdktf.stringToTerraform(struct!.applicationsignals),
    appmesh: cdktf.stringToTerraform(struct!.appmesh),
    appregistry: cdktf.stringToTerraform(struct!.appregistry),
    apprunner: cdktf.stringToTerraform(struct!.apprunner),
    appstream: cdktf.stringToTerraform(struct!.appstream),
    appsync: cdktf.stringToTerraform(struct!.appsync),
    athena: cdktf.stringToTerraform(struct!.athena),
    auditmanager: cdktf.stringToTerraform(struct!.auditmanager),
    autoscaling: cdktf.stringToTerraform(struct!.autoscaling),
    autoscalingplans: cdktf.stringToTerraform(struct!.autoscalingplans),
    backup: cdktf.stringToTerraform(struct!.backup),
    batch: cdktf.stringToTerraform(struct!.batch),
    bcmdataexports: cdktf.stringToTerraform(struct!.bcmdataexports),
    beanstalk: cdktf.stringToTerraform(struct!.beanstalk),
    bedrock: cdktf.stringToTerraform(struct!.bedrock),
    bedrockagent: cdktf.stringToTerraform(struct!.bedrockagent),
    budgets: cdktf.stringToTerraform(struct!.budgets),
    ce: cdktf.stringToTerraform(struct!.ce),
    chatbot: cdktf.stringToTerraform(struct!.chatbot),
    chime: cdktf.stringToTerraform(struct!.chime),
    chimesdkmediapipelines: cdktf.stringToTerraform(struct!.chimesdkmediapipelines),
    chimesdkvoice: cdktf.stringToTerraform(struct!.chimesdkvoice),
    cleanrooms: cdktf.stringToTerraform(struct!.cleanrooms),
    cloud9: cdktf.stringToTerraform(struct!.cloud9),
    cloudcontrol: cdktf.stringToTerraform(struct!.cloudcontrol),
    cloudcontrolapi: cdktf.stringToTerraform(struct!.cloudcontrolapi),
    cloudformation: cdktf.stringToTerraform(struct!.cloudformation),
    cloudfront: cdktf.stringToTerraform(struct!.cloudfront),
    cloudfrontkeyvaluestore: cdktf.stringToTerraform(struct!.cloudfrontkeyvaluestore),
    cloudhsm: cdktf.stringToTerraform(struct!.cloudhsm),
    cloudhsmv2: cdktf.stringToTerraform(struct!.cloudhsmv2),
    cloudsearch: cdktf.stringToTerraform(struct!.cloudsearch),
    cloudtrail: cdktf.stringToTerraform(struct!.cloudtrail),
    cloudwatch: cdktf.stringToTerraform(struct!.cloudwatch),
    cloudwatchevents: cdktf.stringToTerraform(struct!.cloudwatchevents),
    cloudwatchevidently: cdktf.stringToTerraform(struct!.cloudwatchevidently),
    cloudwatchlog: cdktf.stringToTerraform(struct!.cloudwatchlog),
    cloudwatchlogs: cdktf.stringToTerraform(struct!.cloudwatchlogs),
    cloudwatchobservabilityaccessmanager: cdktf.stringToTerraform(struct!.cloudwatchobservabilityaccessmanager),
    cloudwatchrum: cdktf.stringToTerraform(struct!.cloudwatchrum),
    codeartifact: cdktf.stringToTerraform(struct!.codeartifact),
    codebuild: cdktf.stringToTerraform(struct!.codebuild),
    codecatalyst: cdktf.stringToTerraform(struct!.codecatalyst),
    codecommit: cdktf.stringToTerraform(struct!.codecommit),
    codeconnections: cdktf.stringToTerraform(struct!.codeconnections),
    codedeploy: cdktf.stringToTerraform(struct!.codedeploy),
    codeguruprofiler: cdktf.stringToTerraform(struct!.codeguruprofiler),
    codegurureviewer: cdktf.stringToTerraform(struct!.codegurureviewer),
    codepipeline: cdktf.stringToTerraform(struct!.codepipeline),
    codestarconnections: cdktf.stringToTerraform(struct!.codestarconnections),
    codestarnotifications: cdktf.stringToTerraform(struct!.codestarnotifications),
    cognitoidentity: cdktf.stringToTerraform(struct!.cognitoidentity),
    cognitoidentityprovider: cdktf.stringToTerraform(struct!.cognitoidentityprovider),
    cognitoidp: cdktf.stringToTerraform(struct!.cognitoidp),
    comprehend: cdktf.stringToTerraform(struct!.comprehend),
    computeoptimizer: cdktf.stringToTerraform(struct!.computeoptimizer),
    config: cdktf.stringToTerraform(struct!.config),
    configservice: cdktf.stringToTerraform(struct!.configservice),
    connect: cdktf.stringToTerraform(struct!.connect),
    connectcases: cdktf.stringToTerraform(struct!.connectcases),
    controltower: cdktf.stringToTerraform(struct!.controltower),
    costandusagereportservice: cdktf.stringToTerraform(struct!.costandusagereportservice),
    costexplorer: cdktf.stringToTerraform(struct!.costexplorer),
    costoptimizationhub: cdktf.stringToTerraform(struct!.costoptimizationhub),
    cur: cdktf.stringToTerraform(struct!.cur),
    customerprofiles: cdktf.stringToTerraform(struct!.customerprofiles),
    databasemigration: cdktf.stringToTerraform(struct!.databasemigration),
    databasemigrationservice: cdktf.stringToTerraform(struct!.databasemigrationservice),
    databrew: cdktf.stringToTerraform(struct!.databrew),
    dataexchange: cdktf.stringToTerraform(struct!.dataexchange),
    datapipeline: cdktf.stringToTerraform(struct!.datapipeline),
    datasync: cdktf.stringToTerraform(struct!.datasync),
    datazone: cdktf.stringToTerraform(struct!.datazone),
    dax: cdktf.stringToTerraform(struct!.dax),
    deploy: cdktf.stringToTerraform(struct!.deploy),
    detective: cdktf.stringToTerraform(struct!.detective),
    devicefarm: cdktf.stringToTerraform(struct!.devicefarm),
    devopsguru: cdktf.stringToTerraform(struct!.devopsguru),
    directconnect: cdktf.stringToTerraform(struct!.directconnect),
    directoryservice: cdktf.stringToTerraform(struct!.directoryservice),
    dlm: cdktf.stringToTerraform(struct!.dlm),
    dms: cdktf.stringToTerraform(struct!.dms),
    docdb: cdktf.stringToTerraform(struct!.docdb),
    docdbelastic: cdktf.stringToTerraform(struct!.docdbelastic),
    drs: cdktf.stringToTerraform(struct!.drs),
    ds: cdktf.stringToTerraform(struct!.ds),
    dynamodb: cdktf.stringToTerraform(struct!.dynamodb),
    ec2: cdktf.stringToTerraform(struct!.ec2),
    ecr: cdktf.stringToTerraform(struct!.ecr),
    ecrpublic: cdktf.stringToTerraform(struct!.ecrpublic),
    ecs: cdktf.stringToTerraform(struct!.ecs),
    efs: cdktf.stringToTerraform(struct!.efs),
    eks: cdktf.stringToTerraform(struct!.eks),
    elasticache: cdktf.stringToTerraform(struct!.elasticache),
    elasticbeanstalk: cdktf.stringToTerraform(struct!.elasticbeanstalk),
    elasticloadbalancing: cdktf.stringToTerraform(struct!.elasticloadbalancing),
    elasticloadbalancingv2: cdktf.stringToTerraform(struct!.elasticloadbalancingv2),
    elasticsearch: cdktf.stringToTerraform(struct!.elasticsearch),
    elasticsearchservice: cdktf.stringToTerraform(struct!.elasticsearchservice),
    elastictranscoder: cdktf.stringToTerraform(struct!.elastictranscoder),
    elb: cdktf.stringToTerraform(struct!.elb),
    elbv2: cdktf.stringToTerraform(struct!.elbv2),
    emr: cdktf.stringToTerraform(struct!.emr),
    emrcontainers: cdktf.stringToTerraform(struct!.emrcontainers),
    emrserverless: cdktf.stringToTerraform(struct!.emrserverless),
    es: cdktf.stringToTerraform(struct!.es),
    eventbridge: cdktf.stringToTerraform(struct!.eventbridge),
    events: cdktf.stringToTerraform(struct!.events),
    evidently: cdktf.stringToTerraform(struct!.evidently),
    finspace: cdktf.stringToTerraform(struct!.finspace),
    firehose: cdktf.stringToTerraform(struct!.firehose),
    fis: cdktf.stringToTerraform(struct!.fis),
    fms: cdktf.stringToTerraform(struct!.fms),
    fsx: cdktf.stringToTerraform(struct!.fsx),
    gamelift: cdktf.stringToTerraform(struct!.gamelift),
    glacier: cdktf.stringToTerraform(struct!.glacier),
    globalaccelerator: cdktf.stringToTerraform(struct!.globalaccelerator),
    glue: cdktf.stringToTerraform(struct!.glue),
    gluedatabrew: cdktf.stringToTerraform(struct!.gluedatabrew),
    grafana: cdktf.stringToTerraform(struct!.grafana),
    greengrass: cdktf.stringToTerraform(struct!.greengrass),
    groundstation: cdktf.stringToTerraform(struct!.groundstation),
    guardduty: cdktf.stringToTerraform(struct!.guardduty),
    healthlake: cdktf.stringToTerraform(struct!.healthlake),
    iam: cdktf.stringToTerraform(struct!.iam),
    identitystore: cdktf.stringToTerraform(struct!.identitystore),
    imagebuilder: cdktf.stringToTerraform(struct!.imagebuilder),
    inspector: cdktf.stringToTerraform(struct!.inspector),
    inspector2: cdktf.stringToTerraform(struct!.inspector2),
    inspectorv2: cdktf.stringToTerraform(struct!.inspectorv2),
    internetmonitor: cdktf.stringToTerraform(struct!.internetmonitor),
    iot: cdktf.stringToTerraform(struct!.iot),
    iotanalytics: cdktf.stringToTerraform(struct!.iotanalytics),
    iotevents: cdktf.stringToTerraform(struct!.iotevents),
    ivs: cdktf.stringToTerraform(struct!.ivs),
    ivschat: cdktf.stringToTerraform(struct!.ivschat),
    kafka: cdktf.stringToTerraform(struct!.kafka),
    kafkaconnect: cdktf.stringToTerraform(struct!.kafkaconnect),
    kendra: cdktf.stringToTerraform(struct!.kendra),
    keyspaces: cdktf.stringToTerraform(struct!.keyspaces),
    kinesis: cdktf.stringToTerraform(struct!.kinesis),
    kinesisanalytics: cdktf.stringToTerraform(struct!.kinesisanalytics),
    kinesisanalyticsv2: cdktf.stringToTerraform(struct!.kinesisanalyticsv2),
    kinesisvideo: cdktf.stringToTerraform(struct!.kinesisvideo),
    kms: cdktf.stringToTerraform(struct!.kms),
    lakeformation: cdktf.stringToTerraform(struct!.lakeformation),
    lambda: cdktf.stringToTerraform(struct!.lambda),
    launchwizard: cdktf.stringToTerraform(struct!.launchwizard),
    lex: cdktf.stringToTerraform(struct!.lex),
    lexmodelbuilding: cdktf.stringToTerraform(struct!.lexmodelbuilding),
    lexmodelbuildingservice: cdktf.stringToTerraform(struct!.lexmodelbuildingservice),
    lexmodels: cdktf.stringToTerraform(struct!.lexmodels),
    lexmodelsv2: cdktf.stringToTerraform(struct!.lexmodelsv2),
    lexv2models: cdktf.stringToTerraform(struct!.lexv2Models),
    licensemanager: cdktf.stringToTerraform(struct!.licensemanager),
    lightsail: cdktf.stringToTerraform(struct!.lightsail),
    location: cdktf.stringToTerraform(struct!.location),
    locationservice: cdktf.stringToTerraform(struct!.locationservice),
    logs: cdktf.stringToTerraform(struct!.logs),
    lookoutmetrics: cdktf.stringToTerraform(struct!.lookoutmetrics),
    m2: cdktf.stringToTerraform(struct!.m2),
    macie2: cdktf.stringToTerraform(struct!.macie2),
    managedgrafana: cdktf.stringToTerraform(struct!.managedgrafana),
    mediaconnect: cdktf.stringToTerraform(struct!.mediaconnect),
    mediaconvert: cdktf.stringToTerraform(struct!.mediaconvert),
    medialive: cdktf.stringToTerraform(struct!.medialive),
    mediapackage: cdktf.stringToTerraform(struct!.mediapackage),
    mediapackagev2: cdktf.stringToTerraform(struct!.mediapackagev2),
    mediastore: cdktf.stringToTerraform(struct!.mediastore),
    memorydb: cdktf.stringToTerraform(struct!.memorydb),
    mq: cdktf.stringToTerraform(struct!.mq),
    msk: cdktf.stringToTerraform(struct!.msk),
    mwaa: cdktf.stringToTerraform(struct!.mwaa),
    neptune: cdktf.stringToTerraform(struct!.neptune),
    neptunegraph: cdktf.stringToTerraform(struct!.neptunegraph),
    networkfirewall: cdktf.stringToTerraform(struct!.networkfirewall),
    networkmanager: cdktf.stringToTerraform(struct!.networkmanager),
    networkmonitor: cdktf.stringToTerraform(struct!.networkmonitor),
    oam: cdktf.stringToTerraform(struct!.oam),
    opensearch: cdktf.stringToTerraform(struct!.opensearch),
    opensearchingestion: cdktf.stringToTerraform(struct!.opensearchingestion),
    opensearchserverless: cdktf.stringToTerraform(struct!.opensearchserverless),
    opensearchservice: cdktf.stringToTerraform(struct!.opensearchservice),
    opsworks: cdktf.stringToTerraform(struct!.opsworks),
    organizations: cdktf.stringToTerraform(struct!.organizations),
    osis: cdktf.stringToTerraform(struct!.osis),
    outposts: cdktf.stringToTerraform(struct!.outposts),
    paymentcryptography: cdktf.stringToTerraform(struct!.paymentcryptography),
    pcaconnectorad: cdktf.stringToTerraform(struct!.pcaconnectorad),
    pcs: cdktf.stringToTerraform(struct!.pcs),
    pinpoint: cdktf.stringToTerraform(struct!.pinpoint),
    pinpointsmsvoicev2: cdktf.stringToTerraform(struct!.pinpointsmsvoicev2),
    pipes: cdktf.stringToTerraform(struct!.pipes),
    polly: cdktf.stringToTerraform(struct!.polly),
    pricing: cdktf.stringToTerraform(struct!.pricing),
    prometheus: cdktf.stringToTerraform(struct!.prometheus),
    prometheusservice: cdktf.stringToTerraform(struct!.prometheusservice),
    qbusiness: cdktf.stringToTerraform(struct!.qbusiness),
    qldb: cdktf.stringToTerraform(struct!.qldb),
    quicksight: cdktf.stringToTerraform(struct!.quicksight),
    ram: cdktf.stringToTerraform(struct!.ram),
    rbin: cdktf.stringToTerraform(struct!.rbin),
    rds: cdktf.stringToTerraform(struct!.rds),
    recyclebin: cdktf.stringToTerraform(struct!.recyclebin),
    redshift: cdktf.stringToTerraform(struct!.redshift),
    redshiftdata: cdktf.stringToTerraform(struct!.redshiftdata),
    redshiftdataapiservice: cdktf.stringToTerraform(struct!.redshiftdataapiservice),
    redshiftserverless: cdktf.stringToTerraform(struct!.redshiftserverless),
    rekognition: cdktf.stringToTerraform(struct!.rekognition),
    resiliencehub: cdktf.stringToTerraform(struct!.resiliencehub),
    resourceexplorer2: cdktf.stringToTerraform(struct!.resourceexplorer2),
    resourcegroups: cdktf.stringToTerraform(struct!.resourcegroups),
    resourcegroupstagging: cdktf.stringToTerraform(struct!.resourcegroupstagging),
    resourcegroupstaggingapi: cdktf.stringToTerraform(struct!.resourcegroupstaggingapi),
    rolesanywhere: cdktf.stringToTerraform(struct!.rolesanywhere),
    route53: cdktf.stringToTerraform(struct!.route53),
    route53domains: cdktf.stringToTerraform(struct!.route53Domains),
    route53profiles: cdktf.stringToTerraform(struct!.route53Profiles),
    route53recoverycontrolconfig: cdktf.stringToTerraform(struct!.route53Recoverycontrolconfig),
    route53recoveryreadiness: cdktf.stringToTerraform(struct!.route53Recoveryreadiness),
    route53resolver: cdktf.stringToTerraform(struct!.route53Resolver),
    rum: cdktf.stringToTerraform(struct!.rum),
    s3: cdktf.stringToTerraform(struct!.s3),
    s3api: cdktf.stringToTerraform(struct!.s3Api),
    s3control: cdktf.stringToTerraform(struct!.s3Control),
    s3outposts: cdktf.stringToTerraform(struct!.s3Outposts),
    sagemaker: cdktf.stringToTerraform(struct!.sagemaker),
    scheduler: cdktf.stringToTerraform(struct!.scheduler),
    schemas: cdktf.stringToTerraform(struct!.schemas),
    sdb: cdktf.stringToTerraform(struct!.sdb),
    secretsmanager: cdktf.stringToTerraform(struct!.secretsmanager),
    securityhub: cdktf.stringToTerraform(struct!.securityhub),
    securitylake: cdktf.stringToTerraform(struct!.securitylake),
    serverlessapplicationrepository: cdktf.stringToTerraform(struct!.serverlessapplicationrepository),
    serverlessapprepo: cdktf.stringToTerraform(struct!.serverlessapprepo),
    serverlessrepo: cdktf.stringToTerraform(struct!.serverlessrepo),
    servicecatalog: cdktf.stringToTerraform(struct!.servicecatalog),
    servicecatalogappregistry: cdktf.stringToTerraform(struct!.servicecatalogappregistry),
    servicediscovery: cdktf.stringToTerraform(struct!.servicediscovery),
    servicequotas: cdktf.stringToTerraform(struct!.servicequotas),
    ses: cdktf.stringToTerraform(struct!.ses),
    sesv2: cdktf.stringToTerraform(struct!.sesv2),
    sfn: cdktf.stringToTerraform(struct!.sfn),
    shield: cdktf.stringToTerraform(struct!.shield),
    signer: cdktf.stringToTerraform(struct!.signer),
    simpledb: cdktf.stringToTerraform(struct!.simpledb),
    sns: cdktf.stringToTerraform(struct!.sns),
    sqs: cdktf.stringToTerraform(struct!.sqs),
    ssm: cdktf.stringToTerraform(struct!.ssm),
    ssmcontacts: cdktf.stringToTerraform(struct!.ssmcontacts),
    ssmincidents: cdktf.stringToTerraform(struct!.ssmincidents),
    ssmquicksetup: cdktf.stringToTerraform(struct!.ssmquicksetup),
    ssmsap: cdktf.stringToTerraform(struct!.ssmsap),
    sso: cdktf.stringToTerraform(struct!.sso),
    ssoadmin: cdktf.stringToTerraform(struct!.ssoadmin),
    stepfunctions: cdktf.stringToTerraform(struct!.stepfunctions),
    storagegateway: cdktf.stringToTerraform(struct!.storagegateway),
    sts: cdktf.stringToTerraform(struct!.sts),
    swf: cdktf.stringToTerraform(struct!.swf),
    synthetics: cdktf.stringToTerraform(struct!.synthetics),
    taxsettings: cdktf.stringToTerraform(struct!.taxsettings),
    timestreaminfluxdb: cdktf.stringToTerraform(struct!.timestreaminfluxdb),
    timestreamwrite: cdktf.stringToTerraform(struct!.timestreamwrite),
    transcribe: cdktf.stringToTerraform(struct!.transcribe),
    transcribeservice: cdktf.stringToTerraform(struct!.transcribeservice),
    transfer: cdktf.stringToTerraform(struct!.transfer),
    verifiedpermissions: cdktf.stringToTerraform(struct!.verifiedpermissions),
    vpclattice: cdktf.stringToTerraform(struct!.vpclattice),
    waf: cdktf.stringToTerraform(struct!.waf),
    wafregional: cdktf.stringToTerraform(struct!.wafregional),
    wafv2: cdktf.stringToTerraform(struct!.wafv2),
    wellarchitected: cdktf.stringToTerraform(struct!.wellarchitected),
    worklink: cdktf.stringToTerraform(struct!.worklink),
    workspaces: cdktf.stringToTerraform(struct!.workspaces),
    workspacesweb: cdktf.stringToTerraform(struct!.workspacesweb),
    xray: cdktf.stringToTerraform(struct!.xray),
  }
}


export function awsProviderEndpointsToHclTerraform(struct?: AwsProviderEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accessanalyzer: {
      value: cdktf.stringToHclTerraform(struct!.accessanalyzer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account: {
      value: cdktf.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acm: {
      value: cdktf.stringToHclTerraform(struct!.acm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acmpca: {
      value: cdktf.stringToHclTerraform(struct!.acmpca),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    amg: {
      value: cdktf.stringToHclTerraform(struct!.amg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    amp: {
      value: cdktf.stringToHclTerraform(struct!.amp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    amplify: {
      value: cdktf.stringToHclTerraform(struct!.amplify),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apigateway: {
      value: cdktf.stringToHclTerraform(struct!.apigateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apigatewayv2: {
      value: cdktf.stringToHclTerraform(struct!.apigatewayv2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    appautoscaling: {
      value: cdktf.stringToHclTerraform(struct!.appautoscaling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    appconfig: {
      value: cdktf.stringToHclTerraform(struct!.appconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    appfabric: {
      value: cdktf.stringToHclTerraform(struct!.appfabric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    appflow: {
      value: cdktf.stringToHclTerraform(struct!.appflow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    appintegrations: {
      value: cdktf.stringToHclTerraform(struct!.appintegrations),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    appintegrationsservice: {
      value: cdktf.stringToHclTerraform(struct!.appintegrationsservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    applicationautoscaling: {
      value: cdktf.stringToHclTerraform(struct!.applicationautoscaling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    applicationinsights: {
      value: cdktf.stringToHclTerraform(struct!.applicationinsights),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    applicationsignals: {
      value: cdktf.stringToHclTerraform(struct!.applicationsignals),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    appmesh: {
      value: cdktf.stringToHclTerraform(struct!.appmesh),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    appregistry: {
      value: cdktf.stringToHclTerraform(struct!.appregistry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apprunner: {
      value: cdktf.stringToHclTerraform(struct!.apprunner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    appstream: {
      value: cdktf.stringToHclTerraform(struct!.appstream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    appsync: {
      value: cdktf.stringToHclTerraform(struct!.appsync),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    athena: {
      value: cdktf.stringToHclTerraform(struct!.athena),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auditmanager: {
      value: cdktf.stringToHclTerraform(struct!.auditmanager),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autoscaling: {
      value: cdktf.stringToHclTerraform(struct!.autoscaling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autoscalingplans: {
      value: cdktf.stringToHclTerraform(struct!.autoscalingplans),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup: {
      value: cdktf.stringToHclTerraform(struct!.backup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    batch: {
      value: cdktf.stringToHclTerraform(struct!.batch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bcmdataexports: {
      value: cdktf.stringToHclTerraform(struct!.bcmdataexports),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    beanstalk: {
      value: cdktf.stringToHclTerraform(struct!.beanstalk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bedrock: {
      value: cdktf.stringToHclTerraform(struct!.bedrock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bedrockagent: {
      value: cdktf.stringToHclTerraform(struct!.bedrockagent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    budgets: {
      value: cdktf.stringToHclTerraform(struct!.budgets),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ce: {
      value: cdktf.stringToHclTerraform(struct!.ce),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chatbot: {
      value: cdktf.stringToHclTerraform(struct!.chatbot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chime: {
      value: cdktf.stringToHclTerraform(struct!.chime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chimesdkmediapipelines: {
      value: cdktf.stringToHclTerraform(struct!.chimesdkmediapipelines),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chimesdkvoice: {
      value: cdktf.stringToHclTerraform(struct!.chimesdkvoice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cleanrooms: {
      value: cdktf.stringToHclTerraform(struct!.cleanrooms),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud9: {
      value: cdktf.stringToHclTerraform(struct!.cloud9),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudcontrol: {
      value: cdktf.stringToHclTerraform(struct!.cloudcontrol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudcontrolapi: {
      value: cdktf.stringToHclTerraform(struct!.cloudcontrolapi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudformation: {
      value: cdktf.stringToHclTerraform(struct!.cloudformation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudfront: {
      value: cdktf.stringToHclTerraform(struct!.cloudfront),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudfrontkeyvaluestore: {
      value: cdktf.stringToHclTerraform(struct!.cloudfrontkeyvaluestore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudhsm: {
      value: cdktf.stringToHclTerraform(struct!.cloudhsm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudhsmv2: {
      value: cdktf.stringToHclTerraform(struct!.cloudhsmv2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudsearch: {
      value: cdktf.stringToHclTerraform(struct!.cloudsearch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudtrail: {
      value: cdktf.stringToHclTerraform(struct!.cloudtrail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch: {
      value: cdktf.stringToHclTerraform(struct!.cloudwatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatchevents: {
      value: cdktf.stringToHclTerraform(struct!.cloudwatchevents),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatchevidently: {
      value: cdktf.stringToHclTerraform(struct!.cloudwatchevidently),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatchlog: {
      value: cdktf.stringToHclTerraform(struct!.cloudwatchlog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatchlogs: {
      value: cdktf.stringToHclTerraform(struct!.cloudwatchlogs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatchobservabilityaccessmanager: {
      value: cdktf.stringToHclTerraform(struct!.cloudwatchobservabilityaccessmanager),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatchrum: {
      value: cdktf.stringToHclTerraform(struct!.cloudwatchrum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    codeartifact: {
      value: cdktf.stringToHclTerraform(struct!.codeartifact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    codebuild: {
      value: cdktf.stringToHclTerraform(struct!.codebuild),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    codecatalyst: {
      value: cdktf.stringToHclTerraform(struct!.codecatalyst),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    codecommit: {
      value: cdktf.stringToHclTerraform(struct!.codecommit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    codeconnections: {
      value: cdktf.stringToHclTerraform(struct!.codeconnections),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    codedeploy: {
      value: cdktf.stringToHclTerraform(struct!.codedeploy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    codeguruprofiler: {
      value: cdktf.stringToHclTerraform(struct!.codeguruprofiler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    codegurureviewer: {
      value: cdktf.stringToHclTerraform(struct!.codegurureviewer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    codepipeline: {
      value: cdktf.stringToHclTerraform(struct!.codepipeline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    codestarconnections: {
      value: cdktf.stringToHclTerraform(struct!.codestarconnections),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    codestarnotifications: {
      value: cdktf.stringToHclTerraform(struct!.codestarnotifications),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cognitoidentity: {
      value: cdktf.stringToHclTerraform(struct!.cognitoidentity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cognitoidentityprovider: {
      value: cdktf.stringToHclTerraform(struct!.cognitoidentityprovider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cognitoidp: {
      value: cdktf.stringToHclTerraform(struct!.cognitoidp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comprehend: {
      value: cdktf.stringToHclTerraform(struct!.comprehend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    computeoptimizer: {
      value: cdktf.stringToHclTerraform(struct!.computeoptimizer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configservice: {
      value: cdktf.stringToHclTerraform(struct!.configservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connect: {
      value: cdktf.stringToHclTerraform(struct!.connect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connectcases: {
      value: cdktf.stringToHclTerraform(struct!.connectcases),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controltower: {
      value: cdktf.stringToHclTerraform(struct!.controltower),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    costandusagereportservice: {
      value: cdktf.stringToHclTerraform(struct!.costandusagereportservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    costexplorer: {
      value: cdktf.stringToHclTerraform(struct!.costexplorer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    costoptimizationhub: {
      value: cdktf.stringToHclTerraform(struct!.costoptimizationhub),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cur: {
      value: cdktf.stringToHclTerraform(struct!.cur),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customerprofiles: {
      value: cdktf.stringToHclTerraform(struct!.customerprofiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    databasemigration: {
      value: cdktf.stringToHclTerraform(struct!.databasemigration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    databasemigrationservice: {
      value: cdktf.stringToHclTerraform(struct!.databasemigrationservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    databrew: {
      value: cdktf.stringToHclTerraform(struct!.databrew),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataexchange: {
      value: cdktf.stringToHclTerraform(struct!.dataexchange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datapipeline: {
      value: cdktf.stringToHclTerraform(struct!.datapipeline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datasync: {
      value: cdktf.stringToHclTerraform(struct!.datasync),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datazone: {
      value: cdktf.stringToHclTerraform(struct!.datazone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dax: {
      value: cdktf.stringToHclTerraform(struct!.dax),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deploy: {
      value: cdktf.stringToHclTerraform(struct!.deploy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    detective: {
      value: cdktf.stringToHclTerraform(struct!.detective),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    devicefarm: {
      value: cdktf.stringToHclTerraform(struct!.devicefarm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    devopsguru: {
      value: cdktf.stringToHclTerraform(struct!.devopsguru),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directconnect: {
      value: cdktf.stringToHclTerraform(struct!.directconnect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directoryservice: {
      value: cdktf.stringToHclTerraform(struct!.directoryservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dlm: {
      value: cdktf.stringToHclTerraform(struct!.dlm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dms: {
      value: cdktf.stringToHclTerraform(struct!.dms),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    docdb: {
      value: cdktf.stringToHclTerraform(struct!.docdb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    docdbelastic: {
      value: cdktf.stringToHclTerraform(struct!.docdbelastic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drs: {
      value: cdktf.stringToHclTerraform(struct!.drs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ds: {
      value: cdktf.stringToHclTerraform(struct!.ds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamodb: {
      value: cdktf.stringToHclTerraform(struct!.dynamodb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ec2: {
      value: cdktf.stringToHclTerraform(struct!.ec2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ecr: {
      value: cdktf.stringToHclTerraform(struct!.ecr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ecrpublic: {
      value: cdktf.stringToHclTerraform(struct!.ecrpublic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ecs: {
      value: cdktf.stringToHclTerraform(struct!.ecs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    efs: {
      value: cdktf.stringToHclTerraform(struct!.efs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eks: {
      value: cdktf.stringToHclTerraform(struct!.eks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elasticache: {
      value: cdktf.stringToHclTerraform(struct!.elasticache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elasticbeanstalk: {
      value: cdktf.stringToHclTerraform(struct!.elasticbeanstalk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elasticloadbalancing: {
      value: cdktf.stringToHclTerraform(struct!.elasticloadbalancing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elasticloadbalancingv2: {
      value: cdktf.stringToHclTerraform(struct!.elasticloadbalancingv2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elasticsearch: {
      value: cdktf.stringToHclTerraform(struct!.elasticsearch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elasticsearchservice: {
      value: cdktf.stringToHclTerraform(struct!.elasticsearchservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elastictranscoder: {
      value: cdktf.stringToHclTerraform(struct!.elastictranscoder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elb: {
      value: cdktf.stringToHclTerraform(struct!.elb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elbv2: {
      value: cdktf.stringToHclTerraform(struct!.elbv2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    emr: {
      value: cdktf.stringToHclTerraform(struct!.emr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    emrcontainers: {
      value: cdktf.stringToHclTerraform(struct!.emrcontainers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    emrserverless: {
      value: cdktf.stringToHclTerraform(struct!.emrserverless),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    es: {
      value: cdktf.stringToHclTerraform(struct!.es),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eventbridge: {
      value: cdktf.stringToHclTerraform(struct!.eventbridge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    events: {
      value: cdktf.stringToHclTerraform(struct!.events),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evidently: {
      value: cdktf.stringToHclTerraform(struct!.evidently),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    finspace: {
      value: cdktf.stringToHclTerraform(struct!.finspace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    firehose: {
      value: cdktf.stringToHclTerraform(struct!.firehose),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fis: {
      value: cdktf.stringToHclTerraform(struct!.fis),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fms: {
      value: cdktf.stringToHclTerraform(struct!.fms),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fsx: {
      value: cdktf.stringToHclTerraform(struct!.fsx),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gamelift: {
      value: cdktf.stringToHclTerraform(struct!.gamelift),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glacier: {
      value: cdktf.stringToHclTerraform(struct!.glacier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    globalaccelerator: {
      value: cdktf.stringToHclTerraform(struct!.globalaccelerator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glue: {
      value: cdktf.stringToHclTerraform(struct!.glue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gluedatabrew: {
      value: cdktf.stringToHclTerraform(struct!.gluedatabrew),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grafana: {
      value: cdktf.stringToHclTerraform(struct!.grafana),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    greengrass: {
      value: cdktf.stringToHclTerraform(struct!.greengrass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    groundstation: {
      value: cdktf.stringToHclTerraform(struct!.groundstation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guardduty: {
      value: cdktf.stringToHclTerraform(struct!.guardduty),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    healthlake: {
      value: cdktf.stringToHclTerraform(struct!.healthlake),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iam: {
      value: cdktf.stringToHclTerraform(struct!.iam),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identitystore: {
      value: cdktf.stringToHclTerraform(struct!.identitystore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imagebuilder: {
      value: cdktf.stringToHclTerraform(struct!.imagebuilder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inspector: {
      value: cdktf.stringToHclTerraform(struct!.inspector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inspector2: {
      value: cdktf.stringToHclTerraform(struct!.inspector2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inspectorv2: {
      value: cdktf.stringToHclTerraform(struct!.inspectorv2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internetmonitor: {
      value: cdktf.stringToHclTerraform(struct!.internetmonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iot: {
      value: cdktf.stringToHclTerraform(struct!.iot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iotanalytics: {
      value: cdktf.stringToHclTerraform(struct!.iotanalytics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iotevents: {
      value: cdktf.stringToHclTerraform(struct!.iotevents),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ivs: {
      value: cdktf.stringToHclTerraform(struct!.ivs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ivschat: {
      value: cdktf.stringToHclTerraform(struct!.ivschat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kafka: {
      value: cdktf.stringToHclTerraform(struct!.kafka),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kafkaconnect: {
      value: cdktf.stringToHclTerraform(struct!.kafkaconnect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kendra: {
      value: cdktf.stringToHclTerraform(struct!.kendra),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keyspaces: {
      value: cdktf.stringToHclTerraform(struct!.keyspaces),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kinesis: {
      value: cdktf.stringToHclTerraform(struct!.kinesis),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kinesisanalytics: {
      value: cdktf.stringToHclTerraform(struct!.kinesisanalytics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kinesisanalyticsv2: {
      value: cdktf.stringToHclTerraform(struct!.kinesisanalyticsv2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kinesisvideo: {
      value: cdktf.stringToHclTerraform(struct!.kinesisvideo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms: {
      value: cdktf.stringToHclTerraform(struct!.kms),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lakeformation: {
      value: cdktf.stringToHclTerraform(struct!.lakeformation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lambda: {
      value: cdktf.stringToHclTerraform(struct!.lambda),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    launchwizard: {
      value: cdktf.stringToHclTerraform(struct!.launchwizard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lex: {
      value: cdktf.stringToHclTerraform(struct!.lex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lexmodelbuilding: {
      value: cdktf.stringToHclTerraform(struct!.lexmodelbuilding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lexmodelbuildingservice: {
      value: cdktf.stringToHclTerraform(struct!.lexmodelbuildingservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lexmodels: {
      value: cdktf.stringToHclTerraform(struct!.lexmodels),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lexmodelsv2: {
      value: cdktf.stringToHclTerraform(struct!.lexmodelsv2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lexv2models: {
      value: cdktf.stringToHclTerraform(struct!.lexv2Models),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    licensemanager: {
      value: cdktf.stringToHclTerraform(struct!.licensemanager),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lightsail: {
      value: cdktf.stringToHclTerraform(struct!.lightsail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locationservice: {
      value: cdktf.stringToHclTerraform(struct!.locationservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logs: {
      value: cdktf.stringToHclTerraform(struct!.logs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lookoutmetrics: {
      value: cdktf.stringToHclTerraform(struct!.lookoutmetrics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    m2: {
      value: cdktf.stringToHclTerraform(struct!.m2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    macie2: {
      value: cdktf.stringToHclTerraform(struct!.macie2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managedgrafana: {
      value: cdktf.stringToHclTerraform(struct!.managedgrafana),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mediaconnect: {
      value: cdktf.stringToHclTerraform(struct!.mediaconnect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mediaconvert: {
      value: cdktf.stringToHclTerraform(struct!.mediaconvert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    medialive: {
      value: cdktf.stringToHclTerraform(struct!.medialive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mediapackage: {
      value: cdktf.stringToHclTerraform(struct!.mediapackage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mediapackagev2: {
      value: cdktf.stringToHclTerraform(struct!.mediapackagev2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mediastore: {
      value: cdktf.stringToHclTerraform(struct!.mediastore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memorydb: {
      value: cdktf.stringToHclTerraform(struct!.memorydb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mq: {
      value: cdktf.stringToHclTerraform(struct!.mq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    msk: {
      value: cdktf.stringToHclTerraform(struct!.msk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mwaa: {
      value: cdktf.stringToHclTerraform(struct!.mwaa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neptune: {
      value: cdktf.stringToHclTerraform(struct!.neptune),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neptunegraph: {
      value: cdktf.stringToHclTerraform(struct!.neptunegraph),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    networkfirewall: {
      value: cdktf.stringToHclTerraform(struct!.networkfirewall),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    networkmanager: {
      value: cdktf.stringToHclTerraform(struct!.networkmanager),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    networkmonitor: {
      value: cdktf.stringToHclTerraform(struct!.networkmonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oam: {
      value: cdktf.stringToHclTerraform(struct!.oam),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opensearch: {
      value: cdktf.stringToHclTerraform(struct!.opensearch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opensearchingestion: {
      value: cdktf.stringToHclTerraform(struct!.opensearchingestion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opensearchserverless: {
      value: cdktf.stringToHclTerraform(struct!.opensearchserverless),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opensearchservice: {
      value: cdktf.stringToHclTerraform(struct!.opensearchservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opsworks: {
      value: cdktf.stringToHclTerraform(struct!.opsworks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organizations: {
      value: cdktf.stringToHclTerraform(struct!.organizations),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    osis: {
      value: cdktf.stringToHclTerraform(struct!.osis),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outposts: {
      value: cdktf.stringToHclTerraform(struct!.outposts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    paymentcryptography: {
      value: cdktf.stringToHclTerraform(struct!.paymentcryptography),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pcaconnectorad: {
      value: cdktf.stringToHclTerraform(struct!.pcaconnectorad),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pcs: {
      value: cdktf.stringToHclTerraform(struct!.pcs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pinpoint: {
      value: cdktf.stringToHclTerraform(struct!.pinpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pinpointsmsvoicev2: {
      value: cdktf.stringToHclTerraform(struct!.pinpointsmsvoicev2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipes: {
      value: cdktf.stringToHclTerraform(struct!.pipes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    polly: {
      value: cdktf.stringToHclTerraform(struct!.polly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pricing: {
      value: cdktf.stringToHclTerraform(struct!.pricing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prometheus: {
      value: cdktf.stringToHclTerraform(struct!.prometheus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prometheusservice: {
      value: cdktf.stringToHclTerraform(struct!.prometheusservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qbusiness: {
      value: cdktf.stringToHclTerraform(struct!.qbusiness),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qldb: {
      value: cdktf.stringToHclTerraform(struct!.qldb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quicksight: {
      value: cdktf.stringToHclTerraform(struct!.quicksight),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ram: {
      value: cdktf.stringToHclTerraform(struct!.ram),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rbin: {
      value: cdktf.stringToHclTerraform(struct!.rbin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rds: {
      value: cdktf.stringToHclTerraform(struct!.rds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recyclebin: {
      value: cdktf.stringToHclTerraform(struct!.recyclebin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redshift: {
      value: cdktf.stringToHclTerraform(struct!.redshift),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redshiftdata: {
      value: cdktf.stringToHclTerraform(struct!.redshiftdata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redshiftdataapiservice: {
      value: cdktf.stringToHclTerraform(struct!.redshiftdataapiservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redshiftserverless: {
      value: cdktf.stringToHclTerraform(struct!.redshiftserverless),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rekognition: {
      value: cdktf.stringToHclTerraform(struct!.rekognition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resiliencehub: {
      value: cdktf.stringToHclTerraform(struct!.resiliencehub),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resourceexplorer2: {
      value: cdktf.stringToHclTerraform(struct!.resourceexplorer2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resourcegroups: {
      value: cdktf.stringToHclTerraform(struct!.resourcegroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resourcegroupstagging: {
      value: cdktf.stringToHclTerraform(struct!.resourcegroupstagging),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resourcegroupstaggingapi: {
      value: cdktf.stringToHclTerraform(struct!.resourcegroupstaggingapi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rolesanywhere: {
      value: cdktf.stringToHclTerraform(struct!.rolesanywhere),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route53: {
      value: cdktf.stringToHclTerraform(struct!.route53),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route53domains: {
      value: cdktf.stringToHclTerraform(struct!.route53Domains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route53profiles: {
      value: cdktf.stringToHclTerraform(struct!.route53Profiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route53recoverycontrolconfig: {
      value: cdktf.stringToHclTerraform(struct!.route53Recoverycontrolconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route53recoveryreadiness: {
      value: cdktf.stringToHclTerraform(struct!.route53Recoveryreadiness),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route53resolver: {
      value: cdktf.stringToHclTerraform(struct!.route53Resolver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rum: {
      value: cdktf.stringToHclTerraform(struct!.rum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3: {
      value: cdktf.stringToHclTerraform(struct!.s3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3api: {
      value: cdktf.stringToHclTerraform(struct!.s3Api),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3control: {
      value: cdktf.stringToHclTerraform(struct!.s3Control),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3outposts: {
      value: cdktf.stringToHclTerraform(struct!.s3Outposts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker: {
      value: cdktf.stringToHclTerraform(struct!.sagemaker),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduler: {
      value: cdktf.stringToHclTerraform(struct!.scheduler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schemas: {
      value: cdktf.stringToHclTerraform(struct!.schemas),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdb: {
      value: cdktf.stringToHclTerraform(struct!.sdb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secretsmanager: {
      value: cdktf.stringToHclTerraform(struct!.secretsmanager),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    securityhub: {
      value: cdktf.stringToHclTerraform(struct!.securityhub),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    securitylake: {
      value: cdktf.stringToHclTerraform(struct!.securitylake),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serverlessapplicationrepository: {
      value: cdktf.stringToHclTerraform(struct!.serverlessapplicationrepository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serverlessapprepo: {
      value: cdktf.stringToHclTerraform(struct!.serverlessapprepo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serverlessrepo: {
      value: cdktf.stringToHclTerraform(struct!.serverlessrepo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servicecatalog: {
      value: cdktf.stringToHclTerraform(struct!.servicecatalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servicecatalogappregistry: {
      value: cdktf.stringToHclTerraform(struct!.servicecatalogappregistry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servicediscovery: {
      value: cdktf.stringToHclTerraform(struct!.servicediscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servicequotas: {
      value: cdktf.stringToHclTerraform(struct!.servicequotas),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ses: {
      value: cdktf.stringToHclTerraform(struct!.ses),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sesv2: {
      value: cdktf.stringToHclTerraform(struct!.sesv2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sfn: {
      value: cdktf.stringToHclTerraform(struct!.sfn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shield: {
      value: cdktf.stringToHclTerraform(struct!.shield),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signer: {
      value: cdktf.stringToHclTerraform(struct!.signer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    simpledb: {
      value: cdktf.stringToHclTerraform(struct!.simpledb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sns: {
      value: cdktf.stringToHclTerraform(struct!.sns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sqs: {
      value: cdktf.stringToHclTerraform(struct!.sqs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssm: {
      value: cdktf.stringToHclTerraform(struct!.ssm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssmcontacts: {
      value: cdktf.stringToHclTerraform(struct!.ssmcontacts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssmincidents: {
      value: cdktf.stringToHclTerraform(struct!.ssmincidents),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssmquicksetup: {
      value: cdktf.stringToHclTerraform(struct!.ssmquicksetup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssmsap: {
      value: cdktf.stringToHclTerraform(struct!.ssmsap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sso: {
      value: cdktf.stringToHclTerraform(struct!.sso),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssoadmin: {
      value: cdktf.stringToHclTerraform(struct!.ssoadmin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stepfunctions: {
      value: cdktf.stringToHclTerraform(struct!.stepfunctions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storagegateway: {
      value: cdktf.stringToHclTerraform(struct!.storagegateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sts: {
      value: cdktf.stringToHclTerraform(struct!.sts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    swf: {
      value: cdktf.stringToHclTerraform(struct!.swf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synthetics: {
      value: cdktf.stringToHclTerraform(struct!.synthetics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    taxsettings: {
      value: cdktf.stringToHclTerraform(struct!.taxsettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestreaminfluxdb: {
      value: cdktf.stringToHclTerraform(struct!.timestreaminfluxdb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestreamwrite: {
      value: cdktf.stringToHclTerraform(struct!.timestreamwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transcribe: {
      value: cdktf.stringToHclTerraform(struct!.transcribe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transcribeservice: {
      value: cdktf.stringToHclTerraform(struct!.transcribeservice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transfer: {
      value: cdktf.stringToHclTerraform(struct!.transfer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verifiedpermissions: {
      value: cdktf.stringToHclTerraform(struct!.verifiedpermissions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpclattice: {
      value: cdktf.stringToHclTerraform(struct!.vpclattice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    waf: {
      value: cdktf.stringToHclTerraform(struct!.waf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wafregional: {
      value: cdktf.stringToHclTerraform(struct!.wafregional),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wafv2: {
      value: cdktf.stringToHclTerraform(struct!.wafv2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wellarchitected: {
      value: cdktf.stringToHclTerraform(struct!.wellarchitected),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    worklink: {
      value: cdktf.stringToHclTerraform(struct!.worklink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspaces: {
      value: cdktf.stringToHclTerraform(struct!.workspaces),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspacesweb: {
      value: cdktf.stringToHclTerraform(struct!.workspacesweb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xray: {
      value: cdktf.stringToHclTerraform(struct!.xray),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AwsProviderIgnoreTags {
  /**
  * Resource tag key prefixes to ignore across all resources. Can also be configured with the TF_AWS_IGNORE_TAGS_KEY_PREFIXES environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#key_prefixes AwsProvider#key_prefixes}
  */
  readonly keyPrefixes?: string[];
  /**
  * Resource tag keys to ignore across all resources. Can also be configured with the TF_AWS_IGNORE_TAGS_KEYS environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#keys AwsProvider#keys}
  */
  readonly keys?: string[];
}

export function awsProviderIgnoreTagsToTerraform(struct?: AwsProviderIgnoreTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyPrefixes),
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
  }
}


export function awsProviderIgnoreTagsToHclTerraform(struct?: AwsProviderIgnoreTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keyPrefixes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs aws}
*/
export class AwsProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsProvider to import
  * @param importFromId The id of the existing AwsProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs aws} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AwsProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.75.1',
        providerVersionConstraint: '~> 5.0'
      },
      terraformProviderSource: 'aws'
    });
    this._accessKey = config.accessKey;
    this._allowedAccountIds = config.allowedAccountIds;
    this._customCaBundle = config.customCaBundle;
    this._ec2MetadataServiceEndpoint = config.ec2MetadataServiceEndpoint;
    this._ec2MetadataServiceEndpointMode = config.ec2MetadataServiceEndpointMode;
    this._forbiddenAccountIds = config.forbiddenAccountIds;
    this._httpProxy = config.httpProxy;
    this._httpsProxy = config.httpsProxy;
    this._insecure = config.insecure;
    this._maxRetries = config.maxRetries;
    this._noProxy = config.noProxy;
    this._profile = config.profile;
    this._region = config.region;
    this._retryMode = config.retryMode;
    this._s3UsEast1RegionalEndpoint = config.s3UsEast1RegionalEndpoint;
    this._s3UsePathStyle = config.s3UsePathStyle;
    this._secretKey = config.secretKey;
    this._sharedConfigFiles = config.sharedConfigFiles;
    this._sharedCredentialsFiles = config.sharedCredentialsFiles;
    this._skipCredentialsValidation = config.skipCredentialsValidation;
    this._skipMetadataApiCheck = config.skipMetadataApiCheck;
    this._skipRegionValidation = config.skipRegionValidation;
    this._skipRequestingAccountId = config.skipRequestingAccountId;
    this._stsRegion = config.stsRegion;
    this._token = config.token;
    this._tokenBucketRateLimiterCapacity = config.tokenBucketRateLimiterCapacity;
    this._useDualstackEndpoint = config.useDualstackEndpoint;
    this._useFipsEndpoint = config.useFipsEndpoint;
    this._alias = config.alias;
    this._assumeRole = config.assumeRole;
    this._assumeRoleWithWebIdentity = config.assumeRoleWithWebIdentity;
    this._defaultTags = config.defaultTags;
    this._endpoints = config.endpoints;
    this._ignoreTags = config.ignoreTags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this._accessKey;
  }
  public set accessKey(value: string | undefined) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // allowed_account_ids - computed: false, optional: true, required: false
  private _allowedAccountIds?: string[]; 
  public get allowedAccountIds() {
    return this._allowedAccountIds;
  }
  public set allowedAccountIds(value: string[] | undefined) {
    this._allowedAccountIds = value;
  }
  public resetAllowedAccountIds() {
    this._allowedAccountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAccountIdsInput() {
    return this._allowedAccountIds;
  }

  // custom_ca_bundle - computed: false, optional: true, required: false
  private _customCaBundle?: string; 
  public get customCaBundle() {
    return this._customCaBundle;
  }
  public set customCaBundle(value: string | undefined) {
    this._customCaBundle = value;
  }
  public resetCustomCaBundle() {
    this._customCaBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCaBundleInput() {
    return this._customCaBundle;
  }

  // ec2_metadata_service_endpoint - computed: false, optional: true, required: false
  private _ec2MetadataServiceEndpoint?: string; 
  public get ec2MetadataServiceEndpoint() {
    return this._ec2MetadataServiceEndpoint;
  }
  public set ec2MetadataServiceEndpoint(value: string | undefined) {
    this._ec2MetadataServiceEndpoint = value;
  }
  public resetEc2MetadataServiceEndpoint() {
    this._ec2MetadataServiceEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2MetadataServiceEndpointInput() {
    return this._ec2MetadataServiceEndpoint;
  }

  // ec2_metadata_service_endpoint_mode - computed: false, optional: true, required: false
  private _ec2MetadataServiceEndpointMode?: string; 
  public get ec2MetadataServiceEndpointMode() {
    return this._ec2MetadataServiceEndpointMode;
  }
  public set ec2MetadataServiceEndpointMode(value: string | undefined) {
    this._ec2MetadataServiceEndpointMode = value;
  }
  public resetEc2MetadataServiceEndpointMode() {
    this._ec2MetadataServiceEndpointMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2MetadataServiceEndpointModeInput() {
    return this._ec2MetadataServiceEndpointMode;
  }

  // forbidden_account_ids - computed: false, optional: true, required: false
  private _forbiddenAccountIds?: string[]; 
  public get forbiddenAccountIds() {
    return this._forbiddenAccountIds;
  }
  public set forbiddenAccountIds(value: string[] | undefined) {
    this._forbiddenAccountIds = value;
  }
  public resetForbiddenAccountIds() {
    this._forbiddenAccountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forbiddenAccountIdsInput() {
    return this._forbiddenAccountIds;
  }

  // http_proxy - computed: false, optional: true, required: false
  private _httpProxy?: string; 
  public get httpProxy() {
    return this._httpProxy;
  }
  public set httpProxy(value: string | undefined) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
  }

  // https_proxy - computed: false, optional: true, required: false
  private _httpsProxy?: string; 
  public get httpsProxy() {
    return this._httpsProxy;
  }
  public set httpsProxy(value: string | undefined) {
    this._httpsProxy = value;
  }
  public resetHttpsProxy() {
    this._httpsProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyInput() {
    return this._httpsProxy;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean | cdktf.IResolvable | undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this._maxRetries;
  }
  public set maxRetries(value: number | undefined) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // no_proxy - computed: false, optional: true, required: false
  private _noProxy?: string; 
  public get noProxy() {
    return this._noProxy;
  }
  public set noProxy(value: string | undefined) {
    this._noProxy = value;
  }
  public resetNoProxy() {
    this._noProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyInput() {
    return this._noProxy;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this._profile;
  }
  public set profile(value: string | undefined) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // retry_mode - computed: false, optional: true, required: false
  private _retryMode?: string; 
  public get retryMode() {
    return this._retryMode;
  }
  public set retryMode(value: string | undefined) {
    this._retryMode = value;
  }
  public resetRetryMode() {
    this._retryMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryModeInput() {
    return this._retryMode;
  }

  // s3_us_east_1_regional_endpoint - computed: false, optional: true, required: false
  private _s3UsEast1RegionalEndpoint?: string; 
  public get s3UsEast1RegionalEndpoint() {
    return this._s3UsEast1RegionalEndpoint;
  }
  public set s3UsEast1RegionalEndpoint(value: string | undefined) {
    this._s3UsEast1RegionalEndpoint = value;
  }
  public resetS3UsEast1RegionalEndpoint() {
    this._s3UsEast1RegionalEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UsEast1RegionalEndpointInput() {
    return this._s3UsEast1RegionalEndpoint;
  }

  // s3_use_path_style - computed: false, optional: true, required: false
  private _s3UsePathStyle?: boolean | cdktf.IResolvable; 
  public get s3UsePathStyle() {
    return this._s3UsePathStyle;
  }
  public set s3UsePathStyle(value: boolean | cdktf.IResolvable | undefined) {
    this._s3UsePathStyle = value;
  }
  public resetS3UsePathStyle() {
    this._s3UsePathStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UsePathStyleInput() {
    return this._s3UsePathStyle;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this._secretKey;
  }
  public set secretKey(value: string | undefined) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // shared_config_files - computed: false, optional: true, required: false
  private _sharedConfigFiles?: string[]; 
  public get sharedConfigFiles() {
    return this._sharedConfigFiles;
  }
  public set sharedConfigFiles(value: string[] | undefined) {
    this._sharedConfigFiles = value;
  }
  public resetSharedConfigFiles() {
    this._sharedConfigFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedConfigFilesInput() {
    return this._sharedConfigFiles;
  }

  // shared_credentials_files - computed: false, optional: true, required: false
  private _sharedCredentialsFiles?: string[]; 
  public get sharedCredentialsFiles() {
    return this._sharedCredentialsFiles;
  }
  public set sharedCredentialsFiles(value: string[] | undefined) {
    this._sharedCredentialsFiles = value;
  }
  public resetSharedCredentialsFiles() {
    this._sharedCredentialsFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedCredentialsFilesInput() {
    return this._sharedCredentialsFiles;
  }

  // skip_credentials_validation - computed: false, optional: true, required: false
  private _skipCredentialsValidation?: boolean | cdktf.IResolvable; 
  public get skipCredentialsValidation() {
    return this._skipCredentialsValidation;
  }
  public set skipCredentialsValidation(value: boolean | cdktf.IResolvable | undefined) {
    this._skipCredentialsValidation = value;
  }
  public resetSkipCredentialsValidation() {
    this._skipCredentialsValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCredentialsValidationInput() {
    return this._skipCredentialsValidation;
  }

  // skip_metadata_api_check - computed: false, optional: true, required: false
  private _skipMetadataApiCheck?: string; 
  public get skipMetadataApiCheck() {
    return this._skipMetadataApiCheck;
  }
  public set skipMetadataApiCheck(value: string | undefined) {
    this._skipMetadataApiCheck = value;
  }
  public resetSkipMetadataApiCheck() {
    this._skipMetadataApiCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipMetadataApiCheckInput() {
    return this._skipMetadataApiCheck;
  }

  // skip_region_validation - computed: false, optional: true, required: false
  private _skipRegionValidation?: boolean | cdktf.IResolvable; 
  public get skipRegionValidation() {
    return this._skipRegionValidation;
  }
  public set skipRegionValidation(value: boolean | cdktf.IResolvable | undefined) {
    this._skipRegionValidation = value;
  }
  public resetSkipRegionValidation() {
    this._skipRegionValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipRegionValidationInput() {
    return this._skipRegionValidation;
  }

  // skip_requesting_account_id - computed: false, optional: true, required: false
  private _skipRequestingAccountId?: boolean | cdktf.IResolvable; 
  public get skipRequestingAccountId() {
    return this._skipRequestingAccountId;
  }
  public set skipRequestingAccountId(value: boolean | cdktf.IResolvable | undefined) {
    this._skipRequestingAccountId = value;
  }
  public resetSkipRequestingAccountId() {
    this._skipRequestingAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipRequestingAccountIdInput() {
    return this._skipRequestingAccountId;
  }

  // sts_region - computed: false, optional: true, required: false
  private _stsRegion?: string; 
  public get stsRegion() {
    return this._stsRegion;
  }
  public set stsRegion(value: string | undefined) {
    this._stsRegion = value;
  }
  public resetStsRegion() {
    this._stsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stsRegionInput() {
    return this._stsRegion;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // token_bucket_rate_limiter_capacity - computed: false, optional: true, required: false
  private _tokenBucketRateLimiterCapacity?: number; 
  public get tokenBucketRateLimiterCapacity() {
    return this._tokenBucketRateLimiterCapacity;
  }
  public set tokenBucketRateLimiterCapacity(value: number | undefined) {
    this._tokenBucketRateLimiterCapacity = value;
  }
  public resetTokenBucketRateLimiterCapacity() {
    this._tokenBucketRateLimiterCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenBucketRateLimiterCapacityInput() {
    return this._tokenBucketRateLimiterCapacity;
  }

  // use_dualstack_endpoint - computed: false, optional: true, required: false
  private _useDualstackEndpoint?: boolean | cdktf.IResolvable; 
  public get useDualstackEndpoint() {
    return this._useDualstackEndpoint;
  }
  public set useDualstackEndpoint(value: boolean | cdktf.IResolvable | undefined) {
    this._useDualstackEndpoint = value;
  }
  public resetUseDualstackEndpoint() {
    this._useDualstackEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDualstackEndpointInput() {
    return this._useDualstackEndpoint;
  }

  // use_fips_endpoint - computed: false, optional: true, required: false
  private _useFipsEndpoint?: boolean | cdktf.IResolvable; 
  public get useFipsEndpoint() {
    return this._useFipsEndpoint;
  }
  public set useFipsEndpoint(value: boolean | cdktf.IResolvable | undefined) {
    this._useFipsEndpoint = value;
  }
  public resetUseFipsEndpoint() {
    this._useFipsEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useFipsEndpointInput() {
    return this._useFipsEndpoint;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // assume_role - computed: false, optional: true, required: false
  private _assumeRole?: AwsProviderAssumeRole[] | cdktf.IResolvable; 
  public get assumeRole() {
    return this._assumeRole;
  }
  public set assumeRole(value: AwsProviderAssumeRole[] | cdktf.IResolvable | undefined) {
    this._assumeRole = value;
  }
  public resetAssumeRole() {
    this._assumeRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleInput() {
    return this._assumeRole;
  }

  // assume_role_with_web_identity - computed: false, optional: true, required: false
  private _assumeRoleWithWebIdentity?: AwsProviderAssumeRoleWithWebIdentity[] | cdktf.IResolvable; 
  public get assumeRoleWithWebIdentity() {
    return this._assumeRoleWithWebIdentity;
  }
  public set assumeRoleWithWebIdentity(value: AwsProviderAssumeRoleWithWebIdentity[] | cdktf.IResolvable | undefined) {
    this._assumeRoleWithWebIdentity = value;
  }
  public resetAssumeRoleWithWebIdentity() {
    this._assumeRoleWithWebIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleWithWebIdentityInput() {
    return this._assumeRoleWithWebIdentity;
  }

  // default_tags - computed: false, optional: true, required: false
  private _defaultTags?: AwsProviderDefaultTags[] | cdktf.IResolvable; 
  public get defaultTags() {
    return this._defaultTags;
  }
  public set defaultTags(value: AwsProviderDefaultTags[] | cdktf.IResolvable | undefined) {
    this._defaultTags = value;
  }
  public resetDefaultTags() {
    this._defaultTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTagsInput() {
    return this._defaultTags;
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints?: AwsProviderEndpoints[] | cdktf.IResolvable; 
  public get endpoints() {
    return this._endpoints;
  }
  public set endpoints(value: AwsProviderEndpoints[] | cdktf.IResolvable | undefined) {
    this._endpoints = value;
  }
  public resetEndpoints() {
    this._endpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
  }

  // ignore_tags - computed: false, optional: true, required: false
  private _ignoreTags?: AwsProviderIgnoreTags[] | cdktf.IResolvable; 
  public get ignoreTags() {
    return this._ignoreTags;
  }
  public set ignoreTags(value: AwsProviderIgnoreTags[] | cdktf.IResolvable | undefined) {
    this._ignoreTags = value;
  }
  public resetIgnoreTags() {
    this._ignoreTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTagsInput() {
    return this._ignoreTags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key: cdktf.stringToTerraform(this._accessKey),
      allowed_account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedAccountIds),
      custom_ca_bundle: cdktf.stringToTerraform(this._customCaBundle),
      ec2_metadata_service_endpoint: cdktf.stringToTerraform(this._ec2MetadataServiceEndpoint),
      ec2_metadata_service_endpoint_mode: cdktf.stringToTerraform(this._ec2MetadataServiceEndpointMode),
      forbidden_account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._forbiddenAccountIds),
      http_proxy: cdktf.stringToTerraform(this._httpProxy),
      https_proxy: cdktf.stringToTerraform(this._httpsProxy),
      insecure: cdktf.booleanToTerraform(this._insecure),
      max_retries: cdktf.numberToTerraform(this._maxRetries),
      no_proxy: cdktf.stringToTerraform(this._noProxy),
      profile: cdktf.stringToTerraform(this._profile),
      region: cdktf.stringToTerraform(this._region),
      retry_mode: cdktf.stringToTerraform(this._retryMode),
      s3_us_east_1_regional_endpoint: cdktf.stringToTerraform(this._s3UsEast1RegionalEndpoint),
      s3_use_path_style: cdktf.booleanToTerraform(this._s3UsePathStyle),
      secret_key: cdktf.stringToTerraform(this._secretKey),
      shared_config_files: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sharedConfigFiles),
      shared_credentials_files: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sharedCredentialsFiles),
      skip_credentials_validation: cdktf.booleanToTerraform(this._skipCredentialsValidation),
      skip_metadata_api_check: cdktf.stringToTerraform(this._skipMetadataApiCheck),
      skip_region_validation: cdktf.booleanToTerraform(this._skipRegionValidation),
      skip_requesting_account_id: cdktf.booleanToTerraform(this._skipRequestingAccountId),
      sts_region: cdktf.stringToTerraform(this._stsRegion),
      token: cdktf.stringToTerraform(this._token),
      token_bucket_rate_limiter_capacity: cdktf.numberToTerraform(this._tokenBucketRateLimiterCapacity),
      use_dualstack_endpoint: cdktf.booleanToTerraform(this._useDualstackEndpoint),
      use_fips_endpoint: cdktf.booleanToTerraform(this._useFipsEndpoint),
      alias: cdktf.stringToTerraform(this._alias),
      assume_role: cdktf.listMapper(awsProviderAssumeRoleToTerraform, true)(this._assumeRole),
      assume_role_with_web_identity: cdktf.listMapper(awsProviderAssumeRoleWithWebIdentityToTerraform, true)(this._assumeRoleWithWebIdentity),
      default_tags: cdktf.listMapper(awsProviderDefaultTagsToTerraform, true)(this._defaultTags),
      endpoints: cdktf.listMapper(awsProviderEndpointsToTerraform, true)(this._endpoints),
      ignore_tags: cdktf.listMapper(awsProviderIgnoreTagsToTerraform, true)(this._ignoreTags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key: {
        value: cdktf.stringToHclTerraform(this._accessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_account_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedAccountIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      custom_ca_bundle: {
        value: cdktf.stringToHclTerraform(this._customCaBundle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ec2_metadata_service_endpoint: {
        value: cdktf.stringToHclTerraform(this._ec2MetadataServiceEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ec2_metadata_service_endpoint_mode: {
        value: cdktf.stringToHclTerraform(this._ec2MetadataServiceEndpointMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forbidden_account_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._forbiddenAccountIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      http_proxy: {
        value: cdktf.stringToHclTerraform(this._httpProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_proxy: {
        value: cdktf.stringToHclTerraform(this._httpsProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure: {
        value: cdktf.booleanToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_retries: {
        value: cdktf.numberToHclTerraform(this._maxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_proxy: {
        value: cdktf.stringToHclTerraform(this._noProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry_mode: {
        value: cdktf.stringToHclTerraform(this._retryMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_us_east_1_regional_endpoint: {
        value: cdktf.stringToHclTerraform(this._s3UsEast1RegionalEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_use_path_style: {
        value: cdktf.booleanToHclTerraform(this._s3UsePathStyle),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      secret_key: {
        value: cdktf.stringToHclTerraform(this._secretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_config_files: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sharedConfigFiles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      shared_credentials_files: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sharedCredentialsFiles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      skip_credentials_validation: {
        value: cdktf.booleanToHclTerraform(this._skipCredentialsValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_metadata_api_check: {
        value: cdktf.stringToHclTerraform(this._skipMetadataApiCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_region_validation: {
        value: cdktf.booleanToHclTerraform(this._skipRegionValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_requesting_account_id: {
        value: cdktf.booleanToHclTerraform(this._skipRequestingAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sts_region: {
        value: cdktf.stringToHclTerraform(this._stsRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_bucket_rate_limiter_capacity: {
        value: cdktf.numberToHclTerraform(this._tokenBucketRateLimiterCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_dualstack_endpoint: {
        value: cdktf.booleanToHclTerraform(this._useDualstackEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_fips_endpoint: {
        value: cdktf.booleanToHclTerraform(this._useFipsEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assume_role: {
        value: cdktf.listMapperHcl(awsProviderAssumeRoleToHclTerraform, true)(this._assumeRole),
        isBlock: true,
        type: "list",
        storageClassType: "AwsProviderAssumeRoleList",
      },
      assume_role_with_web_identity: {
        value: cdktf.listMapperHcl(awsProviderAssumeRoleWithWebIdentityToHclTerraform, true)(this._assumeRoleWithWebIdentity),
        isBlock: true,
        type: "list",
        storageClassType: "AwsProviderAssumeRoleWithWebIdentityList",
      },
      default_tags: {
        value: cdktf.listMapperHcl(awsProviderDefaultTagsToHclTerraform, true)(this._defaultTags),
        isBlock: true,
        type: "list",
        storageClassType: "AwsProviderDefaultTagsList",
      },
      endpoints: {
        value: cdktf.listMapperHcl(awsProviderEndpointsToHclTerraform, true)(this._endpoints),
        isBlock: true,
        type: "set",
        storageClassType: "AwsProviderEndpointsList",
      },
      ignore_tags: {
        value: cdktf.listMapperHcl(awsProviderIgnoreTagsToHclTerraform, true)(this._ignoreTags),
        isBlock: true,
        type: "list",
        storageClassType: "AwsProviderIgnoreTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
