// https://www.terraform.io/docs/providers/aws/r/eip.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "allocation_id": {
        "type": "string",
        "computed": true
      },
      "associate_with_private_ip": {
        "type": "string",
        "optional": true
      },
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
        "optional": true
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
      "instance": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "network_interface": {
        "type": "string",
        "optional": true,
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
        "computed": true
      },
      "public_ipv4_pool": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "vpc": {
        "type": "bool",
        "optional": true,
        "computed": true
      }
    },
    "block_types": {
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "delete": {
              "type": "string",
              "optional": true
            },
            "read": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
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

export interface EipConfig extends TerraformMetaArguments {
  readonly associateWithPrivateIp?: string;
  readonly customerOwnedIpv4Pool?: string;
  readonly instance?: string;
  readonly networkInterface?: string;
  readonly publicIpv4Pool?: string;
  readonly tags?: { [key: string]: string };
  readonly vpc?: boolean;
  /** timeouts block */
  readonly timeouts?: EipTimeouts;
}
export interface EipTimeouts {
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class Eip extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: EipConfig = {}) {
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
    this._associateWithPrivateIp = config.associateWithPrivateIp;
    this._customerOwnedIpv4Pool = config.customerOwnedIpv4Pool;
    this._instance = config.instance;
    this._networkInterface = config.networkInterface;
    this._publicIpv4Pool = config.publicIpv4Pool;
    this._tags = config.tags;
    this._vpc = config.vpc;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocation_id - computed: true, optional: false, required: true
  public get allocationId() {
    return this.getStringAttribute('allocation_id');
  }

  // associate_with_private_ip - computed: false, optional: true, required: false
  private _associateWithPrivateIp?: string;
  public get associateWithPrivateIp() {
    return this._associateWithPrivateIp;
  }
  public set associateWithPrivateIp(value: string | undefined) {
    this._associateWithPrivateIp = value;
  }

  // association_id - computed: true, optional: false, required: true
  public get associationId() {
    return this.getStringAttribute('association_id');
  }

  // customer_owned_ip - computed: true, optional: false, required: true
  public get customerOwnedIp() {
    return this.getStringAttribute('customer_owned_ip');
  }

  // customer_owned_ipv4_pool - computed: false, optional: true, required: false
  private _customerOwnedIpv4Pool?: string;
  public get customerOwnedIpv4Pool() {
    return this._customerOwnedIpv4Pool;
  }
  public set customerOwnedIpv4Pool(value: string | undefined) {
    this._customerOwnedIpv4Pool = value;
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

  // instance - computed: true, optional: true, required: false
  private _instance?: string;
  public get instance() {
    return this._instance ?? this.getStringAttribute('instance');
  }
  public set instance(value: string | undefined) {
    this._instance = value;
  }

  // network_interface - computed: true, optional: true, required: false
  private _networkInterface?: string;
  public get networkInterface() {
    return this._networkInterface ?? this.getStringAttribute('network_interface');
  }
  public set networkInterface(value: string | undefined) {
    this._networkInterface = value;
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

  // public_ip - computed: true, optional: false, required: true
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // public_ipv4_pool - computed: true, optional: true, required: false
  private _publicIpv4Pool?: string;
  public get publicIpv4Pool() {
    return this._publicIpv4Pool ?? this.getStringAttribute('public_ipv4_pool');
  }
  public set publicIpv4Pool(value: string | undefined) {
    this._publicIpv4Pool = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // vpc - computed: true, optional: true, required: false
  private _vpc?: boolean;
  public get vpc() {
    return this._vpc ?? this.getBooleanAttribute('vpc');
  }
  public set vpc(value: boolean | undefined) {
    this._vpc = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EipTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: EipTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      associate_with_private_ip: this._associateWithPrivateIp,
      customer_owned_ipv4_pool: this._customerOwnedIpv4Pool,
      instance: this._instance,
      network_interface: this._networkInterface,
      public_ipv4_pool: this._publicIpv4Pool,
      tags: this._tags,
      vpc: this._vpc,
      timeouts: this._timeouts,
    };
  }
}
