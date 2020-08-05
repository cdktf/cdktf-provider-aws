// https://www.terraform.io/docs/providers/aws/r/route53_zone.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "comment": {
        "type": "string",
        "optional": true
      },
      "delegation_set_id": {
        "type": "string",
        "optional": true
      },
      "force_destroy": {
        "type": "bool",
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
      "name_servers": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "vpc_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "vpc_region": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "zone_id": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "vpc": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "vpc_id": {
              "type": "string",
              "required": true
            },
            "vpc_region": {
              "type": "string",
              "optional": true,
              "computed": true
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

export interface Route53ZoneConfig extends TerraformMetaArguments {
  readonly comment?: string;
  readonly delegationSetId?: string;
  readonly forceDestroy?: boolean;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  readonly vpcId?: string;
  readonly vpcRegion?: string;
  /** vpc block */
  readonly vpc?: Route53ZoneVpc[];
}
export interface Route53ZoneVpc {
  readonly vpcId: string;
  readonly vpcRegion?: string;
}

// Resource

export class Route53Zone extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Route53ZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53_zone',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._comment = config.comment;
    this._delegationSetId = config.delegationSetId;
    this._forceDestroy = config.forceDestroy;
    this._name = config.name;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._vpcRegion = config.vpcRegion;
    this._vpc = config.vpc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: true, required: false
  private _comment?: string;
  public get comment() {
    return this._comment;
  }
  public set comment(value: string | undefined) {
    this._comment = value;
  }

  // delegation_set_id - computed: false, optional: true, required: false
  private _delegationSetId?: string;
  public get delegationSetId() {
    return this._delegationSetId;
  }
  public set delegationSetId(value: string | undefined) {
    this._delegationSetId = value;
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean;
  public get forceDestroy() {
    return this._forceDestroy;
  }
  public set forceDestroy(value: boolean | undefined) {
    this._forceDestroy = value;
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

  // name_servers - computed: true, optional: false, required: true
  public get nameServers() {
    return this.getListAttribute('name_servers');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string;
  public get vpcId() {
    return this._vpcId ?? this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string | undefined) {
    this._vpcId = value;
  }

  // vpc_region - computed: true, optional: true, required: false
  private _vpcRegion?: string;
  public get vpcRegion() {
    return this._vpcRegion ?? this.getStringAttribute('vpc_region');
  }
  public set vpcRegion(value: string | undefined) {
    this._vpcRegion = value;
  }

  // zone_id - computed: true, optional: false, required: true
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }

  // vpc - computed: false, optional: true, required: false
  private _vpc?: Route53ZoneVpc[];
  public get vpc() {
    return this._vpc;
  }
  public set vpc(value: Route53ZoneVpc[] | undefined) {
    this._vpc = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: this._comment,
      delegation_set_id: this._delegationSetId,
      force_destroy: this._forceDestroy,
      name: this._name,
      tags: this._tags,
      vpc_id: this._vpcId,
      vpc_region: this._vpcRegion,
      vpc: this._vpc,
    };
  }
}
