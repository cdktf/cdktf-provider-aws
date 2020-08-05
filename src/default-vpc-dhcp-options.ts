// https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options.html
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
        "computed": true
      },
      "domain_name_servers": {
        "type": "string",
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
        "optional": true
      },
      "netbios_node_type": {
        "type": "string",
        "optional": true
      },
      "ntp_servers": {
        "type": "string",
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

export interface DefaultVpcDhcpOptionsConfig extends TerraformMetaArguments {
  readonly netbiosNameServers?: string[];
  readonly netbiosNodeType?: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class DefaultVpcDhcpOptions extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DefaultVpcDhcpOptionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_default_vpc_dhcp_options',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._netbiosNameServers = config.netbiosNameServers;
    this._netbiosNodeType = config.netbiosNodeType;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // domain_name - computed: true, optional: false, required: true
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // domain_name_servers - computed: true, optional: false, required: true
  public get domainNameServers() {
    return this.getStringAttribute('domain_name_servers');
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

  // ntp_servers - computed: true, optional: false, required: true
  public get ntpServers() {
    return this.getStringAttribute('ntp_servers');
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
      netbios_name_servers: this._netbiosNameServers,
      netbios_node_type: this._netbiosNodeType,
      tags: this._tags,
    };
  }
}
