// https://www.terraform.io/docs/providers/aws/r/glue_security_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlueSecurityConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#id GlueSecurityConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#name GlueSecurityConfiguration#name}
  */
  readonly name: string;
  /**
  * encryption_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#encryption_configuration GlueSecurityConfiguration#encryption_configuration}
  */
  readonly encryptionConfiguration: GlueSecurityConfigurationEncryptionConfiguration;
}
export interface GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#cloudwatch_encryption_mode GlueSecurityConfiguration#cloudwatch_encryption_mode}
  */
  readonly cloudwatchEncryptionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#kms_key_arn GlueSecurityConfiguration#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
}

export function glueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionToTerraform(struct?: GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference | GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudwatch_encryption_mode: cdktf.stringToTerraform(struct!.cloudwatchEncryptionMode),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
  }
}

export class GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchEncryptionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchEncryptionMode = this._cloudwatchEncryptionMode;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudwatchEncryptionMode = undefined;
      this._kmsKeyArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudwatchEncryptionMode = value.cloudwatchEncryptionMode;
      this._kmsKeyArn = value.kmsKeyArn;
    }
  }

  // cloudwatch_encryption_mode - computed: false, optional: true, required: false
  private _cloudwatchEncryptionMode?: string; 
  public get cloudwatchEncryptionMode() {
    return this.getStringAttribute('cloudwatch_encryption_mode');
  }
  public set cloudwatchEncryptionMode(value: string) {
    this._cloudwatchEncryptionMode = value;
  }
  public resetCloudwatchEncryptionMode() {
    this._cloudwatchEncryptionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchEncryptionModeInput() {
    return this._cloudwatchEncryptionMode;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }
}
export interface GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#job_bookmarks_encryption_mode GlueSecurityConfiguration#job_bookmarks_encryption_mode}
  */
  readonly jobBookmarksEncryptionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#kms_key_arn GlueSecurityConfiguration#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
}

export function glueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionToTerraform(struct?: GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference | GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    job_bookmarks_encryption_mode: cdktf.stringToTerraform(struct!.jobBookmarksEncryptionMode),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
  }
}

export class GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobBookmarksEncryptionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobBookmarksEncryptionMode = this._jobBookmarksEncryptionMode;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jobBookmarksEncryptionMode = undefined;
      this._kmsKeyArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jobBookmarksEncryptionMode = value.jobBookmarksEncryptionMode;
      this._kmsKeyArn = value.kmsKeyArn;
    }
  }

  // job_bookmarks_encryption_mode - computed: false, optional: true, required: false
  private _jobBookmarksEncryptionMode?: string; 
  public get jobBookmarksEncryptionMode() {
    return this.getStringAttribute('job_bookmarks_encryption_mode');
  }
  public set jobBookmarksEncryptionMode(value: string) {
    this._jobBookmarksEncryptionMode = value;
  }
  public resetJobBookmarksEncryptionMode() {
    this._jobBookmarksEncryptionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobBookmarksEncryptionModeInput() {
    return this._jobBookmarksEncryptionMode;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }
}
export interface GlueSecurityConfigurationEncryptionConfigurationS3Encryption {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#kms_key_arn GlueSecurityConfiguration#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#s3_encryption_mode GlueSecurityConfiguration#s3_encryption_mode}
  */
  readonly s3EncryptionMode?: string;
}

export function glueSecurityConfigurationEncryptionConfigurationS3EncryptionToTerraform(struct?: GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference | GlueSecurityConfigurationEncryptionConfigurationS3Encryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    s3_encryption_mode: cdktf.stringToTerraform(struct!.s3EncryptionMode),
  }
}

