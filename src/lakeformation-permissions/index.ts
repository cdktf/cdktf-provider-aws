/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LakeformationPermissionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#catalog_resource LakeformationPermissions#catalog_resource}
  */
  readonly catalogResource?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#id LakeformationPermissions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#permissions LakeformationPermissions#permissions}
  */
  readonly permissions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#permissions_with_grant_option LakeformationPermissions#permissions_with_grant_option}
  */
  readonly permissionsWithGrantOption?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#principal LakeformationPermissions#principal}
  */
  readonly principal: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#region LakeformationPermissions#region}
  */
  readonly region?: string;
  /**
  * data_cells_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#data_cells_filter LakeformationPermissions#data_cells_filter}
  */
  readonly dataCellsFilter?: LakeformationPermissionsDataCellsFilter;
  /**
  * data_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#data_location LakeformationPermissions#data_location}
  */
  readonly dataLocation?: LakeformationPermissionsDataLocation;
  /**
  * database block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#database LakeformationPermissions#database}
  */
  readonly database?: LakeformationPermissionsDatabase;
  /**
  * lf_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#lf_tag LakeformationPermissions#lf_tag}
  */
  readonly lfTag?: LakeformationPermissionsLfTag;
  /**
  * lf_tag_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#lf_tag_policy LakeformationPermissions#lf_tag_policy}
  */
  readonly lfTagPolicy?: LakeformationPermissionsLfTagPolicy;
  /**
  * table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#table LakeformationPermissions#table}
  */
  readonly table?: LakeformationPermissionsTable;
  /**
  * table_with_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#table_with_columns LakeformationPermissions#table_with_columns}
  */
  readonly tableWithColumns?: LakeformationPermissionsTableWithColumns;
}
export interface LakeformationPermissionsDataCellsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#database_name LakeformationPermissions#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#name LakeformationPermissions#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#table_catalog_id LakeformationPermissions#table_catalog_id}
  */
  readonly tableCatalogId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#table_name LakeformationPermissions#table_name}
  */
  readonly tableName: string;
}

