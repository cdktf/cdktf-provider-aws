// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Elastic Kubernetes Service
*/
export interface DataAwsEksAddonConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eks_addon.html#addon_name DataAwsEksAddon#addon_name}
  */
  readonly addonName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eks_addon.html#cluster_name DataAwsEksAddon#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eks_addon.html#tags DataAwsEksAddon#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/eks_addon.html aws_eks_addon}
*/
export class DataAwsEksAddon extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_eks_addon";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/eks_addon.html aws_eks_addon} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsEksAddonConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsEksAddonConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_eks_addon',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._addonName = config.addonName;
    this._clusterName = config.clusterName;
    this._tags = config.tags;
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

  // addon_version - computed: true, optional: false, required: false
  public get addonVersion() {
    return this.getStringAttribute('addon_version');
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
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }

  // service_account_role_arn - computed: true, optional: false, required: false
  public get serviceAccountRoleArn() {
    return this.getStringAttribute('service_account_role_arn');
  }

  // tags - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addon_name: cdktf.stringToTerraform(this._addonName),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
