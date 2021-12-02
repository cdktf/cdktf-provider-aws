// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS EC2
*/
export interface DataAwsEc2LocalGatewayVirtualInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface.html#tags DataAwsEc2LocalGatewayVirtualInterface#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface.html#filter DataAwsEc2LocalGatewayVirtualInterface#filter}
  */
  readonly filter?: DataAwsEc2LocalGatewayVirtualInterfaceFilter[];
}
export interface DataAwsEc2LocalGatewayVirtualInterfaceFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface.html#name DataAwsEc2LocalGatewayVirtualInterface#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface.html#values DataAwsEc2LocalGatewayVirtualInterface#values}
  */
  readonly values: string[];
}

export function dataAwsEc2LocalGatewayVirtualInterfaceFilterToTerraform(struct?: DataAwsEc2LocalGatewayVirtualInterfaceFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface.html aws_ec2_local_gateway_virtual_interface}
*/
export class DataAwsEc2LocalGatewayVirtualInterface extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ec2_local_gateway_virtual_interface";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface.html aws_ec2_local_gateway_virtual_interface} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsEc2LocalGatewayVirtualInterfaceConfig = {}
  */
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vlan - computed: true, optional: false, required: false
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsEc2LocalGatewayVirtualInterfaceFilter[]; 
  public get filter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsEc2LocalGatewayVirtualInterfaceFilter[]) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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
