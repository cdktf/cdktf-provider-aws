/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/emr_studio_session_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmrStudioSessionMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/emr_studio_session_mapping#id EmrStudioSessionMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/emr_studio_session_mapping#identity_id EmrStudioSessionMapping#identity_id}
  */
  readonly identityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/emr_studio_session_mapping#identity_name EmrStudioSessionMapping#identity_name}
  */
  readonly identityName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/emr_studio_session_mapping#identity_type EmrStudioSessionMapping#identity_type}
  */
  readonly identityType: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/emr_studio_session_mapping#region EmrStudioSessionMapping#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/emr_studio_session_mapping#session_policy_arn EmrStudioSessionMapping#session_policy_arn}
  */
  readonly sessionPolicyArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/emr_studio_session_mapping#studio_id EmrStudioSessionMapping#studio_id}
  */
  readonly studioId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/emr_studio_session_mapping aws_emr_studio_session_mapping}
*/
export class EmrStudioSessionMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_emr_studio_session_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EmrStudioSessionMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EmrStudioSessionMapping to import
  * @param importFromId The id of the existing EmrStudioSessionMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/emr_studio_session_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EmrStudioSessionMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_emr_studio_session_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/emr_studio_session_mapping aws_emr_studio_session_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmrStudioSessionMappingConfig
  */
  public constructor(scope: Construct, id: string, config: EmrStudioSessionMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_emr_studio_session_mapping',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.13.0',
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
    this._identityId = config.identityId;
    this._identityName = config.identityName;
    this._identityType = config.identityType;
    this._region = config.region;
    this._sessionPolicyArn = config.sessionPolicyArn;
    this._studioId = config.studioId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // identity_id - computed: true, optional: true, required: false
  private _identityId?: string; 
  public get identityId() {
    return this.getStringAttribute('identity_id');
  }
  public set identityId(value: string) {
    this._identityId = value;
  }
  public resetIdentityId() {
    this._identityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdInput() {
    return this._identityId;
  }

  // identity_name - computed: true, optional: true, required: false
  private _identityName?: string; 
  public get identityName() {
    return this.getStringAttribute('identity_name');
  }
  public set identityName(value: string) {
    this._identityName = value;
  }
  public resetIdentityName() {
    this._identityName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityNameInput() {
    return this._identityName;
  }

  // identity_type - computed: false, optional: false, required: true
  private _identityType?: string; 
  public get identityType() {
    return this.getStringAttribute('identity_type');
  }
  public set identityType(value: string) {
    this._identityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTypeInput() {
    return this._identityType;
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

  // session_policy_arn - computed: false, optional: false, required: true
  private _sessionPolicyArn?: string; 
  public get sessionPolicyArn() {
    return this.getStringAttribute('session_policy_arn');
  }
  public set sessionPolicyArn(value: string) {
    this._sessionPolicyArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionPolicyArnInput() {
    return this._sessionPolicyArn;
  }

  // studio_id - computed: false, optional: false, required: true
  private _studioId?: string; 
  public get studioId() {
    return this.getStringAttribute('studio_id');
  }
  public set studioId(value: string) {
    this._studioId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get studioIdInput() {
    return this._studioId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      identity_id: cdktf.stringToTerraform(this._identityId),
      identity_name: cdktf.stringToTerraform(this._identityName),
      identity_type: cdktf.stringToTerraform(this._identityType),
      region: cdktf.stringToTerraform(this._region),
      session_policy_arn: cdktf.stringToTerraform(this._sessionPolicyArn),
      studio_id: cdktf.stringToTerraform(this._studioId),
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
      identity_id: {
        value: cdktf.stringToHclTerraform(this._identityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_name: {
        value: cdktf.stringToHclTerraform(this._identityName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_type: {
        value: cdktf.stringToHclTerraform(this._identityType),
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
      session_policy_arn: {
        value: cdktf.stringToHclTerraform(this._sessionPolicyArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      studio_id: {
        value: cdktf.stringToHclTerraform(this._studioId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
