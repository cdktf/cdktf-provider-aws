// https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ElastictranscoderPipelineConfig extends TerraformMetaArguments {
  readonly awsKmsKeyArn?: string;
  readonly inputBucket: string;
  readonly name?: string;
  readonly outputBucket?: string;
  readonly role: string;
  /** content_config block */
  readonly contentConfig?: ElastictranscoderPipelineContentConfig[];
  /** content_config_permissions block */
  readonly contentConfigPermissions?: ElastictranscoderPipelineContentConfigPermissions[];
  /** notifications block */
  readonly notifications?: ElastictranscoderPipelineNotifications[];
  /** thumbnail_config block */
  readonly thumbnailConfig?: ElastictranscoderPipelineThumbnailConfig[];
  /** thumbnail_config_permissions block */
  readonly thumbnailConfigPermissions?: ElastictranscoderPipelineThumbnailConfigPermissions[];
}
export interface ElastictranscoderPipelineContentConfig {
  readonly bucket?: string;
  readonly storageClass?: string;
}
export interface ElastictranscoderPipelineContentConfigPermissions {
  readonly access?: string[];
  readonly grantee?: string;
  readonly granteeType?: string;
}
export interface ElastictranscoderPipelineNotifications {
  readonly completed?: string;
  readonly error?: string;
  readonly progressing?: string;
  readonly warning?: string;
}
export interface ElastictranscoderPipelineThumbnailConfig {
  readonly bucket?: string;
  readonly storageClass?: string;
}
export interface ElastictranscoderPipelineThumbnailConfigPermissions {
  readonly access?: string[];
  readonly grantee?: string;
  readonly granteeType?: string;
}

// Resource

export class ElastictranscoderPipeline extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ElastictranscoderPipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elastictranscoder_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._awsKmsKeyArn = config.awsKmsKeyArn;
    this._inputBucket = config.inputBucket;
    this._name = config.name;
    this._outputBucket = config.outputBucket;
    this._role = config.role;
    this._contentConfig = config.contentConfig;
    this._contentConfigPermissions = config.contentConfigPermissions;
    this._notifications = config.notifications;
    this._thumbnailConfig = config.thumbnailConfig;
    this._thumbnailConfigPermissions = config.thumbnailConfigPermissions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_kms_key_arn - computed: false, optional: true, required: false
  private _awsKmsKeyArn?: string;
  public get awsKmsKeyArn() {
    return this.getStringAttribute('aws_kms_key_arn');
  }
  public set awsKmsKeyArn(value: string ) {
    this._awsKmsKeyArn = value;
  }
  public resetAwsKmsKeyArn() {
    this._awsKmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsKmsKeyArnInput() {
    return this._awsKmsKeyArn
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // input_bucket - computed: false, optional: false, required: true
  private _inputBucket: string;
  public get inputBucket() {
    return this.getStringAttribute('input_bucket');
  }
  public set inputBucket(value: string) {
    this._inputBucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputBucketInput() {
    return this._inputBucket
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // output_bucket - computed: true, optional: true, required: false
  private _outputBucket?: string;
  public get outputBucket() {
    return this.getStringAttribute('output_bucket');
  }
  public set outputBucket(value: string) {
    this._outputBucket = value;
  }
  public resetOutputBucket() {
    this._outputBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputBucketInput() {
    return this._outputBucket
  }

  // role - computed: false, optional: false, required: true
  private _role: string;
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role
  }

  // content_config - computed: false, optional: true, required: false
  private _contentConfig?: ElastictranscoderPipelineContentConfig[];
  public get contentConfig() {
    return this.interpolationForAttribute('content_config') as any;
  }
  public set contentConfig(value: ElastictranscoderPipelineContentConfig[] ) {
    this._contentConfig = value;
  }
  public resetContentConfig() {
    this._contentConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentConfigInput() {
    return this._contentConfig
  }

  // content_config_permissions - computed: false, optional: true, required: false
  private _contentConfigPermissions?: ElastictranscoderPipelineContentConfigPermissions[];
  public get contentConfigPermissions() {
    return this.interpolationForAttribute('content_config_permissions') as any;
  }
  public set contentConfigPermissions(value: ElastictranscoderPipelineContentConfigPermissions[] ) {
    this._contentConfigPermissions = value;
  }
  public resetContentConfigPermissions() {
    this._contentConfigPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentConfigPermissionsInput() {
    return this._contentConfigPermissions
  }

  // notifications - computed: false, optional: true, required: false
  private _notifications?: ElastictranscoderPipelineNotifications[];
  public get notifications() {
    return this.interpolationForAttribute('notifications') as any;
  }
  public set notifications(value: ElastictranscoderPipelineNotifications[] ) {
    this._notifications = value;
  }
  public resetNotifications() {
    this._notifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications
  }

  // thumbnail_config - computed: false, optional: true, required: false
  private _thumbnailConfig?: ElastictranscoderPipelineThumbnailConfig[];
  public get thumbnailConfig() {
    return this.interpolationForAttribute('thumbnail_config') as any;
  }
  public set thumbnailConfig(value: ElastictranscoderPipelineThumbnailConfig[] ) {
    this._thumbnailConfig = value;
  }
  public resetThumbnailConfig() {
    this._thumbnailConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbnailConfigInput() {
    return this._thumbnailConfig
  }

  // thumbnail_config_permissions - computed: false, optional: true, required: false
  private _thumbnailConfigPermissions?: ElastictranscoderPipelineThumbnailConfigPermissions[];
  public get thumbnailConfigPermissions() {
    return this.interpolationForAttribute('thumbnail_config_permissions') as any;
  }
  public set thumbnailConfigPermissions(value: ElastictranscoderPipelineThumbnailConfigPermissions[] ) {
    this._thumbnailConfigPermissions = value;
  }
  public resetThumbnailConfigPermissions() {
    this._thumbnailConfigPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbnailConfigPermissionsInput() {
    return this._thumbnailConfigPermissions
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_kms_key_arn: this._awsKmsKeyArn,
      input_bucket: this._inputBucket,
      name: this._name,
      output_bucket: this._outputBucket,
      role: this._role,
      content_config: this._contentConfig,
      content_config_permissions: this._contentConfigPermissions,
      notifications: this._notifications,
      thumbnail_config: this._thumbnailConfig,
      thumbnail_config_permissions: this._thumbnailConfigPermissions,
    };
  }
}
