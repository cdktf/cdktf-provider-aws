/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlueCatalogDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_database#catalog_id GlueCatalogDatabase#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_database#description GlueCatalogDatabase#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_database#id GlueCatalogDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_database#location_uri GlueCatalogDatabase#location_uri}
  */
  readonly locationUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_database#name GlueCatalogDatabase#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_database#parameters GlueCatalogDatabase#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_database#region GlueCatalogDatabase#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_database#tags GlueCatalogDatabase#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_database#tags_all GlueCatalogDatabase#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * create_table_default_permission block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_database#create_table_default_permission GlueCatalogDatabase#create_table_default_permission}
  */
  readonly createTableDefaultPermission?: GlueCatalogDatabaseCreateTableDefaultPermission[] | cdktf.IResolvable;
  /**
  * federated_database block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_database#federated_database GlueCatalogDatabase#federated_database}
  */
  readonly federatedDatabase?: GlueCatalogDatabaseFederatedDatabase;
  /**
  * target_database block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_database#target_database GlueCatalogDatabase#target_database}
  */
  readonly targetDatabase?: GlueCatalogDatabaseTargetDatabase;
}
export interface GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_database#data_lake_principal_identifier GlueCatalogDatabase#data_lake_principal_identifier}
  */
  readonly dataLakePrincipalIdentifier?: string;
}

export function glueCatalogDatabaseCreateTableDefaultPermissionPrincipalToTerraform(struct?: GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference | GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_lake_principal_identifier: cdktf.stringToTerraform(struct!.dataLakePrincipalIdentifier),
  }
}


export function glueCatalogDatabaseCreateTableDefaultPermissionPrincipalToHclTerraform(struct?: GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference | GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal): any {
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

export class GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataLakePrincipalIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLakePrincipalIdentifier = this._dataLakePrincipalIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataLakePrincipalIdentifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataLakePrincipalIdentifier = value.dataLakePrincipalIdentifier;
    }
  }

  // data_lake_principal_identifier - computed: false, optional: true, required: false
  private _dataLakePrincipalIdentifier?: string; 
  public get dataLakePrincipalIdentifier() {
    return this.getStringAttribute('data_lake_principal_identifier');
  }
  public set dataLakePrincipalIdentifier(value: string) {
    this._dataLakePrincipalIdentifier = value;
  }
  public resetDataLakePrincipalIdentifier() {
    this._dataLakePrincipalIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLakePrincipalIdentifierInput() {
    return this._dataLakePrincipalIdentifier;
  }
}
export interface GlueCatalogDatabaseCreateTableDefaultPermission {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_database#permissions GlueCatalogDatabase#permissions}
  */
  readonly permissions?: string[];
  /**
  * principal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_database#principal GlueCatalogDatabase#principal}
  */
  readonly principal?: GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal;
}

export function glueCatalogDatabaseCreateTableDefaultPermissionToTerraform(struct?: GlueCatalogDatabaseCreateTableDefaultPermission | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissions),
    principal: glueCatalogDatabaseCreateTableDefaultPermissionPrincipalToTerraform(struct!.principal),
  }
}


