// https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EksFargateProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#cluster_name EksFargateProfile#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#fargate_profile_name EksFargateProfile#fargate_profile_name}
  */
  readonly fargateProfileName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#pod_execution_role_arn EksFargateProfile#pod_execution_role_arn}
  */
  readonly podExecutionRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#subnet_ids EksFargateProfile#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#tags EksFargateProfile#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#tags_all EksFargateProfile#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#selector EksFargateProfile#selector}
  */
  readonly selector: EksFargateProfileSelector[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#timeouts EksFargateProfile#timeouts}
  */
  readonly timeouts?: EksFargateProfileTimeouts;
}
export interface EksFargateProfileSelector {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#labels EksFargateProfile#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#namespace EksFargateProfile#namespace}
  */
  readonly namespace: string;
}

function eksFargateProfileSelectorToTerraform(struct?: EksFargateProfileSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface EksFargateProfileTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#create EksFargateProfile#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#delete EksFargateProfile#delete}
  */
  readonly delete?: string;
}

function eksFargateProfileTimeoutsToTerraform(struct?: EksFargateProfileTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html aws_eks_fargate_profile}
*/
export class EksFargateProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_eks_fargate_profile";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html aws_eks_fargate_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EksFargateProfileConfig
  */
  public constructor(scope: Construct, id: string, config: EksFargateProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_eks_fargate_profile',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterName = config.clusterName;
    this._fargateProfileName = config.fargateProfileName;
    this._podExecutionRoleArn = config.podExecutionRoleArn;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._selector = config.selector;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName: string;
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName
  }

  // fargate_profile_name - computed: false, optional: false, required: true
  private _fargateProfileName: string;
  public get fargateProfileName() {
    return this.getStringAttribute('fargate_profile_name');
  }
  public set fargateProfileName(value: string) {
    this._fargateProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fargateProfileNameInput() {
    return this._fargateProfileName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pod_execution_role_arn - computed: false, optional: false, required: true
  private _podExecutionRoleArn: string;
  public get podExecutionRoleArn() {
    return this.getStringAttribute('pod_execution_role_arn');
  }
  public set podExecutionRoleArn(value: string) {
    this._podExecutionRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podExecutionRoleArnInput() {
    return this._podExecutionRoleArn
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_ids - computed: false, optional: true, required: false
  private _subnetIds?: string[];
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[] ) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // selector - computed: false, optional: false, required: true
  private _selector: EksFargateProfileSelector[];
  public get selector() {
    return this.interpolationForAttribute('selector') as any;
  }
  public set selector(value: EksFargateProfileSelector[]) {
    this._selector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EksFargateProfileTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: EksFargateProfileTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      fargate_profile_name: cdktf.stringToTerraform(this._fargateProfileName),
      pod_execution_role_arn: cdktf.stringToTerraform(this._podExecutionRoleArn),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      selector: cdktf.listMapper(eksFargateProfileSelectorToTerraform)(this._selector),
      timeouts: eksFargateProfileTimeoutsToTerraform(this._timeouts),
    };
  }
}
