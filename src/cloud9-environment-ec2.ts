// https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2.html
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
      "automatic_stop_time_minutes": {
        "type": "number",
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
      "instance_type": {
        "type": "string",
        "required": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "owner_arn": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "subnet_id": {
        "type": "string",
        "optional": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "type": {
        "type": "string",
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

export interface Cloud9EnvironmentEc2Config extends TerraformMetaArguments {
  readonly automaticStopTimeMinutes?: number;
  readonly description?: string;
  readonly instanceType: string;
  readonly name: string;
  readonly ownerArn?: string;
  readonly subnetId?: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class Cloud9EnvironmentEc2 extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Cloud9EnvironmentEc2Config) {
    super(scope, id, {
      terraformResourceType: 'aws_cloud9_environment_ec2',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._automaticStopTimeMinutes = config.automaticStopTimeMinutes;
    this._description = config.description;
    this._instanceType = config.instanceType;
    this._name = config.name;
    this._ownerArn = config.ownerArn;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // automatic_stop_time_minutes - computed: false, optional: true, required: false
  private _automaticStopTimeMinutes?: number;
  public get automaticStopTimeMinutes() {
    return this._automaticStopTimeMinutes;
  }
  public set automaticStopTimeMinutes(value: number | undefined) {
    this._automaticStopTimeMinutes = value;
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

  // instance_type - computed: false, optional: false, required: true
  private _instanceType: string;
  public get instanceType() {
    return this._instanceType;
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // owner_arn - computed: true, optional: true, required: false
  private _ownerArn?: string;
  public get ownerArn() {
    return this._ownerArn ?? this.getStringAttribute('owner_arn');
  }
  public set ownerArn(value: string | undefined) {
    this._ownerArn = value;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string;
  public get subnetId() {
    return this._subnetId;
  }
  public set subnetId(value: string | undefined) {
    this._subnetId = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      automatic_stop_time_minutes: this._automaticStopTimeMinutes,
      description: this._description,
      instance_type: this._instanceType,
      name: this._name,
      owner_arn: this._ownerArn,
      subnet_id: this._subnetId,
      tags: this._tags,
    };
  }
}
