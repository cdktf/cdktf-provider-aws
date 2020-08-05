// https://www.terraform.io/docs/providers/aws/r/data_aws_codecommit_repository.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "clone_url_http": {
        "type": "string",
        "computed": true
      },
      "clone_url_ssh": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "repository_id": {
        "type": "string",
        "computed": true
      },
      "repository_name": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsCodecommitRepositoryConfig extends TerraformMetaArguments {
  readonly repositoryName: string;
}

// Resource

export class DataAwsCodecommitRepository extends TerraformDataSource {

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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // clone_url_http - computed: true, optional: false, required: true
  public get cloneUrlHttp() {
    return this.getStringAttribute('clone_url_http');
  }

  // clone_url_ssh - computed: true, optional: false, required: true
  public get cloneUrlSsh() {
    return this.getStringAttribute('clone_url_ssh');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // repository_id - computed: true, optional: false, required: true
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }

  // repository_name - computed: false, optional: false, required: true
  private _repositoryName: string;
  public get repositoryName() {
    return this._repositoryName;
  }
  public set repositoryName(value: string) {
    this._repositoryName = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      repository_name: this._repositoryName,
    };
  }
}
