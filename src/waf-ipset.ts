// https://www.terraform.io/docs/providers/aws/r/waf_ipset.html
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
        "required": true
      }
    },
    "block_types": {
      "ip_set_descriptors": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "type": {
              "type": "string",
              "required": true
            },
            "value": {
              "type": "string",
              "required": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface WafIpsetConfig extends TerraformMetaArguments {
  readonly name: string;
  /** ip_set_descriptors block */
  readonly ipSetDescriptors?: WafIpsetIpSetDescriptors[];
}
export interface WafIpsetIpSetDescriptors {
  readonly type: string;
  readonly value: string;
}

// Resource

export class WafIpset extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WafIpsetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_waf_ipset',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._ipSetDescriptors = config.ipSetDescriptors;
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

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // ip_set_descriptors - computed: false, optional: true, required: false
  private _ipSetDescriptors?: WafIpsetIpSetDescriptors[];
  public get ipSetDescriptors() {
    return this._ipSetDescriptors;
  }
  public set ipSetDescriptors(value: WafIpsetIpSetDescriptors[] | undefined) {
    this._ipSetDescriptors = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      ip_set_descriptors: this._ipSetDescriptors,
    };
  }
}
