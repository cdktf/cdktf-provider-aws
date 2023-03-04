// https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcNetworkPerformanceMetricSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription#destination VpcNetworkPerformanceMetricSubscription#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription#id VpcNetworkPerformanceMetricSubscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription#metric VpcNetworkPerformanceMetricSubscription#metric}
  */
  readonly metric?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription#source VpcNetworkPerformanceMetricSubscription#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription#statistic VpcNetworkPerformanceMetricSubscription#statistic}
  */
  readonly statistic?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription aws_vpc_network_performance_metric_subscription}
*/
export class VpcNetworkPerformanceMetricSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_vpc_network_performance_metric_subscription";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_network_performance_metric_subscription aws_vpc_network_performance_metric_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcNetworkPerformanceMetricSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: VpcNetworkPerformanceMetricSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_network_performance_metric_subscription',
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
    this._destination = config.destination;
    this._id = config.id;
    this._metric = config.metric;
    this._source = config.source;
    this._statistic = config.statistic;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
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

  // metric - computed: false, optional: true, required: false
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getStringAttribute('period');
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // statistic - computed: false, optional: true, required: false
  private _statistic?: string; 
  public get statistic() {
    return this.getStringAttribute('statistic');
  }
  public set statistic(value: string) {
    this._statistic = value;
  }
  public resetStatistic() {
    this._statistic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticInput() {
    return this._statistic;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination: cdktf.stringToTerraform(this._destination),
      id: cdktf.stringToTerraform(this._id),
      metric: cdktf.stringToTerraform(this._metric),
      source: cdktf.stringToTerraform(this._source),
      statistic: cdktf.stringToTerraform(this._statistic),
    };
  }
}
