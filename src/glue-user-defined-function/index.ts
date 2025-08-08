/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/glue_user_defined_function
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlueUserDefinedFunctionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/glue_user_defined_function#catalog_id GlueUserDefinedFunction#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/glue_user_defined_function#class_name GlueUserDefinedFunction#class_name}
  */
  readonly className: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/glue_user_defined_function#database_name GlueUserDefinedFunction#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/glue_user_defined_function#id GlueUserDefinedFunction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/glue_user_defined_function#name GlueUserDefinedFunction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/glue_user_defined_function#owner_name GlueUserDefinedFunction#owner_name}
  */
  readonly ownerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/glue_user_defined_function#owner_type GlueUserDefinedFunction#owner_type}
  */
  readonly ownerType: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/glue_user_defined_function#region GlueUserDefinedFunction#region}
  */
  readonly region?: string;
  /**
  * resource_uris block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/glue_user_defined_function#resource_uris GlueUserDefinedFunction#resource_uris}
  */
  readonly resourceUris?: GlueUserDefinedFunctionResourceUris[] | cdktf.IResolvable;
}
export interface GlueUserDefinedFunctionResourceUris {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/glue_user_defined_function#resource_type GlueUserDefinedFunction#resource_type}
  */
  readonly resourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/glue_user_defined_function#uri GlueUserDefinedFunction#uri}
  */
  readonly uri: string;
}

export function glueUserDefinedFunctionResourceUrisToTerraform(struct?: GlueUserDefinedFunctionResourceUris | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function glueUserDefinedFunctionResourceUrisToHclTerraform(struct?: GlueUserDefinedFunctionResourceUris | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueUserDefinedFunctionResourceUrisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GlueUserDefinedFunctionResourceUris | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueUserDefinedFunctionResourceUris | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceType = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceType = value.resourceType;
      this._uri = value.uri;
    }
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}

export class GlueUserDefinedFunctionResourceUrisList extends cdktf.ComplexList {
  public internalValue? : GlueUserDefinedFunctionResourceUris[] | cdktf.IResolvable

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
  public get(index: number): GlueUserDefinedFunctionResourceUrisOutputReference {
    return new GlueUserDefinedFunctionResourceUrisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/glue_user_defined_function aws_glue_user_defined_function}
*/
export class GlueUserDefinedFunction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_glue_user_defined_function";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlueUserDefinedFunction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlueUserDefinedFunction to import
  * @param importFromId The id of the existing GlueUserDefinedFunction that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/glue_user_defined_function#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlueUserDefinedFunction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_glue_user_defined_function", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/glue_user_defined_function aws_glue_user_defined_function} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlueUserDefinedFunctionConfig
  */
  public constructor(scope: Construct, id: string, config: GlueUserDefinedFunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_user_defined_function',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.8.0',
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
    this._catalogId = config.catalogId;
    this._className = config.className;
    this._databaseName = config.databaseName;
    this._id = config.id;
    this._name = config.name;
    this._ownerName = config.ownerName;
    this._ownerType = config.ownerType;
    this._region = config.region;
    this._resourceUris.internalValue = config.resourceUris;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // catalog_id - computed: false, optional: true, required: false
  private _catalogId?: string; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  public resetCatalogId() {
    this._catalogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId;
  }

  // class_name - computed: false, optional: false, required: true
  private _className?: string; 
  public get className() {
    return this.getStringAttribute('class_name');
  }
  public set className(value: string) {
    this._className = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classNameInput() {
    return this._className;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
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

  // owner_name - computed: false, optional: false, required: true
  private _ownerName?: string; 
  public get ownerName() {
    return this.getStringAttribute('owner_name');
  }
  public set ownerName(value: string) {
    this._ownerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerNameInput() {
    return this._ownerName;
  }

  // owner_type - computed: false, optional: false, required: true
  private _ownerType?: string; 
  public get ownerType() {
    return this.getStringAttribute('owner_type');
  }
  public set ownerType(value: string) {
    this._ownerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerTypeInput() {
    return this._ownerType;
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

  // resource_uris - computed: false, optional: true, required: false
  private _resourceUris = new GlueUserDefinedFunctionResourceUrisList(this, "resource_uris", true);
  public get resourceUris() {
    return this._resourceUris;
  }
  public putResourceUris(value: GlueUserDefinedFunctionResourceUris[] | cdktf.IResolvable) {
    this._resourceUris.internalValue = value;
  }
  public resetResourceUris() {
    this._resourceUris.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceUrisInput() {
    return this._resourceUris.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: cdktf.stringToTerraform(this._catalogId),
      class_name: cdktf.stringToTerraform(this._className),
      database_name: cdktf.stringToTerraform(this._databaseName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      owner_name: cdktf.stringToTerraform(this._ownerName),
      owner_type: cdktf.stringToTerraform(this._ownerType),
      region: cdktf.stringToTerraform(this._region),
      resource_uris: cdktf.listMapper(glueUserDefinedFunctionResourceUrisToTerraform, true)(this._resourceUris.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog_id: {
        value: cdktf.stringToHclTerraform(this._catalogId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      class_name: {
        value: cdktf.stringToHclTerraform(this._className),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_name: {
        value: cdktf.stringToHclTerraform(this._ownerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_type: {
        value: cdktf.stringToHclTerraform(this._ownerType),
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
      resource_uris: {
        value: cdktf.listMapperHcl(glueUserDefinedFunctionResourceUrisToHclTerraform, true)(this._resourceUris.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GlueUserDefinedFunctionResourceUrisList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
