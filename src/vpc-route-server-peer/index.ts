/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcRouteServerPeerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#peer_address VpcRouteServerPeer#peer_address}
  */
  readonly peerAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#route_server_endpoint_id VpcRouteServerPeer#route_server_endpoint_id}
  */
  readonly routeServerEndpointId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#tags VpcRouteServerPeer#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * bgp_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#bgp_options VpcRouteServerPeer#bgp_options}
  */
  readonly bgpOptions?: VpcRouteServerPeerBgpOptions[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#timeouts VpcRouteServerPeer#timeouts}
  */
  readonly timeouts?: VpcRouteServerPeerTimeouts;
}
export interface VpcRouteServerPeerBgpOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#peer_asn VpcRouteServerPeer#peer_asn}
  */
  readonly peerAsn: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#peer_liveness_detection VpcRouteServerPeer#peer_liveness_detection}
  */
  readonly peerLivenessDetection?: string;
}

export function vpcRouteServerPeerBgpOptionsToTerraform(struct?: VpcRouteServerPeerBgpOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    peer_asn: cdktf.numberToTerraform(struct!.peerAsn),
    peer_liveness_detection: cdktf.stringToTerraform(struct!.peerLivenessDetection),
  }
}


export function vpcRouteServerPeerBgpOptionsToHclTerraform(struct?: VpcRouteServerPeerBgpOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    peer_asn: {
      value: cdktf.numberToHclTerraform(struct!.peerAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_liveness_detection: {
      value: cdktf.stringToHclTerraform(struct!.peerLivenessDetection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcRouteServerPeerBgpOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VpcRouteServerPeerBgpOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._peerAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerAsn = this._peerAsn;
    }
    if (this._peerLivenessDetection !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerLivenessDetection = this._peerLivenessDetection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcRouteServerPeerBgpOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._peerAsn = undefined;
      this._peerLivenessDetection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._peerAsn = value.peerAsn;
      this._peerLivenessDetection = value.peerLivenessDetection;
    }
  }

  // peer_asn - computed: false, optional: false, required: true
  private _peerAsn?: number; 
  public get peerAsn() {
    return this.getNumberAttribute('peer_asn');
  }
  public set peerAsn(value: number) {
    this._peerAsn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAsnInput() {
    return this._peerAsn;
  }

  // peer_liveness_detection - computed: true, optional: true, required: false
  private _peerLivenessDetection?: string; 
  public get peerLivenessDetection() {
    return this.getStringAttribute('peer_liveness_detection');
  }
  public set peerLivenessDetection(value: string) {
    this._peerLivenessDetection = value;
  }
  public resetPeerLivenessDetection() {
    this._peerLivenessDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerLivenessDetectionInput() {
    return this._peerLivenessDetection;
  }
}

export class VpcRouteServerPeerBgpOptionsList extends cdktf.ComplexList {
  public internalValue? : VpcRouteServerPeerBgpOptions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VpcRouteServerPeerBgpOptionsOutputReference {
    return new VpcRouteServerPeerBgpOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpcRouteServerPeerTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#create VpcRouteServerPeer#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#delete VpcRouteServerPeer#delete}
  */
  readonly delete?: string;
}

export function vpcRouteServerPeerTimeoutsToTerraform(struct?: VpcRouteServerPeerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function vpcRouteServerPeerTimeoutsToHclTerraform(struct?: VpcRouteServerPeerTimeouts | cdktf.IResolvable): any {
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

export class VpcRouteServerPeerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpcRouteServerPeerTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpcRouteServerPeerTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer aws_vpc_route_server_peer}
*/
export class VpcRouteServerPeer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_vpc_route_server_peer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcRouteServerPeer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcRouteServerPeer to import
  * @param importFromId The id of the existing VpcRouteServerPeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcRouteServerPeer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_vpc_route_server_peer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer aws_vpc_route_server_peer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcRouteServerPeerConfig
  */
  public constructor(scope: Construct, id: string, config: VpcRouteServerPeerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_route_server_peer',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.100.0',
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
    this._peerAddress = config.peerAddress;
    this._routeServerEndpointId = config.routeServerEndpointId;
    this._tags = config.tags;
    this._bgpOptions.internalValue = config.bgpOptions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // endpoint_eni_address - computed: true, optional: false, required: false
  public get endpointEniAddress() {
    return this.getStringAttribute('endpoint_eni_address');
  }

  // endpoint_eni_id - computed: true, optional: false, required: false
  public get endpointEniId() {
    return this.getStringAttribute('endpoint_eni_id');
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

  // route_server_endpoint_id - computed: false, optional: false, required: true
  private _routeServerEndpointId?: string; 
  public get routeServerEndpointId() {
    return this.getStringAttribute('route_server_endpoint_id');
  }
  public set routeServerEndpointId(value: string) {
    this._routeServerEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeServerEndpointIdInput() {
    return this._routeServerEndpointId;
  }

  // route_server_id - computed: true, optional: false, required: false
  public get routeServerId() {
    return this.getStringAttribute('route_server_id');
  }

  // route_server_peer_id - computed: true, optional: false, required: false
  public get routeServerPeerId() {
    return this.getStringAttribute('route_server_peer_id');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // bgp_options - computed: false, optional: true, required: false
  private _bgpOptions = new VpcRouteServerPeerBgpOptionsList(this, "bgp_options", false);
  public get bgpOptions() {
    return this._bgpOptions;
  }
  public putBgpOptions(value: VpcRouteServerPeerBgpOptions[] | cdktf.IResolvable) {
    this._bgpOptions.internalValue = value;
  }
  public resetBgpOptions() {
    this._bgpOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpOptionsInput() {
    return this._bgpOptions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpcRouteServerPeerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpcRouteServerPeerTimeouts) {
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
      peer_address: cdktf.stringToTerraform(this._peerAddress),
      route_server_endpoint_id: cdktf.stringToTerraform(this._routeServerEndpointId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      bgp_options: cdktf.listMapper(vpcRouteServerPeerBgpOptionsToTerraform, true)(this._bgpOptions.internalValue),
      timeouts: vpcRouteServerPeerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      peer_address: {
        value: cdktf.stringToHclTerraform(this._peerAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_server_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._routeServerEndpointId),
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
      bgp_options: {
        value: cdktf.listMapperHcl(vpcRouteServerPeerBgpOptionsToHclTerraform, true)(this._bgpOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpcRouteServerPeerBgpOptionsList",
      },
      timeouts: {
        value: vpcRouteServerPeerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpcRouteServerPeerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
