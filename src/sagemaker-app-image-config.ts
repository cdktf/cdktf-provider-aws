// https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerAppImageConfigConfig extends cdktf.TerraformMetaArguments {
  readonly appImageConfigName: string;
  /** kernel_gateway_image_config block */
  readonly kernelGatewayImageConfig?: SagemakerAppImageConfigKernelGatewayImageConfig[];
}
export interface SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig {
  readonly defaultGid?: number;
  readonly defaultUid?: number;
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
  readonly displayName?: string;
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
  /** file_system_config block */
  readonly fileSystemConfig?: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig[];
  /** kernel_spec block */
  readonly kernelSpec: SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec[];
}

function sagemakerAppImageConfigKernelGatewayImageConfigToTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    file_system_config: cdktf.listMapper(sagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigToTerraform)(struct!.fileSystemConfig),
    kernel_spec: cdktf.listMapper(sagemakerAppImageConfigKernelGatewayImageConfigKernelSpecToTerraform)(struct!.kernelSpec),
  }
}


// Resource

export class SagemakerAppImageConfig extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
      kernel_gateway_image_config: cdktf.listMapper(sagemakerAppImageConfigKernelGatewayImageConfigToTerraform)(this._kernelGatewayImageConfig),
    };
  }
}
