// https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options.html
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
      "domain_name": {
        "type": "string",
        "optional": true
      },
      "domain_name_servers": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
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
        "optional": true
      },
      "netbios_node_type": {
        "type": "string",
        "optional": true
      },
      "ntp_servers": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
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
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface VpcDhcpOptionsConfig extends TerraformMetaArguments {
  readonly domainName?: string;
  readonly domainNameServers?: string[];
  readonly netbiosNameServers?: string[];
  readonly netbiosNodeType?: string;
  readonly ntpServers?: string[];
  readonly tags?: { [key: string]: string };
}

// Resource

export class VpcDhcpOptions extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VpcDhcpOptionsConfig = {}) {
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
    this._domainName = config.domainName;
    this._domainNameServers = config.domainNameServers;
    this._netbiosNameServers = config.netbiosNameServers;
    this._netbiosNodeType = config.netbiosNodeType;
    this._ntpServers = config.ntpServers;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string;
  public get domainName() {
    return this._domainName;
  }
  public set domainName(value: string | undefined) {
    this._domainName = value;
  }

  // domain_name_servers - computed: false, optional: true, required: false
  private _domainNameServers?: string[];
  public get domainNameServers() {
    return this._domainNameServers;
  }
  public set domainNameServers(value: string[] | undefined) {
    this._domainNameServers = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // netbios_name_servers - computed: false, optional: true, required: false
  private _netbiosNameServers?: string[];
  public get netbiosNameServers() {
    return this._netbiosNameServers;
  }
  public set netbiosNameServers(value: string[] | undefined) {
    this._netbiosNameServers = value;
  }

  // netbios_node_type - computed: false, optional: true, required: false
  private _netbiosNodeType?: string;
  public get netbiosNodeType() {
    return this._netbiosNodeType;
  }
  public set netbiosNodeType(value: string | undefined) {
    this._netbiosNodeType = value;
  }

  // ntp_servers - computed: false, optional: true, required: false
  private _ntpServers?: string[];
  public get ntpServers() {
    return this._ntpServers;
  }
  public set ntpServers(value: string[] | undefined) {
    this._ntpServers = value;
  }

  // owner_id - computed: true, optional: false, required: true
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name: this._domainName,
      domain_name_servers: this._domainNameServers,
      netbios_name_servers: this._netbiosNameServers,
      netbios_node_type: this._netbiosNodeType,
      ntp_servers: this._ntpServers,
      tags: this._tags,
    };
  }
}