export class GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueSecurityConfigurationEncryptionConfigurationS3Encryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._s3EncryptionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3EncryptionMode = this._s3EncryptionMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueSecurityConfigurationEncryptionConfigurationS3Encryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyArn = undefined;
      this._s3EncryptionMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyArn = value.kmsKeyArn;
      this._s3EncryptionMode = value.s3EncryptionMode;
    }
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // s3_encryption_mode - computed: false, optional: true, required: false
  private _s3EncryptionMode?: string; 
  public get s3EncryptionMode() {
    return this.getStringAttribute('s3_encryption_mode');
  }
  public set s3EncryptionMode(value: string) {
    this._s3EncryptionMode = value;
  }
  public resetS3EncryptionMode() {
    this._s3EncryptionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3EncryptionModeInput() {
    return this._s3EncryptionMode;
  }
}
export interface GlueSecurityConfigurationEncryptionConfiguration {
  /**
  * cloudwatch_encryption block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#cloudwatch_encryption GlueSecurityConfiguration#cloudwatch_encryption}
  */
  readonly cloudwatchEncryption: GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption;
  /**
  * job_bookmarks_encryption block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#job_bookmarks_encryption GlueSecurityConfiguration#job_bookmarks_encryption}
  */
  readonly jobBookmarksEncryption: GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption;
  /**
  * s3_encryption block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration#s3_encryption GlueSecurityConfiguration#s3_encryption}
  */
  readonly s3Encryption: GlueSecurityConfigurationEncryptionConfigurationS3Encryption;
}

export function glueSecurityConfigurationEncryptionConfigurationToTerraform(struct?: GlueSecurityConfigurationEncryptionConfigurationOutputReference | GlueSecurityConfigurationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudwatch_encryption: glueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionToTerraform(struct!.cloudwatchEncryption),
    job_bookmarks_encryption: glueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionToTerraform(struct!.jobBookmarksEncryption),
    s3_encryption: glueSecurityConfigurationEncryptionConfigurationS3EncryptionToTerraform(struct!.s3Encryption),
  }
}

export class GlueSecurityConfigurationEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueSecurityConfigurationEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchEncryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchEncryption = this._cloudwatchEncryption?.internalValue;
    }
    if (this._jobBookmarksEncryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobBookmarksEncryption = this._jobBookmarksEncryption?.internalValue;
    }
    if (this._s3Encryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Encryption = this._s3Encryption?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueSecurityConfigurationEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudwatchEncryption.internalValue = undefined;
      this._jobBookmarksEncryption.internalValue = undefined;
      this._s3Encryption.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudwatchEncryption.internalValue = value.cloudwatchEncryption;
      this._jobBookmarksEncryption.internalValue = value.jobBookmarksEncryption;
      this._s3Encryption.internalValue = value.s3Encryption;
    }
  }

  // cloudwatch_encryption - computed: false, optional: false, required: true
  private _cloudwatchEncryption = new GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference(this, "cloudwatch_encryption");
  public get cloudwatchEncryption() {
    return this._cloudwatchEncryption;
  }
  public putCloudwatchEncryption(value: GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption) {
    this._cloudwatchEncryption.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchEncryptionInput() {
    return this._cloudwatchEncryption.internalValue;
  }

  // job_bookmarks_encryption - computed: false, optional: false, required: true
  private _jobBookmarksEncryption = new GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference(this, "job_bookmarks_encryption");
  public get jobBookmarksEncryption() {
    return this._jobBookmarksEncryption;
  }
  public putJobBookmarksEncryption(value: GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption) {
    this._jobBookmarksEncryption.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobBookmarksEncryptionInput() {
    return this._jobBookmarksEncryption.internalValue;
  }

  // s3_encryption - computed: false, optional: false, required: true
  private _s3Encryption = new GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference(this, "s3_encryption");
  public get s3Encryption() {
    return this._s3Encryption;
  }
  public putS3Encryption(value: GlueSecurityConfigurationEncryptionConfigurationS3Encryption) {
    this._s3Encryption.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3EncryptionInput() {
    return this._s3Encryption.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration aws_glue_security_configuration}
*/
export class GlueSecurityConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_glue_security_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration aws_glue_security_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlueSecurityConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: GlueSecurityConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_security_configuration',
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
    this._name = config.name;
    this._encryptionConfiguration.internalValue = config.encryptionConfiguration;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // encryption_configuration - computed: false, optional: false, required: true
  private _encryptionConfiguration = new GlueSecurityConfigurationEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: GlueSecurityConfigurationEncryptionConfiguration) {
    this._encryptionConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      encryption_configuration: glueSecurityConfigurationEncryptionConfigurationToTerraform(this._encryptionConfiguration.internalValue),
    };
  }
}
