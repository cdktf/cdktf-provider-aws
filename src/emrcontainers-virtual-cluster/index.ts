/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/emrcontainers_virtual_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmrcontainersVirtualClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/emrcontainers_virtual_cluster#id EmrcontainersVirtualCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/emrcontainers_virtual_cluster#name EmrcontainersVirtualCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/emrcontainers_virtual_cluster#tags EmrcontainersVirtualCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/emrcontainers_virtual_cluster#tags_all EmrcontainersVirtualCluster#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * container_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/emrcontainers_virtual_cluster#container_provider EmrcontainersVirtualCluster#container_provider}
  */
  readonly containerProvider: EmrcontainersVirtualClusterContainerProvider;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/emrcontainers_virtual_cluster#timeouts EmrcontainersVirtualCluster#timeouts}
  */
  readonly timeouts?: EmrcontainersVirtualClusterTimeouts;
}
export interface EmrcontainersVirtualClusterContainerProviderInfoEksInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/emrcontainers_virtual_cluster#namespace EmrcontainersVirtualCluster#namespace}
  */
  readonly namespace?: string;
}

export function emrcontainersVirtualClusterContainerProviderInfoEksInfoToTerraform(struct?: EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference | EmrcontainersVirtualClusterContainerProviderInfoEksInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function emrcontainersVirtualClusterContainerProviderInfoEksInfoToHclTerraform(struct?: EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference | EmrcontainersVirtualClusterContainerProviderInfoEksInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrcontainersVirtualClusterContainerProviderInfoEksInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrcontainersVirtualClusterContainerProviderInfoEksInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespace = value.namespace;
    }
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface EmrcontainersVirtualClusterContainerProviderInfo {
  /**
  * eks_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/emrcontainers_virtual_cluster#eks_info EmrcontainersVirtualCluster#eks_info}
  */
  readonly eksInfo: EmrcontainersVirtualClusterContainerProviderInfoEksInfo;
}

export function emrcontainersVirtualClusterContainerProviderInfoToTerraform(struct?: EmrcontainersVirtualClusterContainerProviderInfoOutputReference | EmrcontainersVirtualClusterContainerProviderInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eks_info: emrcontainersVirtualClusterContainerProviderInfoEksInfoToTerraform(struct!.eksInfo),
  }
}


export function emrcontainersVirtualClusterContainerProviderInfoToHclTerraform(struct?: EmrcontainersVirtualClusterContainerProviderInfoOutputReference | EmrcontainersVirtualClusterContainerProviderInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eks_info: {
      value: emrcontainersVirtualClusterContainerProviderInfoEksInfoToHclTerraform(struct!.eksInfo),
      isBlock: true,
      type: "list",
      storageClassType: "EmrcontainersVirtualClusterContainerProviderInfoEksInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrcontainersVirtualClusterContainerProviderInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrcontainersVirtualClusterContainerProviderInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eksInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eksInfo = this._eksInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrcontainersVirtualClusterContainerProviderInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eksInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eksInfo.internalValue = value.eksInfo;
    }
  }

  // eks_info - computed: false, optional: false, required: true
  private _eksInfo = new EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference(this, "eks_info");
  public get eksInfo() {
    return this._eksInfo;
  }
  public putEksInfo(value: EmrcontainersVirtualClusterContainerProviderInfoEksInfo) {
    this._eksInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eksInfoInput() {
    return this._eksInfo.internalValue;
  }
}
export interface EmrcontainersVirtualClusterContainerProvider {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/emrcontainers_virtual_cluster#id EmrcontainersVirtualCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/emrcontainers_virtual_cluster#type EmrcontainersVirtualCluster#type}
  */
  readonly type: string;
  /**
  * info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/emrcontainers_virtual_cluster#info EmrcontainersVirtualCluster#info}
  */
  readonly info: EmrcontainersVirtualClusterContainerProviderInfo;
}

export function emrcontainersVirtualClusterContainerProviderToTerraform(struct?: EmrcontainersVirtualClusterContainerProviderOutputReference | EmrcontainersVirtualClusterContainerProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
    info: emrcontainersVirtualClusterContainerProviderInfoToTerraform(struct!.info),
  }
}


export function emrcontainersVirtualClusterContainerProviderToHclTerraform(struct?: EmrcontainersVirtualClusterContainerProviderOutputReference | EmrcontainersVirtualClusterContainerProvider): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    info: {
      value: emrcontainersVirtualClusterContainerProviderInfoToHclTerraform(struct!.info),
      isBlock: true,
      type: "list",
      storageClassType: "EmrcontainersVirtualClusterContainerProviderInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrcontainersVirtualClusterContainerProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrcontainersVirtualClusterContainerProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._info?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.info = this._info?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrcontainersVirtualClusterContainerProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
      this._info.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
      this._info.internalValue = value.info;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // info - computed: false, optional: false, required: true
  private _info = new EmrcontainersVirtualClusterContainerProviderInfoOutputReference(this, "info");
  public get info() {
    return this._info;
  }
  public putInfo(value: EmrcontainersVirtualClusterContainerProviderInfo) {
    this._info.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info.internalValue;
  }
}
export interface EmrcontainersVirtualClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/emrcontainers_virtual_cluster#delete EmrcontainersVirtualCluster#delete}
  */
  readonly delete?: string;
}

export function emrcontainersVirtualClusterTimeoutsToTerraform(struct?: EmrcontainersVirtualClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function emrcontainersVirtualClusterTimeoutsToHclTerraform(struct?: EmrcontainersVirtualClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class EmrcontainersVirtualClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EmrcontainersVirtualClusterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrcontainersVirtualClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delete = value.delete;
    }
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/emrcontainers_virtual_cluster aws_emrcontainers_virtual_cluster}
*/
export class EmrcontainersVirtualCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_emrcontainers_virtual_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EmrcontainersVirtualCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EmrcontainersVirtualCluster to import
  * @param importFromId The id of the existing EmrcontainersVirtualCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/emrcontainers_virtual_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EmrcontainersVirtualCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_emrcontainers_virtual_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/emrcontainers_virtual_cluster aws_emrcontainers_virtual_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmrcontainersVirtualClusterConfig
  */
  public constructor(scope: Construct, id: string, config: EmrcontainersVirtualClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_emrcontainers_virtual_cluster',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.67.0',
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
    this._containerProvider.internalValue = config.containerProvider;
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

  // container_provider - computed: false, optional: false, required: true
  private _containerProvider = new EmrcontainersVirtualClusterContainerProviderOutputReference(this, "container_provider");
  public get containerProvider() {
    return this._containerProvider;
  }
  public putContainerProvider(value: EmrcontainersVirtualClusterContainerProvider) {
    this._containerProvider.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerProviderInput() {
    return this._containerProvider.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EmrcontainersVirtualClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EmrcontainersVirtualClusterTimeouts) {
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
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      container_provider: emrcontainersVirtualClusterContainerProviderToTerraform(this._containerProvider.internalValue),
      timeouts: emrcontainersVirtualClusterTimeoutsToTerraform(this._timeouts.internalValue),
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
      container_provider: {
        value: emrcontainersVirtualClusterContainerProviderToHclTerraform(this._containerProvider.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmrcontainersVirtualClusterContainerProviderList",
      },
      timeouts: {
        value: emrcontainersVirtualClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EmrcontainersVirtualClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
