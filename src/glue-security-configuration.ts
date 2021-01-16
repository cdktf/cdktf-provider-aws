// https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlueSecurityConfigurationConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  /** encryption_configuration block */
  readonly encryptionConfiguration: GlueSecurityConfigurationEncryptionConfiguration[];
}
export interface GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption {
  readonly cloudwatchEncryptionMode?: string;
  readonly kmsKeyArn?: string;
}

function glueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionToTerraform(struct?: GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudwatch_encryption_mode: cdktf.stringToTerraform(struct!.cloudwatchEncryptionMode),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
  }
}

export interface GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption {
  readonly jobBookmarksEncryptionMode?: string;
  readonly kmsKeyArn?: string;
}

function glueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionToTerraform(struct?: GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    job_bookmarks_encryption_mode: cdktf.stringToTerraform(struct!.jobBookmarksEncryptionMode),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
  }
}

export interface GlueSecurityConfigurationEncryptionConfigurationS3Encryption {
  readonly kmsKeyArn?: string;
  readonly s3EncryptionMode?: string;
}

function glueSecurityConfigurationEncryptionConfigurationS3EncryptionToTerraform(struct?: GlueSecurityConfigurationEncryptionConfigurationS3Encryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    s3_encryption_mode: cdktf.stringToTerraform(struct!.s3EncryptionMode),
  }
}

export interface GlueSecurityConfigurationEncryptionConfiguration {
  /** cloudwatch_encryption block */
  readonly cloudwatchEncryption: GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption[];
  /** job_bookmarks_encryption block */
  readonly jobBookmarksEncryption: GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption[];
  /** s3_encryption block */
  readonly s3Encryption: GlueSecurityConfigurationEncryptionConfigurationS3Encryption[];
}

function glueSecurityConfigurationEncryptionConfigurationToTerraform(struct?: GlueSecurityConfigurationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudwatch_encryption: cdktf.listMapper(glueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionToTerraform)(struct!.cloudwatchEncryption),
    job_bookmarks_encryption: cdktf.listMapper(glueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionToTerraform)(struct!.jobBookmarksEncryption),
    s3_encryption: cdktf.listMapper(glueSecurityConfigurationEncryptionConfigurationS3EncryptionToTerraform)(struct!.s3Encryption),
  }
}


// Resource

export class GlueSecurityConfiguration extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GlueSecurityConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_security_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._encryptionConfiguration = config.encryptionConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // encryption_configuration - computed: false, optional: false, required: true
  private _encryptionConfiguration: GlueSecurityConfigurationEncryptionConfiguration[];
  public get encryptionConfiguration() {
    return this.interpolationForAttribute('encryption_configuration') as any;
  }
  public set encryptionConfiguration(value: GlueSecurityConfigurationEncryptionConfiguration[]) {
    this._encryptionConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      encryption_configuration: cdktf.listMapper(glueSecurityConfigurationEncryptionConfigurationToTerraform)(this._encryptionConfiguration),
    };
  }
}
