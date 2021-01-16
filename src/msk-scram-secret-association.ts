// https://www.terraform.io/docs/providers/aws/r/msk_scram_secret_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface MskScramSecretAssociationConfig extends TerraformMetaArguments {
  readonly clusterArn: string;
  readonly secretArnList: string[];
}

// Resource

export class MskScramSecretAssociation extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _clusterArn: string;
  public get clusterArn() {
    return this._clusterArn;
  }
  public set clusterArn(value: string) {
    this._clusterArn = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // secret_arn_list - computed: false, optional: false, required: true
  private _secretArnList: string[];
  public get secretArnList() {
    return this._secretArnList;
  }
  public set secretArnList(value: string[]) {
    this._secretArnList = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_arn: this._clusterArn,
      secret_arn_list: this._secretArnList,
    };
  }
}
