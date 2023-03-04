// https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectInstanceStorageConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#id ConnectInstanceStorageConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#instance_id ConnectInstanceStorageConfig#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#resource_type ConnectInstanceStorageConfig#resource_type}
  */
  readonly resourceType: string;
  /**
  * storage_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#storage_config ConnectInstanceStorageConfig#storage_config}
  */
  readonly storageConfig: ConnectInstanceStorageConfigStorageConfig;
}
export interface ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#firehose_arn ConnectInstanceStorageConfig#firehose_arn}
  */
  readonly firehoseArn: string;
}

export function connectInstanceStorageConfigStorageConfigKinesisFirehoseConfigToTerraform(struct?: ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference | ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    firehose_arn: cdktf.stringToTerraform(struct!.firehoseArn),
  }
}

export class ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._firehoseArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.firehoseArn = this._firehoseArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._firehoseArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._firehoseArn = value.firehoseArn;
    }
  }

  // firehose_arn - computed: false, optional: false, required: true
  private _firehoseArn?: string; 
  public get firehoseArn() {
    return this.getStringAttribute('firehose_arn');
  }
  public set firehoseArn(value: string) {
    this._firehoseArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firehoseArnInput() {
    return this._firehoseArn;
  }
}
export interface ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#stream_arn ConnectInstanceStorageConfig#stream_arn}
  */
  readonly streamArn: string;
}

export function connectInstanceStorageConfigStorageConfigKinesisStreamConfigToTerraform(struct?: ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference | ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stream_arn: cdktf.stringToTerraform(struct!.streamArn),
  }
}

export class ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._streamArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamArn = this._streamArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._streamArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._streamArn = value.streamArn;
    }
  }

  // stream_arn - computed: false, optional: false, required: true
  private _streamArn?: string; 
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }
  public set streamArn(value: string) {
    this._streamArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamArnInput() {
    return this._streamArn;
  }
}
export interface ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#encryption_type ConnectInstanceStorageConfig#encryption_type}
  */
  readonly encryptionType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#key_id ConnectInstanceStorageConfig#key_id}
  */
  readonly keyId: string;
}

export function connectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigToTerraform(struct?: ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference | ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_type: cdktf.stringToTerraform(struct!.encryptionType),
    key_id: cdktf.stringToTerraform(struct!.keyId),
  }
}

export class ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionType = this._encryptionType;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encryptionType = undefined;
      this._keyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encryptionType = value.encryptionType;
      this._keyId = value.keyId;
    }
  }

  // encryption_type - computed: false, optional: false, required: true
  private _encryptionType?: string; 
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }
}
export interface ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#prefix ConnectInstanceStorageConfig#prefix}
  */
  readonly prefix: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#retention_period_hours ConnectInstanceStorageConfig#retention_period_hours}
  */
  readonly retentionPeriodHours: number;
  /**
  * encryption_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#encryption_config ConnectInstanceStorageConfig#encryption_config}
  */
  readonly encryptionConfig: ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig;
}

export function connectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigToTerraform(struct?: ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference | ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    retention_period_hours: cdktf.numberToTerraform(struct!.retentionPeriodHours),
    encryption_config: connectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigToTerraform(struct!.encryptionConfig),
  }
}

export class ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._retentionPeriodHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPeriodHours = this._retentionPeriodHours;
    }
    if (this._encryptionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfig = this._encryptionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefix = undefined;
      this._retentionPeriodHours = undefined;
      this._encryptionConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefix = value.prefix;
      this._retentionPeriodHours = value.retentionPeriodHours;
      this._encryptionConfig.internalValue = value.encryptionConfig;
    }
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // retention_period_hours - computed: false, optional: false, required: true
  private _retentionPeriodHours?: number; 
  public get retentionPeriodHours() {
    return this.getNumberAttribute('retention_period_hours');
  }
  public set retentionPeriodHours(value: number) {
    this._retentionPeriodHours = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodHoursInput() {
    return this._retentionPeriodHours;
  }

  // encryption_config - computed: false, optional: false, required: true
  private _encryptionConfig = new ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference(this, "encryption_config");
  public get encryptionConfig() {
    return this._encryptionConfig;
  }
  public putEncryptionConfig(value: ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig) {
    this._encryptionConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig.internalValue;
  }
}
export interface ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#encryption_type ConnectInstanceStorageConfig#encryption_type}
  */
  readonly encryptionType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#key_id ConnectInstanceStorageConfig#key_id}
  */
  readonly keyId: string;
}