export function lakeformationPermissionsDataCellsFilterToTerraform(struct?: LakeformationPermissionsDataCellsFilterOutputReference | LakeformationPermissionsDataCellsFilter): any {
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


export function lakeformationPermissionsDataCellsFilterToHclTerraform(struct?: LakeformationPermissionsDataCellsFilterOutputReference | LakeformationPermissionsDataCellsFilter): any {
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

export class LakeformationPermissionsDataCellsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LakeformationPermissionsDataCellsFilter | undefined {
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

  public set internalValue(value: LakeformationPermissionsDataCellsFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseName = undefined;
      this._name = undefined;
      this._tableCatalogId = undefined;
      this._tableName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseName = value.databaseName;
      this._name = value.name;
      this._tableCatalogId = value.tableCatalogId;
      this._tableName = value.tableName;
    }
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

  // table_catalog_id - computed: false, optional: false, required: true
  private _tableCatalogId?: string; 
  public get tableCatalogId() {
    return this.getStringAttribute('table_catalog_id');
  }
  public set tableCatalogId(value: string) {
    this._tableCatalogId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableCatalogIdInput() {
    return this._tableCatalogId;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }
}
export interface LakeformationPermissionsDataLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#arn LakeformationPermissions#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}
  */
  readonly catalogId?: string;
}

export function lakeformationPermissionsDataLocationToTerraform(struct?: LakeformationPermissionsDataLocationOutputReference | LakeformationPermissionsDataLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
  }
}


export function lakeformationPermissionsDataLocationToHclTerraform(struct?: LakeformationPermissionsDataLocationOutputReference | LakeformationPermissionsDataLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    catalog_id: {
      value: cdktf.stringToHclTerraform(struct!.catalogId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LakeformationPermissionsDataLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LakeformationPermissionsDataLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._catalogId !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogId = this._catalogId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakeformationPermissionsDataLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
      this._catalogId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
      this._catalogId = value.catalogId;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
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
}
export interface LakeformationPermissionsDatabase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#name LakeformationPermissions#name}
  */
  readonly name: string;
}

export function lakeformationPermissionsDatabaseToTerraform(struct?: LakeformationPermissionsDatabaseOutputReference | LakeformationPermissionsDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function lakeformationPermissionsDatabaseToHclTerraform(struct?: LakeformationPermissionsDatabaseOutputReference | LakeformationPermissionsDatabase): any {
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

export class LakeformationPermissionsDatabaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LakeformationPermissionsDatabase | undefined {
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

  public set internalValue(value: LakeformationPermissionsDatabase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalogId = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalogId = value.catalogId;
      this._name = value.name;
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
export interface LakeformationPermissionsLfTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#key LakeformationPermissions#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#values LakeformationPermissions#values}
  */
  readonly values: string[];
}

export function lakeformationPermissionsLfTagToTerraform(struct?: LakeformationPermissionsLfTagOutputReference | LakeformationPermissionsLfTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function lakeformationPermissionsLfTagToHclTerraform(struct?: LakeformationPermissionsLfTagOutputReference | LakeformationPermissionsLfTag): any {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LakeformationPermissionsLfTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LakeformationPermissionsLfTag | undefined {
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
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakeformationPermissionsLfTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalogId = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalogId = value.catalogId;
      this._key = value.key;
      this._values = value.values;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface LakeformationPermissionsLfTagPolicyExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#key LakeformationPermissions#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#values LakeformationPermissions#values}
  */
  readonly values: string[];
}

export function lakeformationPermissionsLfTagPolicyExpressionToTerraform(struct?: LakeformationPermissionsLfTagPolicyExpression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function lakeformationPermissionsLfTagPolicyExpressionToHclTerraform(struct?: LakeformationPermissionsLfTagPolicyExpression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LakeformationPermissionsLfTagPolicyExpressionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LakeformationPermissionsLfTagPolicyExpression | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakeformationPermissionsLfTagPolicyExpression | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class LakeformationPermissionsLfTagPolicyExpressionList extends cdktf.ComplexList {
  public internalValue? : LakeformationPermissionsLfTagPolicyExpression[] | cdktf.IResolvable

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
  public get(index: number): LakeformationPermissionsLfTagPolicyExpressionOutputReference {
    return new LakeformationPermissionsLfTagPolicyExpressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LakeformationPermissionsLfTagPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#resource_type LakeformationPermissions#resource_type}
  */
  readonly resourceType: string;
  /**
  * expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#expression LakeformationPermissions#expression}
  */
  readonly expression: LakeformationPermissionsLfTagPolicyExpression[] | cdktf.IResolvable;
}

export function lakeformationPermissionsLfTagPolicyToTerraform(struct?: LakeformationPermissionsLfTagPolicyOutputReference | LakeformationPermissionsLfTagPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    expression: cdktf.listMapper(lakeformationPermissionsLfTagPolicyExpressionToTerraform, true)(struct!.expression),
  }
}


export function lakeformationPermissionsLfTagPolicyToHclTerraform(struct?: LakeformationPermissionsLfTagPolicyOutputReference | LakeformationPermissionsLfTagPolicy): any {
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
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktf.listMapperHcl(lakeformationPermissionsLfTagPolicyExpressionToHclTerraform, true)(struct!.expression),
      isBlock: true,
      type: "set",
      storageClassType: "LakeformationPermissionsLfTagPolicyExpressionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LakeformationPermissionsLfTagPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LakeformationPermissionsLfTagPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogId !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogId = this._catalogId;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._expression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakeformationPermissionsLfTagPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalogId = undefined;
      this._resourceType = undefined;
      this._expression.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalogId = value.catalogId;
      this._resourceType = value.resourceType;
      this._expression.internalValue = value.expression;
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

  // expression - computed: false, optional: false, required: true
  private _expression = new LakeformationPermissionsLfTagPolicyExpressionList(this, "expression", true);
  public get expression() {
    return this._expression;
  }
  public putExpression(value: LakeformationPermissionsLfTagPolicyExpression[] | cdktf.IResolvable) {
    this._expression.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression.internalValue;
  }
}
export interface LakeformationPermissionsTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#database_name LakeformationPermissions#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#name LakeformationPermissions#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#wildcard LakeformationPermissions#wildcard}
  */
  readonly wildcard?: boolean | cdktf.IResolvable;
}

export function lakeformationPermissionsTableToTerraform(struct?: LakeformationPermissionsTableOutputReference | LakeformationPermissionsTable): any {
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


export function lakeformationPermissionsTableToHclTerraform(struct?: LakeformationPermissionsTableOutputReference | LakeformationPermissionsTable): any {
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

export class LakeformationPermissionsTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LakeformationPermissionsTable | undefined {
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

  public set internalValue(value: LakeformationPermissionsTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalogId = undefined;
      this._databaseName = undefined;
      this._name = undefined;
      this._wildcard = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalogId = value.catalogId;
      this._databaseName = value.databaseName;
      this._name = value.name;
      this._wildcard = value.wildcard;
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

  // name - computed: true, optional: true, required: false
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
export interface LakeformationPermissionsTableWithColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#column_names LakeformationPermissions#column_names}
  */
  readonly columnNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#database_name LakeformationPermissions#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#excluded_column_names LakeformationPermissions#excluded_column_names}
  */
  readonly excludedColumnNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#name LakeformationPermissions#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#wildcard LakeformationPermissions#wildcard}
  */
  readonly wildcard?: boolean | cdktf.IResolvable;
}

export function lakeformationPermissionsTableWithColumnsToTerraform(struct?: LakeformationPermissionsTableWithColumnsOutputReference | LakeformationPermissionsTableWithColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    column_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columnNames),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    excluded_column_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedColumnNames),
    name: cdktf.stringToTerraform(struct!.name),
    wildcard: cdktf.booleanToTerraform(struct!.wildcard),
  }
}


export function lakeformationPermissionsTableWithColumnsToHclTerraform(struct?: LakeformationPermissionsTableWithColumnsOutputReference | LakeformationPermissionsTableWithColumns): any {
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
    excluded_column_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedColumnNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class LakeformationPermissionsTableWithColumnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LakeformationPermissionsTableWithColumns | undefined {
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
    if (this._excludedColumnNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedColumnNames = this._excludedColumnNames;
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

  public set internalValue(value: LakeformationPermissionsTableWithColumns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalogId = undefined;
      this._columnNames = undefined;
      this._databaseName = undefined;
      this._excludedColumnNames = undefined;
      this._name = undefined;
      this._wildcard = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalogId = value.catalogId;
      this._columnNames = value.columnNames;
      this._databaseName = value.databaseName;
      this._excludedColumnNames = value.excludedColumnNames;
      this._name = value.name;
      this._wildcard = value.wildcard;
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions aws_lakeformation_permissions}
*/
export class LakeformationPermissions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lakeformation_permissions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LakeformationPermissions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LakeformationPermissions to import
  * @param importFromId The id of the existing LakeformationPermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LakeformationPermissions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_lakeformation_permissions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_permissions aws_lakeformation_permissions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LakeformationPermissionsConfig
  */
  public constructor(scope: Construct, id: string, config: LakeformationPermissionsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lakeformation_permissions',
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
    this._catalogId = config.catalogId;
    this._catalogResource = config.catalogResource;
    this._id = config.id;
    this._permissions = config.permissions;
    this._permissionsWithGrantOption = config.permissionsWithGrantOption;
    this._principal = config.principal;
    this._region = config.region;
    this._dataCellsFilter.internalValue = config.dataCellsFilter;
    this._dataLocation.internalValue = config.dataLocation;
    this._database.internalValue = config.database;
    this._lfTag.internalValue = config.lfTag;
    this._lfTagPolicy.internalValue = config.lfTagPolicy;
    this._table.internalValue = config.table;
    this._tableWithColumns.internalValue = config.tableWithColumns;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // catalog_resource - computed: false, optional: true, required: false
  private _catalogResource?: boolean | cdktf.IResolvable; 
  public get catalogResource() {
    return this.getBooleanAttribute('catalog_resource');
  }
  public set catalogResource(value: boolean | cdktf.IResolvable) {
    this._catalogResource = value;
  }
  public resetCatalogResource() {
    this._catalogResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogResourceInput() {
    return this._catalogResource;
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

  // permissions - computed: false, optional: false, required: true
  private _permissions?: string[]; 
  public get permissions() {
    return cdktf.Fn.tolist(this.getListAttribute('permissions'));
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // permissions_with_grant_option - computed: true, optional: true, required: false
  private _permissionsWithGrantOption?: string[]; 
  public get permissionsWithGrantOption() {
    return cdktf.Fn.tolist(this.getListAttribute('permissions_with_grant_option'));
  }
  public set permissionsWithGrantOption(value: string[]) {
    this._permissionsWithGrantOption = value;
  }
  public resetPermissionsWithGrantOption() {
    this._permissionsWithGrantOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsWithGrantOptionInput() {
    return this._permissionsWithGrantOption;
  }

  // principal - computed: false, optional: false, required: true
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
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

  // data_cells_filter - computed: false, optional: true, required: false
  private _dataCellsFilter = new LakeformationPermissionsDataCellsFilterOutputReference(this, "data_cells_filter");
  public get dataCellsFilter() {
    return this._dataCellsFilter;
  }
  public putDataCellsFilter(value: LakeformationPermissionsDataCellsFilter) {
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
  private _dataLocation = new LakeformationPermissionsDataLocationOutputReference(this, "data_location");
  public get dataLocation() {
    return this._dataLocation;
  }
  public putDataLocation(value: LakeformationPermissionsDataLocation) {
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
  private _database = new LakeformationPermissionsDatabaseOutputReference(this, "database");
  public get database() {
    return this._database;
  }
  public putDatabase(value: LakeformationPermissionsDatabase) {
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
  private _lfTag = new LakeformationPermissionsLfTagOutputReference(this, "lf_tag");
  public get lfTag() {
    return this._lfTag;
  }
  public putLfTag(value: LakeformationPermissionsLfTag) {
    this._lfTag.internalValue = value;
  }
  public resetLfTag() {
    this._lfTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lfTagInput() {
    return this._lfTag.internalValue;
  }

  // lf_tag_policy - computed: false, optional: true, required: false
  private _lfTagPolicy = new LakeformationPermissionsLfTagPolicyOutputReference(this, "lf_tag_policy");
  public get lfTagPolicy() {
    return this._lfTagPolicy;
  }
  public putLfTagPolicy(value: LakeformationPermissionsLfTagPolicy) {
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
  private _table = new LakeformationPermissionsTableOutputReference(this, "table");
  public get table() {
    return this._table;
  }
  public putTable(value: LakeformationPermissionsTable) {
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
  private _tableWithColumns = new LakeformationPermissionsTableWithColumnsOutputReference(this, "table_with_columns");
  public get tableWithColumns() {
    return this._tableWithColumns;
  }
  public putTableWithColumns(value: LakeformationPermissionsTableWithColumns) {
    this._tableWithColumns.internalValue = value;
  }
  public resetTableWithColumns() {
    this._tableWithColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableWithColumnsInput() {
    return this._tableWithColumns.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: cdktf.stringToTerraform(this._catalogId),
      catalog_resource: cdktf.booleanToTerraform(this._catalogResource),
      id: cdktf.stringToTerraform(this._id),
      permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._permissions),
      permissions_with_grant_option: cdktf.listMapper(cdktf.stringToTerraform, false)(this._permissionsWithGrantOption),
      principal: cdktf.stringToTerraform(this._principal),
      region: cdktf.stringToTerraform(this._region),
      data_cells_filter: lakeformationPermissionsDataCellsFilterToTerraform(this._dataCellsFilter.internalValue),
      data_location: lakeformationPermissionsDataLocationToTerraform(this._dataLocation.internalValue),
      database: lakeformationPermissionsDatabaseToTerraform(this._database.internalValue),
      lf_tag: lakeformationPermissionsLfTagToTerraform(this._lfTag.internalValue),
      lf_tag_policy: lakeformationPermissionsLfTagPolicyToTerraform(this._lfTagPolicy.internalValue),
      table: lakeformationPermissionsTableToTerraform(this._table.internalValue),
      table_with_columns: lakeformationPermissionsTableWithColumnsToTerraform(this._tableWithColumns.internalValue),
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
      catalog_resource: {
        value: cdktf.booleanToHclTerraform(this._catalogResource),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._permissions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      permissions_with_grant_option: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._permissionsWithGrantOption),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      principal: {
        value: cdktf.stringToHclTerraform(this._principal),
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
      data_cells_filter: {
        value: lakeformationPermissionsDataCellsFilterToHclTerraform(this._dataCellsFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LakeformationPermissionsDataCellsFilterList",
      },
      data_location: {
        value: lakeformationPermissionsDataLocationToHclTerraform(this._dataLocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LakeformationPermissionsDataLocationList",
      },
      database: {
        value: lakeformationPermissionsDatabaseToHclTerraform(this._database.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LakeformationPermissionsDatabaseList",
      },
      lf_tag: {
        value: lakeformationPermissionsLfTagToHclTerraform(this._lfTag.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LakeformationPermissionsLfTagList",
      },
      lf_tag_policy: {
        value: lakeformationPermissionsLfTagPolicyToHclTerraform(this._lfTagPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LakeformationPermissionsLfTagPolicyList",
      },
      table: {
        value: lakeformationPermissionsTableToHclTerraform(this._table.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LakeformationPermissionsTableList",
      },
      table_with_columns: {
        value: lakeformationPermissionsTableWithColumnsToHclTerraform(this._tableWithColumns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LakeformationPermissionsTableWithColumnsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
