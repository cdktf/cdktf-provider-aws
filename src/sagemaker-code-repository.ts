// https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SagemakerCodeRepositoryConfig extends TerraformMetaArguments {
  readonly codeRepositoryName: string;
  /** git_config block */
  readonly gitConfig: SagemakerCodeRepositoryGitConfig[];
}
export interface SagemakerCodeRepositoryGitConfig {
  readonly branch?: string;
  readonly repositoryUrl: string;
  readonly secretArn?: string;
}

// Resource

export class SagemakerCodeRepository extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SagemakerCodeRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_code_repository',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._codeRepositoryName = config.codeRepositoryName;
    this._gitConfig = config.gitConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // code_repository_name - computed: false, optional: false, required: true
  private _codeRepositoryName: string;
  public get codeRepositoryName() {
    return this._codeRepositoryName;
  }
  public set codeRepositoryName(value: string) {
    this._codeRepositoryName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // git_config - computed: false, optional: false, required: true
  private _gitConfig: SagemakerCodeRepositoryGitConfig[];
  public get gitConfig() {
    return this._gitConfig;
  }
  public set gitConfig(value: SagemakerCodeRepositoryGitConfig[]) {
    this._gitConfig = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      code_repository_name: this._codeRepositoryName,
      git_config: this._gitConfig,
    };
  }
}
