// https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcDhcpOptionsConfig extends cdktf.TerraformMetaArguments {
  readonly domainName?: string;
  readonly domainNameServers?: string[];
  readonly netbiosNameServers?: string[];
  readonly netbiosNodeType?: string;
  readonly ntpServers?: string[];
  readonly tags?: { [key: string]: string };
}

// Resource

export class VpcDhcpOptions extends cdktf.TerraformResource {

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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string;
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string ) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName
  }

  // domain_name_servers - computed: false, optional: true, required: false
  private _domainNameServers?: string[];
  public get domainNameServers() {
    return this.getListAttribute('domain_name_servers');
  }
  public set domainNameServers(value: string[] ) {
    this._domainNameServers = value;
  }
  public resetDomainNameServers() {
    this._domainNameServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameServersInput() {
    return this._domainNameServers
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // netbios_name_servers - computed: false, optional: true, required: false
  private _netbiosNameServers?: string[];
  public get netbiosNameServers() {
    return this.getListAttribute('netbios_name_servers');
  }
  public set netbiosNameServers(value: string[] ) {
    this._netbiosNameServers = value;
  }
  public resetNetbiosNameServers() {
    this._netbiosNameServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netbiosNameServersInput() {
    return this._netbiosNameServers
  }

  // netbios_node_type - computed: false, optional: true, required: false
  private _netbiosNodeType?: string;
  public get netbiosNodeType() {
    return this.getStringAttribute('netbios_node_type');
  }
  public set netbiosNodeType(value: string ) {
    this._netbiosNodeType = value;
  }
  public resetNetbiosNodeType() {
    this._netbiosNodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netbiosNodeTypeInput() {
    return this._netbiosNodeType
  }

  // ntp_servers - computed: false, optional: true, required: false
  private _ntpServers?: string[];
  public get ntpServers() {
    return this.getListAttribute('ntp_servers');
  }
  public set ntpServers(value: string[] ) {
    this._ntpServers = value;
  }
  public resetNtpServers() {
    this._ntpServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServersInput() {
    return this._ntpServers
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name: cdktf.stringToTerraform(this._domainName),
      domain_name_servers: cdktf.listMapper(cdktf.stringToTerraform)(this._domainNameServers),
      netbios_name_servers: cdktf.listMapper(cdktf.stringToTerraform)(this._netbiosNameServers),
      netbios_node_type: cdktf.stringToTerraform(this._netbiosNodeType),
      ntp_servers: cdktf.listMapper(cdktf.stringToTerraform)(this._ntpServers),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
