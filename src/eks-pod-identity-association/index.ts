/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/eks_pod_identity_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EksPodIdentityAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/eks_pod_identity_association#cluster_name EksPodIdentityAssociation#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/eks_pod_identity_association#disable_session_tags EksPodIdentityAssociation#disable_session_tags}
  */
  readonly disableSessionTags?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/eks_pod_identity_association#namespace EksPodIdentityAssociation#namespace}
  */
  readonly namespace: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/eks_pod_identity_association#region EksPodIdentityAssociation#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/eks_pod_identity_association#role_arn EksPodIdentityAssociation#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/eks_pod_identity_association#service_account EksPodIdentityAssociation#service_account}
  */
  readonly serviceAccount: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/eks_pod_identity_association#tags EksPodIdentityAssociation#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/eks_pod_identity_association#target_role_arn EksPodIdentityAssociation#target_role_arn}
  */
  readonly targetRoleArn?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/eks_pod_identity_association aws_eks_pod_identity_association}
*/
export class EksPodIdentityAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_eks_pod_identity_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EksPodIdentityAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EksPodIdentityAssociation to import
  * @param importFromId The id of the existing EksPodIdentityAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/eks_pod_identity_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EksPodIdentityAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_eks_pod_identity_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/eks_pod_identity_association aws_eks_pod_identity_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EksPodIdentityAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: EksPodIdentityAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_eks_pod_identity_association',
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
    this._clusterName = config.clusterName;
    this._disableSessionTags = config.disableSessionTags;
    this._namespace = config.namespace;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._serviceAccount = config.serviceAccount;
    this._tags = config.tags;
    this._targetRoleArn = config.targetRoleArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // association_arn - computed: true, optional: false, required: false
  public get associationArn() {
    return this.getStringAttribute('association_arn');
  }

  // association_id - computed: true, optional: false, required: false
  public get associationId() {
    return this.getStringAttribute('association_id');
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

  // disable_session_tags - computed: true, optional: true, required: false
  private _disableSessionTags?: boolean | cdktf.IResolvable; 
  public get disableSessionTags() {
    return this.getBooleanAttribute('disable_session_tags');
  }
  public set disableSessionTags(value: boolean | cdktf.IResolvable) {
    this._disableSessionTags = value;
  }
  public resetDisableSessionTags() {
    this._disableSessionTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSessionTagsInput() {
    return this._disableSessionTags;
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
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

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // service_account - computed: false, optional: false, required: true
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // target_role_arn - computed: false, optional: true, required: false
  private _targetRoleArn?: string; 
  public get targetRoleArn() {
    return this.getStringAttribute('target_role_arn');
  }
  public set targetRoleArn(value: string) {
    this._targetRoleArn = value;
  }
  public resetTargetRoleArn() {
    this._targetRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRoleArnInput() {
    return this._targetRoleArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      disable_session_tags: cdktf.booleanToTerraform(this._disableSessionTags),
      namespace: cdktf.stringToTerraform(this._namespace),
      region: cdktf.stringToTerraform(this._region),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      service_account: cdktf.stringToTerraform(this._serviceAccount),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      target_role_arn: cdktf.stringToTerraform(this._targetRoleArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_session_tags: {
        value: cdktf.booleanToHclTerraform(this._disableSessionTags),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
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
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account: {
        value: cdktf.stringToHclTerraform(this._serviceAccount),
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
      target_role_arn: {
        value: cdktf.stringToHclTerraform(this._targetRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
