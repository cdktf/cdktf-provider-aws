/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LakeformationOptInConfig extends cdktf.TerraformMetaArguments {
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#region LakeformationOptIn#region}
  */
  readonly region?: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#condition LakeformationOptIn#condition}
  */
  readonly condition?: LakeformationOptInCondition[] | cdktf.IResolvable;
  /**
  * principal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#principal LakeformationOptIn#principal}
  */
  readonly principal?: LakeformationOptInPrincipal[] | cdktf.IResolvable;
  /**
  * resource_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#resource_data LakeformationOptIn#resource_data}
  */
  readonly resourceData?: LakeformationOptInResourceData[] | cdktf.IResolvable;
}
export interface LakeformationOptInCondition {
}

export function lakeformationOptInConditionToTerraform(struct?: LakeformationOptInCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function lakeformationOptInConditionToHclTerraform(struct?: LakeformationOptInCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LakeformationOptInConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LakeformationOptInCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakeformationOptInCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }
}

export class LakeformationOptInConditionList extends cdktf.ComplexList {
  public internalValue? : LakeformationOptInCondition[] | cdktf.IResolvable

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
  public get(index: number): LakeformationOptInConditionOutputReference {
    return new LakeformationOptInConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LakeformationOptInPrincipal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#data_lake_principal_identifier LakeformationOptIn#data_lake_principal_identifier}
  */
  readonly dataLakePrincipalIdentifier: string;
}

export function lakeformationOptInPrincipalToTerraform(struct?: LakeformationOptInPrincipal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_lake_principal_identifier: cdktf.stringToTerraform(struct!.dataLakePrincipalIdentifier),
  }
}


