// https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_solution_stack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsElasticBeanstalkSolutionStackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_solution_stack#id DataAwsElasticBeanstalkSolutionStack#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_solution_stack#most_recent DataAwsElasticBeanstalkSolutionStack#most_recent}
  */
  readonly mostRecent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_solution_stack#name_regex DataAwsElasticBeanstalkSolutionStack#name_regex}
  */
  readonly nameRegex: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_solution_stack aws_elastic_beanstalk_solution_stack}
*/
export class DataAwsElasticBeanstalkSolutionStack extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_elastic_beanstalk_solution_stack";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_solution_stack aws_elastic_beanstalk_solution_stack} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsElasticBeanstalkSolutionStackConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsElasticBeanstalkSolutionStackConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elastic_beanstalk_solution_stack',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._mostRecent = config.mostRecent;
    this._nameRegex = config.nameRegex;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // most_recent - computed: false, optional: true, required: false
  private _mostRecent?: boolean | cdktf.IResolvable; 
  public get mostRecent() {
    return this.getBooleanAttribute('most_recent');
  }
  public set mostRecent(value: boolean | cdktf.IResolvable) {
    this._mostRecent = value;
  }
  public resetMostRecent() {
    this._mostRecent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mostRecentInput() {
    return this._mostRecent;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_regex - computed: false, optional: false, required: true
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      most_recent: cdktf.booleanToTerraform(this._mostRecent),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
    };
  }
}
