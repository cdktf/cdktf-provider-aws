// https://www.terraform.io/docs/providers/aws/r/glue_workflow.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "default_run_properties": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GlueWorkflowConfig extends TerraformMetaArguments {
  readonly defaultRunProperties?: { [key: string]: string };
  readonly description?: string;
  readonly name?: string;
}

// Resource

export class GlueWorkflow extends TerraformResource {

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
    return this._defaultRunProperties;
  }
  public set defaultRunProperties(value: { [key: string]: string } | undefined) {
    this._defaultRunProperties = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      default_run_properties: this._defaultRunProperties,
      description: this._description,
      name: this._name,
    };
  }
}
