/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/keyspaces_keyspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeyspacesKeyspaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/keyspaces_keyspace#id KeyspacesKeyspace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/keyspaces_keyspace#name KeyspacesKeyspace#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/keyspaces_keyspace#region KeyspacesKeyspace#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/keyspaces_keyspace#tags KeyspacesKeyspace#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/keyspaces_keyspace#tags_all KeyspacesKeyspace#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * replication_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/keyspaces_keyspace#replication_specification KeyspacesKeyspace#replication_specification}
  */
  readonly replicationSpecification?: KeyspacesKeyspaceReplicationSpecification;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/keyspaces_keyspace#timeouts KeyspacesKeyspace#timeouts}
  */
  readonly timeouts?: KeyspacesKeyspaceTimeouts;
}
export interface KeyspacesKeyspaceReplicationSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/keyspaces_keyspace#region_list KeyspacesKeyspace#region_list}
  */
  readonly regionList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/keyspaces_keyspace#replication_strategy KeyspacesKeyspace#replication_strategy}
  */
  readonly replicationStrategy?: string;
}

export function keyspacesKeyspaceReplicationSpecificationToTerraform(struct?: KeyspacesKeyspaceReplicationSpecificationOutputReference | KeyspacesKeyspaceReplicationSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regionList),
    replication_strategy: cdktf.stringToTerraform(struct!.replicationStrategy),
  }
}


export function keyspacesKeyspaceReplicationSpecificationToHclTerraform(struct?: KeyspacesKeyspaceReplicationSpecificationOutputReference | KeyspacesKeyspaceReplicationSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regionList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    replication_strategy: {
      value: cdktf.stringToHclTerraform(struct!.replicationStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KeyspacesKeyspaceReplicationSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KeyspacesKeyspaceReplicationSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regionList !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionList = this._regionList;
    }
    if (this._replicationStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationStrategy = this._replicationStrategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeyspacesKeyspaceReplicationSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._regionList = undefined;
      this._replicationStrategy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._regionList = value.regionList;
      this._replicationStrategy = value.replicationStrategy;
    }
  }

  // region_list - computed: false, optional: true, required: false
  private _regionList?: string[]; 
  public get regionList() {
    return cdktf.Fn.tolist(this.getListAttribute('region_list'));
  }
  public set regionList(value: string[]) {
    this._regionList = value;
  }
  public resetRegionList() {
    this._regionList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionListInput() {
    return this._regionList;
  }

  // replication_strategy - computed: true, optional: true, required: false
  private _replicationStrategy?: string; 
  public get replicationStrategy() {
    return this.getStringAttribute('replication_strategy');
  }
  public set replicationStrategy(value: string) {
    this._replicationStrategy = value;
  }
  public resetReplicationStrategy() {
    this._replicationStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationStrategyInput() {
    return this._replicationStrategy;
  }
}
export interface KeyspacesKeyspaceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/keyspaces_keyspace#create KeyspacesKeyspace#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/keyspaces_keyspace#delete KeyspacesKeyspace#delete}
  */
  readonly delete?: string;
}

export function keyspacesKeyspaceTimeoutsToTerraform(struct?: KeyspacesKeyspaceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function keyspacesKeyspaceTimeoutsToHclTerraform(struct?: KeyspacesKeyspaceTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KeyspacesKeyspaceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeyspacesKeyspaceTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeyspacesKeyspaceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/keyspaces_keyspace aws_keyspaces_keyspace}
*/
export class KeyspacesKeyspace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_keyspaces_keyspace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KeyspacesKeyspace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KeyspacesKeyspace to import
  * @param importFromId The id of the existing KeyspacesKeyspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/keyspaces_keyspace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KeyspacesKeyspace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_keyspaces_keyspace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/keyspaces_keyspace aws_keyspaces_keyspace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeyspacesKeyspaceConfig
  */
  public constructor(scope: Construct, id: string, config: KeyspacesKeyspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_keyspaces_keyspace',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.6.0',
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
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._replicationSpecification.internalValue = config.replicationSpecification;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // replication_specification - computed: false, optional: true, required: false
  private _replicationSpecification = new KeyspacesKeyspaceReplicationSpecificationOutputReference(this, "replication_specification");
  public get replicationSpecification() {
    return this._replicationSpecification;
  }
  public putReplicationSpecification(value: KeyspacesKeyspaceReplicationSpecification) {
    this._replicationSpecification.internalValue = value;
  }
  public resetReplicationSpecification() {
    this._replicationSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationSpecificationInput() {
    return this._replicationSpecification.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KeyspacesKeyspaceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KeyspacesKeyspaceTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      replication_specification: keyspacesKeyspaceReplicationSpecificationToTerraform(this._replicationSpecification.internalValue),
      timeouts: keyspacesKeyspaceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      replication_specification: {
        value: keyspacesKeyspaceReplicationSpecificationToHclTerraform(this._replicationSpecification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KeyspacesKeyspaceReplicationSpecificationList",
      },
      timeouts: {
        value: keyspacesKeyspaceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KeyspacesKeyspaceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
