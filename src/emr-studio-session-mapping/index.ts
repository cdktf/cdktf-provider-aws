// https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmrStudioSessionMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#id EmrStudioSessionMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#identity_id EmrStudioSessionMapping#identity_id}
  */
  readonly identityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#identity_name EmrStudioSessionMapping#identity_name}
  */
  readonly identityName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#identity_type EmrStudioSessionMapping#identity_type}
  */
  readonly identityType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#session_policy_arn EmrStudioSessionMapping#session_policy_arn}
  */
  readonly sessionPolicyArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#studio_id EmrStudioSessionMapping#studio_id}
  */
  readonly studioId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping aws_emr_studio_session_mapping}
*/
export class EmrStudioSessionMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_emr_studio_session_mapping";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping aws_emr_studio_session_mapping} Resource
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
        providerVersion: '4.58.0',
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
    this._id = config.id;
    this._identityId = config.identityId;
    this._identityName = config.identityName;
    this._identityType = config.identityType;
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
      session_policy_arn: cdktf.stringToTerraform(this._sessionPolicyArn),
      studio_id: cdktf.stringToTerraform(this._studioId),
    };
  }
}
