// https://www.terraform.io/docs/providers/aws/r/msk_scram_secret_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MskScramSecretAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_scram_secret_association#cluster_arn MskScramSecretAssociation#cluster_arn}
  */
  readonly clusterArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_scram_secret_association#id MskScramSecretAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_scram_secret_association#secret_arn_list MskScramSecretAssociation#secret_arn_list}
  */
  readonly secretArnList: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/msk_scram_secret_association aws_msk_scram_secret_association}
*/
export class MskScramSecretAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_msk_scram_secret_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/msk_scram_secret_association aws_msk_scram_secret_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MskScramSecretAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: MskScramSecretAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_msk_scram_secret_association',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
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
    this._clusterArn = config.clusterArn;
    this._id = config.id;
    this._secretArnList = config.secretArnList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_arn - computed: false, optional: false, required: true
  private _clusterArn?: string; 
  public get clusterArn() {
    return this.getStringAttribute('cluster_arn');
  }
  public set clusterArn(value: string) {
    this._clusterArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterArnInput() {
    return this._clusterArn;
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

  // secret_arn_list - computed: false, optional: false, required: true
  private _secretArnList?: string[]; 
  public get secretArnList() {
    return cdktf.Fn.tolist(this.getListAttribute('secret_arn_list'));
  }
  public set secretArnList(value: string[]) {
    this._secretArnList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnListInput() {
    return this._secretArnList;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_arn: cdktf.stringToTerraform(this._clusterArn),
      id: cdktf.stringToTerraform(this._id),
      secret_arn_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._secretArnList),
    };
  }
}
