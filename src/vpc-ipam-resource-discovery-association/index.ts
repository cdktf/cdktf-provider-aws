// https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/vpc_ipam_resource_discovery_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcIpamResourceDiscoveryAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/vpc_ipam_resource_discovery_association#id VpcIpamResourceDiscoveryAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/vpc_ipam_resource_discovery_association#ipam_id VpcIpamResourceDiscoveryAssociation#ipam_id}
  */
  readonly ipamId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/vpc_ipam_resource_discovery_association#ipam_resource_discovery_id VpcIpamResourceDiscoveryAssociation#ipam_resource_discovery_id}
  */
  readonly ipamResourceDiscoveryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/vpc_ipam_resource_discovery_association#tags VpcIpamResourceDiscoveryAssociation#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/vpc_ipam_resource_discovery_association#tags_all VpcIpamResourceDiscoveryAssociation#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/vpc_ipam_resource_discovery_association#timeouts VpcIpamResourceDiscoveryAssociation#timeouts}
  */
  readonly timeouts?: VpcIpamResourceDiscoveryAssociationTimeouts;
}
export interface VpcIpamResourceDiscoveryAssociationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/vpc_ipam_resource_discovery_association#create VpcIpamResourceDiscoveryAssociation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/vpc_ipam_resource_discovery_association#delete VpcIpamResourceDiscoveryAssociation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/vpc_ipam_resource_discovery_association#update VpcIpamResourceDiscoveryAssociation#update}
  */
  readonly update?: string;
}

export function vpcIpamResourceDiscoveryAssociationTimeoutsToTerraform(struct?: VpcIpamResourceDiscoveryAssociationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function vpcIpamResourceDiscoveryAssociationTimeoutsToHclTerraform(struct?: VpcIpamResourceDiscoveryAssociationTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpcIpamResourceDiscoveryAssociationTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcIpamResourceDiscoveryAssociationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/vpc_ipam_resource_discovery_association aws_vpc_ipam_resource_discovery_association}
*/
export class VpcIpamResourceDiscoveryAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_vpc_ipam_resource_discovery_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcIpamResourceDiscoveryAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcIpamResourceDiscoveryAssociation to import
  * @param importFromId The id of the existing VpcIpamResourceDiscoveryAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/vpc_ipam_resource_discovery_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcIpamResourceDiscoveryAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_vpc_ipam_resource_discovery_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/vpc_ipam_resource_discovery_association aws_vpc_ipam_resource_discovery_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcIpamResourceDiscoveryAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: VpcIpamResourceDiscoveryAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_ipam_resource_discovery_association',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.32.0',
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
    this._ipamId = config.ipamId;
    this._ipamResourceDiscoveryId = config.ipamResourceDiscoveryId;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
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

  // ipam_arn - computed: true, optional: false, required: false
  public get ipamArn() {
    return this.getStringAttribute('ipam_arn');
  }

  // ipam_id - computed: false, optional: false, required: true
  private _ipamId?: string; 
  public get ipamId() {
    return this.getStringAttribute('ipam_id');
  }
  public set ipamId(value: string) {
    this._ipamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamIdInput() {
    return this._ipamId;
  }

  // ipam_region - computed: true, optional: false, required: false
  public get ipamRegion() {
    return this.getStringAttribute('ipam_region');
  }

  // ipam_resource_discovery_id - computed: false, optional: false, required: true
  private _ipamResourceDiscoveryId?: string; 
  public get ipamResourceDiscoveryId() {
    return this.getStringAttribute('ipam_resource_discovery_id');
  }
  public set ipamResourceDiscoveryId(value: string) {
    this._ipamResourceDiscoveryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamResourceDiscoveryIdInput() {
    return this._ipamResourceDiscoveryId;
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpcIpamResourceDiscoveryAssociationTimeouts) {
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
      ipam_id: cdktf.stringToTerraform(this._ipamId),
      ipam_resource_discovery_id: cdktf.stringToTerraform(this._ipamResourceDiscoveryId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      timeouts: vpcIpamResourceDiscoveryAssociationTimeoutsToTerraform(this._timeouts.internalValue),
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
      ipam_id: {
        value: cdktf.stringToHclTerraform(this._ipamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipam_resource_discovery_id: {
        value: cdktf.stringToHclTerraform(this._ipamResourceDiscoveryId),
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
      timeouts: {
        value: vpcIpamResourceDiscoveryAssociationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpcIpamResourceDiscoveryAssociationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
