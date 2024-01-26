// https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/verifiedaccess_instance_logging_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VerifiedaccessInstanceLoggingConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/verifiedaccess_instance_logging_configuration#id VerifiedaccessInstanceLoggingConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/verifiedaccess_instance_logging_configuration#verifiedaccess_instance_id VerifiedaccessInstanceLoggingConfiguration#verifiedaccess_instance_id}
  */
  readonly verifiedaccessInstanceId: string;
  /**
  * access_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/verifiedaccess_instance_logging_configuration#access_logs VerifiedaccessInstanceLoggingConfiguration#access_logs}
  */
  readonly accessLogs: VerifiedaccessInstanceLoggingConfigurationAccessLogs;
}
export interface VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/verifiedaccess_instance_logging_configuration#enabled VerifiedaccessInstanceLoggingConfiguration#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/verifiedaccess_instance_logging_configuration#log_group VerifiedaccessInstanceLoggingConfiguration#log_group}
  */
  readonly logGroup?: string;
}

export function verifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsToTerraform(struct?: VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference | VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group: cdktf.stringToTerraform(struct!.logGroup),
  }
}


export function verifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsToHclTerraform(struct?: VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference | VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group: {
      value: cdktf.stringToHclTerraform(struct!.logGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroup = this._logGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logGroup = value.logGroup;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_group - computed: false, optional: true, required: false
  private _logGroup?: string; 
  public get logGroup() {
    return this.getStringAttribute('log_group');
  }
  public set logGroup(value: string) {
    this._logGroup = value;
  }
  public resetLogGroup() {
    this._logGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupInput() {
    return this._logGroup;
  }
}
export interface VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/verifiedaccess_instance_logging_configuration#delivery_stream VerifiedaccessInstanceLoggingConfiguration#delivery_stream}
  */
  readonly deliveryStream?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/verifiedaccess_instance_logging_configuration#enabled VerifiedaccessInstanceLoggingConfiguration#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function verifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseToTerraform(struct?: VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference | VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delivery_stream: cdktf.stringToTerraform(struct!.deliveryStream),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function verifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseToHclTerraform(struct?: VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference | VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delivery_stream: {
      value: cdktf.stringToHclTerraform(struct!.deliveryStream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deliveryStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryStream = this._deliveryStream;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deliveryStream = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deliveryStream = value.deliveryStream;
      this._enabled = value.enabled;
    }
  }

  // delivery_stream - computed: false, optional: true, required: false
  private _deliveryStream?: string; 
  public get deliveryStream() {
    return this.getStringAttribute('delivery_stream');
  }
  public set deliveryStream(value: string) {
    this._deliveryStream = value;
  }
  public resetDeliveryStream() {
    this._deliveryStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryStreamInput() {
    return this._deliveryStream;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface VerifiedaccessInstanceLoggingConfigurationAccessLogsS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/verifiedaccess_instance_logging_configuration#bucket_name VerifiedaccessInstanceLoggingConfiguration#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/verifiedaccess_instance_logging_configuration#bucket_owner VerifiedaccessInstanceLoggingConfiguration#bucket_owner}
  */
  readonly bucketOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/verifiedaccess_instance_logging_configuration#enabled VerifiedaccessInstanceLoggingConfiguration#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/verifiedaccess_instance_logging_configuration#prefix VerifiedaccessInstanceLoggingConfiguration#prefix}
  */
  readonly prefix?: string;
}

export function verifiedaccessInstanceLoggingConfigurationAccessLogsS3ToTerraform(struct?: VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference | VerifiedaccessInstanceLoggingConfigurationAccessLogsS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_owner: cdktf.stringToTerraform(struct!.bucketOwner),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function verifiedaccessInstanceLoggingConfigurationAccessLogsS3ToHclTerraform(struct?: VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference | VerifiedaccessInstanceLoggingConfigurationAccessLogsS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_owner: {
      value: cdktf.stringToHclTerraform(struct!.bucketOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VerifiedaccessInstanceLoggingConfigurationAccessLogsS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketOwner = this._bucketOwner;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedaccessInstanceLoggingConfigurationAccessLogsS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._bucketOwner = undefined;
      this._enabled = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._bucketOwner = value.bucketOwner;
      this._enabled = value.enabled;
      this._prefix = value.prefix;
    }
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_owner - computed: true, optional: true, required: false
  private _bucketOwner?: string; 
  public get bucketOwner() {
    return this.getStringAttribute('bucket_owner');
  }
  public set bucketOwner(value: string) {
    this._bucketOwner = value;
  }
  public resetBucketOwner() {
    this._bucketOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketOwnerInput() {
    return this._bucketOwner;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface VerifiedaccessInstanceLoggingConfigurationAccessLogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/verifiedaccess_instance_logging_configuration#include_trust_context VerifiedaccessInstanceLoggingConfiguration#include_trust_context}
  */
  readonly includeTrustContext?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/verifiedaccess_instance_logging_configuration#log_version VerifiedaccessInstanceLoggingConfiguration#log_version}
  */
  readonly logVersion?: string;
  /**
  * cloudwatch_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/verifiedaccess_instance_logging_configuration#cloudwatch_logs VerifiedaccessInstanceLoggingConfiguration#cloudwatch_logs}
  */
  readonly cloudwatchLogs?: VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs;
  /**
  * kinesis_data_firehose block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/verifiedaccess_instance_logging_configuration#kinesis_data_firehose VerifiedaccessInstanceLoggingConfiguration#kinesis_data_firehose}
  */
  readonly kinesisDataFirehose?: VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/verifiedaccess_instance_logging_configuration#s3 VerifiedaccessInstanceLoggingConfiguration#s3}
  */
  readonly s3?: VerifiedaccessInstanceLoggingConfigurationAccessLogsS3;
}

export function verifiedaccessInstanceLoggingConfigurationAccessLogsToTerraform(struct?: VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference | VerifiedaccessInstanceLoggingConfigurationAccessLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_trust_context: cdktf.booleanToTerraform(struct!.includeTrustContext),
    log_version: cdktf.stringToTerraform(struct!.logVersion),
    cloudwatch_logs: verifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsToTerraform(struct!.cloudwatchLogs),
    kinesis_data_firehose: verifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseToTerraform(struct!.kinesisDataFirehose),
    s3: verifiedaccessInstanceLoggingConfigurationAccessLogsS3ToTerraform(struct!.s3),
  }
}


export function verifiedaccessInstanceLoggingConfigurationAccessLogsToHclTerraform(struct?: VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference | VerifiedaccessInstanceLoggingConfigurationAccessLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_trust_context: {
      value: cdktf.booleanToHclTerraform(struct!.includeTrustContext),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_version: {
      value: cdktf.stringToHclTerraform(struct!.logVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch_logs: {
      value: verifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsToHclTerraform(struct!.cloudwatchLogs),
      isBlock: true,
      type: "list",
      storageClassType: "VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsList",
    },
    kinesis_data_firehose: {
      value: verifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseToHclTerraform(struct!.kinesisDataFirehose),
      isBlock: true,
      type: "list",
      storageClassType: "VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseList",
    },
    s3: {
      value: verifiedaccessInstanceLoggingConfigurationAccessLogsS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "VerifiedaccessInstanceLoggingConfigurationAccessLogsS3List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VerifiedaccessInstanceLoggingConfigurationAccessLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeTrustContext !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTrustContext = this._includeTrustContext;
    }
    if (this._logVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.logVersion = this._logVersion;
    }
    if (this._cloudwatchLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogs = this._cloudwatchLogs?.internalValue;
    }
    if (this._kinesisDataFirehose?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisDataFirehose = this._kinesisDataFirehose?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedaccessInstanceLoggingConfigurationAccessLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeTrustContext = undefined;
      this._logVersion = undefined;
      this._cloudwatchLogs.internalValue = undefined;
      this._kinesisDataFirehose.internalValue = undefined;
      this._s3.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeTrustContext = value.includeTrustContext;
      this._logVersion = value.logVersion;
      this._cloudwatchLogs.internalValue = value.cloudwatchLogs;
      this._kinesisDataFirehose.internalValue = value.kinesisDataFirehose;
      this._s3.internalValue = value.s3;
    }
  }

  // include_trust_context - computed: true, optional: true, required: false
  private _includeTrustContext?: boolean | cdktf.IResolvable; 
  public get includeTrustContext() {
    return this.getBooleanAttribute('include_trust_context');
  }
  public set includeTrustContext(value: boolean | cdktf.IResolvable) {
    this._includeTrustContext = value;
  }
  public resetIncludeTrustContext() {
    this._includeTrustContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTrustContextInput() {
    return this._includeTrustContext;
  }

  // log_version - computed: true, optional: true, required: false
  private _logVersion?: string; 
  public get logVersion() {
    return this.getStringAttribute('log_version');
  }
  public set logVersion(value: string) {
    this._logVersion = value;
  }
  public resetLogVersion() {
    this._logVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logVersionInput() {
    return this._logVersion;
  }

  // cloudwatch_logs - computed: false, optional: true, required: false
  private _cloudwatchLogs = new VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference(this, "cloudwatch_logs");
  public get cloudwatchLogs() {
    return this._cloudwatchLogs;
  }
  public putCloudwatchLogs(value: VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs) {
    this._cloudwatchLogs.internalValue = value;
  }
  public resetCloudwatchLogs() {
    this._cloudwatchLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogsInput() {
    return this._cloudwatchLogs.internalValue;
  }

  // kinesis_data_firehose - computed: false, optional: true, required: false
  private _kinesisDataFirehose = new VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference(this, "kinesis_data_firehose");
  public get kinesisDataFirehose() {
    return this._kinesisDataFirehose;
  }
  public putKinesisDataFirehose(value: VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose) {
    this._kinesisDataFirehose.internalValue = value;
  }
  public resetKinesisDataFirehose() {
    this._kinesisDataFirehose.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisDataFirehoseInput() {
    return this._kinesisDataFirehose.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: VerifiedaccessInstanceLoggingConfigurationAccessLogsS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/verifiedaccess_instance_logging_configuration aws_verifiedaccess_instance_logging_configuration}
*/
export class VerifiedaccessInstanceLoggingConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_verifiedaccess_instance_logging_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VerifiedaccessInstanceLoggingConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VerifiedaccessInstanceLoggingConfiguration to import
  * @param importFromId The id of the existing VerifiedaccessInstanceLoggingConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/verifiedaccess_instance_logging_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VerifiedaccessInstanceLoggingConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_verifiedaccess_instance_logging_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/verifiedaccess_instance_logging_configuration aws_verifiedaccess_instance_logging_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VerifiedaccessInstanceLoggingConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: VerifiedaccessInstanceLoggingConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_verifiedaccess_instance_logging_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.34.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._verifiedaccessInstanceId = config.verifiedaccessInstanceId;
    this._accessLogs.internalValue = config.accessLogs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // verifiedaccess_instance_id - computed: false, optional: false, required: true
  private _verifiedaccessInstanceId?: string; 
  public get verifiedaccessInstanceId() {
    return this.getStringAttribute('verifiedaccess_instance_id');
  }
  public set verifiedaccessInstanceId(value: string) {
    this._verifiedaccessInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verifiedaccessInstanceIdInput() {
    return this._verifiedaccessInstanceId;
  }

  // access_logs - computed: false, optional: false, required: true
  private _accessLogs = new VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference(this, "access_logs");
  public get accessLogs() {
    return this._accessLogs;
  }
  public putAccessLogs(value: VerifiedaccessInstanceLoggingConfigurationAccessLogs) {
    this._accessLogs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogsInput() {
    return this._accessLogs.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      verifiedaccess_instance_id: cdktf.stringToTerraform(this._verifiedaccessInstanceId),
      access_logs: verifiedaccessInstanceLoggingConfigurationAccessLogsToTerraform(this._accessLogs.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verifiedaccess_instance_id: {
        value: cdktf.stringToHclTerraform(this._verifiedaccessInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_logs: {
        value: verifiedaccessInstanceLoggingConfigurationAccessLogsToHclTerraform(this._accessLogs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VerifiedaccessInstanceLoggingConfigurationAccessLogsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
