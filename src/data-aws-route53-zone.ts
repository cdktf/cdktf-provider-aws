// https://www.terraform.io/docs/providers/aws/r/data_aws_route53_zone.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "caller_reference": {
        "type": "string",
        "computed": true
      },
      "comment": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "linked_service_description": {
        "type": "string",
        "computed": true
      },
      "linked_service_principal": {
        "type": "string",
        "computed": true
      },
      "name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name_servers": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "private_zone": {
        "type": "bool",
        "optional": true
      },
      "resource_record_set_count": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "vpc_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "zone_id": {
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

export interface DataAwsRoute53ZoneConfig extends TerraformMetaArguments {
  readonly name?: string;
  readonly privateZone?: boolean;
  readonly resourceRecordSetCount?: number;
  readonly tags?: { [key: string]: string };
  readonly vpcId?: string;
  readonly zoneId?: string;
}

// Resource

export class DataAwsRoute53Zone extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsRoute53ZoneConfig = {}) {
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
    this._name = config.name;
    this._privateZone = config.privateZone;
    this._resourceRecordSetCount = config.resourceRecordSetCount;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // caller_reference - computed: true, optional: false, required: true
  public get callerReference() {
    return this.getStringAttribute('caller_reference');
  }

  // comment - computed: true, optional: false, required: true
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // linked_service_description - computed: true, optional: false, required: true
  public get linkedServiceDescription() {
    return this.getStringAttribute('linked_service_description');
  }

  // linked_service_principal - computed: true, optional: false, required: true
  public get linkedServicePrincipal() {
    return this.getStringAttribute('linked_service_principal');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name ?? this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // name_servers - computed: true, optional: false, required: true
  public get nameServers() {
    return this.getListAttribute('name_servers');
  }

  // private_zone - computed: false, optional: true, required: false
  private _privateZone?: boolean;
  public get privateZone() {
    return this._privateZone;
  }
  public set privateZone(value: boolean | undefined) {
    this._privateZone = value;
  }

  // resource_record_set_count - computed: true, optional: true, required: false
  private _resourceRecordSetCount?: number;
  public get resourceRecordSetCount() {
    return this._resourceRecordSetCount ?? this.getNumberAttribute('resource_record_set_count');
  }
  public set resourceRecordSetCount(value: number | undefined) {
    this._resourceRecordSetCount = value;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
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

  // zone_id - computed: true, optional: true, required: false
  private _zoneId?: string;
  public get zoneId() {
    return this._zoneId ?? this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string | undefined) {
    this._zoneId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      private_zone: this._privateZone,
      resource_record_set_count: this._resourceRecordSetCount,
      tags: this._tags,
      vpc_id: this._vpcId,
      zone_id: this._zoneId,
    };
  }
}
