// https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/s3control_access_grants_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3ControlAccessGrantsInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/s3control_access_grants_instance#account_id S3ControlAccessGrantsInstance#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/s3control_access_grants_instance#identity_center_arn S3ControlAccessGrantsInstance#identity_center_arn}
  */
  readonly identityCenterArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/s3control_access_grants_instance#tags S3ControlAccessGrantsInstance#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/s3control_access_grants_instance aws_s3control_access_grants_instance}
*/
export class S3ControlAccessGrantsInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_s3control_access_grants_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a S3ControlAccessGrantsInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3ControlAccessGrantsInstance to import
  * @param importFromId The id of the existing S3ControlAccessGrantsInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/s3control_access_grants_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3ControlAccessGrantsInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_s3control_access_grants_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/s3control_access_grants_instance aws_s3control_access_grants_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3ControlAccessGrantsInstanceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: S3ControlAccessGrantsInstanceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_s3control_access_grants_instance',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.37.0',
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
    this._accountId = config.accountId;
    this._identityCenterArn = config.identityCenterArn;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_grants_instance_arn - computed: true, optional: false, required: false
  public get accessGrantsInstanceArn() {
    return this.getStringAttribute('access_grants_instance_arn');
  }

  // access_grants_instance_id - computed: true, optional: false, required: false
  public get accessGrantsInstanceId() {
    return this.getStringAttribute('access_grants_instance_id');
  }

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_center_application_arn - computed: true, optional: false, required: false
  public get identityCenterApplicationArn() {
    return this.getStringAttribute('identity_center_application_arn');
  }

  // identity_center_arn - computed: false, optional: true, required: false
  private _identityCenterArn?: string; 
  public get identityCenterArn() {
    return this.getStringAttribute('identity_center_arn');
  }
  public set identityCenterArn(value: string) {
    this._identityCenterArn = value;
  }
  public resetIdentityCenterArn() {
    this._identityCenterArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityCenterArnInput() {
    return this._identityCenterArn;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      identity_center_arn: cdktf.stringToTerraform(this._identityCenterArn),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_center_arn: {
        value: cdktf.stringToHclTerraform(this._identityCenterArn),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
