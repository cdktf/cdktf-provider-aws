// https://www.terraform.io/docs/providers/aws/r/ivschat_room
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IvschatRoomConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#id IvschatRoom#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#logging_configuration_identifiers IvschatRoom#logging_configuration_identifiers}
  */
  readonly loggingConfigurationIdentifiers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#maximum_message_length IvschatRoom#maximum_message_length}
  */
  readonly maximumMessageLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#maximum_message_rate_per_second IvschatRoom#maximum_message_rate_per_second}
  */
  readonly maximumMessageRatePerSecond?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#name IvschatRoom#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#tags IvschatRoom#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#tags_all IvschatRoom#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * message_review_handler block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#message_review_handler IvschatRoom#message_review_handler}
  */
  readonly messageReviewHandler?: IvschatRoomMessageReviewHandler;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#timeouts IvschatRoom#timeouts}
  */
  readonly timeouts?: IvschatRoomTimeouts;
}
export interface IvschatRoomMessageReviewHandler {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#fallback_result IvschatRoom#fallback_result}
  */
  readonly fallbackResult?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#uri IvschatRoom#uri}
  */
  readonly uri?: string;
}

export function ivschatRoomMessageReviewHandlerToTerraform(struct?: IvschatRoomMessageReviewHandlerOutputReference | IvschatRoomMessageReviewHandler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fallback_result: cdktf.stringToTerraform(struct!.fallbackResult),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}

export class IvschatRoomMessageReviewHandlerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IvschatRoomMessageReviewHandler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackResult !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackResult = this._fallbackResult;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IvschatRoomMessageReviewHandler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fallbackResult = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fallbackResult = value.fallbackResult;
      this._uri = value.uri;
    }
  }

  // fallback_result - computed: true, optional: true, required: false
  private _fallbackResult?: string; 
  public get fallbackResult() {
    return this.getStringAttribute('fallback_result');
  }
  public set fallbackResult(value: string) {
    this._fallbackResult = value;
  }
  public resetFallbackResult() {
    this._fallbackResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackResultInput() {
    return this._fallbackResult;
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface IvschatRoomTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#create IvschatRoom#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#delete IvschatRoom#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#update IvschatRoom#update}
  */
  readonly update?: string;
}

export function ivschatRoomTimeoutsToTerraform(struct?: IvschatRoomTimeoutsOutputReference | IvschatRoomTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class IvschatRoomTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IvschatRoomTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IvschatRoomTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room aws_ivschat_room}
*/
export class IvschatRoom extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ivschat_room";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room aws_ivschat_room} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IvschatRoomConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IvschatRoomConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ivschat_room',
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
    this._loggingConfigurationIdentifiers = config.loggingConfigurationIdentifiers;
    this._maximumMessageLength = config.maximumMessageLength;
    this._maximumMessageRatePerSecond = config.maximumMessageRatePerSecond;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._messageReviewHandler.internalValue = config.messageReviewHandler;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // logging_configuration_identifiers - computed: false, optional: true, required: false
  private _loggingConfigurationIdentifiers?: string[]; 
  public get loggingConfigurationIdentifiers() {
    return this.getListAttribute('logging_configuration_identifiers');
  }
  public set loggingConfigurationIdentifiers(value: string[]) {
    this._loggingConfigurationIdentifiers = value;
  }
  public resetLoggingConfigurationIdentifiers() {
    this._loggingConfigurationIdentifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigurationIdentifiersInput() {
    return this._loggingConfigurationIdentifiers;
  }

  // maximum_message_length - computed: true, optional: true, required: false
  private _maximumMessageLength?: number; 
  public get maximumMessageLength() {
    return this.getNumberAttribute('maximum_message_length');
  }
  public set maximumMessageLength(value: number) {
    this._maximumMessageLength = value;
  }
  public resetMaximumMessageLength() {
    this._maximumMessageLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumMessageLengthInput() {
    return this._maximumMessageLength;
  }

  // maximum_message_rate_per_second - computed: true, optional: true, required: false
  private _maximumMessageRatePerSecond?: number; 
  public get maximumMessageRatePerSecond() {
    return this.getNumberAttribute('maximum_message_rate_per_second');
  }
  public set maximumMessageRatePerSecond(value: number) {
    this._maximumMessageRatePerSecond = value;
  }
  public resetMaximumMessageRatePerSecond() {
    this._maximumMessageRatePerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumMessageRatePerSecondInput() {
    return this._maximumMessageRatePerSecond;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // message_review_handler - computed: false, optional: true, required: false
  private _messageReviewHandler = new IvschatRoomMessageReviewHandlerOutputReference(this, "message_review_handler");
  public get messageReviewHandler() {
    return this._messageReviewHandler;
  }
  public putMessageReviewHandler(value: IvschatRoomMessageReviewHandler) {
    this._messageReviewHandler.internalValue = value;
  }
  public resetMessageReviewHandler() {
    this._messageReviewHandler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageReviewHandlerInput() {
    return this._messageReviewHandler.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IvschatRoomTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IvschatRoomTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      logging_configuration_identifiers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._loggingConfigurationIdentifiers),
      maximum_message_length: cdktf.numberToTerraform(this._maximumMessageLength),
      maximum_message_rate_per_second: cdktf.numberToTerraform(this._maximumMessageRatePerSecond),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      message_review_handler: ivschatRoomMessageReviewHandlerToTerraform(this._messageReviewHandler.internalValue),
      timeouts: ivschatRoomTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
