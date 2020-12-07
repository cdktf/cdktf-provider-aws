// https://www.terraform.io/docs/providers/aws/r/data_aws_vpc_dhcp_options.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsVpcDhcpOptionsConfig extends cdktf.TerraformMetaArguments {
  readonly dhcpOptionsId?: string;
  readonly tags?: { [key: string]: string };
  /** filter block */
  readonly filter?: DataAwsVpcDhcpOptionsFilter[];
}
export interface DataAwsVpcDhcpOptionsFilter {
  readonly name: string;
  readonly values: string[];
}

function dataAwsVpcDhcpOptionsFilterToTerraform(struct?: DataAwsVpcDhcpOptionsFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


// Resource

export class DataAwsVpcDhcpOptions extends cdktf.TerraformDataSource {

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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // dhcp_options_id - computed: true, optional: true, required: false
  private _dhcpOptionsId?: string;
  public get dhcpOptionsId() {
    return this.getStringAttribute('dhcp_options_id');
  }
  public set dhcpOptionsId(value: string) {
    this._dhcpOptionsId = value;
  }
  public resetDhcpOptionsId() {
    this._dhcpOptionsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsIdInput() {
    return this._dhcpOptionsId
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // domain_name_servers - computed: true, optional: false, required: false
  public get domainNameServers() {
    return this.getListAttribute('domain_name_servers');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // netbios_name_servers - computed: true, optional: false, required: false
  public get netbiosNameServers() {
    return this.getListAttribute('netbios_name_servers');
  }

  // netbios_node_type - computed: true, optional: false, required: false
  public get netbiosNodeType() {
    return this.getStringAttribute('netbios_node_type');
  }

  // ntp_servers - computed: true, optional: false, required: false
  public get ntpServers() {
    return this.getListAttribute('ntp_servers');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } {
    return this.interpolationForAttribute('tags') as any; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsVpcDhcpOptionsFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsVpcDhcpOptionsFilter[] ) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dhcp_options_id: cdktf.stringToTerraform(this._dhcpOptionsId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      filter: cdktf.listMapper(dataAwsVpcDhcpOptionsFilterToTerraform)(this._filter),
    };
  }
}
