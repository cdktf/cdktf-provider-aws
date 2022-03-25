// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Connect
*/
export interface ConnectRoutingProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#default_outbound_queue_id ConnectRoutingProfile#default_outbound_queue_id}
  */
  readonly defaultOutboundQueueId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#description ConnectRoutingProfile#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#instance_id ConnectRoutingProfile#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#name ConnectRoutingProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#tags ConnectRoutingProfile#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#tags_all ConnectRoutingProfile#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * media_concurrencies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#media_concurrencies ConnectRoutingProfile#media_concurrencies}
  */
  readonly mediaConcurrencies: ConnectRoutingProfileMediaConcurrencies[] | cdktf.IResolvable;
  /**
  * queue_configs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#queue_configs ConnectRoutingProfile#queue_configs}
  */
  readonly queueConfigs?: ConnectRoutingProfileQueueConfigs[] | cdktf.IResolvable;
}
export class ConnectRoutingProfileQueueConfigsAssociated extends cdktf.ComplexComputedList {

  // channel - computed: true, optional: false, required: false
  public get channel() {
    return this.getStringAttribute('channel');
  }

  // delay - computed: true, optional: false, required: false
  public get delay() {
    return this.getNumberAttribute('delay');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // queue_arn - computed: true, optional: false, required: false
  public get queueArn() {
    return this.getStringAttribute('queue_arn');
  }

  // queue_id - computed: true, optional: false, required: false
  public get queueId() {
    return this.getStringAttribute('queue_id');
  }

  // queue_name - computed: true, optional: false, required: false
  public get queueName() {
    return this.getStringAttribute('queue_name');
  }
}
export interface ConnectRoutingProfileMediaConcurrencies {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#channel ConnectRoutingProfile#channel}
  */
  readonly channel: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#concurrency ConnectRoutingProfile#concurrency}
  */
  readonly concurrency: number;
}

export function connectRoutingProfileMediaConcurrenciesToTerraform(struct?: ConnectRoutingProfileMediaConcurrencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
    concurrency: cdktf.numberToTerraform(struct!.concurrency),
  }
}

export interface ConnectRoutingProfileQueueConfigs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#channel ConnectRoutingProfile#channel}
  */
  readonly channel: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#delay ConnectRoutingProfile#delay}
  */
  readonly delay: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#priority ConnectRoutingProfile#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile#queue_id ConnectRoutingProfile#queue_id}
  */
  readonly queueId: string;
}

export function connectRoutingProfileQueueConfigsToTerraform(struct?: ConnectRoutingProfileQueueConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
    delay: cdktf.numberToTerraform(struct!.delay),
    priority: cdktf.numberToTerraform(struct!.priority),
    queue_id: cdktf.stringToTerraform(struct!.queueId),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile aws_connect_routing_profile}
*/
export class ConnectRoutingProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_connect_routing_profile";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/connect_routing_profile aws_connect_routing_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectRoutingProfileConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectRoutingProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_connect_routing_profile',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._defaultOutboundQueueId = config.defaultOutboundQueueId;
    this._description = config.description;
    this._instanceId = config.instanceId;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._mediaConcurrencies = config.mediaConcurrencies;
    this._queueConfigs = config.queueConfigs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // default_outbound_queue_id - computed: false, optional: false, required: true
  private _defaultOutboundQueueId?: string; 
  public get defaultOutboundQueueId() {
    return this.getStringAttribute('default_outbound_queue_id');
  }
  public set defaultOutboundQueueId(value: string) {
    this._defaultOutboundQueueId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOutboundQueueIdInput() {
    return this._defaultOutboundQueueId;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // queue_configs_associated - computed: true, optional: false, required: false
  public queueConfigsAssociated(index: string) {
    return new ConnectRoutingProfileQueueConfigsAssociated(this, 'queue_configs_associated', index, true);
  }

  // routing_profile_id - computed: true, optional: false, required: false
  public get routingProfileId() {
    return this.getStringAttribute('routing_profile_id');
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

  // media_concurrencies - computed: false, optional: false, required: true
  private _mediaConcurrencies?: ConnectRoutingProfileMediaConcurrencies[] | cdktf.IResolvable; 
  public get mediaConcurrencies() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('media_concurrencies')));
  }
  public set mediaConcurrencies(value: ConnectRoutingProfileMediaConcurrencies[] | cdktf.IResolvable) {
    this._mediaConcurrencies = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaConcurrenciesInput() {
    return this._mediaConcurrencies;
  }

  // queue_configs - computed: false, optional: true, required: false
  private _queueConfigs?: ConnectRoutingProfileQueueConfigs[] | cdktf.IResolvable; 
  public get queueConfigs() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('queue_configs')));
  }
  public set queueConfigs(value: ConnectRoutingProfileQueueConfigs[] | cdktf.IResolvable) {
    this._queueConfigs = value;
  }
  public resetQueueConfigs() {
    this._queueConfigs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueConfigsInput() {
    return this._queueConfigs;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_outbound_queue_id: cdktf.stringToTerraform(this._defaultOutboundQueueId),
      description: cdktf.stringToTerraform(this._description),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      media_concurrencies: cdktf.listMapper(connectRoutingProfileMediaConcurrenciesToTerraform)(this._mediaConcurrencies),
      queue_configs: cdktf.listMapper(connectRoutingProfileQueueConfigsToTerraform)(this._queueConfigs),
    };
  }
}
