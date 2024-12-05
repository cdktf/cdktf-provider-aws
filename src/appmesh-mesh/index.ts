/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/appmesh_mesh
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppmeshMeshConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/appmesh_mesh#id AppmeshMesh#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/appmesh_mesh#name AppmeshMesh#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/appmesh_mesh#tags AppmeshMesh#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/appmesh_mesh#tags_all AppmeshMesh#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/appmesh_mesh#spec AppmeshMesh#spec}
  */
  readonly spec?: AppmeshMeshSpec;
}
export interface AppmeshMeshSpecEgressFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/appmesh_mesh#type AppmeshMesh#type}
  */
  readonly type?: string;
}

export function appmeshMeshSpecEgressFilterToTerraform(struct?: AppmeshMeshSpecEgressFilterOutputReference | AppmeshMeshSpecEgressFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function appmeshMeshSpecEgressFilterToHclTerraform(struct?: AppmeshMeshSpecEgressFilterOutputReference | AppmeshMeshSpecEgressFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshMeshSpecEgressFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshMeshSpecEgressFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshMeshSpecEgressFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface AppmeshMeshSpecServiceDiscovery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/appmesh_mesh#ip_preference AppmeshMesh#ip_preference}
  */
  readonly ipPreference?: string;
}

export function appmeshMeshSpecServiceDiscoveryToTerraform(struct?: AppmeshMeshSpecServiceDiscoveryOutputReference | AppmeshMeshSpecServiceDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_preference: cdktf.stringToTerraform(struct!.ipPreference),
  }
}


export function appmeshMeshSpecServiceDiscoveryToHclTerraform(struct?: AppmeshMeshSpecServiceDiscoveryOutputReference | AppmeshMeshSpecServiceDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_preference: {
      value: cdktf.stringToHclTerraform(struct!.ipPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshMeshSpecServiceDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshMeshSpecServiceDiscovery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPreference = this._ipPreference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshMeshSpecServiceDiscovery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipPreference = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipPreference = value.ipPreference;
    }
  }

  // ip_preference - computed: false, optional: true, required: false
  private _ipPreference?: string; 
  public get ipPreference() {
    return this.getStringAttribute('ip_preference');
  }
  public set ipPreference(value: string) {
    this._ipPreference = value;
  }
  public resetIpPreference() {
    this._ipPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPreferenceInput() {
    return this._ipPreference;
  }
}
export interface AppmeshMeshSpec {
  /**
  * egress_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/appmesh_mesh#egress_filter AppmeshMesh#egress_filter}
  */
  readonly egressFilter?: AppmeshMeshSpecEgressFilter;
  /**
  * service_discovery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/appmesh_mesh#service_discovery AppmeshMesh#service_discovery}
  */
  readonly serviceDiscovery?: AppmeshMeshSpecServiceDiscovery;
}

export function appmeshMeshSpecToTerraform(struct?: AppmeshMeshSpecOutputReference | AppmeshMeshSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress_filter: appmeshMeshSpecEgressFilterToTerraform(struct!.egressFilter),
    service_discovery: appmeshMeshSpecServiceDiscoveryToTerraform(struct!.serviceDiscovery),
  }
}


export function appmeshMeshSpecToHclTerraform(struct?: AppmeshMeshSpecOutputReference | AppmeshMeshSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egress_filter: {
      value: appmeshMeshSpecEgressFilterToHclTerraform(struct!.egressFilter),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshMeshSpecEgressFilterList",
    },
    service_discovery: {
      value: appmeshMeshSpecServiceDiscoveryToHclTerraform(struct!.serviceDiscovery),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshMeshSpecServiceDiscoveryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshMeshSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshMeshSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egressFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressFilter = this._egressFilter?.internalValue;
    }
    if (this._serviceDiscovery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDiscovery = this._serviceDiscovery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshMeshSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._egressFilter.internalValue = undefined;
      this._serviceDiscovery.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._egressFilter.internalValue = value.egressFilter;
      this._serviceDiscovery.internalValue = value.serviceDiscovery;
    }
  }

  // egress_filter - computed: false, optional: true, required: false
  private _egressFilter = new AppmeshMeshSpecEgressFilterOutputReference(this, "egress_filter");
  public get egressFilter() {
    return this._egressFilter;
  }
  public putEgressFilter(value: AppmeshMeshSpecEgressFilter) {
    this._egressFilter.internalValue = value;
  }
  public resetEgressFilter() {
    this._egressFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressFilterInput() {
    return this._egressFilter.internalValue;
  }

  // service_discovery - computed: false, optional: true, required: false
  private _serviceDiscovery = new AppmeshMeshSpecServiceDiscoveryOutputReference(this, "service_discovery");
  public get serviceDiscovery() {
    return this._serviceDiscovery;
  }
  public putServiceDiscovery(value: AppmeshMeshSpecServiceDiscovery) {
    this._serviceDiscovery.internalValue = value;
  }
  public resetServiceDiscovery() {
    this._serviceDiscovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDiscoveryInput() {
    return this._serviceDiscovery.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/appmesh_mesh aws_appmesh_mesh}
*/
export class AppmeshMesh extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appmesh_mesh";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppmeshMesh resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppmeshMesh to import
  * @param importFromId The id of the existing AppmeshMesh that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/appmesh_mesh#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppmeshMesh to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_appmesh_mesh", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/appmesh_mesh aws_appmesh_mesh} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppmeshMeshConfig
  */
  public constructor(scope: Construct, id: string, config: AppmeshMeshConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appmesh_mesh',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.80.0',
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
    this._id = config.id;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
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

  // last_updated_date - computed: true, optional: false, required: false
  public get lastUpdatedDate() {
    return this.getStringAttribute('last_updated_date');
  }

  // mesh_owner - computed: true, optional: false, required: false
  public get meshOwner() {
    return this.getStringAttribute('mesh_owner');
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

  // resource_owner - computed: true, optional: false, required: false
  public get resourceOwner() {
    return this.getStringAttribute('resource_owner');
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

  // spec - computed: false, optional: true, required: false
  private _spec = new AppmeshMeshSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: AppmeshMeshSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      spec: appmeshMeshSpecToTerraform(this._spec.internalValue),
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
      spec: {
        value: appmeshMeshSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppmeshMeshSpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
