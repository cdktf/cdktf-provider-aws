// https://www.terraform.io/docs/providers/aws/r/codecommit_repository.html
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
      "default_branch": {
        "type": "string",
        "optional": true
      },
      "description": {
        "type": "string",
        "optional": true
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
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CodecommitRepositoryConfig extends TerraformMetaArguments {
  readonly defaultBranch?: string;
  readonly description?: string;
  readonly repositoryName: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class CodecommitRepository extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CodecommitRepositoryConfig) {
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
    this._defaultBranch = config.defaultBranch;
    this._description = config.description;
    this._repositoryName = config.repositoryName;
    this._tags = config.tags;
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

  // default_branch - computed: false, optional: true, required: false
  private _defaultBranch?: string;
  public get defaultBranch() {
    return this._defaultBranch;
  }
  public set defaultBranch(value: string | undefined) {
    this._defaultBranch = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      default_branch: this._defaultBranch,
      description: this._description,
      repository_name: this._repositoryName,
      tags: this._tags,
    };
  }
}
