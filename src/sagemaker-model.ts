// https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerModelConfig extends cdktf.TerraformMetaArguments {
  readonly enableNetworkIsolation?: boolean;
  readonly executionRoleArn: string;
  readonly name?: string;
  readonly tags?: { [key: string]: string };
  /** container block */
  readonly container?: SagemakerModelContainer[];
  /** primary_container block */
  readonly primaryContainer?: SagemakerModelPrimaryContainer[];
  /** vpc_config block */
  readonly vpcConfig?: SagemakerModelVpcConfig[];
}
export interface SagemakerModelContainer {
  readonly containerHostname?: string;
  readonly environment?: { [key: string]: string };
  readonly image: string;
  readonly modelDataUrl?: string;
}

function sagemakerModelContainerToTerraform(struct?: SagemakerModelContainer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_hostname: cdktf.stringToTerraform(struct!.containerHostname),
    environment: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.environment),
    image: cdktf.stringToTerraform(struct!.image),
    model_data_url: cdktf.stringToTerraform(struct!.modelDataUrl),
  }
}

export interface SagemakerModelPrimaryContainer {
  readonly containerHostname?: string;
  readonly environment?: { [key: string]: string };
  readonly image: string;
  readonly modelDataUrl?: string;
}

function sagemakerModelPrimaryContainerToTerraform(struct?: SagemakerModelPrimaryContainer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_hostname: cdktf.stringToTerraform(struct!.containerHostname),
    environment: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.environment),
    image: cdktf.stringToTerraform(struct!.image),
    model_data_url: cdktf.stringToTerraform(struct!.modelDataUrl),
  }
}

export interface SagemakerModelVpcConfig {
  readonly securityGroupIds: string[];
  readonly subnets: string[];
}

function sagemakerModelVpcConfigToTerraform(struct?: SagemakerModelVpcConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnets),
  }
}


// Resource

export class SagemakerModel extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SagemakerModelConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_model',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enableNetworkIsolation = config.enableNetworkIsolation;
    this._executionRoleArn = config.executionRoleArn;
    this._name = config.name;
    this._tags = config.tags;
    this._container = config.container;
    this._primaryContainer = config.primaryContainer;
    this._vpcConfig = config.vpcConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // enable_network_isolation - computed: false, optional: true, required: false
  private _enableNetworkIsolation?: boolean;
  public get enableNetworkIsolation() {
    return this.getBooleanAttribute('enable_network_isolation');
  }
  public set enableNetworkIsolation(value: boolean ) {
    this._enableNetworkIsolation = value;
  }
  public resetEnableNetworkIsolation() {
    this._enableNetworkIsolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNetworkIsolationInput() {
    return this._enableNetworkIsolation
  }

  // execution_role_arn - computed: false, optional: false, required: true
  private _executionRoleArn: string;
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // container - computed: false, optional: true, required: false
  private _container?: SagemakerModelContainer[];
  public get container() {
    return this.interpolationForAttribute('container') as any;
  }
  public set container(value: SagemakerModelContainer[] ) {
    this._container = value;
  }
  public resetContainer() {
    this._container = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container
  }

  // primary_container - computed: false, optional: true, required: false
  private _primaryContainer?: SagemakerModelPrimaryContainer[];
  public get primaryContainer() {
    return this.interpolationForAttribute('primary_container') as any;
  }
  public set primaryContainer(value: SagemakerModelPrimaryContainer[] ) {
    this._primaryContainer = value;
  }
  public resetPrimaryContainer() {
    this._primaryContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryContainerInput() {
    return this._primaryContainer
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig?: SagemakerModelVpcConfig[];
  public get vpcConfig() {
    return this.interpolationForAttribute('vpc_config') as any;
  }
  public set vpcConfig(value: SagemakerModelVpcConfig[] ) {
    this._vpcConfig = value;
  }
  public resetVpcConfig() {
    this._vpcConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_network_isolation: cdktf.booleanToTerraform(this._enableNetworkIsolation),
      execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      container: cdktf.listMapper(sagemakerModelContainerToTerraform)(this._container),
      primary_container: cdktf.listMapper(sagemakerModelPrimaryContainerToTerraform)(this._primaryContainer),
      vpc_config: cdktf.listMapper(sagemakerModelVpcConfigToTerraform)(this._vpcConfig),
    };
  }
}
