// https://www.terraform.io/docs/providers/aws/r/data_aws_eip.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "association_id": {
        "type": "string",
        "computed": true
      },
      "customer_owned_ip": {
        "type": "string",
        "computed": true
      },
      "customer_owned_ipv4_pool": {
        "type": "string",
        "computed": true
      },
      "domain": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "instance_id": {
        "type": "string",
        "computed": true
      },
      "network_interface_id": {
        "type": "string",
        "computed": true
      },
      "network_interface_owner_id": {
        "type": "string",
        "computed": true
      },
      "private_dns": {
        "type": "string",
        "computed": true
      },
      "private_ip": {
        "type": "string",
        "computed": true
      },
      "public_dns": {
        "type": "string",
        "computed": true
      },
      "public_ip": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "public_ipv4_pool": {
        "type": "string",
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      }
    },
    "block_types": {
      "filter": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "values": {
              "type": [
                "set",
                "string"
              ],
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
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsEipConfig extends TerraformMetaArguments {
  readonly publicIp?: string;
  readonly tags?: { [key: string]: string };
  /** filter block */
  readonly filter?: DataAwsEipFilter[];
}
export interface DataAwsEipFilter {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class DataAwsEip extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsEipConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_eip',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._publicIp = config.publicIp;
    this._tags = config.tags;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // association_id - computed: true, optional: false, required: true
  public get associationId() {
    return this.getStringAttribute('association_id');
  }

  // customer_owned_ip - computed: true, optional: false, required: true
  public get customerOwnedIp() {
    return this.getStringAttribute('customer_owned_ip');
  }

  // customer_owned_ipv4_pool - computed: true, optional: false, required: true
  public get customerOwnedIpv4Pool() {
    return this.getStringAttribute('customer_owned_ipv4_pool');
  }

  // domain - computed: true, optional: false, required: true
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instance_id - computed: true, optional: false, required: true
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // network_interface_id - computed: true, optional: false, required: true
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }

  // network_interface_owner_id - computed: true, optional: false, required: true
  public get networkInterfaceOwnerId() {
    return this.getStringAttribute('network_interface_owner_id');
  }

  // private_dns - computed: true, optional: false, required: true
  public get privateDns() {
    return this.getStringAttribute('private_dns');
  }

  // private_ip - computed: true, optional: false, required: true
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // public_dns - computed: true, optional: false, required: true
  public get publicDns() {
    return this.getStringAttribute('public_dns');
  }

  // public_ip - computed: true, optional: true, required: false
  private _publicIp?: string;
  public get publicIp() {
    return this._publicIp ?? this.getStringAttribute('public_ip');
  }
  public set publicIp(value: string | undefined) {
    this._publicIp = value;
  }

  // public_ipv4_pool - computed: true, optional: false, required: true
  public get publicIpv4Pool() {
    return this.getStringAttribute('public_ipv4_pool');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsEipFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsEipFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      public_ip: this._publicIp,
      tags: this._tags,
      filter: this._filter,
    };
  }
}