export function connectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigToTerraform(struct?: ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference | ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_type: cdktf.stringToTerraform(struct!.encryptionType),
    key_id: cdktf.stringToTerraform(struct!.keyId),
  }
}

export class ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionType = this._encryptionType;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encryptionType = undefined;
      this._keyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encryptionType = value.encryptionType;
      this._keyId = value.keyId;
    }
  }

  // encryption_type - computed: false, optional: false, required: true
  private _encryptionType?: string; 
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }
}
export interface ConnectInstanceStorageConfigStorageConfigS3Config {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#bucket_name ConnectInstanceStorageConfig#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#bucket_prefix ConnectInstanceStorageConfig#bucket_prefix}
  */
  readonly bucketPrefix: string;
  /**
  * encryption_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#encryption_config ConnectInstanceStorageConfig#encryption_config}
  */
  readonly encryptionConfig?: ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig;
}

export function connectInstanceStorageConfigStorageConfigS3ConfigToTerraform(struct?: ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference | ConnectInstanceStorageConfigStorageConfigS3Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    encryption_config: connectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigToTerraform(struct!.encryptionConfig),
  }
}

export class ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectInstanceStorageConfigStorageConfigS3Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._encryptionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfig = this._encryptionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectInstanceStorageConfigStorageConfigS3Config | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
      this._encryptionConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
      this._encryptionConfig.internalValue = value.encryptionConfig;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix - computed: false, optional: false, required: true
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // encryption_config - computed: false, optional: true, required: false
  private _encryptionConfig = new ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference(this, "encryption_config");
  public get encryptionConfig() {
    return this._encryptionConfig;
  }
  public putEncryptionConfig(value: ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig) {
    this._encryptionConfig.internalValue = value;
  }
  public resetEncryptionConfig() {
    this._encryptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig.internalValue;
  }
}
export interface ConnectInstanceStorageConfigStorageConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#storage_type ConnectInstanceStorageConfig#storage_type}
  */
  readonly storageType: string;
  /**
  * kinesis_firehose_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#kinesis_firehose_config ConnectInstanceStorageConfig#kinesis_firehose_config}
  */
  readonly kinesisFirehoseConfig?: ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig;
  /**
  * kinesis_stream_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#kinesis_stream_config ConnectInstanceStorageConfig#kinesis_stream_config}
  */
  readonly kinesisStreamConfig?: ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig;
  /**
  * kinesis_video_stream_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#kinesis_video_stream_config ConnectInstanceStorageConfig#kinesis_video_stream_config}
  */
  readonly kinesisVideoStreamConfig?: ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig;
  /**
  * s3_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config#s3_config ConnectInstanceStorageConfig#s3_config}
  */
  readonly s3Config?: ConnectInstanceStorageConfigStorageConfigS3Config;
}

export function connectInstanceStorageConfigStorageConfigToTerraform(struct?: ConnectInstanceStorageConfigStorageConfigOutputReference | ConnectInstanceStorageConfigStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_type: cdktf.stringToTerraform(struct!.storageType),
    kinesis_firehose_config: connectInstanceStorageConfigStorageConfigKinesisFirehoseConfigToTerraform(struct!.kinesisFirehoseConfig),
    kinesis_stream_config: connectInstanceStorageConfigStorageConfigKinesisStreamConfigToTerraform(struct!.kinesisStreamConfig),
    kinesis_video_stream_config: connectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigToTerraform(struct!.kinesisVideoStreamConfig),
    s3_config: connectInstanceStorageConfigStorageConfigS3ConfigToTerraform(struct!.s3Config),
  }
}

export class ConnectInstanceStorageConfigStorageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectInstanceStorageConfigStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    if (this._kinesisFirehoseConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisFirehoseConfig = this._kinesisFirehoseConfig?.internalValue;
    }
    if (this._kinesisStreamConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisStreamConfig = this._kinesisStreamConfig?.internalValue;
    }
    if (this._kinesisVideoStreamConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisVideoStreamConfig = this._kinesisVideoStreamConfig?.internalValue;
    }
    if (this._s3Config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Config = this._s3Config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectInstanceStorageConfigStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._storageType = undefined;
      this._kinesisFirehoseConfig.internalValue = undefined;
      this._kinesisStreamConfig.internalValue = undefined;
      this._kinesisVideoStreamConfig.internalValue = undefined;
      this._s3Config.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._storageType = value.storageType;
      this._kinesisFirehoseConfig.internalValue = value.kinesisFirehoseConfig;
      this._kinesisStreamConfig.internalValue = value.kinesisStreamConfig;
      this._kinesisVideoStreamConfig.internalValue = value.kinesisVideoStreamConfig;
      this._s3Config.internalValue = value.s3Config;
    }
  }

  // storage_type - computed: false, optional: false, required: true
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // kinesis_firehose_config - computed: false, optional: true, required: false
  private _kinesisFirehoseConfig = new ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference(this, "kinesis_firehose_config");
  public get kinesisFirehoseConfig() {
    return this._kinesisFirehoseConfig;
  }
  public putKinesisFirehoseConfig(value: ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig) {
    this._kinesisFirehoseConfig.internalValue = value;
  }
  public resetKinesisFirehoseConfig() {
    this._kinesisFirehoseConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisFirehoseConfigInput() {
    return this._kinesisFirehoseConfig.internalValue;
  }

  // kinesis_stream_config - computed: false, optional: true, required: false
  private _kinesisStreamConfig = new ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference(this, "kinesis_stream_config");
  public get kinesisStreamConfig() {
    return this._kinesisStreamConfig;
  }
  public putKinesisStreamConfig(value: ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig) {
    this._kinesisStreamConfig.internalValue = value;
  }
  public resetKinesisStreamConfig() {
    this._kinesisStreamConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisStreamConfigInput() {
    return this._kinesisStreamConfig.internalValue;
  }

  // kinesis_video_stream_config - computed: false, optional: true, required: false
  private _kinesisVideoStreamConfig = new ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference(this, "kinesis_video_stream_config");
  public get kinesisVideoStreamConfig() {
    return this._kinesisVideoStreamConfig;
  }
  public putKinesisVideoStreamConfig(value: ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig) {
    this._kinesisVideoStreamConfig.internalValue = value;
  }
  public resetKinesisVideoStreamConfig() {
    this._kinesisVideoStreamConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisVideoStreamConfigInput() {
    return this._kinesisVideoStreamConfig.internalValue;
  }

  // s3_config - computed: false, optional: true, required: false
  private _s3Config = new ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference(this, "s3_config");
  public get s3Config() {
    return this._s3Config;
  }
  public putS3Config(value: ConnectInstanceStorageConfigStorageConfigS3Config) {
    this._s3Config.internalValue = value;
  }
  public resetS3Config() {
    this._s3Config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigInput() {
    return this._s3Config.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config aws_connect_instance_storage_config}
*/
export class ConnectInstanceStorageConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_connect_instance_storage_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/connect_instance_storage_config aws_connect_instance_storage_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectInstanceStorageConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectInstanceStorageConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_connect_instance_storage_config',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
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
    this._instanceId = config.instanceId;
    this._resourceType = config.resourceType;
    this._storageConfig.internalValue = config.storageConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // association_id - computed: true, optional: false, required: false
  public get associationId() {
    return this.getStringAttribute('association_id');
  }

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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // storage_config - computed: false, optional: false, required: true
  private _storageConfig = new ConnectInstanceStorageConfigStorageConfigOutputReference(this, "storage_config");
  public get storageConfig() {
    return this._storageConfig;
  }
  public putStorageConfig(value: ConnectInstanceStorageConfigStorageConfig) {
    this._storageConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConfigInput() {
    return this._storageConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      storage_config: connectInstanceStorageConfigStorageConfigToTerraform(this._storageConfig.internalValue),
    };
  }
}
