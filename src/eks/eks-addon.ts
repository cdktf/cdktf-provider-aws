// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Elastic Kubernetes Service
*/
export interface EksAddonConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_addon#addon_name EksAddon#addon_name}
  */
  readonly addonName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_addon#addon_version EksAddon#addon_version}
  */
  readonly addonVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_addon#cluster_name EksAddon#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_addon#id EksAddon#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_addon#preserve EksAddon#preserve}
  */
  readonly preserve?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_addon#resolve_conflicts EksAddon#resolve_conflicts}
  */
  readonly resolveConflicts?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_addon#service_account_role_arn EksAddon#service_account_role_arn}
  */
  readonly serviceAccountRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_addon#tags EksAddon#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_addon#tags_all EksAddon#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/eks_addon aws_eks_addon}
*/
export class EksAddon extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_eks_addon";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/eks_addon aws_eks_addon} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EksAddonConfig
  */
  public constructor(scope: Construct, id: string, config: EksAddonConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_eks_addon',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.29.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addonName = config.addonName;
    this._addonVersion = config.addonVersion;
    this._clusterName = config.clusterName;
    this._id = config.id;
    this._preserve = config.preserve;
    this._resolveConflicts = config.resolveConflicts;
    this._serviceAccountRoleArn = config.serviceAccountRoleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addon_name - computed: false, optional: false, required: true
  private _addonName?: string; 
  public get addonName() {
    return this.getStringAttribute('addon_name');
  }
  public set addonName(value: string) {
    this._addonName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addonNameInput() {
    return this._addonName;
  }

  // addon_version - computed: true, optional: true, required: false
  private _addonVersion?: string; 
  public get addonVersion() {
    return this.getStringAttribute('addon_version');
  }
  public set addonVersion(value: string) {
    this._addonVersion = value;
  }
  public resetAddonVersion() {
    this._addonVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonVersionInput() {
    return this._addonVersion;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }

  // preserve - computed: false, optional: true, required: false
  private _preserve?: boolean | cdktf.IResolvable; 
  public get preserve() {
    return this.getBooleanAttribute('preserve');
  }
  public set preserve(value: boolean | cdktf.IResolvable) {
    this._preserve = value;
  }
  public resetPreserve() {
    this._preserve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveInput() {
    return this._preserve;
  }

  // resolve_conflicts - computed: false, optional: true, required: false
  private _resolveConflicts?: string; 
  public get resolveConflicts() {
    return this.getStringAttribute('resolve_conflicts');
  }
  public set resolveConflicts(value: string) {
    this._resolveConflicts = value;
  }
  public resetResolveConflicts() {
    this._resolveConflicts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveConflictsInput() {
    return this._resolveConflicts;
  }

  // service_account_role_arn - computed: false, optional: true, required: false
  private _serviceAccountRoleArn?: string; 
  public get serviceAccountRoleArn() {
    return this.getStringAttribute('service_account_role_arn');
  }
  public set serviceAccountRoleArn(value: string) {
    this._serviceAccountRoleArn = value;
  }
  public resetServiceAccountRoleArn() {
    this._serviceAccountRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountRoleArnInput() {
    return this._serviceAccountRoleArn;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addon_name: cdktf.stringToTerraform(this._addonName),
      addon_version: cdktf.stringToTerraform(this._addonVersion),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      id: cdktf.stringToTerraform(this._id),
      preserve: cdktf.booleanToTerraform(this._preserve),
      resolve_conflicts: cdktf.stringToTerraform(this._resolveConflicts),
      service_account_role_arn: cdktf.stringToTerraform(this._serviceAccountRoleArn),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
    };
  }
}
