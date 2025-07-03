/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/ec2_transit_gateway_connect_peer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2TransitGatewayConnectPeerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/ec2_transit_gateway_connect_peer#bgp_asn Ec2TransitGatewayConnectPeer#bgp_asn}
  */
  readonly bgpAsn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/ec2_transit_gateway_connect_peer#id Ec2TransitGatewayConnectPeer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/ec2_transit_gateway_connect_peer#inside_cidr_blocks Ec2TransitGatewayConnectPeer#inside_cidr_blocks}
  */
  readonly insideCidrBlocks: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/ec2_transit_gateway_connect_peer#peer_address Ec2TransitGatewayConnectPeer#peer_address}
  */
  readonly peerAddress: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/ec2_transit_gateway_connect_peer#region Ec2TransitGatewayConnectPeer#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/ec2_transit_gateway_connect_peer#tags Ec2TransitGatewayConnectPeer#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/ec2_transit_gateway_connect_peer#tags_all Ec2TransitGatewayConnectPeer#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/ec2_transit_gateway_connect_peer#transit_gateway_address Ec2TransitGatewayConnectPeer#transit_gateway_address}
  */
  readonly transitGatewayAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/ec2_transit_gateway_connect_peer#transit_gateway_attachment_id Ec2TransitGatewayConnectPeer#transit_gateway_attachment_id}
  */
  readonly transitGatewayAttachmentId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/ec2_transit_gateway_connect_peer#timeouts Ec2TransitGatewayConnectPeer#timeouts}
  */
  readonly timeouts?: Ec2TransitGatewayConnectPeerTimeouts;
}
export interface Ec2TransitGatewayConnectPeerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/ec2_transit_gateway_connect_peer#create Ec2TransitGatewayConnectPeer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/ec2_transit_gateway_connect_peer#delete Ec2TransitGatewayConnectPeer#delete}
  */
  readonly delete?: string;
}

export function ec2TransitGatewayConnectPeerTimeoutsToTerraform(struct?: Ec2TransitGatewayConnectPeerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function ec2TransitGatewayConnectPeerTimeoutsToHclTerraform(struct?: Ec2TransitGatewayConnectPeerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2TransitGatewayConnectPeerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2TransitGatewayConnectPeerTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2TransitGatewayConnectPeerTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/ec2_transit_gateway_connect_peer aws_ec2_transit_gateway_connect_peer}
*/
export class Ec2TransitGatewayConnectPeer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ec2_transit_gateway_connect_peer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ec2TransitGatewayConnectPeer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2TransitGatewayConnectPeer to import
  * @param importFromId The id of the existing Ec2TransitGatewayConnectPeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/ec2_transit_gateway_connect_peer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2TransitGatewayConnectPeer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ec2_transit_gateway_connect_peer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/ec2_transit_gateway_connect_peer aws_ec2_transit_gateway_connect_peer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2TransitGatewayConnectPeerConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2TransitGatewayConnectPeerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_transit_gateway_connect_peer',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.2.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bgpAsn = config.bgpAsn;
    this._id = config.id;
    this._insideCidrBlocks = config.insideCidrBlocks;
    this._peerAddress = config.peerAddress;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._transitGatewayAddress = config.transitGatewayAddress;
    this._transitGatewayAttachmentId = config.transitGatewayAttachmentId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // bgp_asn - computed: true, optional: true, required: false
  private _bgpAsn?: string; 
  public get bgpAsn() {
    return this.getStringAttribute('bgp_asn');
  }
  public set bgpAsn(value: string) {
    this._bgpAsn = value;
  }
  public resetBgpAsn() {
    this._bgpAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAsnInput() {
    return this._bgpAsn;
  }

  // bgp_peer_address - computed: true, optional: false, required: false
  public get bgpPeerAddress() {
    return this.getStringAttribute('bgp_peer_address');
  }

  // bgp_transit_gateway_addresses - computed: true, optional: false, required: false
  public get bgpTransitGatewayAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('bgp_transit_gateway_addresses'));
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

  // inside_cidr_blocks - computed: false, optional: false, required: true
  private _insideCidrBlocks?: string[]; 
  public get insideCidrBlocks() {
    return cdktf.Fn.tolist(this.getListAttribute('inside_cidr_blocks'));
  }
  public set insideCidrBlocks(value: string[]) {
    this._insideCidrBlocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insideCidrBlocksInput() {
    return this._insideCidrBlocks;
  }

  // peer_address - computed: false, optional: false, required: true
  private _peerAddress?: string; 
  public get peerAddress() {
    return this.getStringAttribute('peer_address');
  }
  public set peerAddress(value: string) {
    this._peerAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAddressInput() {
    return this._peerAddress;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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

  // transit_gateway_address - computed: true, optional: true, required: false
  private _transitGatewayAddress?: string; 
  public get transitGatewayAddress() {
    return this.getStringAttribute('transit_gateway_address');
  }
  public set transitGatewayAddress(value: string) {
    this._transitGatewayAddress = value;
  }
  public resetTransitGatewayAddress() {
    this._transitGatewayAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayAddressInput() {
    return this._transitGatewayAddress;
  }

  // transit_gateway_attachment_id - computed: false, optional: false, required: true
  private _transitGatewayAttachmentId?: string; 
  public get transitGatewayAttachmentId() {
    return this.getStringAttribute('transit_gateway_attachment_id');
  }
  public set transitGatewayAttachmentId(value: string) {
    this._transitGatewayAttachmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayAttachmentIdInput() {
    return this._transitGatewayAttachmentId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new Ec2TransitGatewayConnectPeerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: Ec2TransitGatewayConnectPeerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bgp_asn: cdktf.stringToTerraform(this._bgpAsn),
      id: cdktf.stringToTerraform(this._id),
      inside_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._insideCidrBlocks),
      peer_address: cdktf.stringToTerraform(this._peerAddress),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      transit_gateway_address: cdktf.stringToTerraform(this._transitGatewayAddress),
      transit_gateway_attachment_id: cdktf.stringToTerraform(this._transitGatewayAttachmentId),
      timeouts: ec2TransitGatewayConnectPeerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bgp_asn: {
        value: cdktf.stringToHclTerraform(this._bgpAsn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inside_cidr_blocks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._insideCidrBlocks),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      peer_address: {
        value: cdktf.stringToHclTerraform(this._peerAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      transit_gateway_address: {
        value: cdktf.stringToHclTerraform(this._transitGatewayAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_gateway_attachment_id: {
        value: cdktf.stringToHclTerraform(this._transitGatewayAttachmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: ec2TransitGatewayConnectPeerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Ec2TransitGatewayConnectPeerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
