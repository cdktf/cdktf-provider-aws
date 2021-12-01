// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Managed Streaming for Kafka
*/
export interface MskScramSecretAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_scram_secret_association.html#cluster_arn MskScramSecretAssociation#cluster_arn}
  */
  readonly clusterArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_scram_secret_association.html#secret_arn_list MskScramSecretAssociation#secret_arn_list}
  */
  readonly secretArnList: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/msk_scram_secret_association.html aws_msk_scram_secret_association}
*/
export class MskScramSecretAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_msk_scram_secret_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/msk_scram_secret_association.html aws_msk_scram_secret_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MskScramSecretAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: MskScramSecretAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_msk_scram_secret_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterArn = config.clusterArn;
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
  public get id() {
    return this.getStringAttribute('id');
  }

  // secret_arn_list - computed: false, optional: false, required: true
  private _secretArnList?: string[]; 
  public get secretArnList() {
    return this.getListAttribute('secret_arn_list');
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
      secret_arn_list: cdktf.listMapper(cdktf.stringToTerraform)(this._secretArnList),
    };
  }
}
