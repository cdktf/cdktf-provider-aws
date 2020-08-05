// https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "accelerator_arn": {
        "type": "string",
        "required": true
      },
      "client_affinity": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "protocol": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "port_range": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "from_port": {
              "type": "number",
              "optional": true
            },
            "to_port": {
              "type": "number",
              "optional": true
            }
          }
        },
        "min_items": 1,
        "max_items": 10
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GlobalacceleratorListenerConfig extends TerraformMetaArguments {
  readonly acceleratorArn: string;
  readonly clientAffinity?: string;
  readonly protocol: string;
  /** port_range block */
  readonly portRange: GlobalacceleratorListenerPortRange[];
}
export interface GlobalacceleratorListenerPortRange {
  readonly fromPort?: number;
  readonly toPort?: number;
}

// Resource

export class GlobalacceleratorListener extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GlobalacceleratorListenerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_globalaccelerator_listener',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._acceleratorArn = config.acceleratorArn;
    this._clientAffinity = config.clientAffinity;
    this._protocol = config.protocol;
    this._portRange = config.portRange;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accelerator_arn - computed: false, optional: false, required: true
  private _acceleratorArn: string;
  public get acceleratorArn() {
    return this._acceleratorArn;
  }
  public set acceleratorArn(value: string) {
    this._acceleratorArn = value;
  }

  // client_affinity - computed: false, optional: true, required: false
  private _clientAffinity?: string;
  public get clientAffinity() {
    return this._clientAffinity;
  }
  public set clientAffinity(value: string | undefined) {
    this._clientAffinity = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol: string;
  public get protocol() {
    return this._protocol;
  }
  public set protocol(value: string) {
    this._protocol = value;
  }

  // port_range - computed: false, optional: false, required: true
  private _portRange: GlobalacceleratorListenerPortRange[];
  public get portRange() {
    return this._portRange;
  }
  public set portRange(value: GlobalacceleratorListenerPortRange[]) {
    this._portRange = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      accelerator_arn: this._acceleratorArn,
      client_affinity: this._clientAffinity,
      protocol: this._protocol,
      port_range: this._portRange,
    };
  }
}
