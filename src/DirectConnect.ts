// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Direct Connect
*/
export namespace DirectConnect {
  export interface DxBgpPeerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer.html#address_family DxBgpPeer#address_family}
    */
    readonly addressFamily: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer.html#amazon_address DxBgpPeer#amazon_address}
    */
    readonly amazonAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer.html#bgp_asn DxBgpPeer#bgp_asn}
    */
    readonly bgpAsn: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer.html#bgp_auth_key DxBgpPeer#bgp_auth_key}
    */
    readonly bgpAuthKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer.html#customer_address DxBgpPeer#customer_address}
    */
    readonly customerAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer.html#virtual_interface_id DxBgpPeer#virtual_interface_id}
    */
    readonly virtualInterfaceId: string;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer.html#timeouts DxBgpPeer#timeouts}
    */
    readonly timeouts?: DxBgpPeerTimeouts;
  }
  export interface DxBgpPeerTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer.html#create DxBgpPeer#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer.html#delete DxBgpPeer#delete}
    */
    readonly delete?: string;
  }

  function dxBgpPeerTimeoutsToTerraform(struct?: DxBgpPeerTimeoutsOutputReference | DxBgpPeerTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }

  export class DxBgpPeerTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer.html aws_dx_bgp_peer}
  */
  export class DxBgpPeer extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_dx_bgp_peer";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer.html aws_dx_bgp_peer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxBgpPeerConfig
    */
    public constructor(scope: Construct, id: string, config: DxBgpPeerConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_dx_bgp_peer',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._addressFamily = config.addressFamily;
      this._amazonAddress = config.amazonAddress;
      this._bgpAsn = config.bgpAsn;
      this._bgpAuthKey = config.bgpAuthKey;
      this._customerAddress = config.customerAddress;
      this._virtualInterfaceId = config.virtualInterfaceId;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // address_family - computed: false, optional: false, required: true
    private _addressFamily?: string; 
    public get addressFamily() {
      return this.getStringAttribute('address_family');
    }
    public set addressFamily(value: string) {
      this._addressFamily = value;
    }
    // Temporarily expose input value. Use with caution.
    public get addressFamilyInput() {
      return this._addressFamily
    }

    // amazon_address - computed: true, optional: true, required: false
    private _amazonAddress?: string | undefined; 
    public get amazonAddress() {
      return this.getStringAttribute('amazon_address');
    }
    public set amazonAddress(value: string | undefined) {
      this._amazonAddress = value;
    }
    public resetAmazonAddress() {
      this._amazonAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amazonAddressInput() {
      return this._amazonAddress
    }

    // aws_device - computed: true, optional: false, required: false
    public get awsDevice() {
      return this.getStringAttribute('aws_device');
    }

    // bgp_asn - computed: false, optional: false, required: true
    private _bgpAsn?: number; 
    public get bgpAsn() {
      return this.getNumberAttribute('bgp_asn');
    }
    public set bgpAsn(value: number) {
      this._bgpAsn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bgpAsnInput() {
      return this._bgpAsn
    }

    // bgp_auth_key - computed: true, optional: true, required: false
    private _bgpAuthKey?: string | undefined; 
    public get bgpAuthKey() {
      return this.getStringAttribute('bgp_auth_key');
    }
    public set bgpAuthKey(value: string | undefined) {
      this._bgpAuthKey = value;
    }
    public resetBgpAuthKey() {
      this._bgpAuthKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bgpAuthKeyInput() {
      return this._bgpAuthKey
    }

    // bgp_peer_id - computed: true, optional: false, required: false
    public get bgpPeerId() {
      return this.getStringAttribute('bgp_peer_id');
    }

    // bgp_status - computed: true, optional: false, required: false
    public get bgpStatus() {
      return this.getStringAttribute('bgp_status');
    }

    // customer_address - computed: true, optional: true, required: false
    private _customerAddress?: string | undefined; 
    public get customerAddress() {
      return this.getStringAttribute('customer_address');
    }
    public set customerAddress(value: string | undefined) {
      this._customerAddress = value;
    }
    public resetCustomerAddress() {
      this._customerAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customerAddressInput() {
      return this._customerAddress
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // virtual_interface_id - computed: false, optional: false, required: true
    private _virtualInterfaceId?: string; 
    public get virtualInterfaceId() {
      return this.getStringAttribute('virtual_interface_id');
    }
    public set virtualInterfaceId(value: string) {
      this._virtualInterfaceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get virtualInterfaceIdInput() {
      return this._virtualInterfaceId
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: DxBgpPeerTimeouts | undefined; 
    private __timeoutsOutput = new DxBgpPeerTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: DxBgpPeerTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        address_family: cdktf.stringToTerraform(this._addressFamily),
        amazon_address: cdktf.stringToTerraform(this._amazonAddress),
        bgp_asn: cdktf.numberToTerraform(this._bgpAsn),
        bgp_auth_key: cdktf.stringToTerraform(this._bgpAuthKey),
        customer_address: cdktf.stringToTerraform(this._customerAddress),
        virtual_interface_id: cdktf.stringToTerraform(this._virtualInterfaceId),
        timeouts: dxBgpPeerTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface DxConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_connection.html#bandwidth DxConnection#bandwidth}
    */
    readonly bandwidth: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_connection.html#location DxConnection#location}
    */
    readonly location: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_connection.html#name DxConnection#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_connection.html#provider_name DxConnection#provider_name}
    */
    readonly providerName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_connection.html#tags DxConnection#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_connection.html#tags_all DxConnection#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_connection.html aws_dx_connection}
  */
  export class DxConnection extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_dx_connection";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_connection.html aws_dx_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxConnectionConfig
    */
    public constructor(scope: Construct, id: string, config: DxConnectionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_dx_connection',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._bandwidth = config.bandwidth;
      this._location = config.location;
      this._name = config.name;
      this._providerName = config.providerName;
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

    // aws_device - computed: true, optional: false, required: false
    public get awsDevice() {
      return this.getStringAttribute('aws_device');
    }

    // bandwidth - computed: false, optional: false, required: true
    private _bandwidth?: string; 
    public get bandwidth() {
      return this.getStringAttribute('bandwidth');
    }
    public set bandwidth(value: string) {
      this._bandwidth = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bandwidthInput() {
      return this._bandwidth
    }

    // has_logical_redundancy - computed: true, optional: false, required: false
    public get hasLogicalRedundancy() {
      return this.getStringAttribute('has_logical_redundancy');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // jumbo_frame_capable - computed: true, optional: false, required: false
    public get jumboFrameCapable() {
      return this.getBooleanAttribute('jumbo_frame_capable') as any;
    }

    // location - computed: false, optional: false, required: true
    private _location?: string; 
    public get location() {
      return this.getStringAttribute('location');
    }
    public set location(value: string) {
      this._location = value;
    }
    // Temporarily expose input value. Use with caution.
    public get locationInput() {
      return this._location
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // owner_account_id - computed: true, optional: false, required: false
    public get ownerAccountId() {
      return this.getStringAttribute('owner_account_id');
    }

    // provider_name - computed: true, optional: true, required: false
    private _providerName?: string | undefined; 
    public get providerName() {
      return this.getStringAttribute('provider_name');
    }
    public set providerName(value: string | undefined) {
      this._providerName = value;
    }
    public resetProviderName() {
      this._providerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get providerNameInput() {
      return this._providerName
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        bandwidth: cdktf.stringToTerraform(this._bandwidth),
        location: cdktf.stringToTerraform(this._location),
        name: cdktf.stringToTerraform(this._name),
        provider_name: cdktf.stringToTerraform(this._providerName),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface DxConnectionAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_connection_association.html#connection_id DxConnectionAssociation#connection_id}
    */
    readonly connectionId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_connection_association.html#lag_id DxConnectionAssociation#lag_id}
    */
    readonly lagId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_connection_association.html aws_dx_connection_association}
  */
  export class DxConnectionAssociation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_dx_connection_association";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_connection_association.html aws_dx_connection_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxConnectionAssociationConfig
    */
    public constructor(scope: Construct, id: string, config: DxConnectionAssociationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_dx_connection_association',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._connectionId = config.connectionId;
      this._lagId = config.lagId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // connection_id - computed: false, optional: false, required: true
    private _connectionId?: string; 
    public get connectionId() {
      return this.getStringAttribute('connection_id');
    }
    public set connectionId(value: string) {
      this._connectionId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionIdInput() {
      return this._connectionId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // lag_id - computed: false, optional: false, required: true
    private _lagId?: string; 
    public get lagId() {
      return this.getStringAttribute('lag_id');
    }
    public set lagId(value: string) {
      this._lagId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get lagIdInput() {
      return this._lagId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        connection_id: cdktf.stringToTerraform(this._connectionId),
        lag_id: cdktf.stringToTerraform(this._lagId),
      };
    }
  }
  export interface DxConnectionConfirmationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_connection_confirmation.html#connection_id DxConnectionConfirmation#connection_id}
    */
    readonly connectionId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_connection_confirmation.html aws_dx_connection_confirmation}
  */
  export class DxConnectionConfirmation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_dx_connection_confirmation";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_connection_confirmation.html aws_dx_connection_confirmation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxConnectionConfirmationConfig
    */
    public constructor(scope: Construct, id: string, config: DxConnectionConfirmationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_dx_connection_confirmation',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._connectionId = config.connectionId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // connection_id - computed: false, optional: false, required: true
    private _connectionId?: string; 
    public get connectionId() {
      return this.getStringAttribute('connection_id');
    }
    public set connectionId(value: string) {
      this._connectionId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionIdInput() {
      return this._connectionId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        connection_id: cdktf.stringToTerraform(this._connectionId),
      };
    }
  }
  export interface DxGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway.html#amazon_side_asn DxGateway#amazon_side_asn}
    */
    readonly amazonSideAsn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway.html#name DxGateway#name}
    */
    readonly name: string;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway.html#timeouts DxGateway#timeouts}
    */
    readonly timeouts?: DxGatewayTimeouts;
  }
  export interface DxGatewayTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway.html#create DxGateway#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway.html#delete DxGateway#delete}
    */
    readonly delete?: string;
  }

  function dxGatewayTimeoutsToTerraform(struct?: DxGatewayTimeoutsOutputReference | DxGatewayTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }

  export class DxGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway.html aws_dx_gateway}
  */
  export class DxGateway extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_dx_gateway";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway.html aws_dx_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxGatewayConfig
    */
    public constructor(scope: Construct, id: string, config: DxGatewayConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_dx_gateway',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._amazonSideAsn = config.amazonSideAsn;
      this._name = config.name;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // amazon_side_asn - computed: false, optional: false, required: true
    private _amazonSideAsn?: string; 
    public get amazonSideAsn() {
      return this.getStringAttribute('amazon_side_asn');
    }
    public set amazonSideAsn(value: string) {
      this._amazonSideAsn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get amazonSideAsnInput() {
      return this._amazonSideAsn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // owner_account_id - computed: true, optional: false, required: false
    public get ownerAccountId() {
      return this.getStringAttribute('owner_account_id');
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: DxGatewayTimeouts | undefined; 
    private __timeoutsOutput = new DxGatewayTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: DxGatewayTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        amazon_side_asn: cdktf.stringToTerraform(this._amazonSideAsn),
        name: cdktf.stringToTerraform(this._name),
        timeouts: dxGatewayTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface DxGatewayAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#allowed_prefixes DxGatewayAssociation#allowed_prefixes}
    */
    readonly allowedPrefixes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#associated_gateway_id DxGatewayAssociation#associated_gateway_id}
    */
    readonly associatedGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#associated_gateway_owner_account_id DxGatewayAssociation#associated_gateway_owner_account_id}
    */
    readonly associatedGatewayOwnerAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#dx_gateway_id DxGatewayAssociation#dx_gateway_id}
    */
    readonly dxGatewayId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#proposal_id DxGatewayAssociation#proposal_id}
    */
    readonly proposalId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#vpn_gateway_id DxGatewayAssociation#vpn_gateway_id}
    */
    readonly vpnGatewayId?: string;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#timeouts DxGatewayAssociation#timeouts}
    */
    readonly timeouts?: DxGatewayAssociationTimeouts;
  }
  export interface DxGatewayAssociationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#create DxGatewayAssociation#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#delete DxGatewayAssociation#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#update DxGatewayAssociation#update}
    */
    readonly update?: string;
  }

  function dxGatewayAssociationTimeoutsToTerraform(struct?: DxGatewayAssociationTimeoutsOutputReference | DxGatewayAssociationTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class DxGatewayAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html aws_dx_gateway_association}
  */
  export class DxGatewayAssociation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_dx_gateway_association";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html aws_dx_gateway_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxGatewayAssociationConfig
    */
    public constructor(scope: Construct, id: string, config: DxGatewayAssociationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_dx_gateway_association',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._allowedPrefixes = config.allowedPrefixes;
      this._associatedGatewayId = config.associatedGatewayId;
      this._associatedGatewayOwnerAccountId = config.associatedGatewayOwnerAccountId;
      this._dxGatewayId = config.dxGatewayId;
      this._proposalId = config.proposalId;
      this._vpnGatewayId = config.vpnGatewayId;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allowed_prefixes - computed: true, optional: true, required: false
    private _allowedPrefixes?: string[] | undefined; 
    public get allowedPrefixes() {
      return this.getListAttribute('allowed_prefixes');
    }
    public set allowedPrefixes(value: string[] | undefined) {
      this._allowedPrefixes = value;
    }
    public resetAllowedPrefixes() {
      this._allowedPrefixes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedPrefixesInput() {
      return this._allowedPrefixes
    }

    // associated_gateway_id - computed: true, optional: true, required: false
    private _associatedGatewayId?: string | undefined; 
    public get associatedGatewayId() {
      return this.getStringAttribute('associated_gateway_id');
    }
    public set associatedGatewayId(value: string | undefined) {
      this._associatedGatewayId = value;
    }
    public resetAssociatedGatewayId() {
      this._associatedGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associatedGatewayIdInput() {
      return this._associatedGatewayId
    }

    // associated_gateway_owner_account_id - computed: true, optional: true, required: false
    private _associatedGatewayOwnerAccountId?: string | undefined; 
    public get associatedGatewayOwnerAccountId() {
      return this.getStringAttribute('associated_gateway_owner_account_id');
    }
    public set associatedGatewayOwnerAccountId(value: string | undefined) {
      this._associatedGatewayOwnerAccountId = value;
    }
    public resetAssociatedGatewayOwnerAccountId() {
      this._associatedGatewayOwnerAccountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associatedGatewayOwnerAccountIdInput() {
      return this._associatedGatewayOwnerAccountId
    }

    // associated_gateway_type - computed: true, optional: false, required: false
    public get associatedGatewayType() {
      return this.getStringAttribute('associated_gateway_type');
    }

    // dx_gateway_association_id - computed: true, optional: false, required: false
    public get dxGatewayAssociationId() {
      return this.getStringAttribute('dx_gateway_association_id');
    }

    // dx_gateway_id - computed: false, optional: false, required: true
    private _dxGatewayId?: string; 
    public get dxGatewayId() {
      return this.getStringAttribute('dx_gateway_id');
    }
    public set dxGatewayId(value: string) {
      this._dxGatewayId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dxGatewayIdInput() {
      return this._dxGatewayId
    }

    // dx_gateway_owner_account_id - computed: true, optional: false, required: false
    public get dxGatewayOwnerAccountId() {
      return this.getStringAttribute('dx_gateway_owner_account_id');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // proposal_id - computed: false, optional: true, required: false
    private _proposalId?: string | undefined; 
    public get proposalId() {
      return this.getStringAttribute('proposal_id');
    }
    public set proposalId(value: string | undefined) {
      this._proposalId = value;
    }
    public resetProposalId() {
      this._proposalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get proposalIdInput() {
      return this._proposalId
    }

    // vpn_gateway_id - computed: false, optional: true, required: false
    private _vpnGatewayId?: string | undefined; 
    public get vpnGatewayId() {
      return this.getStringAttribute('vpn_gateway_id');
    }
    public set vpnGatewayId(value: string | undefined) {
      this._vpnGatewayId = value;
    }
    public resetVpnGatewayId() {
      this._vpnGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpnGatewayIdInput() {
      return this._vpnGatewayId
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: DxGatewayAssociationTimeouts | undefined; 
    private __timeoutsOutput = new DxGatewayAssociationTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: DxGatewayAssociationTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        allowed_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedPrefixes),
        associated_gateway_id: cdktf.stringToTerraform(this._associatedGatewayId),
        associated_gateway_owner_account_id: cdktf.stringToTerraform(this._associatedGatewayOwnerAccountId),
        dx_gateway_id: cdktf.stringToTerraform(this._dxGatewayId),
        proposal_id: cdktf.stringToTerraform(this._proposalId),
        vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId),
        timeouts: dxGatewayAssociationTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface DxGatewayAssociationProposalConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal.html#allowed_prefixes DxGatewayAssociationProposal#allowed_prefixes}
    */
    readonly allowedPrefixes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal.html#associated_gateway_id DxGatewayAssociationProposal#associated_gateway_id}
    */
    readonly associatedGatewayId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal.html#dx_gateway_id DxGatewayAssociationProposal#dx_gateway_id}
    */
    readonly dxGatewayId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal.html#dx_gateway_owner_account_id DxGatewayAssociationProposal#dx_gateway_owner_account_id}
    */
    readonly dxGatewayOwnerAccountId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal.html aws_dx_gateway_association_proposal}
  */
  export class DxGatewayAssociationProposal extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_dx_gateway_association_proposal";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal.html aws_dx_gateway_association_proposal} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxGatewayAssociationProposalConfig
    */
    public constructor(scope: Construct, id: string, config: DxGatewayAssociationProposalConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_dx_gateway_association_proposal',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._allowedPrefixes = config.allowedPrefixes;
      this._associatedGatewayId = config.associatedGatewayId;
      this._dxGatewayId = config.dxGatewayId;
      this._dxGatewayOwnerAccountId = config.dxGatewayOwnerAccountId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allowed_prefixes - computed: true, optional: true, required: false
    private _allowedPrefixes?: string[] | undefined; 
    public get allowedPrefixes() {
      return this.getListAttribute('allowed_prefixes');
    }
    public set allowedPrefixes(value: string[] | undefined) {
      this._allowedPrefixes = value;
    }
    public resetAllowedPrefixes() {
      this._allowedPrefixes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedPrefixesInput() {
      return this._allowedPrefixes
    }

    // associated_gateway_id - computed: false, optional: false, required: true
    private _associatedGatewayId?: string; 
    public get associatedGatewayId() {
      return this.getStringAttribute('associated_gateway_id');
    }
    public set associatedGatewayId(value: string) {
      this._associatedGatewayId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get associatedGatewayIdInput() {
      return this._associatedGatewayId
    }

    // associated_gateway_owner_account_id - computed: true, optional: false, required: false
    public get associatedGatewayOwnerAccountId() {
      return this.getStringAttribute('associated_gateway_owner_account_id');
    }

    // associated_gateway_type - computed: true, optional: false, required: false
    public get associatedGatewayType() {
      return this.getStringAttribute('associated_gateway_type');
    }

    // dx_gateway_id - computed: false, optional: false, required: true
    private _dxGatewayId?: string; 
    public get dxGatewayId() {
      return this.getStringAttribute('dx_gateway_id');
    }
    public set dxGatewayId(value: string) {
      this._dxGatewayId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dxGatewayIdInput() {
      return this._dxGatewayId
    }

    // dx_gateway_owner_account_id - computed: false, optional: false, required: true
    private _dxGatewayOwnerAccountId?: string; 
    public get dxGatewayOwnerAccountId() {
      return this.getStringAttribute('dx_gateway_owner_account_id');
    }
    public set dxGatewayOwnerAccountId(value: string) {
      this._dxGatewayOwnerAccountId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dxGatewayOwnerAccountIdInput() {
      return this._dxGatewayOwnerAccountId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        allowed_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedPrefixes),
        associated_gateway_id: cdktf.stringToTerraform(this._associatedGatewayId),
        dx_gateway_id: cdktf.stringToTerraform(this._dxGatewayId),
        dx_gateway_owner_account_id: cdktf.stringToTerraform(this._dxGatewayOwnerAccountId),
      };
    }
  }
  export interface DxHostedConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_connection.html#bandwidth DxHostedConnection#bandwidth}
    */
    readonly bandwidth: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_connection.html#connection_id DxHostedConnection#connection_id}
    */
    readonly connectionId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_connection.html#name DxHostedConnection#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_connection.html#owner_account_id DxHostedConnection#owner_account_id}
    */
    readonly ownerAccountId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_connection.html#vlan DxHostedConnection#vlan}
    */
    readonly vlan: number;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_connection.html aws_dx_hosted_connection}
  */
  export class DxHostedConnection extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_dx_hosted_connection";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_connection.html aws_dx_hosted_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxHostedConnectionConfig
    */
    public constructor(scope: Construct, id: string, config: DxHostedConnectionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_dx_hosted_connection',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._bandwidth = config.bandwidth;
      this._connectionId = config.connectionId;
      this._name = config.name;
      this._ownerAccountId = config.ownerAccountId;
      this._vlan = config.vlan;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // aws_device - computed: true, optional: false, required: false
    public get awsDevice() {
      return this.getStringAttribute('aws_device');
    }

    // bandwidth - computed: false, optional: false, required: true
    private _bandwidth?: string; 
    public get bandwidth() {
      return this.getStringAttribute('bandwidth');
    }
    public set bandwidth(value: string) {
      this._bandwidth = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bandwidthInput() {
      return this._bandwidth
    }

    // connection_id - computed: false, optional: false, required: true
    private _connectionId?: string; 
    public get connectionId() {
      return this.getStringAttribute('connection_id');
    }
    public set connectionId(value: string) {
      this._connectionId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionIdInput() {
      return this._connectionId
    }

    // has_logical_redundancy - computed: true, optional: false, required: false
    public get hasLogicalRedundancy() {
      return this.getStringAttribute('has_logical_redundancy');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // jumbo_frame_capable - computed: true, optional: false, required: false
    public get jumboFrameCapable() {
      return this.getBooleanAttribute('jumbo_frame_capable') as any;
    }

    // lag_id - computed: true, optional: false, required: false
    public get lagId() {
      return this.getStringAttribute('lag_id');
    }

    // loa_issue_time - computed: true, optional: false, required: false
    public get loaIssueTime() {
      return this.getStringAttribute('loa_issue_time');
    }

    // location - computed: true, optional: false, required: false
    public get location() {
      return this.getStringAttribute('location');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // owner_account_id - computed: false, optional: false, required: true
    private _ownerAccountId?: string; 
    public get ownerAccountId() {
      return this.getStringAttribute('owner_account_id');
    }
    public set ownerAccountId(value: string) {
      this._ownerAccountId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerAccountIdInput() {
      return this._ownerAccountId
    }

    // partner_name - computed: true, optional: false, required: false
    public get partnerName() {
      return this.getStringAttribute('partner_name');
    }

    // provider_name - computed: true, optional: false, required: false
    public get providerName() {
      return this.getStringAttribute('provider_name');
    }

    // region - computed: true, optional: false, required: false
    public get region() {
      return this.getStringAttribute('region');
    }

    // state - computed: true, optional: false, required: false
    public get state() {
      return this.getStringAttribute('state');
    }

    // vlan - computed: false, optional: false, required: true
    private _vlan?: number; 
    public get vlan() {
      return this.getNumberAttribute('vlan');
    }
    public set vlan(value: number) {
      this._vlan = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vlanInput() {
      return this._vlan
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        bandwidth: cdktf.stringToTerraform(this._bandwidth),
        connection_id: cdktf.stringToTerraform(this._connectionId),
        name: cdktf.stringToTerraform(this._name),
        owner_account_id: cdktf.stringToTerraform(this._ownerAccountId),
        vlan: cdktf.numberToTerraform(this._vlan),
      };
    }
  }
  export interface DxHostedPrivateVirtualInterfaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface.html#address_family DxHostedPrivateVirtualInterface#address_family}
    */
    readonly addressFamily: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface.html#amazon_address DxHostedPrivateVirtualInterface#amazon_address}
    */
    readonly amazonAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface.html#bgp_asn DxHostedPrivateVirtualInterface#bgp_asn}
    */
    readonly bgpAsn: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface.html#bgp_auth_key DxHostedPrivateVirtualInterface#bgp_auth_key}
    */
    readonly bgpAuthKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface.html#connection_id DxHostedPrivateVirtualInterface#connection_id}
    */
    readonly connectionId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface.html#customer_address DxHostedPrivateVirtualInterface#customer_address}
    */
    readonly customerAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface.html#mtu DxHostedPrivateVirtualInterface#mtu}
    */
    readonly mtu?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface.html#name DxHostedPrivateVirtualInterface#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface.html#owner_account_id DxHostedPrivateVirtualInterface#owner_account_id}
    */
    readonly ownerAccountId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface.html#vlan DxHostedPrivateVirtualInterface#vlan}
    */
    readonly vlan: number;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface.html#timeouts DxHostedPrivateVirtualInterface#timeouts}
    */
    readonly timeouts?: DxHostedPrivateVirtualInterfaceTimeouts;
  }
  export interface DxHostedPrivateVirtualInterfaceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface.html#create DxHostedPrivateVirtualInterface#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface.html#delete DxHostedPrivateVirtualInterface#delete}
    */
    readonly delete?: string;
  }

  function dxHostedPrivateVirtualInterfaceTimeoutsToTerraform(struct?: DxHostedPrivateVirtualInterfaceTimeoutsOutputReference | DxHostedPrivateVirtualInterfaceTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }

  export class DxHostedPrivateVirtualInterfaceTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface.html aws_dx_hosted_private_virtual_interface}
  */
  export class DxHostedPrivateVirtualInterface extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_dx_hosted_private_virtual_interface";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface.html aws_dx_hosted_private_virtual_interface} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxHostedPrivateVirtualInterfaceConfig
    */
    public constructor(scope: Construct, id: string, config: DxHostedPrivateVirtualInterfaceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_dx_hosted_private_virtual_interface',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._addressFamily = config.addressFamily;
      this._amazonAddress = config.amazonAddress;
      this._bgpAsn = config.bgpAsn;
      this._bgpAuthKey = config.bgpAuthKey;
      this._connectionId = config.connectionId;
      this._customerAddress = config.customerAddress;
      this._mtu = config.mtu;
      this._name = config.name;
      this._ownerAccountId = config.ownerAccountId;
      this._vlan = config.vlan;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // address_family - computed: false, optional: false, required: true
    private _addressFamily?: string; 
    public get addressFamily() {
      return this.getStringAttribute('address_family');
    }
    public set addressFamily(value: string) {
      this._addressFamily = value;
    }
    // Temporarily expose input value. Use with caution.
    public get addressFamilyInput() {
      return this._addressFamily
    }

    // amazon_address - computed: true, optional: true, required: false
    private _amazonAddress?: string | undefined; 
    public get amazonAddress() {
      return this.getStringAttribute('amazon_address');
    }
    public set amazonAddress(value: string | undefined) {
      this._amazonAddress = value;
    }
    public resetAmazonAddress() {
      this._amazonAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amazonAddressInput() {
      return this._amazonAddress
    }

    // amazon_side_asn - computed: true, optional: false, required: false
    public get amazonSideAsn() {
      return this.getStringAttribute('amazon_side_asn');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // aws_device - computed: true, optional: false, required: false
    public get awsDevice() {
      return this.getStringAttribute('aws_device');
    }

    // bgp_asn - computed: false, optional: false, required: true
    private _bgpAsn?: number; 
    public get bgpAsn() {
      return this.getNumberAttribute('bgp_asn');
    }
    public set bgpAsn(value: number) {
      this._bgpAsn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bgpAsnInput() {
      return this._bgpAsn
    }

    // bgp_auth_key - computed: true, optional: true, required: false
    private _bgpAuthKey?: string | undefined; 
    public get bgpAuthKey() {
      return this.getStringAttribute('bgp_auth_key');
    }
    public set bgpAuthKey(value: string | undefined) {
      this._bgpAuthKey = value;
    }
    public resetBgpAuthKey() {
      this._bgpAuthKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bgpAuthKeyInput() {
      return this._bgpAuthKey
    }

    // connection_id - computed: false, optional: false, required: true
    private _connectionId?: string; 
    public get connectionId() {
      return this.getStringAttribute('connection_id');
    }
    public set connectionId(value: string) {
      this._connectionId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionIdInput() {
      return this._connectionId
    }

    // customer_address - computed: true, optional: true, required: false
    private _customerAddress?: string | undefined; 
    public get customerAddress() {
      return this.getStringAttribute('customer_address');
    }
    public set customerAddress(value: string | undefined) {
      this._customerAddress = value;
    }
    public resetCustomerAddress() {
      this._customerAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customerAddressInput() {
      return this._customerAddress
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // jumbo_frame_capable - computed: true, optional: false, required: false
    public get jumboFrameCapable() {
      return this.getBooleanAttribute('jumbo_frame_capable') as any;
    }

    // mtu - computed: false, optional: true, required: false
    private _mtu?: number | undefined; 
    public get mtu() {
      return this.getNumberAttribute('mtu');
    }
    public set mtu(value: number | undefined) {
      this._mtu = value;
    }
    public resetMtu() {
      this._mtu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mtuInput() {
      return this._mtu
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // owner_account_id - computed: false, optional: false, required: true
    private _ownerAccountId?: string; 
    public get ownerAccountId() {
      return this.getStringAttribute('owner_account_id');
    }
    public set ownerAccountId(value: string) {
      this._ownerAccountId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerAccountIdInput() {
      return this._ownerAccountId
    }

    // vlan - computed: false, optional: false, required: true
    private _vlan?: number; 
    public get vlan() {
      return this.getNumberAttribute('vlan');
    }
    public set vlan(value: number) {
      this._vlan = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vlanInput() {
      return this._vlan
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: DxHostedPrivateVirtualInterfaceTimeouts | undefined; 
    private __timeoutsOutput = new DxHostedPrivateVirtualInterfaceTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: DxHostedPrivateVirtualInterfaceTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        address_family: cdktf.stringToTerraform(this._addressFamily),
        amazon_address: cdktf.stringToTerraform(this._amazonAddress),
        bgp_asn: cdktf.numberToTerraform(this._bgpAsn),
        bgp_auth_key: cdktf.stringToTerraform(this._bgpAuthKey),
        connection_id: cdktf.stringToTerraform(this._connectionId),
        customer_address: cdktf.stringToTerraform(this._customerAddress),
        mtu: cdktf.numberToTerraform(this._mtu),
        name: cdktf.stringToTerraform(this._name),
        owner_account_id: cdktf.stringToTerraform(this._ownerAccountId),
        vlan: cdktf.numberToTerraform(this._vlan),
        timeouts: dxHostedPrivateVirtualInterfaceTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface DxHostedPrivateVirtualInterfaceAccepterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter.html#dx_gateway_id DxHostedPrivateVirtualInterfaceAccepter#dx_gateway_id}
    */
    readonly dxGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter.html#tags DxHostedPrivateVirtualInterfaceAccepter#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter.html#tags_all DxHostedPrivateVirtualInterfaceAccepter#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter.html#virtual_interface_id DxHostedPrivateVirtualInterfaceAccepter#virtual_interface_id}
    */
    readonly virtualInterfaceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter.html#vpn_gateway_id DxHostedPrivateVirtualInterfaceAccepter#vpn_gateway_id}
    */
    readonly vpnGatewayId?: string;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter.html#timeouts DxHostedPrivateVirtualInterfaceAccepter#timeouts}
    */
    readonly timeouts?: DxHostedPrivateVirtualInterfaceAccepterTimeouts;
  }
  export interface DxHostedPrivateVirtualInterfaceAccepterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter.html#create DxHostedPrivateVirtualInterfaceAccepter#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter.html#delete DxHostedPrivateVirtualInterfaceAccepter#delete}
    */
    readonly delete?: string;
  }

  function dxHostedPrivateVirtualInterfaceAccepterTimeoutsToTerraform(struct?: DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference | DxHostedPrivateVirtualInterfaceAccepterTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }

  export class DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter.html aws_dx_hosted_private_virtual_interface_accepter}
  */
  export class DxHostedPrivateVirtualInterfaceAccepter extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_dx_hosted_private_virtual_interface_accepter";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter.html aws_dx_hosted_private_virtual_interface_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxHostedPrivateVirtualInterfaceAccepterConfig
    */
    public constructor(scope: Construct, id: string, config: DxHostedPrivateVirtualInterfaceAccepterConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_dx_hosted_private_virtual_interface_accepter',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._dxGatewayId = config.dxGatewayId;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._virtualInterfaceId = config.virtualInterfaceId;
      this._vpnGatewayId = config.vpnGatewayId;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // dx_gateway_id - computed: false, optional: true, required: false
    private _dxGatewayId?: string | undefined; 
    public get dxGatewayId() {
      return this.getStringAttribute('dx_gateway_id');
    }
    public set dxGatewayId(value: string | undefined) {
      this._dxGatewayId = value;
    }
    public resetDxGatewayId() {
      this._dxGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dxGatewayIdInput() {
      return this._dxGatewayId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // virtual_interface_id - computed: false, optional: false, required: true
    private _virtualInterfaceId?: string; 
    public get virtualInterfaceId() {
      return this.getStringAttribute('virtual_interface_id');
    }
    public set virtualInterfaceId(value: string) {
      this._virtualInterfaceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get virtualInterfaceIdInput() {
      return this._virtualInterfaceId
    }

    // vpn_gateway_id - computed: false, optional: true, required: false
    private _vpnGatewayId?: string | undefined; 
    public get vpnGatewayId() {
      return this.getStringAttribute('vpn_gateway_id');
    }
    public set vpnGatewayId(value: string | undefined) {
      this._vpnGatewayId = value;
    }
    public resetVpnGatewayId() {
      this._vpnGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpnGatewayIdInput() {
      return this._vpnGatewayId
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: DxHostedPrivateVirtualInterfaceAccepterTimeouts | undefined; 
    private __timeoutsOutput = new DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: DxHostedPrivateVirtualInterfaceAccepterTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        dx_gateway_id: cdktf.stringToTerraform(this._dxGatewayId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        virtual_interface_id: cdktf.stringToTerraform(this._virtualInterfaceId),
        vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId),
        timeouts: dxHostedPrivateVirtualInterfaceAccepterTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface DxHostedPublicVirtualInterfaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface.html#address_family DxHostedPublicVirtualInterface#address_family}
    */
    readonly addressFamily: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface.html#amazon_address DxHostedPublicVirtualInterface#amazon_address}
    */
    readonly amazonAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface.html#bgp_asn DxHostedPublicVirtualInterface#bgp_asn}
    */
    readonly bgpAsn: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface.html#bgp_auth_key DxHostedPublicVirtualInterface#bgp_auth_key}
    */
    readonly bgpAuthKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface.html#connection_id DxHostedPublicVirtualInterface#connection_id}
    */
    readonly connectionId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface.html#customer_address DxHostedPublicVirtualInterface#customer_address}
    */
    readonly customerAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface.html#name DxHostedPublicVirtualInterface#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface.html#owner_account_id DxHostedPublicVirtualInterface#owner_account_id}
    */
    readonly ownerAccountId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface.html#route_filter_prefixes DxHostedPublicVirtualInterface#route_filter_prefixes}
    */
    readonly routeFilterPrefixes: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface.html#vlan DxHostedPublicVirtualInterface#vlan}
    */
    readonly vlan: number;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface.html#timeouts DxHostedPublicVirtualInterface#timeouts}
    */
    readonly timeouts?: DxHostedPublicVirtualInterfaceTimeouts;
  }
  export interface DxHostedPublicVirtualInterfaceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface.html#create DxHostedPublicVirtualInterface#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface.html#delete DxHostedPublicVirtualInterface#delete}
    */
    readonly delete?: string;
  }

  function dxHostedPublicVirtualInterfaceTimeoutsToTerraform(struct?: DxHostedPublicVirtualInterfaceTimeoutsOutputReference | DxHostedPublicVirtualInterfaceTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }

  export class DxHostedPublicVirtualInterfaceTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface.html aws_dx_hosted_public_virtual_interface}
  */
  export class DxHostedPublicVirtualInterface extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_dx_hosted_public_virtual_interface";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface.html aws_dx_hosted_public_virtual_interface} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxHostedPublicVirtualInterfaceConfig
    */
    public constructor(scope: Construct, id: string, config: DxHostedPublicVirtualInterfaceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_dx_hosted_public_virtual_interface',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._addressFamily = config.addressFamily;
      this._amazonAddress = config.amazonAddress;
      this._bgpAsn = config.bgpAsn;
      this._bgpAuthKey = config.bgpAuthKey;
      this._connectionId = config.connectionId;
      this._customerAddress = config.customerAddress;
      this._name = config.name;
      this._ownerAccountId = config.ownerAccountId;
      this._routeFilterPrefixes = config.routeFilterPrefixes;
      this._vlan = config.vlan;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // address_family - computed: false, optional: false, required: true
    private _addressFamily?: string; 
    public get addressFamily() {
      return this.getStringAttribute('address_family');
    }
    public set addressFamily(value: string) {
      this._addressFamily = value;
    }
    // Temporarily expose input value. Use with caution.
    public get addressFamilyInput() {
      return this._addressFamily
    }

    // amazon_address - computed: true, optional: true, required: false
    private _amazonAddress?: string | undefined; 
    public get amazonAddress() {
      return this.getStringAttribute('amazon_address');
    }
    public set amazonAddress(value: string | undefined) {
      this._amazonAddress = value;
    }
    public resetAmazonAddress() {
      this._amazonAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amazonAddressInput() {
      return this._amazonAddress
    }

    // amazon_side_asn - computed: true, optional: false, required: false
    public get amazonSideAsn() {
      return this.getStringAttribute('amazon_side_asn');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // aws_device - computed: true, optional: false, required: false
    public get awsDevice() {
      return this.getStringAttribute('aws_device');
    }

    // bgp_asn - computed: false, optional: false, required: true
    private _bgpAsn?: number; 
    public get bgpAsn() {
      return this.getNumberAttribute('bgp_asn');
    }
    public set bgpAsn(value: number) {
      this._bgpAsn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bgpAsnInput() {
      return this._bgpAsn
    }

    // bgp_auth_key - computed: true, optional: true, required: false
    private _bgpAuthKey?: string | undefined; 
    public get bgpAuthKey() {
      return this.getStringAttribute('bgp_auth_key');
    }
    public set bgpAuthKey(value: string | undefined) {
      this._bgpAuthKey = value;
    }
    public resetBgpAuthKey() {
      this._bgpAuthKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bgpAuthKeyInput() {
      return this._bgpAuthKey
    }

    // connection_id - computed: false, optional: false, required: true
    private _connectionId?: string; 
    public get connectionId() {
      return this.getStringAttribute('connection_id');
    }
    public set connectionId(value: string) {
      this._connectionId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionIdInput() {
      return this._connectionId
    }

    // customer_address - computed: true, optional: true, required: false
    private _customerAddress?: string | undefined; 
    public get customerAddress() {
      return this.getStringAttribute('customer_address');
    }
    public set customerAddress(value: string | undefined) {
      this._customerAddress = value;
    }
    public resetCustomerAddress() {
      this._customerAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customerAddressInput() {
      return this._customerAddress
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // owner_account_id - computed: false, optional: false, required: true
    private _ownerAccountId?: string; 
    public get ownerAccountId() {
      return this.getStringAttribute('owner_account_id');
    }
    public set ownerAccountId(value: string) {
      this._ownerAccountId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerAccountIdInput() {
      return this._ownerAccountId
    }

    // route_filter_prefixes - computed: false, optional: false, required: true
    private _routeFilterPrefixes?: string[]; 
    public get routeFilterPrefixes() {
      return this.getListAttribute('route_filter_prefixes');
    }
    public set routeFilterPrefixes(value: string[]) {
      this._routeFilterPrefixes = value;
    }
    // Temporarily expose input value. Use with caution.
    public get routeFilterPrefixesInput() {
      return this._routeFilterPrefixes
    }

    // vlan - computed: false, optional: false, required: true
    private _vlan?: number; 
    public get vlan() {
      return this.getNumberAttribute('vlan');
    }
    public set vlan(value: number) {
      this._vlan = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vlanInput() {
      return this._vlan
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: DxHostedPublicVirtualInterfaceTimeouts | undefined; 
    private __timeoutsOutput = new DxHostedPublicVirtualInterfaceTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: DxHostedPublicVirtualInterfaceTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        address_family: cdktf.stringToTerraform(this._addressFamily),
        amazon_address: cdktf.stringToTerraform(this._amazonAddress),
        bgp_asn: cdktf.numberToTerraform(this._bgpAsn),
        bgp_auth_key: cdktf.stringToTerraform(this._bgpAuthKey),
        connection_id: cdktf.stringToTerraform(this._connectionId),
        customer_address: cdktf.stringToTerraform(this._customerAddress),
        name: cdktf.stringToTerraform(this._name),
        owner_account_id: cdktf.stringToTerraform(this._ownerAccountId),
        route_filter_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(this._routeFilterPrefixes),
        vlan: cdktf.numberToTerraform(this._vlan),
        timeouts: dxHostedPublicVirtualInterfaceTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface DxHostedPublicVirtualInterfaceAccepterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter.html#tags DxHostedPublicVirtualInterfaceAccepter#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter.html#tags_all DxHostedPublicVirtualInterfaceAccepter#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter.html#virtual_interface_id DxHostedPublicVirtualInterfaceAccepter#virtual_interface_id}
    */
    readonly virtualInterfaceId: string;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter.html#timeouts DxHostedPublicVirtualInterfaceAccepter#timeouts}
    */
    readonly timeouts?: DxHostedPublicVirtualInterfaceAccepterTimeouts;
  }
  export interface DxHostedPublicVirtualInterfaceAccepterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter.html#create DxHostedPublicVirtualInterfaceAccepter#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter.html#delete DxHostedPublicVirtualInterfaceAccepter#delete}
    */
    readonly delete?: string;
  }

  function dxHostedPublicVirtualInterfaceAccepterTimeoutsToTerraform(struct?: DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference | DxHostedPublicVirtualInterfaceAccepterTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }

  export class DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter.html aws_dx_hosted_public_virtual_interface_accepter}
  */
  export class DxHostedPublicVirtualInterfaceAccepter extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_dx_hosted_public_virtual_interface_accepter";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter.html aws_dx_hosted_public_virtual_interface_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxHostedPublicVirtualInterfaceAccepterConfig
    */
    public constructor(scope: Construct, id: string, config: DxHostedPublicVirtualInterfaceAccepterConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_dx_hosted_public_virtual_interface_accepter',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._virtualInterfaceId = config.virtualInterfaceId;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // virtual_interface_id - computed: false, optional: false, required: true
    private _virtualInterfaceId?: string; 
    public get virtualInterfaceId() {
      return this.getStringAttribute('virtual_interface_id');
    }
    public set virtualInterfaceId(value: string) {
      this._virtualInterfaceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get virtualInterfaceIdInput() {
      return this._virtualInterfaceId
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: DxHostedPublicVirtualInterfaceAccepterTimeouts | undefined; 
    private __timeoutsOutput = new DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: DxHostedPublicVirtualInterfaceAccepterTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        virtual_interface_id: cdktf.stringToTerraform(this._virtualInterfaceId),
        timeouts: dxHostedPublicVirtualInterfaceAccepterTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface DxHostedTransitVirtualInterfaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface.html#address_family DxHostedTransitVirtualInterface#address_family}
    */
    readonly addressFamily: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface.html#amazon_address DxHostedTransitVirtualInterface#amazon_address}
    */
    readonly amazonAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface.html#bgp_asn DxHostedTransitVirtualInterface#bgp_asn}
    */
    readonly bgpAsn: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface.html#bgp_auth_key DxHostedTransitVirtualInterface#bgp_auth_key}
    */
    readonly bgpAuthKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface.html#connection_id DxHostedTransitVirtualInterface#connection_id}
    */
    readonly connectionId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface.html#customer_address DxHostedTransitVirtualInterface#customer_address}
    */
    readonly customerAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface.html#mtu DxHostedTransitVirtualInterface#mtu}
    */
    readonly mtu?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface.html#name DxHostedTransitVirtualInterface#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface.html#owner_account_id DxHostedTransitVirtualInterface#owner_account_id}
    */
    readonly ownerAccountId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface.html#vlan DxHostedTransitVirtualInterface#vlan}
    */
    readonly vlan: number;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface.html#timeouts DxHostedTransitVirtualInterface#timeouts}
    */
    readonly timeouts?: DxHostedTransitVirtualInterfaceTimeouts;
  }
  export interface DxHostedTransitVirtualInterfaceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface.html#create DxHostedTransitVirtualInterface#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface.html#delete DxHostedTransitVirtualInterface#delete}
    */
    readonly delete?: string;
  }

  function dxHostedTransitVirtualInterfaceTimeoutsToTerraform(struct?: DxHostedTransitVirtualInterfaceTimeoutsOutputReference | DxHostedTransitVirtualInterfaceTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }

  export class DxHostedTransitVirtualInterfaceTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface.html aws_dx_hosted_transit_virtual_interface}
  */
  export class DxHostedTransitVirtualInterface extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_dx_hosted_transit_virtual_interface";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface.html aws_dx_hosted_transit_virtual_interface} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxHostedTransitVirtualInterfaceConfig
    */
    public constructor(scope: Construct, id: string, config: DxHostedTransitVirtualInterfaceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_dx_hosted_transit_virtual_interface',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._addressFamily = config.addressFamily;
      this._amazonAddress = config.amazonAddress;
      this._bgpAsn = config.bgpAsn;
      this._bgpAuthKey = config.bgpAuthKey;
      this._connectionId = config.connectionId;
      this._customerAddress = config.customerAddress;
      this._mtu = config.mtu;
      this._name = config.name;
      this._ownerAccountId = config.ownerAccountId;
      this._vlan = config.vlan;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // address_family - computed: false, optional: false, required: true
    private _addressFamily?: string; 
    public get addressFamily() {
      return this.getStringAttribute('address_family');
    }
    public set addressFamily(value: string) {
      this._addressFamily = value;
    }
    // Temporarily expose input value. Use with caution.
    public get addressFamilyInput() {
      return this._addressFamily
    }

    // amazon_address - computed: true, optional: true, required: false
    private _amazonAddress?: string | undefined; 
    public get amazonAddress() {
      return this.getStringAttribute('amazon_address');
    }
    public set amazonAddress(value: string | undefined) {
      this._amazonAddress = value;
    }
    public resetAmazonAddress() {
      this._amazonAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amazonAddressInput() {
      return this._amazonAddress
    }

    // amazon_side_asn - computed: true, optional: false, required: false
    public get amazonSideAsn() {
      return this.getStringAttribute('amazon_side_asn');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // aws_device - computed: true, optional: false, required: false
    public get awsDevice() {
      return this.getStringAttribute('aws_device');
    }

    // bgp_asn - computed: false, optional: false, required: true
    private _bgpAsn?: number; 
    public get bgpAsn() {
      return this.getNumberAttribute('bgp_asn');
    }
    public set bgpAsn(value: number) {
      this._bgpAsn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bgpAsnInput() {
      return this._bgpAsn
    }

    // bgp_auth_key - computed: true, optional: true, required: false
    private _bgpAuthKey?: string | undefined; 
    public get bgpAuthKey() {
      return this.getStringAttribute('bgp_auth_key');
    }
    public set bgpAuthKey(value: string | undefined) {
      this._bgpAuthKey = value;
    }
    public resetBgpAuthKey() {
      this._bgpAuthKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bgpAuthKeyInput() {
      return this._bgpAuthKey
    }

    // connection_id - computed: false, optional: false, required: true
    private _connectionId?: string; 
    public get connectionId() {
      return this.getStringAttribute('connection_id');
    }
    public set connectionId(value: string) {
      this._connectionId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionIdInput() {
      return this._connectionId
    }

    // customer_address - computed: true, optional: true, required: false
    private _customerAddress?: string | undefined; 
    public get customerAddress() {
      return this.getStringAttribute('customer_address');
    }
    public set customerAddress(value: string | undefined) {
      this._customerAddress = value;
    }
    public resetCustomerAddress() {
      this._customerAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customerAddressInput() {
      return this._customerAddress
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // jumbo_frame_capable - computed: true, optional: false, required: false
    public get jumboFrameCapable() {
      return this.getBooleanAttribute('jumbo_frame_capable') as any;
    }

    // mtu - computed: false, optional: true, required: false
    private _mtu?: number | undefined; 
    public get mtu() {
      return this.getNumberAttribute('mtu');
    }
    public set mtu(value: number | undefined) {
      this._mtu = value;
    }
    public resetMtu() {
      this._mtu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mtuInput() {
      return this._mtu
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // owner_account_id - computed: false, optional: false, required: true
    private _ownerAccountId?: string; 
    public get ownerAccountId() {
      return this.getStringAttribute('owner_account_id');
    }
    public set ownerAccountId(value: string) {
      this._ownerAccountId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerAccountIdInput() {
      return this._ownerAccountId
    }

    // vlan - computed: false, optional: false, required: true
    private _vlan?: number; 
    public get vlan() {
      return this.getNumberAttribute('vlan');
    }
    public set vlan(value: number) {
      this._vlan = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vlanInput() {
      return this._vlan
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: DxHostedTransitVirtualInterfaceTimeouts | undefined; 
    private __timeoutsOutput = new DxHostedTransitVirtualInterfaceTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: DxHostedTransitVirtualInterfaceTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        address_family: cdktf.stringToTerraform(this._addressFamily),
        amazon_address: cdktf.stringToTerraform(this._amazonAddress),
        bgp_asn: cdktf.numberToTerraform(this._bgpAsn),
        bgp_auth_key: cdktf.stringToTerraform(this._bgpAuthKey),
        connection_id: cdktf.stringToTerraform(this._connectionId),
        customer_address: cdktf.stringToTerraform(this._customerAddress),
        mtu: cdktf.numberToTerraform(this._mtu),
        name: cdktf.stringToTerraform(this._name),
        owner_account_id: cdktf.stringToTerraform(this._ownerAccountId),
        vlan: cdktf.numberToTerraform(this._vlan),
        timeouts: dxHostedTransitVirtualInterfaceTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface DxHostedTransitVirtualInterfaceAccepterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter.html#dx_gateway_id DxHostedTransitVirtualInterfaceAccepter#dx_gateway_id}
    */
    readonly dxGatewayId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter.html#tags DxHostedTransitVirtualInterfaceAccepter#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter.html#tags_all DxHostedTransitVirtualInterfaceAccepter#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter.html#virtual_interface_id DxHostedTransitVirtualInterfaceAccepter#virtual_interface_id}
    */
    readonly virtualInterfaceId: string;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter.html#timeouts DxHostedTransitVirtualInterfaceAccepter#timeouts}
    */
    readonly timeouts?: DxHostedTransitVirtualInterfaceAccepterTimeouts;
  }
  export interface DxHostedTransitVirtualInterfaceAccepterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter.html#create DxHostedTransitVirtualInterfaceAccepter#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter.html#delete DxHostedTransitVirtualInterfaceAccepter#delete}
    */
    readonly delete?: string;
  }

  function dxHostedTransitVirtualInterfaceAccepterTimeoutsToTerraform(struct?: DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference | DxHostedTransitVirtualInterfaceAccepterTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }

  export class DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter.html aws_dx_hosted_transit_virtual_interface_accepter}
  */
  export class DxHostedTransitVirtualInterfaceAccepter extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_dx_hosted_transit_virtual_interface_accepter";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter.html aws_dx_hosted_transit_virtual_interface_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxHostedTransitVirtualInterfaceAccepterConfig
    */
    public constructor(scope: Construct, id: string, config: DxHostedTransitVirtualInterfaceAccepterConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_dx_hosted_transit_virtual_interface_accepter',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._dxGatewayId = config.dxGatewayId;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._virtualInterfaceId = config.virtualInterfaceId;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // dx_gateway_id - computed: false, optional: false, required: true
    private _dxGatewayId?: string; 
    public get dxGatewayId() {
      return this.getStringAttribute('dx_gateway_id');
    }
    public set dxGatewayId(value: string) {
      this._dxGatewayId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dxGatewayIdInput() {
      return this._dxGatewayId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // virtual_interface_id - computed: false, optional: false, required: true
    private _virtualInterfaceId?: string; 
    public get virtualInterfaceId() {
      return this.getStringAttribute('virtual_interface_id');
    }
    public set virtualInterfaceId(value: string) {
      this._virtualInterfaceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get virtualInterfaceIdInput() {
      return this._virtualInterfaceId
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: DxHostedTransitVirtualInterfaceAccepterTimeouts | undefined; 
    private __timeoutsOutput = new DxHostedTransitVirtualInterfaceAccepterTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: DxHostedTransitVirtualInterfaceAccepterTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        dx_gateway_id: cdktf.stringToTerraform(this._dxGatewayId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        virtual_interface_id: cdktf.stringToTerraform(this._virtualInterfaceId),
        timeouts: dxHostedTransitVirtualInterfaceAccepterTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface DxLagConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_lag.html#connection_id DxLag#connection_id}
    */
    readonly connectionId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_lag.html#connections_bandwidth DxLag#connections_bandwidth}
    */
    readonly connectionsBandwidth: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_lag.html#force_destroy DxLag#force_destroy}
    */
    readonly forceDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_lag.html#location DxLag#location}
    */
    readonly location: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_lag.html#name DxLag#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_lag.html#provider_name DxLag#provider_name}
    */
    readonly providerName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_lag.html#tags DxLag#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_lag.html#tags_all DxLag#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_lag.html aws_dx_lag}
  */
  export class DxLag extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_dx_lag";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_lag.html aws_dx_lag} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxLagConfig
    */
    public constructor(scope: Construct, id: string, config: DxLagConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_dx_lag',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._connectionId = config.connectionId;
      this._connectionsBandwidth = config.connectionsBandwidth;
      this._forceDestroy = config.forceDestroy;
      this._location = config.location;
      this._name = config.name;
      this._providerName = config.providerName;
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

    // connection_id - computed: false, optional: true, required: false
    private _connectionId?: string | undefined; 
    public get connectionId() {
      return this.getStringAttribute('connection_id');
    }
    public set connectionId(value: string | undefined) {
      this._connectionId = value;
    }
    public resetConnectionId() {
      this._connectionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionIdInput() {
      return this._connectionId
    }

    // connections_bandwidth - computed: false, optional: false, required: true
    private _connectionsBandwidth?: string; 
    public get connectionsBandwidth() {
      return this.getStringAttribute('connections_bandwidth');
    }
    public set connectionsBandwidth(value: string) {
      this._connectionsBandwidth = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionsBandwidthInput() {
      return this._connectionsBandwidth
    }

    // force_destroy - computed: false, optional: true, required: false
    private _forceDestroy?: boolean | cdktf.IResolvable | undefined; 
    public get forceDestroy() {
      return this.getBooleanAttribute('force_destroy') as any;
    }
    public set forceDestroy(value: boolean | cdktf.IResolvable | undefined) {
      this._forceDestroy = value;
    }
    public resetForceDestroy() {
      this._forceDestroy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forceDestroyInput() {
      return this._forceDestroy
    }

    // has_logical_redundancy - computed: true, optional: false, required: false
    public get hasLogicalRedundancy() {
      return this.getStringAttribute('has_logical_redundancy');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // jumbo_frame_capable - computed: true, optional: false, required: false
    public get jumboFrameCapable() {
      return this.getBooleanAttribute('jumbo_frame_capable') as any;
    }

    // location - computed: false, optional: false, required: true
    private _location?: string; 
    public get location() {
      return this.getStringAttribute('location');
    }
    public set location(value: string) {
      this._location = value;
    }
    // Temporarily expose input value. Use with caution.
    public get locationInput() {
      return this._location
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // owner_account_id - computed: true, optional: false, required: false
    public get ownerAccountId() {
      return this.getStringAttribute('owner_account_id');
    }

    // provider_name - computed: true, optional: true, required: false
    private _providerName?: string | undefined; 
    public get providerName() {
      return this.getStringAttribute('provider_name');
    }
    public set providerName(value: string | undefined) {
      this._providerName = value;
    }
    public resetProviderName() {
      this._providerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get providerNameInput() {
      return this._providerName
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        connection_id: cdktf.stringToTerraform(this._connectionId),
        connections_bandwidth: cdktf.stringToTerraform(this._connectionsBandwidth),
        force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
        location: cdktf.stringToTerraform(this._location),
        name: cdktf.stringToTerraform(this._name),
        provider_name: cdktf.stringToTerraform(this._providerName),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface DxPrivateVirtualInterfaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html#address_family DxPrivateVirtualInterface#address_family}
    */
    readonly addressFamily: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html#amazon_address DxPrivateVirtualInterface#amazon_address}
    */
    readonly amazonAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html#bgp_asn DxPrivateVirtualInterface#bgp_asn}
    */
    readonly bgpAsn: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html#bgp_auth_key DxPrivateVirtualInterface#bgp_auth_key}
    */
    readonly bgpAuthKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html#connection_id DxPrivateVirtualInterface#connection_id}
    */
    readonly connectionId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html#customer_address DxPrivateVirtualInterface#customer_address}
    */
    readonly customerAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html#dx_gateway_id DxPrivateVirtualInterface#dx_gateway_id}
    */
    readonly dxGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html#mtu DxPrivateVirtualInterface#mtu}
    */
    readonly mtu?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html#name DxPrivateVirtualInterface#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html#tags DxPrivateVirtualInterface#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html#tags_all DxPrivateVirtualInterface#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html#vlan DxPrivateVirtualInterface#vlan}
    */
    readonly vlan: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html#vpn_gateway_id DxPrivateVirtualInterface#vpn_gateway_id}
    */
    readonly vpnGatewayId?: string;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html#timeouts DxPrivateVirtualInterface#timeouts}
    */
    readonly timeouts?: DxPrivateVirtualInterfaceTimeouts;
  }
  export interface DxPrivateVirtualInterfaceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html#create DxPrivateVirtualInterface#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html#delete DxPrivateVirtualInterface#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html#update DxPrivateVirtualInterface#update}
    */
    readonly update?: string;
  }

  function dxPrivateVirtualInterfaceTimeoutsToTerraform(struct?: DxPrivateVirtualInterfaceTimeoutsOutputReference | DxPrivateVirtualInterfaceTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class DxPrivateVirtualInterfaceTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html aws_dx_private_virtual_interface}
  */
  export class DxPrivateVirtualInterface extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_dx_private_virtual_interface";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html aws_dx_private_virtual_interface} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxPrivateVirtualInterfaceConfig
    */
    public constructor(scope: Construct, id: string, config: DxPrivateVirtualInterfaceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_dx_private_virtual_interface',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._addressFamily = config.addressFamily;
      this._amazonAddress = config.amazonAddress;
      this._bgpAsn = config.bgpAsn;
      this._bgpAuthKey = config.bgpAuthKey;
      this._connectionId = config.connectionId;
      this._customerAddress = config.customerAddress;
      this._dxGatewayId = config.dxGatewayId;
      this._mtu = config.mtu;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._vlan = config.vlan;
      this._vpnGatewayId = config.vpnGatewayId;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // address_family - computed: false, optional: false, required: true
    private _addressFamily?: string; 
    public get addressFamily() {
      return this.getStringAttribute('address_family');
    }
    public set addressFamily(value: string) {
      this._addressFamily = value;
    }
    // Temporarily expose input value. Use with caution.
    public get addressFamilyInput() {
      return this._addressFamily
    }

    // amazon_address - computed: true, optional: true, required: false
    private _amazonAddress?: string | undefined; 
    public get amazonAddress() {
      return this.getStringAttribute('amazon_address');
    }
    public set amazonAddress(value: string | undefined) {
      this._amazonAddress = value;
    }
    public resetAmazonAddress() {
      this._amazonAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amazonAddressInput() {
      return this._amazonAddress
    }

    // amazon_side_asn - computed: true, optional: false, required: false
    public get amazonSideAsn() {
      return this.getStringAttribute('amazon_side_asn');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // aws_device - computed: true, optional: false, required: false
    public get awsDevice() {
      return this.getStringAttribute('aws_device');
    }

    // bgp_asn - computed: false, optional: false, required: true
    private _bgpAsn?: number; 
    public get bgpAsn() {
      return this.getNumberAttribute('bgp_asn');
    }
    public set bgpAsn(value: number) {
      this._bgpAsn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bgpAsnInput() {
      return this._bgpAsn
    }

    // bgp_auth_key - computed: true, optional: true, required: false
    private _bgpAuthKey?: string | undefined; 
    public get bgpAuthKey() {
      return this.getStringAttribute('bgp_auth_key');
    }
    public set bgpAuthKey(value: string | undefined) {
      this._bgpAuthKey = value;
    }
    public resetBgpAuthKey() {
      this._bgpAuthKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bgpAuthKeyInput() {
      return this._bgpAuthKey
    }

    // connection_id - computed: false, optional: false, required: true
    private _connectionId?: string; 
    public get connectionId() {
      return this.getStringAttribute('connection_id');
    }
    public set connectionId(value: string) {
      this._connectionId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionIdInput() {
      return this._connectionId
    }

    // customer_address - computed: true, optional: true, required: false
    private _customerAddress?: string | undefined; 
    public get customerAddress() {
      return this.getStringAttribute('customer_address');
    }
    public set customerAddress(value: string | undefined) {
      this._customerAddress = value;
    }
    public resetCustomerAddress() {
      this._customerAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customerAddressInput() {
      return this._customerAddress
    }

    // dx_gateway_id - computed: false, optional: true, required: false
    private _dxGatewayId?: string | undefined; 
    public get dxGatewayId() {
      return this.getStringAttribute('dx_gateway_id');
    }
    public set dxGatewayId(value: string | undefined) {
      this._dxGatewayId = value;
    }
    public resetDxGatewayId() {
      this._dxGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dxGatewayIdInput() {
      return this._dxGatewayId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // jumbo_frame_capable - computed: true, optional: false, required: false
    public get jumboFrameCapable() {
      return this.getBooleanAttribute('jumbo_frame_capable') as any;
    }

    // mtu - computed: false, optional: true, required: false
    private _mtu?: number | undefined; 
    public get mtu() {
      return this.getNumberAttribute('mtu');
    }
    public set mtu(value: number | undefined) {
      this._mtu = value;
    }
    public resetMtu() {
      this._mtu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mtuInput() {
      return this._mtu
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // vlan - computed: false, optional: false, required: true
    private _vlan?: number; 
    public get vlan() {
      return this.getNumberAttribute('vlan');
    }
    public set vlan(value: number) {
      this._vlan = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vlanInput() {
      return this._vlan
    }

    // vpn_gateway_id - computed: false, optional: true, required: false
    private _vpnGatewayId?: string | undefined; 
    public get vpnGatewayId() {
      return this.getStringAttribute('vpn_gateway_id');
    }
    public set vpnGatewayId(value: string | undefined) {
      this._vpnGatewayId = value;
    }
    public resetVpnGatewayId() {
      this._vpnGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpnGatewayIdInput() {
      return this._vpnGatewayId
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: DxPrivateVirtualInterfaceTimeouts | undefined; 
    private __timeoutsOutput = new DxPrivateVirtualInterfaceTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: DxPrivateVirtualInterfaceTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        address_family: cdktf.stringToTerraform(this._addressFamily),
        amazon_address: cdktf.stringToTerraform(this._amazonAddress),
        bgp_asn: cdktf.numberToTerraform(this._bgpAsn),
        bgp_auth_key: cdktf.stringToTerraform(this._bgpAuthKey),
        connection_id: cdktf.stringToTerraform(this._connectionId),
        customer_address: cdktf.stringToTerraform(this._customerAddress),
        dx_gateway_id: cdktf.stringToTerraform(this._dxGatewayId),
        mtu: cdktf.numberToTerraform(this._mtu),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        vlan: cdktf.numberToTerraform(this._vlan),
        vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId),
        timeouts: dxPrivateVirtualInterfaceTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface DxPublicVirtualInterfaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#address_family DxPublicVirtualInterface#address_family}
    */
    readonly addressFamily: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#amazon_address DxPublicVirtualInterface#amazon_address}
    */
    readonly amazonAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#bgp_asn DxPublicVirtualInterface#bgp_asn}
    */
    readonly bgpAsn: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#bgp_auth_key DxPublicVirtualInterface#bgp_auth_key}
    */
    readonly bgpAuthKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#connection_id DxPublicVirtualInterface#connection_id}
    */
    readonly connectionId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#customer_address DxPublicVirtualInterface#customer_address}
    */
    readonly customerAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#name DxPublicVirtualInterface#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#route_filter_prefixes DxPublicVirtualInterface#route_filter_prefixes}
    */
    readonly routeFilterPrefixes: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#tags DxPublicVirtualInterface#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#tags_all DxPublicVirtualInterface#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#vlan DxPublicVirtualInterface#vlan}
    */
    readonly vlan: number;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#timeouts DxPublicVirtualInterface#timeouts}
    */
    readonly timeouts?: DxPublicVirtualInterfaceTimeouts;
  }
  export interface DxPublicVirtualInterfaceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#create DxPublicVirtualInterface#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html#delete DxPublicVirtualInterface#delete}
    */
    readonly delete?: string;
  }

  function dxPublicVirtualInterfaceTimeoutsToTerraform(struct?: DxPublicVirtualInterfaceTimeoutsOutputReference | DxPublicVirtualInterfaceTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }

  export class DxPublicVirtualInterfaceTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html aws_dx_public_virtual_interface}
  */
  export class DxPublicVirtualInterface extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_dx_public_virtual_interface";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html aws_dx_public_virtual_interface} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxPublicVirtualInterfaceConfig
    */
    public constructor(scope: Construct, id: string, config: DxPublicVirtualInterfaceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_dx_public_virtual_interface',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._addressFamily = config.addressFamily;
      this._amazonAddress = config.amazonAddress;
      this._bgpAsn = config.bgpAsn;
      this._bgpAuthKey = config.bgpAuthKey;
      this._connectionId = config.connectionId;
      this._customerAddress = config.customerAddress;
      this._name = config.name;
      this._routeFilterPrefixes = config.routeFilterPrefixes;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._vlan = config.vlan;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // address_family - computed: false, optional: false, required: true
    private _addressFamily?: string; 
    public get addressFamily() {
      return this.getStringAttribute('address_family');
    }
    public set addressFamily(value: string) {
      this._addressFamily = value;
    }
    // Temporarily expose input value. Use with caution.
    public get addressFamilyInput() {
      return this._addressFamily
    }

    // amazon_address - computed: true, optional: true, required: false
    private _amazonAddress?: string | undefined; 
    public get amazonAddress() {
      return this.getStringAttribute('amazon_address');
    }
    public set amazonAddress(value: string | undefined) {
      this._amazonAddress = value;
    }
    public resetAmazonAddress() {
      this._amazonAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amazonAddressInput() {
      return this._amazonAddress
    }

    // amazon_side_asn - computed: true, optional: false, required: false
    public get amazonSideAsn() {
      return this.getStringAttribute('amazon_side_asn');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // aws_device - computed: true, optional: false, required: false
    public get awsDevice() {
      return this.getStringAttribute('aws_device');
    }

    // bgp_asn - computed: false, optional: false, required: true
    private _bgpAsn?: number; 
    public get bgpAsn() {
      return this.getNumberAttribute('bgp_asn');
    }
    public set bgpAsn(value: number) {
      this._bgpAsn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bgpAsnInput() {
      return this._bgpAsn
    }

    // bgp_auth_key - computed: true, optional: true, required: false
    private _bgpAuthKey?: string | undefined; 
    public get bgpAuthKey() {
      return this.getStringAttribute('bgp_auth_key');
    }
    public set bgpAuthKey(value: string | undefined) {
      this._bgpAuthKey = value;
    }
    public resetBgpAuthKey() {
      this._bgpAuthKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bgpAuthKeyInput() {
      return this._bgpAuthKey
    }

    // connection_id - computed: false, optional: false, required: true
    private _connectionId?: string; 
    public get connectionId() {
      return this.getStringAttribute('connection_id');
    }
    public set connectionId(value: string) {
      this._connectionId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionIdInput() {
      return this._connectionId
    }

    // customer_address - computed: true, optional: true, required: false
    private _customerAddress?: string | undefined; 
    public get customerAddress() {
      return this.getStringAttribute('customer_address');
    }
    public set customerAddress(value: string | undefined) {
      this._customerAddress = value;
    }
    public resetCustomerAddress() {
      this._customerAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customerAddressInput() {
      return this._customerAddress
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // route_filter_prefixes - computed: false, optional: false, required: true
    private _routeFilterPrefixes?: string[]; 
    public get routeFilterPrefixes() {
      return this.getListAttribute('route_filter_prefixes');
    }
    public set routeFilterPrefixes(value: string[]) {
      this._routeFilterPrefixes = value;
    }
    // Temporarily expose input value. Use with caution.
    public get routeFilterPrefixesInput() {
      return this._routeFilterPrefixes
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // vlan - computed: false, optional: false, required: true
    private _vlan?: number; 
    public get vlan() {
      return this.getNumberAttribute('vlan');
    }
    public set vlan(value: number) {
      this._vlan = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vlanInput() {
      return this._vlan
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: DxPublicVirtualInterfaceTimeouts | undefined; 
    private __timeoutsOutput = new DxPublicVirtualInterfaceTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: DxPublicVirtualInterfaceTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        address_family: cdktf.stringToTerraform(this._addressFamily),
        amazon_address: cdktf.stringToTerraform(this._amazonAddress),
        bgp_asn: cdktf.numberToTerraform(this._bgpAsn),
        bgp_auth_key: cdktf.stringToTerraform(this._bgpAuthKey),
        connection_id: cdktf.stringToTerraform(this._connectionId),
        customer_address: cdktf.stringToTerraform(this._customerAddress),
        name: cdktf.stringToTerraform(this._name),
        route_filter_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(this._routeFilterPrefixes),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        vlan: cdktf.numberToTerraform(this._vlan),
        timeouts: dxPublicVirtualInterfaceTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface DxTransitVirtualInterfaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface.html#address_family DxTransitVirtualInterface#address_family}
    */
    readonly addressFamily: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface.html#amazon_address DxTransitVirtualInterface#amazon_address}
    */
    readonly amazonAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface.html#bgp_asn DxTransitVirtualInterface#bgp_asn}
    */
    readonly bgpAsn: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface.html#bgp_auth_key DxTransitVirtualInterface#bgp_auth_key}
    */
    readonly bgpAuthKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface.html#connection_id DxTransitVirtualInterface#connection_id}
    */
    readonly connectionId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface.html#customer_address DxTransitVirtualInterface#customer_address}
    */
    readonly customerAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface.html#dx_gateway_id DxTransitVirtualInterface#dx_gateway_id}
    */
    readonly dxGatewayId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface.html#mtu DxTransitVirtualInterface#mtu}
    */
    readonly mtu?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface.html#name DxTransitVirtualInterface#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface.html#tags DxTransitVirtualInterface#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface.html#tags_all DxTransitVirtualInterface#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface.html#vlan DxTransitVirtualInterface#vlan}
    */
    readonly vlan: number;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface.html#timeouts DxTransitVirtualInterface#timeouts}
    */
    readonly timeouts?: DxTransitVirtualInterfaceTimeouts;
  }
  export interface DxTransitVirtualInterfaceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface.html#create DxTransitVirtualInterface#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface.html#delete DxTransitVirtualInterface#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface.html#update DxTransitVirtualInterface#update}
    */
    readonly update?: string;
  }

  function dxTransitVirtualInterfaceTimeoutsToTerraform(struct?: DxTransitVirtualInterfaceTimeoutsOutputReference | DxTransitVirtualInterfaceTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class DxTransitVirtualInterfaceTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface.html aws_dx_transit_virtual_interface}
  */
  export class DxTransitVirtualInterface extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_dx_transit_virtual_interface";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface.html aws_dx_transit_virtual_interface} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxTransitVirtualInterfaceConfig
    */
    public constructor(scope: Construct, id: string, config: DxTransitVirtualInterfaceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_dx_transit_virtual_interface',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._addressFamily = config.addressFamily;
      this._amazonAddress = config.amazonAddress;
      this._bgpAsn = config.bgpAsn;
      this._bgpAuthKey = config.bgpAuthKey;
      this._connectionId = config.connectionId;
      this._customerAddress = config.customerAddress;
      this._dxGatewayId = config.dxGatewayId;
      this._mtu = config.mtu;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._vlan = config.vlan;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // address_family - computed: false, optional: false, required: true
    private _addressFamily?: string; 
    public get addressFamily() {
      return this.getStringAttribute('address_family');
    }
    public set addressFamily(value: string) {
      this._addressFamily = value;
    }
    // Temporarily expose input value. Use with caution.
    public get addressFamilyInput() {
      return this._addressFamily
    }

    // amazon_address - computed: true, optional: true, required: false
    private _amazonAddress?: string | undefined; 
    public get amazonAddress() {
      return this.getStringAttribute('amazon_address');
    }
    public set amazonAddress(value: string | undefined) {
      this._amazonAddress = value;
    }
    public resetAmazonAddress() {
      this._amazonAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amazonAddressInput() {
      return this._amazonAddress
    }

    // amazon_side_asn - computed: true, optional: false, required: false
    public get amazonSideAsn() {
      return this.getStringAttribute('amazon_side_asn');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // aws_device - computed: true, optional: false, required: false
    public get awsDevice() {
      return this.getStringAttribute('aws_device');
    }

    // bgp_asn - computed: false, optional: false, required: true
    private _bgpAsn?: number; 
    public get bgpAsn() {
      return this.getNumberAttribute('bgp_asn');
    }
    public set bgpAsn(value: number) {
      this._bgpAsn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bgpAsnInput() {
      return this._bgpAsn
    }

    // bgp_auth_key - computed: true, optional: true, required: false
    private _bgpAuthKey?: string | undefined; 
    public get bgpAuthKey() {
      return this.getStringAttribute('bgp_auth_key');
    }
    public set bgpAuthKey(value: string | undefined) {
      this._bgpAuthKey = value;
    }
    public resetBgpAuthKey() {
      this._bgpAuthKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bgpAuthKeyInput() {
      return this._bgpAuthKey
    }

    // connection_id - computed: false, optional: false, required: true
    private _connectionId?: string; 
    public get connectionId() {
      return this.getStringAttribute('connection_id');
    }
    public set connectionId(value: string) {
      this._connectionId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionIdInput() {
      return this._connectionId
    }

    // customer_address - computed: true, optional: true, required: false
    private _customerAddress?: string | undefined; 
    public get customerAddress() {
      return this.getStringAttribute('customer_address');
    }
    public set customerAddress(value: string | undefined) {
      this._customerAddress = value;
    }
    public resetCustomerAddress() {
      this._customerAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customerAddressInput() {
      return this._customerAddress
    }

    // dx_gateway_id - computed: false, optional: false, required: true
    private _dxGatewayId?: string; 
    public get dxGatewayId() {
      return this.getStringAttribute('dx_gateway_id');
    }
    public set dxGatewayId(value: string) {
      this._dxGatewayId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dxGatewayIdInput() {
      return this._dxGatewayId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // jumbo_frame_capable - computed: true, optional: false, required: false
    public get jumboFrameCapable() {
      return this.getBooleanAttribute('jumbo_frame_capable') as any;
    }

    // mtu - computed: false, optional: true, required: false
    private _mtu?: number | undefined; 
    public get mtu() {
      return this.getNumberAttribute('mtu');
    }
    public set mtu(value: number | undefined) {
      this._mtu = value;
    }
    public resetMtu() {
      this._mtu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mtuInput() {
      return this._mtu
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // vlan - computed: false, optional: false, required: true
    private _vlan?: number; 
    public get vlan() {
      return this.getNumberAttribute('vlan');
    }
    public set vlan(value: number) {
      this._vlan = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vlanInput() {
      return this._vlan
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: DxTransitVirtualInterfaceTimeouts | undefined; 
    private __timeoutsOutput = new DxTransitVirtualInterfaceTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: DxTransitVirtualInterfaceTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        address_family: cdktf.stringToTerraform(this._addressFamily),
        amazon_address: cdktf.stringToTerraform(this._amazonAddress),
        bgp_asn: cdktf.numberToTerraform(this._bgpAsn),
        bgp_auth_key: cdktf.stringToTerraform(this._bgpAuthKey),
        connection_id: cdktf.stringToTerraform(this._connectionId),
        customer_address: cdktf.stringToTerraform(this._customerAddress),
        dx_gateway_id: cdktf.stringToTerraform(this._dxGatewayId),
        mtu: cdktf.numberToTerraform(this._mtu),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        vlan: cdktf.numberToTerraform(this._vlan),
        timeouts: dxTransitVirtualInterfaceTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface DataAwsDxConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dx_connection.html#name DataAwsDxConnection#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dx_connection.html#tags DataAwsDxConnection#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/dx_connection.html aws_dx_connection}
  */
  export class DataAwsDxConnection extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_dx_connection";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/dx_connection.html aws_dx_connection} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDxConnectionConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsDxConnectionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_dx_connection',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // aws_device - computed: true, optional: false, required: false
    public get awsDevice() {
      return this.getStringAttribute('aws_device');
    }

    // bandwidth - computed: true, optional: false, required: false
    public get bandwidth() {
      return this.getStringAttribute('bandwidth');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // location - computed: true, optional: false, required: false
    public get location() {
      return this.getStringAttribute('location');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // owner_account_id - computed: true, optional: false, required: false
    public get ownerAccountId() {
      return this.getStringAttribute('owner_account_id');
    }

    // provider_name - computed: true, optional: false, required: false
    public get providerName() {
      return this.getStringAttribute('provider_name');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsDxGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dx_gateway.html#name DataAwsDxGateway#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/dx_gateway.html aws_dx_gateway}
  */
  export class DataAwsDxGateway extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_dx_gateway";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/dx_gateway.html aws_dx_gateway} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDxGatewayConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsDxGatewayConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_dx_gateway',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // amazon_side_asn - computed: true, optional: false, required: false
    public get amazonSideAsn() {
      return this.getStringAttribute('amazon_side_asn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // owner_account_id - computed: true, optional: false, required: false
    public get ownerAccountId() {
      return this.getStringAttribute('owner_account_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface DataAwsDxLocationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dx_location.html#location_code DataAwsDxLocation#location_code}
    */
    readonly locationCode: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/dx_location.html aws_dx_location}
  */
  export class DataAwsDxLocation extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_dx_location";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/dx_location.html aws_dx_location} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDxLocationConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsDxLocationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_dx_location',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._locationCode = config.locationCode;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // available_port_speeds - computed: true, optional: false, required: false
    public get availablePortSpeeds() {
      return this.getListAttribute('available_port_speeds');
    }

    // available_providers - computed: true, optional: false, required: false
    public get availableProviders() {
      return this.getListAttribute('available_providers');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // location_code - computed: false, optional: false, required: true
    private _locationCode?: string; 
    public get locationCode() {
      return this.getStringAttribute('location_code');
    }
    public set locationCode(value: string) {
      this._locationCode = value;
    }
    // Temporarily expose input value. Use with caution.
    public get locationCodeInput() {
      return this._locationCode
    }

    // location_name - computed: true, optional: false, required: false
    public get locationName() {
      return this.getStringAttribute('location_name');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        location_code: cdktf.stringToTerraform(this._locationCode),
      };
    }
  }
  export interface DataAwsDxLocationsConfig extends cdktf.TerraformMetaArguments {
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/dx_locations.html aws_dx_locations}
  */
  export class DataAwsDxLocations extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_dx_locations";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/dx_locations.html aws_dx_locations} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDxLocationsConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsDxLocationsConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_dx_locations',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // location_codes - computed: true, optional: false, required: false
    public get locationCodes() {
      return this.getListAttribute('location_codes');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
      };
    }
  }
}
