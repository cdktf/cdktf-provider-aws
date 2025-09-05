/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/data-sources/codecatalyst_dev_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsCodecatalystDevEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/data-sources/codecatalyst_dev_environment#alias DataAwsCodecatalystDevEnvironment#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/data-sources/codecatalyst_dev_environment#creator_id DataAwsCodecatalystDevEnvironment#creator_id}
  */
  readonly creatorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/data-sources/codecatalyst_dev_environment#env_id DataAwsCodecatalystDevEnvironment#env_id}
  */
  readonly envId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/data-sources/codecatalyst_dev_environment#id DataAwsCodecatalystDevEnvironment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/data-sources/codecatalyst_dev_environment#project_name DataAwsCodecatalystDevEnvironment#project_name}
  */
  readonly projectName: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/data-sources/codecatalyst_dev_environment#region DataAwsCodecatalystDevEnvironment#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/data-sources/codecatalyst_dev_environment#space_name DataAwsCodecatalystDevEnvironment#space_name}
  */
  readonly spaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/data-sources/codecatalyst_dev_environment#tags DataAwsCodecatalystDevEnvironment#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * repositories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/data-sources/codecatalyst_dev_environment#repositories DataAwsCodecatalystDevEnvironment#repositories}
  */
  readonly repositories?: DataAwsCodecatalystDevEnvironmentRepositories[] | cdktf.IResolvable;
}
export interface DataAwsCodecatalystDevEnvironmentIdes {
}

export function dataAwsCodecatalystDevEnvironmentIdesToTerraform(struct?: DataAwsCodecatalystDevEnvironmentIdes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsCodecatalystDevEnvironmentIdesToHclTerraform(struct?: DataAwsCodecatalystDevEnvironmentIdes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsCodecatalystDevEnvironmentIdesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsCodecatalystDevEnvironmentIdes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsCodecatalystDevEnvironmentIdes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // runtime - computed: true, optional: false, required: false
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
}

export class DataAwsCodecatalystDevEnvironmentIdesList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsCodecatalystDevEnvironmentIdesOutputReference {
    return new DataAwsCodecatalystDevEnvironmentIdesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsCodecatalystDevEnvironmentPersistentStorage {
}

export function dataAwsCodecatalystDevEnvironmentPersistentStorageToTerraform(struct?: DataAwsCodecatalystDevEnvironmentPersistentStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsCodecatalystDevEnvironmentPersistentStorageToHclTerraform(struct?: DataAwsCodecatalystDevEnvironmentPersistentStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsCodecatalystDevEnvironmentPersistentStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsCodecatalystDevEnvironmentPersistentStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }
}

export class DataAwsCodecatalystDevEnvironmentPersistentStorageList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference {
    return new DataAwsCodecatalystDevEnvironmentPersistentStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsCodecatalystDevEnvironmentRepositories {
}

export function dataAwsCodecatalystDevEnvironmentRepositoriesToTerraform(struct?: DataAwsCodecatalystDevEnvironmentRepositories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsCodecatalystDevEnvironmentRepositoriesToHclTerraform(struct?: DataAwsCodecatalystDevEnvironmentRepositories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsCodecatalystDevEnvironmentRepositories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsCodecatalystDevEnvironmentRepositories | cdktf.IResolvable | undefined) {
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

  // branch_name - computed: true, optional: false, required: false
  public get branchName() {
    return this.getStringAttribute('branch_name');
  }

  // repository_name - computed: true, optional: false, required: false
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }
}

export class DataAwsCodecatalystDevEnvironmentRepositoriesList extends cdktf.ComplexList {
  public internalValue? : DataAwsCodecatalystDevEnvironmentRepositories[] | cdktf.IResolvable

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
  public get(index: number): DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference {
    return new DataAwsCodecatalystDevEnvironmentRepositoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/data-sources/codecatalyst_dev_environment aws_codecatalyst_dev_environment}
*/
export class DataAwsCodecatalystDevEnvironment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_codecatalyst_dev_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsCodecatalystDevEnvironment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsCodecatalystDevEnvironment to import
  * @param importFromId The id of the existing DataAwsCodecatalystDevEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/data-sources/codecatalyst_dev_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsCodecatalystDevEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_codecatalyst_dev_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/data-sources/codecatalyst_dev_environment aws_codecatalyst_dev_environment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsCodecatalystDevEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsCodecatalystDevEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codecatalyst_dev_environment',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.12.0',
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
    this._alias = config.alias;
    this._creatorId = config.creatorId;
    this._envId = config.envId;
    this._id = config.id;
    this._projectName = config.projectName;
    this._region = config.region;
    this._spaceName = config.spaceName;
    this._tags = config.tags;
    this._repositories.internalValue = config.repositories;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // creator_id - computed: false, optional: true, required: false
  private _creatorId?: string; 
  public get creatorId() {
    return this.getStringAttribute('creator_id');
  }
  public set creatorId(value: string) {
    this._creatorId = value;
  }
  public resetCreatorId() {
    this._creatorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creatorIdInput() {
    return this._creatorId;
  }

  // env_id - computed: false, optional: false, required: true
  private _envId?: string; 
  public get envId() {
    return this.getStringAttribute('env_id');
  }
  public set envId(value: string) {
    this._envId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envIdInput() {
    return this._envId;
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

  // ides - computed: true, optional: false, required: false
  private _ides = new DataAwsCodecatalystDevEnvironmentIdesList(this, "ides", false);
  public get ides() {
    return this._ides;
  }

  // inactivity_timeout_minutes - computed: true, optional: false, required: false
  public get inactivityTimeoutMinutes() {
    return this.getNumberAttribute('inactivity_timeout_minutes');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // persistent_storage - computed: true, optional: false, required: false
  private _persistentStorage = new DataAwsCodecatalystDevEnvironmentPersistentStorageList(this, "persistent_storage", false);
  public get persistentStorage() {
    return this._persistentStorage;
  }

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
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

  // space_name - computed: false, optional: false, required: true
  private _spaceName?: string; 
  public get spaceName() {
    return this.getStringAttribute('space_name');
  }
  public set spaceName(value: string) {
    this._spaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceNameInput() {
    return this._spaceName;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }

  // tags - computed: true, optional: true, required: false
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

  // repositories - computed: false, optional: true, required: false
  private _repositories = new DataAwsCodecatalystDevEnvironmentRepositoriesList(this, "repositories", false);
  public get repositories() {
    return this._repositories;
  }
  public putRepositories(value: DataAwsCodecatalystDevEnvironmentRepositories[] | cdktf.IResolvable) {
    this._repositories.internalValue = value;
  }
  public resetRepositories() {
    this._repositories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoriesInput() {
    return this._repositories.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      creator_id: cdktf.stringToTerraform(this._creatorId),
      env_id: cdktf.stringToTerraform(this._envId),
      id: cdktf.stringToTerraform(this._id),
      project_name: cdktf.stringToTerraform(this._projectName),
      region: cdktf.stringToTerraform(this._region),
      space_name: cdktf.stringToTerraform(this._spaceName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      repositories: cdktf.listMapper(dataAwsCodecatalystDevEnvironmentRepositoriesToTerraform, true)(this._repositories.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      creator_id: {
        value: cdktf.stringToHclTerraform(this._creatorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      env_id: {
        value: cdktf.stringToHclTerraform(this._envId),
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
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
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
      space_name: {
        value: cdktf.stringToHclTerraform(this._spaceName),
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
      repositories: {
        value: cdktf.listMapperHcl(dataAwsCodecatalystDevEnvironmentRepositoriesToHclTerraform, true)(this._repositories.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsCodecatalystDevEnvironmentRepositoriesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
