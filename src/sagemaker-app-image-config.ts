// https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerAppImageConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#app_image_config_name SagemakerAppImageConfig#app_image_config_name}
  */
  readonly appImageConfigName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#tags SagemakerAppImageConfig#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#tags_all SagemakerAppImageConfig#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * kernel_gateway_image_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#kernel_gateway_image_config SagemakerAppImageConfig#kernel_gateway_image_config}
  */
  readonly kernelGatewayImageConfig?: SagemakerAppImageConfigKernelGatewayImageConfig[];
}
export interface SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#default_gid SagemakerAppImageConfig#default_gid}
  */
  readonly defaultGid?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#default_uid SagemakerAppImageConfig#default_uid}
  */
  readonly defaultUid?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#mount_path SagemakerAppImageConfig#mount_path}
  */
  readonly mountPath?: string;
}

function sagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigToTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_gid: cdktf.numberToTerraform(struct!.defaultGid),
    default_uid: cdktf.numberToTerraform(struct!.defaultUid),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
  }
}

export interface SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#display_name SagemakerAppImageConfig#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#name SagemakerAppImageConfig#name}
  */
  readonly name: string;
}

function sagemakerAppImageConfigKernelGatewayImageConfigKernelSpecToTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface SagemakerAppImageConfigKernelGatewayImageConfig {
  /**
  * file_system_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#file_system_config SagemakerAppImageConfig#file_system_config}
  */
  readonly fileSystemConfig?: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig[];
  /**
  * kernel_spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html#kernel_spec SagemakerAppImageConfig#kernel_spec}
  */
  readonly kernelSpec: SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec[];
}

function sagemakerAppImageConfigKernelGatewayImageConfigToTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    file_system_config: cdktf.listMapper(sagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigToTerraform)(struct!.fileSystemConfig),
    kernel_spec: cdktf.listMapper(sagemakerAppImageConfigKernelGatewayImageConfigKernelSpecToTerraform)(struct!.kernelSpec),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html aws_sagemaker_app_image_config}
*/
export class SagemakerAppImageConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_sagemaker_app_image_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html aws_sagemaker_app_image_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerAppImageConfigConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerAppImageConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_app_image_config',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._appImageConfigName = config.appImageConfigName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._kernelGatewayImageConfig = config.kernelGatewayImageConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_image_config_name - computed: false, optional: false, required: true
  private _appImageConfigName: string;
  public get appImageConfigName() {
    return this.getStringAttribute('app_image_config_name');
  }
  public set appImageConfigName(value: string) {
    this._appImageConfigName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appImageConfigNameInput() {
    return this._appImageConfigName
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // kernel_gateway_image_config - computed: false, optional: true, required: false
  private _kernelGatewayImageConfig?: SagemakerAppImageConfigKernelGatewayImageConfig[];
  public get kernelGatewayImageConfig() {
    return this.interpolationForAttribute('kernel_gateway_image_config') as any;
  }
  public set kernelGatewayImageConfig(value: SagemakerAppImageConfigKernelGatewayImageConfig[] ) {
    this._kernelGatewayImageConfig = value;
  }
  public resetKernelGatewayImageConfig() {
    this._kernelGatewayImageConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelGatewayImageConfigInput() {
    return this._kernelGatewayImageConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_image_config_name: cdktf.stringToTerraform(this._appImageConfigName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      kernel_gateway_image_config: cdktf.listMapper(sagemakerAppImageConfigKernelGatewayImageConfigToTerraform)(this._kernelGatewayImageConfig),
    };
  }
}
