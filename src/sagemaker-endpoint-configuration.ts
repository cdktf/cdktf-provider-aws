// https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html
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
      "kms_key_arn": {
        "type": "string",
        "optional": true
      },
      "name": {
        "type": "string",
        "optional": true,
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
      "production_variants": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "accelerator_type": {
              "type": "string",
              "optional": true
            },
            "initial_instance_count": {
              "type": "number",
              "required": true
            },
            "initial_variant_weight": {
              "type": "number",
              "optional": true
            },
            "instance_type": {
              "type": "string",
              "required": true
            },
            "model_name": {
              "type": "string",
              "required": true
            },
            "variant_name": {
              "type": "string",
              "optional": true,
              "computed": true
            }
          }
        },
        "min_items": 1
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SagemakerEndpointConfigurationConfig extends TerraformMetaArguments {
  readonly kmsKeyArn?: string;
  readonly name?: string;
  readonly tags?: { [key: string]: string };
  /** production_variants block */
  readonly productionVariants: SagemakerEndpointConfigurationProductionVariants[];
}
export interface SagemakerEndpointConfigurationProductionVariants {
  readonly acceleratorType?: string;
  readonly initialInstanceCount: number;
  readonly initialVariantWeight?: number;
  readonly instanceType: string;
  readonly modelName: string;
  readonly variantName?: string;
}

// Resource

export class SagemakerEndpointConfiguration extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SagemakerEndpointConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_endpoint_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._kmsKeyArn = config.kmsKeyArn;
    this._name = config.name;
    this._tags = config.tags;
    this._productionVariants = config.productionVariants;
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

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string;
  public get kmsKeyArn() {
    return this._kmsKeyArn;
  }
  public set kmsKeyArn(value: string | undefined) {
    this._kmsKeyArn = value;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name ?? this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // production_variants - computed: false, optional: false, required: true
  private _productionVariants: SagemakerEndpointConfigurationProductionVariants[];
  public get productionVariants() {
    return this._productionVariants;
  }
  public set productionVariants(value: SagemakerEndpointConfigurationProductionVariants[]) {
    this._productionVariants = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      kms_key_arn: this._kmsKeyArn,
      name: this._name,
      tags: this._tags,
      production_variants: this._productionVariants,
    };
  }
}