export function lakeformationOptInPrincipalToHclTerraform(struct?: LakeformationOptInPrincipal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_lake_principal_identifier: {
      value: cdktf.stringToHclTerraform(struct!.dataLakePrincipalIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LakeformationOptInPrincipalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LakeformationOptInPrincipal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataLakePrincipalIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLakePrincipalIdentifier = this._dataLakePrincipalIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakeformationOptInPrincipal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataLakePrincipalIdentifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataLakePrincipalIdentifier = value.dataLakePrincipalIdentifier;
    }
  }

  // data_lake_principal_identifier - computed: false, optional: false, required: true
  private _dataLakePrincipalIdentifier?: string; 
  public get dataLakePrincipalIdentifier() {
    return this.getStringAttribute('data_lake_principal_identifier');
  }
  public set dataLakePrincipalIdentifier(value: string) {
    this._dataLakePrincipalIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLakePrincipalIdentifierInput() {
    return this._dataLakePrincipalIdentifier;
  }
}

export class LakeformationOptInPrincipalList extends cdktf.ComplexList {
  public internalValue? : LakeformationOptInPrincipal[] | cdktf.IResolvable

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
  public get(index: number): LakeformationOptInPrincipalOutputReference {
    return new LakeformationOptInPrincipalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LakeformationOptInResourceDataCatalog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#id LakeformationOptIn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function lakeformationOptInResourceDataCatalogToTerraform(struct?: LakeformationOptInResourceDataCatalog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function lakeformationOptInResourceDataCatalogToHclTerraform(struct?: LakeformationOptInResourceDataCatalog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LakeformationOptInResourceDataCatalogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LakeformationOptInResourceDataCatalog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakeformationOptInResourceDataCatalog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
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
}

export class LakeformationOptInResourceDataCatalogList extends cdktf.ComplexList {
  public internalValue? : LakeformationOptInResourceDataCatalog[] | cdktf.IResolvable

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
  public get(index: number): LakeformationOptInResourceDataCatalogOutputReference {
    return new LakeformationOptInResourceDataCatalogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LakeformationOptInResourceDataDataCellsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#database_name LakeformationOptIn#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#name LakeformationOptIn#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#table_catalog_id LakeformationOptIn#table_catalog_id}
  */
  readonly tableCatalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#table_name LakeformationOptIn#table_name}
  */
  readonly tableName?: string;
}

export function lakeformationOptInResourceDataDataCellsFilterToTerraform(struct?: LakeformationOptInResourceDataDataCellsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    name: cdktf.stringToTerraform(struct!.name),
    table_catalog_id: cdktf.stringToTerraform(struct!.tableCatalogId),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}


export function lakeformationOptInResourceDataDataCellsFilterToHclTerraform(struct?: LakeformationOptInResourceDataDataCellsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_catalog_id: {
      value: cdktf.stringToHclTerraform(struct!.tableCatalogId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktf.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LakeformationOptInResourceDataDataCellsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LakeformationOptInResourceDataDataCellsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tableCatalogId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableCatalogId = this._tableCatalogId;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakeformationOptInResourceDataDataCellsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseName = undefined;
      this._name = undefined;
      this._tableCatalogId = undefined;
      this._tableName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseName = value.databaseName;
      this._name = value.name;
      this._tableCatalogId = value.tableCatalogId;
      this._tableName = value.tableName;
    }
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // table_catalog_id - computed: false, optional: true, required: false
  private _tableCatalogId?: string; 
  public get tableCatalogId() {
    return this.getStringAttribute('table_catalog_id');
  }
  public set tableCatalogId(value: string) {
    this._tableCatalogId = value;
  }
  public resetTableCatalogId() {
    this._tableCatalogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableCatalogIdInput() {
    return this._tableCatalogId;
  }

  // table_name - computed: false, optional: true, required: false
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  public resetTableName() {
    this._tableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }
}

export class LakeformationOptInResourceDataDataCellsFilterList extends cdktf.ComplexList {
  public internalValue? : LakeformationOptInResourceDataDataCellsFilter[] | cdktf.IResolvable

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
  public get(index: number): LakeformationOptInResourceDataDataCellsFilterOutputReference {
    return new LakeformationOptInResourceDataDataCellsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LakeformationOptInResourceDataDataLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#resource_arn LakeformationOptIn#resource_arn}
  */
  readonly resourceArn: string;
}

export function lakeformationOptInResourceDataDataLocationToTerraform(struct?: LakeformationOptInResourceDataDataLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
  }
}


export function lakeformationOptInResourceDataDataLocationToHclTerraform(struct?: LakeformationOptInResourceDataDataLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog_id: {
      value: cdktf.stringToHclTerraform(struct!.catalogId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_arn: {
      value: cdktf.stringToHclTerraform(struct!.resourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LakeformationOptInResourceDataDataLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LakeformationOptInResourceDataDataLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogId !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogId = this._catalogId;
    }
    if (this._resourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArn = this._resourceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakeformationOptInResourceDataDataLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalogId = undefined;
      this._resourceArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalogId = value.catalogId;
      this._resourceArn = value.resourceArn;
    }
  }

  // catalog_id - computed: true, optional: true, required: false
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

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
  }
}

export class LakeformationOptInResourceDataDataLocationList extends cdktf.ComplexList {
  public internalValue? : LakeformationOptInResourceDataDataLocation[] | cdktf.IResolvable

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
  public get(index: number): LakeformationOptInResourceDataDataLocationOutputReference {
    return new LakeformationOptInResourceDataDataLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LakeformationOptInResourceDataDatabase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#name LakeformationOptIn#name}
  */
  readonly name: string;
}

export function lakeformationOptInResourceDataDatabaseToTerraform(struct?: LakeformationOptInResourceDataDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function lakeformationOptInResourceDataDatabaseToHclTerraform(struct?: LakeformationOptInResourceDataDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog_id: {
      value: cdktf.stringToHclTerraform(struct!.catalogId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LakeformationOptInResourceDataDatabaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LakeformationOptInResourceDataDatabase | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogId !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogId = this._catalogId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakeformationOptInResourceDataDatabase | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalogId = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalogId = value.catalogId;
      this._name = value.name;
    }
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
}

export class LakeformationOptInResourceDataDatabaseList extends cdktf.ComplexList {
  public internalValue? : LakeformationOptInResourceDataDatabase[] | cdktf.IResolvable

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
  public get(index: number): LakeformationOptInResourceDataDatabaseOutputReference {
    return new LakeformationOptInResourceDataDatabaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LakeformationOptInResourceDataLfTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#key LakeformationOptIn#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#value LakeformationOptIn#value}
  */
  readonly value: string;
}

export function lakeformationOptInResourceDataLfTagToTerraform(struct?: LakeformationOptInResourceDataLfTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lakeformationOptInResourceDataLfTagToHclTerraform(struct?: LakeformationOptInResourceDataLfTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog_id: {
      value: cdktf.stringToHclTerraform(struct!.catalogId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LakeformationOptInResourceDataLfTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LakeformationOptInResourceDataLfTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogId !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogId = this._catalogId;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakeformationOptInResourceDataLfTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalogId = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalogId = value.catalogId;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // catalog_id - computed: true, optional: true, required: false
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class LakeformationOptInResourceDataLfTagList extends cdktf.ComplexList {
  public internalValue? : LakeformationOptInResourceDataLfTag[] | cdktf.IResolvable

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
  public get(index: number): LakeformationOptInResourceDataLfTagOutputReference {
    return new LakeformationOptInResourceDataLfTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LakeformationOptInResourceDataLfTagExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#name LakeformationOptIn#name}
  */
  readonly name: string;
}

export function lakeformationOptInResourceDataLfTagExpressionToTerraform(struct?: LakeformationOptInResourceDataLfTagExpression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function lakeformationOptInResourceDataLfTagExpressionToHclTerraform(struct?: LakeformationOptInResourceDataLfTagExpression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog_id: {
      value: cdktf.stringToHclTerraform(struct!.catalogId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LakeformationOptInResourceDataLfTagExpressionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LakeformationOptInResourceDataLfTagExpression | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogId !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogId = this._catalogId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakeformationOptInResourceDataLfTagExpression | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalogId = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalogId = value.catalogId;
      this._name = value.name;
    }
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
}

export class LakeformationOptInResourceDataLfTagExpressionList extends cdktf.ComplexList {
  public internalValue? : LakeformationOptInResourceDataLfTagExpression[] | cdktf.IResolvable

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
  public get(index: number): LakeformationOptInResourceDataLfTagExpressionOutputReference {
    return new LakeformationOptInResourceDataLfTagExpressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LakeformationOptInResourceDataLfTagPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#expression LakeformationOptIn#expression}
  */
  readonly expression?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#expression_name LakeformationOptIn#expression_name}
  */
  readonly expressionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#resource_type LakeformationOptIn#resource_type}
  */
  readonly resourceType: string;
}

export function lakeformationOptInResourceDataLfTagPolicyToTerraform(struct?: LakeformationOptInResourceDataLfTagPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    expression: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expression),
    expression_name: cdktf.stringToTerraform(struct!.expressionName),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}


export function lakeformationOptInResourceDataLfTagPolicyToHclTerraform(struct?: LakeformationOptInResourceDataLfTagPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog_id: {
      value: cdktf.stringToHclTerraform(struct!.catalogId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.expression),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    expression_name: {
      value: cdktf.stringToHclTerraform(struct!.expressionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LakeformationOptInResourceDataLfTagPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LakeformationOptInResourceDataLfTagPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogId !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogId = this._catalogId;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._expressionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressionName = this._expressionName;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakeformationOptInResourceDataLfTagPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalogId = undefined;
      this._expression = undefined;
      this._expressionName = undefined;
      this._resourceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalogId = value.catalogId;
      this._expression = value.expression;
      this._expressionName = value.expressionName;
      this._resourceType = value.resourceType;
    }
  }

  // catalog_id - computed: true, optional: true, required: false
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

  // expression - computed: false, optional: true, required: false
  private _expression?: string[]; 
  public get expression() {
    return this.getListAttribute('expression');
  }
  public set expression(value: string[]) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // expression_name - computed: false, optional: true, required: false
  private _expressionName?: string; 
  public get expressionName() {
    return this.getStringAttribute('expression_name');
  }
  public set expressionName(value: string) {
    this._expressionName = value;
  }
  public resetExpressionName() {
    this._expressionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionNameInput() {
    return this._expressionName;
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
}

export class LakeformationOptInResourceDataLfTagPolicyList extends cdktf.ComplexList {
  public internalValue? : LakeformationOptInResourceDataLfTagPolicy[] | cdktf.IResolvable

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
  public get(index: number): LakeformationOptInResourceDataLfTagPolicyOutputReference {
    return new LakeformationOptInResourceDataLfTagPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LakeformationOptInResourceDataTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#database_name LakeformationOptIn#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#name LakeformationOptIn#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#wildcard LakeformationOptIn#wildcard}
  */
  readonly wildcard?: boolean | cdktf.IResolvable;
}

export function lakeformationOptInResourceDataTableToTerraform(struct?: LakeformationOptInResourceDataTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    name: cdktf.stringToTerraform(struct!.name),
    wildcard: cdktf.booleanToTerraform(struct!.wildcard),
  }
}


export function lakeformationOptInResourceDataTableToHclTerraform(struct?: LakeformationOptInResourceDataTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog_id: {
      value: cdktf.stringToHclTerraform(struct!.catalogId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wildcard: {
      value: cdktf.booleanToHclTerraform(struct!.wildcard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LakeformationOptInResourceDataTableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LakeformationOptInResourceDataTable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogId !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogId = this._catalogId;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._wildcard !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildcard = this._wildcard;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakeformationOptInResourceDataTable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalogId = undefined;
      this._databaseName = undefined;
      this._name = undefined;
      this._wildcard = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalogId = value.catalogId;
      this._databaseName = value.databaseName;
      this._name = value.name;
      this._wildcard = value.wildcard;
    }
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // wildcard - computed: false, optional: true, required: false
  private _wildcard?: boolean | cdktf.IResolvable; 
  public get wildcard() {
    return this.getBooleanAttribute('wildcard');
  }
  public set wildcard(value: boolean | cdktf.IResolvable) {
    this._wildcard = value;
  }
  public resetWildcard() {
    this._wildcard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardInput() {
    return this._wildcard;
  }
}

export class LakeformationOptInResourceDataTableList extends cdktf.ComplexList {
  public internalValue? : LakeformationOptInResourceDataTable[] | cdktf.IResolvable

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
  public get(index: number): LakeformationOptInResourceDataTableOutputReference {
    return new LakeformationOptInResourceDataTableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LakeformationOptInResourceDataTableWithColumnsColumnWildcard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#excluded_column_names LakeformationOptIn#excluded_column_names}
  */
  readonly excludedColumnNames?: string[];
}

export function lakeformationOptInResourceDataTableWithColumnsColumnWildcardToTerraform(struct?: LakeformationOptInResourceDataTableWithColumnsColumnWildcard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_column_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedColumnNames),
  }
}


export function lakeformationOptInResourceDataTableWithColumnsColumnWildcardToHclTerraform(struct?: LakeformationOptInResourceDataTableWithColumnsColumnWildcard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_column_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedColumnNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LakeformationOptInResourceDataTableWithColumnsColumnWildcard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedColumnNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedColumnNames = this._excludedColumnNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakeformationOptInResourceDataTableWithColumnsColumnWildcard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedColumnNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedColumnNames = value.excludedColumnNames;
    }
  }

  // excluded_column_names - computed: false, optional: true, required: false
  private _excludedColumnNames?: string[]; 
  public get excludedColumnNames() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_column_names'));
  }
  public set excludedColumnNames(value: string[]) {
    this._excludedColumnNames = value;
  }
  public resetExcludedColumnNames() {
    this._excludedColumnNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedColumnNamesInput() {
    return this._excludedColumnNames;
  }
}

export class LakeformationOptInResourceDataTableWithColumnsColumnWildcardList extends cdktf.ComplexList {
  public internalValue? : LakeformationOptInResourceDataTableWithColumnsColumnWildcard[] | cdktf.IResolvable

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
  public get(index: number): LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference {
    return new LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LakeformationOptInResourceDataTableWithColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#column_names LakeformationOptIn#column_names}
  */
  readonly columnNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#database_name LakeformationOptIn#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#name LakeformationOptIn#name}
  */
  readonly name: string;
  /**
  * column_wildcard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#column_wildcard LakeformationOptIn#column_wildcard}
  */
  readonly columnWildcard?: LakeformationOptInResourceDataTableWithColumnsColumnWildcard[] | cdktf.IResolvable;
}

export function lakeformationOptInResourceDataTableWithColumnsToTerraform(struct?: LakeformationOptInResourceDataTableWithColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    column_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columnNames),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    name: cdktf.stringToTerraform(struct!.name),
    column_wildcard: cdktf.listMapper(lakeformationOptInResourceDataTableWithColumnsColumnWildcardToTerraform, true)(struct!.columnWildcard),
  }
}


export function lakeformationOptInResourceDataTableWithColumnsToHclTerraform(struct?: LakeformationOptInResourceDataTableWithColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog_id: {
      value: cdktf.stringToHclTerraform(struct!.catalogId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columnNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column_wildcard: {
      value: cdktf.listMapperHcl(lakeformationOptInResourceDataTableWithColumnsColumnWildcardToHclTerraform, true)(struct!.columnWildcard),
      isBlock: true,
      type: "list",
      storageClassType: "LakeformationOptInResourceDataTableWithColumnsColumnWildcardList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LakeformationOptInResourceDataTableWithColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LakeformationOptInResourceDataTableWithColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogId !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogId = this._catalogId;
    }
    if (this._columnNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnNames = this._columnNames;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._columnWildcard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnWildcard = this._columnWildcard?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakeformationOptInResourceDataTableWithColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalogId = undefined;
      this._columnNames = undefined;
      this._databaseName = undefined;
      this._name = undefined;
      this._columnWildcard.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalogId = value.catalogId;
      this._columnNames = value.columnNames;
      this._databaseName = value.databaseName;
      this._name = value.name;
      this._columnWildcard.internalValue = value.columnWildcard;
    }
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

  // column_names - computed: false, optional: true, required: false
  private _columnNames?: string[]; 
  public get columnNames() {
    return cdktf.Fn.tolist(this.getListAttribute('column_names'));
  }
  public set columnNames(value: string[]) {
    this._columnNames = value;
  }
  public resetColumnNames() {
    this._columnNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNamesInput() {
    return this._columnNames;
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

  // column_wildcard - computed: false, optional: true, required: false
  private _columnWildcard = new LakeformationOptInResourceDataTableWithColumnsColumnWildcardList(this, "column_wildcard", false);
  public get columnWildcard() {
    return this._columnWildcard;
  }
  public putColumnWildcard(value: LakeformationOptInResourceDataTableWithColumnsColumnWildcard[] | cdktf.IResolvable) {
    this._columnWildcard.internalValue = value;
  }
  public resetColumnWildcard() {
    this._columnWildcard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnWildcardInput() {
    return this._columnWildcard.internalValue;
  }
}

export class LakeformationOptInResourceDataTableWithColumnsList extends cdktf.ComplexList {
  public internalValue? : LakeformationOptInResourceDataTableWithColumns[] | cdktf.IResolvable

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
  public get(index: number): LakeformationOptInResourceDataTableWithColumnsOutputReference {
    return new LakeformationOptInResourceDataTableWithColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LakeformationOptInResourceData {
  /**
  * catalog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#catalog LakeformationOptIn#catalog}
  */
  readonly catalog?: LakeformationOptInResourceDataCatalog[] | cdktf.IResolvable;
  /**
  * data_cells_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#data_cells_filter LakeformationOptIn#data_cells_filter}
  */
  readonly dataCellsFilter?: LakeformationOptInResourceDataDataCellsFilter[] | cdktf.IResolvable;
  /**
  * data_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#data_location LakeformationOptIn#data_location}
  */
  readonly dataLocation?: LakeformationOptInResourceDataDataLocation[] | cdktf.IResolvable;
  /**
  * database block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#database LakeformationOptIn#database}
  */
  readonly database?: LakeformationOptInResourceDataDatabase[] | cdktf.IResolvable;
  /**
  * lf_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#lf_tag LakeformationOptIn#lf_tag}
  */
  readonly lfTag?: LakeformationOptInResourceDataLfTag[] | cdktf.IResolvable;
  /**
  * lf_tag_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#lf_tag_expression LakeformationOptIn#lf_tag_expression}
  */
  readonly lfTagExpression?: LakeformationOptInResourceDataLfTagExpression[] | cdktf.IResolvable;
  /**
  * lf_tag_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#lf_tag_policy LakeformationOptIn#lf_tag_policy}
  */
  readonly lfTagPolicy?: LakeformationOptInResourceDataLfTagPolicy[] | cdktf.IResolvable;
  /**
  * table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#table LakeformationOptIn#table}
  */
  readonly table?: LakeformationOptInResourceDataTable[] | cdktf.IResolvable;
  /**
  * table_with_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#table_with_columns LakeformationOptIn#table_with_columns}
  */
  readonly tableWithColumns?: LakeformationOptInResourceDataTableWithColumns[] | cdktf.IResolvable;
}

export function lakeformationOptInResourceDataToTerraform(struct?: LakeformationOptInResourceData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog: cdktf.listMapper(lakeformationOptInResourceDataCatalogToTerraform, true)(struct!.catalog),
    data_cells_filter: cdktf.listMapper(lakeformationOptInResourceDataDataCellsFilterToTerraform, true)(struct!.dataCellsFilter),
    data_location: cdktf.listMapper(lakeformationOptInResourceDataDataLocationToTerraform, true)(struct!.dataLocation),
    database: cdktf.listMapper(lakeformationOptInResourceDataDatabaseToTerraform, true)(struct!.database),
    lf_tag: cdktf.listMapper(lakeformationOptInResourceDataLfTagToTerraform, true)(struct!.lfTag),
    lf_tag_expression: cdktf.listMapper(lakeformationOptInResourceDataLfTagExpressionToTerraform, true)(struct!.lfTagExpression),
    lf_tag_policy: cdktf.listMapper(lakeformationOptInResourceDataLfTagPolicyToTerraform, true)(struct!.lfTagPolicy),
    table: cdktf.listMapper(lakeformationOptInResourceDataTableToTerraform, true)(struct!.table),
    table_with_columns: cdktf.listMapper(lakeformationOptInResourceDataTableWithColumnsToTerraform, true)(struct!.tableWithColumns),
  }
}


export function lakeformationOptInResourceDataToHclTerraform(struct?: LakeformationOptInResourceData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog: {
      value: cdktf.listMapperHcl(lakeformationOptInResourceDataCatalogToHclTerraform, true)(struct!.catalog),
      isBlock: true,
      type: "list",
      storageClassType: "LakeformationOptInResourceDataCatalogList",
    },
    data_cells_filter: {
      value: cdktf.listMapperHcl(lakeformationOptInResourceDataDataCellsFilterToHclTerraform, true)(struct!.dataCellsFilter),
      isBlock: true,
      type: "list",
      storageClassType: "LakeformationOptInResourceDataDataCellsFilterList",
    },
    data_location: {
      value: cdktf.listMapperHcl(lakeformationOptInResourceDataDataLocationToHclTerraform, true)(struct!.dataLocation),
      isBlock: true,
      type: "list",
      storageClassType: "LakeformationOptInResourceDataDataLocationList",
    },
    database: {
      value: cdktf.listMapperHcl(lakeformationOptInResourceDataDatabaseToHclTerraform, true)(struct!.database),
      isBlock: true,
      type: "list",
      storageClassType: "LakeformationOptInResourceDataDatabaseList",
    },
    lf_tag: {
      value: cdktf.listMapperHcl(lakeformationOptInResourceDataLfTagToHclTerraform, true)(struct!.lfTag),
      isBlock: true,
      type: "list",
      storageClassType: "LakeformationOptInResourceDataLfTagList",
    },
    lf_tag_expression: {
      value: cdktf.listMapperHcl(lakeformationOptInResourceDataLfTagExpressionToHclTerraform, true)(struct!.lfTagExpression),
      isBlock: true,
      type: "list",
      storageClassType: "LakeformationOptInResourceDataLfTagExpressionList",
    },
    lf_tag_policy: {
      value: cdktf.listMapperHcl(lakeformationOptInResourceDataLfTagPolicyToHclTerraform, true)(struct!.lfTagPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "LakeformationOptInResourceDataLfTagPolicyList",
    },
    table: {
      value: cdktf.listMapperHcl(lakeformationOptInResourceDataTableToHclTerraform, true)(struct!.table),
      isBlock: true,
      type: "list",
      storageClassType: "LakeformationOptInResourceDataTableList",
    },
    table_with_columns: {
      value: cdktf.listMapperHcl(lakeformationOptInResourceDataTableWithColumnsToHclTerraform, true)(struct!.tableWithColumns),
      isBlock: true,
      type: "list",
      storageClassType: "LakeformationOptInResourceDataTableWithColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LakeformationOptInResourceDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LakeformationOptInResourceData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog?.internalValue;
    }
    if (this._dataCellsFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCellsFilter = this._dataCellsFilter?.internalValue;
    }
    if (this._dataLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLocation = this._dataLocation?.internalValue;
    }
    if (this._database?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database?.internalValue;
    }
    if (this._lfTag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lfTag = this._lfTag?.internalValue;
    }
    if (this._lfTagExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lfTagExpression = this._lfTagExpression?.internalValue;
    }
    if (this._lfTagPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lfTagPolicy = this._lfTagPolicy?.internalValue;
    }
    if (this._table?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table?.internalValue;
    }
    if (this._tableWithColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableWithColumns = this._tableWithColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakeformationOptInResourceData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalog.internalValue = undefined;
      this._dataCellsFilter.internalValue = undefined;
      this._dataLocation.internalValue = undefined;
      this._database.internalValue = undefined;
      this._lfTag.internalValue = undefined;
      this._lfTagExpression.internalValue = undefined;
      this._lfTagPolicy.internalValue = undefined;
      this._table.internalValue = undefined;
      this._tableWithColumns.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalog.internalValue = value.catalog;
      this._dataCellsFilter.internalValue = value.dataCellsFilter;
      this._dataLocation.internalValue = value.dataLocation;
      this._database.internalValue = value.database;
      this._lfTag.internalValue = value.lfTag;
      this._lfTagExpression.internalValue = value.lfTagExpression;
      this._lfTagPolicy.internalValue = value.lfTagPolicy;
      this._table.internalValue = value.table;
      this._tableWithColumns.internalValue = value.tableWithColumns;
    }
  }

  // catalog - computed: false, optional: true, required: false
  private _catalog = new LakeformationOptInResourceDataCatalogList(this, "catalog", false);
  public get catalog() {
    return this._catalog;
  }
  public putCatalog(value: LakeformationOptInResourceDataCatalog[] | cdktf.IResolvable) {
    this._catalog.internalValue = value;
  }
  public resetCatalog() {
    this._catalog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog.internalValue;
  }

  // data_cells_filter - computed: false, optional: true, required: false
  private _dataCellsFilter = new LakeformationOptInResourceDataDataCellsFilterList(this, "data_cells_filter", false);
  public get dataCellsFilter() {
    return this._dataCellsFilter;
  }
  public putDataCellsFilter(value: LakeformationOptInResourceDataDataCellsFilter[] | cdktf.IResolvable) {
    this._dataCellsFilter.internalValue = value;
  }
  public resetDataCellsFilter() {
    this._dataCellsFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCellsFilterInput() {
    return this._dataCellsFilter.internalValue;
  }

  // data_location - computed: false, optional: true, required: false
  private _dataLocation = new LakeformationOptInResourceDataDataLocationList(this, "data_location", false);
  public get dataLocation() {
    return this._dataLocation;
  }
  public putDataLocation(value: LakeformationOptInResourceDataDataLocation[] | cdktf.IResolvable) {
    this._dataLocation.internalValue = value;
  }
  public resetDataLocation() {
    this._dataLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLocationInput() {
    return this._dataLocation.internalValue;
  }

  // database - computed: false, optional: true, required: false
  private _database = new LakeformationOptInResourceDataDatabaseList(this, "database", false);
  public get database() {
    return this._database;
  }
  public putDatabase(value: LakeformationOptInResourceDataDatabase[] | cdktf.IResolvable) {
    this._database.internalValue = value;
  }
  public resetDatabase() {
    this._database.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database.internalValue;
  }

  // lf_tag - computed: false, optional: true, required: false
  private _lfTag = new LakeformationOptInResourceDataLfTagList(this, "lf_tag", false);
  public get lfTag() {
    return this._lfTag;
  }
  public putLfTag(value: LakeformationOptInResourceDataLfTag[] | cdktf.IResolvable) {
    this._lfTag.internalValue = value;
  }
  public resetLfTag() {
    this._lfTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lfTagInput() {
    return this._lfTag.internalValue;
  }

  // lf_tag_expression - computed: false, optional: true, required: false
  private _lfTagExpression = new LakeformationOptInResourceDataLfTagExpressionList(this, "lf_tag_expression", false);
  public get lfTagExpression() {
    return this._lfTagExpression;
  }
  public putLfTagExpression(value: LakeformationOptInResourceDataLfTagExpression[] | cdktf.IResolvable) {
    this._lfTagExpression.internalValue = value;
  }
  public resetLfTagExpression() {
    this._lfTagExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lfTagExpressionInput() {
    return this._lfTagExpression.internalValue;
  }

  // lf_tag_policy - computed: false, optional: true, required: false
  private _lfTagPolicy = new LakeformationOptInResourceDataLfTagPolicyList(this, "lf_tag_policy", false);
  public get lfTagPolicy() {
    return this._lfTagPolicy;
  }
  public putLfTagPolicy(value: LakeformationOptInResourceDataLfTagPolicy[] | cdktf.IResolvable) {
    this._lfTagPolicy.internalValue = value;
  }
  public resetLfTagPolicy() {
    this._lfTagPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lfTagPolicyInput() {
    return this._lfTagPolicy.internalValue;
  }

  // table - computed: false, optional: true, required: false
  private _table = new LakeformationOptInResourceDataTableList(this, "table", false);
  public get table() {
    return this._table;
  }
  public putTable(value: LakeformationOptInResourceDataTable[] | cdktf.IResolvable) {
    this._table.internalValue = value;
  }
  public resetTable() {
    this._table.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table.internalValue;
  }

  // table_with_columns - computed: false, optional: true, required: false
  private _tableWithColumns = new LakeformationOptInResourceDataTableWithColumnsList(this, "table_with_columns", false);
  public get tableWithColumns() {
    return this._tableWithColumns;
  }
  public putTableWithColumns(value: LakeformationOptInResourceDataTableWithColumns[] | cdktf.IResolvable) {
    this._tableWithColumns.internalValue = value;
  }
  public resetTableWithColumns() {
    this._tableWithColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableWithColumnsInput() {
    return this._tableWithColumns.internalValue;
  }
}

export class LakeformationOptInResourceDataList extends cdktf.ComplexList {
  public internalValue? : LakeformationOptInResourceData[] | cdktf.IResolvable

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
  public get(index: number): LakeformationOptInResourceDataOutputReference {
    return new LakeformationOptInResourceDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in aws_lakeformation_opt_in}
*/
export class LakeformationOptIn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lakeformation_opt_in";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LakeformationOptIn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LakeformationOptIn to import
  * @param importFromId The id of the existing LakeformationOptIn that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LakeformationOptIn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_lakeformation_opt_in", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/lakeformation_opt_in aws_lakeformation_opt_in} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LakeformationOptInConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LakeformationOptInConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_lakeformation_opt_in',
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
    this._region = config.region;
    this._condition.internalValue = config.condition;
    this._principal.internalValue = config.principal;
    this._resourceData.internalValue = config.resourceData;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // last_updated_by - computed: true, optional: false, required: false
  public get lastUpdatedBy() {
    return this.getStringAttribute('last_updated_by');
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

  // condition - computed: false, optional: true, required: false
  private _condition = new LakeformationOptInConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: LakeformationOptInCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // principal - computed: false, optional: true, required: false
  private _principal = new LakeformationOptInPrincipalList(this, "principal", false);
  public get principal() {
    return this._principal;
  }
  public putPrincipal(value: LakeformationOptInPrincipal[] | cdktf.IResolvable) {
    this._principal.internalValue = value;
  }
  public resetPrincipal() {
    this._principal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal.internalValue;
  }

  // resource_data - computed: false, optional: true, required: false
  private _resourceData = new LakeformationOptInResourceDataList(this, "resource_data", false);
  public get resourceData() {
    return this._resourceData;
  }
  public putResourceData(value: LakeformationOptInResourceData[] | cdktf.IResolvable) {
    this._resourceData.internalValue = value;
  }
  public resetResourceData() {
    this._resourceData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceDataInput() {
    return this._resourceData.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      region: cdktf.stringToTerraform(this._region),
      condition: cdktf.listMapper(lakeformationOptInConditionToTerraform, true)(this._condition.internalValue),
      principal: cdktf.listMapper(lakeformationOptInPrincipalToTerraform, true)(this._principal.internalValue),
      resource_data: cdktf.listMapper(lakeformationOptInResourceDataToTerraform, true)(this._resourceData.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      condition: {
        value: cdktf.listMapperHcl(lakeformationOptInConditionToHclTerraform, true)(this._condition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LakeformationOptInConditionList",
      },
      principal: {
        value: cdktf.listMapperHcl(lakeformationOptInPrincipalToHclTerraform, true)(this._principal.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LakeformationOptInPrincipalList",
      },
      resource_data: {
        value: cdktf.listMapperHcl(lakeformationOptInResourceDataToHclTerraform, true)(this._resourceData.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LakeformationOptInResourceDataList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
