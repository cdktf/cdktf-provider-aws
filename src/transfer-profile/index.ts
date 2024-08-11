// https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/transfer_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransferProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/transfer_profile#as2_id TransferProfile#as2_id}
  */
  readonly as2Id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/transfer_profile#certificate_ids TransferProfile#certificate_ids}
  */
  readonly certificateIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/transfer_profile#id TransferProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/transfer_profile#profile_type TransferProfile#profile_type}
  */
  readonly profileType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/transfer_profile#tags TransferProfile#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/transfer_profile#tags_all TransferProfile#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/transfer_profile aws_transfer_profile}
*/
export class TransferProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_transfer_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TransferProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransferProfile to import
  * @param importFromId The id of the existing TransferProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/transfer_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransferProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_transfer_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/transfer_profile aws_transfer_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransferProfileConfig
  */
  public constructor(scope: Construct, id: string, config: TransferProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_transfer_profile',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.62.0',
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
    this._as2Id = config.as2Id;
    this._certificateIds = config.certificateIds;
    this._id = config.id;
    this._profileType = config.profileType;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // as2_id - computed: false, optional: false, required: true
  private _as2Id?: string; 
  public get as2Id() {
    return this.getStringAttribute('as2_id');
  }
  public set as2Id(value: string) {
    this._as2Id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get as2IdInput() {
    return this._as2Id;
  }

  // certificate_ids - computed: false, optional: true, required: false
  private _certificateIds?: string[]; 
  public get certificateIds() {
    return cdktf.Fn.tolist(this.getListAttribute('certificate_ids'));
  }
  public set certificateIds(value: string[]) {
    this._certificateIds = value;
  }
  public resetCertificateIds() {
    this._certificateIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdsInput() {
    return this._certificateIds;
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

  // profile_id - computed: true, optional: false, required: false
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }

  // profile_type - computed: false, optional: false, required: true
  private _profileType?: string; 
  public get profileType() {
    return this.getStringAttribute('profile_type');
  }
  public set profileType(value: string) {
    this._profileType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileTypeInput() {
    return this._profileType;
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
      as2_id: cdktf.stringToTerraform(this._as2Id),
      certificate_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._certificateIds),
      id: cdktf.stringToTerraform(this._id),
      profile_type: cdktf.stringToTerraform(this._profileType),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      as2_id: {
        value: cdktf.stringToHclTerraform(this._as2Id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._certificateIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_type: {
        value: cdktf.stringToHclTerraform(this._profileType),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
