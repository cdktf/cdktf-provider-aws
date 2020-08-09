// https://www.terraform.io/docs/providers/aws/r/data_aws_vpc_dhcp_options.html
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
      "dhcp_options_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "domain_name": {
        "type": "string",
        "computed": true
      },
      "domain_name_servers": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "netbios_name_servers": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "netbios_node_type": {
        "type": "string",
        "computed": true
      },
      "ntp_servers": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "owner_id": {
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

export interface DataAwsVpcDhcpOptionsConfig extends TerraformMetaArguments {
  readonly dhcpOptionsId?: string;
  readonly tags?: { [key: string]: string };
  /** filter block */
  readonly filter?: DataAwsVpcDhcpOptionsFilter[];
}
export interface DataAwsVpcDhcpOptionsFilter {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class DataAwsVpcDhcpOptions extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsVpcDhcpOptionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_dhcp_options',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dhcpOptionsId = config.dhcpOptionsId;
    this._tags = config.tags;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // dhcp_options_id - computed: true, optional: true, required: false
  private _dhcpOptionsId?: string;
  public get dhcpOptionsId() {
    return this._dhcpOptionsId ?? this.getStringAttribute('dhcp_options_id');
  }
  public set dhcpOptionsId(value: string | undefined) {
    this._dhcpOptionsId = value;
  }

  // domain_name - computed: true, optional: false, required: true
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // domain_name_servers - computed: true, optional: false, required: true
  public get domainNameServers() {
    return this.getListAttribute('domain_name_servers');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // netbios_name_servers - computed: true, optional: false, required: true
  public get netbiosNameServers() {
    return this.getListAttribute('netbios_name_servers');
  }

  // netbios_node_type - computed: true, optional: false, required: true
  public get netbiosNodeType() {
    return this.getStringAttribute('netbios_node_type');
  }

  // ntp_servers - computed: true, optional: false, required: true
  public get ntpServers() {
    return this.getListAttribute('ntp_servers');
  }

  // owner_id - computed: true, optional: false, required: true
  public get ownerId() {
    return this.getStringAttribute('owner_id');
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
  private _filter?: DataAwsVpcDhcpOptionsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsVpcDhcpOptionsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      dhcp_options_id: this._dhcpOptionsId,
      tags: this._tags,
      filter: this._filter,
    };
  }
}
