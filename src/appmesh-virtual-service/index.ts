/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppmeshVirtualServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_service#id AppmeshVirtualService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_service#mesh_name AppmeshVirtualService#mesh_name}
  */
  readonly meshName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_service#mesh_owner AppmeshVirtualService#mesh_owner}
  */
  readonly meshOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_service#name AppmeshVirtualService#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_service#region AppmeshVirtualService#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_service#tags AppmeshVirtualService#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_service#tags_all AppmeshVirtualService#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_service#spec AppmeshVirtualService#spec}
  */
  readonly spec: AppmeshVirtualServiceSpec;
}
export interface AppmeshVirtualServiceSpecProviderVirtualNode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_service#virtual_node_name AppmeshVirtualService#virtual_node_name}
  */
  readonly virtualNodeName: string;
}

export function appmeshVirtualServiceSpecProviderVirtualNodeToTerraform(struct?: AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference | AppmeshVirtualServiceSpecProviderVirtualNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_node_name: cdktf.stringToTerraform(struct!.virtualNodeName),
  }
}


export function appmeshVirtualServiceSpecProviderVirtualNodeToHclTerraform(struct?: AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference | AppmeshVirtualServiceSpecProviderVirtualNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    virtual_node_name: {
      value: cdktf.stringToHclTerraform(struct!.virtualNodeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualServiceSpecProviderVirtualNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualNodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNodeName = this._virtualNodeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualServiceSpecProviderVirtualNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._virtualNodeName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._virtualNodeName = value.virtualNodeName;
    }
  }

  // virtual_node_name - computed: false, optional: false, required: true
  private _virtualNodeName?: string; 
  public get virtualNodeName() {
    return this.getStringAttribute('virtual_node_name');
  }
  public set virtualNodeName(value: string) {
    this._virtualNodeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNodeNameInput() {
    return this._virtualNodeName;
  }
}
export interface AppmeshVirtualServiceSpecProviderVirtualRouter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_service#virtual_router_name AppmeshVirtualService#virtual_router_name}
  */
  readonly virtualRouterName: string;
}

export function appmeshVirtualServiceSpecProviderVirtualRouterToTerraform(struct?: AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference | AppmeshVirtualServiceSpecProviderVirtualRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_router_name: cdktf.stringToTerraform(struct!.virtualRouterName),
  }
}


export function appmeshVirtualServiceSpecProviderVirtualRouterToHclTerraform(struct?: AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference | AppmeshVirtualServiceSpecProviderVirtualRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    virtual_router_name: {
      value: cdktf.stringToHclTerraform(struct!.virtualRouterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualServiceSpecProviderVirtualRouter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualRouterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualRouterName = this._virtualRouterName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualServiceSpecProviderVirtualRouter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._virtualRouterName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._virtualRouterName = value.virtualRouterName;
    }
  }

  // virtual_router_name - computed: false, optional: false, required: true
  private _virtualRouterName?: string; 
  public get virtualRouterName() {
    return this.getStringAttribute('virtual_router_name');
  }
  public set virtualRouterName(value: string) {
    this._virtualRouterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualRouterNameInput() {
    return this._virtualRouterName;
  }
}
export interface AppmeshVirtualServiceSpecProvider {
  /**
  * virtual_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_service#virtual_node AppmeshVirtualService#virtual_node}
  */
  readonly virtualNode?: AppmeshVirtualServiceSpecProviderVirtualNode;
  /**
  * virtual_router block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_service#virtual_router AppmeshVirtualService#virtual_router}
  */
  readonly virtualRouter?: AppmeshVirtualServiceSpecProviderVirtualRouter;
}

export function appmeshVirtualServiceSpecProviderToTerraform(struct?: AppmeshVirtualServiceSpecProviderOutputReference | AppmeshVirtualServiceSpecProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_node: appmeshVirtualServiceSpecProviderVirtualNodeToTerraform(struct!.virtualNode),
    virtual_router: appmeshVirtualServiceSpecProviderVirtualRouterToTerraform(struct!.virtualRouter),
  }
}


