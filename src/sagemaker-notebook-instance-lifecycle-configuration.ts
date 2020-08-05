// https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance_lifecycle_configuration.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "optional": true
      },
      "on_create": {
        "type": "string",
        "optional": true
      },
      "on_start": {
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

export interface SagemakerNotebookInstanceLifecycleConfigurationConfig extends TerraformMetaArguments {
  readonly name?: string;
  readonly onCreate?: string;
  readonly onStart?: string;
}

// Resource

export class SagemakerNotebookInstanceLifecycleConfiguration extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SagemakerNotebookInstanceLifecycleConfigurationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_notebook_instance_lifecycle_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._onCreate = config.onCreate;
    this._onStart = config.onStart;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
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

  // on_create - computed: false, optional: true, required: false
  private _onCreate?: string;
  public get onCreate() {
    return this._onCreate;
  }
  public set onCreate(value: string | undefined) {
    this._onCreate = value;
  }

  // on_start - computed: false, optional: true, required: false
  private _onStart?: string;
  public get onStart() {
    return this._onStart;
  }
  public set onStart(value: string | undefined) {
    this._onStart = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      on_create: this._onCreate,
      on_start: this._onStart,
    };
  }
}
