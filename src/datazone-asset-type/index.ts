/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/datazone_asset_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatazoneAssetTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/datazone_asset_type#description DatazoneAssetType#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/datazone_asset_type#domain_identifier DatazoneAssetType#domain_identifier}
  */
  readonly domainIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/datazone_asset_type#name DatazoneAssetType#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/datazone_asset_type#owning_project_identifier DatazoneAssetType#owning_project_identifier}
  */
  readonly owningProjectIdentifier: string;
  /**
  * forms_input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/datazone_asset_type#forms_input DatazoneAssetType#forms_input}
  */
  readonly formsInput?: DatazoneAssetTypeFormsInput[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/datazone_asset_type#timeouts DatazoneAssetType#timeouts}
  */
  readonly timeouts?: DatazoneAssetTypeTimeouts;
}
export interface DatazoneAssetTypeFormsInput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/datazone_asset_type#map_block_key DatazoneAssetType#map_block_key}
  */
  readonly mapBlockKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/datazone_asset_type#required DatazoneAssetType#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/datazone_asset_type#type_identifier DatazoneAssetType#type_identifier}
  */
  readonly typeIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/datazone_asset_type#type_revision DatazoneAssetType#type_revision}
  */
  readonly typeRevision: string;
}

export function datazoneAssetTypeFormsInputToTerraform(struct?: DatazoneAssetTypeFormsInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    map_block_key: cdktf.stringToTerraform(struct!.mapBlockKey),
    required: cdktf.booleanToTerraform(struct!.required),
    type_identifier: cdktf.stringToTerraform(struct!.typeIdentifier),
    type_revision: cdktf.stringToTerraform(struct!.typeRevision),
  }
}


export function datazoneAssetTypeFormsInputToHclTerraform(struct?: DatazoneAssetTypeFormsInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    map_block_key: {
      value: cdktf.stringToHclTerraform(struct!.mapBlockKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type_identifier: {
      value: cdktf.stringToHclTerraform(struct!.typeIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_revision: {
      value: cdktf.stringToHclTerraform(struct!.typeRevision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazoneAssetTypeFormsInputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatazoneAssetTypeFormsInput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mapBlockKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapBlockKey = this._mapBlockKey;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._typeIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeIdentifier = this._typeIdentifier;
    }
    if (this._typeRevision !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeRevision = this._typeRevision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazoneAssetTypeFormsInput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mapBlockKey = undefined;
      this._required = undefined;
      this._typeIdentifier = undefined;
      this._typeRevision = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mapBlockKey = value.mapBlockKey;
      this._required = value.required;
      this._typeIdentifier = value.typeIdentifier;
      this._typeRevision = value.typeRevision;
    }
  }

  // map_block_key - computed: false, optional: false, required: true
  private _mapBlockKey?: string; 
  public get mapBlockKey() {
    return this.getStringAttribute('map_block_key');
  }
  public set mapBlockKey(value: string) {
    this._mapBlockKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mapBlockKeyInput() {
    return this._mapBlockKey;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // type_identifier - computed: false, optional: false, required: true
  private _typeIdentifier?: string; 
  public get typeIdentifier() {
    return this.getStringAttribute('type_identifier');
  }
  public set typeIdentifier(value: string) {
    this._typeIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeIdentifierInput() {
    return this._typeIdentifier;
  }

  // type_revision - computed: false, optional: false, required: true
  private _typeRevision?: string; 
  public get typeRevision() {
    return this.getStringAttribute('type_revision');
  }
  public set typeRevision(value: string) {
    this._typeRevision = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeRevisionInput() {
    return this._typeRevision;
  }
}

export class DatazoneAssetTypeFormsInputList extends cdktf.ComplexList {
  public internalValue? : DatazoneAssetTypeFormsInput[] | cdktf.IResolvable

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
  public get(index: number): DatazoneAssetTypeFormsInputOutputReference {
    return new DatazoneAssetTypeFormsInputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatazoneAssetTypeTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/datazone_asset_type#create DatazoneAssetType#create}
  */
  readonly create?: string;
}

export function datazoneAssetTypeTimeoutsToTerraform(struct?: DatazoneAssetTypeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function datazoneAssetTypeTimeoutsToHclTerraform(struct?: DatazoneAssetTypeTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazoneAssetTypeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatazoneAssetTypeTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazoneAssetTypeTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/datazone_asset_type aws_datazone_asset_type}
*/
export class DatazoneAssetType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_datazone_asset_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatazoneAssetType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatazoneAssetType to import
  * @param importFromId The id of the existing DatazoneAssetType that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/datazone_asset_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatazoneAssetType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_datazone_asset_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/datazone_asset_type aws_datazone_asset_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatazoneAssetTypeConfig
  */
  public constructor(scope: Construct, id: string, config: DatazoneAssetTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_datazone_asset_type',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.92.0',
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
    this._description = config.description;
    this._domainIdentifier = config.domainIdentifier;
    this._name = config.name;
    this._owningProjectIdentifier = config.owningProjectIdentifier;
    this._formsInput.internalValue = config.formsInput;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // domain_identifier - computed: false, optional: false, required: true
  private _domainIdentifier?: string; 
  public get domainIdentifier() {
    return this.getStringAttribute('domain_identifier');
  }
  public set domainIdentifier(value: string) {
    this._domainIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdentifierInput() {
    return this._domainIdentifier;
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

  // owning_project_identifier - computed: false, optional: false, required: true
  private _owningProjectIdentifier?: string; 
  public get owningProjectIdentifier() {
    return this.getStringAttribute('owning_project_identifier');
  }
  public set owningProjectIdentifier(value: string) {
    this._owningProjectIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get owningProjectIdentifierInput() {
    return this._owningProjectIdentifier;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getStringAttribute('revision');
  }

  // forms_input - computed: false, optional: true, required: false
  private _formsInput = new DatazoneAssetTypeFormsInputList(this, "forms_input", true);
  public get formsInput() {
    return this._formsInput;
  }
  public putFormsInput(value: DatazoneAssetTypeFormsInput[] | cdktf.IResolvable) {
    this._formsInput.internalValue = value;
  }
  public resetFormsInput() {
    this._formsInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formsInputInput() {
    return this._formsInput.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatazoneAssetTypeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatazoneAssetTypeTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      domain_identifier: cdktf.stringToTerraform(this._domainIdentifier),
      name: cdktf.stringToTerraform(this._name),
      owning_project_identifier: cdktf.stringToTerraform(this._owningProjectIdentifier),
      forms_input: cdktf.listMapper(datazoneAssetTypeFormsInputToTerraform, true)(this._formsInput.internalValue),
      timeouts: datazoneAssetTypeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_identifier: {
        value: cdktf.stringToHclTerraform(this._domainIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owning_project_identifier: {
        value: cdktf.stringToHclTerraform(this._owningProjectIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forms_input: {
        value: cdktf.listMapperHcl(datazoneAssetTypeFormsInputToHclTerraform, true)(this._formsInput.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DatazoneAssetTypeFormsInputList",
      },
      timeouts: {
        value: datazoneAssetTypeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatazoneAssetTypeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
