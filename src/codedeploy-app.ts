// https://www.terraform.io/docs/providers/aws/r/codedeploy_app.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compute_platform": {
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
        "required": true
      },
      "unique_id": {
        "type": "string",
        "optional": true,
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CodedeployAppConfig extends TerraformMetaArguments {
  readonly computePlatform?: string;
  readonly name: string;
  readonly uniqueId?: string;
}

// Resource

export class CodedeployApp extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CodedeployAppConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codedeploy_app',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._computePlatform = config.computePlatform;
    this._name = config.name;
    this._uniqueId = config.uniqueId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compute_platform - computed: false, optional: true, required: false
  private _computePlatform?: string;
  public get computePlatform() {
    return this._computePlatform;
  }
  public set computePlatform(value: string | undefined) {
    this._computePlatform = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // unique_id - computed: true, optional: true, required: false
  private _uniqueId?: string;
  public get uniqueId() {
    return this._uniqueId ?? this.getStringAttribute('unique_id');
  }
  public set uniqueId(value: string | undefined) {
    this._uniqueId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compute_platform: this._computePlatform,
      name: this._name,
      unique_id: this._uniqueId,
    };
  }
}
