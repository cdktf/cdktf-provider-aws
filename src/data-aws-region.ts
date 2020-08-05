// https://www.terraform.io/docs/providers/aws/r/data_aws_region.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "current": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "description": {
        "type": "string",
        "computed": true
      },
      "endpoint": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "optional": true,
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsRegionConfig extends TerraformMetaArguments {
  readonly current?: boolean;
  readonly endpoint?: string;
  readonly name?: string;
}

// Resource

export class DataAwsRegion extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsRegionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_region',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._current = config.current;
    this._endpoint = config.endpoint;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // current - computed: true, optional: true, required: false
  private _current?: boolean;
  public get current() {
    return this._current ?? this.getBooleanAttribute('current');
  }
  public set current(value: boolean | undefined) {
    this._current = value;
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string;
  public get endpoint() {
    return this._endpoint ?? this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string | undefined) {
    this._endpoint = value;
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

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      current: this._current,
      endpoint: this._endpoint,
      name: this._name,
    };
  }
}
