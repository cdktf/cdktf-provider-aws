// https://www.terraform.io/docs/providers/aws/r/glue_workflow.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlueWorkflowConfig extends cdktf.TerraformMetaArguments {
  readonly defaultRunProperties?: { [key: string]: string };
  readonly description?: string;
  readonly name?: string;
}

// Resource

export class GlueWorkflow extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GlueWorkflowConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_workflow',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._defaultRunProperties = config.defaultRunProperties;
    this._description = config.description;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_run_properties - computed: false, optional: true, required: false
  private _defaultRunProperties?: { [key: string]: string };
  public get defaultRunProperties() {
    return this.interpolationForAttribute('default_run_properties') as any;
  }
  public set defaultRunProperties(value: { [key: string]: string } ) {
    this._defaultRunProperties = value;
  }
  public resetDefaultRunProperties() {
    this._defaultRunProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRunPropertiesInput() {
    return this._defaultRunProperties
  }

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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_run_properties: cdktf.hashMapper(cdktf.anyToTerraform)(this._defaultRunProperties),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
