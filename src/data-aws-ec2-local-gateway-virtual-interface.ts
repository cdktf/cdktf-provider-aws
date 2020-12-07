// https://www.terraform.io/docs/providers/aws/r/data_aws_ec2_local_gateway_virtual_interface.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsEc2LocalGatewayVirtualInterfaceConfig extends cdktf.TerraformMetaArguments {
  readonly tags?: { [key: string]: string };
  /** filter block */
  readonly filter?: DataAwsEc2LocalGatewayVirtualInterfaceFilter[];
}
export interface DataAwsEc2LocalGatewayVirtualInterfaceFilter {
  readonly name: string;
  readonly values: string[];
}

function dataAwsEc2LocalGatewayVirtualInterfaceFilterToTerraform(struct?: DataAwsEc2LocalGatewayVirtualInterfaceFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


// Resource

export class DataAwsEc2LocalGatewayVirtualInterface extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsEc2LocalGatewayVirtualInterfaceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_local_gateway_virtual_interface',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._tags = config.tags;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // local_address - computed: true, optional: false, required: false
  public get localAddress() {
    return this.getStringAttribute('local_address');
  }

  // local_bgp_asn - computed: true, optional: false, required: false
  public get localBgpAsn() {
    return this.getNumberAttribute('local_bgp_asn');
  }

  // local_gateway_id - computed: true, optional: false, required: false
  public get localGatewayId() {
    return this.getStringAttribute('local_gateway_id');
  }

  // local_gateway_virtual_interface_ids - computed: true, optional: false, required: false
  public get localGatewayVirtualInterfaceIds() {
    return this.getListAttribute('local_gateway_virtual_interface_ids');
  }

  // peer_address - computed: true, optional: false, required: false
  public get peerAddress() {
    return this.getStringAttribute('peer_address');
  }

  // peer_bgp_asn - computed: true, optional: false, required: false
  public get peerBgpAsn() {
    return this.getNumberAttribute('peer_bgp_asn');
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

  // vlan - computed: true, optional: false, required: false
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsEc2LocalGatewayVirtualInterfaceFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsEc2LocalGatewayVirtualInterfaceFilter[] ) {
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
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      filter: cdktf.listMapper(dataAwsEc2LocalGatewayVirtualInterfaceFilterToTerraform)(this._filter),
    };
  }
}
