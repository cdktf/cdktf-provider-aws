// https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/vpc_dhcp_options
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcDhcpOptionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/vpc_dhcp_options#domain_name VpcDhcpOptions#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/vpc_dhcp_options#domain_name_servers VpcDhcpOptions#domain_name_servers}
  */
  readonly domainNameServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/vpc_dhcp_options#id VpcDhcpOptions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/vpc_dhcp_options#ipv6_address_preferred_lease_time VpcDhcpOptions#ipv6_address_preferred_lease_time}
  */
  readonly ipv6AddressPreferredLeaseTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/vpc_dhcp_options#netbios_name_servers VpcDhcpOptions#netbios_name_servers}
  */
  readonly netbiosNameServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/vpc_dhcp_options#netbios_node_type VpcDhcpOptions#netbios_node_type}
  */
  readonly netbiosNodeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/vpc_dhcp_options#ntp_servers VpcDhcpOptions#ntp_servers}
  */
  readonly ntpServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/vpc_dhcp_options#tags VpcDhcpOptions#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/vpc_dhcp_options#tags_all VpcDhcpOptions#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/vpc_dhcp_options aws_vpc_dhcp_options}
*/
export class VpcDhcpOptions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_vpc_dhcp_options";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcDhcpOptions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcDhcpOptions to import
  * @param importFromId The id of the existing VpcDhcpOptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/vpc_dhcp_options#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcDhcpOptions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_vpc_dhcp_options", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/vpc_dhcp_options aws_vpc_dhcp_options} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcDhcpOptionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VpcDhcpOptionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_dhcp_options',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.63.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domainName = config.domainName;
    this._domainNameServers = config.domainNameServers;
    this._id = config.id;
    this._ipv6AddressPreferredLeaseTime = config.ipv6AddressPreferredLeaseTime;
    this._netbiosNameServers = config.netbiosNameServers;
    this._netbiosNodeType = config.netbiosNodeType;
    this._ntpServers = config.ntpServers;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
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
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // domain_name_servers - computed: false, optional: true, required: false
  private _domainNameServers?: string[]; 
  public get domainNameServers() {
    return this.getListAttribute('domain_name_servers');
  }
  public set domainNameServers(value: string[]) {
    this._domainNameServers = value;
  }
  public resetDomainNameServers() {
    this._domainNameServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameServersInput() {
    return this._domainNameServers;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ipv6_address_preferred_lease_time - computed: false, optional: true, required: false
  private _ipv6AddressPreferredLeaseTime?: string; 
  public get ipv6AddressPreferredLeaseTime() {
    return this.getStringAttribute('ipv6_address_preferred_lease_time');
  }
  public set ipv6AddressPreferredLeaseTime(value: string) {
    this._ipv6AddressPreferredLeaseTime = value;
  }
  public resetIpv6AddressPreferredLeaseTime() {
    this._ipv6AddressPreferredLeaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressPreferredLeaseTimeInput() {
    return this._ipv6AddressPreferredLeaseTime;
  }

  // netbios_name_servers - computed: false, optional: true, required: false
  private _netbiosNameServers?: string[]; 
  public get netbiosNameServers() {
    return this.getListAttribute('netbios_name_servers');
  }
  public set netbiosNameServers(value: string[]) {
    this._netbiosNameServers = value;
  }
  public resetNetbiosNameServers() {
    this._netbiosNameServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netbiosNameServersInput() {
    return this._netbiosNameServers;
  }

  // netbios_node_type - computed: false, optional: true, required: false
  private _netbiosNodeType?: string; 
  public get netbiosNodeType() {
    return this.getStringAttribute('netbios_node_type');
  }
  public set netbiosNodeType(value: string) {
    this._netbiosNodeType = value;
  }
  public resetNetbiosNodeType() {
    this._netbiosNodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netbiosNodeTypeInput() {
    return this._netbiosNodeType;
  }

  // ntp_servers - computed: false, optional: true, required: false
  private _ntpServers?: string[]; 
  public get ntpServers() {
    return this.getListAttribute('ntp_servers');
  }
  public set ntpServers(value: string[]) {
    this._ntpServers = value;
  }
  public resetNtpServers() {
    this._ntpServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServersInput() {
    return this._ntpServers;
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name: cdktf.stringToTerraform(this._domainName),
      domain_name_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainNameServers),
      id: cdktf.stringToTerraform(this._id),
      ipv6_address_preferred_lease_time: cdktf.stringToTerraform(this._ipv6AddressPreferredLeaseTime),
      netbios_name_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._netbiosNameServers),
      netbios_node_type: cdktf.stringToTerraform(this._netbiosNodeType),
      ntp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ntpServers),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainNameServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_address_preferred_lease_time: {
        value: cdktf.stringToHclTerraform(this._ipv6AddressPreferredLeaseTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netbios_name_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._netbiosNameServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      netbios_node_type: {
        value: cdktf.stringToHclTerraform(this._netbiosNodeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ntp_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ntpServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
