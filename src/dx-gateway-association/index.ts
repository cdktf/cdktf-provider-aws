/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dx_gateway_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DxGatewayAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dx_gateway_association#allowed_prefixes DxGatewayAssociation#allowed_prefixes}
  */
  readonly allowedPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dx_gateway_association#associated_gateway_id DxGatewayAssociation#associated_gateway_id}
  */
  readonly associatedGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dx_gateway_association#associated_gateway_owner_account_id DxGatewayAssociation#associated_gateway_owner_account_id}
  */
  readonly associatedGatewayOwnerAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dx_gateway_association#dx_gateway_id DxGatewayAssociation#dx_gateway_id}
  */
  readonly dxGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dx_gateway_association#id DxGatewayAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dx_gateway_association#proposal_id DxGatewayAssociation#proposal_id}
  */
  readonly proposalId?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dx_gateway_association#region DxGatewayAssociation#region}
  */
  readonly region?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dx_gateway_association#timeouts DxGatewayAssociation#timeouts}
  */
  readonly timeouts?: DxGatewayAssociationTimeouts;
}
export interface DxGatewayAssociationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dx_gateway_association#create DxGatewayAssociation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dx_gateway_association#delete DxGatewayAssociation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dx_gateway_association#update DxGatewayAssociation#update}
  */
  readonly update?: string;
}

export function dxGatewayAssociationTimeoutsToTerraform(struct?: DxGatewayAssociationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dxGatewayAssociationTimeoutsToHclTerraform(struct?: DxGatewayAssociationTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DxGatewayAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DxGatewayAssociationTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DxGatewayAssociationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dx_gateway_association aws_dx_gateway_association}
*/
export class DxGatewayAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_dx_gateway_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DxGatewayAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DxGatewayAssociation to import
  * @param importFromId The id of the existing DxGatewayAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dx_gateway_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DxGatewayAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_dx_gateway_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dx_gateway_association aws_dx_gateway_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DxGatewayAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: DxGatewayAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dx_gateway_association',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
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
    this._allowedPrefixes = config.allowedPrefixes;
    this._associatedGatewayId = config.associatedGatewayId;
    this._associatedGatewayOwnerAccountId = config.associatedGatewayOwnerAccountId;
    this._dxGatewayId = config.dxGatewayId;
    this._id = config.id;
    this._proposalId = config.proposalId;
    this._region = config.region;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_prefixes - computed: true, optional: true, required: false
  private _allowedPrefixes?: string[]; 
  public get allowedPrefixes() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_prefixes'));
  }
  public set allowedPrefixes(value: string[]) {
    this._allowedPrefixes = value;
  }
  public resetAllowedPrefixes() {
    this._allowedPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedPrefixesInput() {
    return this._allowedPrefixes;
  }

  // associated_gateway_id - computed: true, optional: true, required: false
  private _associatedGatewayId?: string; 
  public get associatedGatewayId() {
    return this.getStringAttribute('associated_gateway_id');
  }
  public set associatedGatewayId(value: string) {
    this._associatedGatewayId = value;
  }
  public resetAssociatedGatewayId() {
    this._associatedGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedGatewayIdInput() {
    return this._associatedGatewayId;
  }

  // associated_gateway_owner_account_id - computed: true, optional: true, required: false
  private _associatedGatewayOwnerAccountId?: string; 
  public get associatedGatewayOwnerAccountId() {
    return this.getStringAttribute('associated_gateway_owner_account_id');
  }
  public set associatedGatewayOwnerAccountId(value: string) {
    this._associatedGatewayOwnerAccountId = value;
  }
  public resetAssociatedGatewayOwnerAccountId() {
    this._associatedGatewayOwnerAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedGatewayOwnerAccountIdInput() {
    return this._associatedGatewayOwnerAccountId;
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
    return this._dxGatewayId;
  }

  // dx_gateway_owner_account_id - computed: true, optional: false, required: false
  public get dxGatewayOwnerAccountId() {
    return this.getStringAttribute('dx_gateway_owner_account_id');
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

  // proposal_id - computed: false, optional: true, required: false
  private _proposalId?: string; 
  public get proposalId() {
    return this.getStringAttribute('proposal_id');
  }
  public set proposalId(value: string) {
    this._proposalId = value;
  }
  public resetProposalId() {
    this._proposalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proposalIdInput() {
    return this._proposalId;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DxGatewayAssociationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DxGatewayAssociationTimeouts) {
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
      allowed_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedPrefixes),
      associated_gateway_id: cdktf.stringToTerraform(this._associatedGatewayId),
      associated_gateway_owner_account_id: cdktf.stringToTerraform(this._associatedGatewayOwnerAccountId),
      dx_gateway_id: cdktf.stringToTerraform(this._dxGatewayId),
      id: cdktf.stringToTerraform(this._id),
      proposal_id: cdktf.stringToTerraform(this._proposalId),
      region: cdktf.stringToTerraform(this._region),
      timeouts: dxGatewayAssociationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_prefixes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedPrefixes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      associated_gateway_id: {
        value: cdktf.stringToHclTerraform(this._associatedGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      associated_gateway_owner_account_id: {
        value: cdktf.stringToHclTerraform(this._associatedGatewayOwnerAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dx_gateway_id: {
        value: cdktf.stringToHclTerraform(this._dxGatewayId),
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
      proposal_id: {
        value: cdktf.stringToHclTerraform(this._proposalId),
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
      timeouts: {
        value: dxGatewayAssociationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DxGatewayAssociationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