export function appmeshVirtualServiceSpecProviderToHclTerraform(struct?: AppmeshVirtualServiceSpecProviderOutputReference | AppmeshVirtualServiceSpecProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    virtual_node: {
      value: appmeshVirtualServiceSpecProviderVirtualNodeToHclTerraform(struct!.virtualNode),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualServiceSpecProviderVirtualNodeList",
    },
    virtual_router: {
      value: appmeshVirtualServiceSpecProviderVirtualRouterToHclTerraform(struct!.virtualRouter),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualServiceSpecProviderVirtualRouterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualServiceSpecProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualServiceSpecProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualNode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNode = this._virtualNode?.internalValue;
    }
    if (this._virtualRouter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualRouter = this._virtualRouter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualServiceSpecProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._virtualNode.internalValue = undefined;
      this._virtualRouter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._virtualNode.internalValue = value.virtualNode;
      this._virtualRouter.internalValue = value.virtualRouter;
    }
  }

  // virtual_node - computed: false, optional: true, required: false
  private _virtualNode = new AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference(this, "virtual_node");
  public get virtualNode() {
    return this._virtualNode;
  }
  public putVirtualNode(value: AppmeshVirtualServiceSpecProviderVirtualNode) {
    this._virtualNode.internalValue = value;
  }
  public resetVirtualNode() {
    this._virtualNode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNodeInput() {
    return this._virtualNode.internalValue;
  }

  // virtual_router - computed: false, optional: true, required: false
  private _virtualRouter = new AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference(this, "virtual_router");
  public get virtualRouter() {
    return this._virtualRouter;
  }
  public putVirtualRouter(value: AppmeshVirtualServiceSpecProviderVirtualRouter) {
    this._virtualRouter.internalValue = value;
  }
  public resetVirtualRouter() {
    this._virtualRouter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualRouterInput() {
    return this._virtualRouter.internalValue;
  }
}
export interface AppmeshVirtualServiceSpec {
  /**
  * provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_service#provider AppmeshVirtualService#provider}
  */
  readonly provider?: AppmeshVirtualServiceSpecProvider;
}

export function appmeshVirtualServiceSpecToTerraform(struct?: AppmeshVirtualServiceSpecOutputReference | AppmeshVirtualServiceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: appmeshVirtualServiceSpecProviderToTerraform(struct!.provider),
  }
}


export function appmeshVirtualServiceSpecToHclTerraform(struct?: AppmeshVirtualServiceSpecOutputReference | AppmeshVirtualServiceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: appmeshVirtualServiceSpecProviderToHclTerraform(struct!.provider),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshVirtualServiceSpecProviderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshVirtualServiceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshVirtualServiceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualServiceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider.internalValue = value.provider;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider = new AppmeshVirtualServiceSpecProviderOutputReference(this, "provider");
  public get provider() {
    return this._provider;
  }
  public putProvider(value: AppmeshVirtualServiceSpecProvider) {
    this._provider.internalValue = value;
  }
  public resetProvider() {
    this._provider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_service aws_appmesh_virtual_service}
*/
export class AppmeshVirtualService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appmesh_virtual_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppmeshVirtualService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppmeshVirtualService to import
  * @param importFromId The id of the existing AppmeshVirtualService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppmeshVirtualService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_appmesh_virtual_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_virtual_service aws_appmesh_virtual_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppmeshVirtualServiceConfig
  */
  public constructor(scope: Construct, id: string, config: AppmeshVirtualServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appmesh_virtual_service',
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
    this._id = config.id;
    this._meshName = config.meshName;
    this._meshOwner = config.meshOwner;
    this._name = config.name;
    this._region = config.region;
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

  // mesh_name - computed: false, optional: false, required: true
  private _meshName?: string; 
  public get meshName() {
    return this.getStringAttribute('mesh_name');
  }
  public set meshName(value: string) {
    this._meshName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get meshNameInput() {
    return this._meshName;
  }

  // mesh_owner - computed: true, optional: true, required: false
  private _meshOwner?: string; 
  public get meshOwner() {
    return this.getStringAttribute('mesh_owner');
  }
  public set meshOwner(value: string) {
    this._meshOwner = value;
  }
  public resetMeshOwner() {
    this._meshOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshOwnerInput() {
    return this._meshOwner;
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

  // spec - computed: false, optional: false, required: true
  private _spec = new AppmeshVirtualServiceSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: AppmeshVirtualServiceSpec) {
    this._spec.internalValue = value;
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
      mesh_name: cdktf.stringToTerraform(this._meshName),
      mesh_owner: cdktf.stringToTerraform(this._meshOwner),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      spec: appmeshVirtualServiceSpecToTerraform(this._spec.internalValue),
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
      mesh_name: {
        value: cdktf.stringToHclTerraform(this._meshName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mesh_owner: {
        value: cdktf.stringToHclTerraform(this._meshOwner),
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
      spec: {
        value: appmeshVirtualServiceSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppmeshVirtualServiceSpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
