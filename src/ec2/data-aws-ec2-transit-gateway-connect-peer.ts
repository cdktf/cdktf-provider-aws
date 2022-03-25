// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS EC2
*/
export interface DataAwsEc2TransitGatewayConnectPeerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_connect_peer#tags DataAwsEc2TransitGatewayConnectPeer#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_connect_peer#transit_gateway_connect_peer_id DataAwsEc2TransitGatewayConnectPeer#transit_gateway_connect_peer_id}
  */
  readonly transitGatewayConnectPeerId?: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_connect_peer#filter DataAwsEc2TransitGatewayConnectPeer#filter}
  */
  readonly filter?: DataAwsEc2TransitGatewayConnectPeerFilter[] | cdktf.IResolvable;
}
export interface DataAwsEc2TransitGatewayConnectPeerFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_connect_peer#name DataAwsEc2TransitGatewayConnectPeer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_connect_peer#values DataAwsEc2TransitGatewayConnectPeer#values}
  */
  readonly values: string[];
}

export function dataAwsEc2TransitGatewayConnectPeerFilterToTerraform(struct?: DataAwsEc2TransitGatewayConnectPeerFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_connect_peer aws_ec2_transit_gateway_connect_peer}
*/
export class DataAwsEc2TransitGatewayConnectPeer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ec2_transit_gateway_connect_peer";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_connect_peer aws_ec2_transit_gateway_connect_peer} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsEc2TransitGatewayConnectPeerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsEc2TransitGatewayConnectPeerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_transit_gateway_connect_peer',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._tags = config.tags;
    this._transitGatewayConnectPeerId = config.transitGatewayConnectPeerId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // bgp_asn - computed: true, optional: false, required: false
  public get bgpAsn() {
    return this.getStringAttribute('bgp_asn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inside_cidr_blocks - computed: true, optional: false, required: false
  public get insideCidrBlocks() {
    return this.getListAttribute('inside_cidr_blocks');
  }

  // peer_address - computed: true, optional: false, required: false
  public get peerAddress() {
    return this.getStringAttribute('peer_address');
  }

  // tags - computed: true, optional: true, required: false
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

  // transit_gateway_address - computed: true, optional: false, required: false
  public get transitGatewayAddress() {
    return this.getStringAttribute('transit_gateway_address');
  }

  // transit_gateway_attachment_id - computed: true, optional: false, required: false
  public get transitGatewayAttachmentId() {
    return this.getStringAttribute('transit_gateway_attachment_id');
  }

  // transit_gateway_connect_peer_id - computed: true, optional: true, required: false
  private _transitGatewayConnectPeerId?: string; 
  public get transitGatewayConnectPeerId() {
    return this.getStringAttribute('transit_gateway_connect_peer_id');
  }
  public set transitGatewayConnectPeerId(value: string) {
    this._transitGatewayConnectPeerId = value;
  }
  public resetTransitGatewayConnectPeerId() {
    this._transitGatewayConnectPeerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayConnectPeerIdInput() {
    return this._transitGatewayConnectPeerId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsEc2TransitGatewayConnectPeerFilter[] | cdktf.IResolvable; 
  public get filter() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('filter')));
  }
  public set filter(value: DataAwsEc2TransitGatewayConnectPeerFilter[] | cdktf.IResolvable) {
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
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      transit_gateway_connect_peer_id: cdktf.stringToTerraform(this._transitGatewayConnectPeerId),
      filter: cdktf.listMapper(dataAwsEc2TransitGatewayConnectPeerFilterToTerraform)(this._filter),
    };
  }
}
