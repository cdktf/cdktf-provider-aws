// https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface_accepter.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

function dxHostedTransitVirtualInterfaceAccepterTimeoutsToTerraform(struct?: DxHostedTransitVirtualInterfaceAccepterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
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
  private _dxGatewayId: string;
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _virtualInterfaceId: string;
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
  private _timeouts?: DxHostedTransitVirtualInterfaceAccepterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DxHostedTransitVirtualInterfaceAccepterTimeouts ) {
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
