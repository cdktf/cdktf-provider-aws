// https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SagemakerModelConfig extends TerraformMetaArguments {
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
export interface SagemakerModelContainerImageConfig {
  readonly repositoryAccessMode: string;
}
export interface SagemakerModelContainer {
  readonly containerHostname?: string;
  readonly environment?: { [key: string]: string };
  readonly image: string;
  readonly mode?: string;
  readonly modelDataUrl?: string;
  /** image_config block */
  readonly imageConfig?: SagemakerModelContainerImageConfig[];
}
export interface SagemakerModelPrimaryContainerImageConfig {
  readonly repositoryAccessMode: string;
}
export interface SagemakerModelPrimaryContainer {
  readonly containerHostname?: string;
  readonly environment?: { [key: string]: string };
  readonly image: string;
  readonly mode?: string;
  readonly modelDataUrl?: string;
  /** image_config block */
  readonly imageConfig?: SagemakerModelPrimaryContainerImageConfig[];
}
export interface SagemakerModelVpcConfig {
  readonly securityGroupIds: string[];
  readonly subnets: string[];
}

// Resource

export class SagemakerModel extends TerraformResource {

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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // enable_network_isolation - computed: false, optional: true, required: false
  private _enableNetworkIsolation?: boolean;
  public get enableNetworkIsolation() {
    return this._enableNetworkIsolation;
  }
  public set enableNetworkIsolation(value: boolean | undefined) {
    this._enableNetworkIsolation = value;
  }

  // execution_role_arn - computed: false, optional: false, required: true
  private _executionRoleArn: string;
  public get executionRoleArn() {
    return this._executionRoleArn;
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name ?? this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // container - computed: false, optional: true, required: false
  private _container?: SagemakerModelContainer[];
  public get container() {
    return this._container;
  }
  public set container(value: SagemakerModelContainer[] | undefined) {
    this._container = value;
  }

  // primary_container - computed: false, optional: true, required: false
  private _primaryContainer?: SagemakerModelPrimaryContainer[];
  public get primaryContainer() {
    return this._primaryContainer;
  }
  public set primaryContainer(value: SagemakerModelPrimaryContainer[] | undefined) {
    this._primaryContainer = value;
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig?: SagemakerModelVpcConfig[];
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public set vpcConfig(value: SagemakerModelVpcConfig[] | undefined) {
    this._vpcConfig = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_network_isolation: this._enableNetworkIsolation,
      execution_role_arn: this._executionRoleArn,
      name: this._name,
      tags: this._tags,
      container: this._container,
      primary_container: this._primaryContainer,
      vpc_config: this._vpcConfig,
    };
  }
}
