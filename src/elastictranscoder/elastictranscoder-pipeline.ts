// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Elastic Transcoder
*/
export interface ElastictranscoderPipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#aws_kms_key_arn ElastictranscoderPipeline#aws_kms_key_arn}
  */
  readonly awsKmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#input_bucket ElastictranscoderPipeline#input_bucket}
  */
  readonly inputBucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#name ElastictranscoderPipeline#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#output_bucket ElastictranscoderPipeline#output_bucket}
  */
  readonly outputBucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#role ElastictranscoderPipeline#role}
  */
  readonly role: string;
  /**
  * content_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#content_config ElastictranscoderPipeline#content_config}
  */
  readonly contentConfig?: ElastictranscoderPipelineContentConfig;
  /**
  * content_config_permissions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#content_config_permissions ElastictranscoderPipeline#content_config_permissions}
  */
  readonly contentConfigPermissions?: ElastictranscoderPipelineContentConfigPermissions[] | cdktf.IResolvable;
  /**
  * notifications block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#notifications ElastictranscoderPipeline#notifications}
  */
  readonly notifications?: ElastictranscoderPipelineNotifications;
  /**
  * thumbnail_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#thumbnail_config ElastictranscoderPipeline#thumbnail_config}
  */
  readonly thumbnailConfig?: ElastictranscoderPipelineThumbnailConfig;
  /**
  * thumbnail_config_permissions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#thumbnail_config_permissions ElastictranscoderPipeline#thumbnail_config_permissions}
  */
  readonly thumbnailConfigPermissions?: ElastictranscoderPipelineThumbnailConfigPermissions[] | cdktf.IResolvable;
}
export interface ElastictranscoderPipelineContentConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#bucket ElastictranscoderPipeline#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#storage_class ElastictranscoderPipeline#storage_class}
  */
  readonly storageClass?: string;
}

export function elastictranscoderPipelineContentConfigToTerraform(struct?: ElastictranscoderPipelineContentConfigOutputReference | ElastictranscoderPipelineContentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}

export class ElastictranscoderPipelineContentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ElastictranscoderPipelineContentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastictranscoderPipelineContentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._storageClass = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._storageClass = value.storageClass;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}
export interface ElastictranscoderPipelineContentConfigPermissions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#access ElastictranscoderPipeline#access}
  */
  readonly access?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#grantee ElastictranscoderPipeline#grantee}
  */
  readonly grantee?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#grantee_type ElastictranscoderPipeline#grantee_type}
  */
  readonly granteeType?: string;
}

export function elastictranscoderPipelineContentConfigPermissionsToTerraform(struct?: ElastictranscoderPipelineContentConfigPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform)(struct!.access),
    grantee: cdktf.stringToTerraform(struct!.grantee),
    grantee_type: cdktf.stringToTerraform(struct!.granteeType),
  }
}

export interface ElastictranscoderPipelineNotifications {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#completed ElastictranscoderPipeline#completed}
  */
  readonly completed?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#error ElastictranscoderPipeline#error}
  */
  readonly error?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#progressing ElastictranscoderPipeline#progressing}
  */
  readonly progressing?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#warning ElastictranscoderPipeline#warning}
  */
  readonly warning?: string;
}

export function elastictranscoderPipelineNotificationsToTerraform(struct?: ElastictranscoderPipelineNotificationsOutputReference | ElastictranscoderPipelineNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    completed: cdktf.stringToTerraform(struct!.completed),
    error: cdktf.stringToTerraform(struct!.error),
    progressing: cdktf.stringToTerraform(struct!.progressing),
    warning: cdktf.stringToTerraform(struct!.warning),
  }
}

export class ElastictranscoderPipelineNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ElastictranscoderPipelineNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._completed !== undefined) {
      hasAnyValues = true;
      internalValueResult.completed = this._completed;
    }
    if (this._error !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error;
    }
    if (this._progressing !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressing = this._progressing;
    }
    if (this._warning !== undefined) {
      hasAnyValues = true;
      internalValueResult.warning = this._warning;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastictranscoderPipelineNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._completed = undefined;
      this._error = undefined;
      this._progressing = undefined;
      this._warning = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._completed = value.completed;
      this._error = value.error;
      this._progressing = value.progressing;
      this._warning = value.warning;
    }
  }

  // completed - computed: false, optional: true, required: false
  private _completed?: string; 
  public get completed() {
    return this.getStringAttribute('completed');
  }
  public set completed(value: string) {
    this._completed = value;
  }
  public resetCompleted() {
    this._completed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get completedInput() {
    return this._completed;
  }

  // error - computed: false, optional: true, required: false
  private _error?: string; 
  public get error() {
    return this.getStringAttribute('error');
  }
  public set error(value: string) {
    this._error = value;
  }
  public resetError() {
    this._error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error;
  }

  // progressing - computed: false, optional: true, required: false
  private _progressing?: string; 
  public get progressing() {
    return this.getStringAttribute('progressing');
  }
  public set progressing(value: string) {
    this._progressing = value;
  }
  public resetProgressing() {
    this._progressing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressingInput() {
    return this._progressing;
  }

  // warning - computed: false, optional: true, required: false
  private _warning?: string; 
  public get warning() {
    return this.getStringAttribute('warning');
  }
  public set warning(value: string) {
    this._warning = value;
  }
  public resetWarning() {
    this._warning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningInput() {
    return this._warning;
  }
}
export interface ElastictranscoderPipelineThumbnailConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#bucket ElastictranscoderPipeline#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#storage_class ElastictranscoderPipeline#storage_class}
  */
  readonly storageClass?: string;
}

export function elastictranscoderPipelineThumbnailConfigToTerraform(struct?: ElastictranscoderPipelineThumbnailConfigOutputReference | ElastictranscoderPipelineThumbnailConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}

export class ElastictranscoderPipelineThumbnailConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ElastictranscoderPipelineThumbnailConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElastictranscoderPipelineThumbnailConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._storageClass = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._storageClass = value.storageClass;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}
export interface ElastictranscoderPipelineThumbnailConfigPermissions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#access ElastictranscoderPipeline#access}
  */
  readonly access?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#grantee ElastictranscoderPipeline#grantee}
  */
  readonly grantee?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#grantee_type ElastictranscoderPipeline#grantee_type}
  */
  readonly granteeType?: string;
}

