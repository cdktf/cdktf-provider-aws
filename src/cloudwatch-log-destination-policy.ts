// https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_destination_policy.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "access_policy": {
        "type": "string",
        "required": true
      },
      "destination_name": {
        "type": "string",
        "required": true
      },
      "id": {
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

export interface CloudwatchLogDestinationPolicyConfig extends TerraformMetaArguments {
  readonly accessPolicy: string;
  readonly destinationName: string;
}

// Resource

export class CloudwatchLogDestinationPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CloudwatchLogDestinationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_log_destination_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessPolicy = config.accessPolicy;
    this._destinationName = config.destinationName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policy - computed: false, optional: false, required: true
  private _accessPolicy: string;
  public get accessPolicy() {
    return this._accessPolicy;
  }
  public set accessPolicy(value: string) {
    this._accessPolicy = value;
  }

  // destination_name - computed: false, optional: false, required: true
  private _destinationName: string;
  public get destinationName() {
    return this._destinationName;
  }
  public set destinationName(value: string) {
    this._destinationName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      access_policy: this._accessPolicy,
      destination_name: this._destinationName,
    };
  }
}
