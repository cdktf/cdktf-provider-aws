// https://www.terraform.io/docs/providers/aws/r/lambda_alias.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LambdaAliasConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly functionName: string;
  readonly functionVersion: string;
  readonly name: string;
  /** routing_config block */
  readonly routingConfig?: LambdaAliasRoutingConfig[];
}
export interface LambdaAliasRoutingConfig {
  readonly additionalVersionWeights?: { [key: string]: number };
}

// Resource

export class LambdaAlias extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LambdaAliasConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambda_alias',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._functionName = config.functionName;
    this._functionVersion = config.functionVersion;
    this._name = config.name;
    this._routingConfig = config.routingConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // function_name - computed: false, optional: false, required: true
  private _functionName: string;
  public get functionName() {
    return this._functionName;
  }
  public set functionName(value: string) {
    this._functionName = value;
  }

  // function_version - computed: false, optional: false, required: true
  private _functionVersion: string;
  public get functionVersion() {
    return this._functionVersion;
  }
  public set functionVersion(value: string) {
    this._functionVersion = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // invoke_arn - computed: true, optional: false, required: true
  public get invokeArn() {
    return this.getStringAttribute('invoke_arn');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // routing_config - computed: false, optional: true, required: false
  private _routingConfig?: LambdaAliasRoutingConfig[];
  public get routingConfig() {
    return this._routingConfig;
  }
  public set routingConfig(value: LambdaAliasRoutingConfig[] | undefined) {
    this._routingConfig = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      function_name: this._functionName,
      function_version: this._functionVersion,
      name: this._name,
      routing_config: this._routingConfig,
    };
  }
}
