// https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ElasticacheParameterGroupConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly family: string;
  readonly name: string;
  /** parameter block */
  readonly parameter?: ElasticacheParameterGroupParameter[];
}
export interface ElasticacheParameterGroupParameter {
  readonly name: string;
  readonly value: string;
}

// Resource

export class ElasticacheParameterGroup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ElasticacheParameterGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elasticache_parameter_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._family = config.family;
    this._name = config.name;
    this._parameter = config.parameter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // family - computed: false, optional: false, required: true
  private _family: string;
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family
  }

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

  // parameter - computed: false, optional: true, required: false
  private _parameter?: ElasticacheParameterGroupParameter[];
  public get parameter() {
    return this.interpolationForAttribute('parameter') as any;
  }
  public set parameter(value: ElasticacheParameterGroupParameter[] ) {
    this._parameter = value;
  }
  public resetParameter() {
    this._parameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      family: this._family,
      name: this._name,
      parameter: this._parameter,
    };
  }
}