export function glueCatalogDatabaseCreateTableDefaultPermissionToHclTerraform(struct?: GlueCatalogDatabaseCreateTableDefaultPermission | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permissions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permissions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    principal: {
      value: glueCatalogDatabaseCreateTableDefaultPermissionPrincipalToHclTerraform(struct!.principal),
      isBlock: true,
      type: "list",
      storageClassType: "GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GlueCatalogDatabaseCreateTableDefaultPermission | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    if (this._principal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogDatabaseCreateTableDefaultPermission | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._permissions = undefined;
      this._principal.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._permissions = value.permissions;
      this._principal.internalValue = value.principal;
    }
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string[]; 
  public get permissions() {
    return cdktf.Fn.tolist(this.getListAttribute('permissions'));
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // principal - computed: false, optional: true, required: false
  private _principal = new GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference(this, "principal");
  public get principal() {
    return this._principal;
  }
  public putPrincipal(value: GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal) {
    this._principal.internalValue = value;
  }
  public resetPrincipal() {
    this._principal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal.internalValue;
  }
}

export class GlueCatalogDatabaseCreateTableDefaultPermissionList extends cdktf.ComplexList {
  public internalValue? : GlueCatalogDatabaseCreateTableDefaultPermission[] | cdktf.IResolvable

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
  public get(index: number): GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference {
    return new GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueCatalogDatabaseFederatedDatabase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_database#connection_name GlueCatalogDatabase#connection_name}
  */
  readonly connectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_database#identifier GlueCatalogDatabase#identifier}
  */
  readonly identifier?: string;
}

export function glueCatalogDatabaseFederatedDatabaseToTerraform(struct?: GlueCatalogDatabaseFederatedDatabaseOutputReference | GlueCatalogDatabaseFederatedDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_name: cdktf.stringToTerraform(struct!.connectionName),
    identifier: cdktf.stringToTerraform(struct!.identifier),
  }
}


export function glueCatalogDatabaseFederatedDatabaseToHclTerraform(struct?: GlueCatalogDatabaseFederatedDatabaseOutputReference | GlueCatalogDatabaseFederatedDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_name: {
      value: cdktf.stringToHclTerraform(struct!.connectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identifier: {
      value: cdktf.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogDatabaseFederatedDatabaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueCatalogDatabaseFederatedDatabase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionName = this._connectionName;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogDatabaseFederatedDatabase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionName = undefined;
      this._identifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionName = value.connectionName;
      this._identifier = value.identifier;
    }
  }

  // connection_name - computed: false, optional: true, required: false
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  public resetConnectionName() {
    this._connectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // identifier - computed: false, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }
}
export interface GlueCatalogDatabaseTargetDatabase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_database#catalog_id GlueCatalogDatabase#catalog_id}
  */
  readonly catalogId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_database#database_name GlueCatalogDatabase#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_database#region GlueCatalogDatabase#region}
  */
  readonly region?: string;
}

export function glueCatalogDatabaseTargetDatabaseToTerraform(struct?: GlueCatalogDatabaseTargetDatabaseOutputReference | GlueCatalogDatabaseTargetDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function glueCatalogDatabaseTargetDatabaseToHclTerraform(struct?: GlueCatalogDatabaseTargetDatabaseOutputReference | GlueCatalogDatabaseTargetDatabase): any {
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

export class GlueCatalogDatabaseTargetDatabaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlueCatalogDatabaseTargetDatabase | undefined {
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
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogDatabaseTargetDatabase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalogId = undefined;
      this._databaseName = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalogId = value.catalogId;
      this._databaseName = value.databaseName;
      this._region = value.region;
    }
  }

  // catalog_id - computed: false, optional: false, required: true
  private _catalogId?: string; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_database aws_glue_catalog_database}
*/
export class GlueCatalogDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_glue_catalog_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlueCatalogDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlueCatalogDatabase to import
  * @param importFromId The id of the existing GlueCatalogDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlueCatalogDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_glue_catalog_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/glue_catalog_database aws_glue_catalog_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlueCatalogDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: GlueCatalogDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_catalog_database',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.9.0',
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
    this._description = config.description;
    this._id = config.id;
    this._locationUri = config.locationUri;
    this._name = config.name;
    this._parameters = config.parameters;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._createTableDefaultPermission.internalValue = config.createTableDefaultPermission;
    this._federatedDatabase.internalValue = config.federatedDatabase;
    this._targetDatabase.internalValue = config.targetDatabase;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // location_uri - computed: true, optional: true, required: false
  private _locationUri?: string; 
  public get locationUri() {
    return this.getStringAttribute('location_uri');
  }
  public set locationUri(value: string) {
    this._locationUri = value;
  }
  public resetLocationUri() {
    this._locationUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationUriInput() {
    return this._locationUri;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
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

  // create_table_default_permission - computed: false, optional: true, required: false
  private _createTableDefaultPermission = new GlueCatalogDatabaseCreateTableDefaultPermissionList(this, "create_table_default_permission", false);
  public get createTableDefaultPermission() {
    return this._createTableDefaultPermission;
  }
  public putCreateTableDefaultPermission(value: GlueCatalogDatabaseCreateTableDefaultPermission[] | cdktf.IResolvable) {
    this._createTableDefaultPermission.internalValue = value;
  }
  public resetCreateTableDefaultPermission() {
    this._createTableDefaultPermission.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTableDefaultPermissionInput() {
    return this._createTableDefaultPermission.internalValue;
  }

  // federated_database - computed: false, optional: true, required: false
  private _federatedDatabase = new GlueCatalogDatabaseFederatedDatabaseOutputReference(this, "federated_database");
  public get federatedDatabase() {
    return this._federatedDatabase;
  }
  public putFederatedDatabase(value: GlueCatalogDatabaseFederatedDatabase) {
    this._federatedDatabase.internalValue = value;
  }
  public resetFederatedDatabase() {
    this._federatedDatabase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get federatedDatabaseInput() {
    return this._federatedDatabase.internalValue;
  }

  // target_database - computed: false, optional: true, required: false
  private _targetDatabase = new GlueCatalogDatabaseTargetDatabaseOutputReference(this, "target_database");
  public get targetDatabase() {
    return this._targetDatabase;
  }
  public putTargetDatabase(value: GlueCatalogDatabaseTargetDatabase) {
    this._targetDatabase.internalValue = value;
  }
  public resetTargetDatabase() {
    this._targetDatabase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDatabaseInput() {
    return this._targetDatabase.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: cdktf.stringToTerraform(this._catalogId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      location_uri: cdktf.stringToTerraform(this._locationUri),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._parameters),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      create_table_default_permission: cdktf.listMapper(glueCatalogDatabaseCreateTableDefaultPermissionToTerraform, true)(this._createTableDefaultPermission.internalValue),
      federated_database: glueCatalogDatabaseFederatedDatabaseToTerraform(this._federatedDatabase.internalValue),
      target_database: glueCatalogDatabaseTargetDatabaseToTerraform(this._targetDatabase.internalValue),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      location_uri: {
        value: cdktf.stringToHclTerraform(this._locationUri),
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
      parameters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._parameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      create_table_default_permission: {
        value: cdktf.listMapperHcl(glueCatalogDatabaseCreateTableDefaultPermissionToHclTerraform, true)(this._createTableDefaultPermission.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueCatalogDatabaseCreateTableDefaultPermissionList",
      },
      federated_database: {
        value: glueCatalogDatabaseFederatedDatabaseToHclTerraform(this._federatedDatabase.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueCatalogDatabaseFederatedDatabaseList",
      },
      target_database: {
        value: glueCatalogDatabaseTargetDatabaseToHclTerraform(this._targetDatabase.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueCatalogDatabaseTargetDatabaseList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
