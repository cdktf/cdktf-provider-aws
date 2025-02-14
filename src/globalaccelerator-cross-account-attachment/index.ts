/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/globalaccelerator_cross_account_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlobalacceleratorCrossAccountAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/globalaccelerator_cross_account_attachment#name GlobalacceleratorCrossAccountAttachment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/globalaccelerator_cross_account_attachment#principals GlobalacceleratorCrossAccountAttachment#principals}
  */
  readonly principals?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/globalaccelerator_cross_account_attachment#tags GlobalacceleratorCrossAccountAttachment#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/globalaccelerator_cross_account_attachment#resource GlobalacceleratorCrossAccountAttachment#resource}
  */
  readonly resource?: GlobalacceleratorCrossAccountAttachmentResource[] | cdktf.IResolvable;
}
export interface GlobalacceleratorCrossAccountAttachmentResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/globalaccelerator_cross_account_attachment#cidr_block GlobalacceleratorCrossAccountAttachment#cidr_block}
  */
  readonly cidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/globalaccelerator_cross_account_attachment#endpoint_id GlobalacceleratorCrossAccountAttachment#endpoint_id}
  */
  readonly endpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/globalaccelerator_cross_account_attachment#region GlobalacceleratorCrossAccountAttachment#region}
  */
  readonly region?: string;
}

export function globalacceleratorCrossAccountAttachmentResourceToTerraform(struct?: GlobalacceleratorCrossAccountAttachmentResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_block: cdktf.stringToTerraform(struct!.cidrBlock),
    endpoint_id: cdktf.stringToTerraform(struct!.endpointId),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function globalacceleratorCrossAccountAttachmentResourceToHclTerraform(struct?: GlobalacceleratorCrossAccountAttachmentResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.cidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_id: {
      value: cdktf.stringToHclTerraform(struct!.endpointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalacceleratorCrossAccountAttachmentResourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GlobalacceleratorCrossAccountAttachmentResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlock = this._cidrBlock;
    }
    if (this._endpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointId = this._endpointId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalacceleratorCrossAccountAttachmentResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrBlock = undefined;
      this._endpointId = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrBlock = value.cidrBlock;
      this._endpointId = value.endpointId;
      this._region = value.region;
    }
  }

  // cidr_block - computed: false, optional: true, required: false
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  public resetCidrBlock() {
    this._cidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
  }

  // endpoint_id - computed: false, optional: true, required: false
  private _endpointId?: string; 
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
  }
  public set endpointId(value: string) {
    this._endpointId = value;
  }
  public resetEndpointId() {
    this._endpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIdInput() {
    return this._endpointId;
  }

  // region - computed: false, optional: true, required: false
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
}

export class GlobalacceleratorCrossAccountAttachmentResourceList extends cdktf.ComplexList {
  public internalValue? : GlobalacceleratorCrossAccountAttachmentResource[] | cdktf.IResolvable

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
  public get(index: number): GlobalacceleratorCrossAccountAttachmentResourceOutputReference {
    return new GlobalacceleratorCrossAccountAttachmentResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/globalaccelerator_cross_account_attachment aws_globalaccelerator_cross_account_attachment}
*/
export class GlobalacceleratorCrossAccountAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_globalaccelerator_cross_account_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlobalacceleratorCrossAccountAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlobalacceleratorCrossAccountAttachment to import
  * @param importFromId The id of the existing GlobalacceleratorCrossAccountAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/globalaccelerator_cross_account_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlobalacceleratorCrossAccountAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_globalaccelerator_cross_account_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/globalaccelerator_cross_account_attachment aws_globalaccelerator_cross_account_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlobalacceleratorCrossAccountAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: GlobalacceleratorCrossAccountAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_globalaccelerator_cross_account_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.87.0',
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
    this._name = config.name;
    this._principals = config.principals;
    this._tags = config.tags;
    this._resource.internalValue = config.resource;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
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
    return this._name;
  }

  // principals - computed: false, optional: true, required: false
  private _principals?: string[]; 
  public get principals() {
    return cdktf.Fn.tolist(this.getListAttribute('principals'));
  }
  public set principals(value: string[]) {
    this._principals = value;
  }
  public resetPrincipals() {
    this._principals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalsInput() {
    return this._principals;
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

  // resource - computed: false, optional: true, required: false
  private _resource = new GlobalacceleratorCrossAccountAttachmentResourceList(this, "resource", true);
  public get resource() {
    return this._resource;
  }
  public putResource(value: GlobalacceleratorCrossAccountAttachmentResource[] | cdktf.IResolvable) {
    this._resource.internalValue = value;
  }
  public resetResource() {
    this._resource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      principals: cdktf.listMapper(cdktf.stringToTerraform, false)(this._principals),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      resource: cdktf.listMapper(globalacceleratorCrossAccountAttachmentResourceToTerraform, true)(this._resource.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principals: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._principals),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      resource: {
        value: cdktf.listMapperHcl(globalacceleratorCrossAccountAttachmentResourceToHclTerraform, true)(this._resource.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GlobalacceleratorCrossAccountAttachmentResourceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
