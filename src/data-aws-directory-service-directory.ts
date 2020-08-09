// https://www.terraform.io/docs/providers/aws/r/data_aws_directory_service_directory.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "access_url": {
        "type": "string",
        "computed": true
      },
      "alias": {
        "type": "string",
        "computed": true
      },
      "connect_settings": {
        "type": [
          "list",
          [
            "object",
            {
              "availability_zones": [
                "set",
                "string"
              ],
              "connect_ips": [
                "set",
                "string"
              ],
              "customer_dns_ips": [
                "set",
                "string"
              ],
              "customer_username": "string",
              "subnet_ids": [
                "set",
                "string"
              ],
              "vpc_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "description": {
        "type": "string",
        "computed": true
      },
      "directory_id": {
        "type": "string",
        "required": true
      },
      "dns_ip_addresses": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "edition": {
        "type": "string",
        "computed": true
      },
      "enable_sso": {
        "type": "bool",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "computed": true
      },
      "security_group_id": {
        "type": "string",
        "computed": true
      },
      "short_name": {
        "type": "string",
        "computed": true
      },
      "size": {
        "type": "string",
        "computed": true
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
      },
      "vpc_settings": {
        "type": [
          "list",
          [
            "object",
            {
              "availability_zones": [
                "set",
                "string"
              ],
              "subnet_ids": [
                "set",
                "string"
              ],
              "vpc_id": "string"
            }
          ]
        ],
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

export interface DataAwsDirectoryServiceDirectoryConfig extends TerraformMetaArguments {
  readonly directoryId: string;
  readonly tags?: { [key: string]: string };
}
export class DataAwsDirectoryServiceDirectoryConnectSettings extends ComplexComputedList {

  // availability_zones - computed: true, optional: false, required: true
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // connect_ips - computed: true, optional: false, required: true
  public get connectIps() {
    return this.getListAttribute('connect_ips');
  }

  // customer_dns_ips - computed: true, optional: false, required: true
  public get customerDnsIps() {
    return this.getListAttribute('customer_dns_ips');
  }

  // customer_username - computed: true, optional: false, required: true
  public get customerUsername() {
    return this.getStringAttribute('customer_username');
  }

  // subnet_ids - computed: true, optional: false, required: true
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }

  // vpc_id - computed: true, optional: false, required: true
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}
export class DataAwsDirectoryServiceDirectoryVpcSettings extends ComplexComputedList {

  // availability_zones - computed: true, optional: false, required: true
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // subnet_ids - computed: true, optional: false, required: true
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }

  // vpc_id - computed: true, optional: false, required: true
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

// Resource

export class DataAwsDirectoryServiceDirectory extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsDirectoryServiceDirectoryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_directory_service_directory',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._directoryId = config.directoryId;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_url - computed: true, optional: false, required: true
  public get accessUrl() {
    return this.getStringAttribute('access_url');
  }

  // alias - computed: true, optional: false, required: true
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // connect_settings - computed: true, optional: false, required: true
  public connectSettings(index: string) {
    return new DataAwsDirectoryServiceDirectoryConnectSettings(this, 'connect_settings', index);
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // directory_id - computed: false, optional: false, required: true
  private _directoryId: string;
  public get directoryId() {
    return this._directoryId;
  }
  public set directoryId(value: string) {
    this._directoryId = value;
  }

  // dns_ip_addresses - computed: true, optional: false, required: true
  public get dnsIpAddresses() {
    return this.getListAttribute('dns_ip_addresses');
  }

  // edition - computed: true, optional: false, required: true
  public get edition() {
    return this.getStringAttribute('edition');
  }

  // enable_sso - computed: true, optional: false, required: true
  public get enableSso() {
    return this.getBooleanAttribute('enable_sso');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // security_group_id - computed: true, optional: false, required: true
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }

  // short_name - computed: true, optional: false, required: true
  public get shortName() {
    return this.getStringAttribute('short_name');
  }

  // size - computed: true, optional: false, required: true
  public get size() {
    return this.getStringAttribute('size');
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

  // vpc_settings - computed: true, optional: false, required: true
  public vpcSettings(index: string) {
    return new DataAwsDirectoryServiceDirectoryVpcSettings(this, 'vpc_settings', index);
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      directory_id: this._directoryId,
      tags: this._tags,
    };
  }
}
