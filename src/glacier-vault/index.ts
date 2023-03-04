// https://www.terraform.io/docs/providers/aws/r/glacier_vault
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlacierVaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault#access_policy GlacierVault#access_policy}
  */
  readonly accessPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault#id GlacierVault#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault#name GlacierVault#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault#tags GlacierVault#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault#tags_all GlacierVault#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * notification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault#notification GlacierVault#notification}
  */
  readonly notification?: GlacierVaultNotification;
}
export interface GlacierVaultNotification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault#events GlacierVault#events}
  */
  readonly events: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault#sns_topic GlacierVault#sns_topic}
  */
  readonly snsTopic: string;
}

export function glacierVaultNotificationToTerraform(struct?: GlacierVaultNotificationOutputReference | GlacierVaultNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.events),
    sns_topic: cdktf.stringToTerraform(struct!.snsTopic),
  }
}

export class GlacierVaultNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlacierVaultNotification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._events !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events;
    }
    if (this._snsTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.snsTopic = this._snsTopic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlacierVaultNotification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._events = undefined;
      this._snsTopic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._events = value.events;
      this._snsTopic = value.snsTopic;
    }
  }

  // events - computed: false, optional: false, required: true
  private _events?: string[]; 
  public get events() {
    return cdktf.Fn.tolist(this.getListAttribute('events'));
  }
  public set events(value: string[]) {
    this._events = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // sns_topic - computed: false, optional: false, required: true
  private _snsTopic?: string; 
  public get snsTopic() {
    return this.getStringAttribute('sns_topic');
  }
  public set snsTopic(value: string) {
    this._snsTopic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snsTopicInput() {
    return this._snsTopic;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault aws_glacier_vault}
*/
export class GlacierVault extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_glacier_vault";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault aws_glacier_vault} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlacierVaultConfig
  */
  public constructor(scope: Construct, id: string, config: GlacierVaultConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glacier_vault',
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
    this._accessPolicy = config.accessPolicy;
    this._id = config.id;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._notification.internalValue = config.notification;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policy - computed: false, optional: true, required: false
  private _accessPolicy?: string; 
  public get accessPolicy() {
    return this.getStringAttribute('access_policy');
  }
  public set accessPolicy(value: string) {
    this._accessPolicy = value;
  }
  public resetAccessPolicy() {
    this._accessPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPolicyInput() {
    return this._accessPolicy;
  }

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

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // notification - computed: false, optional: true, required: false
  private _notification = new GlacierVaultNotificationOutputReference(this, "notification");
  public get notification() {
    return this._notification;
  }
  public putNotification(value: GlacierVaultNotification) {
    this._notification.internalValue = value;
  }
  public resetNotification() {
    this._notification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_policy: cdktf.stringToTerraform(this._accessPolicy),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      notification: glacierVaultNotificationToTerraform(this._notification.internalValue),
    };
  }
}
