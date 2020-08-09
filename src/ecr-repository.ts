// https://www.terraform.io/docs/providers/aws/r/ecr_repository.html
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
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "image_tag_mutability": {
        "type": "string",
        "optional": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "registry_id": {
        "type": "string",
        "computed": true
      },
      "repository_url": {
        "type": "string",
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      }
    },
    "block_types": {
      "image_scanning_configuration": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "scan_on_push": {
              "type": "bool",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "delete": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface EcrRepositoryConfig extends TerraformMetaArguments {
  readonly imageTagMutability?: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** image_scanning_configuration block */
  readonly imageScanningConfiguration?: EcrRepositoryImageScanningConfiguration[];
  /** timeouts block */
  readonly timeouts?: EcrRepositoryTimeouts;
}
export interface EcrRepositoryImageScanningConfiguration {
  readonly scanOnPush: boolean;
}
export interface EcrRepositoryTimeouts {
  readonly delete?: string;
}

// Resource

export class EcrRepository extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: EcrRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ecr_repository',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._imageTagMutability = config.imageTagMutability;
    this._name = config.name;
    this._tags = config.tags;
    this._imageScanningConfiguration = config.imageScanningConfiguration;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // image_tag_mutability - computed: false, optional: true, required: false
  private _imageTagMutability?: string;
  public get imageTagMutability() {
    return this._imageTagMutability;
  }
  public set imageTagMutability(value: string | undefined) {
    this._imageTagMutability = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // registry_id - computed: true, optional: false, required: true
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }

  // repository_url - computed: true, optional: false, required: true
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // image_scanning_configuration - computed: false, optional: true, required: false
  private _imageScanningConfiguration?: EcrRepositoryImageScanningConfiguration[];
  public get imageScanningConfiguration() {
    return this._imageScanningConfiguration;
  }
  public set imageScanningConfiguration(value: EcrRepositoryImageScanningConfiguration[] | undefined) {
    this._imageScanningConfiguration = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EcrRepositoryTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: EcrRepositoryTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      image_tag_mutability: this._imageTagMutability,
      name: this._name,
      tags: this._tags,
      image_scanning_configuration: this._imageScanningConfiguration,
      timeouts: this._timeouts,
    };
  }
}
