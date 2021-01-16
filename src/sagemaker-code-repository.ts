// https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerCodeRepositoryConfig extends cdktf.TerraformMetaArguments {
  readonly codeRepositoryName: string;
  /** git_config block */
  readonly gitConfig: SagemakerCodeRepositoryGitConfig[];
}
export interface SagemakerCodeRepositoryGitConfig {
  readonly branch?: string;
  readonly repositoryUrl: string;
  readonly secretArn?: string;
}

function sagemakerCodeRepositoryGitConfigToTerraform(struct?: SagemakerCodeRepositoryGitConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    repository_url: cdktf.stringToTerraform(struct!.repositoryUrl),
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
  }
}


// Resource

export class SagemakerCodeRepository extends cdktf.TerraformResource {

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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // code_repository_name - computed: false, optional: false, required: true
  private _codeRepositoryName: string;
  public get codeRepositoryName() {
    return this.getStringAttribute('code_repository_name');
  }
  public set codeRepositoryName(value: string) {
    this._codeRepositoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRepositoryNameInput() {
    return this._codeRepositoryName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // git_config - computed: false, optional: false, required: true
  private _gitConfig: SagemakerCodeRepositoryGitConfig[];
  public get gitConfig() {
    return this.interpolationForAttribute('git_config') as any;
  }
  public set gitConfig(value: SagemakerCodeRepositoryGitConfig[]) {
    this._gitConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gitConfigInput() {
    return this._gitConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      code_repository_name: cdktf.stringToTerraform(this._codeRepositoryName),
      git_config: cdktf.listMapper(sagemakerCodeRepositoryGitConfigToTerraform)(this._gitConfig),
    };
  }
}