export function elastictranscoderPipelineThumbnailConfigPermissionsToTerraform(struct?: ElastictranscoderPipelineThumbnailConfigPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform)(struct!.access),
    grantee: cdktf.stringToTerraform(struct!.grantee),
    grantee_type: cdktf.stringToTerraform(struct!.granteeType),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline aws_elastictranscoder_pipeline}
*/
export class ElastictranscoderPipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_elastictranscoder_pipeline";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline aws_elastictranscoder_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElastictranscoderPipelineConfig
  */
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
    this._contentConfig.internalValue = config.contentConfig;
    this._contentConfigPermissions = config.contentConfigPermissions;
    this._notifications.internalValue = config.notifications;
    this._thumbnailConfig.internalValue = config.thumbnailConfig;
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
  public set awsKmsKeyArn(value: string) {
    this._awsKmsKeyArn = value;
  }
  public resetAwsKmsKeyArn() {
    this._awsKmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsKmsKeyArnInput() {
    return this._awsKmsKeyArn;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // input_bucket - computed: false, optional: false, required: true
  private _inputBucket?: string; 
  public get inputBucket() {
    return this.getStringAttribute('input_bucket');
  }
  public set inputBucket(value: string) {
    this._inputBucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputBucketInput() {
    return this._inputBucket;
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
    return this._name;
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
    return this._outputBucket;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // content_config - computed: false, optional: true, required: false
  private _contentConfig = new ElastictranscoderPipelineContentConfigOutputReference(this, "content_config", true);
  public get contentConfig() {
    return this._contentConfig;
  }
  public putContentConfig(value: ElastictranscoderPipelineContentConfig) {
    this._contentConfig.internalValue = value;
  }
  public resetContentConfig() {
    this._contentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentConfigInput() {
    return this._contentConfig.internalValue;
  }

  // content_config_permissions - computed: false, optional: true, required: false
  private _contentConfigPermissions?: ElastictranscoderPipelineContentConfigPermissions[] | cdktf.IResolvable; 
  public get contentConfigPermissions() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('content_config_permissions')));
  }
  public set contentConfigPermissions(value: ElastictranscoderPipelineContentConfigPermissions[] | cdktf.IResolvable) {
    this._contentConfigPermissions = value;
  }
  public resetContentConfigPermissions() {
    this._contentConfigPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentConfigPermissionsInput() {
    return this._contentConfigPermissions;
  }

  // notifications - computed: false, optional: true, required: false
  private _notifications = new ElastictranscoderPipelineNotificationsOutputReference(this, "notifications", true);
  public get notifications() {
    return this._notifications;
  }
  public putNotifications(value: ElastictranscoderPipelineNotifications) {
    this._notifications.internalValue = value;
  }
  public resetNotifications() {
    this._notifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications.internalValue;
  }

  // thumbnail_config - computed: false, optional: true, required: false
  private _thumbnailConfig = new ElastictranscoderPipelineThumbnailConfigOutputReference(this, "thumbnail_config", true);
  public get thumbnailConfig() {
    return this._thumbnailConfig;
  }
  public putThumbnailConfig(value: ElastictranscoderPipelineThumbnailConfig) {
    this._thumbnailConfig.internalValue = value;
  }
  public resetThumbnailConfig() {
    this._thumbnailConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbnailConfigInput() {
    return this._thumbnailConfig.internalValue;
  }

  // thumbnail_config_permissions - computed: false, optional: true, required: false
  private _thumbnailConfigPermissions?: ElastictranscoderPipelineThumbnailConfigPermissions[] | cdktf.IResolvable; 
  public get thumbnailConfigPermissions() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('thumbnail_config_permissions')));
  }
  public set thumbnailConfigPermissions(value: ElastictranscoderPipelineThumbnailConfigPermissions[] | cdktf.IResolvable) {
    this._thumbnailConfigPermissions = value;
  }
  public resetThumbnailConfigPermissions() {
    this._thumbnailConfigPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbnailConfigPermissionsInput() {
    return this._thumbnailConfigPermissions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_kms_key_arn: cdktf.stringToTerraform(this._awsKmsKeyArn),
      input_bucket: cdktf.stringToTerraform(this._inputBucket),
      name: cdktf.stringToTerraform(this._name),
      output_bucket: cdktf.stringToTerraform(this._outputBucket),
      role: cdktf.stringToTerraform(this._role),
      content_config: elastictranscoderPipelineContentConfigToTerraform(this._contentConfig.internalValue),
      content_config_permissions: cdktf.listMapper(elastictranscoderPipelineContentConfigPermissionsToTerraform)(this._contentConfigPermissions),
      notifications: elastictranscoderPipelineNotificationsToTerraform(this._notifications.internalValue),
      thumbnail_config: elastictranscoderPipelineThumbnailConfigToTerraform(this._thumbnailConfig.internalValue),
      thumbnail_config_permissions: cdktf.listMapper(elastictranscoderPipelineThumbnailConfigPermissionsToTerraform)(this._thumbnailConfigPermissions),
    };
  }
}
