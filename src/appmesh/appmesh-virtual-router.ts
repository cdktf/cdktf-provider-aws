// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* App Mesh
*/
export interface AppmeshVirtualRouterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#mesh_name AppmeshVirtualRouter#mesh_name}
  */
  readonly meshName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#mesh_owner AppmeshVirtualRouter#mesh_owner}
  */
  readonly meshOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#name AppmeshVirtualRouter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#tags AppmeshVirtualRouter#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#tags_all AppmeshVirtualRouter#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#spec AppmeshVirtualRouter#spec}
  */
  readonly spec: AppmeshVirtualRouterSpec;
}
export interface AppmeshVirtualRouterSpecListenerPortMapping {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#port AppmeshVirtualRouter#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#protocol AppmeshVirtualRouter#protocol}
  */
  readonly protocol: string;
}

export function appmeshVirtualRouterSpecListenerPortMappingToTerraform(struct?: AppmeshVirtualRouterSpecListenerPortMappingOutputReference | AppmeshVirtualRouterSpecListenerPortMapping): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export class AppmeshVirtualRouterSpecListenerPortMappingOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): AppmeshVirtualRouterSpecListenerPortMapping | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._port) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualRouterSpecListenerPortMapping | undefined) {
    if (value === undefined) {
      this._port = undefined;
      this._protocol = undefined;
    }
    else {
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}
export interface AppmeshVirtualRouterSpecListener {
  /**
  * port_mapping block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#port_mapping AppmeshVirtualRouter#port_mapping}
  */
  readonly portMapping: AppmeshVirtualRouterSpecListenerPortMapping;
}

export function appmeshVirtualRouterSpecListenerToTerraform(struct?: AppmeshVirtualRouterSpecListenerOutputReference | AppmeshVirtualRouterSpecListener): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_mapping: appmeshVirtualRouterSpecListenerPortMappingToTerraform(struct!.portMapping),
  }
}

export class AppmeshVirtualRouterSpecListenerOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): AppmeshVirtualRouterSpecListener | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._portMapping) {
      hasAnyValues = true;
      internalValueResult.portMapping = this._portMapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualRouterSpecListener | undefined) {
    if (value === undefined) {
      this._portMapping.internalValue = undefined;
    }
    else {
      this._portMapping.internalValue = value.portMapping;
    }
  }

  // port_mapping - computed: false, optional: false, required: true
  private _portMapping = new AppmeshVirtualRouterSpecListenerPortMappingOutputReference(this as any, "port_mapping", true);
  public get portMapping() {
    return this._portMapping;
  }
  public putPortMapping(value: AppmeshVirtualRouterSpecListenerPortMapping) {
    this._portMapping.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portMappingInput() {
    return this._portMapping.internalValue;
  }
}
export interface AppmeshVirtualRouterSpec {
  /**
  * listener block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#listener AppmeshVirtualRouter#listener}
  */
  readonly listener: AppmeshVirtualRouterSpecListener;
}

export function appmeshVirtualRouterSpecToTerraform(struct?: AppmeshVirtualRouterSpecOutputReference | AppmeshVirtualRouterSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listener: appmeshVirtualRouterSpecListenerToTerraform(struct!.listener),
  }
}

export class AppmeshVirtualRouterSpecOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): AppmeshVirtualRouterSpec | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._listener) {
      hasAnyValues = true;
      internalValueResult.listener = this._listener?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshVirtualRouterSpec | undefined) {
    if (value === undefined) {
      this._listener.internalValue = undefined;
    }
    else {
      this._listener.internalValue = value.listener;
    }
  }

  // listener - computed: false, optional: false, required: true
  private _listener = new AppmeshVirtualRouterSpecListenerOutputReference(this as any, "listener", true);
  public get listener() {
    return this._listener;
  }
  public putListener(value: AppmeshVirtualRouterSpecListener) {
    this._listener.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerInput() {
    return this._listener.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html aws_appmesh_virtual_router}
*/
export class AppmeshVirtualRouter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_appmesh_virtual_router";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html aws_appmesh_virtual_router} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppmeshVirtualRouterConfig
  */
  public constructor(scope: Construct, id: string, config: AppmeshVirtualRouterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appmesh_virtual_router',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._meshName = config.meshName;
    this._meshOwner = config.meshOwner;
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
  public get id() {
    return this.getStringAttribute('id');
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

  // resource_owner - computed: true, optional: false, required: false
  public get resourceOwner() {
    return this.getStringAttribute('resource_owner');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _spec = new AppmeshVirtualRouterSpecOutputReference(this as any, "spec", true);
  public get spec() {
    return this._spec;
  }
  public putSpec(value: AppmeshVirtualRouterSpec) {
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
      mesh_name: cdktf.stringToTerraform(this._meshName),
      mesh_owner: cdktf.stringToTerraform(this._meshOwner),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      spec: appmeshVirtualRouterSpecToTerraform(this._spec.internalValue),
    };
  }
}
