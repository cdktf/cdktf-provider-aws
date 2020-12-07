// https://www.terraform.io/docs/providers/aws/r/data_aws_codecommit_repository.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsCodecommitRepositoryConfig extends cdktf.TerraformMetaArguments {
  readonly repositoryName: string;
}

// Resource

export class DataAwsCodecommitRepository extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsCodecommitRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codecommit_repository',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._repositoryName = config.repositoryName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // clone_url_http - computed: true, optional: false, required: false
  public get cloneUrlHttp() {
    return this.getStringAttribute('clone_url_http');
  }

  // clone_url_ssh - computed: true, optional: false, required: false
  public get cloneUrlSsh() {
    return this.getStringAttribute('clone_url_ssh');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // repository_id - computed: true, optional: false, required: false
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }

  // repository_name - computed: false, optional: false, required: true
  private _repositoryName: string;
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }
  public set repositoryName(value: string) {
    this._repositoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryNameInput() {
    return this._repositoryName
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      repository_name: cdktf.stringToTerraform(this._repositoryName),
    };
  }
}
