// https://www.terraform.io/docs/providers/aws/r/data_aws_elastic_beanstalk_solution_stack.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "most_recent": {
        "type": "bool",
        "optional": true
      },
      "name": {
        "type": "string",
        "computed": true
      },
      "name_regex": {
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

export interface DataAwsElasticBeanstalkSolutionStackConfig extends TerraformMetaArguments {
  readonly mostRecent?: boolean;
  readonly nameRegex: string;
}

// Resource

export class DataAwsElasticBeanstalkSolutionStack extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsElasticBeanstalkSolutionStackConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elastic_beanstalk_solution_stack',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._mostRecent = config.mostRecent;
    this._nameRegex = config.nameRegex;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // most_recent - computed: false, optional: true, required: false
  private _mostRecent?: boolean;
  public get mostRecent() {
    return this._mostRecent;
  }
  public set mostRecent(value: boolean | undefined) {
    this._mostRecent = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_regex - computed: false, optional: false, required: true
  private _nameRegex: string;
  public get nameRegex() {
    return this._nameRegex;
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      most_recent: this._mostRecent,
      name_regex: this._nameRegex,
    };
  }
}
