// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Elastic Transcoder
*/
export namespace ElasticTranscoder {
  export interface ElastictranscoderPipelineConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#aws_kms_key_arn ElastictranscoderPipeline#aws_kms_key_arn}
    */
    readonly awsKmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#input_bucket ElastictranscoderPipeline#input_bucket}
    */
    readonly inputBucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#name ElastictranscoderPipeline#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#output_bucket ElastictranscoderPipeline#output_bucket}
    */
    readonly outputBucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#role ElastictranscoderPipeline#role}
    */
    readonly role: string;
    /**
    * content_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#content_config ElastictranscoderPipeline#content_config}
    */
    readonly contentConfig?: ElastictranscoderPipelineContentConfig;
    /**
    * content_config_permissions block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#content_config_permissions ElastictranscoderPipeline#content_config_permissions}
    */
    readonly contentConfigPermissions?: ElastictranscoderPipelineContentConfigPermissions[];
    /**
    * notifications block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#notifications ElastictranscoderPipeline#notifications}
    */
    readonly notifications?: ElastictranscoderPipelineNotifications;
    /**
    * thumbnail_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#thumbnail_config ElastictranscoderPipeline#thumbnail_config}
    */
    readonly thumbnailConfig?: ElastictranscoderPipelineThumbnailConfig;
    /**
    * thumbnail_config_permissions block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#thumbnail_config_permissions ElastictranscoderPipeline#thumbnail_config_permissions}
    */
    readonly thumbnailConfigPermissions?: ElastictranscoderPipelineThumbnailConfigPermissions[];
  }
  export interface ElastictranscoderPipelineContentConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#bucket ElastictranscoderPipeline#bucket}
    */
    readonly bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#storage_class ElastictranscoderPipeline#storage_class}
    */
    readonly storageClass?: string;
  }

  function elastictranscoderPipelineContentConfigToTerraform(struct?: ElastictranscoderPipelineContentConfigOutputReference | ElastictranscoderPipelineContentConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      bucket: cdktf.stringToTerraform(struct!.bucket),
      storage_class: cdktf.stringToTerraform(struct!.storageClass),
    }
  }

  export class ElastictranscoderPipelineContentConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // bucket - computed: true, optional: true, required: false
    private _bucket?: string | undefined; 
    public get bucket() {
      return this.getStringAttribute('bucket');
    }
    public set bucket(value: string | undefined) {
      this._bucket = value;
    }
    public resetBucket() {
      this._bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
      return this._bucket
    }

    // storage_class - computed: false, optional: true, required: false
    private _storageClass?: string | undefined; 
    public get storageClass() {
      return this.getStringAttribute('storage_class');
    }
    public set storageClass(value: string | undefined) {
      this._storageClass = value;
    }
    public resetStorageClass() {
      this._storageClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageClassInput() {
      return this._storageClass
    }
  }
  export interface ElastictranscoderPipelineContentConfigPermissions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#access ElastictranscoderPipeline#access}
    */
    readonly access?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#grantee ElastictranscoderPipeline#grantee}
    */
    readonly grantee?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#grantee_type ElastictranscoderPipeline#grantee_type}
    */
    readonly granteeType?: string;
  }

  function elastictranscoderPipelineContentConfigPermissionsToTerraform(struct?: ElastictranscoderPipelineContentConfigPermissions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#completed ElastictranscoderPipeline#completed}
    */
    readonly completed?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#error ElastictranscoderPipeline#error}
    */
    readonly error?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#progressing ElastictranscoderPipeline#progressing}
    */
    readonly progressing?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#warning ElastictranscoderPipeline#warning}
    */
    readonly warning?: string;
  }

  function elastictranscoderPipelineNotificationsToTerraform(struct?: ElastictranscoderPipelineNotificationsOutputReference | ElastictranscoderPipelineNotifications): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // completed - computed: false, optional: true, required: false
    private _completed?: string | undefined; 
    public get completed() {
      return this.getStringAttribute('completed');
    }
    public set completed(value: string | undefined) {
      this._completed = value;
    }
    public resetCompleted() {
      this._completed = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get completedInput() {
      return this._completed
    }

    // error - computed: false, optional: true, required: false
    private _error?: string | undefined; 
    public get error() {
      return this.getStringAttribute('error');
    }
    public set error(value: string | undefined) {
      this._error = value;
    }
    public resetError() {
      this._error = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get errorInput() {
      return this._error
    }

    // progressing - computed: false, optional: true, required: false
    private _progressing?: string | undefined; 
    public get progressing() {
      return this.getStringAttribute('progressing');
    }
    public set progressing(value: string | undefined) {
      this._progressing = value;
    }
    public resetProgressing() {
      this._progressing = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get progressingInput() {
      return this._progressing
    }

    // warning - computed: false, optional: true, required: false
    private _warning?: string | undefined; 
    public get warning() {
      return this.getStringAttribute('warning');
    }
    public set warning(value: string | undefined) {
      this._warning = value;
    }
    public resetWarning() {
      this._warning = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get warningInput() {
      return this._warning
    }
  }
  export interface ElastictranscoderPipelineThumbnailConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#bucket ElastictranscoderPipeline#bucket}
    */
    readonly bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#storage_class ElastictranscoderPipeline#storage_class}
    */
    readonly storageClass?: string;
  }

  function elastictranscoderPipelineThumbnailConfigToTerraform(struct?: ElastictranscoderPipelineThumbnailConfigOutputReference | ElastictranscoderPipelineThumbnailConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      bucket: cdktf.stringToTerraform(struct!.bucket),
      storage_class: cdktf.stringToTerraform(struct!.storageClass),
    }
  }

  export class ElastictranscoderPipelineThumbnailConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // bucket - computed: true, optional: true, required: false
    private _bucket?: string | undefined; 
    public get bucket() {
      return this.getStringAttribute('bucket');
    }
    public set bucket(value: string | undefined) {
      this._bucket = value;
    }
    public resetBucket() {
      this._bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
      return this._bucket
    }

    // storage_class - computed: false, optional: true, required: false
    private _storageClass?: string | undefined; 
    public get storageClass() {
      return this.getStringAttribute('storage_class');
    }
    public set storageClass(value: string | undefined) {
      this._storageClass = value;
    }
    public resetStorageClass() {
      this._storageClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageClassInput() {
      return this._storageClass
    }
  }
  export interface ElastictranscoderPipelineThumbnailConfigPermissions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#access ElastictranscoderPipeline#access}
    */
    readonly access?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#grantee ElastictranscoderPipeline#grantee}
    */
    readonly grantee?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#grantee_type ElastictranscoderPipeline#grantee_type}
    */
    readonly granteeType?: string;
  }

  function elastictranscoderPipelineThumbnailConfigPermissionsToTerraform(struct?: ElastictranscoderPipelineThumbnailConfigPermissions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html aws_elastictranscoder_pipeline}
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
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html aws_elastictranscoder_pipeline} Resource
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
    private _awsKmsKeyArn?: string | undefined; 
    public get awsKmsKeyArn() {
      return this.getStringAttribute('aws_kms_key_arn');
    }
    public set awsKmsKeyArn(value: string | undefined) {
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
    private _inputBucket?: string; 
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
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
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
    private _outputBucket?: string | undefined; 
    public get outputBucket() {
      return this.getStringAttribute('output_bucket');
    }
    public set outputBucket(value: string | undefined) {
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
    private _role?: string; 
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
    private _contentConfig?: ElastictranscoderPipelineContentConfig | undefined; 
    private __contentConfigOutput = new ElastictranscoderPipelineContentConfigOutputReference(this as any, "content_config", true);
    public get contentConfig() {
      return this.__contentConfigOutput;
    }
    public putContentConfig(value: ElastictranscoderPipelineContentConfig | undefined) {
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
    private _contentConfigPermissions?: ElastictranscoderPipelineContentConfigPermissions[] | undefined; 
    public get contentConfigPermissions() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('content_config_permissions') as any;
    }
    public set contentConfigPermissions(value: ElastictranscoderPipelineContentConfigPermissions[] | undefined) {
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
    private _notifications?: ElastictranscoderPipelineNotifications | undefined; 
    private __notificationsOutput = new ElastictranscoderPipelineNotificationsOutputReference(this as any, "notifications", true);
    public get notifications() {
      return this.__notificationsOutput;
    }
    public putNotifications(value: ElastictranscoderPipelineNotifications | undefined) {
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
    private _thumbnailConfig?: ElastictranscoderPipelineThumbnailConfig | undefined; 
    private __thumbnailConfigOutput = new ElastictranscoderPipelineThumbnailConfigOutputReference(this as any, "thumbnail_config", true);
    public get thumbnailConfig() {
      return this.__thumbnailConfigOutput;
    }
    public putThumbnailConfig(value: ElastictranscoderPipelineThumbnailConfig | undefined) {
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
    private _thumbnailConfigPermissions?: ElastictranscoderPipelineThumbnailConfigPermissions[] | undefined; 
    public get thumbnailConfigPermissions() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('thumbnail_config_permissions') as any;
    }
    public set thumbnailConfigPermissions(value: ElastictranscoderPipelineThumbnailConfigPermissions[] | undefined) {
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
        aws_kms_key_arn: cdktf.stringToTerraform(this._awsKmsKeyArn),
        input_bucket: cdktf.stringToTerraform(this._inputBucket),
        name: cdktf.stringToTerraform(this._name),
        output_bucket: cdktf.stringToTerraform(this._outputBucket),
        role: cdktf.stringToTerraform(this._role),
        content_config: elastictranscoderPipelineContentConfigToTerraform(this._contentConfig),
        content_config_permissions: cdktf.listMapper(elastictranscoderPipelineContentConfigPermissionsToTerraform)(this._contentConfigPermissions),
        notifications: elastictranscoderPipelineNotificationsToTerraform(this._notifications),
        thumbnail_config: elastictranscoderPipelineThumbnailConfigToTerraform(this._thumbnailConfig),
        thumbnail_config_permissions: cdktf.listMapper(elastictranscoderPipelineThumbnailConfigPermissionsToTerraform)(this._thumbnailConfigPermissions),
      };
    }
  }
  export interface ElastictranscoderPresetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#container ElastictranscoderPreset#container}
    */
    readonly container: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#description ElastictranscoderPreset#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#name ElastictranscoderPreset#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#type ElastictranscoderPreset#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#video_codec_options ElastictranscoderPreset#video_codec_options}
    */
    readonly videoCodecOptions?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * audio block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#audio ElastictranscoderPreset#audio}
    */
    readonly audio?: ElastictranscoderPresetAudio;
    /**
    * audio_codec_options block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#audio_codec_options ElastictranscoderPreset#audio_codec_options}
    */
    readonly audioCodecOptions?: ElastictranscoderPresetAudioCodecOptions;
    /**
    * thumbnails block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#thumbnails ElastictranscoderPreset#thumbnails}
    */
    readonly thumbnails?: ElastictranscoderPresetThumbnails;
    /**
    * video block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#video ElastictranscoderPreset#video}
    */
    readonly video?: ElastictranscoderPresetVideo;
    /**
    * video_watermarks block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#video_watermarks ElastictranscoderPreset#video_watermarks}
    */
    readonly videoWatermarks?: ElastictranscoderPresetVideoWatermarks[];
  }
  export interface ElastictranscoderPresetAudio {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#audio_packing_mode ElastictranscoderPreset#audio_packing_mode}
    */
    readonly audioPackingMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#bit_rate ElastictranscoderPreset#bit_rate}
    */
    readonly bitRate?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#channels ElastictranscoderPreset#channels}
    */
    readonly channels?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#codec ElastictranscoderPreset#codec}
    */
    readonly codec?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#sample_rate ElastictranscoderPreset#sample_rate}
    */
    readonly sampleRate?: string;
  }

  function elastictranscoderPresetAudioToTerraform(struct?: ElastictranscoderPresetAudioOutputReference | ElastictranscoderPresetAudio): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      audio_packing_mode: cdktf.stringToTerraform(struct!.audioPackingMode),
      bit_rate: cdktf.stringToTerraform(struct!.bitRate),
      channels: cdktf.stringToTerraform(struct!.channels),
      codec: cdktf.stringToTerraform(struct!.codec),
      sample_rate: cdktf.stringToTerraform(struct!.sampleRate),
    }
  }

  export class ElastictranscoderPresetAudioOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // audio_packing_mode - computed: false, optional: true, required: false
    private _audioPackingMode?: string | undefined; 
    public get audioPackingMode() {
      return this.getStringAttribute('audio_packing_mode');
    }
    public set audioPackingMode(value: string | undefined) {
      this._audioPackingMode = value;
    }
    public resetAudioPackingMode() {
      this._audioPackingMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get audioPackingModeInput() {
      return this._audioPackingMode
    }

    // bit_rate - computed: false, optional: true, required: false
    private _bitRate?: string | undefined; 
    public get bitRate() {
      return this.getStringAttribute('bit_rate');
    }
    public set bitRate(value: string | undefined) {
      this._bitRate = value;
    }
    public resetBitRate() {
      this._bitRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bitRateInput() {
      return this._bitRate
    }

    // channels - computed: false, optional: true, required: false
    private _channels?: string | undefined; 
    public get channels() {
      return this.getStringAttribute('channels');
    }
    public set channels(value: string | undefined) {
      this._channels = value;
    }
    public resetChannels() {
      this._channels = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get channelsInput() {
      return this._channels
    }

    // codec - computed: false, optional: true, required: false
    private _codec?: string | undefined; 
    public get codec() {
      return this.getStringAttribute('codec');
    }
    public set codec(value: string | undefined) {
      this._codec = value;
    }
    public resetCodec() {
      this._codec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codecInput() {
      return this._codec
    }

    // sample_rate - computed: false, optional: true, required: false
    private _sampleRate?: string | undefined; 
    public get sampleRate() {
      return this.getStringAttribute('sample_rate');
    }
    public set sampleRate(value: string | undefined) {
      this._sampleRate = value;
    }
    public resetSampleRate() {
      this._sampleRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sampleRateInput() {
      return this._sampleRate
    }
  }
  export interface ElastictranscoderPresetAudioCodecOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#bit_depth ElastictranscoderPreset#bit_depth}
    */
    readonly bitDepth?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#bit_order ElastictranscoderPreset#bit_order}
    */
    readonly bitOrder?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#profile ElastictranscoderPreset#profile}
    */
    readonly profile?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#signed ElastictranscoderPreset#signed}
    */
    readonly signed?: string;
  }

  function elastictranscoderPresetAudioCodecOptionsToTerraform(struct?: ElastictranscoderPresetAudioCodecOptionsOutputReference | ElastictranscoderPresetAudioCodecOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      bit_depth: cdktf.stringToTerraform(struct!.bitDepth),
      bit_order: cdktf.stringToTerraform(struct!.bitOrder),
      profile: cdktf.stringToTerraform(struct!.profile),
      signed: cdktf.stringToTerraform(struct!.signed),
    }
  }

  export class ElastictranscoderPresetAudioCodecOptionsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // bit_depth - computed: false, optional: true, required: false
    private _bitDepth?: string | undefined; 
    public get bitDepth() {
      return this.getStringAttribute('bit_depth');
    }
    public set bitDepth(value: string | undefined) {
      this._bitDepth = value;
    }
    public resetBitDepth() {
      this._bitDepth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bitDepthInput() {
      return this._bitDepth
    }

    // bit_order - computed: false, optional: true, required: false
    private _bitOrder?: string | undefined; 
    public get bitOrder() {
      return this.getStringAttribute('bit_order');
    }
    public set bitOrder(value: string | undefined) {
      this._bitOrder = value;
    }
    public resetBitOrder() {
      this._bitOrder = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bitOrderInput() {
      return this._bitOrder
    }

    // profile - computed: false, optional: true, required: false
    private _profile?: string | undefined; 
    public get profile() {
      return this.getStringAttribute('profile');
    }
    public set profile(value: string | undefined) {
      this._profile = value;
    }
    public resetProfile() {
      this._profile = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get profileInput() {
      return this._profile
    }

    // signed - computed: false, optional: true, required: false
    private _signed?: string | undefined; 
    public get signed() {
      return this.getStringAttribute('signed');
    }
    public set signed(value: string | undefined) {
      this._signed = value;
    }
    public resetSigned() {
      this._signed = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get signedInput() {
      return this._signed
    }
  }
  export interface ElastictranscoderPresetThumbnails {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#aspect_ratio ElastictranscoderPreset#aspect_ratio}
    */
    readonly aspectRatio?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#format ElastictranscoderPreset#format}
    */
    readonly format?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#interval ElastictranscoderPreset#interval}
    */
    readonly interval?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#max_height ElastictranscoderPreset#max_height}
    */
    readonly maxHeight?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#max_width ElastictranscoderPreset#max_width}
    */
    readonly maxWidth?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#padding_policy ElastictranscoderPreset#padding_policy}
    */
    readonly paddingPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#resolution ElastictranscoderPreset#resolution}
    */
    readonly resolution?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#sizing_policy ElastictranscoderPreset#sizing_policy}
    */
    readonly sizingPolicy?: string;
  }

  function elastictranscoderPresetThumbnailsToTerraform(struct?: ElastictranscoderPresetThumbnailsOutputReference | ElastictranscoderPresetThumbnails): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      aspect_ratio: cdktf.stringToTerraform(struct!.aspectRatio),
      format: cdktf.stringToTerraform(struct!.format),
      interval: cdktf.stringToTerraform(struct!.interval),
      max_height: cdktf.stringToTerraform(struct!.maxHeight),
      max_width: cdktf.stringToTerraform(struct!.maxWidth),
      padding_policy: cdktf.stringToTerraform(struct!.paddingPolicy),
      resolution: cdktf.stringToTerraform(struct!.resolution),
      sizing_policy: cdktf.stringToTerraform(struct!.sizingPolicy),
    }
  }

  export class ElastictranscoderPresetThumbnailsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // aspect_ratio - computed: false, optional: true, required: false
    private _aspectRatio?: string | undefined; 
    public get aspectRatio() {
      return this.getStringAttribute('aspect_ratio');
    }
    public set aspectRatio(value: string | undefined) {
      this._aspectRatio = value;
    }
    public resetAspectRatio() {
      this._aspectRatio = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aspectRatioInput() {
      return this._aspectRatio
    }

    // format - computed: false, optional: true, required: false
    private _format?: string | undefined; 
    public get format() {
      return this.getStringAttribute('format');
    }
    public set format(value: string | undefined) {
      this._format = value;
    }
    public resetFormat() {
      this._format = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get formatInput() {
      return this._format
    }

    // interval - computed: false, optional: true, required: false
    private _interval?: string | undefined; 
    public get interval() {
      return this.getStringAttribute('interval');
    }
    public set interval(value: string | undefined) {
      this._interval = value;
    }
    public resetInterval() {
      this._interval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalInput() {
      return this._interval
    }

    // max_height - computed: false, optional: true, required: false
    private _maxHeight?: string | undefined; 
    public get maxHeight() {
      return this.getStringAttribute('max_height');
    }
    public set maxHeight(value: string | undefined) {
      this._maxHeight = value;
    }
    public resetMaxHeight() {
      this._maxHeight = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxHeightInput() {
      return this._maxHeight
    }

    // max_width - computed: false, optional: true, required: false
    private _maxWidth?: string | undefined; 
    public get maxWidth() {
      return this.getStringAttribute('max_width');
    }
    public set maxWidth(value: string | undefined) {
      this._maxWidth = value;
    }
    public resetMaxWidth() {
      this._maxWidth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxWidthInput() {
      return this._maxWidth
    }

    // padding_policy - computed: false, optional: true, required: false
    private _paddingPolicy?: string | undefined; 
    public get paddingPolicy() {
      return this.getStringAttribute('padding_policy');
    }
    public set paddingPolicy(value: string | undefined) {
      this._paddingPolicy = value;
    }
    public resetPaddingPolicy() {
      this._paddingPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get paddingPolicyInput() {
      return this._paddingPolicy
    }

    // resolution - computed: false, optional: true, required: false
    private _resolution?: string | undefined; 
    public get resolution() {
      return this.getStringAttribute('resolution');
    }
    public set resolution(value: string | undefined) {
      this._resolution = value;
    }
    public resetResolution() {
      this._resolution = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resolutionInput() {
      return this._resolution
    }

    // sizing_policy - computed: false, optional: true, required: false
    private _sizingPolicy?: string | undefined; 
    public get sizingPolicy() {
      return this.getStringAttribute('sizing_policy');
    }
    public set sizingPolicy(value: string | undefined) {
      this._sizingPolicy = value;
    }
    public resetSizingPolicy() {
      this._sizingPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sizingPolicyInput() {
      return this._sizingPolicy
    }
  }
  export interface ElastictranscoderPresetVideo {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#aspect_ratio ElastictranscoderPreset#aspect_ratio}
    */
    readonly aspectRatio?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#bit_rate ElastictranscoderPreset#bit_rate}
    */
    readonly bitRate?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#codec ElastictranscoderPreset#codec}
    */
    readonly codec?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#display_aspect_ratio ElastictranscoderPreset#display_aspect_ratio}
    */
    readonly displayAspectRatio?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#fixed_gop ElastictranscoderPreset#fixed_gop}
    */
    readonly fixedGop?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#frame_rate ElastictranscoderPreset#frame_rate}
    */
    readonly frameRate?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#keyframes_max_dist ElastictranscoderPreset#keyframes_max_dist}
    */
    readonly keyframesMaxDist?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#max_frame_rate ElastictranscoderPreset#max_frame_rate}
    */
    readonly maxFrameRate?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#max_height ElastictranscoderPreset#max_height}
    */
    readonly maxHeight?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#max_width ElastictranscoderPreset#max_width}
    */
    readonly maxWidth?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#padding_policy ElastictranscoderPreset#padding_policy}
    */
    readonly paddingPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#resolution ElastictranscoderPreset#resolution}
    */
    readonly resolution?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#sizing_policy ElastictranscoderPreset#sizing_policy}
    */
    readonly sizingPolicy?: string;
  }

  function elastictranscoderPresetVideoToTerraform(struct?: ElastictranscoderPresetVideoOutputReference | ElastictranscoderPresetVideo): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      aspect_ratio: cdktf.stringToTerraform(struct!.aspectRatio),
      bit_rate: cdktf.stringToTerraform(struct!.bitRate),
      codec: cdktf.stringToTerraform(struct!.codec),
      display_aspect_ratio: cdktf.stringToTerraform(struct!.displayAspectRatio),
      fixed_gop: cdktf.stringToTerraform(struct!.fixedGop),
      frame_rate: cdktf.stringToTerraform(struct!.frameRate),
      keyframes_max_dist: cdktf.stringToTerraform(struct!.keyframesMaxDist),
      max_frame_rate: cdktf.stringToTerraform(struct!.maxFrameRate),
      max_height: cdktf.stringToTerraform(struct!.maxHeight),
      max_width: cdktf.stringToTerraform(struct!.maxWidth),
      padding_policy: cdktf.stringToTerraform(struct!.paddingPolicy),
      resolution: cdktf.stringToTerraform(struct!.resolution),
      sizing_policy: cdktf.stringToTerraform(struct!.sizingPolicy),
    }
  }

  export class ElastictranscoderPresetVideoOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // aspect_ratio - computed: false, optional: true, required: false
    private _aspectRatio?: string | undefined; 
    public get aspectRatio() {
      return this.getStringAttribute('aspect_ratio');
    }
    public set aspectRatio(value: string | undefined) {
      this._aspectRatio = value;
    }
    public resetAspectRatio() {
      this._aspectRatio = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aspectRatioInput() {
      return this._aspectRatio
    }

    // bit_rate - computed: false, optional: true, required: false
    private _bitRate?: string | undefined; 
    public get bitRate() {
      return this.getStringAttribute('bit_rate');
    }
    public set bitRate(value: string | undefined) {
      this._bitRate = value;
    }
    public resetBitRate() {
      this._bitRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bitRateInput() {
      return this._bitRate
    }

    // codec - computed: false, optional: true, required: false
    private _codec?: string | undefined; 
    public get codec() {
      return this.getStringAttribute('codec');
    }
    public set codec(value: string | undefined) {
      this._codec = value;
    }
    public resetCodec() {
      this._codec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codecInput() {
      return this._codec
    }

    // display_aspect_ratio - computed: false, optional: true, required: false
    private _displayAspectRatio?: string | undefined; 
    public get displayAspectRatio() {
      return this.getStringAttribute('display_aspect_ratio');
    }
    public set displayAspectRatio(value: string | undefined) {
      this._displayAspectRatio = value;
    }
    public resetDisplayAspectRatio() {
      this._displayAspectRatio = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get displayAspectRatioInput() {
      return this._displayAspectRatio
    }

    // fixed_gop - computed: false, optional: true, required: false
    private _fixedGop?: string | undefined; 
    public get fixedGop() {
      return this.getStringAttribute('fixed_gop');
    }
    public set fixedGop(value: string | undefined) {
      this._fixedGop = value;
    }
    public resetFixedGop() {
      this._fixedGop = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fixedGopInput() {
      return this._fixedGop
    }

    // frame_rate - computed: false, optional: true, required: false
    private _frameRate?: string | undefined; 
    public get frameRate() {
      return this.getStringAttribute('frame_rate');
    }
    public set frameRate(value: string | undefined) {
      this._frameRate = value;
    }
    public resetFrameRate() {
      this._frameRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get frameRateInput() {
      return this._frameRate
    }

    // keyframes_max_dist - computed: false, optional: true, required: false
    private _keyframesMaxDist?: string | undefined; 
    public get keyframesMaxDist() {
      return this.getStringAttribute('keyframes_max_dist');
    }
    public set keyframesMaxDist(value: string | undefined) {
      this._keyframesMaxDist = value;
    }
    public resetKeyframesMaxDist() {
      this._keyframesMaxDist = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyframesMaxDistInput() {
      return this._keyframesMaxDist
    }

    // max_frame_rate - computed: true, optional: true, required: false
    private _maxFrameRate?: string | undefined; 
    public get maxFrameRate() {
      return this.getStringAttribute('max_frame_rate');
    }
    public set maxFrameRate(value: string | undefined) {
      this._maxFrameRate = value;
    }
    public resetMaxFrameRate() {
      this._maxFrameRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxFrameRateInput() {
      return this._maxFrameRate
    }

    // max_height - computed: false, optional: true, required: false
    private _maxHeight?: string | undefined; 
    public get maxHeight() {
      return this.getStringAttribute('max_height');
    }
    public set maxHeight(value: string | undefined) {
      this._maxHeight = value;
    }
    public resetMaxHeight() {
      this._maxHeight = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxHeightInput() {
      return this._maxHeight
    }

    // max_width - computed: false, optional: true, required: false
    private _maxWidth?: string | undefined; 
    public get maxWidth() {
      return this.getStringAttribute('max_width');
    }
    public set maxWidth(value: string | undefined) {
      this._maxWidth = value;
    }
    public resetMaxWidth() {
      this._maxWidth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxWidthInput() {
      return this._maxWidth
    }

    // padding_policy - computed: false, optional: true, required: false
    private _paddingPolicy?: string | undefined; 
    public get paddingPolicy() {
      return this.getStringAttribute('padding_policy');
    }
    public set paddingPolicy(value: string | undefined) {
      this._paddingPolicy = value;
    }
    public resetPaddingPolicy() {
      this._paddingPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get paddingPolicyInput() {
      return this._paddingPolicy
    }

    // resolution - computed: false, optional: true, required: false
    private _resolution?: string | undefined; 
    public get resolution() {
      return this.getStringAttribute('resolution');
    }
    public set resolution(value: string | undefined) {
      this._resolution = value;
    }
    public resetResolution() {
      this._resolution = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resolutionInput() {
      return this._resolution
    }

    // sizing_policy - computed: false, optional: true, required: false
    private _sizingPolicy?: string | undefined; 
    public get sizingPolicy() {
      return this.getStringAttribute('sizing_policy');
    }
    public set sizingPolicy(value: string | undefined) {
      this._sizingPolicy = value;
    }
    public resetSizingPolicy() {
      this._sizingPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sizingPolicyInput() {
      return this._sizingPolicy
    }
  }
  export interface ElastictranscoderPresetVideoWatermarks {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#horizontal_align ElastictranscoderPreset#horizontal_align}
    */
    readonly horizontalAlign?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#horizontal_offset ElastictranscoderPreset#horizontal_offset}
    */
    readonly horizontalOffset?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#id ElastictranscoderPreset#id}
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#max_height ElastictranscoderPreset#max_height}
    */
    readonly maxHeight?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#max_width ElastictranscoderPreset#max_width}
    */
    readonly maxWidth?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#opacity ElastictranscoderPreset#opacity}
    */
    readonly opacity?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#sizing_policy ElastictranscoderPreset#sizing_policy}
    */
    readonly sizingPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#target ElastictranscoderPreset#target}
    */
    readonly target?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#vertical_align ElastictranscoderPreset#vertical_align}
    */
    readonly verticalAlign?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#vertical_offset ElastictranscoderPreset#vertical_offset}
    */
    readonly verticalOffset?: string;
  }

  function elastictranscoderPresetVideoWatermarksToTerraform(struct?: ElastictranscoderPresetVideoWatermarks): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      horizontal_align: cdktf.stringToTerraform(struct!.horizontalAlign),
      horizontal_offset: cdktf.stringToTerraform(struct!.horizontalOffset),
      id: cdktf.stringToTerraform(struct!.id),
      max_height: cdktf.stringToTerraform(struct!.maxHeight),
      max_width: cdktf.stringToTerraform(struct!.maxWidth),
      opacity: cdktf.stringToTerraform(struct!.opacity),
      sizing_policy: cdktf.stringToTerraform(struct!.sizingPolicy),
      target: cdktf.stringToTerraform(struct!.target),
      vertical_align: cdktf.stringToTerraform(struct!.verticalAlign),
      vertical_offset: cdktf.stringToTerraform(struct!.verticalOffset),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html aws_elastictranscoder_preset}
  */
  export class ElastictranscoderPreset extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_elastictranscoder_preset";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html aws_elastictranscoder_preset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElastictranscoderPresetConfig
    */
    public constructor(scope: Construct, id: string, config: ElastictranscoderPresetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_elastictranscoder_preset',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._container = config.container;
      this._description = config.description;
      this._name = config.name;
      this._type = config.type;
      this._videoCodecOptions = config.videoCodecOptions;
      this._audio = config.audio;
      this._audioCodecOptions = config.audioCodecOptions;
      this._thumbnails = config.thumbnails;
      this._video = config.video;
      this._videoWatermarks = config.videoWatermarks;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // container - computed: false, optional: false, required: true
    private _container?: string; 
    public get container() {
      return this.getStringAttribute('container');
    }
    public set container(value: string) {
      this._container = value;
    }
    // Temporarily expose input value. Use with caution.
    public get containerInput() {
      return this._container
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // type - computed: true, optional: true, required: false
    private _type?: string | undefined; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string | undefined) {
      this._type = value;
    }
    public resetType() {
      this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }

    // video_codec_options - computed: false, optional: true, required: false
    private _videoCodecOptions?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get videoCodecOptions() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('video_codec_options') as any;
    }
    public set videoCodecOptions(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._videoCodecOptions = value;
    }
    public resetVideoCodecOptions() {
      this._videoCodecOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get videoCodecOptionsInput() {
      return this._videoCodecOptions
    }

    // audio - computed: false, optional: true, required: false
    private _audio?: ElastictranscoderPresetAudio | undefined; 
    private __audioOutput = new ElastictranscoderPresetAudioOutputReference(this as any, "audio", true);
    public get audio() {
      return this.__audioOutput;
    }
    public putAudio(value: ElastictranscoderPresetAudio | undefined) {
      this._audio = value;
    }
    public resetAudio() {
      this._audio = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get audioInput() {
      return this._audio
    }

    // audio_codec_options - computed: false, optional: true, required: false
    private _audioCodecOptions?: ElastictranscoderPresetAudioCodecOptions | undefined; 
    private __audioCodecOptionsOutput = new ElastictranscoderPresetAudioCodecOptionsOutputReference(this as any, "audio_codec_options", true);
    public get audioCodecOptions() {
      return this.__audioCodecOptionsOutput;
    }
    public putAudioCodecOptions(value: ElastictranscoderPresetAudioCodecOptions | undefined) {
      this._audioCodecOptions = value;
    }
    public resetAudioCodecOptions() {
      this._audioCodecOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get audioCodecOptionsInput() {
      return this._audioCodecOptions
    }

    // thumbnails - computed: false, optional: true, required: false
    private _thumbnails?: ElastictranscoderPresetThumbnails | undefined; 
    private __thumbnailsOutput = new ElastictranscoderPresetThumbnailsOutputReference(this as any, "thumbnails", true);
    public get thumbnails() {
      return this.__thumbnailsOutput;
    }
    public putThumbnails(value: ElastictranscoderPresetThumbnails | undefined) {
      this._thumbnails = value;
    }
    public resetThumbnails() {
      this._thumbnails = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get thumbnailsInput() {
      return this._thumbnails
    }

    // video - computed: false, optional: true, required: false
    private _video?: ElastictranscoderPresetVideo | undefined; 
    private __videoOutput = new ElastictranscoderPresetVideoOutputReference(this as any, "video", true);
    public get video() {
      return this.__videoOutput;
    }
    public putVideo(value: ElastictranscoderPresetVideo | undefined) {
      this._video = value;
    }
    public resetVideo() {
      this._video = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get videoInput() {
      return this._video
    }

    // video_watermarks - computed: false, optional: true, required: false
    private _videoWatermarks?: ElastictranscoderPresetVideoWatermarks[] | undefined; 
    public get videoWatermarks() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('video_watermarks') as any;
    }
    public set videoWatermarks(value: ElastictranscoderPresetVideoWatermarks[] | undefined) {
      this._videoWatermarks = value;
    }
    public resetVideoWatermarks() {
      this._videoWatermarks = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get videoWatermarksInput() {
      return this._videoWatermarks
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        container: cdktf.stringToTerraform(this._container),
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        type: cdktf.stringToTerraform(this._type),
        video_codec_options: cdktf.hashMapper(cdktf.anyToTerraform)(this._videoCodecOptions),
        audio: elastictranscoderPresetAudioToTerraform(this._audio),
        audio_codec_options: elastictranscoderPresetAudioCodecOptionsToTerraform(this._audioCodecOptions),
        thumbnails: elastictranscoderPresetThumbnailsToTerraform(this._thumbnails),
        video: elastictranscoderPresetVideoToTerraform(this._video),
        video_watermarks: cdktf.listMapper(elastictranscoderPresetVideoWatermarksToTerraform)(this._videoWatermarks),
      };
    }
  }
}
