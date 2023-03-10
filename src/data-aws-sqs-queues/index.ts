// https://www.terraform.io/docs/providers/aws/d/sqs_queues
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsSqsQueuesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sqs_queues#id DataAwsSqsQueues#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sqs_queues#queue_name_prefix DataAwsSqsQueues#queue_name_prefix}
  */
  readonly queueNamePrefix?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/sqs_queues aws_sqs_queues}
*/
export class DataAwsSqsQueues extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sqs_queues";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/sqs_queues aws_sqs_queues} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsSqsQueuesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsSqsQueuesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_sqs_queues',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
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
    this._queueNamePrefix = config.queueNamePrefix;
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

  // queue_name_prefix - computed: false, optional: true, required: false
  private _queueNamePrefix?: string; 
  public get queueNamePrefix() {
    return this.getStringAttribute('queue_name_prefix');
  }
  public set queueNamePrefix(value: string) {
    this._queueNamePrefix = value;
  }
  public resetQueueNamePrefix() {
    this._queueNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueNamePrefixInput() {
    return this._queueNamePrefix;
  }

  // queue_urls - computed: true, optional: false, required: false
  public get queueUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('queue_urls'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      queue_name_prefix: cdktf.stringToTerraform(this._queueNamePrefix),
    };
  }
}
