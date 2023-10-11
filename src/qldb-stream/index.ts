// https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/qldb_stream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QldbStreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/qldb_stream#exclusive_end_time QldbStream#exclusive_end_time}
  */
  readonly exclusiveEndTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/qldb_stream#id QldbStream#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/qldb_stream#inclusive_start_time QldbStream#inclusive_start_time}
  */
  readonly inclusiveStartTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/qldb_stream#ledger_name QldbStream#ledger_name}
  */
  readonly ledgerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/qldb_stream#role_arn QldbStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/qldb_stream#stream_name QldbStream#stream_name}
  */
  readonly streamName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/qldb_stream#tags QldbStream#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/qldb_stream#tags_all QldbStream#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * kinesis_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/qldb_stream#kinesis_configuration QldbStream#kinesis_configuration}
  */
  readonly kinesisConfiguration: QldbStreamKinesisConfiguration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/qldb_stream#timeouts QldbStream#timeouts}
  */
  readonly timeouts?: QldbStreamTimeouts;
}
export interface QldbStreamKinesisConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/qldb_stream#aggregation_enabled QldbStream#aggregation_enabled}
  */
  readonly aggregationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/qldb_stream#stream_arn QldbStream#stream_arn}
  */
  readonly streamArn: string;
}

export function qldbStreamKinesisConfigurationToTerraform(struct?: QldbStreamKinesisConfigurationOutputReference | QldbStreamKinesisConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation_enabled: cdktf.booleanToTerraform(struct!.aggregationEnabled),
    stream_arn: cdktf.stringToTerraform(struct!.streamArn),
  }
}

export class QldbStreamKinesisConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QldbStreamKinesisConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationEnabled = this._aggregationEnabled;
    }
    if (this._streamArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamArn = this._streamArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QldbStreamKinesisConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregationEnabled = undefined;
      this._streamArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregationEnabled = value.aggregationEnabled;
      this._streamArn = value.streamArn;
    }
  }

  // aggregation_enabled - computed: false, optional: true, required: false
  private _aggregationEnabled?: boolean | cdktf.IResolvable; 
  public get aggregationEnabled() {
    return this.getBooleanAttribute('aggregation_enabled');
  }
  public set aggregationEnabled(value: boolean | cdktf.IResolvable) {
    this._aggregationEnabled = value;
  }
  public resetAggregationEnabled() {
    this._aggregationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationEnabledInput() {
    return this._aggregationEnabled;
  }

  // stream_arn - computed: false, optional: false, required: true
  private _streamArn?: string; 
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }
  public set streamArn(value: string) {
    this._streamArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamArnInput() {
    return this._streamArn;
  }
}
export interface QldbStreamTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/qldb_stream#create QldbStream#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/qldb_stream#delete QldbStream#delete}
  */
  readonly delete?: string;
}

export function qldbStreamTimeoutsToTerraform(struct?: QldbStreamTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class QldbStreamTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QldbStreamTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QldbStreamTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/qldb_stream aws_qldb_stream}
*/
export class QldbStream extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_qldb_stream";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/qldb_stream aws_qldb_stream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QldbStreamConfig
  */
  public constructor(scope: Construct, id: string, config: QldbStreamConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_qldb_stream',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.20.1',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._exclusiveEndTime = config.exclusiveEndTime;
    this._id = config.id;
    this._inclusiveStartTime = config.inclusiveStartTime;
    this._ledgerName = config.ledgerName;
    this._roleArn = config.roleArn;
    this._streamName = config.streamName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._kinesisConfiguration.internalValue = config.kinesisConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // exclusive_end_time - computed: false, optional: true, required: false
  private _exclusiveEndTime?: string; 
  public get exclusiveEndTime() {
    return this.getStringAttribute('exclusive_end_time');
  }
  public set exclusiveEndTime(value: string) {
    this._exclusiveEndTime = value;
  }
  public resetExclusiveEndTime() {
    this._exclusiveEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusiveEndTimeInput() {
    return this._exclusiveEndTime;
  }

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

  // inclusive_start_time - computed: false, optional: false, required: true
  private _inclusiveStartTime?: string; 
  public get inclusiveStartTime() {
    return this.getStringAttribute('inclusive_start_time');
  }
  public set inclusiveStartTime(value: string) {
    this._inclusiveStartTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusiveStartTimeInput() {
    return this._inclusiveStartTime;
  }

  // ledger_name - computed: false, optional: false, required: true
  private _ledgerName?: string; 
  public get ledgerName() {
    return this.getStringAttribute('ledger_name');
  }
  public set ledgerName(value: string) {
    this._ledgerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ledgerNameInput() {
    return this._ledgerName;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // stream_name - computed: false, optional: false, required: true
  private _streamName?: string; 
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
  public set streamName(value: string) {
    this._streamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNameInput() {
    return this._streamName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // kinesis_configuration - computed: false, optional: false, required: true
  private _kinesisConfiguration = new QldbStreamKinesisConfigurationOutputReference(this, "kinesis_configuration");
  public get kinesisConfiguration() {
    return this._kinesisConfiguration;
  }
  public putKinesisConfiguration(value: QldbStreamKinesisConfiguration) {
    this._kinesisConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisConfigurationInput() {
    return this._kinesisConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new QldbStreamTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: QldbStreamTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      exclusive_end_time: cdktf.stringToTerraform(this._exclusiveEndTime),
      id: cdktf.stringToTerraform(this._id),
      inclusive_start_time: cdktf.stringToTerraform(this._inclusiveStartTime),
      ledger_name: cdktf.stringToTerraform(this._ledgerName),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      stream_name: cdktf.stringToTerraform(this._streamName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      kinesis_configuration: qldbStreamKinesisConfigurationToTerraform(this._kinesisConfiguration.internalValue),
      timeouts: qldbStreamTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
