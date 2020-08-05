// https://www.terraform.io/docs/providers/aws/r/data_aws_lb.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "access_logs": {
        "type": [
          "list",
          [
            "object",
            {
              "bucket": "string",
              "enabled": "bool",
              "prefix": "string"
            }
          ]
        ],
        "computed": true
      },
      "arn": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "arn_suffix": {
        "type": "string",
        "computed": true
      },
      "dns_name": {
        "type": "string",
        "computed": true
      },
      "drop_invalid_header_fields": {
        "type": "bool",
        "computed": true
      },
      "enable_deletion_protection": {
        "type": "bool",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "idle_timeout": {
        "type": "number",
        "computed": true
      },
      "internal": {
        "type": "bool",
        "computed": true
      },
      "ip_address_type": {
        "type": "string",
        "computed": true
      },
      "load_balancer_type": {
        "type": "string",
        "computed": true
      },
      "name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "security_groups": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "subnet_mapping": {
        "type": [
          "set",
          [
            "object",
            {
              "allocation_id": "string",
              "subnet_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "subnets": {
        "type": [
          "set",
          "string"
        ],
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
        "computed": true
      },
      "zone_id": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsLbConfig extends TerraformMetaArguments {
  readonly name?: string;
  readonly tags?: { [key: string]: string };
}
export class DataAwsLbAccessLogs extends ComplexComputedList {

  // bucket - computed: true, optional: false, required: true
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // enabled - computed: true, optional: false, required: true
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // prefix - computed: true, optional: false, required: true
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}
export class DataAwsLbSubnetMapping extends ComplexComputedList {

  // allocation_id - computed: true, optional: false, required: true
  public get allocationId() {
    return this.getStringAttribute('allocation_id');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

// Resource

export class DataAwsLb extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsLbConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_lb',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_logs - computed: true, optional: false, required: true
  public accessLogs(index: string) {
    return new DataAwsLbAccessLogs(this, 'access_logs', index);
  }

  // arn - computed: true, optional: true, required: false
  private _arn?: string;
  public get arn() {
    return this._arn ?? this.getStringAttribute('arn');
  }
  public set arn(value: string | undefined) {
    this._arn = value;
  }

  // arn_suffix - computed: true, optional: false, required: true
  public get arnSuffix() {
    return this.getStringAttribute('arn_suffix');
  }

  // dns_name - computed: true, optional: false, required: true
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // drop_invalid_header_fields - computed: true, optional: false, required: true
  public get dropInvalidHeaderFields() {
    return this.getBooleanAttribute('drop_invalid_header_fields');
  }

  // enable_deletion_protection - computed: true, optional: false, required: true
  public get enableDeletionProtection() {
    return this.getBooleanAttribute('enable_deletion_protection');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // idle_timeout - computed: true, optional: false, required: true
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }

  // internal - computed: true, optional: false, required: true
  public get internal() {
    return this.getBooleanAttribute('internal');
  }

  // ip_address_type - computed: true, optional: false, required: true
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }

  // load_balancer_type - computed: true, optional: false, required: true
  public get loadBalancerType() {
    return this.getStringAttribute('load_balancer_type');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name ?? this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // security_groups - computed: true, optional: false, required: true
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }

  // subnet_mapping - computed: true, optional: false, required: true
  public subnetMapping(index: string) {
    return new DataAwsLbSubnetMapping(this, 'subnet_mapping', index);
  }

  // subnets - computed: true, optional: false, required: true
  public get subnets() {
    return this.getListAttribute('subnets');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // vpc_id - computed: true, optional: false, required: true
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // zone_id - computed: true, optional: false, required: true
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      tags: this._tags,
    };
  }
}
