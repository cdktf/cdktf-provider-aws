// https://www.terraform.io/docs/providers/aws/r/data_aws_arn.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "account": {
        "type": "string",
        "computed": true
      },
      "arn": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "partition": {
        "type": "string",
        "computed": true
      },
      "region": {
        "type": "string",
        "computed": true
      },
      "resource": {
        "type": "string",
        "computed": true
      },
      "service": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsArnConfig extends TerraformMetaArguments {
  readonly arn: string;
}

// Resource

export class DataAwsArn extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsArnConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_arn',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._arn = config.arn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: true, optional: false, required: true
  public get account() {
    return this.getStringAttribute('account');
  }

  // arn - computed: false, optional: false, required: true
  private _arn: string;
  public get arn() {
    return this._arn;
  }
  public set arn(value: string) {
    this._arn = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // partition - computed: true, optional: false, required: true
  public get partition() {
    return this.getStringAttribute('partition');
  }

  // region - computed: true, optional: false, required: true
  public get region() {
    return this.getStringAttribute('region');
  }

  // resource - computed: true, optional: false, required: true
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // service - computed: true, optional: false, required: true
  public get service() {
    return this.getStringAttribute('service');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      arn: this._arn,
    };
  }
}
